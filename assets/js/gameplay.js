let initObject = {
  compteur: 0,
  cursor: 1,
  purchase: {
    cursor: {
      loopTime: 10000,
      loopValue: 0,
      updateLevel: 0,
      upgradeLevel: 0
    },
    grandma: {
      loopTime: 1000,
      loopValue: 0,
      updateLevel: 0,
      upgradeLevel: 0
    },
    farms: {
      loopTime: 1000,
      loopValue: 0,
      updateLevel: 0,
      upgradeLevel: 0
    },
    mines: {
      loopTime: 1000,
      loopValue: 0,
      updateLevel: 0,
      upgradeLevel: 0
    },
    factories: {
      loopTime: 1000,
      loopValue: 0,
      updateLevel: 0,
      upgradeLevel: 0
    }
  }
};

// * INITIALISE

let saveObject = {};
if (localStorage.saveObject) {
  saveObject = JSON.parse(localStorage.saveObject);
} else {
  saveObject = initObject;
}

// ? Update cookie on the page
const updateCookie = () => {
  document.getElementById('compteur').innerText = saveObject.compteur;
};

// ? Update the value of click with mouse
const updateClick = e => {
  saveObject.cursor = saveObject.cursor + e;
  console.log('new cursor is ' + cursor);
};

// ? Function that add a cookie to coompteur
const addCookie = e => {
  saveObject.compteur = saveObject.compteur + e;
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
};

// ? ALL LOOPS

const cursorLoop = () => {
  setTimeout(() => {
    addCookie(saveObject.purchase.cursor.loopValue);
    cursorLoop();
  }, saveObject.purchase.cursor.loopTime);
};

const grandmaLoop = () => {
  setTimeout(() => {
    addCookie(saveObject.purchase.grandma.loopValue);
    grandmaLoop();
  }, saveObject.purchase.grandma.loopTime);
};

const farmsLoop = () => {
  setTimeout(() => {
    addCookie(saveObject.purchase.farms.loopValue);
    farmsLoop();
  }, saveObject.purchase.farms.loopTime);
};

const minesLoop = () => {
  setTimeout(() => {
    addCookie(saveObject.purchase.mines.loopValue);
    minesLoop();
  }, saveObject.purchase.mines.loopTime);
};

const factoryLoop = () => {
  setTimeout(() => {
    addCookie(saveObject.purchase.factory.loopValue);
    factoryLoop();
  }, saveObject.purchase.factory.loopTime);
};

const save = () => {
  localStorage.setItem('saveObject', JSON.stringify(saveObject));
  console.log('saved');
};

const reset = () => {
  saveObject = initObject;
  updateCookie();
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

// ? Page Setup
(() => {
  document.getElementById('cookie').addEventListener('click', () => {
    addCookie(saveObject.cursor);
  });
  coockieSeconde();
  cursorLoop();
  grandmaLoop();
  farmsLoop();
  updateCookie();
  autoSave();
})();
