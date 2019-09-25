(() => {
  //
  let idFarms = document.getElementById("increase_pricefarms");
  let countFarms = document.getElementById("count_farms");
  let buttonFarms = document.getElementById("purchase_farms");

  buttonFarms.addEventListener("click", () => {
    let priceFarms = parseInt(idFarms.innerHTML);

    if (priceFarms > saveObject.compteur) {
      console.log("T'as pas assez d'argent !");
    } else {
      let price = Math.round(parseInt(idFarms.innerHTML) * 1.15);
      idFarms.innerHTML = price;
      saveObject.purchase.farms.updatePrice = price;
      countFarms.innerHTML = parseInt(countFarms.innerHTML) + 1;
      saveObject.compteur = saveObject.compteur - priceFarms;
      if (saveObject.purchase.farms.updateLevel === 0) {
        buyUpdate("farms", "number", 8);
        console.log("First farms");
      } else {
        buyUpdate("farms", "number", 8);
      }
      saveObject.purchase.farms.updateLevel++;
    }
  });
})();
