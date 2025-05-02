## Pasos realizados

1. Inicializar entorno e instalar @angular/cli

```bash
npm init -y
npm i @angular/cli
```

2. Inicializar el proyecto

```bash
 npx ng new mini-aplicacion
```

3. Generar los componentes header y footer
```bash
npx ng g c components/header
npx ng g c components/footer

```

4. Generar los componentes de menú público y privado
```bash
npx ng g c components/public/menu
npx ng g c components/private/menu

```

5. Generar los componentes publicos y privados que nos hacen falta
```bash

npx ng g c components/public/home
npx ng g c components/public/login
npx ng g c components/public/about

npx ng g c components/private/dashboard
npx ng g c components/private/gallery
npx ng g c components/private/crud/user-list
npx ng g c components/private/crud/user-edit
npx ng g c components/private/profile

```
6. Generar un servicio de auth (mock)
```bash
npx ng g service services/auth/mock/auth
```

7. Generar un servicio para crud
```bash
npx ng g service services/crud/users
```

8. Generar un servicio para la galería
```bash
npx ng g s services/gallery/images
```

9. Generar componentes de la galeria
```bash
npx ng g c components/private/gallery/thumbnails
npx ng g c components/private/gallery/controls
npx ng g c components/private/gallery/image-selected
```
