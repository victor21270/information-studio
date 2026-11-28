// L'Information Studio — le seul script du site (le site reste complet sans lui).
// Le défilé ne tourne que lorsqu'il est à l'écran ; rien d'autre ne bouge.
(function () {
  var zones = document.querySelectorAll('.defile-zone');
  if (!zones.length) return;
  if (!('IntersectionObserver' in window)) { zones.forEach(function (z) { z.classList.add('en-vue'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { e.target.classList.toggle('en-vue', e.isIntersecting); });
  });
  zones.forEach(function (z) { io.observe(z); });
})();
