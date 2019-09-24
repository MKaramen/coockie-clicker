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
    let autoClickLevel = saveObject.purchase.cursor.upgradeLevel;
    let upgrade = autoClickStore[autoClickLevel];
    if (saveObject.compteur > upgrade.cost) {
      saveObject.compteur = saveObject.compteur - upgrade.cost;
      buyUpdate('cursor', upgrade.type, upgrade.value);
      saveObject.purchase.cursor.upgradeLevel++;
      autoClickLevel++;
      saveObject.cursor++;
      document.getElementById('cursorUpgradeCost').innerText =
        autoClickStore[autoClickLevel].cost;
      document.getElementById('cursorUpgradeLevel').innerText = autoClickLevel;
      console.log('cursor updated to ', saveObject.cursor);
    }
  });
})();
