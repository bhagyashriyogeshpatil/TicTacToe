# Tic Tac Toe

Tic Tac Toe game website is classic fun meets modern convenience! This project aims to provide an engaging and accessible gaming experience for players of all ages. With its straightforward rules and quick matches, it's an ideal choice for casual gamers, families, and friends looking to challenge each other to a friendly competition.

Tic-tac-toe is a classic two-player game where players take turns marking spaces in a 3x3 grid with their respective symbols, aiming to be the first to form a horizontal, vertical, or diagonal line.

![Responsive Mockup](assets/image/media/TicTacToe-mockup.png)

- - -
## Features 
### Existing Features
- __Favicon__
    - The favicon on our Tic Tac Toe game website looks like a small Tic Tac Toe board, making it easy to recognize and nice to look at. It helps people know it's our website and reminds them of the game they're about to play. It's small so it fits nicely in the tabs of your web browser and makes the website feel complete.

![ Favicon](assets/image/media/favicon-screenshot.png)
![]()

- __Login Screen__
	- In this section, users can type in their name to begin playing the game. The game won't start unless the user enters their name. If the user tries to start the game without entering their name, an error message will appear.
	- You can begin the game by clicking the "Start Game" button. Additionally, there's an information (i) icon available for viewing the game's instructions and rules.
    

![Login Screen Mobile](assets/image/media/login-screen-mobile.png) 
![Login Screen Desktop](assets/image/media/login-screen-desktop.png)
![User Login Error Message](assets/image/media/user-log-error-msg.png)

- __Instruction Modal__
	- This section provides instructions and rules on how to play the game. If the user clicks on the "i" icon, a modal with instructions will appear. There is a close button to close this instruction modal. 
	- Instruction modal is available while playing the game.

![Instruction Modal Mobile](assets/image/media/instruction-modal-mobile.png)
![Instruction Modal Desktop](assets/image/media/instruction-modal-desktop.png)

- __Game Screen__
	- In this section, users can engage in the game, which features a 3x3 grid. The game involves two players, marked as X and O, taking turns. Additionally, users will find their username and user icon displayed in the top left corner.
	- User will find a "Reset Game" button that allows user to begin the new game.

![Game Screen Mobile](assets/image/media/game-screen-mobile.png)
![Game Screen Desktop](assets/image/media/game-screen-desktop.png)

- __Winner Message__
	- In this section, once the game is completed a message will be shown indicating the winner or declaring a draw.

![Winner Message Mobile](assets/image/media/winner-msg-mobile.png)
![Winner Message Desktop](assets/image/media/winner-msg-desktop.png)

- __Footer__
    - Within this section, users can access social media links and find copyright information.

![Footer Mobile](assets/image/media/footer-mobile.png)
![Footer Desktop](assets/image/media/footer-desktop.png)

### Features Left to Implements
- Implement a "Play Against Computer" feature.
- Adding difficulty levels feature.

- - -
## User Experience (UX)
### User Stories

#### **First Time Visitor Goals**
- **Learn the Game Easily:** Provide clear instructions on how to play tic-tac-toe and make the game interface easy to understand.
- **Device Responsiveness:** Design the game interface to work seamlessly across different devices, including desktops, tablets, and smartphones.
- **Intuitive Navigation:** Keep the interface clean and user-friendly, with easily accessible buttons for starting a game and accessing settings

#### **Returning Visitor Goals**
- **Keep it Simple:** Make sure returning players find the game just as easy to play as the first time.

#### **Frequent Visitor Goals:**
- **Keep it Fun:** Add new challenges to keep players interested and coming back for more.

- - -
## Design

## Wireframe
- The wireframe for the mobile version of the website was created using Figma. While the implemented version may not match the exact layout of the wireframe due to changes made during development, the initial design provided valuable insights and a starting point for the development process.

###### Login Screen Wireframe
![Login Screen](assets/image/Wireframe/login-screen-wireframe.png)

###### Instruction Modal Wireframe
![Instruction Modal](assets/image/Wireframe/instruction-model-wireframe.png)

###### Game Screen Wireframe
![Game Screen](assets/image/Wireframe/game-screen-wireframe.png)

###### Winner Message Wireframe
![Winner Message](assets/image/Wireframe/winner_message.png)


### Colour Scheme
The color scheme is created using [Coolors](https://coolors.co/). I've utilized #65A6A7 for the body background, #FCCD4D for buttons, #FFFFC7 for game board boxes, #CF2857 for instructional modals, and #C9A7B0 for user login error messages.

![Color Palette](assets/image/media/tic_tac_toe-color_palette.png)

### Typography

Google Fonts was used to import the chosen fonts for use in the site.
* For the body of the website, I've utilized the Google font [Nunito](https://fonts.google.com/specimen/Nunito?query=Nunito).
* For the Game Title, I've utilized the Google font [Rammetto](https://fonts.google.com/specimen/Rammetto+One?query=Rammetto).

- - -
## Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)

![HTML validation Report](assets/image/testing/Html-validation-screenshot.png)

- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

![CSS Validation Report](assets/image/testing/css_validation_screenshot.png)

- JavaScript
    -  [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 

### Lighthouse Report

###### Lighthouse Report Mobile
![Lighthouse Report Mobile](assets/image/testing/lighthouse-report-mobile.png)

###### Lighthouse Report Desktop
![Lighthouse Report Desktop](assets/image/testing/lighthouse-report-desktop.png)


### Solved Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 |An error was displaying in the console, when the HTML file was created. ![Favicon Console error](assets/image/testing/favicon-console-404error.png) | Upon including `<link rel="shortcut icon" href="#">` in the <head> element of the HTML file, the error was resolved.|
| 2 |While validating with JShint, I encountered some warnings related to the usage of the 'let' variable.![JSHint Validator warning](assets/image/testing/JShintValidatorWarning.png)| The warnings were resolved after inserting `/* jshint esversion: 6 */` into the script.js file.I referred to [this solution](https://stackoverflow.com/questions/61764048/i-cant-fix-the-let-warning-in-jshint-plugin-for-vscode-in-all-the-new-project) for resolution.|
| 3 |During JShint validation, an unused variable was detected. ![Unused Variable](assets/image/testing/unused-variable-closeInstructions.png) The cause of this issue is that I applied the onclick attribute to the close button in the HTML file.|To resolve this problem, I removed the onclick attribute from the close button in the HTML file. Additionally, I added an event listener to the close button in the JavaScript file.|
| 4 |During JShint validation, a warning is issued for functions declared within loops. ![JSHint Validator warning Function within Loop](assets/image/testing/jshint-validator-warning-function-within-loop.png)| I adjusted the code to resolve the warning related to outer scoped variables. `createClickListener` function is used to create a click event listener for each box. I looked at a [Stack Overflow post](https://stackoverflow.com/questions/55894175/javascript-code-raising-warning-in-jshint-com-functions-declared-within-loops-r) to fix the warning.|

- - -

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Tic Tac Toe](https://bhagyashriyogeshpatil.github.io/TicTacToe/).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [bhagyashriyogeshpatil/TicTacToe](https://github.com/bhagyashriyogeshpatil/TicTacToe).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [bhagyashriyogeshpatil/TicTacToe](https://github.com/bhagyashriyogeshpatil/TicTacToe)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [bhagyashriyogeshpatil/TicTacToe](https://github.com/bhagyashriyogeshpatil/TicTacToe)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -




    