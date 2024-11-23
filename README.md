# react-movie-labs
# Assignment 1 - ReactJS app.

Name: [Ryuta Ikejiri]

## Overview.

[A brief statement on the content of this repository.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Added countdown timer on the movie card in the upcoming movies. If it was already released, it says "released".
+ Created the actors list page. When you click the more info it shows the details of the actor. 
+ Added the movie credits in the movie detail page. It shows the picture of the first 8 actors got from the movie credit endpoint . Also , by cliking the actor it goes to the actor actor detail page. 
+ Created a function to sort movies. This can be sorted by the average number of votes in order of highest to lowest, also by the date the movie was released in order of newest to oldest.




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