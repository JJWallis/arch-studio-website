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

-  Pangram Check Function = This problem involved coding a function which would check if a provided string was a pangram, containing all the letters in the English alphabet. While solving this challenge I learnt how to use the `split(' ')` method to remove all spaces from a string and then match the original string using both the `join()` and `sort()` methods. In addition, I learnt that the `match()` method returns a regular expression array which I can spread into a `Set()` to remove all duplicates. `new Set(string.toLowerCase().match(/[a-z]/gi))`.

-  Isogram Check Function = This problem involved coding a function which would check if a provided string was an isogram, where all letters of the string are present only once. I learnt how to compare the index positions of letters in two strings to check for any duplicates that are present. Since the `indexOf()` method will return the first matched letter, any duplicate letter will be at a different index to what’s originally returned. Finally, I learnt about the `every()` array method that implements a test to check whether all elements in an array pass the implemented test and ultimately returns a boolean result. `input.toLowerCase().split('').every((v,i)=>console.log(v,i) || input.toLowerCase().indexOf(v)===i)`.

-  Encode/Decode Function = I was tasked with implementing an algorithm which would replace consecutive data elements with a single data value alongside the count of that value. I learnt to code out the encode logic by using a regex that would match an indefinite amount of character and number combinations by using groupings and the global flag. `replace(/(\w)\1+/g, (match) => ${match.length} ${match[0]})`. On the other hand, the decode function also used a regex that would match an indefinite number of digits and characters after it, whilst utilising the `repeat()` function to print that character the corresponding number of times. `input.replace(/(\d+)(\w)/g, (x, y, z) => z.repeat(y)`.

-  Reduce to remove duplicates in an array = I was able to recreate the logic automatically implemented by the Set data structure using the reduce method to check whether the current iterated value was present in our returned array accumilator. If the value was present then we would simply return the accumilator itself, else we can preserve the accumilator and add the current value onto the end, mimicking the `push()` method. `return arr.reduce((acc, curr) => acc.includes(curr) ? acc : […acc, curr],[])`.

-  Flatten array with reduce = This task involved replicating the `flat()` method logic by using the reduce method to check if the current iterated value was an array. If this was the case, then we would preserve our accumilator and spread the results of the current array onto the end by calling ourself (the current function) again. If the value wasn't an array then we would simply add that value onto the end like the traditional push() method. This was great practice at using recursion to solve a problem, although I will still admit I find it difficult to setup the loop since we almost have to think about it in reverse. `arrOne.reduce((acc, curr) => { return Array.isArray(curr) ? […acc, …makeFlat(curr)] : […acc, curr] }, [])`.

### Continued development

I feel like my confidence is increasing when tackling the 'easy' questions listed on Leetcode, although I do still feel there's a significant jump to the next level of difficulty. I look forward to pushing myself further by attempting these harder challenges because these style of questions really help open my eyes to all the different approaches one can take to solve a problem, as well as considering the time and space complexity of that approach.

### Useful resources

-  [Leetcode](https://leetcode.com/) - Leetcode is an amazing resource of useful algorithmic style questions that one use to improve their problem solving ability. I appreciate the fact that I can also view other developer's solutions to compare and contrast my approach.

## Author

-  Website - [Joshua Jameson-Wallis](https://www.joshuajamesonwallis.com/)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
