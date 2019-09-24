let grandmaUpgradeLevel = 0;

let grandmaUpgradeStore = [
  {
    cost: 1000,
    condition: null,
    name: 'Forwards from grandma'
  },
  {
    cost: 5000,
    condition: null,
    name: 'Steel-plated rolling pins'
  },
  {
    cost: 50000,
    condition: null,
    name: 'Lubricated dentures	'
  }
];

(() => {
  document.getElementById('upgradeCursor').addEventListener('click', () => {
    let upgrade = grandmaUpgradeStore[grandmaUpgradeLevel];
    if (compteur > upgrade.cost) {
      compteur = compteur - upgrade.cost;
      buyGrandma('multiply', 2);
      grandmaUpgradeLevel++;
    }
    console.log(grandmaLoopValue);
  });
})();
