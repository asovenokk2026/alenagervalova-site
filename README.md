# alenagervalova.ru — сайт + SEO-блог

Статический сайт психолога Алены Герваловой. Генератор — [Eleventy 3](https://www.11ty.dev/), админ-панель — [Decap CMS](https://decapcms.org/). Весь контент отдаётся готовым HTML.

Инструкция по запуску и публикации: **DEPLOY.md**.

## Структура

```
index.njk                  главная (бывший index.html, дизайн сохранён 1:1; блок «Мой блог» — 3 последние статьи)
blog/index.njk             /blog/ — список статей с пагинацией и рубриками
blog/category.njk          /blog/kategoriya/<slug>/ — страницы рубрик
content/blog/*.md          статьи (Markdown + front matter) — их создаёт админка
content/blog/blog.11tydata.js  общие данные статей: URL, layout, JSON-LD (BlogPosting/Breadcrumb/FAQ)
_includes/layouts/base.njk каркас страницы: счётчики, <head>, шапка, подвал, модалка, скрипты
_includes/layouts/post.njk шаблон статьи
_includes/partials/        header, footer, modal, counters, post-card, pagination, category-chips
_includes/css/main.css     оригинальный CSS сайта (инлайнится во все страницы)
_includes/css/blog.css     стили блога
_data/site.json            адрес сайта, контакты, ID счётчиков, тексты блога
_data/categories.json      рубрики (дублируются в admin/config.yml)
admin/                     Decap CMS: index.html + config.yml
images/                    картинки сайта; images/blog/ — загрузки из админки
sitemap.njk → sitemap.xml  генерируется автоматически
404.njk → 404.html         страница 404
robots.txt, netlify.toml, vercel.json
```

## Команды

```bash
npm install
npm run dev     # локальный сервер http://localhost:8080
npm run cms     # локальный бэкенд Decap CMS для /admin/
npm run build   # сборка в _site/
```
