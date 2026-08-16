# Инструкция: GitHub → Netlify (или Vercel) → админ-панель блога

Время: ~40 минут. Понадобятся: аккаунт GitHub, аккаунт Netlify (или Vercel), доступ к DNS домена на reg.ru.

---

## Шаг 0. Картинки и фавиконки

Все картинки сайта (`hero.webp`, `vision.webp`, `cta.webp`, `article1–3.png`) уже лежат в `images/`. Осталось заменить заглушки фавиконок: скопируйте с хостинга (`/www/alenagervalova.ru/`) в корень проекта `favicon.ico`, `favicon.svg`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`. Файл `images/blog/placeholder.png` оставить — он показывается у статей без обложки.

## Шаг 1. Репозиторий на GitHub

1. Зайдите на https://github.com/new. Имя: `alenagervalova-site`, видимость **Private**, ничего не добавляйте (без README/.gitignore). Create repository.
2. Загрузите проект. Проще всего через GitHub Desktop или командную строку:

```bash
cd alenagervalova-site          # папка из архива
git init
git add .
git commit -m "Сайт + блог на Eleventy и Decap CMS"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/alenagervalova-site.git
git push -u origin main
```

Без git: на странице пустого репозитория → «uploading an existing file» → перетащить всё содержимое папки (кроме `node_modules` и `_site`) → Commit.

3. Откройте `admin/config.yml` и замените `GITHUB_USER/alenagervalova-site` на реальное `логин/репозиторий`.

## Шаг 2А. Netlify (рекомендую)

1. https://app.netlify.com → **Add new project → Import an existing project → GitHub** → выбрать `alenagervalova-site`.
2. Настройки сборки подхватятся из `netlify.toml` (команда `npm run build`, папка `_site`, Node 20). Нажать **Deploy**.
3. Через 1–2 минуты сайт откроется на адресе вида `https://something.netlify.app`. Проверьте `/`, `/blog/`, `/sitemap.xml`, `/404-test` (должна открыться наша страница 404).
4. Домен: **Domain management → Add a domain → alenagervalova.ru**. Netlify покажет DNS-записи. В reg.ru (DNS-серверы и управление зоной) поставьте:
   - `A` для `@` → `75.2.60.5` (актуальный IP покажет Netlify — берите его),
   - `CNAME` для `www` → `ваш-сайт.netlify.app`.
   Или проще: переключить NS домена на `dns1.p0X.nsone.net` (Netlify DNS — они дадут точные значения). Обновление DNS занимает от 15 минут до 24 часов.
5. **Domain management → HTTPS → Verify → Provision certificate** — Let's Encrypt подключится автоматически. Netlify сам делает редирект `http → https` и `www → без www` (primary domain = `alenagervalova.ru`).
6. Не удаляйте файлы на reg.ru, пока новый сайт не откроется по домену. После переезда старый хостинг можно отключить.

## Шаг 2Б. Vercel (альтернатива)

1. https://vercel.com/new → Import Git Repository → `alenagervalova-site`.
2. Framework Preset: **Other**. Build Command и Output Directory возьмутся из `vercel.json` (`npm run build`, `_site`). Deploy.
3. **Settings → Domains → Add** `alenagervalova.ru` и `www.alenagervalova.ru` (www → redirect на apex). DNS в reg.ru: `A @ → 76.76.21.21`, `CNAME www → cname.vercel-dns.com` (точные значения покажет Vercel).
4. 404 и trailing-slash работают из коробки (`404.html`, `trailingSlash: true` в `vercel.json`).

## Шаг 3. Авторизация в админке — DecapBridge

Netlify Identity и Git Gateway объявлены устаревшими, поэтому используем DecapBridge (бесплатно, вход по e-mail, не нужен аккаунт GitHub у Алены).

1. https://decapbridge.com → Sign up → **Create site**.
2. Repository: `ВАШ_ЛОГИН/alenagervalova-site`, branch `main`. Вставьте GitHub-токен по подсказке DecapBridge (GitHub → Settings → Developer settings → Fine-grained token → доступ только к этому репозиторию → Contents: Read and write, Pull requests: Read and write).
3. DecapBridge покажет готовый блок `backend:` — скопируйте из него `identity_url` (вида `https://auth.decapbridge.com/sites/xxxxxxxx`) в `admin/config.yml`, поле `identity_url`. `gateway_url` уже стоит. Закоммитьте изменение → сайт пересоберётся.
4. DecapBridge → ваш сайт → **Manage collaborators → Invite** → e-mail Алены. Ей придёт письмо со ссылкой для установки пароля.
5. Вход: **https://alenagervalova.ru/admin/** → e-mail + пароль.

Запасной вариант (только Netlify, вход через GitHub): в `admin/config.yml` закомментируйте блок DecapBridge и раскомментируйте `backend: name: github …`; в Netlify: Site configuration → Access & security → OAuth → Install provider → GitHub (Client ID/Secret из GitHub OAuth App с callback `https://api.netlify.com/auth/done`).

## Шаг 4. Как публиковать статью (памятка для Алены)

1. Открыть `alenagervalova.ru/admin/`, войти.
2. **Статьи блога → New Статья**.
3. Заполнить: Заголовок, Краткое описание, URL латиницей (например `kak-spravitsya-s-trevogoy`), дату, рубрику, обложку (кнопка «Choose an image» → загрузить файл), alt-текст, SEO Title и Meta Description, текст (заголовки разделов — кнопка «H2», подразделы — «H3»), при желании — вопросы FAQ.
4. **Save** — статья сохраняется как черновик (колонка *Drafts* в разделе Workflow). Сайт не меняется.
5. Когда готово: в шапке редактора статус **Ready → Publish → Publish now**. Через 1–2 минуты статья появится на сайте, в `/blog/`, на главной (в трёх последних) и в `sitemap.xml`.
6. Правка опубликованной статьи: открыть → изменить → Publish. Заполните «Дата обновления», если переписали существенно.
7. Флаг «Черновик» в самой статье — страховка: пока включён, статья не попадёт на сайт даже после Publish.

## Шаг 5. После переезда — SEO

- Google Search Console и Яндекс.Вебмастер: отправить `https://alenagervalova.ru/sitemap.xml` заново (файл уже был добавлен, но состав изменился).
- Проверить статью в https://validator.schema.org и Google Rich Results Test — должны читаться BlogPosting, BreadcrumbList, FAQPage.
- Заменить три статьи-заглушки (сейчас в них тизер + ссылка на b17) на полный текст — это и есть перенос блога с b17. Старые адреса b17 менять не нужно.
- Рубрики редактируются в двух местах: `_data/categories.json` (сайт) и список `options` рубрики в `admin/config.yml` (админка). Значения `value` должны совпадать.

## Локальная работа (по желанию)

```bash
npm install
npm run dev        # http://localhost:8080 — сайт с автообновлением
npm run cms        # в другом терминале: локальный бэкенд Decap → http://localhost:8080/admin/
npm run build      # сборка в _site/
```
