( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "main" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
} () );


//variables
var guessRemaining=start=5;
var aiNum;
var k,heart=1;
var res=0;
var count=0;
var audio3;
var level=1;
//functions

function next(){
	
	
	if(guessRemaining!=0){
		if(heart==0){
			audio2 = document.getElementById('audio2'); 
		       audio2.play(); 
		    
		    level++;
		    start--;
		    guessRemaining = start;
		    heart=1;
		    document.getElementById('guess-remaining').innerHTML=guessRemaining;
		    document.getElementById('ai-number').innerHTML='?';
		    document.getElementById('user-number').innerHTML='?';
		    document.getElementById('msg').innerHTML='　　　Start';
		    document.getElementById('result').innerHTML=' ';
		    document.getElementById('level').innerHTML=level;
		    ai();
		    res=1;
		}	
	}
	if(level==6){
		alert("Congratulations~ Erase the Game!");
		reset();
	}
}
function reset(){
	       audio2 = document.getElementById('audio2'); 
	       audio2.play(); 
	       level=1;
		start=5;
	    guessRemaining = start;
	    heart=1;
	    document.getElementById('guess-remaining').innerHTML=guessRemaining;
	    document.getElementById('ai-number').innerHTML='?';
	    document.getElementById('user-number').innerHTML='?';
	    document.getElementById('msg').innerHTML='　　　Start';
	    document.getElementById('result').innerHTML=' ';
	    document.getElementById('level').innerHTML=level;
	    
	    ai();
	    count=0;
	    res=1;
	    
}

function ai(){
    aiNum = Math.floor(Math.random()*9)+1;
}

function user(n){
	var audio = document.getElementById('audio1'); 
    
    audio.play(); 
    audio.currentTime = 0 
	if(heart==1){
		if(guessRemaining>0){
				document.getElementById('user-number').innerHTML=n;
			
				if(n==aiNum){
					document.getElementById('msg').innerHTML='Are you genius?';
					document.getElementById('ai-number').innerHTML=aiNum;
					heart=0;
					count++;
				}
				else{
					guessRemaining--;
					if(n<aiNum){
						var audio4 = document.getElementById('audio4'); 
					       audio4.play(); 
					       audio4.currentTime = 0;
						document.getElementById('msg').innerHTML='　　　　UP';
						k=n;
					}
					else if(n>aiNum){
						var audio5 = document.getElementById('audio5'); 
					       audio5.play(); 
					       audio5.currentTime = 0;
						document.getElementById('msg').innerHTML='　　　DOWN';
						k=n;
					}
				}
				
	  		displayResult();
		}
	}
}



function displayResult(){
    
    document.getElementById('guess-remaining').innerHTML=guessRemaining;
    if(guessRemaining==0){
        document.getElementById('result').innerHTML=' ';
        document.getElementById('ai-number').innerHTML=aiNum;
        if(k!=aiNum)
        	document.getElementById('msg').innerHTML='You are stupid';
        else
        	document.getElementById('msg').innerHTML='You are Genious';

    }
    
}