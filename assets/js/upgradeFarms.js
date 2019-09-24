let farmsUpgradeLevel = 0;

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
  document.getElementById('upgradeCursor').addEventListener('click', () => {
    let upgrade = farmsUpgradeStore[farmsUpgradeLevel];
    if (compteur > upgrade.cost) {
      compteur = compteur - upgrade.cost;
      buyFarms('multiply', 2);
      farmsUpgradeLevel++;
    }
    console.log(farmsLoopValue);
  });
})();
