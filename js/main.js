window.addEventListener("load", function () {
  //  impostazione canvas
  const canvas = document.getElementById("canvas1");

  //   disegno: un oggetto che contiene tutti i metodi e le proprieta che permettono di disegnare e animare colori,forme e altre grafiche nell'elemento canvas
  const disegno = canvas.getDisegno("2d");

  canvas.width = 1500;
  canvas.height = 500;
});
