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
npx ng g c components/header --skip-tests
npx ng g c components/footer --skip-tests

```

4. Generar los componentes de menú público y privado

```bash
npx ng g c components/public/menu --skip-tests
npx ng g c components/private/menu --skip-tests

```

5. Generar los componentes publicos y privados que nos hacen falta

```bash

npx ng g c components/public/home --skip-tests
npx ng g c components/public/login --skip-tests
npx ng g c components/public/about --skip-tests

npx ng g c components/private/dashboard --skip-tests
npx ng g c components/private/gallery --skip-tests
npx ng g c components/private/crud/user-list --skip-tests
npx ng g c components/private/crud/user-edit --skip-tests
npx ng g c components/private/profile --skip-tests

```

6. Generar un servicio de auth (mock)

```bash
npx ng g s services/auth/mock/auth --skip-tests
```

7. Generar un servicio para crud

```bash
npx ng g s services/crud/users --skip-tests
```

8. Generar un servicio para la galería

```bash
npx ng g s services/gallery/images --skip-tests
```

9. Generar componentes de la galeria

```bash
npx ng g c components/private/gallery/thumbnails --skip-tests
npx ng g c components/private/gallery/controls --skip-tests
npx ng g c components/private/gallery/image-selected --skip-tests
```

10. Generar directiva para aumentar/disminuir la imagen y un servicio que lo controle

```bash
npx ng g d directives/imagen/zoom --skip-tests
npx ng g s services/imagen/zoom --skip-tests
```

11. Generar directiva para rotar una imagen

```bash
npx ng g d directives/imagen/rotate --skip-tests
```
