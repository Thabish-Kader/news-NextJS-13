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
