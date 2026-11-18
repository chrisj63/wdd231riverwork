const menu = document.querySelector('.navmobile');
const btn = document.querySelector('.menu-btn');
const mobileQuery = window.matchMedia('max-width:769px');
const desktopQuery = window.matchMedia('(min-width: 769px)');


function toggleMenu() {
    btn.classList.toggle('change');
    menu.classList.toggle('hide');
}

// Handler for when mobile mode becomes active
function handleMobileChange(e) {
    if (e.matches) {
        // We just entered MOBILE mode
        menu.classList.remove('hide');
        btn.classList.add('change');
    }
}

// Handler for when desktop mode becomes active
function handleDesktopChange(e) {
    if (e.matches) {
        // We just entered DESKTOP mode
        menu.classList.add('hide');
        btn.classList.add('change');
    }
}

function init() {
    btn.addEventListener('click', toggleMenu);
    
    // Listen for the desktop/mobile breakpoint trigger
    mobileQuery.addEventListener('change', handleMobileChange);
    desktopQuery.addEventListener('change', handleDesktopChange);
    
   // Check initial state on page load
    if (mobileQuery.matches) {
        handleMobileChange(mobileQuery);
    } else if (desktopQuery.matches) {
        handleDesktopChange(desktopQuery);
    }
}

 init();