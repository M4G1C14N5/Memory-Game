# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Thomas Tsangou

Time spent: 6-7 hours spent in total

Link to project: (https://glitch.com/edit/#!/brainy-nebula-provelone)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] new buttons, start and stop have noise

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![]()


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I did not really use much resources to help complete the submission other than searching the correct syntax of nested-if statesments on https://www.w3schools.com/js/js_if_else.asp


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

It was a challenge to understand the functions for the sounds as there were many of them and each interacted with one another. I finally 
understood that the group of funcions basically played the tone for however long I specified, which was divided into
two steps done by different functions. Connecting the buttons turned out to be really simple as all I had to do was connect the startTone 
function to them in CSS and HTML, for which I created 7 different tones(for 8 buttons) altogether. I also had a hard time compiling the game 
logic into code because I was working backwards (first attempt is in the guess() function). I started 
with the condition if (btn !== pattern[guessCounter]) player loses the game, then everything else was inside an else-if-statement where the user's guess what correct.
From that point on I stopped coding and decided to write the logic down on paper and after constant erasing I came to the realization that I was
overcomplicating the logic. I decided to start with if (pattern[guessCounter] == btn) and for each question in the flow chart, I wrote an if-else statement (representing "yes" and "no) nested inside the previous one, which finally worked.
It turned out that I was missing the condition for the last turn, some syntaxes with the variable names, and missing bracket, which I fixed with the help of guess function given in the instructions.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I have multiple questions regarding web development after going through this. My first question is how many types of web development are out there? 
I always thought web development was just creating a website, changing the way it looks, and adding some content to it. Instead, doing this project 
showed me that there is lots of things going on behind the scenes and made me realize how much I don't know about web developing. 
My second question kind of connects to my previous question but which type of web dev would this fall under? The project required to do java Script, HTML, and 
some CSS and I was wondering exactly what type of web dev I was doing through this game. My other question is with the addition of web development, what other coding languages 
are used? What type of functions are implemented through them? Are they similar or completely different? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours, first I would have tried to implement a function where the pattern array would have been given completely new values after each game. To be able to do so I suppose that I'd have to
use a rand fucntion that gives me any numbers between 1-4 and plug them into the array using a for loop. I also wanted to make it more interactive by making a "new pattern" button with the addition of start and stop which would give
player the choice to either keep on trying the same pattern or try a new one and also incorporating limited time to enter guess to make it more challenging . I also would've loved to add a game button sound more complex than the ones here, 
which would require me to to play around with the audioContext library. 

