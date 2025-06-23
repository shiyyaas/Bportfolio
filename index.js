feather.replace(); //For CDN Icons 

// Theme changing
function Lightmode() {

    darkmode = document.getElementsByClassName('floatingbtn2')[0];
    darkmode.setAttribute('onclick','Darkmode()')
    // Button
    btn2 = document.getElementsByClassName('floatingbtn2')[0];
    btn2.style.backgroundColor = "rgb(14, 12, 12)"; 
    icon = document.getElementsByClassName('cdnicon')[0];
    icon.setAttribute('data-feather','moon');
    icon.style.color = "white";
    feather.replace(); // For feather icons , you should refresh like this

    // For Background
    body = document.getElementById('body');
    body.style.backgroundColor = "white";
    
    // For text
    for(i=0;i<3;i++) {
        text = document.getElementsByClassName('text')[i];
        text.style.color = "black";   
    }
     
    // launcher button
    launcher = document.getElementsByClassName('launcher')[0];
    launcher.src = "images/darklauncher.png";
    btn = document.getElementsByClassName('floatingbtn')[0];
    btn.style.backgroundColor = " rgb(14, 12, 12)";
    //headertext
    for(i=0;i<2;i++){
        headertext = document.getElementsByClassName('headertext')[i];
        // headertext.style.backgroundColor = "black"; // this works but only for one so...
        headertext.style.cssText = `background-color:  rgb(14, 12, 12); color: white; `; 
    }
      
}
function Darkmode() {

    darkmode = document.getElementsByClassName('floatingbtn2')[0];
    darkmode.setAttribute('onclick','Lightmode()')
    // Button
    btn2 = document.getElementsByClassName('floatingbtn2')[0];
    btn2.style.backgroundColor = "rgb(210, 223, 224)"; 
    icon = document.getElementsByClassName('cdnicon')[0];
    icon.setAttribute('data-feather','sun');
    icon.style.color = "black";
    feather.replace(); // For feather icons , you should refresh like this

    // For Background
    body = document.getElementById('body');
    body.style.backgroundColor = "rgb(14, 13, 13)";

    // For texts 
    for(i=0;i<3;i++) {
        text = document.getElementsByClassName('text')[i];
        text.style.color = "white";   
    }

    // launcher button
    launcher = document.getElementsByClassName('launcher')[0];
    launcher.src = "images/launcher.webp";
    btn = document.getElementsByClassName('floatingbtn')[0];
    btn.style.backgroundColor = "rgb(210, 223, 224)";
    //headertext
    for(i=0;i<2;i++){
        headertext = document.getElementsByClassName('headertext')[i];
        // headertext.style.backgroundColor = "black"; // this works but only for one so...
        headertext.style.cssText = `background-color: rgb(210, 223, 224); color: black; `; 
    }  
}