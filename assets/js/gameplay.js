let compteur = 0;
let cursor = 1;

let cookieLoopTime = 1000;
let cookieLoopValue = 1;

let saveObject = {
  compteur: compteur,
  achats: {}
};

// ? Update cookie on the page
const updateCookie = () => {
  document.getElementById('compteur').innerText = compteur;
};

// ? Update the value of added cookies when click with mouse
const updateCursor = e => {
  cursor = cursor + e;
  console.log('new cursor is ' + cursor);
};

// ? Function that add a cookie to coompteur
const addCokie = e => {
  compteur = compteur + e;
  updateCookie();
};

// ? Function add cookies automaticly
const cookieLoop = () => {
  setTimeout(function() {
    addCokie(cookieLoopValue);
    cookieLoop();
  }, cookieLoopTime);
};

// ? Page Setup
(() => {
  document.getElementById('cookie').addEventListener('click', () => {
    addCokie(cursor);
    console.log(compteur);
  });

  cookieLoop();
})();
