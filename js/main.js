(function () {
  var t = document.getElementById('mob-toggle');
  var d = document.getElementById('mob-drawer');
  var o = document.getElementById('mob-overlay');
  var c = document.getElementById('drawer-close');
  if (t && d && o) {
    var open = function () {
      d.removeAttribute('hidden');
      o.classList.add('visible');
      t.setAttribute('aria-expanded', 'true');
      t.setAttribute('aria-label', 'Close navigation menu');
      document.documentElement.style.overflow = 'hidden';
    };
    var close = function () {
      d.setAttribute('hidden', '');
      o.classList.remove('visible');
      t.setAttribute('aria-expanded', 'false');
      t.setAttribute('aria-label', 'Open navigation menu');
      document.documentElement.style.overflow = '';
    };
    t.addEventListener('click', function () {
      if (t.getAttribute('aria-expanded') === 'true') { close(); } else { open(); }
    });
    if (c) { c.addEventListener('click', close); }
    o.addEventListener('click', close);
    d.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { close(); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 768) { close(); } });
  }
  document.querySelectorAll('.faq-q').forEach(function (b) {
    b.addEventListener('click', function () {
      var panel = document.getElementById(b.getAttribute('aria-controls'));
      var isOpen = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      if (panel) { panel.style.maxHeight = isOpen ? '0px' : panel.scrollHeight + 'px'; }
    });
  });
})();
