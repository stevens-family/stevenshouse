/* Stevens Family — Static Site Scripts */

// ========== THEME ==========
(function() {
  var saved = localStorage.getItem('stevens-theme');
  var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  var next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('stevens-theme', next);
  updateToggleIcon();
}

function updateToggleIcon() {
  var theme = document.documentElement.getAttribute('data-theme');
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  if (theme === 'dark') {
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  } else {
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
  }
}

// ========== NAV MENU ==========
function toggleNav() {
  var dropdown = document.getElementById('nav-dropdown');
  if (dropdown) dropdown.classList.toggle('open');
}

document.addEventListener('click', function(e) {
  var dropdown = document.getElementById('nav-dropdown');
  var navWrapper = document.querySelector('.nav-wrapper');
  if (dropdown && navWrapper && !navWrapper.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});

// ========== HERO SLIDESHOW ==========
var heroImages = ['images/hero-1.jpg', 'images/hero-2.jpg', 'images/hero-3.jpg'];
var heroIndex = 0;

function rotateHero() {
  var bg = document.getElementById('hero-bg');
  if (!bg) return;
  heroIndex = (heroIndex + 1) % heroImages.length;
  bg.style.opacity = '0';
  setTimeout(function() {
    bg.style.backgroundImage = 'url(' + heroImages[heroIndex] + ')';
    bg.style.opacity = '1';
  }, 1500);
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', function() {
  updateToggleIcon();

  // Start hero slideshow if on index page
  var bg = document.getElementById('hero-bg');
  if (bg && heroImages.length > 0) {
    bg.style.backgroundImage = 'url(' + heroImages[0] + ')';
    setInterval(rotateHero, 10000);
  }

  // Mark active nav item
  var currentPage = location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.nav-dropdown a');
  links.forEach(function(link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// ========== PWA ==========
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(reg) { console.log('SW registered:', reg.scope); })
      .catch(function(err) { console.log('SW registration failed:', err); });
  });
}
