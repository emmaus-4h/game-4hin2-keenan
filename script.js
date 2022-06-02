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
const BEGINSCHERM = 3;
const UITLEG = 4;
const WINNERSSCHERM = 5;

var spelStatus = BEGINSCHERM;


var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var vijandX = 600; // x-positie van vijand
var vijandY = 200; // y-positie van vijand

var vijandX2 = 800; // x-positie van vijand 2
var vijandY2 = 400; // y-positie van vijand 2

var kogelX // x-positie van kogel
var kogelY // y-positie van kogel


var HP = 100; // hp van speler
var Points = 0; // punten van speler


var img_namenlijst = ['pictures/Kirby.png', 'pictures/Shadow.png']; // plaatjes
var img_lijst =[]; // lijst wordt gevuld in preload


var ArrowLeft = 37;
var ArrowRight = 38;
var ArrowUp = 39;
var ArrowDown = 40;
var Spacebar = 32;
var Enter = 13;


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
  
  if (vijandY < 1)
  {vijandX = random(0, 700 && 1200, 700)
  };

  // vijand 2
   vijandY2 = vijandY2 + 10;

  if (vijandY2 > 720) {
    vijandY2 = 0;
  }
  
  if (vijandY2 < 1)
  {vijandX2 = random(0, 700 && 1200, 700)
  };



  // kogel
   kogelY = kogelY - 70;
  if (mouseIsPressed) {
    kogelX = spelerX-5;
    kogelY = spelerY-20;
    
  }
  if (kogelY <0) {
    kogelY = -100;
  }
};

/**s
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
   if (vijandX2 - spelerX < 50 &&
    vijandX2 - spelerX > -50 &&
    vijandY2 - spelerY < 50 &&
    vijandY2 - spelerY > -50
  ) {
    console.log("botsing");
    HP = HP-1;
  }

  // botsing kogel tegen vijand
  if (kogelX - vijandX < 50 &&
    kogelX - vijandX > -50 &&
    kogelY - vijandY < 50 &&
    kogelY - vijandY > -50
  ) {
    console.log("punt");
    Points = Points+1;
    vijandX = 1350;
    vijandY = 790;
  }

  // botsing kogel tegen vijand 2
  if (kogelX - vijandX2 < 50 &&
    kogelX - vijandX2 > -50 &&
    kogelY - vijandY2 < 50 &&
    kogelY - vijandY2 > -50
  ) {
    console.log("punt");
    Points = Points+1;
    vijandX2 = 1350;
    vijandY2 = 790;
  }

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

   image(img_lijst[0], vijandX-40, vijandY-30, 70, 70);

    // vijand 2
  fill("pink");
  rect(vijandX2 - 25, vijandY2 - 25, 50, 50);
  fill("red");
  ellipse(vijandX2, vijandY2, 50, 50);

  image(img_lijst[1], vijandX2-40, vijandY2-30, 70, 70);



  // kogel
  fill("red")
     rect(kogelX, kogelY, 10, 40);
   

       

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
  if (HP<1) { console.log("Game Over >:(");
    return true;
  } else {
    return false; 
  }


  };
  // check of HP 0 is , of tijd op is, of ...


/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

  function preload() {
    for (var i = 0; i < img_namenlijst.length; i++) {
      img_lijst[i] = loadImage(img_namenlijst[i]);
    }
  }
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
    // tekent begin scherm
    background("black");

    fill("yellow")
    textSize(70);
    text("Druk op s om te starten", 290, 400)
    if (keyIsDown(83)) { // s
      spelStatus = SPELEN;
    }
  
  // uitleg knop
    fill(0, 255, 68); // start kleur
    if (mouseIsPressed && mouseX > 440 && mouseX < 840 && mouseY < 580 && mouseY > 480) { 
        fill(122, 23, 214); // click kleur
        spelStatus = UITLEG;
    }
    rect(440, 480, 400, 100);  // de knop

    // tekst van de knop
    fill("blue");
    textSize(60);
    text("UITLEG", 530, 550);

  // tekent uitlegscherm met uitleg
  if (spelStatus === UITLEG) {
    background("pink");
    fill("skyblue");
    textSize(100);
    text("Uitleg", 490, 130)
    fill("violet");
    textSize(28);
    text("Gebruik de pijltjes toetsen om te bewegen. Het doel van het spel is om vijanden dood te schieten.\nAls je vijanden dood schiet krijg je punten, als je 50 punten hebt gescored, dan heb je gewonnen.\nOok heb je verloren als je HP 0 is, dan ben je dood.\n\nTot slot kan je op spatie drukken om terug te gaan naar het beginscherm.\n\nveel succes! >_<", 40, 220)
    if (keyIsDown(32)) { // spatie
      spelStatus = BEGINSCHERM}
  }

  // tekent winnersscherm
  if (Points === 50) {
    spelStatus = WINNERSSCHERM;
    background("yellow");
     fill("purple")
    textSize(50);
    text("YOU WIN >:(", 350, 400)
  }
  
    
  
  // tekent games
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // tekent game-over scherm
    background("black");
    
     fill("violet")
    textSize(70);
    text("Game Over >:(", 400, 380)
    fill("red")
    textSize(30);
    text("Press Enter to Try Again", 450, 460)
    if (keyIsDown(13)) { // enter
      spelerX = 600;
      HP = 100;
      spelStatus = SPELEN;
    }
  }
}
