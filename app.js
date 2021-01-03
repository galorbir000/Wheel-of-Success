/*...................................................................
                          asigning variable
  ...................................................................*/


const qwerty = document.querySelector ('#qwerty');
const phrasesDiv = document.querySelector ('.phrases');
const start = document.querySelectorAll ('.btn_reset');
let missed=0; // if the player guess wrong 5 times they lose the game

let ul = document.querySelectorAll('ul')
const overlay = document.querySelector ('#overlay');


/*...................................................................
                add event Listner to stargame
  ...................................................................*/


  
  document.addEventListener( 'click', (e) => { if (e.target.className ==="btn__reset") {
    overlay.style.display='none';

}})

/*...................................................................
                          create array 'phrases'
  ...................................................................*/


const  Phrases=[ "treehouse   student",
                        'frontend  developer',
                        'java  script',
                        'peer  review',
                        'syntax  error'];

/*...................................................................
                create getRandomPhraseAsArray Function
  ...................................................................*/
const getRandomPhraseAsArray  = (arr)=> {
    let randomNum = Math.floor(Math.random()*Phrases.length);
    let string = arr[randomNum];
    let stringLett = string.split('');// create letter array
    return stringLett;


}
/*...................................................................
                create addPhrasesToDisplay Function
  ...................................................................*/

const addPhrasesToDisplay = (arr) =>{
  for( let i = 0; i < arr.length; i++){
    const ul = document.querySelector('ul')
     let li = document.createElement('li');
     li.textContent= `${arr[i]}`;
     ul.appendChild(li);
     if ( arr[i] !== (" ")){
      li.className = 'letter';

     }
     else{
      li.className = 'space';
         }
     }

  };
  // call   the functions
  let randomPhrases = getRandomPhraseAsArray (Phrases);
  addPhrasesToDisplay(randomPhrases);

  
  
  
  
  
  
  
/*...................................................................
                create checkLetterfunction
  ...................................................................*/

  function checkLetterfunction(btn) {
    let li = document.querySelectorAll(".letter");
    let match = null;
    for(let i = 0; i < li.length; i++) {
      if(li[i].textContent.toLowerCase() === btn.textContent) {
        li[i].classList.add('show');
        match = li[i].textContent;
      }
    }
    return match;
  };
  /*...................................................................
                create checkwin function
  ...................................................................*/

 const checkWin =()=>{
  let li = document.querySelectorAll(".letter");
  let lishow = document.querySelectorAll(".show");
  if ( li.length === lishow.length){
    overlay.classList.add('win');
    let h2 = document.querySelector( '#overlay h2' )
    h2.textContent = 'You Won';
  
    overlay.style.display= 'flex';
   
    

  }
 else if ( missed > 4) {
overlay.classList.add('lose');
let h2 = document.querySelector( '#overlay h2' )
    h2.textContent = 'You Lost';
   
    overlay.style.display= 'flex';
    
    

}
 

 }


//    /*...................................................................
//                 addEvent Listner to the keyboard
//   ...................................................................*/
 qwerty.addEventListener( 'click', (e)=> {
  
  if(e.target.tagName ==='BUTTON'){
    e.target.className = 'chosen';
    e.target.disabled = true;
    
    
    let btncheck = checkLetterfunction(e.target);
    if ( btncheck === null){
      missed +=1
      const tries = document.querySelectorAll('.tries img');
      tries[missed-1].src='images/lostHeart.png'
      
    
  }}
  
  
  
  checkWin();

 });
 