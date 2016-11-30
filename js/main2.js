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
var guessRemaining=start=20;
var aiNum;
var x,y,z;
//functions
var point;
var res=0;
var k,heart=1;
var count=0;
var audio3;
var level=1;

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
		    document.getElementById('ai-number').innerHTML='???';
		    document.getElementById('user-number').innerHTML='???';
		    document.getElementById('msg').innerHTML='　　　Start';
		    document.getElementById('result').innerHTML=' ';
		    document.getElementById('level').innerHTML=level;
		    ai();
		    res=1;
		}
	}
	if(level==21){
		alert("Congratulations~ Erase the Game!");
		reset();
	}
}
function reset(){
       	audio2 = document.getElementById('audio2'); 
       	audio2.play(); 
       	
       	level=1;
       	point=3;
       	x=y=z=0;
	    score = 0;
		start=20;
	    guessRemaining = start;
	    heart=1;
	    document.getElementById('guess-remaining').innerHTML=guessRemaining;
	    document.getElementById('ai-number').innerHTML='???';
	    document.getElementById('user-number').innerHTML='???';
	    document.getElementById('msg').innerHTML='　　　Start';
	    document.getElementById('result').innerHTML=' ';
	    document.getElementById('level').innerHTML=level;
	    ai();
	    count=0;
	    res=1;    
}


function ai(){
    aiNum = Math.floor(Math.random()*1000)+1;
}
function user(n){
	var audio = document.getElementById('audio1'); 
    
    audio.play(); 
    audio.currentTime = 0 
	if(heart==1){
		if(guessRemaining>0){
			if(point==3){
				x=n*100;
				document.getElementById('user-number').innerHTML=n;
				point=2;
			}
			else if(point==2){
				y=n*10;
				document.getElementById('user-number').innerHTML=(x+y)/10;
				point=1;
			}
			else{
				z=n;
				k=x+y+z;
				document.getElementById('user-number').innerHTML=k;
				if(k==aiNum){
					document.getElementById('msg').innerHTML='Are you genius?';
					document.getElementById('ai-number').innerHTML=aiNum;
					heart=0;
					point=3;
					
				}
				else{
					guessRemaining--;
					point=3;
					
					if(k<aiNum){
						var audio4 = document.getElementById('audio4'); 
					       audio4.play(); 
					       audio4.currentTime = 0;
						document.getElementById('msg').innerHTML='　　　　UP';
					}
					else if(k>aiNum){
						var audio5 = document.getElementById('audio5'); 
					       audio5.play(); 
					       audio5.currentTime = 0;
						document.getElementById('msg').innerHTML='　　　DOWN';
					}
					
				}
				x=y=z=k=0;
	  		displayResult();
			}
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