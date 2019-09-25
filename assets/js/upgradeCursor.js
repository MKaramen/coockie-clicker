const autoClickStore = [
  {
    type: 'multiply',
    value: 2,
    cost: 100,
    condition: null,
    name: 'Reinforced Index'
  },
  {
    type: 'multiply',
    value: 2,
    cost: 500,
    condition: null,
    name: 'Carpal Tunnel'
  },
  {
    type: 'multiply',
    value: 2,
    cost: 10000,
    condition: null,
    name: 'Ambidextrous'
  }
];

(() => {
  document.getElementById('upgradeCursor').addEventListener('click', () => {
    console.log('cursor upgrade clicked');
    let level = saveObject.purchase.cursor.upgradeLevel;
    let upgrade = autoClickStore[level];
    if (saveObject.compteur > upgrade.cost) {
      saveObject.compteur = saveObject.compteur - upgrade.cost;
      buyUpdate('cursor', upgrade.type, upgrade.value);
      saveObject.purchase.cursor.upgradeLevel++;
      level++;
      saveObject.cursor++;
      saveObject.purchase.cursor.upgradePrice = autoClickStore[level].cost;
      document.getElementById('cursorUpgradeCost').innerText =
        autoClickStore[level].cost;
      document.getElementById('cursorUpgradeLevel').innerText = level;
      console.log('cursor gives you ', saveObject.cursor, 'cookies');
    }
  });
})();
