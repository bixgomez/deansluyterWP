// Theme JS bundle entry.
// Order matters: plugin must load before its config.
import './navigation.js';
import './skip-link-focus-fix.js';
import './hc-offcanvas-nav.js';
import './hc-offcanvas-nav--config.js';

(() => {
  document.documentElement.classList.add('js');
})();
