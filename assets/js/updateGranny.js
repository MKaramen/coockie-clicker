(() => {
  //
  let idGranny = document.getElementById('increase_priceGranny');
  let countGranny = document.getElementById('count_granny');
  let buttonGranny = document.getElementById('purchase_granny');

  buttonGranny.addEventListener('click', () => {
    let priceGranny = parseInt(idGranny.innerHTML);

    if (priceGranny > saveObject.compteur) {
      console.log("T'as pas assez d'argent !");
    } else {
      idGranny.innerHTML = Math.round(parseInt(idGranny.innerHTML) * 1.15);
      countGranny.innerHTML = parseInt(countGranny.innerHTML) + 1;
      saveObject.compteur = saveObject.compteur - priceGranny;
      if (saveObject.purchase.grandma.updateLevel === 0) {
        buyUpdate('grandma', 'number', 1);
        console.log('First grandma');
      } else {
        buyUpdate('grandma', 'number', 1);
        console.log('Granny give you a cookie');
      }
      saveObject.purchase.grandma.updateLevel++;
    }
  });
})();
