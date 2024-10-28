console.log("Connected");
changeColor = () => {
    const blue = document.getElementById('blue');
    const purple = document.getElementById('purple');
    const text = document.getElementById('the-text');
    console.log("Clicked");

    if(blue.checked) {
        text.className = 'blue';
        console.log("blue");
    }
    else if (purple.checked) {
        text.className = 'purple';
        console.log("purple");
    }

    else {
        text.className = 'default';
        console.log("default");
    }
}
