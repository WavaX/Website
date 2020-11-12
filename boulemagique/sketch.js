let pressed = false;
let touch = false;
let mode = false;
let back = false;

let img;

const answers = [
  "Oui",
  "Non",
  "Peut-être(oui)",
  "Peut-être(non)",
  "Cela m'étonnerait",
  "Bien sûr",
  "Possible",
  "Impossible",
  "Je sais pas Lohan m'a dérangé...",
  "Évidemment !",
  "Selon mes conctacts avec dieu, non",
  "Selon mes conctacts avec dieu, oui",
  "Je suis certain que cela est vrai",
  "Je suis certain que cela est faux",
  "Le crâne chauve de Lohan m'a prouvé\nque cela est la véritée",
  "Faux",
  "Vrai",
];

const lohanswersP = [
  "C'est de Lohan que tu parles ? Bien sûr !!",
  "Évidemment!",
  "Lohan pratique déjà l'inceste, alors pourquoi pas ?",
  "Lohan aime se rentrer des jets d'eau\ndans le derrière alors... Oui",
  "Bien sûr... Même Benoît l'a dit !",
  "Probable... Même que, je suis sûr à 100%",
];
const lohanswersN = [
  "Mais non Lohan n'est pas cela",
  "Tu blagues j'espère ! On parle de Lohan là !",
  "Dans tes rêves Lohan !",
  "Bien sûr !....... Que non ;)",
  "Non Lohan, wow t'es vraiment con",
  "Pas le plus gros des QI à avoir pensé ça",
  "Pardon Lohan, mais cela est impossible",
];

const eloiP = [
  "Bien sûr, Eloi est cela",
  "Évidemment, on parle du grand dieu Eloi",
  "C'est sûr !",
  "Absolument",
  "Avec les sources qui me sont conférées,\nc'est bien sûr oui",
  "Oui, je suis sûr sans auncun doute !",
  "Effectivement c'est vrai",
];
const eloiN = [
  "Attention tu parles de notre maître, alors non",
  "Mais t'es vraiment con... Non",
  "Oups...\nJe pense que tu dois confondre avec Lohan !",
  "Excuse toi immédiatement... La réponse est non !",
  "Moi, la Boule Magique avait,\nune plus grande estime de toi...\nLa réponse est non",
  "Mais tu as le QI de Lohan ou quoi, c'est non",
  "On parle pas de Lohan là, c'est non",
];

const elliotP = [
  "Si tu parles de Elliot, c'est sûr !",
  "Absolument, Elliot est quand même un Pro Player !",
  "Certainement, pourquoi te poses-tu cette question ?",
];
const elliotN = [
  "Oups...\nJe pense que tu dois confondre avec Lohan !",
  "Réfléchis avant de poser ta question, gros nul",
  "Mais wow ! Pourquoi Elliot serait cela ?",
  "Pourquoi dis-tu juste des véritées sur Lohan ?",
];

const malikP = [
  "Sans aucun doutes, Malik est un homme incroyable",
  "C'est indubitable, Malik est un incroyable dieu",
  "Lohan est tellement obèse\nque même Nathan ne pourrait pas le manger\nen une semaine",
];
const malikN = [
  "Mais pour qui te crois tu ?\nMalik est excesivement un pro player",
  "Oses-tu vraiment baragouiner\ndans le dos d'une telle personne",
  "Utilises ton cerveau,\nà moins que t'en ailles pas ?",
  "Incroyablement deçu de ton comportement",
  "Je te croyais moins con :'(",
  "Oups...\nJe pense que tu dois confondre avec Lohan !",
];

const bouleP = [
  "Comment ça tu ne fais pas confiance\nà la Boule Magique ?\nElle dit toujours la véritée",
  "Le meilleur moyen de savoir la véritée,\nc'est de demander à la Boule Magique",
];

const history = [];

let selected = answers;

function preload() {
  img = loadImage("maxlohel.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  refresh();
  touchStarded();
}

function refresh() {
  background(0);
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(
    "Bienvenue sur la Boule Magique Lohan !\n\nVous pouvez poser votre question à l'oral\n(appuyez sur Espace).",
    width / 2,
    100
  );

  let str = "";
  for (let el of history) {
    str += `${el}\n`;
  }
  textSize(25);
  text("Historique des réponses : ", 150, height - 200);
  textSize(15);
  text(str, 150, height - 150);

  image(img, 50, 50, 200, 200);
  image(img, width - 250, 50, 200, 200);

  fill(255);
  noStroke();
  textSize(20);
  fill(255, 0, 0);
  text("Aide ==>", width - 100, height - 20);
  rect(width - 50, height - 50, 50, 50);
}

function mousePressed() {
  if (mouseX >= width - 50 && mouseY >= height - 50) {
    console.log("You are in the help section");
    back = true;
    background(0);
    textSize(30);
    fill(255);
    text(
      "\npaypal.me/wavax1 \n\nBienvenue dans la section aide.\nPour avoir des informations veuillez contacter Eloi ou Malik.\nPour des erreurs techniques criez sur Lohan.\nPour des dons de plus de 1 ¢, contactez Eloi et Malik\n(chaques dons sera réinvesti dans la Boule Magique).\n\nPour affichez vos réponses appuyez sur Espace, vous pouvez faire apparaître une réponse\nchaque 3 secondes.\n\nSi vous avez des suggestions pour des réponses ou autre,\ncontactez Eloi ou Malik.\n\nMerci,\npassez une bonne journée,\nPour retourner sur la Boule Magique, appuyez sur HOME. ",
      width / 2,
      40
    );
    pressed = true;
  }
}

function keyPressed() {
  if (back == true) {
    if (keyCode == 36) {
      clear();
      setTimeout(function () {
        refresh();
      }, 500);
      back = false;
      pressed = false;
    }
  }

  function touchStarted() {
    const s = random(selected);
    history.unshift(s);
    if (history.length > 5) history.pop();
    textSize(50);
    fill(0, 255, 255);
    text("" + s, width / 2, height - 300);
    console.log("%c Your answer is there", `color:pink;`);
    setTimeout(function () {
      refresh();
      pressed = false;

      console.log("%c You can now press", "color:green;");
      setTimeout(() => console.clear(), 1000);
    }, 3000);
  }

  if (!pressed) {
    if (key == " ") {
      pressed = true;

      const s = random(selected);
      history.unshift(s);
      if (history.length > 5) history.pop();
      textSize(50);
      fill(0, 255, 255);
      text("" + s, width / 2, height - 300);
      console.log("%c Your answer is there", `color:pink;`);
      setTimeout(function () {
        refresh();
        pressed = false;

        console.log("%c You can now press", "color:green;");
        setTimeout(() => console.clear(), 1000);
      }, 3000);
    }
  }

  if (keyCode == SHIFT) {
    mode = !mode;
    selected = answers;
  }

  if (mode) {
    //Lohan
    if (key == "l") {
      selected = lohanswersP;
    }

    if (key == ";") {
      selected = lohanswersN;
    }

    //normal
    if (key == "a") {
      selected = answers;
    }

    //Eloi
    if (key == "j") {
      selected = eloiP;
    }

    if (key == "k") {
      selected = eloiN;
    }

    //elliot
    if (key == ".") {
      selected = elliotP;
    }

    if (key == "é") {
      selected = elliotN;
    }

    //Malik
    if (key == "m") {
      selected = malikP;
    }

    if (key == ",") {
      selected = malikN;
    }

    if (key == "b") {
      selected = bouleP;
    }
  }
}
