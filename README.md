# Live News
## Next-Js-13, GraphQl, Stepzen, Tailwind Css, TypeScript

<img align="left" alt="NextJS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
<img align="left" alt="TypeScript" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
<img align="left" alt="TypeScript" width="30px" style="padding-right:10px;" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" />

<img align="left" alt="Tailwind" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
<img align="left" alt="Tailwind" width="30px" style="padding-right:10px;" src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" />
<br/>
<br/>

This applicattion was created for learning Next JS 13 features. This news app gets the latest news from mediastack api (only 500 free requests). It allows to filter by genre and also allows users to search for news based on the word entered in the input field. Graphql is implemented with the help of stepzen making the stepup for graphql very easy.

[Live Demo](https://news-dfkptp17p-thabish-kader.vercel.app/)

### Lesson Learnt

As i was building this application i realized that next 13 forces the developer to code in a way that forces them to comparmantalize their code. What i mean by this is that in order to seperate the server and client components the programmer must further break down components into sub components (which is really good).

### Problems

-   While implementing the api portion of the build i was getting error. After 2 hours of checking and rechecking i found that it was because i had spelt business wrong. This led to requesting to the wrong api.

-   While implementing dark mode i got an error for hydration. Upon closer inspection on docs i ound the solution [here](https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch)

### Resources

-   [querying data with varibles useing stepzen](https://stepzen.com/blog/consume-graphql-in-javascript)
-   [Acessing parmas from server in next 13](https://beta.nextjs.org/docs/api-reference/use-search-params)

### Bugs

This application work fine in local environment but in production the search and read more feaures dont work as expected. I am assuming this is because Next JS 13 is still in beta. Therefore there are still some bugs in it.

### Note

As this application uses an external api "mediastack api" the amount of request is limited to 500 after this i have programmed it in such a way that after the request reaches 500 the newsData.json present locally will be used.

### ScreenShots
<img width="1680" alt="Screen Shot 2022-12-12 at 10 43 16 AM" src="https://user-images.githubusercontent.com/76642519/206978870-c705b044-8ff2-4224-8e77-97c5e73b033c.png">

<img width="1674" alt="Screen Shot 2022-12-12 at 10 43 32 AM" src="https://user-images.githubusercontent.com/76642519/206979057-a13e54d3-8a28-4470-aa5a-efacd2df9d35.png">

<img width="1680" alt="Screen Shot 2022-12-12 at 10 43 41 AM" src="https://user-images.githubusercontent.com/76642519/206979126-00a55c69-83fe-4221-941a-2bbbee487594.png">

<img width="1680" alt="Screen Shot 2022-12-12 at 10 43 57 AM" src="https://user-images.githubusercontent.com/76642519/206979140-67fd4eca-d250-4634-b0fd-9643225917e8.png">

<img width="1680" alt="Screen Shot 2022-12-12 at 10 44 12 AM" src="https://user-images.githubusercontent.com/76642519/206979164-28f86e3a-94b8-419c-b598-f5b4ed5a8e89.png">

<img width="1680" alt="Screen Shot 2022-12-12 at 10 44 36 AM" src="https://user-images.githubusercontent.com/76642519/206979195-896053dc-877d-414d-bf19-7155ce83af4d.png">

<img width="1680" alt="Screen Shot 2022-12-12 at 10 44 50 AM" src="https://user-images.githubusercontent.com/76642519/206979217-ff241f0f-9bfc-4d5b-aafe-6842459d82ac.png">






