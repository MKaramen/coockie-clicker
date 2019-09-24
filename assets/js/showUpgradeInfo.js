(() => {
  //
})();
var div = document.querySelectorAll('.upgrade_button');
for (var i = div.length; i--; ) {
  (function() {
    var t;
    div[i].onmouseover = function() {
      hideAll();
      clearTimeout(t);
      this.className = 'NameHighlightsHover';
    };
    div[i].onmouseout = function() {
      var self = this;
      t = setTimeout(function() {
        self.className = 'NameHighlights';
      }, 300);
    };
  })();
}

function hideAll() {
  for (var i = span.length; i--; ) {
    span[i].className = 'NameHighlights';
  }
}
