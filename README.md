## SpotifyTopSongs

### **Background information** 

#### Backend

A [GraphQL API](https://graphql.org/code/#javascript) was built around a dataset obtained from [Kaggle](https://www.kaggle.com/) containing the Top 50 Spotify Songs of - 2019 https://www.kaggle.com/datasets/leonardopena/top50spotify2019

### Test

[Integration test](https://www.apollographql.com/docs/apollo-server/v2/testing/testing/) was written for GraphQL queries and mutation APIs

#### Frontend

The data was visualized in a bar chart comparing the popularity and danceability of the each songs.[Chart.js](https://www.chartjs.org/) Library was used.

### **Running  the project locally**

- Configure [Postgres](https://www.postgresql.org/) and create a db called topSong
- Edit the 'DATABASE_URL variable in the .env file
- Run the following commands:

```
npm install
npm run db:migrate
npm start
```



### **Running  test**

```
npm test
```



### Reason behind the project

This project is used as a means to learn and improve my GraphQL knowledge.

**Technologies used**

PostgreSQL for saving the data

GraphQL for creating the API with the Node.js server and Express framework.

Sequelize for creating the database models



