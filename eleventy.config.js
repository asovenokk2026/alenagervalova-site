/* ===== BLOG (общие) ===== */
.blog-bg {
  background: #fff;
}
.blog-hero {
  padding: 56px 120px 24px;
  max-width: 1440px;
  margin: 0 auto;
}
.crumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #7a8b9e;
  list-style: none;
}
.crumbs li {
  display: flex;
  align-items: center;
  gap: 8px;
}
.crumbs li + li::before {
  content: "›";
  color: #bcd8ee;
}
.crumbs a {
  color: #5a6b80;
  transition: color 0.2s;
}
.crumbs a:hover {
  color: #2f86c9;
}
.crumbs [aria-current] {
  color: #1a2744;
}
.blog-cats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 28px;
}
.blog-cats a {
  display: inline-flex;
  align-items: center;
  padding: 8px 18px;
  border-radius: 20px;
  border: 1px solid #bcd8ee;
  background: #e9f2fb;
  color: #5a6b80;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s;
}
.blog-cats a:hover {
  border-color: #2f86c9;
  color: #1a2744;
}
.blog-cats a.active {
  background: #2f86c9;
  border-color: #2f86c9;
  color: #fff;
}
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}
.blog-grid .article-card {
  flex: none;
}
.article-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  font-size: 12px;
  color: #7a8b9e;
}
.article-meta .cat {
  color: #2f86c9;
  font-weight: 500;
}
.article-body h3 a {
  color: inherit;
}
.article-body h3 a::after {
  content: "";
  position: absolute;
  inset: 0;
}
.article-card {
  position: relative;
}
.blog-empty {
  text-align: center;
  color: #7a8b9e;
  padding: 48px 0;
  font-size: 16px;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
  list-style: none;
}
.pagination a,
.pagination span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid #bcd8ee;
  background: #e9f2fb;
  color: #1a2744;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}
.pagination a:hover {
  border-color: #2f86c9;
  color: #2f86c9;
}
.pagination .current {
  background: #2f86c9;
  border-color: #2f86c9;
  color: #fff;
}
.pagination .disabled {
  opacity: 0.4;
  pointer-events: none;
}

/* ===== POST ===== */
.post {
  max-width: 760px;
  margin: 0 auto;
  padding: 48px 20px 80px;
}
.post-head {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.post-head .crumbs {
  margin-bottom: 4px;
}
.post-title {
  font-family: "Fraunces", serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -1px;
  color: #1a2744;
}
.post-lead {
  font-size: 19px;
  line-height: 1.6;
  color: #5a6b80;
}
.post-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 18px;
  font-size: 14px;
  color: #7a8b9e;
}
.post-meta .author {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #1a2744;
  font-weight: 500;
}
.post-meta .avatar {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: #2f86c9;
  color: #fff;
  font-family: "Fraunces", serif;
  font-size: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.post-meta .cat {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 14px;
  background: rgba(47, 134, 201, 0.094);
  color: #2f86c9;
  font-size: 12px;
  font-weight: 500;
}
.post-cover {
  width: 100%;
  aspect-ratio: 21 / 9;
  object-fit: cover;
  border-radius: 20px;
  margin: 32px 0 8px;
  border: 1px solid #bcd8ee;
}
.post-cover-cap {
  font-size: 13px;
  color: #7a8b9e;
  text-align: center;
  margin-bottom: 8px;
}
.post-body {
  margin-top: 32px;
  font-size: 17px;
  line-height: 1.75;
  color: #1a2744;
}
.post-body > * + * {
  margin-top: 1.1em;
}
.post-body h2,
.post-body h3,
.post-body h4 {
  font-family: "Fraunces", serif;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 1.25;
  color: #1a2744;
  scroll-margin-top: 90px;
}
.post-body h2 {
  font-size: 30px;
  margin-top: 1.8em;
}
.post-body h3 {
  font-size: 23px;
  margin-top: 1.5em;
}
.post-body h4 {
  font-size: 19px;
  margin-top: 1.3em;
}
.post-body p {
  color: #2b3a52;
}
.post-body a {
  color: #2f86c9;
  text-decoration: underline;
  text-decoration-color: #bcd8ee;
  text-underline-offset: 3px;
}
.post-body a:hover {
  text-decoration-color: #2f86c9;
}
.post-body ul,
.post-body ol {
  padding-left: 1.4em;
  color: #2b3a52;
}
.post-body li + li {
  margin-top: 0.4em;
}
.post-body li::marker {
  color: #2f86c9;
}
.post-body blockquote {
  padding: 20px 24px;
  border-left: 3px solid #2f86c9;
  background: #e9f2fb;
  border-radius: 0 16px 16px 0;
  font-family: "Fraunces", serif;
  font-size: 20px;
  font-style: italic;
  color: #1f6aa8;
}
.post-body img {
  border-radius: 16px;
  border: 1px solid #bcd8ee;
  margin: 8px auto;
}
.post-body hr {
  border: none;
  height: 1px;
  background: #bcd8ee;
  margin: 2.5em 0;
}
.post-body table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}
.post-body th,
.post-body td {
  padding: 10px 12px;
  border: 1px solid #bcd8ee;
  text-align: left;
  vertical-align: top;
}
.post-body th {
  background: #e9f2fb;
  font-weight: 600;
}
.post-body code {
  font-size: 0.9em;
  background: #e9f2fb;
  padding: 2px 6px;
  border-radius: 6px;
}
.post-updated {
  margin-top: 40px;
  font-size: 13px;
  color: #7a8b9e;
}

/* CTA внутри статьи */
.post-cta {
  margin-top: 48px;
  padding: 36px 32px;
  background: #1a2744;
  border-radius: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.post-cta h2 {
  font-family: "Fraunces", serif;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #fff;
}
.post-cta p {
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
}
.post-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.post-cta .btn-primary {
  padding: 14px 28px;
}
.post-cta .btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 22px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.25s;
}
.post-cta .btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
.post-cta .btn-ghost svg {
  width: 18px;
  height: 18px;
  stroke: #fff;
  fill: none;
  stroke-width: 2;
}

/* FAQ */
.post-faq {
  margin-top: 56px;
}
.post-faq h2 {
  font-family: "Fraunces", serif;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #1a2744;
  margin-bottom: 20px;
}
.faq-item {
  border: 1px solid #bcd8ee;
  border-radius: 16px;
  background: #e9f2fb;
  overflow: hidden;
}
.faq-item + .faq-item {
  margin-top: 12px;
}
.faq-item summary {
  list-style: none;
  cursor: pointer;
  padding: 18px 56px 18px 22px;
  font-size: 17px;
  font-weight: 500;
  color: #1a2744;
  position: relative;
  line-height: 1.4;
}
.faq-item summary::-webkit-details-marker {
  display: none;
}
.faq-item summary::after {
  content: "+";
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background: rgba(47, 134, 201, 0.12);
  color: #2f86c9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1;
  transition: transform 0.25s;
}
.faq-item[open] summary::after {
  transform: translateY(-50%) rotate(45deg);
}
.faq-answer {
  padding: 0 22px 20px;
  font-size: 16px;
  line-height: 1.7;
  color: #2b3a52;
}
.faq-answer > * + * {
  margin-top: 0.8em;
}

/* Читайте также */
.post-related {
  background: #e9f2fb;
  padding: 64px 120px 80px;
}
.post-related-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.post-related .section-title {
  font-size: 30px;
}
.post-related .article-card {
  background: #fff;
}
.post-related .articles-grid {
  margin-top: 32px;
}
.post-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #2f86c9;
}
.post-back:hover {
  text-decoration: underline;
}

/* 404 */
.nf {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  padding: 80px 20px;
}
.nf-code {
  font-family: "Fraunces", serif;
  font-size: 96px;
  line-height: 1;
  color: #2f86c9;
  letter-spacing: -3px;
}
.nf h1 {
  font-family: "Fraunces", serif;
  font-size: 32px;
  font-weight: 400;
  color: #1a2744;
}
.nf p {
  color: #5a6b80;
  font-size: 16px;
  max-width: 480px;
}
.nf-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

@media (max-width: 1024px) {
  .blog-hero {
    padding: 48px 40px 16px;
  }
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .post-related {
    padding: 56px 40px 64px;
  }
}
@media (max-width: 768px) {
  .blog-hero {
    padding: 32px 20px 8px;
  }
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 28px;
  }
  .post {
    padding: 28px 20px 56px;
  }
  .post-title {
    font-size: 30px;
  }
  .post-lead {
    font-size: 16px;
  }
  .post-cover {
    border-radius: 16px;
    margin-top: 24px;
  }
  .post-body {
    font-size: 16px;
  }
  .post-body h2 {
    font-size: 24px;
  }
  .post-body h3 {
    font-size: 20px;
  }
  .post-cta {
    padding: 28px 22px;
    border-radius: 20px;
  }
  .post-cta h2 {
    font-size: 23px;
  }
  .post-cta .btn-primary,
  .post-cta .btn-ghost {
    width: 100%;
    justify-content: center;
  }
  .post-faq h2 {
    font-size: 24px;
  }
  .post-related {
    padding: 48px 20px;
  }
  .post-related .articles-grid {
    flex-direction: column;
  }
  .nf-code {
    font-size: 72px;
  }
}


/* ===== Врезка в середине статьи ===== */
.post-inline-cta {
  margin: 36px 0;
  padding: 22px 24px;
  background: #e9f2fb;
  border-left: 3px solid #2f86c9;
  border-radius: 0 16px 16px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.post-inline-cta-text {
  font-size: 16px;
  line-height: 1.6;
  color: #1a2744;
  margin: 0;
}
.post-inline-cta-text strong {
  font-weight: 600;
}
.post-inline-cta-link {
  align-self: flex-start;
  font-size: 15px;
  font-weight: 600;
  color: #2f86c9;
  transition: color 0.2s;
}
.post-inline-cta-link:hover {
  color: #1a6ba8;
}

/* ===== Факты о консультации в блоке записи ===== */
.post-cta-facts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
  margin-top: -6px;
}
.post-cta-fact {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.88);
}
.post-cta-fact svg {
  width: 17px;
  height: 17px;
  stroke: #8fc0e6;
  fill: none;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex-shrink: 0;
}

/* ===== Отзыв в блоке записи ===== */
.post-cta-review {
  margin: 4px 0 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}
.post-cta-review blockquote {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  margin: 0;
}
.post-cta-review figcaption {
  margin-top: 10px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}

/* ===== Блок об авторе ===== */
.post-author {
  margin-top: 56px;
  padding: 32px;
  background: #fff;
  border: 1px solid #bcd8ee;
  border-radius: 24px;
  display: flex;
  gap: 28px;
  align-items: flex-start;
}
.post-author-photo {
  width: 132px;
  height: 132px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid #e9f2fb;
}
.post-author-text {
  flex: 1;
}
.post-author-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #2f86c9;
  margin-bottom: 6px;
}
.post-author h2 {
  font-family: "Fraunces", serif;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.4px;
  color: #1a2744;
  margin: 0 0 10px;
}
.post-author p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5b70;
  margin: 0 0 18px;
}
.post-author-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
}
.post-author-actions .btn-primary {
  padding: 12px 24px;
  font-size: 15px;
}
.post-author-more {
  font-size: 15px;
  font-weight: 500;
  color: #2f86c9;
}
.post-author-more:hover {
  color: #1a6ba8;
}

/* ===== Липкая панель записи ===== */
.sticky-cta {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 20px;
  background: rgba(26, 39, 68, 0.97);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  animation: stickyUp 0.28s ease;
}
.sticky-cta[hidden] {
  display: none;
}
@keyframes stickyUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
.sticky-cta-text {
  display: flex;
  flex-direction: column;
  line-height: 1.35;
  min-width: 0;
}
.sticky-cta-text strong {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
}
.sticky-cta-text span {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
}
.sticky-cta-btn {
  flex-shrink: 0;
  padding: 12px 28px;
  border-radius: 28px;
  background: #2f86c9;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  transition: background 0.2s, transform 0.2s;
}
.sticky-cta-btn:hover {
  background: #1a6ba8;
  transform: translateY(-1px);
}

@media (max-width: 720px) {
  .post-inline-cta {
    padding: 18px 18px;
    margin: 28px 0;
  }
  .post-inline-cta-text {
    font-size: 15px;
  }
  .post-cta-facts {
    flex-direction: column;
    gap: 8px;
  }
  .post-author {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 28px 22px;
    gap: 18px;
  }
  .post-author-photo {
    width: 108px;
    height: 108px;
  }
  .post-author-actions {
    flex-direction: column;
    width: 100%;
  }
  .post-author-actions .btn-primary {
    width: 100%;
    justify-content: center;
  }
  .sticky-cta {
    padding: 10px 14px;
    gap: 10px;
  }
  .sticky-cta-text strong {
    font-size: 14px;
  }
  .sticky-cta-text span {
    font-size: 12px;
  }
  .sticky-cta-btn {
    padding: 11px 22px;
    font-size: 14px;
  }
}
