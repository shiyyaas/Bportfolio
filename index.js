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

    


    // x = document.getElementsByTagName('body')[0];
    // x.style.backgroundColor = "white";
    
    console.log("shiyas");
}