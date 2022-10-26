const txtInput = document.querySelector(".inputs input"), //this variable will hold the value the user inputed into the text input field.
checkBtn = document.querySelector(".inputs button"), //Variable that is connected with the button we have on our application.
infoText = document.querySelector(".info-text"); //The variable that will hold the info text that will appear and show the user wheather the word is a palindrome or not.
let filterInput; //will hold the user input after formatting it in the txtInput related function

checkBtn.addEventListener("click", () => { //if the button is clicked, this function will be called
    let reverseInput = filterInput.split("").reverse().join(""); //create variable reverseInput that will hold the revered input of the user.
    infoText.style.display = "block"; //style the display of the infoText
    if(filterInput != reverseInput) { //if the reverseInput is not the same as the original input after formatting then it isnt a plaindrome and returns appropriate infoText
        return infoText.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    } 
    infoText.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;//but if they are the same it will return appropriate infoText being that it is a plaindrome
});

txtInput.addEventListener("keyup", () => { //if keyup (user pressed enter), the input fields content will be taken.
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, ""); //the input fields content will formatted and put into filterInput
    if(filterInput) { //if filterInput is not empty, as in the user actually entered something, the button will have the active class and so it can be clicked. 
        return checkBtn.classList.add("active");
    }
    infoText.style.display = "none"; //set style display for the info text
    checkBtn.classList.remove("active"); //remove the "active" class after its use is done.
});