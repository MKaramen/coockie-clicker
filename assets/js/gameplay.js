let initObject = {
  compteur: 0,
  cursor: 1,
  perSec: 0,
  purchase: {
    cursor: {
      loopTime: 10000,
      loopValue: 0,
      updateLevel: 0,
      upgradeLevel: 0,
      updatePrice: 15,
      upgradePrice: 100
    },
    grandma: {
      loopTime: 1000,
      loopValue: 0,
      updateLevel: 0,
      upgradeLevel: 0,
      updatePrice: 100,
      upgradePrice: 1000
    },
    farms: {
      loopTime: 1000,
      loopValue: 0,
      updateLevel: 0,
      upgradeLevel: 0,
      updatePrice: 1100,
      upgradePrice: 11000
    },
    mines: {
      loopTime: 1000,
      loopValue: 0,
      updateLevel: 0,
      upgradeLevel: 0,
      updatePrice: 12000,
      upgradePrice: 120000
    },
    factories: {
      loopTime: 1000,
      loopValue: 0,
      updateLevel: 0,
      upgradeLevel: 0,
      updatePrice: 130000,
      upgradePrice: 1300000
    }
  }
};

const upgradeImage = {
  cursor: false,
  grandma: false,
  farms: false,
  mines: false,
  factories: false
};

let globalLoopTime = 100;
let globalLoopValue = 0;
let timer = null;

// ? Update cookie on the page
const updateCookie = () => {
  document.getElementById('compteur').innerText = saveObject.compteur;
};

// ? Update the value of click with mouse
const updateClick = e => {
  saveObject.cursor = saveObject.cursor + Math.round(e);
  console.log('new cursor is ' + cursor);
};

// ? Function that add a cookie to coompteur
const addCookie = e => {
  saveObject.compteur = saveObject.compteur + Math.round(e);
  updateCookie();
};

// ? Update and Upgrade

const buyUpdate = (building, arg, value) => {
  if (arg == 'timediv') {
    saveObject.purchase[building].loopTime =
      saveObject.purchase[building].loopTime / value;
  }
  if (arg == 'number') {
    saveObject.purchase[building].loopValue =
      saveObject.purchase[building].loopValue + value;
  }
  if (arg == 'multiply') {
    saveObject.purchase[building].loopValue =
      saveObject.purchase[building].loopValue * value;
  }
  updateCookie();
  smoother();
};

const upgradeBuilding = building => {
  console.log(building + ' upgrade clicked');
  let level = saveObject.purchase[building].upgradeLevel;
  let upgrade = upgrade[buidling][level];
  if (saveObject.compteur > upgrade.cost) {
    saveObject.compteur = saveObject.compteur - upgrade.cost;
    buyUpdate(building, upgrade.type, upgrade.value);
    saveObject.purchase[building].upgradeLevel++;
    level++;
    saveObject.purchase[building].upgradePrice = autoClickStore[level].cost;
    document.getElementById(building + 'UpgradeCost').innerText =
      autoClickStore[level].cost;
    document.getElementById(building + 'UpgradeLevel').innerText = level;
  }
};

// ? GLOBAL LOOP

const globalLoop = (time, value) => {
  timer = setInterval(() => {
    addCookie(value);
  }, time);
};

// ? Smoother

const smoother = () => {
  clearInterval(timer);
  let time = 0,
    value = 0;
  Object.keys(saveObject.purchase).forEach(building => {
    value += saveObject.purchase[building].loopValue;
    if (saveObject.purchase[building].loopValue !== 0) {
      time += saveObject.purchase[building].loopTime;
    }
  });
  let timePerCookie = +(time / value).toFixed();
  globalLoopTime = timePerCookie;
  globalLoopValue = 1;
  if (timePerCookie < 50) {
    globalLoopTime = 50;
    globalLoopValue = +((value / time) * 50).toFixed(4);
  }
  if (time === 0) {
    return;
  }
  console.log('adding ' + globalLoopValue + ' every ' + globalLoopTime + 'ms');
  globalLoop(globalLoopTime, globalLoopValue);
};

const save = () => {
  let time = new Date();
  let timestamp = time.getTime();
  saveObject.saveTime = timestamp;
  localStorage.setItem('saveObject', JSON.stringify(saveObject));
  console.log('saved');
};

const reset = () => {
  saveObject = initObject;
  clearInterval(timer);
  save();
  updateCookie();
  setSavedValues();
};

// ? Check cookie per second
const coockieSeconde = () => {
  let prevCount = saveObject.compteur;
  setTimeout(() => {
    let newCount = saveObject.compteur;
    let diff = newCount - prevCount;
    if (diff < 0) {
      coockieSeconde();
      return;
    }
    document.getElementById('compter_sec').innerText = diff;
    saveObject.perSec = diff;
    coockieSeconde();
  }, 1000);
};

// ! SAVE EVERY 30 SEC
const autoSave = () => {
  setInterval(() => {
    console.log('saving....');
    save();
  }, 30000);
};

// * INITIALISE

let saveObject = {};
if (localStorage.saveObject) {
  saveObject = JSON.parse(localStorage.saveObject);
  setSavedValues();
  smoother();
  if (saveObject.perSec != 0) {
    let time = new Date().getTime();
    let timeDif = Math.floor((time - saveObject.saveTime) / 1000);
    let addAwayCookie = Math.floor(timeDif * saveObject.perSec * 0.5);
    alert(
      `You were ${timeDif} seconds away, you got ${addAwayCookie} cookies !`
    );
    addCookie(addAwayCookie);
  }
} else {
  saveObject = initObject;
}

// ? Page Setup
(() => {
  document.getElementById('cookie').addEventListener('click', () => {
    addCookie(saveObject.cursor);
  });
  coockieSeconde();
  updateCookie();
  autoSave();
})();
