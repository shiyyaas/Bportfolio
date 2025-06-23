feather.replace(); //For CDN Icons 

// Theme changing
function Lightmode() {
    darkmode = document.getElementsByClassName('floatingbtn2')[0];
    darkmode.setAttribute('onclick','Darkmode()')
    // Button
    btn2 = document.getElementsByClassName('floatingbtn2')[0];
    btn2.style.backgroundColor = "black"; 
    icon = document.getElementsByClassName('cdnicon')[0];
    icon.setAttribute('data-feather','moon');
    icon.style.color = "white";
    feather.replace(); // For feather icons , you should refresh like this

    
    body = document.getElementById('body');
    body.style.backgroundColor = "white";

    text = document.getElementsByClassName('text')[0];
    text.style.color = "black";    
}
function Darkmode() {
    darkmode = document.getElementsByClassName('floatingbtn2')[0];
    darkmode.setAttribute('onclick','Lightmode()')
    // Button
    btn2 = document.getElementsByClassName('floatingbtn2')[0];
    btn2.style.backgroundColor = "white"; 
    icon = document.getElementsByClassName('cdnicon')[0];
    icon.setAttribute('data-feather','sun');
    icon.style.color = "black";
    feather.replace(); // For feather icons , you should refresh like this

    body = document.getElementById('body');
    body.style.backgroundColor = "black";
}