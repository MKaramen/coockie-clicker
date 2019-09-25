const setSavedValues = () => {
  Object.keys(saveObject.purchase).forEach(building => {
    console.log(saveObject.purchase[building]);
    let setUpdateLevel = saveObject.purchase[building].updateLevel;
    let setUpdatePrice = saveObject.purchase[building].updatePrice;
    console.log("count_" + building);
    document.getElementById("count_" + building).innerText = setUpdateLevel;
    document.getElementById(
      "increase_price" + building
    ).innerText = setUpdatePrice;
  });
};

(() => {
  //
})();
