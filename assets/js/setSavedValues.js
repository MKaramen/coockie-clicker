const setSavedValues = () => {
  Object.keys(saveObject.purchase).forEach(building => {
    console.log(saveObject.purchase[building]);
    let setUpdateLevel = saveObject.purchase[building].updateLevel;
    let setUpdatePrice = saveObject.purchase[building].updatePrice;
    let setUpgradeLevel = saveObject.purchase[building].upgradeLevel;
    let setUpgradePrice = saveObject.purchase[building].upgradePrice;
    console.log('count_' + building);
    document.getElementById('count_' + building).innerText = setUpdateLevel;
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
