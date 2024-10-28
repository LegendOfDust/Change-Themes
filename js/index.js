console.log("Connected");
changeColor = () => {
    const blue = document.getElementById('blue');
    const purple = document.getElementById('purple');
    const pink = document.getElementById('pink');
    const cyan = document.getElementById('cyan');
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
    //If pink selected, make title pink
    else if (pink.checked) {
        text.className = 'pink';
        console.log("pink");
    }
    //If cyan selected, make title cyan
    else if (cyan.checked) {
        text.className = 'cyan';
        console.log("cyan");
    }
    //If nothing selected, make title pink
    else {
        text.className = 'default';
        console.log("default");
    }
}
