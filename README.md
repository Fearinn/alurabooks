# 📚 Alurabooks

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **AluraBooks**
| :label: Tecnologias | react, graphql, react-query, redux, axios, typescript, styled-components
| :rocket: URL         | https://alurabooks-teal.vercel.app/

Project built during the course track ["Aprofunde em React e Comunique APIs"](https://cursos.alura.com.br/formacao-react-consumindo-apis). It's a book e-commerce with API calls for authentication and data fetching. The main goal was to learn some React libraries and to discover different ways to handle APIs calls.

![preview](https://user-images.githubusercontent.com/105985983/234129720-b7988047-98fd-49ed-bd50-c83b51a58ac4.png)

## 🖱️ How to use 

The API was not built by me, so it's not hosted for continuos use. You must [clone it](https://github.com/alura-cursos/alurabooks-gql) and run **npm run start:dev** and **npm run start:api** in order to use all features of the website. Make sure the ports in your localhost match the ones used in the API (9000 and 8000).

In order to access the application with Vercel, you must also change the CORS origin in the API to `https://alurabooks-teal.vercel.app/`. You can find it in the file `app.module.ts`.


