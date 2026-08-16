const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const fs = require("fs");
const path = require("path");

const site = require("./_data/site.json");
const categories = require("./_data/categories.json");

const RU_MONTHS = [
  "января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря",
];

const TRANSLIT = {
  а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"e",ж:"zh",з:"z",и:"i",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",
  п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"h",ц:"c",ч:"ch",ш:"sh",щ:"sch",ъ:"",ы:"y",ь:"",э:"e",ю:"yu",я:"ya",
};
function translit(str) {
  return String(str || "")
    .toLowerCase()
    .split("")
    .map((ch) => (TRANSLIT[ch] !== undefined ? TRANSLIT[ch] : ch))
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "section";
}

function toDate(value) {
  if (!value) return null;
  const d = value instanceof Date ? value : new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

module.exports = function (eleventyConfig) {
  /* ---------- Markdown ---------- */
  const md = markdownIt({ html: true, breaks: false, linkify: true, typographer: true })
    .use(markdownItAnchor, {
      level: [2, 3],
      slugify: translit,
      permalink: false,
    });
  // Русская типографика для «ёлочек» и тире
  md.set({ quotes: "«»„“" });
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("markdown", (str) => (str ? md.render(String(str)) : ""));
  eleventyConfig.addFilter("markdownInline", (str) => (str ? md.renderInline(String(str)) : ""));

  /* ---------- Static files: копируются как есть ---------- */
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy({ "_includes/css/main.css": "css/main.css" });
  eleventyConfig.addPassthroughCopy({ "_includes/css/blog.css": "css/blog.css" });
  eleventyConfig.addPassthroughCopy({
    "favicon.ico": "favicon.ico",
    "favicon.svg": "favicon.svg",
    "favicon-32.png": "favicon-32.png",
    "favicon-192.png": "favicon-192.png",
    "apple-touch-icon.png": "apple-touch-icon.png",
  });
  eleventyConfig.addWatchTarget("_includes/css/");

  /* ---------- Что НЕ является шаблоном ---------- */
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("DEPLOY.md");
  eleventyConfig.ignores.add("admin/**");
  eleventyConfig.ignores.add("images/**");
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add("_site/**");

  /* ---------- Коллекция статей ---------- */
  const isDev = process.env.ELEVENTY_RUN_MODE !== "build";
  eleventyConfig.addGlobalData("isDev", isDev);
  eleventyConfig.addGlobalData("buildDate", new Date());

  eleventyConfig.addCollection("posts", (api) =>
    api
      .getFilteredByGlob("content/blog/**/*.md")
      .filter((p) => !p.data.draft || isDev)
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("categoriesWithPosts", (api) => {
    const posts = api
      .getFilteredByGlob("content/blog/**/*.md")
      .filter((p) => !p.data.draft || isDev)
      .sort((a, b) => b.date - a.date);
    return categories
      .map((c) => ({ ...c, posts: posts.filter((p) => p.data.category === c.slug) }))
      .filter((c) => c.posts.length > 0);
  });

  /* ---------- Фильтры ---------- */
  eleventyConfig.addFilter("ruDate", (value) => {
    const d = toDate(value);
    if (!d) return "";
    return `${d.getUTCDate()} ${RU_MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  });
  eleventyConfig.addFilter("isoDate", (value) => {
    const d = toDate(value);
    return d ? d.toISOString() : "";
  });
  eleventyConfig.addFilter("isoDay", (value) => {
    const d = toDate(value);
    return d ? d.toISOString().slice(0, 10) : "";
  });
  eleventyConfig.addFilter("categoryName", (slug) => {
    const c = categories.find((x) => x.slug === slug);
    return c ? c.name : slug || "";
  });
  eleventyConfig.addFilter("absoluteUrl", (u) => {
    if (!u) return site.url + "/";
    if (/^https?:\/\//.test(u)) return u;
    return site.url + (u.startsWith("/") ? u : "/" + u);
  });
  eleventyConfig.addFilter("readingTime", (html) => {
    const words = String(html || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 180));
  });
  eleventyConfig.addFilter("stripHtml", (html) => String(html || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
  eleventyConfig.addFilter("jsonld", (obj) =>
    JSON.stringify(obj, null, 0).replace(/</g, "\\u003c")
  );
  eleventyConfig.addFilter("translit", translit);
  eleventyConfig.addFilter("pluralRu", (n, one, few, many) => {
    n = Math.abs(Number(n)) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return many;
    if (n1 > 1 && n1 < 5) return few;
    if (n1 === 1) return one;
    return many;
  });
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("related", (posts, currentUrl, currentCategory, n = 3) => {
    const others = (posts || []).filter((p) => p.url !== currentUrl);
    const same = others.filter((p) => p.data.category === currentCategory);
    const rest = others.filter((p) => p.data.category !== currentCategory);
    return [...same, ...rest].slice(0, n);
  });
  eleventyConfig.addFilter("truncate", (str, n = 160) => {
    str = String(str || "");
    return str.length <= n ? str : str.slice(0, n - 1).replace(/\s+\S*$/, "") + "…";
  });

  return {
    dir: { input: ".", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
};
