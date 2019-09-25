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
  },
  {
    type: 'multiply',
    value: 2,
    cost: 10e6,
    condition: null,
    name: 'Ambidextrous'
  },
  {
    type: 'multiply',
    value: 2,
    cost: 10e9,
    condition: null,
    name: 'Ambidextrous'
  },
  {
    type: 'multiply',
    value: 2,
    cost: 10e12,
    condition: null,
    name: 'Ambidextrous'
  }
];

(() => {
  document.getElementById('upgradeCursor').addEventListener('click', () => {
    // Change image
    if ((upgradeImage.cursor = 0)) {
      upgradeImage.cursor = 1;
      document
        .getElementById('cursor_image')
        .setAttribute('src', `assets/img/upgrade1.svg`);
    }
    if ((upgradeImage.cursor = 1)) {
      upgradeImage.cursor = 0;
      document
        .getElementById('cursor_image')
        .setAttribute('src', `assets/img/upgrade2.svg`);
    }
    //Update les points
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
    } else {
      console.log("T'as pas assez d'argent !");
    }
  });
})();
