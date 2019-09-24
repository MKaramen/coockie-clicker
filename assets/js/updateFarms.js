(() => {
  //
  let idFarms = document.getElementById("increase_priceFarms");
  let countFarms = document.getElementById("count_farms");
  let buttonFarms = document.getElementById("purchase_farms");

  buttonFarms.addEventListener("click", () => {
    let priceFarms = parseInt(idFarms.innerHTML);

    if (priceFarms > compteur) {
      console.log("pasassezdargent");
    } else {
      idFarms.innerHTML = Math.floor(parseInt(idFarms.innerHTML) * 1.15);
      countFarms.innerHTML = parseInt(countFarms.innerHTML) + 1;
      compteur = compteur - priceFarms;
      if (farmsNumber === 0) {
        buyFarms("number", 8);
        console.log("First farms");
      } else {
        buyFarms("number", 8);
        console("Farms give you a cookie");
      }
      farmsNumber++;
    }
  });
})();
