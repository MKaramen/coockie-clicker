(() => {
  //
  let idGranny = document.getElementById("increase_pricegrandma");
  let countGranny = document.getElementById("count_grandma");
  let buttonGranny = document.getElementById("purchase_grandma");

  buttonGranny.addEventListener("click", () => {
    let priceGranny = parseInt(idGranny.innerHTML);

    if (priceGranny > saveObject.compteur) {
      console.log("T'as pas assez d'argent !");
    } else {
      let price = Math.round(parseInt(idGranny.innerHTML) * 1.15);
      idGranny.innerHTML = price;
      saveObject.purchase.grandma.updatePrice = price;
      countGranny.innerHTML = parseInt(countGranny.innerHTML) + 1;
      saveObject.compteur = saveObject.compteur - priceGranny;
      if (saveObject.purchase.grandma.updateLevel === 0) {
        buyUpdate("grandma", "number", 1);
        console.log("First grandma");
      } else {
        buyUpdate("grandma", "number", 1);
        console.log("Granny give you a cookie");
      }
      saveObject.purchase.grandma.updateLevel++;
    }
  });
})();
