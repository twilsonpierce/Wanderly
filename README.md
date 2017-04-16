[![Stories in Ready](https://badge.waffle.io/danbanwo/wanderly.png?label=ready&title=Ready)](https://waffle.io/danbanwo/wanderly)
# Wanderly

## Installation 

1. Fork Clone Repo
2. npm install all dependencies

PostgreSQL was used as the database, with Sequelize as the ORM.
In order to setup the database, you'll need to create a sequelize config file. To do this:
  * Create a **config** folder within the back directory of the project
  * Within the config file, create a **config.json** file and paste the following:
  ```javascript
  {  
    "development": {  
      "username": *your computers username*,  
      "password": null,  
      "database": *name of database*, (example: wanderly-test)  
      "host": "127.0.0.1",  
      "dialect": "postgres"  
    },  
    "test": {  
      "username": *your computers username*,  
      "password": null,  
      "database": *name of database*, (example: wanderly-test),  
      "host": "127.0.0.1",  
      "dialect": "postgres"  
    },  
    "production": {  
      "username": *your computers username*,  
      "password": null,  
      "database": *name of database*, (example: wanderly-test),  
      "host": "127.0.0.1",  
      "dialect": "postgres"  
    }  
  }  
  ```

Proceed to seed file as follows:
```
$ node back/seed/seeder.js
```
This should populate the database with dummy data to interact with.

Once the above step have been completed, go ahead and run the project by typing the following in the terminal:
```
$ npm start
```

## Introduction
Welcome to Wanderly. The social travel application where we make sharing your adventures and budget/itinerary easy.

<img width="1280" alt="wanderlylandingpage" src="https://cloud.githubusercontent.com/assets/20372701/25074393/b566f5c0-22c7-11e7-9eef-0df4c045e0e7.png">


## Overview 
The **why** behind our app is to give wanderers a platform to share their adventures as experienced while also helping other wanderers plan for similar experiences.

### What can it do? It is simple. 

#### Profile Creation

Start your journey around Wanderly by creating a profile with telling us your name   

<img width="1213" alt="profilecreation3" src="https://cloud.githubusercontent.com/assets/20372701/25074419/3ec26c82-22c8-11e7-8a79-0ff0a562b0b5.png">

Some of your interests, a quick bio about you..

<img width="1273" alt="profilecreation2" src="https://cloud.githubusercontent.com/assets/20372701/25074415/242bcbc0-22c8-11e7-822a-b6071dd9a116.png">

And uploading a cool picture of yourself! After signing up, your profile will assist you in keeping track of both your expenses and experiences.

<img width="1270" alt="profilecreation1" src="https://cloud.githubusercontent.com/assets/20372701/25074406/0829d750-22c8-11e7-8e29-41ee0de6eb0d.png">


#### Overview of All Destinations
All the adventures you've ever been on presented to you on a beautiful interface.
 * Browse a list of destinations you've been on.
 * Better yet, use our interactive map to navigate every adventure you've been on til date.
 
 <img width="858" alt="overviewdestinations" src="https://cloud.githubusercontent.com/assets/20372701/25074438/a47ea7f2-22c8-11e7-9a63-2f7318076859.png">

#### New Destination
Currently on another one of your adventures? No worries! With Wanderly, you can add destinations on the fly, and begin to collect memories as you go. This process is similar for adding a new wanderspot to your adventure as well. 


#### Overview of All Wanderspots
In Wanderly, a Wanderspot is a term given to an establishment, point of interest (POI), or anything in between a user visits while on an adventure. All Wanderspots are contained within an itinerary, and are represented as Markers on the map.
Clicking on a destination will instantly populate a list of Wanderspots visited during the clicked adventure.

<img width="934" alt="overviewwanderspots" src="https://cloud.githubusercontent.com/assets/20372701/25074439/a4c33840-22c8-11e7-9f6f-c19dc75587d7.png">



### The Future of Wanderly
We absolutely believe this is a cool way to share experiences while helping others plan budget-conscious trips of their own. To further flesh out the vision we have for Wanderly, we'll be looking to build the following features as soon as possible:
* Budget
* Album for each destination
* Search functionality filterable by destinations(country, city, states)/POI etc
* Community of friends
* Itinerary ranking system
