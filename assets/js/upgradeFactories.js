let factoriesUpgradeStore = [
  {
    cost: 1300000,
    condition: null,
    name: 'Studier conveyor belts'
  },
  {
    cost: 6500000,
    condition: null,
    name: 'Child labor'
  },
  {
    cost: 65e6,
    condition: null,
    name: 'Sweatshop'
  },
  {
    cost: 65e8,
    condition: null,
    name: 'Radium reactors'
  },
  {
    cost: 650e9,
    condition: null,
    name: 'Recombobulators'
  },
  {
    cost: 65e12,
    condition: null,
    name: 'Deep-bake process'
  },
  {
    cost: 65e15,
    condition: null,
    name: 'Cyborg workforce'
  },
  {
    cost: 65e18,
    condition: null,
    name: '78-hour days'
  },
  {
    cost: 65e21,
    condition: null,
    name: 'Machine learning'
  },
  {
    cost: 65e24,
    condition: null,
    name: 'Brownie point system'
  },
  {
    cost: 650e27,
    condition: null,
    name: '"Volunteer"interns'
  }
];

(() => {
  document.getElementById('upgradefactories').addEventListener('click', () => {
    // Change image
    if ((upgradeImage.factories = 0)) {
      upgradeImage.factories = 1;
      document
        .getElementById('factories_img')
        .setAttribute('src', `assets/img/upgrade_factories1.svg`);
    }
    if ((upgradeImage.factories = 1)) {
      upgradeImage.factories = 0;
      document
        .getElementById('factories_img')
        .setAttribute('src', `assets/img/upgrade_factories2.svg`);
    }
    //Update les points
    let factoriesUpgradeLevel = saveObject.purchase.factories.upgradeLevel;
    let upgrade = factoriesUpgradeStore[factoriesUpgradeLevel];
    if (saveObject.compteur > upgrade.cost) {
      saveObject.compteur = saveObject.compteur - upgrade.cost;
      buyUpdate('factories', 'multiply', 2);
      factoriesUpgradeLevel++;
      saveObject.purchase.factories.factoriesUpgradeLevel++;
      document.getElementById('factoriesUpgradeCost').innerText =
        factoriesUpgradeStore[factoriesUpgradeLevel].cost;
      document.getElementById(
        'factoriesUpgradeLevel'
      ).innerText = factoriesUpgradeLevel;
    }
  });
})();
