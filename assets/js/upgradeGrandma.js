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
  },
  {
    cost: 5000000,
    condition: null,
    name: 'Pruine juice'
  },
  {
    cost: 5000000000,
    condition: null,
    name: 'Double-thick glasses'
  },
  {
    cost: 50000000000,
    condition: null,
    name: 'Aging agents'
  },
  {
    cost: 50000000000000,
    condition: null,
    name: 'Xtreme walkers'
  },
  {
    cost: 50000000000000000,
    condition: null,
    name: 'The Unbriding'
  },
  {
    cost: 50000000000000000000,
    condition: null,
    name: 'Reverse dementia'
  },
  {
    cost: 50000000000000000000000,
    condition: null,
    name: 'Timeproof hair dyes'
  },
  {
    cost: 500e24,
    condition: null,
    name: 'Good manners'
  }
];

(() => {
  document.getElementById('upgradeGrandma').addEventListener('click', () => {
    let grandmaUpgradeLevel = saveObject.purchase.grandma.upgradeLevel;
    let upgrade = grandmaUpgradeStore[grandmaUpgradeLevel];
    if (saveObject.compteur > upgrade.cost) {
      saveObject.compteur = saveObject.compteur - upgrade.cost;
      buyUpdate('multiply', 2);
      grandmaUpgradeLevel++;
      saveObject.purchase.grandma.upgradeLevel++;
      document.getElementById('grandmaUpgradeCost').innerText =
        grandmaUpgradeStore[grandmaUpgradeLevel].cost;
      document.getElementById('grandmaUpgradeLevel').innerText =
        saveObject.purchase.grandma.upgradeLevel;
    } else {
      console.log("T'as pas assez d'argent !");
    }
  });
})();
