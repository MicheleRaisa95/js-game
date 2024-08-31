window.addEventListener("load", function () {
  //  impostazione canvas
  const canvas = document.getElementById("canvas1");

  //   disegno: un oggetto che contiene tutti i metodi e le proprieta che permettono di disegnare e animare colori,forme e altre grafiche nell'elemento canvas
  const disegno = canvas.getDisegno("2d");

  canvas.width = 500;
  canvas.height = 500;

  //   tiene traccia degli input dei players
  class InputHandler {}
  //   tiene traccia dei laser sparati dai players
  class Projectile {}
  //   tiene traccia delle emissioni dei nemici
  class Particle {}
  //   controlla il personaggio del player
  class Player {}
  // Blue print che gestisce i tipi di nemici
  class Enemy {}

  //   gestisce i background individuali sul nostro parallasse
  class Layer {}
  // unisce tutti gli oggetti di layer
  class background {}
  // crea punteggio, gestisce il tempo
  class UI {}
  // In questa classe saranno riuniti tutte le logiche sara il cervello del progetto
  class Game {}
});
