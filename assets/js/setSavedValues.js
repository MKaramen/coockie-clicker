const setSavedValues = () => {
  Object.keys(saveObject.purchase).forEach(building => {
    let setUpdateLevel = saveObject.purchase[building].updateLevel;
    let setUpdatePrice = saveObject.purchase[building].updatePrice;
    let setUpgradeLevel = saveObject.purchase[building].upgradeLevel;
    let setUpgradePrice = saveObject.purchase[building].upgradePrice;
    document.getElementById('count_' + building).innerText = setUpdateLevel;
    console.log(setUpgradePrice);
    document.getElementById(
      'increase_price' + building
    ).innerText = setUpdatePrice;

    document.getElementById(
      building + 'UpgradeLevel'
    ).innerText = setUpgradeLevel;
    document.getElementById(
      building + 'UpgradeCost'
    ).innerText = setUpgradePrice;
  });
};

(() => {
  //
})();
