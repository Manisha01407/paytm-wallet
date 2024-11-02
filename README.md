# TeckStack
### Frontend and Backend - Next.js (or Backend)
### Express - Auxilary backends
### Turborepo
### Postgres Database
### Prisma ORM
### Tailwind
### CI/CD
### Docker

# Clone the repo

```jsx
git clone https://github.com/Manisha01407/paytm-wallet.git
```

- npm install
- Run postgres either locally or on the cloud (neon.tech)

```jsx
docker run --name paytm-wallet -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=mydatabase -p 5432:5432 -d postgres
```

- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)
