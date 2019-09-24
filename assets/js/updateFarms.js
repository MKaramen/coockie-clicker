(() => {
  //
  let idFarms = document.getElementById('increase_priceFarms');
  let countFarms = document.getElementById('count_farms');
  let buttonFarms = document.getElementById('purchase_farms');

  buttonFarms.addEventListener('click', () => {
    let priceFarms = parseInt(idFarms.innerHTML);

    if (priceFarms > saveObject.compteur) {
      console.log("T'as pas assez d'argent !");
    } else {
      idFarms.innerHTML = Math.round(parseInt(idFarms.innerHTML) * 1.15);
      countFarms.innerHTML = parseInt(countFarms.innerHTML) + 1;
      saveObject.compteur = saveObject.compteur - priceFarms;
      if (saveObject.purchase.farms.updateLevel === 0) {
        buyUpdate('farms', 'number', 8);
        console.log('First farms');
      } else {
        buyUpdate('farms', 'number', 8);
      }
      saveObject.purchase.farms.updateLevel++;
    }
  });
})();
