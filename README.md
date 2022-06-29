# Gaymer Daily

## Description

Gaymer Daily is a website for LGBT gamers. It mainly features news about the popular FPS game Apex Legends, mostly about the sapphic couple of the game Valkyrie and Loba.

The purpose of Gaymer Daily is not to only show news about the popular FPS game, but also highlight the need for more queer representation in a cis-hetero dominated hobby.

There is not enough representation so a website like this that tries popularize the queer characters and tries to make them more playable or more fun to play, either through videos that showcase tips/tricks, or through community fan-art.

<hr>

## Features

- Banner
![GAYMER DAILY BANNER](assets/imgs/screenshots/Screenshot%20(134).png)
  - Features an animated gif of the very popular Discord icon as a background with the website's name. 
- News
  - Ticker
![APEX LEGENDS NEWS TICKER](assets/imgs/screenshots/Screenshot%20(135).png)
    - Features latest news about Apex legends
  - RSS Feed & Twitter Feed
![RSS AND TWITTER FEED](assets/imgs/screenshots/Screenshot%20(136).png)
    - Features:
        - An RSS feed of anything LGBT gaming related, so the users can stay up to-date with the gaming community
        - A Twitter Feed of @PlayApex, the official Apex Legends account for the most up-to-date updates about the game
  - LGBT Friendly Gaming Spaces
![](assets/imgs/screenshots/events.html%20(2).png)
    - Features Google Maps with two safe locations
       - Users will be able to send a message new locations suggestions
![](assets/imgs/screenshots/events.html%20(3).png)  

## Technologies

- Google Cloud platform
  - Obtained API for Google Maps
- Obsidian
  - Used for note taking and tracking progress, using markdown
- Bootstrap
- Git
- Gitpod

<hr>

## Bugs & Fixes

- Django problems:
  - running commands such as :
    - python3 manage.py showmigrations
    - python3 manage.py runserver
 The result was always the same, an error would appear, saying that they cannot identify a module.
 Have not yet identified or fixed the issue, all files seem to be in order.
- Google Maps API
  - The maps cluster would not appear on the map
    - The fix was to rewrite the code and fix some CSS height and width issues. I have used the ones recommended in the documentation at <https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-css>  

<hr>

## Future Implementations

- Comment section
  - Where users could comment on the news or the twitter feed
- Tips page
  - A page where it would feature videos and blogs on how to improve your gameplay as Loba or Valkyrie
- Community Page
  - A page where users would able to share gameplay clips and fan-art
  - With the ability for users to Login and even take notes from the Tip page for their own gameplay 

## Deployment 

- Github pages
  - In the GitHub repository, navigated to the Settings tab
  - From the source section drop-down menu, selected the Main Branch
  - Once the main branch has been selected, the page was automatically deployed