# Frontend Mentor - Arch Studio multi-page website solution

This will be a solution to the [Arch Studio multi-page website challenge](https://www.frontendmentor.io/challenges/arch-studio-multipage-website-wNIbOFYR6) on Frontend Mentor

> For now I am currently using this repo to practice tasks on Leetcode to improve my problem solving skills

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for each page depending on their device's screen size
-  See hover states for all interactive elements throughout the site
-  Receive an error message when the contact form is submitted if:
   -  The Name, Email or Message fields are empty should show "Can't be empty"
   -  The Email is not formatted correctly should show "Please use a valid email address"
-  Bonus: View actual locations on the contact page map (we recommend Leaflet JS for this)

### Screenshot

![](./screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  Sass - CSS preprocessor

### What I learned

-  Pangram Function = While solving this challenge I learnt how to use the `split(' ')` method to remove all spaces from a string, to then match the original string using both the `join()` and `sort()` methods. In addition, I learnt that the `match()` method returns a regular expression array which I can spread into a `Set()` to remove all duplicates.

-  Isogram Function = I learnt how to compare index positions of letters in two strings to check if any duplicates are present. Since the `indexOf()` method will return the first matched letter, - any duplicate letter will be at a different index to what’s originally returned. Finally I learnt about the `every()` array method that implements a test to check whether all elements in an array pass the implemented test and returns a boolean result.

### Continued development

I feel like my confidence is increasing when tackling the 'easy' questions listed on Leetcode, although I do still feel there's a significant jump to the next level of difficulty. I look forward to pushing myself further by attempting these harder challenges because these style of questions really help open my eyes to all the different approaches one can take to solve a problem, as well as considering the time and space complexity of that approach.

### Useful resources

-  [Leetcode](https://leetcode.com/) - Leetcode is an amazing resource of useful algorithmic style questions that one use to improve their problem solving ability. I appreciate the fact that I can also view other developer's solutions to compare and contrast my approach.

## Author

-  Website - [Joshua Jameson-Wallis](https://www.joshuajamesonwallis.com/)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
