# NextJS & NestJS GraphQL Starter

A NextJS frontend and NestJS backend GraphQL that includes daily chart and news about GOOG.

## Features

- [x] News
- [x] Sentiment
- [x] Daily chart

## Technologies

- [NextJS](https://nextjs.org/)
- [styled-components](https://styled-components.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL Code Generator](https://graphql-code-generator.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [Docker](https://docs.docker.com/)
- [React Hook Form](https://react-hook-form.com/)
- [echarts-for-react](https://git.hust.cc/echarts-for-react/)

## Getting started

1. Install the required packages

   ```bash
   cd api-investments && yarn
   cd front-investments && yarn
   ```

2. Update the .env files in the api-investments & front-investments

   ```bash
   cp client/.env.example .env
   cp server/.env.example .env
   ```

3. Start the server & client
   ```bash
   cd api-investments && yarn start
   cd front-investments && yarn dev
   ```
   > The front-investments requires that the api-investments is started so it can read the query.

## Generate version for production

    ```bash
    yarn build
    ```
