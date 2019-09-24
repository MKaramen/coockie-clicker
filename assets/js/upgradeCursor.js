let autoClickLevel = 0;

let autoClickStore = [
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

    let upgrade = autoClickStore[autoClickLevel];
    if (compteur > upgrade.cost) {
      compteur = compteur - upgrade.cost;
      buyCursor(upgrade.type, upgrade.value);
      autoClickLevel++;
      cursor++;
      document.getElementById('cursorUpgradeCost').innerText =
        autoClickStore[autoClickLevel].cost;
      document.getElementById('cursorUpgradeLevel').innerText = autoClickLevel;
    }
    console.log(cursorLoopValue);
  });
})();
