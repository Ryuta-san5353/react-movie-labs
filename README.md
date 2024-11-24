# react-movie-labs
# Assignment 1 - ReactJS app.

Name: [Ryuta Ikejiri]

## Overview.

A React web application using TMDB API and Material-UI to display and manage movie and actor information.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ A countdown timer was added to the movie cards for upcoming movies, displaying the number of days remaining until the movie is released. If the movie has already been released, it will show "Released" instead.

+ Created the actors list page. When you click on "More info" it will display the details of the actor. 

+ Added the movie credits in the movie detail page. It shows the picture of the first 8 actors got from the movie credit endpoint . Also , by clicking the actor it goes to the  actor detail page. 

+ Created a function to sort movies. This can be sorted by the average number of votes in order of highest to lowest, also by the date the movie was released in order of newest to oldest.

+ Added pagination function. This divides the movies and actor list into multiple pages. Since the data from the TMDB API endpoint is limited to 20 items per page, I made the page number part of the endpoint dynamic by using variable called "page". It will be managed with useState in each file in pages folder. The selected page's corresponding data is then fetched from the API endpoint.




## Setup requirements.



## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Popular movies - movie/popular
+ Get popular actors - person/popular
+ Actor details - person/:id
+ Images for each actors - person/:id/images
+ Credits for movies - movie/:id/credits


## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /actors - shows the actors list.
+ /actors/:id - detail page of the actor
+ /movies/popular - display popular movies

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

+ Learned how to calculate the difference between two dates using the Date object in javascript. When substracting two Date objects, the result will be returned in milliseconds. To calculate the difference in days, the result can be divided by the number of milliseconds in a day(86400000milliseconds). This technique was applied to create a countdown timer for upcoming movies.

+ Learned how to use Javascript's sort method to customize sorting for the movie list. Created new sorting options to arrange movies by rating and release dates. 

+ Adoped new Material UI components. Pagination component for managing multile pages of data and used the AccessTimeIcon component to represent countdown timer.

+ Learned how to manage pagination state using useState hook. A page state variable was used to track the current selected page and updating it through the pagination component fetched data for that page from the API. This makess navigating between pages like movie or actor lists. I referred to online articles and to understand how to set up pagination.
https://dev.to/donsmog/data-fetching-with-react-query-and-typescript-using-the-movie-database-api-4ddg