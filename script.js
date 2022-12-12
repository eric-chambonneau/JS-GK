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

/** const num1 = 10;
const num2 = 50;
9 * num1;
num1 ** 3;
num2 / num1; **/

/** let num2 = 6;
num2--;
num2; **/

/** let x = 50; let y = 50;

// Edit the two lines below here ONLY
x = 50;
y = 50;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);

const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Démarrer la machine') {
    btn.textContent = 'Arrêter la machine';
    txt.textContent = 'La machine est en marche&nbsp;!';
  } else {
    btn.textContent = 'Démarrer la machine';
    txt.textContent = 'La machine est arrêtée.';
  }
} **/

/** let radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();**/


/** let string = 'La révolution ne sera pas télévisée.';
string; **/

let shopping = ['pain', 'lait', 'fromage', 'houmous', 'nouilles'];
shopping;


let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['arbre', 795, [0, 1, 2]];

let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
myArray;
 
myArray.length;
myArray[0]; // le premier élément du tableau
myArray[1]; // le deuxième élément du tableau
myArray[myArray.length-1]; // le dernier élément du tableau
 
let myNewString = myArray.join(',');
myNewString;

let dogNames = ["Rocket","Flash","Bella","Slugger"];
dogNames.toString(); //Rocket,Flash,Bella,Slugger





  