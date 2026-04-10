# Express Checkpoint

This project is an Express web application built for the checkpoint requirements.

## What this app includes

- **3 pages**:
  - Home (`/`)
  - Our Services (`/services`)
  - Contact us (`/contact`)
- **Shared navigation bar** on every page with links to all three routes.
- **Custom middleware** that allows access **only during working hours**:
  - Monday to Friday
  - From `09:00` to `17:00` (server local time)
- **CSS styling** for layout and navbar in `public/stylesheets/style.css`.
- **Template engine**: Jade (views in the `views/` folder).

## Project structure

```text
app.js
bin/www
middleware/workingHours.js
routes/index.js
views/
public/stylesheets/style.css
```

## Middleware behavior

The middleware is defined in `middleware/workingHours.js` and registered in `app.js`.

- If request time is within allowed hours, the request continues.
- Otherwise, the app responds with HTTP `403` and renders `views/closed.jade`.

> Note: Working hours are evaluated using the machine/server local timezone.

## Run locally

### 1) Install dependencies

```powershell
npm install
```

### 2) Start the server

```powershell
npm start
```

### 3) Open in browser

```text
http://localhost:3000/
```

## Available routes

- `GET /` → Home page
- `GET /services` → Our Services page
- `GET /contact` → Contact us page

If outside working hours, these routes render the unavailable page.

## Checkpoint requirements mapping

- **Use Express to create server and routes** ✅ (`app.js`, `routes/index.js`)
- **Custom time-check middleware** ✅ (`middleware/workingHours.js`)
- **Pages styled with CSS** ✅ (`public/stylesheets/style.css`)
- **Template engine (optional)** ✅ (Jade templates in `views/`)
