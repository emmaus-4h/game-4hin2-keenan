/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var vijandX = 600; // x-positie van vijand
var vijandY = 200; // y-positie van vijand

var vijandX2 = 800; // x-positie van vijand 2
var vijandY2 = 400; // y-positie van vijand 2

var kogelX = 495; // x-positie van kogel
var kogelY = 495; // y-positie van kogel

var HP = 100; // hp van speler
var Points = 0; // punten van speler

var img; // plaatjes laden


var ArrowLeft = 37;
var ArrowRight = 38;
var ArrowUp = 39;
var ArrowDown = 40;
var Spacebar = 32;


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  console.log("Speler positie X " + spelerX);
  console.log("Speler positie Y " + spelerY);
   if (keyIsDown(37)) {
    spelerX = spelerX - 10;
  }
  if (keyIsDown(38)) {
    spelerY = spelerY - 10;
  }
  if (keyIsDown(39)) {
    spelerX = spelerX + 10;
  }
  if (keyIsDown(40)) {
    spelerY = spelerY + 10;
  }

  if (spelerY < 0) { spelerY = 0; }
  if (spelerX < 0) { spelerX = 0; }
  if (spelerY > 720) { spelerY = 720; }
  if (spelerX > 1280) { spelerX = 1280; }


  // vijand
  vijandY = vijandY + 10;

  if (vijandY > 720) {
    vijandY = 0;
  }

  // vijand 2
   vijandY2 = vijandY2 + 10;

  if (vijandY2 > 720) {
    vijandY2 = 0;
  }


  // kogel
   kogelY = kogelY + 10;

  if (kogelY > spelerY) {
    kogelY = 0;
  }
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
   if (vijandX - spelerX < 50 &&
    vijandX - spelerX > -50 &&
    vijandY - spelerY < 50 &&
    vijandY - spelerY > -50
  ) {
    console.log("botsing");
    HP = HP-1;
  }

  // botsing speler tegen vijand 2
   // botsing speler tegen vijand
   if (vijandX2 - spelerX < 50 &&
    vijandX2 - spelerX > -50 &&
    vijandY2 - spelerY < 50 &&
    vijandY2 - spelerY > -50
  ) {
    console.log("botsing");
    HP = HP-1;
  }

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
 fill ("skyblue");
  rect (0,0,1280,720);
  
  // vijand 
  
  function preload() { // preload is net als set up, om de code te starten
  img = loadImage("Octupus.png");
}
  image(img, vijandX, vijandY);
  
  fill("blue");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("orange");
  ellipse(vijandX, vijandY, 50, 50);

    // vijand 2
  fill("pink");
  rect(vijandX2 - 25, vijandY2 - 25, 50, 50);
  fill("red");
  ellipse(vijandX2, vijandY2, 50, 50);



  // kogel
  fill("red")
   if (keyIsDown(32)) {
     rect(kogelX, kogelY, 10, 40);
   }

       

  // speler
  fill("black");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("green");
  ellipse(spelerX, spelerY, 50, 50);

  // punten en health
  fill("darkred");
  textSize(35);
  text("HealthPoints = " + String(HP), 10, 30);

  fill("yellow");
  textSize(35);
  text("Points = " + String(Points), 1050, 35);

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (HP<0) {
    return true;
  } else {
    return false; 
  }

  };
  // check of HP 0 is , of tijd op is, of ...


/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);


  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('skyblue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
     fill("violet")
    textSize(60);
    text("Game Over >:(", 400, 420)


  }
}
