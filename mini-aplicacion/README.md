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

3. Generar los 2 componentes de menu
```bash
npx ng g c layout/menu-publico
npx ng g c layout/menu-privado
```

4. Generar los 3 componentes (publicos) y los 4 componentes (privados) que nos hacen falta
```bash
npx ng g c public/home
npx ng g c public/login
npx ng g c public/about

npx ng g c private/dashboard
npx ng g c private/galeria
npx ng g c private/crud
npx ng g c private/profile

```
5. Generar un servicio de auth (mock)
```bash
npx ng g service auth/mock/auth
```
