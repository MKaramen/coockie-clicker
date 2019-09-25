(() => {
  //
  let idCursor = document.getElementById("increase_pricecursor");
  let countCursor = document.getElementById("count_cursor");
  let buttonCursor = document.getElementById("purchase_cursor");

  buttonCursor.addEventListener("click", () => {
    let priceCursor = parseInt(idCursor.innerHTML);

    if (priceCursor > saveObject.compteur) {
      console.log("T'as pas assez d'argent !");
    } else {
      let price = Math.round(parseInt(idCursor.innerHTML) * 1.15);
      idCursor.innerText = price;
      saveObject.purchase.cursor.updatePrice = price;
      countCursor.innerHTML = parseInt(countCursor.innerHTML) + 1;
      saveObject.compteur = saveObject.compteur - priceCursor;
      if (saveObject.purchase.cursor.updateLevel === 0) {
        buyUpdate("cursor", "number", 1);
      } else {
        buyUpdate("cursor", "number", 1);
      }
      saveObject.purchase.cursor.updateLevel++;
    }
  });
})();
