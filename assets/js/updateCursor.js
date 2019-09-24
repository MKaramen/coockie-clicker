(() => {
  //
  let idCursor = document.getElementById('increase_priceCursor');
  let countCursor = document.getElementById('count_cursor');
  let buttonCursor = document.getElementById('purchase_cursor');

  buttonCursor.addEventListener('click', () => {
    let priceCursor = parseInt(idCursor.innerHTML);

    if (priceCursor>compteur) {
      console.log('pasassezdargent');
    }
    else {
      idCursor.innerHTML = Math.floor(parseInt(idCursor.innerHTML)*1.15);
      countCursor.innerHTML = parseInt(countCursor.innerHTML)+1;
      compteur=compteur-priceCursor;
      if (cursorNumber===0) {
      buyCursor('number',1);
      }
      else {
      buyCursor('timediv',2);
      }
      cursorNumber++;
    }
  });
})();
