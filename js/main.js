window.addEventListener("load", function () {
  //  impostazione canvas
  const canvas = document.getElementById("canvas1");

  //   disegno: un oggetto che contiene tutti i metodi e le proprieta che permettono di disegnare e animare colori,forme e altre grafiche nell'elemento canvas
  const disegno = canvas.getContext("2d");

  canvas.width = 500;
  canvas.height = 500;

  //   tiene traccia degli input dei players
  class InputHandler {}
  //   tiene traccia dei laser sparati dai players
  class Projectile {}
  //   tiene traccia delle emissioni dei nemici
  class Particle {}
  //   controlla il personaggio del player
  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 120;
      this.speedY = 0;
    }
    update() {
      this.y += this.speedY;
    }
    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  // Blue print che gestisce i tipi di nemici
  class Enemy {}

  //   gestisce i background individuali sul nostro parallasse
  class Layer {}
  // unisce tutti gli oggetti di layer
  class background {}
  // crea punteggio, gestisce il tempo
  class UI {}
  // In questa classe saranno riuniti tutte le logiche sara il cervello del progetto
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
    }
    update() {
      this.player.update();
    }
    draw(context) {
      this.player.draw(context);
    }
  }
  const game = new Game(canvas.width, canvas.height);
  //   animation loop
  function animate() {
    disegno.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(disegno);
    requestAnimationFrame(animate);
  }
  animate();
});
