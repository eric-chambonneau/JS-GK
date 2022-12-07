/**  p>Player 1: Chris</p>  
 * let para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
} **/

/**   <canvas id="canvas"></canvas>
 * var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 100);  **/

/**  <button>Click me</button>
 * document.addEventListener("DOMContentLoaded", function() {
    function createParagraph() {
      let para = document.createElement('p');
      para.textContent = 'Vous avez cliqué sur le bouton!';
      document.body.appendChild(para);
    }
  
    const buttons = document.querySelectorAll('button');
  
    for(let i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }
  }); ***/

  /***  <button onclick="createParagraph()">Cliquez-moi!</button>
   * function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'Vous avez cliqué !';
    document.body.appendChild(para);
  } ****/

 /** myName = 'Chris';

function logName(){
    console.log(myName);
}

logName();

var myName; **/

/**  var myName = 'Chris';
var myName = 'Bob';

let myName = 'Chris' ;

myName = 'Bob' ; **/

myName = 'Bob';
myAge = 40;

var myNameArray = ['Chris', 'Bob', 'Jim'];
var myNumberArray = [10,15,40];
var dog = { name : 'Spot', breed : 'Dalmatian' };

const monEntier = 5;
const monFlottant = 6.667;
monEntier;
monFlottant;

const grandePartieDecimale = 1.766584958675746364;
grandePartieDecimale;
const partieDecimaleAdeuxChiffres = grandePartieDecimale.toFixed(2);
partieDecimaleAdeuxChiffres;

let monNombre = '74';
monNombre + 3;


  