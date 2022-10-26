# PlaindromeChecker
A simple application that has the purpose of being a Palindrome Checker

### This application consists of three components:
```
1. index.html (the structure of the app)
2. style.css (the style of the app, affects index.html)
3. script.js (The functionality of our app. handles the checking and such)
```
## Starting with index.html:

index.html consists of simple components that make up with app.

we put everything in a wrapper div that will house all of the app.

Inside the wrapper we have 2 sections;

1. Header: will include the name of our App, & a small explaination of what is a palindrome for the user.
2. Div classed as Inputs, will have the input field and the button.

we also have to link our style.css file and script.js file so it can look neat and actually work. the contents of those files will be discussed after this.

The code will end up looking like so:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palidrome Checker</title> <!--Its title-->
    <link rel="stylesheet" href="./style.css"> <!--CSS for the project-->
</head>
<body>
    <section>
        <div class="wrapper"> <!-- wraps our project-->
            <header> <!--Header for our application-->
                <h1>Palindrome Checker</h1> <!--Title of our project-->
                <p>A Palindrome is a word/phrase That will look the same backwards as forwards. an Example of that is level</p> <!--Explaination of what a Palindrome is for the user.-->
            </header>
            <div class="inputs">
                <input type="text" spellcheck="false" placeholder="Enter Your Text"> <!--Input box for user-->
                <button>Check Your Palindrome</button> <!--Button that will axctivate the checking of the word-->
            </div>
            <p class="info-text"></p> <!--Will display whether the word is a Palindrome or not later.-->
        </div>
    </section>
    <script src="./script.js"></script>
</body>
</html>
```

## Now onto style.css 

This code just handles the styling for the app to make it look neat. mine ended up looking like so:
![picOfApp](https://user-images.githubusercontent.com/115345791/197939389-dbbcc6ce-1ecb-4131-a8ad-4eb6e9c535f4.jpg)

The code is self-explainatory and i Added comments on the important ones. 

i  will be just highlighting important sections.

we imported our own font:
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
```

Styled the whole page with the * sign:
```css
*{
  margin: 0; 
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
```

Styled all of the body to have some padding, have its items and content aligned in the middle vertically and horizontally. Gave it a minimum height and a background color:
```css
body{
  display: flex;
  padding: 0 10px;
  align-items: center; /* Align items center-wise vertically*/
  justify-content: center; /* Align items center-wise horizontally*/
  min-height: 100vh; /*Minimum height for the app. since it is all in the body*/
  background: #4135c5; /*The background color*/
}
```
we had some code for if the user highlights text on our app to change its background color and text color:
```css
::selection{ /*when the user highlighs something*/
  color: #fff;
  background: rgb(170,87,204,0.8); 
}
```
Code for styling the wrapper was also added:
```css
.wrapper{ /*The wrapper div element*/
  max-width: 500px; /*Maximum width*/
  background: #fff; /*Its background color*/
  border-radius: 7px; /*Its border radius*/
  padding: 20px 25px 15px; /*Its padding*/
  box-shadow: 0 15px 40px rgba(0,0,0,0.12); /*Its shadow*/
}
```
Header elements were styled:
```css
header h1{ /*The header's element that represents the title of our application*/
  font-size: 34px; 
  font-weight: 500;
  text-align: center;
  padding: 1rem;
}
header p{ /*The header's element that represents the explaination of palindrome*/
  margin-top: 5px;
  font-size: 18px;
  color: #474747;
  padding: 1rem;
}
```
Then the div representing input was also syled with its button and input field content:
```css
.inputs{ /* input field's margin*/
  margin: 20px 0 27px;
}
.inputs input{ /* input field's styling*/
  width: 100%;
  height: 60px;
  outline: none;
  padding: 0 17px;
  font-size: 19px;
  border-radius: 5px;
  border: 1px solid #999;
  transition: 0.1s ease;
}
.inputs input::placeholder{ /* input field's placeholder color*/
  color: #999999;
}
.inputs input:focus{ /* input field's shadow when in focus*/
  box-shadow: 0 3px 6px rgba(0,0,0,0.13);
}
.inputs input:focus::placeholder{ /* input field's placeholder color when in focus*/
  color: #bebebe;
}
.inputs button{ /* The buttons styling */
  width: 100%;
  height: 56px;
  border: none;
  opacity: 0.7;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  margin-top: 20px;
  border-radius: 5px;
  pointer-events: none;
  background: #35c541;
  transition: opacity 0.15s ease;
}
.inputs button.active{ /*When the button is pressable (dectated by wheather is there anything in the text input or not later on in the js file).*/
  opacity: 1;
  pointer-events: auto;
}
```
The  finally the code for info-text (the p tag that will show whether what the user has inputted in a Palindrome or not is styled)
```css
.info-text{ /*the informative text's styling (text that will tell user whether word == palindrome or not.)*/
  display: none;
  font-size: 19px; 
  text-align: center;
  margin-bottom: 18px;
}
.info-text span{ /*This part will have the word the user entered*/
  color: #AA57CC;
}
```

Finally we add some responsiveness to the page using @media:

```css
@media (max-width: 520px) { /*Handling reponsiveness*/
  .wrapper{
    padding: 17px 20px 10px;
  }
  header h1{
    font-size: 25px;
  }
  header p{
    font-size: 16px;
  }
  .inputs input{
    height: 54px;
    font-size: 17px;
  }
  .inputs button{
    height: 50px;
    font-size: 16px;
    margin-top: 17px;
  }
  .info-txt{
    font-size: 18px;
  }
}
```

## Finally onto script.js : 

Script.js hold the functionality of our app as it will be the file responsible for making the application run and be able to check the words.

we start by getting some variables:

txtInput variable will hold the value the user inputed into the text input field.

checkBtn is the Variable that is connected with the button we have on our appliVion.

infoText is the variable that will hold the info text that will appear and show the user wheather the word is a palindrome or not.

filterInput will hold the user input after formatting it in the txtInput related function
```js
const txtInput = document.querySelector(".inputs input"), 
checkBtn = document.querySelector(".inputs button"), 
infoText = document.querySelector(".info-text"); 
let filterInput; 
```

Then we start our first functuion that will activate when the button is clicked: 

inside that event, the input is revered and put into a variable reverseInput. it is reversed using .reverse() 

Then the state of displaying of the info text is set and the conditon of failure , if the reverseInput is not the same as the og one, it will show the appropriate messages at the end.

```js
checkBtn.addEventListener("click", () => { //if the button is clicked, this function will be called
    let reverseInput = filterInput.split("").reverse().join(""); //create variable reverseInput that will hold the revered input of the user.
    infoText.style.display = "block"; //style the display of the infoText
    if(filterInput != reverseInput) { //if the reverseInput is not the same as the original input after formatting then it isnt a plaindrome and returns appropriate infoText
        return infoText.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    } 
    infoText.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;//but if they are the same it will return appropriate infoText being that it is a plaindrome
});
```
Then we also have an eventlisten for when the user keysup (presses enter): 

It sets our filterInput and formats it. 

if the filterInput is not empty, it means the user entered something and can press the button now thus changing its activity state. The info text display state is cleared and so its active class.

```js
txtInput.addEventListener("keyup", () => { //if keyup (user pressed enter), the input fields content will be taken.
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, ""); //the input fields content will formatted and put into filterInput
    if(filterInput) { //if filterInput is not empty, as in the user actually entered something, the button will have the active class and so it can be clicked. 
        return checkBtn.classList.add("active");
    }
    infoText.style.display = "none"; //set style display for the info text
    checkBtn.classList.remove("active"); //remove the "active" class after its use is done.
});
```

So as you can see, this project is quite simple and quick. it was nice constructing it and seeing it work
