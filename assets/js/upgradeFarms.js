let farmsUpgradeStore = [
  {
    cost: 11000,
    condition: null,
    name: 'Forwards from farms'
  },
  {
    cost: 55000,
    condition: null,
    name: 'Steel-plated rolling pins'
  },
  {
    cost: 550000,
    condition: null,
    name: 'Lubricated dentures	'
  }
];

(() => {
  document.getElementById('upgradeFarms').addEventListener('click', () => {
    console.log('Farms upgrade clicked');
    let farmsUpgradeLevel = saveObject.purchase.farms.upgradeLevel;
    let upgrade = farmsUpgradeStore[farmsUpgradeLevel];
    if (saveObject.compteur > upgrade.cost) {
      saveObject.compteur = saveObject.compteur - upgrade.cost;
      buyUpdate('farms', 'multiply', 2);
      farmsUpgradeLevel++;
      saveObject.purchase.farms.farmsUpgradeLevel++;
      document.getElementById('farmsUpgradeCost').innerText =
        farmsUpgradeStore[farmsUpgradeLevel].cost;
      document.getElementById(
        'farmsUpgradeLevel'
      ).innerText = farmsUpgradeLevel;
    }
  });
})();
