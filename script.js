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


var HP = 100; // HP van speler


var ArrowLeft = 37;
var ArrowRight = 38;
var ArrowUp = 39;
var ArrowDown = 40;


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  console.log('Speler positie ' + spelerX + spelerY);
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

  // kogel
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
  fill("blue");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("orange");
  ellipse(vijandX, vijandY, 50, 50);



  // kogel

  // speler
  fill("black");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("green");
  ellipse(spelerX, spelerY, 50, 50);

  // punten en health
  fill("darkred");
  textSize(35);
  text("HealthPoints = " + String(HP), 10, 30);

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

  }
}
