# Golden Sun: Djinn Guide

A guide for finding all djinn and summons in the *Golden Sun* video game series.

April 30, 2023

Status: Draft

Author: Alvin Xu

## Overview

The website will be a mix of Django and React. The website will show data but not take any in from users.
The use of React will make the website more interactive, and the use of Django will allow us to store and retrieve data in a database.

Each game in the *Golden Sun* series will have their own page, and there will be a main page to toggle between the three.
Within each page, the djinn and summons will be separated into "parts", referencing when in the game they can be obtained.

### Goals

* Create a website that combines Django (back-end) and React (front-end) into a single website.
* Create a guide to find certain items in three different games.
* Deploy a website that requires a program to be run, rather than using just index.html to build a website.

### Non-Goals

* This website does not act as a walkthrough, but a guide for specific items found in each game.
* This website will only tell the locations of djinn and summons, not show.

## Django Models

### Collectable
* item - Integer (1 = Venus, 2 = Mars, 3 = Jupiter, 4 = Mercury, 5 = Summon)
* name - String (name of collectable)
* game - Integer (1 = *Golden Sun*, 2 = *The Lost Age*, 3 = *Dark Dawn*)
* chapter - Integer (which part of the game is it located?)
* location - String (briefly states where it is found)
* description - String (a more detailed explanation of how to get it)
    * NOTE: most descriptions will tell you how to get to the collectable if it is non-obvious. Some collectables can be found easily by traversing a dungeon or town, so may not have as detailed a description. The guide will not say how to solve puzzles, either, but will mention what Psynergy is required.
* picture - String (link to picture to display associated with the item)

## Django Views
* NOTE: all requests use the GET method; the Django server does not utilize user data in any manner.

"/api"
* Gets all Djinn and Summons in the database.
* Responds with JSON list, sorted by id.

"/api/<int: game>"
* Gets all Djinn and Summons for a particular game.
* Responds with JSON list, sorted by id.

"/api/<int: game>/chapter/<int: chapter>"
* Gets all Djinn and Summons for a particular game.
* Filters by chapter.
* Responds with JSON list, sorted by id.

"/api/<int: game>/type/<int: coltype>"
* Gets all Djinn and Summons for a particular game.
* Filters by coltype.
* Responds with JSON list, sorted by id.

## Website Layout

### Home/Index Page
* Introductory page to the app and its purposes.
* Links to all three games (in the header, which is shared between all pages).

### Golden Sun
* Giant box one the middle shows information about the currently-selected collectable.
    * Includes name, a picture, location, and description of how to get it.
    * Information changes whenever another collectable is selected.
* A line of collectables that can be selected, corresponding to the game.
    * Scrollable. Would prefer arrows for scrolling instead of a scrolling bar. Will determine when reviewing React and CSS how to do so.
* A series of buttons that limits the amounts and types of selectable collectables. Could also be a dropdown menu.
    * All
    * By chapter (1, 2, etc.)
    * By type (Venus, Mars, etc.)

### Golden Sun: The Lost Age
* Identical to the *Golden Sun* page, but using data and images for *The Lost Age*.

### Golden Sun: Dark Dawn
* Identical to the *Golden Sun* page, but using data and images for *Dark Dawn*.

## Milestones
* Design website. (1-2 days)
* Set up a Django project and app for djinni and summon data. (1 hour)
* Set up models for the database. (1 day)
* Set up RESTful API for retrieving data. (1-2 days)
* Write data into database (several days... there's a lot to go through)
* Prototype pages in basic HTML and CSS. (2-3 days)
* Review React (several days)
* Rewrite pages in React, connecting to local Django server for data to display. (several days)
* Deploy to website (TBD). (1 day)
