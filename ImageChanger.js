let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "css/image/roulette/kill/BE.png")
        {
            myImage.setAttribute('src', "css/image/roulette/kill/BE-off.png");
        }
    else
        {
            myImage.setAttribute('src', "css/image/roulette/kill/BE.png");
        }
}

