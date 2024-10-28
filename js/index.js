console.log("Connected");
changeColor = () => {
    const blue = document.getElementById('blue');
    const purple = document.getElementById('purple');
    const text = document.getElementById('the-text');
    console.log("Clicked");

    //If blue selected, make title blue
    if(blue.checked) {
        text.className = 'blue';
        console.log("blue");
    }
    //If purple selected, make title purple
    else if (purple.checked) {
        text.className = 'purple';
        console.log("purple");
    }
    //If nothing selected, make title pink
    else {
        text.className = 'default';
        console.log("default");
    }
}
