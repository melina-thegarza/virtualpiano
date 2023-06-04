function playSound(sound){

  if(sound == 'c2'){
    var c2 = new Audio("notes/Piano.mf.C2-trim.aiff")
    c2.play();
  }
  else if (sound =='d2'){
    var d2 = new Audio("notes/Piano.mf.D2-[AudioTrimmer.com].aiff")
    d2.play();
  }
  else if (sound == 'e2'){
    var e2 = new Audio("notes/Piano.mf.E2-trim.aiff")
    e2.play();
  }
    
  else if (sound =='f2'){
    var f2 = new Audio("notes/Piano.mf.F2-trim.aiff")
    f2.play();
  }
   

  
    
    //sound.play();
    sound.currentTime=0;
}

//document.getElementById("sound1").addEventListener("click",messagePopup)

function messagePopup(){
    document.getElementById("hiddenmessage").style.visibility= "visible";
}


document.addEventListener('keypress', (event) => {
  var name = event.key;
  // Alert the key name and key code on keydown
  if(name == 'c'){
    var key = document.getElementById("c2")
    activateKey(key);
    playSound('c2');
   
  }
  else if(name == 'd'){
    var key = document.getElementById("d2")
    activateKey(key);
    playSound('d2');
  }

  else if(name == 'e'){
    var key = document.getElementById("e2")
    activateKey(key);
    playSound('e2');
  }

  else if(name == 'f'){
    var key = document.getElementById("f2")
    activateKey(key);
    playSound('f2');
  }
  
 
 

}, false);


function activateKey(key){
  key.classList.add("active"); 
    setTimeout(() => { 
        key.classList.remove("active");
    }, 150);
}