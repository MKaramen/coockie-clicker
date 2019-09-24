(() => {
  //
  let idGranny = document.getElementById("increase_priceGranny");
  let countGranny = document.getElementById("count_granny");
  let buttonGranny = document.getElementById("purchase_granny");

  buttonGranny.addEventListener("click", () => {
    let priceGranny = parseInt(idGranny.innerHTML);

    if (priceGranny > compteur) {
      console.log("pasassezdargent");
    } else {
      idGranny.innerHTML = Math.floor(parseInt(idGranny.innerHTML) * 1.15);
      countGranny.innerHTML = parseInt(countGranny.innerHTML) + 1;
      compteur = compteur - priceGranny;
      if (grandmaNumber === 0) {
        buyGrandma("number", 1);
        console.log("First grandma");
      } else {
        buyGrandma("number", 1);
        console("Granny give you a cookie");
      }
      grandmaNumber++;
    }
  });
})();
