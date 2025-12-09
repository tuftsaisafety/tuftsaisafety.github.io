## Tufts AI Safety Student Association

[https://tassa.dev](https://tassa.dev)

#### Run locally with Jekyll

1. Install Ruby and Jekyll
2. From the repo root, start the server:

```bash
jekyll serve --livereload
```

3. Open `http://localhost:4000`

#### Note on the email template

If the site branding is changed dramatically, you may want to update the newsletter email template in `templates/newsletter.html`.

#### Code Formatting

This project uses [Prettier](https://prettier.io/) for consistent code formatting.

**Setup:**

```bash
npm install
```

**Format code:**

```bash
npm run format
```

**Check formatting:**

```bash
npm run format:check
```
