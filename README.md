# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **George Guardia**

Time spent: **11** hours spent in total

Link to project: (https://glitch.com/edit/#!/sparkling-alder-fir)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] List anything else that you can get done to improve the app!
* [X] Added a feature that gives personality to the page. It is a typing circular loop that says  Test your (followed by array of phrases)

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

#### Losing game
![Losing Game](https://media.giphy.com/media/Icf7xX7DDZMQ3nt6kG/giphy.gif)

#### Winning game
![Winning Game](https://media.giphy.com/media/M72htU898Al3cnSPWJ/giphy.gif)

#### Out of time
![Running out of time](https://media.giphy.com/media/FHEJyzXglgZUBex0fp/giphy.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[Credit to Samuell Howell on https://codepen.io/samuelhowell for circular typing loop.
setInterval - https://www.w3schools.com/jsref/met_win_setinterval.asp
clearInterval - https://www.w3schools.com/jsref/met_win_clearinterval.asp
.innerHTML - https://www.w3schools.com/jsref/prop_html_innerhtml.asp]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[For this submission, there were various challenges such as getting the timer text to align with the start button. I had the issue where I was putting it in a new div or paragraph. I then tried using google chromes inspect element to try to get it in the proper spot using flexboxes, but finally realized that they were all part of the body so then made a span and gave it an id and was able to properly manipulate the element. I also had trouble implementing the timer properly as I haven't had much experience with JavaScript with connecting with HTML and how to make the timer tick down properly display on the page. It was a unique situation where I found myself looking at the documentation and on sites like w3schools until I found .innerHTML which allowed me to link everything together. The other half with implementing the timer was the challenge of making sure it stops when the user finishes or fails the program. I was able to overcome this challenge by making an endTime boolean which would check if the program was terminated and would stop the timer and know to not keep counting down further. These optional implementations were essential in getting a greater understanding of JavaScript. ]
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[After completing this project, I am interested in various ways to expand on the knowledge I gained while completing this prework. The first thing that got me thinking after completing the memory game was seeing how a database would interact with a website or with an API. After completing this project I also wanted to get a deeper understanding of website design layout with Flexboxes and CSS grids. Afterward I started to think about how could style the text differently as well as animations on a page.  I would like to learn about how a framework differs from coding in straight HTML, CSS, and JS.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a couple of more hours of working on this project I would've liked to style the page differently as well as made the timer have a noise as it was ticking downward. I would also would have liked to add a sound for when the user loses it would like a sad crowd noise. I would have also liked to develop a functionality where there would be a leaderboard that would save the users' previous attempts and add them to a leaderboard so the user can keep track of how far they could make it(game would go till they lost). Finally the last thing I would like to add webpage is how to section on how to play the game and gifs of people playing the game. ]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1efeUBiwxXrMBOwgmVaBVL3-NT7H37k-J/view?usp=sharing)


## License

    Copyright George Guardia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License. Ready to make it official? [Become a paid Glitch member](https://glitch.com/pricing) to boost your app with private sharing, more storage and memory, domains and more.
