let compteur = 0;
let cursor = 1;

let cursorLoopTime = 10000;
let cursorLoopValue = 0;
let cursorNumber = 0;

let grandmaLoopTime = 1000;
let grandmaLoopValue = 0;
let grandmaNumber = 0;

let farmsLoopTime = 1000;
let farmsLoopValue = 0;
let farmsNumber = 0;

let saveObject = localStorage.saveObject || {
  compteur: compteur,
  purchase: {
    cursor: {
      cursorLoopTime: cursorLoopTime,
      cursorLoopValue: cursorLoopValue,
      cursorNumber: cursorNumber
    },
    grandma: {
      grandmaLoopTime: grandmaLoopTime,
      grandmaLoopValue: grandmaLoopValue,
      grandmaNumber: grandmaNumber
    },

    farms: {
      farmsLoopTime: farmsLoopTime,
      farmsLoopValue: farmsLoopValue,
      farmsNumber: farmsNumber
    }
  }
};

const reset = () => {
  compteur = 0;
  cursor = 1;

  cursorLoopTime = 10000;
  cursorLoopValue = 0;
  cursorNumber = 0;
  updateCookie();
};

// ? Update cookie on the page
const updateCookie = () => {
  document.getElementById('compteur').innerText = compteur;
};

// ? Update the value of added cookies when click with mouse
const updateClick = e => {
  cursor = cursor + e;
  console.log('new cursor is ' + cursor);
};

// ? Function that add a cookie to coompteur
const addCokie = e => {
  compteur = compteur + e;
  updateCookie();
};

// ? Function add cookies automaticly
const cursorLoop = () => {
  setTimeout(() => {
    addCokie(cursorLoopValue);
    console.log('im loopin');
    cursorLoop();
  }, cursorLoopTime);
};

const buyCursor = (arg, value) => {
  if (arg == 'timediv') {
    cursorLoopTime = cursorLoopTime / value;
    console.log('timediv');
  }
  if (arg == 'number') {
    cursorLoopValue = cursorLoopValue + value;
    console.log('number');
  }
  if (arg == 'multiply') {
    cursorLoopValue = cursorLoopValue * value;
    console.log('number');
  }
  updateCookie();
};

const buyGrandma = (arg, value) => {
  if (arg == 'timediv') {
    grandmaLoopTime = grandmaLoopTime / value;
    console.log('timediv');
  }
  if (arg == 'number') {
    grandmaLoopValue = grandmaLoopValue + value;
    console.log('number');
  }
  if (arg == 'multiply') {
    grandmaLoopValue = grandmaLoopValue * value;
    console.log('number');
  }
  updateCookie();
};

const buyFarms = (arg, value) => {
  if (arg == 'timediv') {
    farmsLoopTime = farmsLoopTime / value;
    console.log('timediv');
  }
  if (arg == 'number') {
    farmsLoopValue = farmsLoopValue + value;
    console.log('number');
  }
  if (arg == 'multiply') {
    farmsLoopValue = farmsLoopValue * value;
    console.log('number');
  }
  updateCookie();
};

const save = () => {
  saveObject = {
    compteur: compteur,
    purchase: {
      cursor: {
        cursorLoopTime: cursorLoopTime,
        cursorLoopValue: cursorLoopValue,
        cursorNumber: cursorNumber
      }
    }
  };
  localStorage.setItem('saveObject', saveObject);
};
// ? Page Setup
(() => {
  document.getElementById('cookie').addEventListener('click', () => {
    addCokie(cursor);
    console.log(compteur);
  });

  cursorLoop();
})();
