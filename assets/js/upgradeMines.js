let minesUpgradeStore = [
  {
    cost: 120000,
    condition: null,
    name: "Sugar gas"
  },

  {
    cost: 600000,
    condition: null,
    name: "Megadrill"
  },
  {
    cost: 6e6,
    condition: null,
    name: "Ultradrill"
  },
  {
    cost: 600e6,
    condition: null,
    name: "Ultimadrill"
  },
  {
    cost: 60e9,
    condition: null,
    name: "H-bomb mining"
  },
  {
    cost: 6e12,
    condition: null,
    name: "Coreforge"
  },
  {
    cost: 6e15,
    condition: null,
    name: "Planesplitters"
  },
  {
    cost: 6e18,
    condition: null,
    name: "Canola oil wells"
  },
  {
    cost: 6e21,
    condition: null,
    name: "Mole people"
  },
  {
    cost: 6e24,
    condition: null,
    name: "Mine canaries"
  },
  {
    cost: 60e27,
    condition: null,
    name: "Bore again"
  }
];

(() => {
  document.getElementById("upgrademines").addEventListener("click", () => {
    console.log("mines upgrade clicked");
    let minesUpgradeLevel = saveObject.purchase.mines.upgradeLevel;
    let upgrade = minesUpgradeStore[minesUpgradeLevel];
    if (saveObject.compteur > upgrade.cost) {
      saveObject.compteur = saveObject.compteur - upgrade.cost;
      buyUpdate("mines", "multiply", 2);
      minesUpgradeLevel++;
      saveObject.purchase.mines.minesUpgradeLevel++;
      document.getElementById("minesUpgradeCost").innerText =
        minesUpgradeStore[minesUpgradeLevel].cost;
      document.getElementById(
        "minesUpgradeLevel"
      ).innerText = minesUpgradeLevel;
    }
  });
})();
