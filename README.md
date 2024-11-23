# react-movie-labs
# Assignment 1 - ReactJS app.

Name: [Ryuta Ikejiri]

## Overview.

[A brief statement on the content of this repository.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ A countdown timer was added to the movie cards for upcoming movies, displaying the number of days remaining until the movie is released. If the movie has already been released, it will show "Released" instead.

+ Created the actors list page. When you click on "More info" it will display the details of the actor. 

+ Added the movie credits in the movie detail page. It shows the picture of the first 8 actors got from the movie credit endpoint . Also , by clicking the actor it goes to the  actor detail page. 

+ Created a function to sort movies. This can be sorted by the average number of votes in order of highest to lowest, also by the date the movie was released in order of newest to oldest.

+ Added pagination function. This divides the movies and actor list into multiple pages. Since the data from the TMDB API endpoint is limited to 20 items per page, I made the page number part of the endpoint dynamic by using variable called "page". It will be managed with useState in each file in pages folder. The selected page's corresponding data is then fetched from the API endpoint.




## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Popular movies - movie/popular
+ Get popular actors - person/popular
+ Actor details - person/:id
+ Images for each actors - person/:id/images
+ Credits for movies - movie/:id/credits


## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /actors - shows the actors list.
+ /actors/:id - detail page of the actor

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).