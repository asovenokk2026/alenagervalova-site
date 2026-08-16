// Общие данные для всех статей в content/blog/
module.exports = {
  layout: "layouts/post.njk",
  tags: ["post"],
  author: "Алена Гервалова",
  ogType: "article",
  includeBlogCss: true,
  isBlog: true,
  eleventyComputed: {
    permalink: (data) => {
      if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") return false;
      const slug = data.slug || data.page.fileSlug;
      return `/blog/${slug}/`;
    },
    eleventyExcludeFromCollections: (data) =>
      !!data.draft && process.env.ELEVENTY_RUN_MODE === "build",
    // Title / description для <head>
    seoTitle: (data) => data.seoTitle || `${data.title} — Алена Гервалова, психолог`,
    seoDescription: (data) => data.seoDescription || data.description,
    // JSON-LD: BlogPosting + BreadcrumbList (+ FAQPage) в одном @graph
    jsonld: (data) => {
      const site = data.site;
      const abs = (u) => (!u ? site.url + "/" : /^https?:/.test(u) ? u : site.url + (u.startsWith("/") ? u : "/" + u));
      const url = abs(data.page.url);
      const cat = (data.categories || []).find((c) => c.slug === data.category);
      const iso = (d) => (d ? new Date(d).toISOString() : undefined);
      const person = {
        "@type": "Person",
        "@id": site.url + "/#person",
        name: data.author || site.author,
        jobTitle: site.authorJobTitle,
        url: site.url + "/",
      };
      const graph = [
        {
          "@type": "BlogPosting",
          "@id": url + "#article",
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          headline: data.title,
          description: data.description,
          image: data.image ? [abs(data.image)] : [abs(site.ogImage)],
          datePublished: iso(data.date),
          dateModified: iso(data.updated || data.date),
          author: person,
          publisher: {
            "@type": "Organization",
            "@id": site.url + "/#organization",
            name: site.shortName,
            url: site.url + "/",
            logo: { "@type": "ImageObject", url: site.url + "/favicon-192.png" },
          },
          inLanguage: "ru-RU",
          isPartOf: { "@type": "Blog", "@id": site.url + "/blog/#blog", name: site.blog.title },
          ...(cat ? { articleSection: cat.name } : {}),
        },
        {
          "@type": "BreadcrumbList",
          "@id": url + "#breadcrumbs",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: site.url + "/" },
            { "@type": "ListItem", position: 2, name: "Блог", item: site.url + "/blog/" },
            ...(cat
              ? [{ "@type": "ListItem", position: 3, name: cat.name, item: `${site.url}/blog/kategoriya/${cat.slug}/` }]
              : []),
            { "@type": "ListItem", position: cat ? 4 : 3, name: data.title, item: url },
          ],
        },
      ];
      if (Array.isArray(data.faq) && data.faq.length) {
        graph.push({
          "@type": "FAQPage",
          "@id": url + "#faq",
          mainEntity: data.faq
            .filter((f) => f && f.question && f.answer)
            .map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: String(f.answer).replace(/\s+/g, " ").trim() },
            })),
        });
      }
      return { "@context": "https://schema.org", "@graph": graph };
    },
  },
};
