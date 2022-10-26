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
