(() => {
  //
  let idMines = document.getElementById('increase_pricemines');
  let countMines = document.getElementById('count_mines');
  let buttonMines = document.getElementById('purchase_mines');

  buttonMines.addEventListener('click', () => {
    let priceMines = parseInt(idMines.innerHTML);

    if (priceMines > saveObject.compteur) {
      console.log("T'as pas assez d'argent !");
    } else {
      let price = Math.round(parseInt(idMines.innerHTML) * 1.15);
      idMines.innerHTML = price;
      saveObject.purchase.mines.updatePrice = price;
      countMines.innerHTML = parseInt(countMines.innerHTML) + 1;
      saveObject.compteur = saveObject.compteur - priceMines;
      if (saveObject.purchase.mines.updateLevel === 0) {
        buyUpdate('mines', 'number', 47);
        console.log('First mines');
      } else {
        buyUpdate('mines', 'number', 47);
      }
      saveObject.purchase.mines.updateLevel++;
    }
  });
})();
