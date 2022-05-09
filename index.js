var link = 'sounds/';
var ext = '.mp3';

var numberOfDrums = document.querySelectorAll('.drum');

for (var i=0; i<numberOfDrums.length; i++){

    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        
        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

document.addEventListener('keypress',function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

}
function makeSound(key){
    switch (key){
        case 'w': 
            soundToPlay('tom-1');
            break;
        case 'a': 
            soundToPlay("tom-2");
            break;
        case 's': 
            soundToPlay("tom-3");
            break;
        case 'd': 
            soundToPlay("tom-4");
            break;
        case 'j':
            soundToPlay("snare");
            break;
        case 'k':
            soundToPlay("crash");
            break;
        case 'l':
            soundToPlay("kick-bass");
            break;
        default: console.log(key);
    }
}

function soundToPlay(track){
    var audio = new Audio(link+track+ext); 
    audio.play();
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add('pressed') //💫MOST IMPORTANT METHOD
    setTimeout(function(){activeKey.classList.remove('pressed')},100);
}

//eventListner Calling handleClick() function
// document.querySelector("button").addEventListener("click", handleClick); //.add()

// function handleClick(){
//     alert("w pressed");
// }

//eventListner Calling Anonymous funtion
// document.querySelectorAll("button").addEventListener("click",function(){
//     alert("Buton Clicked");
// });

//eventListner On all the buttons
// document.querySelectorAll("button").forEach(function(pressedButton){
//     pressedButton.addEventListener('click',function(){
//         alert("Button is Clicked");
//     })
// });
