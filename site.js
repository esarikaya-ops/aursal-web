(function () {
  var KEY = 'aursal-lang';
  var btn = document.getElementById('lang');
  var nodes = document.querySelectorAll('.i18n');
  for (var i = 0; i < nodes.length; i++) nodes[i].dataset.tr = nodes[i].textContent;

  function apply(lang) {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.textContent = lang === 'en' ? (n.dataset.en || n.dataset.tr) : n.dataset.tr;
    }
    document.documentElement.lang = lang;
    if (btn) btn.textContent = lang === 'en' ? 'TR / EN' : 'EN / TR';
  }

  var saved = 'tr';
  try { saved = localStorage.getItem(KEY) || 'tr'; } catch (e) {}
  // ?lang=en|tr wins over the saved choice: the app links to the guide with the
  // phone's language, and most of its users are not Turkish.
  var asked = (location.search.match(/[?&]lang=(en|tr)(&|$)/) || [])[1];
  if (asked) {
    saved = asked;
    try { localStorage.setItem(KEY, asked); } catch (e) {}
  }
  if (saved === 'en') apply('en');

  if (btn) btn.addEventListener('click', function () {
    var next = document.documentElement.lang === 'en' ? 'tr' : 'en';
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
  });
})();
