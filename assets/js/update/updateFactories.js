(() => {
  //
  let idFactories = document.getElementById('increase_pricefactories');
  let countFactories = document.getElementById('count_factories');
  let buttonFactories = document.getElementById('purchase_factories');

  buttonFactories.addEventListener('click', () => {
    let priceFactories = parseInt(idFactories.innerHTML);

    if (priceFactories > saveObject.compteur) {
      console.log("T'as pas assez d'argent !");
    } else {
      let price = Math.round(parseInt(idFactories.innerHTML) * 1.15);
      idFactories.innerHTML = price;
      saveObject.purchase.factories.updatePrice = price;
      countFactories.innerHTML = parseInt(countFactories.innerHTML) + 1;
      saveObject.compteur = saveObject.compteur - priceFactories;
      if (saveObject.purchase.factories.updateLevel === 0) {
        buyUpdate('factories', 'number', 47);
        console.log('First factories');
      } else {
        buyUpdate('factories', 'number', 47);
      }
      saveObject.purchase.factories.updateLevel++;
    }
  });
})();
