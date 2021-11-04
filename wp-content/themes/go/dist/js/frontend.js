/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.dev/assets/shared/js/frontend/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.dev/assets/shared/js/frontend/components/primary-menu.js":
/*!*******************************************************************!*\
  !*** ./.dev/assets/shared/js/frontend/components/primary-menu.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_responsive_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/responsive-nav */ "./.dev/assets/shared/js/frontend/vendor/responsive-nav.js");
/* harmony import */ var _vendor_responsive_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_responsive_nav__WEBPACK_IMPORTED_MODULE_0__);
/* global TenUp */

/**
 * Hook up navigation.
 */

const init = () => {
  if (TenUp) {
    TenUp.navigation({
      target: '#header__navigation',
      toggle: '#nav-toggle',
      // eslint-disable-next-line
      sub_menu_open: goFrontend.openMenuOnHover ? 'hover' : 'click'
    });
  }

  document.addEventListener('keydown', lockMenuFocus);
};
/**
 * Lock tabbing to the main navigation only.
 */


function lockMenuFocus(evt) {
  var e = event || evt; // for cross-browser compatibility

  var charCode = e.which || e.keyCode;

  if (charCode !== 9 || !jQuery('body').hasClass('menu-is-open')) {
    return;
  }

  var $element = jQuery(':focus'),
      mainMenuLength = jQuery('ul.primary-menu').children().length,
      currentIndex = jQuery($element).closest('li').index(),
      isShiftTab = event.shiftKey && event.keyCode == 9;

  if ($element.closest('ul').hasClass('sub-menu')) {
    return;
  }

  currentIndex = isShiftTab ? currentIndex - 1 : currentIndex + 1;

  if ($element.attr('id') === 'nav-toggle') {
    if (isShiftTab) {
      return;
    }

    setTimeout(function () {
      jQuery('ul.primary-menu li:first-child a')[0].focus();
    }, 10);
  } // Menu link


  if ($element.parents('ul.primary-menu').length > 0) {
    if (currentIndex < 0 && isShiftTab || currentIndex === mainMenuLength) {
      setTimeout(function () {
        jQuery('#nav-toggle').focus();
      }, 10);
    }
  }
}

;
/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./.dev/assets/shared/js/frontend/components/search-toggle.js":
/*!********************************************************************!*\
  !*** ./.dev/assets/shared/js/frontend/components/search-toggle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const searchToggle = () => {
  const searchToggle = document.getElementById('header__search-toggle');

  if (!searchToggle) {
    return;
  }

  const performToggle = element => {
    const toggle = element;
    const target = document.querySelector(toggle.dataset.toggleTarget);

    if (target.classList.contains('show-modal')) {
      // Hide the modal.
      target.classList.remove('active');
      setTimeout(() => {
        target.classList.remove('show-modal');
        toggle.focus();
      }, 250);
    } else {
      // Show the modal.
      target.classList.add('show-modal');
      setTimeout(() => {
        target.classList.add('active');

        if (toggle.dataset.setFocus) {
          const focusElement = document.querySelector(toggle.dataset.setFocus);

          if (focusElement) {
            var searchTerm = focusElement.value;
            focusElement.value = '';
            focusElement.focus();
            focusElement.value = searchTerm;
          }
        }
      }, 10);
    }
  };

  document.querySelectorAll('*[data-toggle-target]').forEach(element => {
    element.addEventListener('click', event => {
      event.preventDefault();
      performToggle(element);
    });
  }); // Close modal on escape key press.

  document.addEventListener('keyup', event => {
    if (event.keyCode === 27) {
      event.preventDefault();
      document.querySelectorAll('.search-modal.active').forEach(element => {
        performToggle(document.querySelector('*[data-toggle-target="' + element.dataset.modalTargetString + '"]'));
      });
    }
  }); // Close modal on outside click.

  document.addEventListener('click', event => {
    const target = event.target;
    const modal = document.querySelector('.search-modal.active');

    if (target === modal) {
      performToggle(document.querySelector('*[data-toggle-target="' + modal.dataset.modalTargetString + '"]'));
    }
  });
  document.addEventListener('keydown', lockSearchFocus);
};
/**
 * Lock tabbing to the search form only.
 */


function lockSearchFocus(e) {
  // If the keypress isn't a tab or the search form isn't active, return
  if (e.keyCode !== 9 || !document.querySelector('.site-search.active')) {
    return;
  } // Current active element before it moves


  let activeElement = document.activeElement; // If we're on the input and shift+tab was pressed, override and focus on button.

  if (document.activeElement.classList.contains('search-form__input') && e.shiftKey) {
    setTimeout(function () {
      // Focus the correct button by only looking for it in the parent element
      activeElement.parentElement.getElementsByClassName('search-input__button').item(0).focus();
    }, 10);
  } // If we're on the button and tab was pressed, override and focus on input.


  if (document.activeElement.classList.contains('search-input__button') && !e.shiftKey) {
    setTimeout(function () {
      // Focus the correct input by only looking for it in the parent element
      activeElement.parentElement.getElementsByClassName('search-form__input').item(0).focus();
    }, 10);
  }
}

;
/* harmony default export */ __webpack_exports__["default"] = (searchToggle);

/***/ }),

/***/ "./.dev/assets/shared/js/frontend/components/woo-menu-cart.js":
/*!********************************************************************!*\
  !*** ./.dev/assets/shared/js/frontend/components/woo-menu-cart.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let menuObject = document.getElementById('header__cart-toggle');
let siteOverlay = document.getElementById('site-overlay');
let sideNav = document.getElementById('site-nav--cart');
let sideNavClose = document.getElementById('site-close-handle');

const wooMenuCart = () => {
  if (null === menuObject || null === siteOverlay || null === sideNavClose) {
    return;
  }

  document.body.classList.add('has-woo-cart-slideout');
  menuObject.addEventListener('click', function (event) {
    event.preventDefault();
    toggleSideNavVisibility();
  });
  siteOverlay.addEventListener('click', toggleSideNavVisibility);
  sideNavClose.addEventListener('click', toggleSideNavVisibility);
};

const toggleSideNavVisibility = event => {
  sideNav.classList.toggle('active');
  siteOverlay.classList.toggle('active');
  document.body.classList.toggle('sidebar-move');
};

/* harmony default export */ __webpack_exports__["default"] = (wooMenuCart);

/***/ }),

/***/ "./.dev/assets/shared/js/frontend/frontend.js":
/*!****************************************************!*\
  !*** ./.dev/assets/shared/js/frontend/frontend.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vars-ponyfill */ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js");
/* harmony import */ var _components_primary_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/primary-menu.js */ "./.dev/assets/shared/js/frontend/components/primary-menu.js");
/* harmony import */ var _components_search_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search-toggle.js */ "./.dev/assets/shared/js/frontend/components/search-toggle.js");
/* harmony import */ var _components_woo_menu_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/woo-menu-cart.js */ "./.dev/assets/shared/js/frontend/components/woo-menu-cart.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);




 // we need an alias for debounce otherwise it conflicts with customizer

Object(_components_primary_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_components_search_toggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_components_woo_menu_cart_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_0__["default"])();
document.addEventListener('DOMContentLoaded', function () {
  const hasSelectiveRefresh = 'undefined' !== typeof wp && wp.customize && wp.customize.selectiveRefresh && wp.customize.navMenusPreview.NavMenuInstancePartial; // partial-content-rendered might render multiple times for some reason, let's make sure to debouce this.

  const init = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(() => {
    // we need to remove this before calling primary menu again.
    document.body.classList.remove('has-offscreen-nav');
    Object(_components_primary_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_components_search_toggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }, 1000);

  if (hasSelectiveRefresh) {
    wp.customize.selectiveRefresh.bind('partial-content-rendered', function (placement) {
      const changedHeaderVariation = placement && 'null' !== placement.container[0].parentNode && 'header_variation' === placement.partial.id;

      if (changedHeaderVariation) {
        init();
      }
    });
  }
});

/***/ }),

/***/ "./.dev/assets/shared/js/frontend/vendor/responsive-nav.js":
/*!*****************************************************************!*\
  !*** ./.dev/assets/shared/js/frontend/vendor/responsive-nav.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/********************************

	Name: WordPress Accessible Responsive Navigation Menu
	Usage:

	TenUp.build_menu({

		'target'		:	'#primary-nav',      // the selector of the nav menu <ul>
		'toggle'		:	'#js-menu-toggle',   // the ID of the link you're using to open/close the small screen menu
		'sub_menu_open'	:	'hover'

	}, function() {

		console.log('Amazing callback function!');

	});

********************************/

/* eslint-disable */
(function () {
  'use strict'; // Define global TenUp object if it doesn't exist

  if ('object' !== typeof window.TenUp) {
    window.TenUp = {};
  }
  /*
  	Cache and define some variables
  */
  // init function


  TenUp.navigation = function (options, callback) {
    var defaults = {
      'target': '#primary-nav',
      'toggle': '#js-menu-toggle',
      'sub_menu_open': 'hover'
    };
    var opt; // Map all default settings to user defined options if they exist

    for (opt = 0; opt < defaults.length; opt = opt + 1) {
      if (typeof options[opt] === 'undefined') {
        options[opt] = defaults[opt];
      }
    }

    var menu = document.querySelector(options.target); // Bail out if there's no menu

    if (!menu) {
      return;
    }

    var menu_id = menu.getAttribute('id');
    var menu_toggle = document.querySelector(options.toggle);
    var aria_controls = menu_toggle.getAttribute('aria-controls');
    var sub_menu_acion = options.sub_menu_open;
    var current_menu_item = menu.querySelector('.current-menu-item');
    var menu_items_links = menu.querySelectorAll('.menu-item > a');
    var menu_items_links_count = menu_items_links.length;
    var menu_items_with_children = menu.querySelectorAll('.menu-item-has-children');
    var menu_items_with_children_count = menu_items_with_children.length;
    var currentTarget;
    var target;
    var i; // Listener for the menu open/close action

    function listener_menu(e) {
      // Stop links from firing
      e.preventDefault();

      if (document.body.classList.contains('menu-is-open')) {
        // Close the menu
        menu.setAttribute('aria-hidden', 'true');
        menu_toggle.setAttribute('aria-expanded', 'false'); // Bubble to the document

        document.body.classList.remove('menu-is-open');
      } else {
        // Open the menu
        menu.setAttribute('aria-hidden', 'false');
        menu_toggle.setAttribute('aria-expanded', 'true'); // Set focus to the first link

        menu.querySelectorAll('a')[0].focus(); // Bubble to the document

        document.body.classList.add('menu-is-open');
      }
    }

    ; // listener_menu()
    // Listener for submenu on click

    function listener_submenu_click(e) {
      currentTarget = e.currentTarget;
      target = e.target;

      if (target.tagName === 'svg' || target.tagName === 'path') {
        target = currentTarget.closest('.menu-item > a');
      } else {
        console.log(target.previousSibling.previousSibling.href);

        if (goFrontend.isMobile) {
          if (target.tagName === 'A') {
            return;
          }

          if (target.tagName === 'UL') {
            let tempURL = target.previousSibling.previousSibling.href;

            if (null !== tempURL) {
              window.location.href = tempURL;
              return;
            }
          }
        }
      }

      if (target.getAttribute('aria-haspopup')) {
        // Stop links from firing
        e.preventDefault(); // Stop events from bubbling up to parent elements

        e.stopPropagation();
        var parent_menu = target.parentNode;
        var sub_menu = parent_menu.querySelector('.sub-menu');
        var all_open_menus = menu.querySelectorAll('.child-has-focus');
        var all_open_menus_count = all_open_menus.length;
        var all_open_menu_triggers = menu.querySelectorAll('.child-has-focus > a.submenu-is-open');
        var all_open_menu_triggers_count = all_open_menu_triggers.length;
        var t;

        if (get_screen_size('has-full-nav')) {
          if (all_open_menu_triggers_count > 0) {
            // Make sure only 1 menu item can be opened at a time
            for (t = 0; t < all_open_menu_triggers_count; t = t + 1) {
              // Check if the open menu is top-level, if so, close it
              if (parent_menu.parentNode === menu) {
                menu_sub_close(all_open_menu_triggers[t]);
              }
            } // for

          } // if

        } // if


        if ((e.target.nodeName === 'A' || target.tagName === 'A') && target.classList.contains('submenu-is-open')) {
          // The menu is already open, so this should be a close action
          menu_sub_close(target);
        } else {
          menu_sub_close_all(); // The menu is closed, so this click should open it

          menu_sub_open(target); // Reset the focus

          sub_menu.querySelectorAll('a')[0].focus();
        }
      }
    }

    ; // listener_submenu_click()
    // Listener for same page link (hash) click

    function listener_hash_click() {
      // Close the menu
      menu.setAttribute('aria-hidden', 'true');
      menu_toggle.setAttribute('aria-expanded', 'false'); // Bubble to the document

      document.body.classList.remove('menu-is-open');
    }

    ; // When "hover", this is how focus should act

    function listener_submenu_focus(e) {
      var currentTarget = e.currentTarget;
      var target = e.target;
      var parent_menu = target.parentNode;
      var sub_menu = parent_menu.querySelector('.sub-menu');
      var all_open_menu_triggers = menu.querySelectorAll('.child-has-focus > a.submenu-is-open');
      var all_open_menu_triggers_count = all_open_menu_triggers.length;
      var t;

      if (get_screen_size('has-full-nav')) {
        if (all_open_menu_triggers_count > 0) {
          // Make sure only 1 menu item can be opened at a time
          for (t = 0; t < all_open_menu_triggers_count; t = t + 1) {
            // Check if the open menu is top-level, if so, close it
            if (parent_menu.parentNode === menu) {
              menu_sub_close(all_open_menu_triggers[t]);
            }
          }
        }
      }

      menu_sub_open(target);
    }

    ; // Listener for the window resize

    var listener_window = debounce(function (e) {
      if (get_screen_size('has-offscreen-nav')) {
        menu_create();
      } else {
        menu_destroy();
      }
    }, 100); // listener_window()
    // Close the menu if you click somewhere else

    function listener_close_open_menus(e) {
      var open_menus = menu.querySelectorAll('.submenu-is-open');
      var open_menus_count = open_menus.length;
      var opn; // if the event is keyup and it was the ESC key

      if (e.type === 'keyup' && e.keyCode == 27) {
        // We were getting some errors, so let's add in a checkpoint
        if (open_menus_count) {
          // Loop through all the open menus and close them
          for (opn = 0; opn < open_menus.length; opn = opn + 1) {
            menu_sub_close(open_menus[opn]);
          } // for
          // Return focus to the first open menu


          if (sub_menu_acion === 'click') {
            open_menus[0].focus();
          }
        } // if
        // If the event was a mouseup

      } else if (e.type === 'mouseup') {
        if (!menu.contains(e.target) && menu.querySelector('.submenu-is-open')) {
          // We were getting some error, so let's add in a second checkpoint
          if (open_menus_count) {
            for (opn = 0; opn < open_menus.length; opn = opn + 1) {
              menu_sub_close(open_menus[opn]);
            } // for

          }
        } // if

      }
    }

    ; // listener_close_open_menus()

    function menu_sub_close(open_item) {
      if (open_item && open_item.classList) {
        open_item.classList.remove('submenu-is-open');
        open_item.parentNode.classList.remove('child-has-focus');
      }

      if (open_item && open_item.parentNode && open_item.parentNode.querySelector('.sub-menu')) {
        open_item.parentNode.querySelector('.sub-menu').setAttribute('aria-hidden', 'true');
      }
    }

    ; // menu_sub_close()

    function menu_sub_close_all() {
      var open_menus = menu.querySelectorAll('.submenu-is-open');
      var open_menus_count = open_menus.length;
      var opn; // We were getting some errors, so let's add in a checkpoint

      if (open_menus_count) {
        // Loop through all the open menus and close them
        for (opn = 0; opn < open_menus.length; opn = opn + 1) {
          menu_sub_close(open_menus[opn]);
        } // for

      } // if

    }

    ; // menu_sub_close()

    function menu_sub_open(closed_item) {
      closed_item.classList.add('submenu-is-open');
      closed_item.parentNode.classList.add('child-has-focus');

      if (closed_item.parentNode.querySelector('.sub-menu')) {
        closed_item.parentNode.querySelector('.sub-menu').setAttribute('aria-hidden', 'false');
      }
    }

    ; // menu_sub_open()
    // Method to create the small screen menu

    function menu_create() {
      if (!document.body.classList.contains('has-offscreen-nav')) {
        if (!document.body.classList.contains('menu-is-open')) {
          menu.setAttribute('aria-hidden', 'true');
          menu_toggle.setAttribute('aria-expanded', 'false');
        } else {
          menu.setAttribute('aria-hidden', 'false');
          menu_toggle.setAttribute('aria-expanded', 'true');
        } // Loop through all submenus and bind events when needed


        for (i = 0; i < menu_items_with_children_count; i++) {
          var svgElements = menu_items_with_children[i].querySelectorAll('svg');

          for (var q = 0; q < svgElements.length; q = q + 1) {
            svgElements[q].addEventListener('click', listener_submenu_click);
          }

          menu_items_with_children[i].removeEventListener('focusin', listener_submenu_focus);
        } // for
        // Loop through all links for hash and bind events when needed


        for (i = 0; i < menu_items_links_count; i++) {
          if (menu_items_links[i].hash && menu_items_links[i].pathname === '/') {
            menu_items_links[i].addEventListener('click', listener_hash_click);
          }
        } // for
        // Bind the event


        menu_toggle.addEventListener('click', listener_menu); // Add the body class to prevent this from running again

        document.body.classList.add('has-offscreen-nav');
        document.body.classList.remove('has-full-nav');
      }
    }

    ; // menu_create()
    // Method to destroy the small screen menu

    function menu_destroy() {
      var tmp_open;
      var tmp_open_count;
      var t;

      if (!document.body.classList.contains('has-full-nav')) {
        // Remove aria-hidden, because we don't need it.
        menu.removeAttribute('aria-hidden'); // Loop through all submenus and bind events when needed

        for (i = 0; i < menu_items_with_children_count; i = i + 1) {
          if (sub_menu_acion !== 'click') {
            menu_items_with_children[i].removeEventListener('click', listener_submenu_click);
            menu_items_with_children[i].addEventListener('focusin', listener_submenu_focus);
            menu.classList.remove('uses-click');
          }
        } // If we're not using click, the open menus need to be reset


        if (sub_menu_acion !== 'click') {
          tmp_open = document.querySelectorAll('.child-has-focus');
          tmp_open_count = tmp_open.length;

          for (t = 0; t < tmp_open_count; t = t + 1) {
            tmp_open[t].classList.remove('child-has-focus');
            tmp_open[t].querySelector('.submenu-is-open').classList.remove('submenu-is-open');
            tmp_open[t].querySelector('.sub-menu').setAttribute('aria-hidden', 'true');
          }
        } // Unbind the event


        menu_toggle.removeEventListener('click', listener_menu); // Add the body class to prevent this from running again

        document.body.classList.add('has-full-nav');
        document.body.classList.remove('has-offscreen-nav');
      }
    }

    ; // Check init menu state

    if (get_screen_size('has-offscreen-nav')) {
      menu_create();
    } // If aria-controls isn't set, set it


    if (!aria_controls) {
      menu_toggle.setAttribute('aria-controls', menu_id);
    }

    if (current_menu_item) {
      current_menu_item.querySelector('a').setAttribute('aria-current', 'page');
    }
    /*
    	Events
    */
    // Debounced resize event to create and destroy the small screen menu options


    window.addEventListener('resize', listener_window); // Close the submenus by clicking off of them or hitting ESC

    document.addEventListener('mouseup', listener_close_open_menus);
    document.addEventListener('keyup', listener_close_open_menus);
    /*
    	Hiding and showing submenus (click, focus, hover)
    */
    // Loop through all items with sub menus and bind focus to them for tabbing

    for (i = 0; i < menu_items_with_children_count; i = i + 1) {
      // Let a screen reader know this menu has a submenu by hooking into the first link
      menu_items_with_children[i].querySelector('a').setAttribute('aria-haspopup', 'true'); // Hide and label each sub menu

      menu_items_with_children[i].querySelector('.sub-menu').setAttribute('aria-hidden', 'true');
      menu_items_with_children[i].querySelector('.sub-menu').setAttribute('aria-label', 'Submenu'); // If the screen is small or the action is set to click

      if (get_screen_size('has-offscreen-nav') || sub_menu_acion === 'click') {
        menu_items_with_children[i].addEventListener('click', listener_submenu_click);
        var svgElements = menu_items_with_children[i].querySelectorAll('svg');

        for (var z = 0; z < svgElements.length; z = z + 1) {
          svgElements[z].addEventListener('click', listener_submenu_click);
        }

        menu.classList.add(sub_menu_acion === 'click' ? 'uses-click' : 'uses-hover');
      } else if (sub_menu_acion !== 'click') {
        if (get_screen_size('has-full-nav')) {
          menu_items_with_children[i].addEventListener('mouseover', listener_submenu_focus);
          menu_items_with_children[i].addEventListener('mouseout', function () {
            var open_menus = menu.querySelectorAll('.submenu-is-open');
            var open_menus_count = open_menus.length;
            var opn; // We were getting some errors, so let's add in a checkpoint

            if (open_menus_count) {
              // Loop through all the open menus and close them
              for (opn = 0; opn < open_menus_count; opn = opn + 1) {
                menu_sub_close(open_menus[opn]);
              } // for

            }
          });
          menu_items_with_children[i].addEventListener('focusin', listener_submenu_focus);
          menu_items_with_children[i].querySelectorAll('.sub-menu').forEach(submenu => {
            submenu.addEventListener('mouseover', event => {
              submenu.parentElement.classList.add('child-has-focus');
              submenu.previousElementSibling.classList.add('submenu-is-open');
            }, false);
          });
        } // if

      } // if

    } // for
    // Execute the callback function


    if (typeof callback === 'function') {
      callback.call();
    }
  }; // build_menu()

  /*
  	Helper functions
  */
  // Get screen size from getComputedStyle (so we don't have to define each breakpoint twice) -- Values are set in CSS --


  function get_screen_size(sizeString) {
    var size = window.getComputedStyle(document.body, ':before').getPropertyValue('content');

    if (size && size.indexOf(sizeString) !== -1) {
      return true;
    }
  }

  ; // Debounce

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  ;
})();

/***/ }),

/***/ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * css-vars-ponyfill
 * v2.4.7
 * https://jhildenbiddle.github.io/css-vars-ponyfill/
 * (c) 2018-2021 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
function _extends() {
    _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

/*!
 * get-css-data
 * v2.0.2
 * https://github.com/jhildenbiddle/get-css-data
 * (c) 2018-2021 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */ function getUrls(urls) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var settings = {
        mimeType: options.mimeType || null,
        onBeforeSend: options.onBeforeSend || Function.prototype,
        onSuccess: options.onSuccess || Function.prototype,
        onError: options.onError || Function.prototype,
        onComplete: options.onComplete || Function.prototype
    };
    var urlArray = Array.isArray(urls) ? urls : [ urls ];
    var urlQueue = Array.apply(null, Array(urlArray.length)).map((function(x) {
        return null;
    }));
    function isValidCss(text) {
        var isString = typeof text === "string";
        var isHTML = isString && text.trim().charAt(0) === "<";
        return isString && !isHTML;
    }
    function onError(xhr, urlIndex) {
        settings.onError(xhr, urlArray[urlIndex], urlIndex);
    }
    function onSuccess(responseText, urlIndex) {
        var returnVal = settings.onSuccess(responseText, urlArray[urlIndex], urlIndex);
        responseText = returnVal === false ? "" : returnVal || responseText;
        urlQueue[urlIndex] = responseText;
        if (urlQueue.indexOf(null) === -1) {
            settings.onComplete(urlQueue);
        }
    }
    var parser = document.createElement("a");
    urlArray.forEach((function(url, i) {
        parser.setAttribute("href", url);
        parser.href = String(parser.href);
        var isIElte9 = Boolean(document.all && !window.atob);
        var isIElte9CORS = isIElte9 && parser.host.split(":")[0] !== location.host.split(":")[0];
        if (isIElte9CORS) {
            var isSameProtocol = parser.protocol === location.protocol;
            if (isSameProtocol) {
                var xdr = new XDomainRequest;
                xdr.open("GET", url);
                xdr.timeout = 0;
                xdr.onprogress = Function.prototype;
                xdr.ontimeout = Function.prototype;
                xdr.onload = function() {
                    var text = xdr.responseText;
                    if (isValidCss(text)) {
                        onSuccess(text, i);
                    } else {
                        onError(xdr, i);
                    }
                };
                xdr.onerror = function(err) {
                    onError(xdr, i);
                };
                setTimeout((function() {
                    xdr.send();
                }), 0);
            } else {
                console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(url, ")"));
                onError(null, i);
            }
        } else {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url);
            if (settings.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(settings.mimeType);
            }
            settings.onBeforeSend(xhr, url, i);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    var text = xhr.responseText;
                    if (xhr.status < 400 && isValidCss(text)) {
                        onSuccess(text, i);
                    } else if (xhr.status === 0 && isValidCss(text)) {
                        onSuccess(text, i);
                    } else {
                        onError(xhr, i);
                    }
                }
            };
            xhr.send();
        }
    }));
}

/**
 * Gets CSS data from <style> and <link> nodes (including @imports), then
 * returns data in order processed by DOM. Allows specifying nodes to
 * include/exclude and filtering CSS data using RegEx.
 *
 * @preserve
 * @param {object}   [options] The options object
 * @param {object}   [options.rootElement=document] Root element to traverse for
 *                   <link> and <style> nodes.
 * @param {string}   [options.include] CSS selector matching <link> and <style>
 *                   nodes to include
 * @param {string}   [options.exclude] CSS selector matching <link> and <style>
 *                   nodes to exclude
 * @param {object}   [options.filter] Regular expression used to filter node CSS
 *                   data. Each block of CSS data is tested against the filter,
 *                   and only matching data is included.
 * @param {boolean}  [options.skipDisabled=true] Determines if disabled
 *                   stylesheets will be skipped while collecting CSS data.
 * @param {boolean}  [options.useCSSOM=false] Determines if CSS data will be
 *                   collected from a stylesheet's runtime values instead of its
 *                   text content. This is required to get accurate CSS data
 *                   when a stylesheet has been modified using the deleteRule()
 *                   or insertRule() methods because these modifications will
 *                   not be reflected in the stylesheet's text content.
 * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
 *                   1) the XHR object, 2) source node reference, and 3) the
 *                   source URL as arguments.
 * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
 *                   1) CSS text, 2) source node reference, and 3) the source
 *                   URL as arguments.
 * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
 *                   object for inspection, 2) soure node reference, and 3) the
 *                   source URL that failed (either a <link> href or an @import)
 *                   as arguments
 * @param {function} [options.onComplete] Callback after all nodes have been
 *                   processed. Passes 1) concatenated CSS text, 2) an array of
 *                   CSS text in DOM order, and 3) an array of nodes in DOM
 *                   order as arguments.
 *
 * @example
 *
 *   getCssData({
 *     rootElement : document,
 *     include     : 'style,link[rel="stylesheet"]',
 *     exclude     : '[href="skip.css"]',
 *     filter      : /red/,
 *     skipDisabled: true,
 *     useCSSOM    : false,
 *     onBeforeSend(xhr, node, url) {
 *       // ...
 *     }
 *     onSuccess(cssText, node, url) {
 *       // ...
 *     }
 *     onError(xhr, node, url) {
 *       // ...
 *     },
 *     onComplete(cssText, cssArray, nodeArray) {
 *       // ...
 *     }
 *   });
 */ function getCssData(options) {
    var regex = {
        cssComments: /\/\*[\s\S]+?\*\//g,
        cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
    };
    var settings = {
        rootElement: options.rootElement || document,
        include: options.include || 'style,link[rel="stylesheet"]',
        exclude: options.exclude || null,
        filter: options.filter || null,
        skipDisabled: options.skipDisabled !== false,
        useCSSOM: options.useCSSOM || false,
        onBeforeSend: options.onBeforeSend || Function.prototype,
        onSuccess: options.onSuccess || Function.prototype,
        onError: options.onError || Function.prototype,
        onComplete: options.onComplete || Function.prototype
    };
    var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter((function(node) {
        return !matchesSelector(node, settings.exclude);
    }));
    var cssArray = Array.apply(null, Array(sourceNodes.length)).map((function(x) {
        return null;
    }));
    function handleComplete() {
        var isComplete = cssArray.indexOf(null) === -1;
        if (isComplete) {
            cssArray.reduce((function(skipIndices, value, i) {
                if (value === "") {
                    skipIndices.push(i);
                }
                return skipIndices;
            }), []).reverse().forEach((function(skipIndex) {
                return [ sourceNodes, cssArray ].forEach((function(arr) {
                    return arr.splice(skipIndex, 1);
                }));
            }));
            var cssText = cssArray.join("");
            settings.onComplete(cssText, cssArray, sourceNodes);
        }
    }
    function handleSuccess(cssText, cssIndex, node, sourceUrl) {
        var returnVal = settings.onSuccess(cssText, node, sourceUrl);
        cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
        resolveImports(cssText, node, sourceUrl, (function(resolvedCssText, errorData) {
            if (cssArray[cssIndex] === null) {
                errorData.forEach((function(data) {
                    return settings.onError(data.xhr, node, data.url);
                }));
                if (!settings.filter || settings.filter.test(resolvedCssText)) {
                    cssArray[cssIndex] = resolvedCssText;
                } else {
                    cssArray[cssIndex] = "";
                }
                handleComplete();
            }
        }));
    }
    function parseImportData(cssText, baseUrl) {
        var ignoreRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var importData = {};
        importData.rules = (cssText.replace(regex.cssComments, "").match(regex.cssImports) || []).filter((function(rule) {
            return ignoreRules.indexOf(rule) === -1;
        }));
        importData.urls = importData.rules.map((function(rule) {
            return rule.replace(regex.cssImports, "$1");
        }));
        importData.absoluteUrls = importData.urls.map((function(url) {
            return getFullUrl$1(url, baseUrl);
        }));
        importData.absoluteRules = importData.rules.map((function(rule, i) {
            var oldUrl = importData.urls[i];
            var newUrl = getFullUrl$1(importData.absoluteUrls[i], baseUrl);
            return rule.replace(oldUrl, newUrl);
        }));
        return importData;
    }
    function resolveImports(cssText, node, baseUrl, callbackFn) {
        var __errorData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
        var __errorRules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
        var importData = parseImportData(cssText, baseUrl, __errorRules);
        if (importData.rules.length) {
            getUrls(importData.absoluteUrls, {
                onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
                    settings.onBeforeSend(xhr, node, url);
                },
                onSuccess: function onSuccess(cssText, url, urlIndex) {
                    var returnVal = settings.onSuccess(cssText, node, url);
                    cssText = returnVal === false ? "" : returnVal || cssText;
                    var responseImportData = parseImportData(cssText, url, __errorRules);
                    responseImportData.rules.forEach((function(rule, i) {
                        cssText = cssText.replace(rule, responseImportData.absoluteRules[i]);
                    }));
                    return cssText;
                },
                onError: function onError(xhr, url, urlIndex) {
                    __errorData.push({
                        xhr: xhr,
                        url: url
                    });
                    __errorRules.push(importData.rules[urlIndex]);
                    resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
                },
                onComplete: function onComplete(responseArray) {
                    responseArray.forEach((function(importText, i) {
                        cssText = cssText.replace(importData.rules[i], importText);
                    }));
                    resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
                }
            });
        } else {
            callbackFn(cssText, __errorData);
        }
    }
    if (sourceNodes.length) {
        sourceNodes.forEach((function(node, i) {
            var linkHref = node.getAttribute("href");
            var linkRel = node.getAttribute("rel");
            var isLink = node.nodeName.toLowerCase() === "link" && linkHref && linkRel && linkRel.toLowerCase().indexOf("stylesheet") !== -1;
            var isSkip = settings.skipDisabled === false ? false : node.disabled;
            var isStyle = node.nodeName.toLowerCase() === "style";
            if (isLink && !isSkip) {
                getUrls(linkHref, {
                    mimeType: "text/css",
                    onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
                        settings.onBeforeSend(xhr, node, url);
                    },
                    onSuccess: function onSuccess(cssText, url, urlIndex) {
                        var sourceUrl = getFullUrl$1(linkHref);
                        handleSuccess(cssText, i, node, sourceUrl);
                    },
                    onError: function onError(xhr, url, urlIndex) {
                        cssArray[i] = "";
                        settings.onError(xhr, node, url);
                        handleComplete();
                    }
                });
            } else if (isStyle && !isSkip) {
                var cssText = node.textContent;
                if (settings.useCSSOM) {
                    cssText = Array.apply(null, node.sheet.cssRules).map((function(rule) {
                        return rule.cssText;
                    })).join("");
                }
                handleSuccess(cssText, i, node, location.href);
            } else {
                cssArray[i] = "";
                handleComplete();
            }
        }));
    } else {
        settings.onComplete("", []);
    }
}

function getFullUrl$1(url, base) {
    var d = document.implementation.createHTMLDocument("");
    var b = d.createElement("base");
    var a = d.createElement("a");
    d.head.appendChild(b);
    d.body.appendChild(a);
    b.href = base || document.baseURI || (document.querySelector("base") || {}).href || location.href;
    a.href = url;
    return a.href;
}

function matchesSelector(elm, selector) {
    var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;
    return matches.call(elm, selector);
}

var balancedMatch = balanced;

function balanced(a, b, str) {
    if (a instanceof RegExp) a = maybeMatch(a, str);
    if (b instanceof RegExp) b = maybeMatch(b, str);
    var r = range(a, b, str);
    return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
    };
}

function maybeMatch(reg, str) {
    var m = str.match(reg);
    return m ? m[0] : null;
}

balanced.range = range;

function range(a, b, str) {
    var begs, beg, left, right, result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;
    if (ai >= 0 && bi > 0) {
        if (a === b) {
            return [ ai, bi ];
        }
        begs = [];
        left = str.length;
        while (i >= 0 && !result) {
            if (i == ai) {
                begs.push(i);
                ai = str.indexOf(a, i + 1);
            } else if (begs.length == 1) {
                result = [ begs.pop(), bi ];
            } else {
                beg = begs.pop();
                if (beg < left) {
                    left = beg;
                    right = bi;
                }
                bi = str.indexOf(b, i + 1);
            }
            i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) {
            result = [ left, right ];
        }
    }
    return result;
}

function parseCss(css) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaults = {
        preserveStatic: true,
        removeComments: false
    };
    var settings = _extends({}, defaults, options);
    var errors = [];
    function error(msg) {
        throw new Error("CSS parse error: ".concat(msg));
    }
    function match(re) {
        var m = re.exec(css);
        if (m) {
            css = css.slice(m[0].length);
            return m;
        }
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comment() {
        whitespace();
        if (css[0] !== "/" || css[1] !== "*") {
            return;
        }
        var i = 2;
        while (css[i] && (css[i] !== "*" || css[i + 1] !== "/")) {
            i++;
        }
        if (!css[i]) {
            return error("end of comment is missing");
        }
        var str = css.slice(2, i);
        css = css.slice(i + 2);
        return {
            type: "comment",
            comment: str
        };
    }
    function comments() {
        var cmnts = [];
        var c;
        while (c = comment()) {
            cmnts.push(c);
        }
        return settings.removeComments ? [] : cmnts;
    }
    function selector() {
        whitespace();
        while (css[0] === "}") {
            error("extra closing bracket");
        }
        var m = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
        if (m) {
            var _selector = m[0].trim();
            var selectorItems;
            var hasComment = /\/\*/.test(_selector);
            if (hasComment) {
                _selector = _selector.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "");
            }
            var hasCommaInQuotes = /["']\w*,\w*["']/.test(_selector);
            if (hasCommaInQuotes) {
                _selector = _selector.replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (function(m) {
                    return m.replace(/,/g, "‌");
                }));
            }
            var hasMultipleSelectors = /,/.test(_selector);
            if (hasMultipleSelectors) {
                selectorItems = _selector.split(/\s*(?![^(]*\)),\s*/);
            } else {
                selectorItems = [ _selector ];
            }
            if (hasCommaInQuotes) {
                selectorItems = selectorItems.map((function(s) {
                    return s.replace(/\u200C/g, ",");
                }));
            }
            return selectorItems;
        }
    }
    function declaration() {
        if (css[0] === "@") {
            return at_rule();
        }
        match(/^([;\s]*)+/);
        var comment_regexp = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
        var prop = match(/^(\*?[-#/*\\\w.]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!prop) {
            return;
        }
        prop = prop[0].trim();
        if (!match(/^:\s*/)) {
            return error("property missing ':'");
        }
        var val = match(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/);
        var ret = {
            type: "declaration",
            property: prop.replace(comment_regexp, ""),
            value: val ? val[0].replace(comment_regexp, "").trim() : ""
        };
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        if (!open()) {
            return error("missing '{'");
        }
        var d;
        var decls = comments();
        while (d = declaration()) {
            decls.push(d);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("missing '}'");
        }
        return decls;
    }
    function keyframe() {
        whitespace();
        var vals = [];
        var m;
        while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (vals.length) {
            return {
                type: "keyframe",
                values: vals,
                declarations: declarations()
            };
        }
    }
    function at_keyframes() {
        var m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m) {
            return;
        }
        var vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m) {
            return error("@keyframes missing name");
        }
        var name = m[1];
        if (!open()) {
            return error("@keyframes missing '{'");
        }
        var frame;
        var frames = comments();
        while (frame = keyframe()) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close()) {
            return error("@keyframes missing '}'");
        }
        return {
            type: "keyframes",
            name: name,
            vendor: vendor,
            keyframes: frames
        };
    }
    function at_page() {
        var m = match(/^@page */);
        if (m) {
            var sel = selector() || [];
            return {
                type: "page",
                selectors: sel,
                declarations: declarations()
            };
        }
    }
    function at_page_margin_box() {
        var m = match(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);
        if (m) {
            var name = "".concat(m[1], "-").concat(m[2]) + (m[3] ? "-".concat(m[3]) : "");
            return {
                type: "page-margin-box",
                name: name,
                declarations: declarations()
            };
        }
    }
    function at_fontface() {
        var m = match(/^@font-face\s*/);
        if (m) {
            return {
                type: "font-face",
                declarations: declarations()
            };
        }
    }
    function at_supports() {
        var m = match(/^@supports *([^{]+)/);
        if (m) {
            return {
                type: "supports",
                supports: m[1].trim(),
                rules: rules()
            };
        }
    }
    function at_host() {
        var m = match(/^@host\s*/);
        if (m) {
            return {
                type: "host",
                rules: rules()
            };
        }
    }
    function at_media() {
        var m = match(/^@media([^{]+)*/);
        if (m) {
            return {
                type: "media",
                media: (m[1] || "").trim(),
                rules: rules()
            };
        }
    }
    function at_custom_m() {
        var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (m) {
            return {
                type: "custom-media",
                name: m[1].trim(),
                media: m[2].trim()
            };
        }
    }
    function at_document() {
        var m = match(/^@([-\w]+)?document *([^{]+)/);
        if (m) {
            return {
                type: "document",
                document: m[2].trim(),
                vendor: m[1] ? m[1].trim() : null,
                rules: rules()
            };
        }
    }
    function at_x() {
        var m = match(/^@(import|charset|namespace)\s*([^;]+);/);
        if (m) {
            return {
                type: m[1],
                name: m[2].trim()
            };
        }
    }
    function at_rule() {
        whitespace();
        if (css[0] === "@") {
            var ret = at_x() || at_fontface() || at_media() || at_keyframes() || at_supports() || at_document() || at_custom_m() || at_host() || at_page() || at_page_margin_box();
            if (ret && !settings.preserveStatic) {
                var hasVarFunc = false;
                if (ret.declarations) {
                    hasVarFunc = ret.declarations.some((function(decl) {
                        return /var\(/.test(decl.value);
                    }));
                } else {
                    var arr = ret.keyframes || ret.rules || [];
                    hasVarFunc = arr.some((function(obj) {
                        return (obj.declarations || []).some((function(decl) {
                            return /var\(/.test(decl.value);
                        }));
                    }));
                }
                return hasVarFunc ? ret : {};
            }
            return ret;
        }
    }
    function rule() {
        if (!settings.preserveStatic) {
            var balancedMatch$1 = balancedMatch("{", "}", css);
            if (balancedMatch$1) {
                var hasVarDecl = /:(?:root|host)(?![.:#(])/.test(balancedMatch$1.pre) && /--\S*\s*:/.test(balancedMatch$1.body);
                var hasVarFunc = /var\(/.test(balancedMatch$1.body);
                if (!hasVarDecl && !hasVarFunc) {
                    css = css.slice(balancedMatch$1.end + 1);
                    return {};
                }
            }
        }
        var sel = selector() || [];
        var decls = settings.preserveStatic ? declarations() : declarations().filter((function(decl) {
            var hasVarDecl = sel.some((function(s) {
                return /:(?:root|host)(?![.:#(])/.test(s);
            })) && /^--\S/.test(decl.property);
            var hasVarFunc = /var\(/.test(decl.value);
            return hasVarDecl || hasVarFunc;
        }));
        if (!sel.length) {
            error("selector missing");
        }
        return {
            type: "rule",
            selectors: sel,
            declarations: decls
        };
    }
    function rules(core) {
        if (!core && !open()) {
            return error("missing '{'");
        }
        var node;
        var rules = comments();
        while (css.length && (core || css[0] !== "}") && (node = at_rule() || rule())) {
            if (node.type) {
                rules.push(node);
            }
            rules = rules.concat(comments());
        }
        if (!core && !close()) {
            return error("missing '}'");
        }
        return rules;
    }
    return {
        type: "stylesheet",
        stylesheet: {
            rules: rules(true),
            errors: errors
        }
    };
}

function parseVars(cssData) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaults = {
        parseHost: false,
        store: {},
        onWarning: function onWarning() {}
    };
    var settings = _extends({}, defaults, options);
    var reVarDeclSelectors = new RegExp(":".concat(settings.parseHost ? "host" : "root", "$"));
    if (typeof cssData === "string") {
        cssData = parseCss(cssData, settings);
    }
    cssData.stylesheet.rules.forEach((function(rule) {
        if (rule.type !== "rule" || !rule.selectors.some((function(s) {
            return reVarDeclSelectors.test(s);
        }))) {
            return;
        }
        rule.declarations.forEach((function(decl, i) {
            var prop = decl.property;
            var value = decl.value;
            if (prop && prop.indexOf("--") === 0) {
                settings.store[prop] = value;
            }
        }));
    }));
    return settings.store;
}

function stringifyCss(tree) {
    var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var cb = arguments.length > 2 ? arguments[2] : undefined;
    var renderMethods = {
        charset: function charset(node) {
            return "@charset " + node.name + ";";
        },
        comment: function comment(node) {
            return node.comment.indexOf("__CSSVARSPONYFILL") === 0 ? "/*" + node.comment + "*/" : "";
        },
        "custom-media": function customMedia(node) {
            return "@custom-media " + node.name + " " + node.media + ";";
        },
        declaration: function declaration(node) {
            return node.property + ":" + node.value + ";";
        },
        document: function document(node) {
            return "@" + (node.vendor || "") + "document " + node.document + "{" + visit(node.rules) + "}";
        },
        "font-face": function fontFace(node) {
            return "@font-face" + "{" + visit(node.declarations) + "}";
        },
        host: function host(node) {
            return "@host" + "{" + visit(node.rules) + "}";
        },
        import: function _import(node) {
            return "@import " + node.name + ";";
        },
        keyframe: function keyframe(node) {
            return node.values.join(",") + "{" + visit(node.declarations) + "}";
        },
        keyframes: function keyframes(node) {
            return "@" + (node.vendor || "") + "keyframes " + node.name + "{" + visit(node.keyframes) + "}";
        },
        media: function media(node) {
            return "@media " + node.media + "{" + visit(node.rules) + "}";
        },
        namespace: function namespace(node) {
            return "@namespace " + node.name + ";";
        },
        page: function page(node) {
            return "@page " + (node.selectors.length ? node.selectors.join(", ") : "") + "{" + visit(node.declarations) + "}";
        },
        "page-margin-box": function pageMarginBox(node) {
            return "@" + node.name + "{" + visit(node.declarations) + "}";
        },
        rule: function rule(node) {
            var decls = node.declarations;
            if (decls.length) {
                return node.selectors.join(",") + "{" + visit(decls) + "}";
            }
        },
        supports: function supports(node) {
            return "@supports " + node.supports + "{" + visit(node.rules) + "}";
        }
    };
    function visit(nodes) {
        var buf = "";
        for (var i = 0; i < nodes.length; i++) {
            var n = nodes[i];
            if (cb) {
                cb(n);
            }
            var txt = renderMethods[n.type](n);
            if (txt) {
                buf += txt;
                if (txt.length && n.selectors) {
                    buf += delim;
                }
            }
        }
        return buf;
    }
    return visit(tree.stylesheet.rules);
}

function walkCss(node, fn) {
    node.rules.forEach((function(rule) {
        if (rule.rules) {
            walkCss(rule, fn);
            return;
        }
        if (rule.keyframes) {
            rule.keyframes.forEach((function(keyframe) {
                if (keyframe.type === "keyframe") {
                    fn(keyframe.declarations, rule);
                }
            }));
            return;
        }
        if (!rule.declarations) {
            return;
        }
        fn(rule.declarations, node);
    }));
}

var VAR_PROP_IDENTIFIER = "--";

var VAR_FUNC_IDENTIFIER = "var";

function transformCss(cssData) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaults = {
        preserveStatic: true,
        preserveVars: false,
        variables: {},
        onWarning: function onWarning() {}
    };
    var settings = _extends({}, defaults, options);
    if (typeof cssData === "string") {
        cssData = parseCss(cssData, settings);
    }
    walkCss(cssData.stylesheet, (function(declarations, node) {
        for (var i = 0; i < declarations.length; i++) {
            var decl = declarations[i];
            var type = decl.type;
            var prop = decl.property;
            var value = decl.value;
            if (type !== "declaration") {
                continue;
            }
            if (!settings.preserveVars && prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {
                declarations.splice(i, 1);
                i--;
                continue;
            }
            if (value.indexOf(VAR_FUNC_IDENTIFIER + "(") !== -1) {
                var resolvedValue = resolveValue(value, settings);
                if (resolvedValue !== decl.value) {
                    resolvedValue = fixNestedCalc(resolvedValue);
                    if (!settings.preserveVars) {
                        decl.value = resolvedValue;
                    } else {
                        declarations.splice(i, 0, {
                            type: type,
                            property: prop,
                            value: resolvedValue
                        });
                        i++;
                    }
                }
            }
        }
    }));
    return stringifyCss(cssData);
}

function fixNestedCalc(value) {
    var reCalcVal = /calc\(([^)]+)\)/g;
    (value.match(reCalcVal) || []).forEach((function(match) {
        var newVal = "calc".concat(match.split("calc").join(""));
        value = value.replace(match, newVal);
    }));
    return value;
}

function resolveValue(value) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var __recursiveFallback = arguments.length > 2 ? arguments[2] : undefined;
    if (value.indexOf("var(") === -1) {
        return value;
    }
    var valueData = balancedMatch("(", ")", value);
    function resolveFunc(value) {
        var name = value.split(",")[0].replace(/[\s\n\t]/g, "");
        var fallback = (value.match(/(?:\s*,\s*){1}(.*)?/) || [])[1];
        var match = Object.prototype.hasOwnProperty.call(settings.variables, name) ? String(settings.variables[name]) : undefined;
        var replacement = match || (fallback ? String(fallback) : undefined);
        var unresolvedFallback = __recursiveFallback || value;
        if (!match) {
            settings.onWarning('variable "'.concat(name, '" is undefined'));
        }
        if (replacement && replacement !== "undefined" && replacement.length > 0) {
            return resolveValue(replacement, settings, unresolvedFallback);
        } else {
            return "var(".concat(unresolvedFallback, ")");
        }
    }
    if (!valueData) {
        if (value.indexOf("var(") !== -1) {
            settings.onWarning('missing closing ")" in the value "'.concat(value, '"'));
        }
        return value;
    } else if (valueData.pre.slice(-3) === "var") {
        var isEmptyVarFunc = valueData.body.trim().length === 0;
        if (isEmptyVarFunc) {
            settings.onWarning("var() must contain a non-whitespace string");
            return value;
        } else {
            return valueData.pre.slice(0, -3) + resolveFunc(valueData.body) + resolveValue(valueData.post, settings);
        }
    } else {
        return valueData.pre + "(".concat(resolveValue(valueData.body, settings), ")") + resolveValue(valueData.post, settings);
    }
}

var isBrowser = typeof window !== "undefined";

var isNativeSupport = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");

var counters = {
    group: 0,
    job: 0
};

var defaults = {
    rootElement: isBrowser ? document : null,
    shadowDOM: false,
    include: "style,link[rel=stylesheet]",
    exclude: "",
    variables: {},
    onlyLegacy: true,
    preserveStatic: true,
    preserveVars: false,
    silent: false,
    updateDOM: true,
    updateURLs: true,
    watch: null,
    onBeforeSend: function onBeforeSend() {},
    onError: function onError() {},
    onWarning: function onWarning() {},
    onSuccess: function onSuccess() {},
    onComplete: function onComplete() {},
    onFinally: function onFinally() {}
};

var regex = {
    cssComments: /\/\*[\s\S]+?\*\//g,
    cssKeyframes: /@(?:-\w*-)?keyframes/,
    cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
    cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
    cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
    cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
    cssVarFunc: /var\(\s*--[\w-]/,
    cssVars: /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
};

var variableStore = {
    dom: {},
    job: {},
    user: {}
};

var cssVarsIsRunning = false;

var cssVarsObserver = null;

var cssVarsSrcNodeCount = 0;

var debounceTimer = null;

var isShadowDOMReady = false;

/**
 * Fetches, parses, and transforms CSS custom properties from specified
 * <style> and <link> elements into static values, then appends a new <style>
 * element with static values to the DOM to provide CSS custom property
 * compatibility for legacy browsers. Also provides a single interface for
 * live updates of runtime values in both modern and legacy browsers.
 *
 * @preserve
 * @param {object}   [options] Options object
 * @param {object}   [options.rootElement=document] Root element to traverse for
 *                   <link> and <style> nodes
 * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
 *                   and <style> nodes will be processed.
 * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
 *                   matching <link re="stylesheet"> and <style> nodes to
 *                   process
 * @param {string}   [options.exclude] CSS selector matching <link
 *                   rel="stylehseet"> and <style> nodes to exclude from those
 *                   matches by options.include
 * @param {object}   [options.variables] A map of custom property name/value
 *                   pairs. Property names can omit or include the leading
 *                   double-hyphen (—), and values specified will override
 *                   previous values
 * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
 *                   only generate legacy-compatible CSS in browsers that lack
 *                   native support (i.e., legacy browsers)
 * @param {boolean}  [options.preserveStatic=true] Determines if CSS
 *                   declarations that do not reference a custom property will
 *                   be preserved in the transformed CSS
 * @param {boolean}  [options.preserveVars=false] Determines if CSS custom
 *                   property declarations will be preserved in the transformed
 *                   CSS
 * @param {boolean}  [options.silent=false] Determines if warning and error
 *                   messages will be displayed on the console
 * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
 *                   update the DOM after processing CSS custom properties
 * @param {boolean}  [options.updateURLs=true] Determines if relative url()
 *                   paths will be converted to absolute urls in external CSS
 * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
 *                   be created that will execute the ponyfill when a <link> or
 *                   <style> DOM mutation is observed
 * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
 *                   1) the XHR object, 2) source node reference, and 3) the
 *                   source URL as arguments
 * @param {function} [options.onError] Callback after a CSS parsing error has
 *                   occurred or an XHR request has failed. Passes 1) an error
 *                   message, and 2) source node reference, 3) xhr, and 4 url as
 *                   arguments.
 * @param {function} [options.onWarning] Callback after each CSS parsing warning
 *                   has occurred. Passes 1) a warning message as an argument.
 * @param {function} [options.onSuccess] Callback after CSS data has been
 *                   collected from each node and before CSS custom properties
 *                   have been transformed. Allows modifying the CSS data before
 *                   it is transformed by returning any string value (or false
 *                   to skip). Passes 1) CSS text, 2) source node reference, and
 *                   3) the source URL as arguments.
 * @param {function} [options.onComplete] Callback after all CSS has been
 *                   processed, legacy-compatible CSS has been generated, and
 *                   (optionally) the DOM has been updated. Passes 1) a CSS
 *                   string with CSS variable values resolved, 2) an array of
 *                   output <style> node references that have been appended to
 *                   the DOM, 3) an object containing all custom properies names
 *                   and values, and 4) the ponyfill execution time in
 *                   milliseconds.
 * @param {function} [options.onFinally] Callback in modern and legacy browsers
 *                   after the ponyfill has finished all tasks. Passes 1) a
 *                   boolean indicating if the last ponyfill call resulted in a
 *                   style change, 2) a boolean indicating if the current
 *                   browser provides native support for CSS custom properties,
 *                   and 3) the ponyfill execution time in milliseconds.
 * @example
 *
 *   cssVars({
 *     rootElement   : document,
 *     shadowDOM     : false,
 *     include       : 'style,link[rel="stylesheet"]',
 *     exclude       : '',
 *     variables     : {},
 *     onlyLegacy    : true,
 *     preserveStatic: true,
 *     preserveVars  : false,
 *     silent        : false,
 *     updateDOM     : true,
 *     updateURLs    : true,
 *     watch         : false,
 *     onBeforeSend(xhr, node, url) {},
 *     onError(message, node, xhr, url) {},
 *     onWarning(message) {},
 *     onSuccess(cssText, node, url) {},
 *     onComplete(cssText, styleNode, cssVariables, benchmark) {},
 *     onFinally(hasChanged, hasNativeSupport, benchmark)
 *   });
 */ function cssVars() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var msgPrefix = "cssVars(): ";
    var settings = _extends({}, defaults, options);
    function handleError(message, sourceNode, xhr, url) {
        if (!settings.silent && window.console) {
            console.error("".concat(msgPrefix).concat(message, "\n"), sourceNode);
        }
        settings.onError(message, sourceNode, xhr, url);
    }
    function handleWarning(message) {
        if (!settings.silent && window.console) {
            console.warn("".concat(msgPrefix).concat(message));
        }
        settings.onWarning(message);
    }
    function handleFinally(hasChanged) {
        settings.onFinally(Boolean(hasChanged), isNativeSupport, getTimeStamp() - settings.__benchmark);
    }
    if (!isBrowser) {
        return;
    }
    if (settings.watch) {
        settings.watch = defaults.watch;
        addMutationObserver(settings);
        cssVars(settings);
        return;
    } else if (settings.watch === false && cssVarsObserver) {
        cssVarsObserver.disconnect();
        cssVarsObserver = null;
    }
    if (!settings.__benchmark) {
        if (cssVarsIsRunning === settings.rootElement) {
            cssVarsDebounced(options);
            return;
        }
        var srcNodes = [].slice.call(settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])'));
        settings.__benchmark = getTimeStamp();
        settings.exclude = [ cssVarsObserver ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]', "link[disabled]:not([data-cssvars])", settings.exclude ].filter((function(selector) {
            return selector;
        })).join(",");
        settings.variables = fixVarNames(settings.variables);
        srcNodes.forEach((function(srcNode) {
            var hasStyleCache = srcNode.nodeName.toLowerCase() === "style" && srcNode.__cssVars.text;
            var hasStyleChanged = hasStyleCache && srcNode.textContent !== srcNode.__cssVars.text;
            if (hasStyleCache && hasStyleChanged) {
                srcNode.sheet && (srcNode.sheet.disabled = false);
                srcNode.setAttribute("data-cssvars", "");
            }
        }));
        if (!cssVarsObserver) {
            var outNodes = [].slice.call(settings.rootElement.querySelectorAll('[data-cssvars="out"]'));
            outNodes.forEach((function(outNode) {
                var dataGroup = outNode.getAttribute("data-cssvars-group");
                var srcNode = dataGroup ? settings.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(dataGroup, '"]')) : null;
                if (!srcNode) {
                    outNode.parentNode.removeChild(outNode);
                }
            }));
            if (cssVarsSrcNodeCount && srcNodes.length < cssVarsSrcNodeCount) {
                cssVarsSrcNodeCount = srcNodes.length;
                variableStore.dom = {};
            }
        }
    }
    if (document.readyState !== "loading") {
        if (isNativeSupport && settings.onlyLegacy) {
            var hasVarChange = false;
            if (settings.updateDOM) {
                var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);
                Object.keys(settings.variables).forEach((function(key) {
                    var varValue = settings.variables[key];
                    hasVarChange = hasVarChange || varValue !== getComputedStyle(targetElm).getPropertyValue(key);
                    targetElm.style.setProperty(key, varValue);
                }));
            }
            handleFinally(hasVarChange);
        } else if (!isShadowDOMReady && (settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host)) {
            getCssData({
                rootElement: defaults.rootElement,
                include: defaults.include,
                exclude: settings.exclude,
                skipDisabled: false,
                onSuccess: function onSuccess(cssText, node, url) {
                    var isUserDisabled = (node.sheet || {}).disabled && !node.__cssVars;
                    if (isUserDisabled) {
                        return false;
                    }
                    cssText = cssText.replace(regex.cssComments, "").replace(regex.cssMediaQueries, "");
                    cssText = (cssText.match(regex.cssVarDeclRules) || []).join("");
                    return cssText || false;
                },
                onComplete: function onComplete(cssText, cssArray, nodeArray) {
                    parseVars(cssText, {
                        store: variableStore.dom,
                        onWarning: handleWarning
                    });
                    isShadowDOMReady = true;
                    cssVars(settings);
                }
            });
        } else {
            cssVarsIsRunning = settings.rootElement;
            getCssData({
                rootElement: settings.rootElement,
                include: settings.include,
                exclude: settings.exclude,
                skipDisabled: false,
                onBeforeSend: settings.onBeforeSend,
                onError: function onError(xhr, node, url) {
                    var responseUrl = xhr.responseURL || getFullUrl(url, location.href);
                    var statusText = xhr.statusText ? "(".concat(xhr.statusText, ")") : "Unspecified Error" + (xhr.status === 0 ? " (possibly CORS related)" : "");
                    var errorMsg = "CSS XHR Error: ".concat(responseUrl, " ").concat(xhr.status, " ").concat(statusText);
                    handleError(errorMsg, node, xhr, responseUrl);
                },
                onSuccess: function onSuccess(cssText, node, url) {
                    var isUserDisabled = (node.sheet || {}).disabled && !node.__cssVars;
                    if (isUserDisabled) {
                        return false;
                    }
                    var isLink = node.nodeName.toLowerCase() === "link";
                    var isStyleImport = node.nodeName.toLowerCase() === "style" && cssText !== node.textContent;
                    var returnVal = settings.onSuccess(cssText, node, url);
                    cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
                    if (settings.updateURLs && (isLink || isStyleImport)) {
                        cssText = fixRelativeCssUrls(cssText, url);
                    }
                    return cssText;
                },
                onComplete: function onComplete(cssText, cssArray) {
                    var nodeArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                    var currentVars = _extends({}, variableStore.dom, variableStore.user);
                    var hasVarChange = false;
                    variableStore.job = {};
                    nodeArray.forEach((function(node, i) {
                        var nodeCSS = cssArray[i];
                        node.__cssVars = node.__cssVars || {};
                        node.__cssVars.text = nodeCSS;
                        if (regex.cssVars.test(nodeCSS)) {
                            try {
                                var cssTree = parseCss(nodeCSS, {
                                    preserveStatic: settings.preserveStatic,
                                    removeComments: true
                                });
                                parseVars(cssTree, {
                                    parseHost: Boolean(settings.rootElement.host),
                                    store: variableStore.dom,
                                    onWarning: handleWarning
                                });
                                node.__cssVars.tree = cssTree;
                            } catch (err) {
                                handleError(err.message, node);
                            }
                        }
                    }));
                    _extends(variableStore.job, variableStore.dom);
                    if (settings.updateDOM) {
                        _extends(variableStore.user, settings.variables);
                        _extends(variableStore.job, variableStore.user);
                    } else {
                        _extends(variableStore.job, variableStore.user, settings.variables);
                        _extends(currentVars, settings.variables);
                    }
                    hasVarChange = counters.job > 0 && Boolean(Object.keys(variableStore.job).length > Object.keys(currentVars).length || Boolean(Object.keys(currentVars).length && Object.keys(variableStore.job).some((function(key) {
                        return variableStore.job[key] !== currentVars[key];
                    }))));
                    if (hasVarChange) {
                        resetCssNodes(settings.rootElement);
                        cssVars(settings);
                    } else {
                        var outCssArray = [];
                        var outNodeArray = [];
                        var hasKeyframesWithVars = false;
                        if (settings.updateDOM) {
                            counters.job++;
                        }
                        nodeArray.forEach((function(node, i) {
                            var isSkip = !node.__cssVars.tree;
                            if (node.__cssVars.tree) {
                                try {
                                    transformCss(node.__cssVars.tree, _extends({}, settings, {
                                        variables: variableStore.job,
                                        onWarning: handleWarning
                                    }));
                                    var outCss = stringifyCss(node.__cssVars.tree);
                                    if (settings.updateDOM) {
                                        var nodeCSS = cssArray[i];
                                        var hasCSSVarFunc = regex.cssVarFunc.test(nodeCSS);
                                        if (!node.getAttribute("data-cssvars")) {
                                            node.setAttribute("data-cssvars", "src");
                                        }
                                        if (outCss.length && hasCSSVarFunc) {
                                            var dataGroup = node.getAttribute("data-cssvars-group") || ++counters.group;
                                            var outCssNoSpaces = outCss.replace(/\s/g, "");
                                            var outNode = settings.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(dataGroup, '"]')) || document.createElement("style");
                                            hasKeyframesWithVars = hasKeyframesWithVars || regex.cssKeyframes.test(outCss);
                                            if (settings.preserveStatic) {
                                                node.sheet && (node.sheet.disabled = true);
                                            }
                                            if (!outNode.hasAttribute("data-cssvars")) {
                                                outNode.setAttribute("data-cssvars", "out");
                                            }
                                            if (outCssNoSpaces === node.textContent.replace(/\s/g, "")) {
                                                isSkip = true;
                                                if (outNode && outNode.parentNode) {
                                                    node.removeAttribute("data-cssvars-group");
                                                    outNode.parentNode.removeChild(outNode);
                                                }
                                            } else if (outCssNoSpaces !== outNode.textContent.replace(/\s/g, "")) {
                                                [ node, outNode ].forEach((function(n) {
                                                    n.setAttribute("data-cssvars-job", counters.job);
                                                    n.setAttribute("data-cssvars-group", dataGroup);
                                                }));
                                                outNode.textContent = outCss;
                                                outCssArray.push(outCss);
                                                outNodeArray.push(outNode);
                                                if (!outNode.parentNode) {
                                                    node.parentNode.insertBefore(outNode, node.nextSibling);
                                                }
                                            }
                                        }
                                    } else {
                                        if (node.textContent.replace(/\s/g, "") !== outCss) {
                                            outCssArray.push(outCss);
                                        }
                                    }
                                } catch (err) {
                                    handleError(err.message, node);
                                }
                            }
                            if (isSkip) {
                                node.setAttribute("data-cssvars", "skip");
                            }
                            if (!node.hasAttribute("data-cssvars-job")) {
                                node.setAttribute("data-cssvars-job", counters.job);
                            }
                        }));
                        cssVarsSrcNodeCount = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length;
                        if (settings.shadowDOM) {
                            var elms = [].concat(settings.rootElement).concat([].slice.call(settings.rootElement.querySelectorAll("*")));
                            for (var i = 0, elm; elm = elms[i]; ++i) {
                                if (elm.shadowRoot && elm.shadowRoot.querySelector("style")) {
                                    var shadowSettings = _extends({}, settings, {
                                        rootElement: elm.shadowRoot
                                    });
                                    cssVars(shadowSettings);
                                }
                            }
                        }
                        if (settings.updateDOM && hasKeyframesWithVars) {
                            fixKeyframes(settings.rootElement);
                        }
                        cssVarsIsRunning = false;
                        settings.onComplete(outCssArray.join(""), outNodeArray, JSON.parse(JSON.stringify(variableStore.job)), getTimeStamp() - settings.__benchmark);
                        handleFinally(outNodeArray.length);
                    }
                }
            });
        }
    } else {
        document.addEventListener("DOMContentLoaded", (function init(evt) {
            cssVars(options);
            document.removeEventListener("DOMContentLoaded", init);
        }));
    }
}

cssVars.reset = function() {
    counters.job = 0;
    counters.group = 0;
    cssVarsIsRunning = false;
    if (cssVarsObserver) {
        cssVarsObserver.disconnect();
        cssVarsObserver = null;
    }
    cssVarsSrcNodeCount = 0;
    debounceTimer = null;
    isShadowDOMReady = false;
    for (var prop in variableStore) {
        variableStore[prop] = {};
    }
};

function addMutationObserver(settings) {
    function isDisabled(node) {
        var isDisabledAttr = isLink(node) && node.hasAttribute("disabled");
        var isDisabledSheet = (node.sheet || {}).disabled;
        return isDisabledAttr || isDisabledSheet;
    }
    function isLink(node) {
        var isStylesheet = node.nodeName.toLowerCase() === "link" && (node.getAttribute("rel") || "").indexOf("stylesheet") !== -1;
        return isStylesheet;
    }
    function isStyle(node) {
        return node.nodeName.toLowerCase() === "style";
    }
    function isValidAttributeMutation(mutation) {
        var isValid = false;
        if (mutation.type === "attributes" && isLink(mutation.target) && !isDisabled(mutation.target)) {
            var isEnabledMutation = mutation.attributeName === "disabled";
            var isHrefMutation = mutation.attributeName === "href";
            var isSkipNode = mutation.target.getAttribute("data-cssvars") === "skip";
            var isSrcNode = mutation.target.getAttribute("data-cssvars") === "src";
            if (isEnabledMutation) {
                isValid = !isSkipNode && !isSrcNode;
            } else if (isHrefMutation) {
                if (isSkipNode) {
                    mutation.target.setAttribute("data-cssvars", "");
                } else if (isSrcNode) {
                    resetCssNodes(settings.rootElement, true);
                }
                isValid = true;
            }
        }
        return isValid;
    }
    function isValidStyleTextMutation(mutation) {
        var isValid = false;
        if (mutation.type === "childList") {
            var isStyleElm = isStyle(mutation.target);
            var isOutNode = mutation.target.getAttribute("data-cssvars") === "out";
            isValid = isStyleElm && !isOutNode;
        }
        return isValid;
    }
    function isValidAddMutation(mutation) {
        var isValid = false;
        if (mutation.type === "childList") {
            isValid = [].slice.call(mutation.addedNodes).some((function(node) {
                var isElm = node.nodeType === 1;
                var hasAttr = isElm && node.hasAttribute("data-cssvars");
                var isStyleWithVars = isStyle(node) && regex.cssVars.test(node.textContent);
                var isValid = !hasAttr && (isLink(node) || isStyleWithVars);
                return isValid && !isDisabled(node);
            }));
        }
        return isValid;
    }
    function isValidRemoveMutation(mutation) {
        var isValid = false;
        if (mutation.type === "childList") {
            isValid = [].slice.call(mutation.removedNodes).some((function(node) {
                var isElm = node.nodeType === 1;
                var isOutNode = isElm && node.getAttribute("data-cssvars") === "out";
                var isSrcNode = isElm && node.getAttribute("data-cssvars") === "src";
                var isValid = isSrcNode;
                if (isSrcNode || isOutNode) {
                    var dataGroup = node.getAttribute("data-cssvars-group");
                    var orphanNode = settings.rootElement.querySelector('[data-cssvars-group="'.concat(dataGroup, '"]'));
                    if (isSrcNode) {
                        resetCssNodes(settings.rootElement, true);
                    }
                    if (orphanNode) {
                        orphanNode.parentNode.removeChild(orphanNode);
                    }
                }
                return isValid;
            }));
        }
        return isValid;
    }
    if (!window.MutationObserver) {
        return;
    }
    if (cssVarsObserver) {
        cssVarsObserver.disconnect();
        cssVarsObserver = null;
    }
    cssVarsObserver = new MutationObserver((function(mutations) {
        var hasValidMutation = mutations.some((function(mutation) {
            return isValidAttributeMutation(mutation) || isValidStyleTextMutation(mutation) || isValidAddMutation(mutation) || isValidRemoveMutation(mutation);
        }));
        if (hasValidMutation) {
            cssVars(settings);
        }
    }));
    cssVarsObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: [ "disabled", "href" ],
        childList: true,
        subtree: true
    });
}

function cssVarsDebounced(settings) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout((function() {
        settings.__benchmark = null;
        cssVars(settings);
    }), delay);
}

function fixKeyframes(rootElement) {
    var animationNameProp = [ "animation-name", "-moz-animation-name", "-webkit-animation-name" ].filter((function(prop) {
        return getComputedStyle(document.body)[prop];
    }))[0];
    if (animationNameProp) {
        var allNodes = rootElement.getElementsByTagName("*");
        var keyframeNodes = [];
        var nameMarker = "__CSSVARSPONYFILL-KEYFRAMES__";
        for (var i = 0, len = allNodes.length; i < len; i++) {
            var node = allNodes[i];
            var animationName = getComputedStyle(node)[animationNameProp];
            if (animationName !== "none") {
                node.style[animationNameProp] += nameMarker;
                keyframeNodes.push(node);
            }
        }
        void document.body.offsetHeight;
        for (var _i = 0, _len = keyframeNodes.length; _i < _len; _i++) {
            var nodeStyle = keyframeNodes[_i].style;
            nodeStyle[animationNameProp] = nodeStyle[animationNameProp].replace(nameMarker, "");
        }
    }
}

function fixRelativeCssUrls(cssText, baseUrl) {
    var cssUrls = cssText.replace(regex.cssComments, "").match(regex.cssUrls) || [];
    cssUrls.forEach((function(cssUrl) {
        var oldUrl = cssUrl.replace(regex.cssUrls, "$1");
        var newUrl = getFullUrl(oldUrl, baseUrl);
        cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));
    }));
    return cssText;
}

function fixVarNames() {
    var varObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var reLeadingHyphens = /^-{2}/;
    return Object.keys(varObj).reduce((function(obj, value) {
        var key = reLeadingHyphens.test(value) ? value : "--".concat(value.replace(/^-+/, ""));
        obj[key] = varObj[value];
        return obj;
    }), {});
}

function getFullUrl(url) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
    var d = document.implementation.createHTMLDocument("");
    var b = d.createElement("base");
    var a = d.createElement("a");
    d.head.appendChild(b);
    d.body.appendChild(a);
    b.href = base;
    a.href = url;
    return a.href;
}

function getTimeStamp() {
    return isBrowser && (window.performance || {}).now ? window.performance.now() : (new Date).getTime();
}

function resetCssNodes(rootElement) {
    var resetDOMVariableStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var resetNodes = [].slice.call(rootElement.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));
    resetNodes.forEach((function(node) {
        return node.setAttribute("data-cssvars", "");
    }));
    if (resetDOMVariableStore) {
        variableStore.dom = {};
    }
}

/* harmony default export */ __webpack_exports__["default"] = (cssVars);
//# sourceMappingURL=css-vars-ponyfill.esm.js.map


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZnJvbnRlbmQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLmRldi9hc3NldHMvc2hhcmVkL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJpbWFyeS1tZW51LmpzIiwid2VicGFjazovLy8uLy5kZXYvYXNzZXRzL3NoYXJlZC9qcy9mcm9udGVuZC9jb21wb25lbnRzL3NlYXJjaC10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vLmRldi9hc3NldHMvc2hhcmVkL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvd29vLW1lbnUtY2FydC5qcyIsIndlYnBhY2s6Ly8vLi8uZGV2L2Fzc2V0cy9zaGFyZWQvanMvZnJvbnRlbmQvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vLmRldi9hc3NldHMvc2hhcmVkL2pzL2Zyb250ZW5kL3ZlbmRvci9yZXNwb25zaXZlLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLXZhcnMtcG9ueWZpbGwvZGlzdC9jc3MtdmFycy1wb255ZmlsbC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL190cmltbWVkRW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vLmRldi9hc3NldHMvc2hhcmVkL2pzL2Zyb250ZW5kL2Zyb250ZW5kLmpzXCIpO1xuIiwiLyogZ2xvYmFsIFRlblVwICovXG5pbXBvcnQgJy4uL3ZlbmRvci9yZXNwb25zaXZlLW5hdic7XG5cbi8qKlxuICogSG9vayB1cCBuYXZpZ2F0aW9uLlxuICovXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuXHRpZiAoIFRlblVwICkge1xuXHRcdFRlblVwLm5hdmlnYXRpb24oIHtcblx0XHRcdHRhcmdldDogJyNoZWFkZXJfX25hdmlnYXRpb24nLFxuXHRcdFx0dG9nZ2xlOiAnI25hdi10b2dnbGUnLFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cdFx0XHRzdWJfbWVudV9vcGVuOiBnb0Zyb250ZW5kLm9wZW5NZW51T25Ib3ZlciA/ICdob3ZlcicgOiAnY2xpY2snXG5cdFx0fSApO1xuXHR9XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBsb2NrTWVudUZvY3VzICk7XG59O1xuXG4vKipcbiAqIExvY2sgdGFiYmluZyB0byB0aGUgbWFpbiBuYXZpZ2F0aW9uIG9ubHkuXG4gKi9cbmZ1bmN0aW9uIGxvY2tNZW51Rm9jdXMoIGV2dCApIHtcblx0dmFyIGUgPSBldmVudCB8fCBldnQ7IC8vIGZvciBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHlcblx0dmFyIGNoYXJDb2RlID0gZS53aGljaCB8fCBlLmtleUNvZGU7XG5cblx0aWYgKCBjaGFyQ29kZSAhPT0gOSB8fCAhIGpRdWVyeSggJ2JvZHknICkuaGFzQ2xhc3MoICdtZW51LWlzLW9wZW4nICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyICRlbGVtZW50ICAgICAgID0galF1ZXJ5KCAnOmZvY3VzJyApLFxuXHQgICAgbWFpbk1lbnVMZW5ndGggPSBqUXVlcnkoICd1bC5wcmltYXJ5LW1lbnUnICkuY2hpbGRyZW4oKS5sZW5ndGgsXG5cdCAgICBjdXJyZW50SW5kZXggICA9IGpRdWVyeSggJGVsZW1lbnQgKS5jbG9zZXN0KCAnbGknICkuaW5kZXgoKSxcblx0ICAgIGlzU2hpZnRUYWIgICAgID0gKCBldmVudC5zaGlmdEtleSAmJiBldmVudC5rZXlDb2RlID09IDkgKTtcblxuXHRpZiAoICRlbGVtZW50LmNsb3Nlc3QoICd1bCcgKS5oYXNDbGFzcyggJ3N1Yi1tZW51JyApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGN1cnJlbnRJbmRleCA9IGlzU2hpZnRUYWIgPyBjdXJyZW50SW5kZXggLSAxIDogY3VycmVudEluZGV4ICsgMTtcblxuXHRpZiAoICRlbGVtZW50LmF0dHIoICdpZCcgKSA9PT0gJ25hdi10b2dnbGUnICkge1xuXHRcdGlmICggaXNTaGlmdFRhYiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoICd1bC5wcmltYXJ5LW1lbnUgbGk6Zmlyc3QtY2hpbGQgYScgKVswXS5mb2N1cygpO1xuXHRcdH0sIDEwICk7XG5cdH1cblxuXHQvLyBNZW51IGxpbmtcblx0aWYgKCAkZWxlbWVudC5wYXJlbnRzKCAndWwucHJpbWFyeS1tZW51JyApLmxlbmd0aCA+IDAgKSB7XG5cdFx0aWYgKCAoIGN1cnJlbnRJbmRleCA8IDAgJiYgaXNTaGlmdFRhYiApIHx8ICggY3VycmVudEluZGV4ID09PSBtYWluTWVudUxlbmd0aCApICkge1xuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggJyNuYXYtdG9nZ2xlJyApLmZvY3VzKCk7XG5cdFx0XHR9LCAxMCApO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcbiIsImNvbnN0IHNlYXJjaFRvZ2dsZSA9ICgpID0+IHtcblx0Y29uc3Qgc2VhcmNoVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdoZWFkZXJfX3NlYXJjaC10b2dnbGUnICk7XG5cblx0aWYgKCAhIHNlYXJjaFRvZ2dsZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwZXJmb3JtVG9nZ2xlID0gKCBlbGVtZW50ICkgPT4ge1xuXHRcdGNvbnN0IHRvZ2dsZSA9IGVsZW1lbnQ7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggdG9nZ2xlLmRhdGFzZXQudG9nZ2xlVGFyZ2V0ICk7XG5cblx0XHRpZiAoIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdzaG93LW1vZGFsJyApICkge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbW9kYWwuXG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSggJ2FjdGl2ZScgKTtcblxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSggJ3Nob3ctbW9kYWwnICk7XG5cdFx0XHRcdHRvZ2dsZS5mb2N1cygpO1xuXHRcdFx0fSwgMjUwICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFNob3cgdGhlIG1vZGFsLlxuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdzaG93LW1vZGFsJyApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCAnYWN0aXZlJyApO1xuXG5cdFx0XHRcdGlmICggdG9nZ2xlLmRhdGFzZXQuc2V0Rm9jdXMgKSB7XG5cdFx0XHRcdFx0Y29uc3QgZm9jdXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggdG9nZ2xlLmRhdGFzZXQuc2V0Rm9jdXMgKTtcblxuXHRcdFx0XHRcdGlmICggZm9jdXNFbGVtZW50ICkge1xuXHRcdFx0XHRcdFx0dmFyIHNlYXJjaFRlcm0gPSBmb2N1c0VsZW1lbnQudmFsdWU7XG5cdFx0XHRcdFx0XHRmb2N1c0VsZW1lbnQudmFsdWUgPSAnJztcblx0XHRcdFx0XHRcdGZvY3VzRWxlbWVudC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0Zm9jdXNFbGVtZW50LnZhbHVlID0gc2VhcmNoVGVybTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEwICk7XG5cdFx0fVxuXHR9O1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcqW2RhdGEtdG9nZ2xlLXRhcmdldF0nICkuZm9yRWFjaCggZWxlbWVudCA9PiB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0cGVyZm9ybVRvZ2dsZSggZWxlbWVudCApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdC8vIENsb3NlIG1vZGFsIG9uIGVzY2FwZSBrZXkgcHJlc3MuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXl1cCcsIGV2ZW50ID0+IHtcblx0XHRpZiAoIGV2ZW50LmtleUNvZGUgPT09IDI3ICkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuc2VhcmNoLW1vZGFsLmFjdGl2ZScgKS5mb3JFYWNoKCBlbGVtZW50ID0+IHtcblx0XHRcdFx0cGVyZm9ybVRvZ2dsZShcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnKltkYXRhLXRvZ2dsZS10YXJnZXQ9XCInICsgZWxlbWVudC5kYXRhc2V0Lm1vZGFsVGFyZ2V0U3RyaW5nICsgJ1wiXScgKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fSApO1xuXG5cdC8vIENsb3NlIG1vZGFsIG9uIG91dHNpZGUgY2xpY2suXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnNlYXJjaC1tb2RhbC5hY3RpdmUnICk7XG5cblx0XHRpZiAoIHRhcmdldCA9PT0gbW9kYWwgKSB7XG5cdFx0XHRwZXJmb3JtVG9nZ2xlKFxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnKltkYXRhLXRvZ2dsZS10YXJnZXQ9XCInICsgbW9kYWwuZGF0YXNldC5tb2RhbFRhcmdldFN0cmluZyArICdcIl0nIClcblx0XHRcdCk7XG5cdFx0fVxuXHR9ICk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBsb2NrU2VhcmNoRm9jdXMgKTtcbn07XG5cbi8qKlxuICogTG9jayB0YWJiaW5nIHRvIHRoZSBzZWFyY2ggZm9ybSBvbmx5LlxuICovXG4gZnVuY3Rpb24gbG9ja1NlYXJjaEZvY3VzKCBlICkge1xuXHQvLyBJZiB0aGUga2V5cHJlc3MgaXNuJ3QgYSB0YWIgb3IgdGhlIHNlYXJjaCBmb3JtIGlzbid0IGFjdGl2ZSwgcmV0dXJuXG5cdGlmICggZS5rZXlDb2RlICE9PSA5IHx8ICEgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zaXRlLXNlYXJjaC5hY3RpdmUnICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQ3VycmVudCBhY3RpdmUgZWxlbWVudCBiZWZvcmUgaXQgbW92ZXNcblx0bGV0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG5cdC8vIElmIHdlJ3JlIG9uIHRoZSBpbnB1dCBhbmQgc2hpZnQrdGFiIHdhcyBwcmVzc2VkLCBvdmVycmlkZSBhbmQgZm9jdXMgb24gYnV0dG9uLlxuXHRpZiAoIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnc2VhcmNoLWZvcm1fX2lucHV0JyApICYmIGUuc2hpZnRLZXkgKSB7XG5cdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBGb2N1cyB0aGUgY29ycmVjdCBidXR0b24gYnkgb25seSBsb29raW5nIGZvciBpdCBpbiB0aGUgcGFyZW50IGVsZW1lbnRcblx0XHRcdGFjdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCAnc2VhcmNoLWlucHV0X19idXR0b24nICkuaXRlbSgwKS5mb2N1cygpO1xuXHRcdH0sIDEwICk7XG5cdH1cblxuXHQvLyBJZiB3ZSdyZSBvbiB0aGUgYnV0dG9uIGFuZCB0YWIgd2FzIHByZXNzZWQsIG92ZXJyaWRlIGFuZCBmb2N1cyBvbiBpbnB1dC5cblx0aWYgKCBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3NlYXJjaC1pbnB1dF9fYnV0dG9uJyApICYmICEgZS5zaGlmdEtleSApIHtcblx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdC8vIEZvY3VzIHRoZSBjb3JyZWN0IGlucHV0IGJ5IG9ubHkgbG9va2luZyBmb3IgaXQgaW4gdGhlIHBhcmVudCBlbGVtZW50XG5cdFx0XHRhY3RpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ3NlYXJjaC1mb3JtX19pbnB1dCcgKS5pdGVtKDApLmZvY3VzKCk7XG5cdFx0fSwgMTAgKTtcblx0fVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hUb2dnbGU7XG4iLCJsZXQgbWVudU9iamVjdCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdoZWFkZXJfX2NhcnQtdG9nZ2xlJyApO1xubGV0IHNpdGVPdmVybGF5ICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2l0ZS1vdmVybGF5JyApO1xubGV0IHNpZGVOYXYgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2l0ZS1uYXYtLWNhcnQnICk7XG5sZXQgc2lkZU5hdkNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzaXRlLWNsb3NlLWhhbmRsZScgKTtcblxuY29uc3Qgd29vTWVudUNhcnQgPSAoKSA9PiB7XG5cdGlmIChcblx0XHRudWxsID09PSBtZW51T2JqZWN0IHx8XG5cdFx0bnVsbCA9PT0gc2l0ZU92ZXJsYXkgfHxcblx0XHRudWxsID09PSBzaWRlTmF2Q2xvc2Vcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaGFzLXdvby1jYXJ0LXNsaWRlb3V0JyApO1xuXG5cdG1lbnVPYmplY3QuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRvZ2dsZVNpZGVOYXZWaXNpYmlsaXR5KCk7XG5cdH0gKTtcblxuXHRzaXRlT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0b2dnbGVTaWRlTmF2VmlzaWJpbGl0eSApO1xuXHRzaWRlTmF2Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdG9nZ2xlU2lkZU5hdlZpc2liaWxpdHkgKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVNpZGVOYXZWaXNpYmlsaXR5ID0gKCBldmVudCApID0+IHtcblx0c2lkZU5hdi5jbGFzc0xpc3QudG9nZ2xlKCAnYWN0aXZlJyApO1xuXHRzaXRlT3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCAnYWN0aXZlJyApO1xuXHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoICdzaWRlYmFyLW1vdmUnICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3b29NZW51Q2FydDtcbiIsImltcG9ydCBjc3NWYXJzIGZyb20gJ2Nzcy12YXJzLXBvbnlmaWxsJztcbmltcG9ydCBwcmltYXJ5TWVudSBmcm9tICcuL2NvbXBvbmVudHMvcHJpbWFyeS1tZW51LmpzJztcbmltcG9ydCBzZWFyY2hUb2dnbGUgZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC10b2dnbGUuanMnO1xuaW1wb3J0IHdvb01lbnVDYXJ0IGZyb20gJy4vY29tcG9uZW50cy93b28tbWVudS1jYXJ0LmpzJztcbmltcG9ydCBfZGVib3VjZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnOyAvLyB3ZSBuZWVkIGFuIGFsaWFzIGZvciBkZWJvdW5jZSBvdGhlcndpc2UgaXQgY29uZmxpY3RzIHdpdGggY3VzdG9taXplclxuXG5wcmltYXJ5TWVudSgpO1xuc2VhcmNoVG9nZ2xlKCk7XG53b29NZW51Q2FydCgpO1xuY3NzVmFycygpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXHRjb25zdCBoYXNTZWxlY3RpdmVSZWZyZXNoID0gKFxuXHRcdCd1bmRlZmluZWQnICE9PSB0eXBlb2Ygd3AgJiZcblx0XHR3cC5jdXN0b21pemUgJiZcblx0XHR3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaCAmJlxuXHRcdHdwLmN1c3RvbWl6ZS5uYXZNZW51c1ByZXZpZXcuTmF2TWVudUluc3RhbmNlUGFydGlhbFxuXHQpO1xuXG5cdC8vIHBhcnRpYWwtY29udGVudC1yZW5kZXJlZCBtaWdodCByZW5kZXIgbXVsdGlwbGUgdGltZXMgZm9yIHNvbWUgcmVhc29uLCBsZXQncyBtYWtlIHN1cmUgdG8gZGVib3VjZSB0aGlzLlxuXHRjb25zdCBpbml0ID0gX2RlYm91Y2UoICgpID0+IHtcblx0XHQvLyB3ZSBuZWVkIHRvIHJlbW92ZSB0aGlzIGJlZm9yZSBjYWxsaW5nIHByaW1hcnkgbWVudSBhZ2Fpbi5cblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoYXMtb2Zmc2NyZWVuLW5hdicgKTtcblxuXHRcdHByaW1hcnlNZW51KCk7XG5cdFx0c2VhcmNoVG9nZ2xlKCk7XG5cdH0sIDEwMDAgKTtcblxuXHRpZiAoIGhhc1NlbGVjdGl2ZVJlZnJlc2ggKSB7XG5cdFx0d3AuY3VzdG9taXplLnNlbGVjdGl2ZVJlZnJlc2guYmluZCggJ3BhcnRpYWwtY29udGVudC1yZW5kZXJlZCcsIGZ1bmN0aW9uICggcGxhY2VtZW50ICkge1xuXHRcdFx0Y29uc3QgY2hhbmdlZEhlYWRlclZhcmlhdGlvbiA9IChcblx0XHRcdFx0cGxhY2VtZW50ICYmXG5cdFx0XHRcdCdudWxsJyAhPT0gcGxhY2VtZW50LmNvbnRhaW5lclswXS5wYXJlbnROb2RlICYmXG5cdFx0XHRcdCdoZWFkZXJfdmFyaWF0aW9uJyA9PT0gcGxhY2VtZW50LnBhcnRpYWwuaWRcblx0XHRcdCk7XG5cblx0XHRcdGlmICggY2hhbmdlZEhlYWRlclZhcmlhdGlvbiApIHtcblx0XHRcdFx0aW5pdCgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufSApO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cblx0TmFtZTogV29yZFByZXNzIEFjY2Vzc2libGUgUmVzcG9uc2l2ZSBOYXZpZ2F0aW9uIE1lbnVcblx0VXNhZ2U6XG5cblx0VGVuVXAuYnVpbGRfbWVudSh7XG5cblx0XHQndGFyZ2V0J1x0XHQ6XHQnI3ByaW1hcnktbmF2JywgICAgICAvLyB0aGUgc2VsZWN0b3Igb2YgdGhlIG5hdiBtZW51IDx1bD5cblx0XHQndG9nZ2xlJ1x0XHQ6XHQnI2pzLW1lbnUtdG9nZ2xlJywgICAvLyB0aGUgSUQgb2YgdGhlIGxpbmsgeW91J3JlIHVzaW5nIHRvIG9wZW4vY2xvc2UgdGhlIHNtYWxsIHNjcmVlbiBtZW51XG5cdFx0J3N1Yl9tZW51X29wZW4nXHQ6XHQnaG92ZXInXG5cblx0fSwgZnVuY3Rpb24oKSB7XG5cblx0XHRjb25zb2xlLmxvZygnQW1hemluZyBjYWxsYmFjayBmdW5jdGlvbiEnKTtcblxuXHR9KTtcblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuKCBmdW5jdGlvbigpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0Ly8gRGVmaW5lIGdsb2JhbCBUZW5VcCBvYmplY3QgaWYgaXQgZG9lc24ndCBleGlzdFxuXHRpZiAoICdvYmplY3QnICE9PSB0eXBlb2Ygd2luZG93LlRlblVwICkge1xuXHRcdHdpbmRvdy5UZW5VcCA9IHt9O1xuXHR9XG5cblx0Lypcblx0XHRDYWNoZSBhbmQgZGVmaW5lIHNvbWUgdmFyaWFibGVzXG5cdCovXG5cblx0Ly8gaW5pdCBmdW5jdGlvblxuXHRUZW5VcC5uYXZpZ2F0aW9uID0gZnVuY3Rpb24oIG9wdGlvbnMsIGNhbGxiYWNrICkge1xuXG5cdFx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdFx0J3RhcmdldCdcdFx0Olx0JyNwcmltYXJ5LW5hdicsXG5cdFx0XHQndG9nZ2xlJ1x0XHQ6XHQnI2pzLW1lbnUtdG9nZ2xlJyxcblx0XHRcdCdzdWJfbWVudV9vcGVuJ1x0Olx0J2hvdmVyJ1xuXHRcdH07XG5cdFx0dmFyIG9wdDtcblxuXHRcdC8vIE1hcCBhbGwgZGVmYXVsdCBzZXR0aW5ncyB0byB1c2VyIGRlZmluZWQgb3B0aW9ucyBpZiB0aGV5IGV4aXN0XG5cdFx0Zm9yICggb3B0ID0gMDsgb3B0IDwgZGVmYXVsdHMubGVuZ3RoOyBvcHQgPSBvcHQgKyAxICkge1xuXG5cdFx0XHRpZiggdHlwZW9mIG9wdGlvbnNbb3B0XSA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdG9wdGlvbnNbb3B0XSA9IGRlZmF1bHRzW29wdF07XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHR2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIG9wdGlvbnMudGFyZ2V0ICk7XG5cblx0XHQvLyBCYWlsIG91dCBpZiB0aGVyZSdzIG5vIG1lbnVcblx0XHRpZiAoICEgbWVudSApIHsgcmV0dXJuOyB9XG5cblx0XHR2YXIgbWVudV9pZCA9IG1lbnUuZ2V0QXR0cmlidXRlKCAnaWQnICk7XG5cdFx0dmFyIG1lbnVfdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggb3B0aW9ucy50b2dnbGUgKTtcblx0XHR2YXIgYXJpYV9jb250cm9scyA9IG1lbnVfdG9nZ2xlLmdldEF0dHJpYnV0ZSggJ2FyaWEtY29udHJvbHMnICk7XG5cdFx0dmFyIHN1Yl9tZW51X2FjaW9uID0gb3B0aW9ucy5zdWJfbWVudV9vcGVuO1xuXHRcdHZhciBjdXJyZW50X21lbnVfaXRlbSA9IG1lbnUucXVlcnlTZWxlY3RvciggJy5jdXJyZW50LW1lbnUtaXRlbScgKTtcblx0XHR2YXIgbWVudV9pdGVtc19saW5rcyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCggJy5tZW51LWl0ZW0gPiBhJyApO1xuXHRcdHZhciBtZW51X2l0ZW1zX2xpbmtzX2NvdW50ID0gbWVudV9pdGVtc19saW5rcy5sZW5ndGg7XG5cdFx0dmFyIG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbiA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCggJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJyApO1xuXHRcdHZhciBtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW5fY291bnQgPSBtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW4ubGVuZ3RoO1xuXHRcdHZhciBjdXJyZW50VGFyZ2V0O1xuXHRcdHZhciB0YXJnZXQ7XG5cdFx0dmFyIGk7XG5cblx0XHQvLyBMaXN0ZW5lciBmb3IgdGhlIG1lbnUgb3Blbi9jbG9zZSBhY3Rpb25cblx0XHRmdW5jdGlvbiBsaXN0ZW5lcl9tZW51KCBlICkge1xuXG5cdFx0XHQvLyBTdG9wIGxpbmtzIGZyb20gZmlyaW5nXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmICggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoICdtZW51LWlzLW9wZW4nICkgKSB7XG5cdFx0XHRcdC8vIENsb3NlIHRoZSBtZW51XG5cdFx0XHRcdG1lbnUuc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScgKTtcblx0XHRcdFx0bWVudV90b2dnbGUuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblxuXHRcdFx0XHQvLyBCdWJibGUgdG8gdGhlIGRvY3VtZW50XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggJ21lbnUtaXMtb3BlbicgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE9wZW4gdGhlIG1lbnVcblx0XHRcdFx0bWVudS5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICdmYWxzZScgKTtcblx0XHRcdFx0bWVudV90b2dnbGUuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApO1xuXG5cdFx0XHRcdC8vIFNldCBmb2N1cyB0byB0aGUgZmlyc3QgbGlua1xuXHRcdFx0XHRtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoICdhJyApWzBdLmZvY3VzKCk7XG5cblx0XHRcdFx0Ly8gQnViYmxlIHRvIHRoZSBkb2N1bWVudFxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoICdtZW51LWlzLW9wZW4nICk7XG5cdFx0XHR9XG5cblx0XHR9OyAvLyBsaXN0ZW5lcl9tZW51KClcblxuXHRcdC8vIExpc3RlbmVyIGZvciBzdWJtZW51IG9uIGNsaWNrXG5cdFx0ZnVuY3Rpb24gbGlzdGVuZXJfc3VibWVudV9jbGljayggZSApIHtcblxuXHRcdFx0Y3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcblx0XHRcdHRhcmdldCA9IGUudGFyZ2V0O1xuXG5cdFx0XHRpZiAoIHRhcmdldC50YWdOYW1lID09PSAnc3ZnJyB8fCB0YXJnZXQudGFnTmFtZSA9PT0gJ3BhdGgnICkge1xuXHRcdFx0XHR0YXJnZXQgPSBjdXJyZW50VGFyZ2V0LmNsb3Nlc3QoICcubWVudS1pdGVtID4gYScgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCB0YXJnZXQucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZy5ocmVmICk7XG5cdFx0XHRcdGlmICggZ29Gcm9udGVuZC5pc01vYmlsZSApIHtcblx0XHRcdFx0XHRpZiAoIHRhcmdldC50YWdOYW1lID09PSAnQScgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggdGFyZ2V0LnRhZ05hbWUgPT09ICdVTCcgKSB7XG5cdFx0XHRcdFx0XHRsZXQgdGVtcFVSTCA9IHRhcmdldC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLmhyZWY7XG5cdFx0XHRcdFx0XHRpZiAoIG51bGwgIT09IHRlbXBVUkwgKSB7XG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGVtcFVSTDtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRhcmdldC5nZXRBdHRyaWJ1dGUoICdhcmlhLWhhc3BvcHVwJyApICkge1xuXHRcdFx0XHQvLyBTdG9wIGxpbmtzIGZyb20gZmlyaW5nXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHQvLyBTdG9wIGV2ZW50cyBmcm9tIGJ1YmJsaW5nIHVwIHRvIHBhcmVudCBlbGVtZW50c1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRcdHZhciBwYXJlbnRfbWVudSA9IHRhcmdldC5wYXJlbnROb2RlO1xuXHRcdFx0XHR2YXIgc3ViX21lbnUgPSBwYXJlbnRfbWVudS5xdWVyeVNlbGVjdG9yKCAnLnN1Yi1tZW51JyApO1xuXHRcdFx0XHR2YXIgYWxsX29wZW5fbWVudXMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2hpbGQtaGFzLWZvY3VzJyApO1xuXHRcdFx0XHR2YXIgYWxsX29wZW5fbWVudXNfY291bnQgPSBhbGxfb3Blbl9tZW51cy5sZW5ndGg7XG5cdFx0XHRcdHZhciBhbGxfb3Blbl9tZW51X3RyaWdnZXJzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCAnLmNoaWxkLWhhcy1mb2N1cyA+IGEuc3VibWVudS1pcy1vcGVuJyApO1xuXHRcdFx0XHR2YXIgYWxsX29wZW5fbWVudV90cmlnZ2Vyc19jb3VudCA9IGFsbF9vcGVuX21lbnVfdHJpZ2dlcnMubGVuZ3RoO1xuXHRcdFx0XHR2YXIgdDtcblxuXHRcdFx0XHRpZiAoIGdldF9zY3JlZW5fc2l6ZSggJ2hhcy1mdWxsLW5hdicgKSApIHtcblx0XHRcdFx0XHRpZiAoIGFsbF9vcGVuX21lbnVfdHJpZ2dlcnNfY291bnQgPiAwICkge1xuXHRcdFx0XHRcdFx0Ly8gTWFrZSBzdXJlIG9ubHkgMSBtZW51IGl0ZW0gY2FuIGJlIG9wZW5lZCBhdCBhIHRpbWVcblx0XHRcdFx0XHRcdGZvciAoIHQgPSAwOyB0IDwgYWxsX29wZW5fbWVudV90cmlnZ2Vyc19jb3VudDsgdCA9IHQgKyAxICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBvcGVuIG1lbnUgaXMgdG9wLWxldmVsLCBpZiBzbywgY2xvc2UgaXRcblx0XHRcdFx0XHRcdFx0aWYgKCBwYXJlbnRfbWVudS5wYXJlbnROb2RlID09PSBtZW51ICkge1xuXHRcdFx0XHRcdFx0XHRcdG1lbnVfc3ViX2Nsb3NlKCBhbGxfb3Blbl9tZW51X3RyaWdnZXJzW3RdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gLy8gZm9yXG5cdFx0XHRcdFx0fSAvLyBpZlxuXHRcdFx0XHR9IC8vIGlmXG5cblx0XHRcdFx0aWYgKCAoIGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnQScgfHwgdGFyZ2V0LnRhZ05hbWUgPT09ICdBJyApICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdzdWJtZW51LWlzLW9wZW4nICkgKSB7XG5cdFx0XHRcdFx0Ly8gVGhlIG1lbnUgaXMgYWxyZWFkeSBvcGVuLCBzbyB0aGlzIHNob3VsZCBiZSBhIGNsb3NlIGFjdGlvblxuXHRcdFx0XHRcdG1lbnVfc3ViX2Nsb3NlKCB0YXJnZXQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZW51X3N1Yl9jbG9zZV9hbGwoKTtcblx0XHRcdFx0XHQvLyBUaGUgbWVudSBpcyBjbG9zZWQsIHNvIHRoaXMgY2xpY2sgc2hvdWxkIG9wZW4gaXRcblx0XHRcdFx0XHRtZW51X3N1Yl9vcGVuKCB0YXJnZXQgKTtcblxuXHRcdFx0XHRcdC8vIFJlc2V0IHRoZSBmb2N1c1xuXHRcdFx0XHRcdHN1Yl9tZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVswXS5mb2N1cygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTsgLy8gbGlzdGVuZXJfc3VibWVudV9jbGljaygpXG5cblx0XHQvLyBMaXN0ZW5lciBmb3Igc2FtZSBwYWdlIGxpbmsgKGhhc2gpIGNsaWNrXG5cdFx0ZnVuY3Rpb24gbGlzdGVuZXJfaGFzaF9jbGljaygpIHtcblxuXHRcdFx0Ly8gQ2xvc2UgdGhlIG1lbnVcblx0XHRcdG1lbnUuc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScgKTtcblx0XHRcdG1lbnVfdG9nZ2xlLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XG5cblx0XHRcdC8vIEJ1YmJsZSB0byB0aGUgZG9jdW1lbnRcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggJ21lbnUtaXMtb3BlbicgKTtcblx0XHR9O1xuXG5cdFx0Ly8gV2hlbiBcImhvdmVyXCIsIHRoaXMgaXMgaG93IGZvY3VzIHNob3VsZCBhY3Rcblx0XHRmdW5jdGlvbiBsaXN0ZW5lcl9zdWJtZW51X2ZvY3VzKCBlICkge1xuXG5cdFx0XHR2YXIgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcblx0XHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldDtcblx0XHRcdHZhciBwYXJlbnRfbWVudSA9IHRhcmdldC5wYXJlbnROb2RlO1xuXHRcdFx0dmFyIHN1Yl9tZW51ID0gcGFyZW50X21lbnUucXVlcnlTZWxlY3RvciggJy5zdWItbWVudScgKTtcblx0XHRcdHZhciBhbGxfb3Blbl9tZW51X3RyaWdnZXJzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCAnLmNoaWxkLWhhcy1mb2N1cyA+IGEuc3VibWVudS1pcy1vcGVuJyApO1xuXHRcdFx0dmFyIGFsbF9vcGVuX21lbnVfdHJpZ2dlcnNfY291bnQgPSBhbGxfb3Blbl9tZW51X3RyaWdnZXJzLmxlbmd0aDtcblx0XHRcdHZhciB0O1xuXG5cdFx0XHRpZiAoIGdldF9zY3JlZW5fc2l6ZSggJ2hhcy1mdWxsLW5hdicgKSApIHtcblx0XHRcdFx0aWYgKCBhbGxfb3Blbl9tZW51X3RyaWdnZXJzX2NvdW50ID4gMCApIHtcblx0XHRcdFx0XHQvLyBNYWtlIHN1cmUgb25seSAxIG1lbnUgaXRlbSBjYW4gYmUgb3BlbmVkIGF0IGEgdGltZVxuXHRcdFx0XHRcdGZvciAoIHQgPSAwOyB0IDwgYWxsX29wZW5fbWVudV90cmlnZ2Vyc19jb3VudDsgdCA9IHQgKyAxICkge1xuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIG9wZW4gbWVudSBpcyB0b3AtbGV2ZWwsIGlmIHNvLCBjbG9zZSBpdFxuXHRcdFx0XHRcdFx0aWYgKCBwYXJlbnRfbWVudS5wYXJlbnROb2RlID09PSBtZW51ICkge1xuXHRcdFx0XHRcdFx0XHRtZW51X3N1Yl9jbG9zZSggYWxsX29wZW5fbWVudV90cmlnZ2Vyc1t0XSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVudV9zdWJfb3BlbiggdGFyZ2V0ICk7XG5cdFx0fTtcblxuXHRcdC8vIExpc3RlbmVyIGZvciB0aGUgd2luZG93IHJlc2l6ZVxuXHRcdHZhciBsaXN0ZW5lcl93aW5kb3cgPSBkZWJvdW5jZSggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRpZiggZ2V0X3NjcmVlbl9zaXplKCAnaGFzLW9mZnNjcmVlbi1uYXYnICkgKSB7XG5cdFx0XHRcdG1lbnVfY3JlYXRlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZW51X2Rlc3Ryb3koKTtcblx0XHRcdH1cblx0XHR9LCAxMDAgKTsgLy8gbGlzdGVuZXJfd2luZG93KClcblxuXHRcdC8vIENsb3NlIHRoZSBtZW51IGlmIHlvdSBjbGljayBzb21ld2hlcmUgZWxzZVxuXHRcdGZ1bmN0aW9uIGxpc3RlbmVyX2Nsb3NlX29wZW5fbWVudXMoIGUgKSB7XG5cblx0XHRcdHZhciBvcGVuX21lbnVzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudS1pcy1vcGVuJyk7XG5cdFx0XHR2YXIgb3Blbl9tZW51c19jb3VudCA9IG9wZW5fbWVudXMubGVuZ3RoO1xuXHRcdFx0dmFyIG9wbjtcblxuXHRcdFx0Ly8gaWYgdGhlIGV2ZW50IGlzIGtleXVwIGFuZCBpdCB3YXMgdGhlIEVTQyBrZXlcblx0XHRcdGlmICggZS50eXBlID09PSAna2V5dXAnICYmIGUua2V5Q29kZSA9PSAyNyApIHtcblxuXHRcdFx0XHQvLyBXZSB3ZXJlIGdldHRpbmcgc29tZSBlcnJvcnMsIHNvIGxldCdzIGFkZCBpbiBhIGNoZWNrcG9pbnRcblx0XHRcdFx0aWYgKCBvcGVuX21lbnVzX2NvdW50ICkge1xuXG5cdFx0XHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgb3BlbiBtZW51cyBhbmQgY2xvc2UgdGhlbVxuXHRcdFx0XHRcdGZvciAoIG9wbiA9IDA7IG9wbiA8IG9wZW5fbWVudXMubGVuZ3RoOyBvcG4gPSBvcG4gKyAxICkge1xuXG5cdFx0XHRcdFx0XHRtZW51X3N1Yl9jbG9zZSggb3Blbl9tZW51c1tvcG5dICk7XG5cblx0XHRcdFx0XHR9IC8vIGZvclxuXG5cdFx0XHRcdFx0Ly8gUmV0dXJuIGZvY3VzIHRvIHRoZSBmaXJzdCBvcGVuIG1lbnVcblx0XHRcdFx0XHRpZiAoIHN1Yl9tZW51X2FjaW9uID09PSAnY2xpY2snICkge1xuXHRcdFx0XHRcdFx0b3Blbl9tZW51c1swXS5mb2N1cygpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IC8vIGlmXG5cblx0XHRcdC8vIElmIHRoZSBldmVudCB3YXMgYSBtb3VzZXVwXG5cdFx0XHR9IGVsc2UgaWYgKCBlLnR5cGUgPT09ICdtb3VzZXVwJyApIHtcblxuXHRcdFx0XHRpZiAoICEgbWVudS5jb250YWlucyggZS50YXJnZXQgKSAmJiBtZW51LnF1ZXJ5U2VsZWN0b3IoICcuc3VibWVudS1pcy1vcGVuJyApICkge1xuXHRcdFx0XHRcdC8vIFdlIHdlcmUgZ2V0dGluZyBzb21lIGVycm9yLCBzbyBsZXQncyBhZGQgaW4gYSBzZWNvbmQgY2hlY2twb2ludFxuXHRcdFx0XHRcdGlmICggb3Blbl9tZW51c19jb3VudCApIHtcblx0XHRcdFx0XHRcdGZvciggb3BuID0gMDsgb3BuIDwgb3Blbl9tZW51cy5sZW5ndGg7IG9wbiA9IG9wbiArIDEgKSB7XG5cdFx0XHRcdFx0XHRcdG1lbnVfc3ViX2Nsb3NlKCBvcGVuX21lbnVzW29wbl0gKTtcblx0XHRcdFx0XHRcdH0gLy8gZm9yXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IC8vIGlmXG5cdFx0XHR9XG5cdFx0fTsgLy8gbGlzdGVuZXJfY2xvc2Vfb3Blbl9tZW51cygpXG5cblx0XHRmdW5jdGlvbiBtZW51X3N1Yl9jbG9zZSggb3Blbl9pdGVtICkge1xuXHRcdFx0aWYgKCBvcGVuX2l0ZW0gJiYgb3Blbl9pdGVtLmNsYXNzTGlzdCApIHtcblx0XHRcdFx0b3Blbl9pdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1lbnUtaXMtb3BlbicpO1xuXHRcdFx0XHRvcGVuX2l0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjaGlsZC1oYXMtZm9jdXMnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBvcGVuX2l0ZW0gJiYgb3Blbl9pdGVtLnBhcmVudE5vZGUgJiYgb3Blbl9pdGVtLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvciggJy5zdWItbWVudScgKSApIHtcblx0XHRcdFx0b3Blbl9pdGVtLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvciggJy5zdWItbWVudScgKS5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xuXHRcdFx0fVxuXHRcdH07IC8vIG1lbnVfc3ViX2Nsb3NlKClcblxuXHRcdGZ1bmN0aW9uIG1lbnVfc3ViX2Nsb3NlX2FsbCgpIHtcblx0XHRcdHZhciBvcGVuX21lbnVzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCAnLnN1Ym1lbnUtaXMtb3BlbicgKTtcblx0XHRcdHZhciBvcGVuX21lbnVzX2NvdW50ID0gb3Blbl9tZW51cy5sZW5ndGg7XG5cdFx0XHR2YXIgb3BuO1xuXHRcdFx0Ly8gV2Ugd2VyZSBnZXR0aW5nIHNvbWUgZXJyb3JzLCBzbyBsZXQncyBhZGQgaW4gYSBjaGVja3BvaW50XG5cdFx0XHRpZiAoIG9wZW5fbWVudXNfY291bnQgKSB7XG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIG9wZW4gbWVudXMgYW5kIGNsb3NlIHRoZW1cblx0XHRcdFx0Zm9yICggb3BuID0gMDsgb3BuIDwgb3Blbl9tZW51cy5sZW5ndGg7IG9wbiA9IG9wbiArIDEgKSB7XG5cdFx0XHRcdFx0bWVudV9zdWJfY2xvc2UoIG9wZW5fbWVudXNbb3BuXSApO1xuXHRcdFx0XHR9IC8vIGZvclxuXHRcdFx0fSAvLyBpZlxuXHRcdH07IC8vIG1lbnVfc3ViX2Nsb3NlKClcblxuXHRcdGZ1bmN0aW9uIG1lbnVfc3ViX29wZW4oIGNsb3NlZF9pdGVtICkge1xuXHRcdFx0Y2xvc2VkX2l0ZW0uY2xhc3NMaXN0LmFkZCggJ3N1Ym1lbnUtaXMtb3BlbicgKTtcblx0XHRcdGNsb3NlZF9pdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCggJ2NoaWxkLWhhcy1mb2N1cycgKTtcblxuXHRcdFx0aWYgKCBjbG9zZWRfaXRlbS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoICcuc3ViLW1lbnUnICkgKSB7XG5cdFx0XHRcdGNsb3NlZF9pdGVtLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvciggJy5zdWItbWVudScgKS5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICdmYWxzZScgKTtcblx0XHRcdH1cblx0XHR9OyAvLyBtZW51X3N1Yl9vcGVuKClcblxuXHRcdC8vIE1ldGhvZCB0byBjcmVhdGUgdGhlIHNtYWxsIHNjcmVlbiBtZW51XG5cdFx0ZnVuY3Rpb24gbWVudV9jcmVhdGUoKSB7XG5cblx0XHRcdGlmICggISBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyggJ2hhcy1vZmZzY3JlZW4tbmF2JyApICkge1xuXG5cdFx0XHRcdGlmICggISBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyggJ21lbnUtaXMtb3BlbicgKSApIHtcblx0XHRcdFx0XHRtZW51LnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG5cdFx0XHRcdFx0bWVudV90b2dnbGUuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZW51LnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyApO1xuXHRcdFx0XHRcdG1lbnVfdG9nZ2xlLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgc3VibWVudXMgYW5kIGJpbmQgZXZlbnRzIHdoZW4gbmVlZGVkXG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbWVudV9pdGVtc193aXRoX2NoaWxkcmVuX2NvdW50OyBpKysgKSB7XG5cdFx0XHRcdFx0dmFyIHN2Z0VsZW1lbnRzID0gbWVudV9pdGVtc193aXRoX2NoaWxkcmVuW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoICdzdmcnICk7XG5cdFx0XHRcdFx0Zm9yICggdmFyIHEgPSAwOyBxIDwgc3ZnRWxlbWVudHMubGVuZ3RoOyBxID0gcSArIDEgKSB7XG5cdFx0XHRcdFx0XHRzdmdFbGVtZW50c1txXS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBsaXN0ZW5lcl9zdWJtZW51X2NsaWNrICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbltpXS5yZW1vdmVFdmVudExpc3RlbmVyKCAnZm9jdXNpbicsIGxpc3RlbmVyX3N1Ym1lbnVfZm9jdXMgKTtcblx0XHRcdFx0fSAvLyBmb3JcblxuXHRcdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIGxpbmtzIGZvciBoYXNoIGFuZCBiaW5kIGV2ZW50cyB3aGVuIG5lZWRlZFxuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IG1lbnVfaXRlbXNfbGlua3NfY291bnQ7IGkrKyApIHtcblx0XHRcdFx0XHRpZiAoIG1lbnVfaXRlbXNfbGlua3NbaV0uaGFzaCAmJiBtZW51X2l0ZW1zX2xpbmtzW2ldLnBhdGhuYW1lID09PSAnLycgKSB7XG5cdFx0XHRcdFx0XHRtZW51X2l0ZW1zX2xpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGxpc3RlbmVyX2hhc2hfY2xpY2sgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gLy8gZm9yXG5cblx0XHRcdFx0Ly8gQmluZCB0aGUgZXZlbnRcblx0XHRcdFx0bWVudV90b2dnbGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgbGlzdGVuZXJfbWVudSApO1xuXG5cdFx0XHRcdC8vIEFkZCB0aGUgYm9keSBjbGFzcyB0byBwcmV2ZW50IHRoaXMgZnJvbSBydW5uaW5nIGFnYWluXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCggJ2hhcy1vZmZzY3JlZW4tbmF2JyApO1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoYXMtZnVsbC1uYXYnICk7XG5cdFx0XHR9XG5cdFx0fTsgLy8gbWVudV9jcmVhdGUoKVxuXG5cdFx0Ly8gTWV0aG9kIHRvIGRlc3Ryb3kgdGhlIHNtYWxsIHNjcmVlbiBtZW51XG5cdFx0ZnVuY3Rpb24gbWVudV9kZXN0cm95KCkge1xuXG5cdFx0XHR2YXIgdG1wX29wZW5cblx0XHRcdHZhciB0bXBfb3Blbl9jb3VudFxuXHRcdFx0dmFyIHQ7XG5cblx0XHRcdGlmICggISBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyggJ2hhcy1mdWxsLW5hdicgKSApIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGFyaWEtaGlkZGVuLCBiZWNhdXNlIHdlIGRvbid0IG5lZWQgaXQuXG5cdFx0XHRcdG1lbnUucmVtb3ZlQXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nICk7XG5cblx0XHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGFsbCBzdWJtZW51cyBhbmQgYmluZCBldmVudHMgd2hlbiBuZWVkZWRcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW5fY291bnQ7IGkgPSBpICsgMSApIHtcblx0XHRcdFx0XHRpZiAoIHN1Yl9tZW51X2FjaW9uICE9PSAnY2xpY2snICkge1xuXHRcdFx0XHRcdFx0bWVudV9pdGVtc193aXRoX2NoaWxkcmVuW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIGxpc3RlbmVyX3N1Ym1lbnVfY2xpY2sgKTtcblx0XHRcdFx0XHRcdG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbltpXS5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXNpbicsIGxpc3RlbmVyX3N1Ym1lbnVfZm9jdXMgKTtcblx0XHRcdFx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndXNlcy1jbGljaycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHdlJ3JlIG5vdCB1c2luZyBjbGljaywgdGhlIG9wZW4gbWVudXMgbmVlZCB0byBiZSByZXNldFxuXHRcdFx0XHRpZiAoIHN1Yl9tZW51X2FjaW9uICE9PSAnY2xpY2snICkge1xuXHRcdFx0XHRcdHRtcF9vcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoaWxkLWhhcy1mb2N1cycpO1xuXHRcdFx0XHRcdHRtcF9vcGVuX2NvdW50ID0gdG1wX29wZW4ubGVuZ3RoO1xuXG5cdFx0XHRcdFx0Zm9yICggdCA9IDA7IHQgPCB0bXBfb3Blbl9jb3VudDsgdCA9IHQgKyAxICkge1xuXHRcdFx0XHRcdFx0dG1wX29wZW5bdF0uY2xhc3NMaXN0LnJlbW92ZSggJ2NoaWxkLWhhcy1mb2N1cycgKTtcblx0XHRcdFx0XHRcdHRtcF9vcGVuW3RdLnF1ZXJ5U2VsZWN0b3IoICcuc3VibWVudS1pcy1vcGVuJyApLmNsYXNzTGlzdC5yZW1vdmUoICdzdWJtZW51LWlzLW9wZW4nICk7XG5cdFx0XHRcdFx0XHR0bXBfb3Blblt0XS5xdWVyeVNlbGVjdG9yKCAnLnN1Yi1tZW51JyApLnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVW5iaW5kIHRoZSBldmVudFxuXHRcdFx0XHRtZW51X3RvZ2dsZS5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBsaXN0ZW5lcl9tZW51ICk7XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBib2R5IGNsYXNzIHRvIHByZXZlbnQgdGhpcyBmcm9tIHJ1bm5pbmcgYWdhaW5cblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaGFzLWZ1bGwtbmF2JyApO1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoYXMtb2Zmc2NyZWVuLW5hdicgKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gQ2hlY2sgaW5pdCBtZW51IHN0YXRlXG5cdFx0aWYgKCBnZXRfc2NyZWVuX3NpemUoICdoYXMtb2Zmc2NyZWVuLW5hdicgKSApIHtcblx0XHRcdG1lbnVfY3JlYXRlKCk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYXJpYS1jb250cm9scyBpc24ndCBzZXQsIHNldCBpdFxuXHRcdGlmICggISBhcmlhX2NvbnRyb2xzICkge1xuXHRcdFx0bWVudV90b2dnbGUuc2V0QXR0cmlidXRlKCAnYXJpYS1jb250cm9scycsIG1lbnVfaWQgKTtcblx0XHR9XG5cblx0XHRpZiAoIGN1cnJlbnRfbWVudV9pdGVtICkge1xuXHRcdFx0Y3VycmVudF9tZW51X2l0ZW0ucXVlcnlTZWxlY3RvciggJ2EnICkuc2V0QXR0cmlidXRlKCAnYXJpYS1jdXJyZW50JywgJ3BhZ2UnICk7XG5cdFx0fVxuXG5cdFx0Lypcblx0XHRcdEV2ZW50c1xuXHRcdCovXG5cblx0XHQvLyBEZWJvdW5jZWQgcmVzaXplIGV2ZW50IHRvIGNyZWF0ZSBhbmQgZGVzdHJveSB0aGUgc21hbGwgc2NyZWVuIG1lbnUgb3B0aW9uc1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgbGlzdGVuZXJfd2luZG93ICk7XG5cblx0XHQvLyBDbG9zZSB0aGUgc3VibWVudXMgYnkgY2xpY2tpbmcgb2ZmIG9mIHRoZW0gb3IgaGl0dGluZyBFU0Ncblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIGxpc3RlbmVyX2Nsb3NlX29wZW5fbWVudXMgKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5dXAnLCBsaXN0ZW5lcl9jbG9zZV9vcGVuX21lbnVzICk7XG5cblx0XHQvKlxuXHRcdFx0SGlkaW5nIGFuZCBzaG93aW5nIHN1Ym1lbnVzIChjbGljaywgZm9jdXMsIGhvdmVyKVxuXHRcdCovXG5cblx0XHQvLyBMb29wIHRocm91Z2ggYWxsIGl0ZW1zIHdpdGggc3ViIG1lbnVzIGFuZCBiaW5kIGZvY3VzIHRvIHRoZW0gZm9yIHRhYmJpbmdcblx0XHRmb3IgKCBpID0gMDsgaSA8IG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbl9jb3VudDsgaSA9IGkgKyAxICkge1xuXG5cdFx0XHQvLyBMZXQgYSBzY3JlZW4gcmVhZGVyIGtub3cgdGhpcyBtZW51IGhhcyBhIHN1Ym1lbnUgYnkgaG9va2luZyBpbnRvIHRoZSBmaXJzdCBsaW5rXG5cdFx0XHRtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW5baV0ucXVlcnlTZWxlY3RvciggJ2EnICkuc2V0QXR0cmlidXRlKCAnYXJpYS1oYXNwb3B1cCcsICd0cnVlJyApO1xuXG5cdFx0XHQvLyBIaWRlIGFuZCBsYWJlbCBlYWNoIHN1YiBtZW51XG5cdFx0XHRtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW5baV0ucXVlcnlTZWxlY3RvciggJy5zdWItbWVudScgKS5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xuXHRcdFx0bWVudV9pdGVtc193aXRoX2NoaWxkcmVuW2ldLnF1ZXJ5U2VsZWN0b3IoICcuc3ViLW1lbnUnICkuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsICdTdWJtZW51JyApO1xuXG5cdFx0XHQvLyBJZiB0aGUgc2NyZWVuIGlzIHNtYWxsIG9yIHRoZSBhY3Rpb24gaXMgc2V0IHRvIGNsaWNrXG5cdFx0XHRpZiAoIGdldF9zY3JlZW5fc2l6ZSggJ2hhcy1vZmZzY3JlZW4tbmF2JyApIHx8IHN1Yl9tZW51X2FjaW9uID09PSAnY2xpY2snICkge1xuXHRcdFx0XHRtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW5baV0uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgbGlzdGVuZXJfc3VibWVudV9jbGljayApO1xuXG5cdFx0XHRcdHZhciBzdmdFbGVtZW50cyA9IG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbltpXS5xdWVyeVNlbGVjdG9yQWxsKCAnc3ZnJyApO1xuXG5cdFx0XHRcdGZvciAoIHZhciB6ID0gMDsgeiA8IHN2Z0VsZW1lbnRzLmxlbmd0aDsgeiA9IHogKyAxICkge1xuXG5cdFx0XHRcdFx0c3ZnRWxlbWVudHNbel0uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgbGlzdGVuZXJfc3VibWVudV9jbGljayApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtZW51LmNsYXNzTGlzdC5hZGQoIHN1Yl9tZW51X2FjaW9uID09PSAnY2xpY2snID8gJ3VzZXMtY2xpY2snIDogJ3VzZXMtaG92ZXInICk7XG5cdFx0XHR9IGVsc2UgaWYgKCBzdWJfbWVudV9hY2lvbiAhPT0gJ2NsaWNrJyApIHtcblx0XHRcdFx0aWYgKCBnZXRfc2NyZWVuX3NpemUoICdoYXMtZnVsbC1uYXYnICkgKSB7XG5cdFx0XHRcdFx0bWVudV9pdGVtc193aXRoX2NoaWxkcmVuW2ldLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW92ZXInLCBsaXN0ZW5lcl9zdWJtZW51X2ZvY3VzICk7XG5cdFx0XHRcdFx0bWVudV9pdGVtc193aXRoX2NoaWxkcmVuW2ldLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dmFyIG9wZW5fbWVudXMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoICcuc3VibWVudS1pcy1vcGVuJyApO1xuXHRcdFx0XHRcdFx0dmFyIG9wZW5fbWVudXNfY291bnQgPSBvcGVuX21lbnVzLmxlbmd0aDtcblx0XHRcdFx0XHRcdHZhciBvcG47XG5cblx0XHRcdFx0XHRcdC8vIFdlIHdlcmUgZ2V0dGluZyBzb21lIGVycm9ycywgc28gbGV0J3MgYWRkIGluIGEgY2hlY2twb2ludFxuXHRcdFx0XHRcdFx0aWYgKCBvcGVuX21lbnVzX2NvdW50ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIG9wZW4gbWVudXMgYW5kIGNsb3NlIHRoZW1cblx0XHRcdFx0XHRcdFx0Zm9yICggb3BuID0gMDsgb3BuIDwgb3Blbl9tZW51c19jb3VudDsgb3BuID0gb3BuICsgMSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdG1lbnVfc3ViX2Nsb3NlKCBvcGVuX21lbnVzW29wbl0gKTtcblxuXHRcdFx0XHRcdFx0XHR9IC8vIGZvclxuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdG1lbnVfaXRlbXNfd2l0aF9jaGlsZHJlbltpXS5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXNpbicsIGxpc3RlbmVyX3N1Ym1lbnVfZm9jdXMgKTtcblx0XHRcdFx0XHRtZW51X2l0ZW1zX3dpdGhfY2hpbGRyZW5baV0ucXVlcnlTZWxlY3RvckFsbCggJy5zdWItbWVudScgKS5mb3JFYWNoKCBzdWJtZW51ID0+IHtcblx0XHRcdFx0XHRcdHN1Ym1lbnUuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlb3ZlcicsIGV2ZW50ID0+IHtcblx0XHRcdFx0XHRcdFx0c3VibWVudS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoICdjaGlsZC1oYXMtZm9jdXMnICk7XG5cdFx0XHRcdFx0XHRcdHN1Ym1lbnUucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCAnc3VibWVudS1pcy1vcGVuJyApO1xuXHRcdFx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gLy8gaWZcblx0XHRcdH0gLy8gaWZcblx0XHR9IC8vIGZvclxuXG5cdFx0Ly8gRXhlY3V0ZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cblx0XHRpZiAoIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdGNhbGxiYWNrLmNhbGwoKTtcblx0XHR9XG5cdH07IC8vIGJ1aWxkX21lbnUoKVxuXG5cdC8qXG5cdFx0SGVscGVyIGZ1bmN0aW9uc1xuXHQqL1xuXG5cdC8vIEdldCBzY3JlZW4gc2l6ZSBmcm9tIGdldENvbXB1dGVkU3R5bGUgKHNvIHdlIGRvbid0IGhhdmUgdG8gZGVmaW5lIGVhY2ggYnJlYWtwb2ludCB0d2ljZSkgLS0gVmFsdWVzIGFyZSBzZXQgaW4gQ1NTIC0tXG5cdGZ1bmN0aW9uIGdldF9zY3JlZW5fc2l6ZSggc2l6ZVN0cmluZyApIHtcblx0XHR2YXIgc2l6ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBkb2N1bWVudC5ib2R5LCc6YmVmb3JlJyApLmdldFByb3BlcnR5VmFsdWUoICdjb250ZW50JyApO1xuXG5cdFx0aWYgKCBzaXplICYmIHNpemUuaW5kZXhPZiggc2l6ZVN0cmluZyApICE9PSAtMSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fTtcblxuXHQvLyBEZWJvdW5jZVxuXHRmdW5jdGlvbiBkZWJvdW5jZSggZnVuYywgd2FpdCwgaW1tZWRpYXRlICkge1xuXHRcdHZhciB0aW1lb3V0O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXG5cdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRcdGlmICggISBpbW1lZGlhdGUgKSBmdW5jLmFwcGx5KCBjb250ZXh0LCBhcmdzICk7XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblxuXHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dCggbGF0ZXIsIHdhaXQgKTtcblx0XHRcdGlmICggY2FsbE5vdyApIGZ1bmMuYXBwbHkoIGNvbnRleHQsIGFyZ3MgKTtcblx0XHR9O1xuXHR9O1xuXG59ICkoKTtcbiIsIi8qIVxuICogY3NzLXZhcnMtcG9ueWZpbGxcbiAqIHYyLjQuN1xuICogaHR0cHM6Ly9qaGlsZGVuYmlkZGxlLmdpdGh1Yi5pby9jc3MtdmFycy1wb255ZmlsbC9cbiAqIChjKSAyMDE4LTIwMjEgSm9obiBIaWxkZW5iaWRkbGUgPGh0dHA6Ly9oaWxkZW5iaWRkbGUuY29tPlxuICogTUlUIGxpY2Vuc2VcbiAqL1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbi8qIVxuICogZ2V0LWNzcy1kYXRhXG4gKiB2Mi4wLjJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qaGlsZGVuYmlkZGxlL2dldC1jc3MtZGF0YVxuICogKGMpIDIwMTgtMjAyMSBKb2huIEhpbGRlbmJpZGRsZSA8aHR0cDovL2hpbGRlbmJpZGRsZS5jb20+XG4gKiBNSVQgbGljZW5zZVxuICovIGZ1bmN0aW9uIGdldFVybHModXJscykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICAgIG1pbWVUeXBlOiBvcHRpb25zLm1pbWVUeXBlIHx8IG51bGwsXG4gICAgICAgIG9uQmVmb3JlU2VuZDogb3B0aW9ucy5vbkJlZm9yZVNlbmQgfHwgRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgICAgICBvblN1Y2Nlc3M6IG9wdGlvbnMub25TdWNjZXNzIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25FcnJvcjogb3B0aW9ucy5vbkVycm9yIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25Db21wbGV0ZTogb3B0aW9ucy5vbkNvbXBsZXRlIHx8IEZ1bmN0aW9uLnByb3RvdHlwZVxuICAgIH07XG4gICAgdmFyIHVybEFycmF5ID0gQXJyYXkuaXNBcnJheSh1cmxzKSA/IHVybHMgOiBbIHVybHMgXTtcbiAgICB2YXIgdXJsUXVldWUgPSBBcnJheS5hcHBseShudWxsLCBBcnJheSh1cmxBcnJheS5sZW5ndGgpKS5tYXAoKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSkpO1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRDc3ModGV4dCkge1xuICAgICAgICB2YXIgaXNTdHJpbmcgPSB0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIjtcbiAgICAgICAgdmFyIGlzSFRNTCA9IGlzU3RyaW5nICYmIHRleHQudHJpbSgpLmNoYXJBdCgwKSA9PT0gXCI8XCI7XG4gICAgICAgIHJldHVybiBpc1N0cmluZyAmJiAhaXNIVE1MO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkVycm9yKHhociwgdXJsSW5kZXgpIHtcbiAgICAgICAgc2V0dGluZ3Mub25FcnJvcih4aHIsIHVybEFycmF5W3VybEluZGV4XSwgdXJsSW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblN1Y2Nlc3MocmVzcG9uc2VUZXh0LCB1cmxJbmRleCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsID0gc2V0dGluZ3Mub25TdWNjZXNzKHJlc3BvbnNlVGV4dCwgdXJsQXJyYXlbdXJsSW5kZXhdLCB1cmxJbmRleCk7XG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHJldHVyblZhbCA9PT0gZmFsc2UgPyBcIlwiIDogcmV0dXJuVmFsIHx8IHJlc3BvbnNlVGV4dDtcbiAgICAgICAgdXJsUXVldWVbdXJsSW5kZXhdID0gcmVzcG9uc2VUZXh0O1xuICAgICAgICBpZiAodXJsUXVldWUuaW5kZXhPZihudWxsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNldHRpbmdzLm9uQ29tcGxldGUodXJsUXVldWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICB1cmxBcnJheS5mb3JFYWNoKChmdW5jdGlvbih1cmwsIGkpIHtcbiAgICAgICAgcGFyc2VyLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcbiAgICAgICAgcGFyc2VyLmhyZWYgPSBTdHJpbmcocGFyc2VyLmhyZWYpO1xuICAgICAgICB2YXIgaXNJRWx0ZTkgPSBCb29sZWFuKGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgICAgICB2YXIgaXNJRWx0ZTlDT1JTID0gaXNJRWx0ZTkgJiYgcGFyc2VyLmhvc3Quc3BsaXQoXCI6XCIpWzBdICE9PSBsb2NhdGlvbi5ob3N0LnNwbGl0KFwiOlwiKVswXTtcbiAgICAgICAgaWYgKGlzSUVsdGU5Q09SUykge1xuICAgICAgICAgICAgdmFyIGlzU2FtZVByb3RvY29sID0gcGFyc2VyLnByb3RvY29sID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgICAgICAgIGlmIChpc1NhbWVQcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIHZhciB4ZHIgPSBuZXcgWERvbWFpblJlcXVlc3Q7XG4gICAgICAgICAgICAgICAgeGRyLm9wZW4oXCJHRVRcIiwgdXJsKTtcbiAgICAgICAgICAgICAgICB4ZHIudGltZW91dCA9IDA7XG4gICAgICAgICAgICAgICAgeGRyLm9ucHJvZ3Jlc3MgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgeGRyLm9udGltZW91dCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICB4ZHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0geGRyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWRDc3ModGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyh0ZXh0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoeGRyLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGRyLm9uZXJyb3IgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcih4ZHIsIGkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHhkci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgfSksIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJJbnRlcm5ldCBFeHBsb3JlciA5IENyb3NzLU9yaWdpbiAoQ09SUykgcmVxdWVzdHMgbXVzdCB1c2UgdGhlIHNhbWUgcHJvdG9jb2wgKFwiLmNvbmNhdCh1cmwsIFwiKVwiKSk7XG4gICAgICAgICAgICAgICAgb25FcnJvcihudWxsLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwpO1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLm1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoc2V0dGluZ3MubWltZVR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0dGluZ3Mub25CZWZvcmVTZW5kKHhociwgdXJsLCBpKTtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDQwMCAmJiBpc1ZhbGlkQ3NzKHRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3ModGV4dCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cyA9PT0gMCAmJiBpc1ZhbGlkQ3NzKHRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3ModGV4dCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yKHhociwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH0pKTtcbn1cblxuLyoqXG4gKiBHZXRzIENTUyBkYXRhIGZyb20gPHN0eWxlPiBhbmQgPGxpbms+IG5vZGVzIChpbmNsdWRpbmcgQGltcG9ydHMpLCB0aGVuXG4gKiByZXR1cm5zIGRhdGEgaW4gb3JkZXIgcHJvY2Vzc2VkIGJ5IERPTS4gQWxsb3dzIHNwZWNpZnlpbmcgbm9kZXMgdG9cbiAqIGluY2x1ZGUvZXhjbHVkZSBhbmQgZmlsdGVyaW5nIENTUyBkYXRhIHVzaW5nIFJlZ0V4LlxuICpcbiAqIEBwcmVzZXJ2ZVxuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnNdIFRoZSBvcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnMucm9vdEVsZW1lbnQ9ZG9jdW1lbnRdIFJvb3QgZWxlbWVudCB0byB0cmF2ZXJzZSBmb3JcbiAqICAgICAgICAgICAgICAgICAgIDxsaW5rPiBhbmQgPHN0eWxlPiBub2Rlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgIFtvcHRpb25zLmluY2x1ZGVdIENTUyBzZWxlY3RvciBtYXRjaGluZyA8bGluaz4gYW5kIDxzdHlsZT5cbiAqICAgICAgICAgICAgICAgICAgIG5vZGVzIHRvIGluY2x1ZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSAgIFtvcHRpb25zLmV4Y2x1ZGVdIENTUyBzZWxlY3RvciBtYXRjaGluZyA8bGluaz4gYW5kIDxzdHlsZT5cbiAqICAgICAgICAgICAgICAgICAgIG5vZGVzIHRvIGV4Y2x1ZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zLmZpbHRlcl0gUmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gZmlsdGVyIG5vZGUgQ1NTXG4gKiAgICAgICAgICAgICAgICAgICBkYXRhLiBFYWNoIGJsb2NrIG9mIENTUyBkYXRhIGlzIHRlc3RlZCBhZ2FpbnN0IHRoZSBmaWx0ZXIsXG4gKiAgICAgICAgICAgICAgICAgICBhbmQgb25seSBtYXRjaGluZyBkYXRhIGlzIGluY2x1ZGVkLlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMuc2tpcERpc2FibGVkPXRydWVdIERldGVybWluZXMgaWYgZGlzYWJsZWRcbiAqICAgICAgICAgICAgICAgICAgIHN0eWxlc2hlZXRzIHdpbGwgYmUgc2tpcHBlZCB3aGlsZSBjb2xsZWN0aW5nIENTUyBkYXRhLlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMudXNlQ1NTT009ZmFsc2VdIERldGVybWluZXMgaWYgQ1NTIGRhdGEgd2lsbCBiZVxuICogICAgICAgICAgICAgICAgICAgY29sbGVjdGVkIGZyb20gYSBzdHlsZXNoZWV0J3MgcnVudGltZSB2YWx1ZXMgaW5zdGVhZCBvZiBpdHNcbiAqICAgICAgICAgICAgICAgICAgIHRleHQgY29udGVudC4gVGhpcyBpcyByZXF1aXJlZCB0byBnZXQgYWNjdXJhdGUgQ1NTIGRhdGFcbiAqICAgICAgICAgICAgICAgICAgIHdoZW4gYSBzdHlsZXNoZWV0IGhhcyBiZWVuIG1vZGlmaWVkIHVzaW5nIHRoZSBkZWxldGVSdWxlKClcbiAqICAgICAgICAgICAgICAgICAgIG9yIGluc2VydFJ1bGUoKSBtZXRob2RzIGJlY2F1c2UgdGhlc2UgbW9kaWZpY2F0aW9ucyB3aWxsXG4gKiAgICAgICAgICAgICAgICAgICBub3QgYmUgcmVmbGVjdGVkIGluIHRoZSBzdHlsZXNoZWV0J3MgdGV4dCBjb250ZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25CZWZvcmVTZW5kXSBDYWxsYmFjayBiZWZvcmUgWEhSIGlzIHNlbnQuIFBhc3Nlc1xuICogICAgICAgICAgICAgICAgICAgMSkgdGhlIFhIUiBvYmplY3QsIDIpIHNvdXJjZSBub2RlIHJlZmVyZW5jZSwgYW5kIDMpIHRoZVxuICogICAgICAgICAgICAgICAgICAgc291cmNlIFVSTCBhcyBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vblN1Y2Nlc3NdIENhbGxiYWNrIG9uIGVhY2ggQ1NTIG5vZGUgcmVhZC4gUGFzc2VzXG4gKiAgICAgICAgICAgICAgICAgICAxKSBDU1MgdGV4dCwgMikgc291cmNlIG5vZGUgcmVmZXJlbmNlLCBhbmQgMykgdGhlIHNvdXJjZVxuICogICAgICAgICAgICAgICAgICAgVVJMIGFzIGFyZ3VtZW50cy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uRXJyb3JdIENhbGxiYWNrIG9uIGVhY2ggZXJyb3IuIFBhc3NlcyAxKSB0aGUgWEhSXG4gKiAgICAgICAgICAgICAgICAgICBvYmplY3QgZm9yIGluc3BlY3Rpb24sIDIpIHNvdXJlIG5vZGUgcmVmZXJlbmNlLCBhbmQgMykgdGhlXG4gKiAgICAgICAgICAgICAgICAgICBzb3VyY2UgVVJMIHRoYXQgZmFpbGVkIChlaXRoZXIgYSA8bGluaz4gaHJlZiBvciBhbiBAaW1wb3J0KVxuICogICAgICAgICAgICAgICAgICAgYXMgYXJndW1lbnRzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbkNvbXBsZXRlXSBDYWxsYmFjayBhZnRlciBhbGwgbm9kZXMgaGF2ZSBiZWVuXG4gKiAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWQuIFBhc3NlcyAxKSBjb25jYXRlbmF0ZWQgQ1NTIHRleHQsIDIpIGFuIGFycmF5IG9mXG4gKiAgICAgICAgICAgICAgICAgICBDU1MgdGV4dCBpbiBET00gb3JkZXIsIGFuZCAzKSBhbiBhcnJheSBvZiBub2RlcyBpbiBET01cbiAqICAgICAgICAgICAgICAgICAgIG9yZGVyIGFzIGFyZ3VtZW50cy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgZ2V0Q3NzRGF0YSh7XG4gKiAgICAgcm9vdEVsZW1lbnQgOiBkb2N1bWVudCxcbiAqICAgICBpbmNsdWRlICAgICA6ICdzdHlsZSxsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nLFxuICogICAgIGV4Y2x1ZGUgICAgIDogJ1tocmVmPVwic2tpcC5jc3NcIl0nLFxuICogICAgIGZpbHRlciAgICAgIDogL3JlZC8sXG4gKiAgICAgc2tpcERpc2FibGVkOiB0cnVlLFxuICogICAgIHVzZUNTU09NICAgIDogZmFsc2UsXG4gKiAgICAgb25CZWZvcmVTZW5kKHhociwgbm9kZSwgdXJsKSB7XG4gKiAgICAgICAvLyAuLi5cbiAqICAgICB9XG4gKiAgICAgb25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHVybCkge1xuICogICAgICAgLy8gLi4uXG4gKiAgICAgfVxuICogICAgIG9uRXJyb3IoeGhyLCBub2RlLCB1cmwpIHtcbiAqICAgICAgIC8vIC4uLlxuICogICAgIH0sXG4gKiAgICAgb25Db21wbGV0ZShjc3NUZXh0LCBjc3NBcnJheSwgbm9kZUFycmF5KSB7XG4gKiAgICAgICAvLyAuLi5cbiAqICAgICB9XG4gKiAgIH0pO1xuICovIGZ1bmN0aW9uIGdldENzc0RhdGEob3B0aW9ucykge1xuICAgIHZhciByZWdleCA9IHtcbiAgICAgICAgY3NzQ29tbWVudHM6IC9cXC9cXCpbXFxzXFxTXSs/XFwqXFwvL2csXG4gICAgICAgIGNzc0ltcG9ydHM6IC8oPzpAaW1wb3J0XFxzKikoPzp1cmxcXChcXHMqKT8oPzpbJ1wiXSkoW14nXCJdKikoPzpbJ1wiXSkoPzpcXHMqXFwpKT8oPzpbXjtdKjspL2dcbiAgICB9O1xuICAgIHZhciBzZXR0aW5ncyA9IHtcbiAgICAgICAgcm9vdEVsZW1lbnQ6IG9wdGlvbnMucm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQsXG4gICAgICAgIGluY2x1ZGU6IG9wdGlvbnMuaW5jbHVkZSB8fCAnc3R5bGUsbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyxcbiAgICAgICAgZXhjbHVkZTogb3B0aW9ucy5leGNsdWRlIHx8IG51bGwsXG4gICAgICAgIGZpbHRlcjogb3B0aW9ucy5maWx0ZXIgfHwgbnVsbCxcbiAgICAgICAgc2tpcERpc2FibGVkOiBvcHRpb25zLnNraXBEaXNhYmxlZCAhPT0gZmFsc2UsXG4gICAgICAgIHVzZUNTU09NOiBvcHRpb25zLnVzZUNTU09NIHx8IGZhbHNlLFxuICAgICAgICBvbkJlZm9yZVNlbmQ6IG9wdGlvbnMub25CZWZvcmVTZW5kIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25TdWNjZXNzOiBvcHRpb25zLm9uU3VjY2VzcyB8fCBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgICAgIG9uRXJyb3I6IG9wdGlvbnMub25FcnJvciB8fCBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgICAgIG9uQ29tcGxldGU6IG9wdGlvbnMub25Db21wbGV0ZSB8fCBGdW5jdGlvbi5wcm90b3R5cGVcbiAgICB9O1xuICAgIHZhciBzb3VyY2VOb2RlcyA9IEFycmF5LmFwcGx5KG51bGwsIHNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MuaW5jbHVkZSkpLmZpbHRlcigoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICByZXR1cm4gIW1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZXR0aW5ncy5leGNsdWRlKTtcbiAgICB9KSk7XG4gICAgdmFyIGNzc0FycmF5ID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoc291cmNlTm9kZXMubGVuZ3RoKSkubWFwKChmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pKTtcbiAgICBmdW5jdGlvbiBoYW5kbGVDb21wbGV0ZSgpIHtcbiAgICAgICAgdmFyIGlzQ29tcGxldGUgPSBjc3NBcnJheS5pbmRleE9mKG51bGwpID09PSAtMTtcbiAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGNzc0FycmF5LnJlZHVjZSgoZnVuY3Rpb24oc2tpcEluZGljZXMsIHZhbHVlLCBpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNraXBJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBza2lwSW5kaWNlcztcbiAgICAgICAgICAgIH0pLCBbXSkucmV2ZXJzZSgpLmZvckVhY2goKGZ1bmN0aW9uKHNraXBJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbIHNvdXJjZU5vZGVzLCBjc3NBcnJheSBdLmZvckVhY2goKGZ1bmN0aW9uKGFycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyLnNwbGljZShza2lwSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gY3NzQXJyYXkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIHNldHRpbmdzLm9uQ29tcGxldGUoY3NzVGV4dCwgY3NzQXJyYXksIHNvdXJjZU5vZGVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWNjZXNzKGNzc1RleHQsIGNzc0luZGV4LCBub2RlLCBzb3VyY2VVcmwpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbCA9IHNldHRpbmdzLm9uU3VjY2Vzcyhjc3NUZXh0LCBub2RlLCBzb3VyY2VVcmwpO1xuICAgICAgICBjc3NUZXh0ID0gcmV0dXJuVmFsICE9PSB1bmRlZmluZWQgJiYgQm9vbGVhbihyZXR1cm5WYWwpID09PSBmYWxzZSA/IFwiXCIgOiByZXR1cm5WYWwgfHwgY3NzVGV4dDtcbiAgICAgICAgcmVzb2x2ZUltcG9ydHMoY3NzVGV4dCwgbm9kZSwgc291cmNlVXJsLCAoZnVuY3Rpb24ocmVzb2x2ZWRDc3NUZXh0LCBlcnJvckRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjc3NBcnJheVtjc3NJbmRleF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlcnJvckRhdGEuZm9yRWFjaCgoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0dGluZ3Mub25FcnJvcihkYXRhLnhociwgbm9kZSwgZGF0YS51cmwpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNldHRpbmdzLmZpbHRlciB8fCBzZXR0aW5ncy5maWx0ZXIudGVzdChyZXNvbHZlZENzc1RleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc0FycmF5W2Nzc0luZGV4XSA9IHJlc29sdmVkQ3NzVGV4dDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjc3NBcnJheVtjc3NJbmRleF0gPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlSW1wb3J0RGF0YShjc3NUZXh0LCBiYXNlVXJsKSB7XG4gICAgICAgIHZhciBpZ25vcmVSdWxlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG4gICAgICAgIHZhciBpbXBvcnREYXRhID0ge307XG4gICAgICAgIGltcG9ydERhdGEucnVsZXMgPSAoY3NzVGV4dC5yZXBsYWNlKHJlZ2V4LmNzc0NvbW1lbnRzLCBcIlwiKS5tYXRjaChyZWdleC5jc3NJbXBvcnRzKSB8fCBbXSkuZmlsdGVyKChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWdub3JlUnVsZXMuaW5kZXhPZihydWxlKSA9PT0gLTE7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaW1wb3J0RGF0YS51cmxzID0gaW1wb3J0RGF0YS5ydWxlcy5tYXAoKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBydWxlLnJlcGxhY2UocmVnZXguY3NzSW1wb3J0cywgXCIkMVwiKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpbXBvcnREYXRhLmFic29sdXRlVXJscyA9IGltcG9ydERhdGEudXJscy5tYXAoKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEZ1bGxVcmwkMSh1cmwsIGJhc2VVcmwpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGltcG9ydERhdGEuYWJzb2x1dGVSdWxlcyA9IGltcG9ydERhdGEucnVsZXMubWFwKChmdW5jdGlvbihydWxlLCBpKSB7XG4gICAgICAgICAgICB2YXIgb2xkVXJsID0gaW1wb3J0RGF0YS51cmxzW2ldO1xuICAgICAgICAgICAgdmFyIG5ld1VybCA9IGdldEZ1bGxVcmwkMShpbXBvcnREYXRhLmFic29sdXRlVXJsc1tpXSwgYmFzZVVybCk7XG4gICAgICAgICAgICByZXR1cm4gcnVsZS5yZXBsYWNlKG9sZFVybCwgbmV3VXJsKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gaW1wb3J0RGF0YTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZUltcG9ydHMoY3NzVGV4dCwgbm9kZSwgYmFzZVVybCwgY2FsbGJhY2tGbikge1xuICAgICAgICB2YXIgX19lcnJvckRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IFtdO1xuICAgICAgICB2YXIgX19lcnJvclJ1bGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiBbXTtcbiAgICAgICAgdmFyIGltcG9ydERhdGEgPSBwYXJzZUltcG9ydERhdGEoY3NzVGV4dCwgYmFzZVVybCwgX19lcnJvclJ1bGVzKTtcbiAgICAgICAgaWYgKGltcG9ydERhdGEucnVsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBnZXRVcmxzKGltcG9ydERhdGEuYWJzb2x1dGVVcmxzLCB7XG4gICAgICAgICAgICAgICAgb25CZWZvcmVTZW5kOiBmdW5jdGlvbiBvbkJlZm9yZVNlbmQoeGhyLCB1cmwsIHVybEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uQmVmb3JlU2VuZCh4aHIsIG5vZGUsIHVybCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2Vzcyhjc3NUZXh0LCB1cmwsIHVybEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWwgPSBzZXR0aW5ncy5vblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IHJldHVyblZhbCA9PT0gZmFsc2UgPyBcIlwiIDogcmV0dXJuVmFsIHx8IGNzc1RleHQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZUltcG9ydERhdGEgPSBwYXJzZUltcG9ydERhdGEoY3NzVGV4dCwgdXJsLCBfX2Vycm9yUnVsZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUltcG9ydERhdGEucnVsZXMuZm9yRWFjaCgoZnVuY3Rpb24ocnVsZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShydWxlLCByZXNwb25zZUltcG9ydERhdGEuYWJzb2x1dGVSdWxlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc1RleHQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKHhociwgdXJsLCB1cmxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBfX2Vycm9yRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhocjogeGhyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIF9fZXJyb3JSdWxlcy5wdXNoKGltcG9ydERhdGEucnVsZXNbdXJsSW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUltcG9ydHMoY3NzVGV4dCwgbm9kZSwgYmFzZVVybCwgY2FsbGJhY2tGbiwgX19lcnJvckRhdGEsIF9fZXJyb3JSdWxlcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKHJlc3BvbnNlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VBcnJheS5mb3JFYWNoKChmdW5jdGlvbihpbXBvcnRUZXh0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKGltcG9ydERhdGEucnVsZXNbaV0sIGltcG9ydFRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVJbXBvcnRzKGNzc1RleHQsIG5vZGUsIGJhc2VVcmwsIGNhbGxiYWNrRm4sIF9fZXJyb3JEYXRhLCBfX2Vycm9yUnVsZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2tGbihjc3NUZXh0LCBfX2Vycm9yRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNvdXJjZU5vZGVzLmxlbmd0aCkge1xuICAgICAgICBzb3VyY2VOb2Rlcy5mb3JFYWNoKChmdW5jdGlvbihub2RlLCBpKSB7XG4gICAgICAgICAgICB2YXIgbGlua0hyZWYgPSBub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICB2YXIgbGlua1JlbCA9IG5vZGUuZ2V0QXR0cmlidXRlKFwicmVsXCIpO1xuICAgICAgICAgICAgdmFyIGlzTGluayA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsaW5rXCIgJiYgbGlua0hyZWYgJiYgbGlua1JlbCAmJiBsaW5rUmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcInN0eWxlc2hlZXRcIikgIT09IC0xO1xuICAgICAgICAgICAgdmFyIGlzU2tpcCA9IHNldHRpbmdzLnNraXBEaXNhYmxlZCA9PT0gZmFsc2UgPyBmYWxzZSA6IG5vZGUuZGlzYWJsZWQ7XG4gICAgICAgICAgICB2YXIgaXNTdHlsZSA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdHlsZVwiO1xuICAgICAgICAgICAgaWYgKGlzTGluayAmJiAhaXNTa2lwKSB7XG4gICAgICAgICAgICAgICAgZ2V0VXJscyhsaW5rSHJlZiwge1xuICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZTogXCJ0ZXh0L2Nzc1wiLFxuICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZVNlbmQ6IGZ1bmN0aW9uIG9uQmVmb3JlU2VuZCh4aHIsIHVybCwgdXJsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uQmVmb3JlU2VuZCh4aHIsIG5vZGUsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKGNzc1RleHQsIHVybCwgdXJsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2VVcmwgPSBnZXRGdWxsVXJsJDEobGlua0hyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VjY2Vzcyhjc3NUZXh0LCBpLCBub2RlLCBzb3VyY2VVcmwpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKHhociwgdXJsLCB1cmxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzQXJyYXlbaV0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub25FcnJvcih4aHIsIG5vZGUsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzU3R5bGUgJiYgIWlzU2tpcCkge1xuICAgICAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gbm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudXNlQ1NTT00pIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IEFycmF5LmFwcGx5KG51bGwsIG5vZGUuc2hlZXQuY3NzUnVsZXMpLm1hcCgoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGUuY3NzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSkpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Y2Nlc3MoY3NzVGV4dCwgaSwgbm9kZSwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNzc0FycmF5W2ldID0gXCJcIjtcbiAgICAgICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dGluZ3Mub25Db21wbGV0ZShcIlwiLCBbXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRGdWxsVXJsJDEodXJsLCBiYXNlKSB7XG4gICAgdmFyIGQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIik7XG4gICAgdmFyIGIgPSBkLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpO1xuICAgIHZhciBhID0gZC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkLmhlYWQuYXBwZW5kQ2hpbGQoYik7XG4gICAgZC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgIGIuaHJlZiA9IGJhc2UgfHwgZG9jdW1lbnQuYmFzZVVSSSB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIikgfHwge30pLmhyZWYgfHwgbG9jYXRpb24uaHJlZjtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgcmV0dXJuIGEuaHJlZjtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKGVsbSwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGVsbS5tYXRjaGVzIHx8IGVsbS5tYXRjaGVzU2VsZWN0b3IgfHwgZWxtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbG0ubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsbS5tc01hdGNoZXNTZWxlY3RvciB8fCBlbG0ub01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbWF0Y2hlcy5jYWxsKGVsbSwgc2VsZWN0b3IpO1xufVxuXG52YXIgYmFsYW5jZWRNYXRjaCA9IGJhbGFuY2VkO1xuXG5mdW5jdGlvbiBiYWxhbmNlZChhLCBiLCBzdHIpIHtcbiAgICBpZiAoYSBpbnN0YW5jZW9mIFJlZ0V4cCkgYSA9IG1heWJlTWF0Y2goYSwgc3RyKTtcbiAgICBpZiAoYiBpbnN0YW5jZW9mIFJlZ0V4cCkgYiA9IG1heWJlTWF0Y2goYiwgc3RyKTtcbiAgICB2YXIgciA9IHJhbmdlKGEsIGIsIHN0cik7XG4gICAgcmV0dXJuIHIgJiYge1xuICAgICAgICBzdGFydDogclswXSxcbiAgICAgICAgZW5kOiByWzFdLFxuICAgICAgICBwcmU6IHN0ci5zbGljZSgwLCByWzBdKSxcbiAgICAgICAgYm9keTogc3RyLnNsaWNlKHJbMF0gKyBhLmxlbmd0aCwgclsxXSksXG4gICAgICAgIHBvc3Q6IHN0ci5zbGljZShyWzFdICsgYi5sZW5ndGgpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWF5YmVNYXRjaChyZWcsIHN0cikge1xuICAgIHZhciBtID0gc3RyLm1hdGNoKHJlZyk7XG4gICAgcmV0dXJuIG0gPyBtWzBdIDogbnVsbDtcbn1cblxuYmFsYW5jZWQucmFuZ2UgPSByYW5nZTtcblxuZnVuY3Rpb24gcmFuZ2UoYSwgYiwgc3RyKSB7XG4gICAgdmFyIGJlZ3MsIGJlZywgbGVmdCwgcmlnaHQsIHJlc3VsdDtcbiAgICB2YXIgYWkgPSBzdHIuaW5kZXhPZihhKTtcbiAgICB2YXIgYmkgPSBzdHIuaW5kZXhPZihiLCBhaSArIDEpO1xuICAgIHZhciBpID0gYWk7XG4gICAgaWYgKGFpID49IDAgJiYgYmkgPiAwKSB7XG4gICAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgICAgICByZXR1cm4gWyBhaSwgYmkgXTtcbiAgICAgICAgfVxuICAgICAgICBiZWdzID0gW107XG4gICAgICAgIGxlZnQgPSBzdHIubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaSA+PSAwICYmICFyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChpID09IGFpKSB7XG4gICAgICAgICAgICAgICAgYmVncy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIGFpID0gc3RyLmluZGV4T2YoYSwgaSArIDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChiZWdzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gWyBiZWdzLnBvcCgpLCBiaSBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiZWcgPSBiZWdzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGlmIChiZWcgPCBsZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBiZWc7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gYmk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJpID0gc3RyLmluZGV4T2YoYiwgaSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IGFpIDwgYmkgJiYgYWkgPj0gMCA/IGFpIDogYmk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBbIGxlZnQsIHJpZ2h0IF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcGFyc2VDc3MoY3NzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgcHJlc2VydmVTdGF0aWM6IHRydWUsXG4gICAgICAgIHJlbW92ZUNvbW1lbnRzOiBmYWxzZVxuICAgIH07XG4gICAgdmFyIHNldHRpbmdzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB2YXIgZXJyb3JzID0gW107XG4gICAgZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNTUyBwYXJzZSBlcnJvcjogXCIuY29uY2F0KG1zZykpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXRjaChyZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMoY3NzKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGNzcyA9IGNzcy5zbGljZShtWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICByZXR1cm4gbWF0Y2goL157XFxzKi8pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoKC9efS8pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3aGl0ZXNwYWNlKCkge1xuICAgICAgICBtYXRjaCgvXlxccyovKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tbWVudCgpIHtcbiAgICAgICAgd2hpdGVzcGFjZSgpO1xuICAgICAgICBpZiAoY3NzWzBdICE9PSBcIi9cIiB8fCBjc3NbMV0gIT09IFwiKlwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSAyO1xuICAgICAgICB3aGlsZSAoY3NzW2ldICYmIChjc3NbaV0gIT09IFwiKlwiIHx8IGNzc1tpICsgMV0gIT09IFwiL1wiKSkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY3NzW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJlbmQgb2YgY29tbWVudCBpcyBtaXNzaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdHIgPSBjc3Muc2xpY2UoMiwgaSk7XG4gICAgICAgIGNzcyA9IGNzcy5zbGljZShpICsgMik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBcImNvbW1lbnRcIixcbiAgICAgICAgICAgIGNvbW1lbnQ6IHN0clxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb21tZW50cygpIHtcbiAgICAgICAgdmFyIGNtbnRzID0gW107XG4gICAgICAgIHZhciBjO1xuICAgICAgICB3aGlsZSAoYyA9IGNvbW1lbnQoKSkge1xuICAgICAgICAgICAgY21udHMucHVzaChjKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0dGluZ3MucmVtb3ZlQ29tbWVudHMgPyBbXSA6IGNtbnRzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZWxlY3RvcigpIHtcbiAgICAgICAgd2hpdGVzcGFjZSgpO1xuICAgICAgICB3aGlsZSAoY3NzWzBdID09PSBcIn1cIikge1xuICAgICAgICAgICAgZXJyb3IoXCJleHRyYSBjbG9zaW5nIGJyYWNrZXRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXigoXCIoPzpcXFxcXCJ8W15cIl0pKlwifCcoPzpcXFxcJ3xbXiddKSonfFtee10pKykvKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIHZhciBfc2VsZWN0b3IgPSBtWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3Rvckl0ZW1zO1xuICAgICAgICAgICAgdmFyIGhhc0NvbW1lbnQgPSAvXFwvXFwqLy50ZXN0KF9zZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAoaGFzQ29tbWVudCkge1xuICAgICAgICAgICAgICAgIF9zZWxlY3RvciA9IF9zZWxlY3Rvci5yZXBsYWNlKC9cXC9cXCooW14qXXxbXFxyXFxuXXwoXFwqKyhbXiovXXxbXFxyXFxuXSkpKSpcXCpcXC8rL2csIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhc0NvbW1hSW5RdW90ZXMgPSAvW1wiJ11cXHcqLFxcdypbXCInXS8udGVzdChfc2VsZWN0b3IpO1xuICAgICAgICAgICAgaWYgKGhhc0NvbW1hSW5RdW90ZXMpIHtcbiAgICAgICAgICAgICAgICBfc2VsZWN0b3IgPSBfc2VsZWN0b3IucmVwbGFjZSgvXCIoPzpcXFxcXCJ8W15cIl0pKlwifCcoPzpcXFxcJ3xbXiddKSonL2csIChmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnJlcGxhY2UoLywvZywgXCLigIxcIik7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhc011bHRpcGxlU2VsZWN0b3JzID0gLywvLnRlc3QoX3NlbGVjdG9yKTtcbiAgICAgICAgICAgIGlmIChoYXNNdWx0aXBsZVNlbGVjdG9ycykge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9ySXRlbXMgPSBfc2VsZWN0b3Iuc3BsaXQoL1xccyooPyFbXihdKlxcKSksXFxzKi8pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rvckl0ZW1zID0gWyBfc2VsZWN0b3IgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNDb21tYUluUXVvdGVzKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JJdGVtcyA9IHNlbGVjdG9ySXRlbXMubWFwKChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoL1xcdTIwMEMvZywgXCIsXCIpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3Rvckl0ZW1zO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlY2xhcmF0aW9uKCkge1xuICAgICAgICBpZiAoY3NzWzBdID09PSBcIkBcIikge1xuICAgICAgICAgICAgcmV0dXJuIGF0X3J1bGUoKTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaCgvXihbO1xcc10qKSsvKTtcbiAgICAgICAgdmFyIGNvbW1lbnRfcmVnZXhwID0gL1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2c7XG4gICAgICAgIHZhciBwcm9wID0gbWF0Y2goL14oXFwqP1stIy8qXFxcXFxcdy5dKyhcXFtbMC05YS16Xy1dK1xcXSk/KVxccyovKTtcbiAgICAgICAgaWYgKCFwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHJvcCA9IHByb3BbMF0udHJpbSgpO1xuICAgICAgICBpZiAoIW1hdGNoKC9eOlxccyovKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwicHJvcGVydHkgbWlzc2luZyAnOidcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbCA9IG1hdGNoKC9eKCg/OlxcL1xcKi4qP1xcKlxcL3wnKD86XFxcXCd8LikqPyd8XCIoPzpcXFxcXCJ8LikqP1wifFxcKChcXHMqJyg/OlxcXFwnfC4pKj8nfFwiKD86XFxcXFwifC4pKj9cInxbXildKj8pXFxzKlxcKXxbXn07XSkrKS8pO1xuICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgICAgdHlwZTogXCJkZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IHByb3AucmVwbGFjZShjb21tZW50X3JlZ2V4cCwgXCJcIiksXG4gICAgICAgICAgICB2YWx1ZTogdmFsID8gdmFsWzBdLnJlcGxhY2UoY29tbWVudF9yZWdleHAsIFwiXCIpLnRyaW0oKSA6IFwiXCJcbiAgICAgICAgfTtcbiAgICAgICAgbWF0Y2goL15bO1xcc10qLyk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlY2xhcmF0aW9ucygpIHtcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIm1pc3NpbmcgJ3snXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkO1xuICAgICAgICB2YXIgZGVjbHMgPSBjb21tZW50cygpO1xuICAgICAgICB3aGlsZSAoZCA9IGRlY2xhcmF0aW9uKCkpIHtcbiAgICAgICAgICAgIGRlY2xzLnB1c2goZCk7XG4gICAgICAgICAgICBkZWNscyA9IGRlY2xzLmNvbmNhdChjb21tZW50cygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIm1pc3NpbmcgJ30nXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWNscztcbiAgICB9XG4gICAgZnVuY3Rpb24ga2V5ZnJhbWUoKSB7XG4gICAgICAgIHdoaXRlc3BhY2UoKTtcbiAgICAgICAgdmFyIHZhbHMgPSBbXTtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIHdoaWxlIChtID0gbWF0Y2goL14oKFxcZCtcXC5cXGQrfFxcLlxcZCt8XFxkKyklP3xbYS16XSspXFxzKi8pKSB7XG4gICAgICAgICAgICB2YWxzLnB1c2gobVsxXSk7XG4gICAgICAgICAgICBtYXRjaCgvXixcXHMqLyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwia2V5ZnJhbWVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbHMsXG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9rZXlmcmFtZXMoKSB7XG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AKFstXFx3XSspP2tleWZyYW1lc1xccyovKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZlbmRvciA9IG1bMV07XG4gICAgICAgIG0gPSBtYXRjaCgvXihbLVxcd10rKVxccyovKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAa2V5ZnJhbWVzIG1pc3NpbmcgbmFtZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZSA9IG1bMV07XG4gICAgICAgIGlmICghb3BlbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAa2V5ZnJhbWVzIG1pc3NpbmcgJ3snXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmcmFtZTtcbiAgICAgICAgdmFyIGZyYW1lcyA9IGNvbW1lbnRzKCk7XG4gICAgICAgIHdoaWxlIChmcmFtZSA9IGtleWZyYW1lKCkpIHtcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgICAgICAgICAgIGZyYW1lcyA9IGZyYW1lcy5jb25jYXQoY29tbWVudHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAa2V5ZnJhbWVzIG1pc3NpbmcgJ30nXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBcImtleWZyYW1lc1wiLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHZlbmRvcjogdmVuZG9yLFxuICAgICAgICAgICAga2V5ZnJhbWVzOiBmcmFtZXNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfcGFnZSgpIHtcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkBwYWdlICovKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIHZhciBzZWwgPSBzZWxlY3RvcigpIHx8IFtdO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBhZ2VcIixcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnM6IHNlbCxcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucygpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X3BhZ2VfbWFyZ2luX2JveCgpIHtcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvQCh0b3B8Ym90dG9tfGxlZnR8cmlnaHQpLShsZWZ0fGNlbnRlcnxyaWdodHx0b3B8bWlkZGxlfGJvdHRvbSktPyhjb3JuZXIpP1xccyovKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIi5jb25jYXQobVsxXSwgXCItXCIpLmNvbmNhdChtWzJdKSArIChtWzNdID8gXCItXCIuY29uY2F0KG1bM10pIDogXCJcIik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwicGFnZS1tYXJnaW4tYm94XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucygpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X2ZvbnRmYWNlKCkge1xuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eQGZvbnQtZmFjZVxccyovKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJmb250LWZhY2VcIixcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucygpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X3N1cHBvcnRzKCkge1xuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eQHN1cHBvcnRzICooW157XSspLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwic3VwcG9ydHNcIixcbiAgICAgICAgICAgICAgICBzdXBwb3J0czogbVsxXS50cmltKCksXG4gICAgICAgICAgICAgICAgcnVsZXM6IHJ1bGVzKClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfaG9zdCgpIHtcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkBob3N0XFxzKi8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImhvc3RcIixcbiAgICAgICAgICAgICAgICBydWxlczogcnVsZXMoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9tZWRpYSgpIHtcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkBtZWRpYShbXntdKykqLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibWVkaWFcIixcbiAgICAgICAgICAgICAgICBtZWRpYTogKG1bMV0gfHwgXCJcIikudHJpbSgpLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBydWxlcygpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X2N1c3RvbV9tKCkge1xuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eQGN1c3RvbS1tZWRpYVxccysoLS1bXlxcc10rKVxccyooW157O10rKTsvKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJjdXN0b20tbWVkaWFcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBtWzFdLnRyaW0oKSxcbiAgICAgICAgICAgICAgICBtZWRpYTogbVsyXS50cmltKClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfZG9jdW1lbnQoKSB7XG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AKFstXFx3XSspP2RvY3VtZW50ICooW157XSspLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9jdW1lbnRcIixcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogbVsyXS50cmltKCksXG4gICAgICAgICAgICAgICAgdmVuZG9yOiBtWzFdID8gbVsxXS50cmltKCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBydWxlcygpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X3goKSB7XG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AKGltcG9ydHxjaGFyc2V0fG5hbWVzcGFjZSlcXHMqKFteO10rKTsvKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogbVsxXSxcbiAgICAgICAgICAgICAgICBuYW1lOiBtWzJdLnRyaW0oKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9ydWxlKCkge1xuICAgICAgICB3aGl0ZXNwYWNlKCk7XG4gICAgICAgIGlmIChjc3NbMF0gPT09IFwiQFwiKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gYXRfeCgpIHx8IGF0X2ZvbnRmYWNlKCkgfHwgYXRfbWVkaWEoKSB8fCBhdF9rZXlmcmFtZXMoKSB8fCBhdF9zdXBwb3J0cygpIHx8IGF0X2RvY3VtZW50KCkgfHwgYXRfY3VzdG9tX20oKSB8fCBhdF9ob3N0KCkgfHwgYXRfcGFnZSgpIHx8IGF0X3BhZ2VfbWFyZ2luX2JveCgpO1xuICAgICAgICAgICAgaWYgKHJldCAmJiAhc2V0dGluZ3MucHJlc2VydmVTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzVmFyRnVuYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChyZXQuZGVjbGFyYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1ZhckZ1bmMgPSByZXQuZGVjbGFyYXRpb25zLnNvbWUoKGZ1bmN0aW9uKGRlY2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvdmFyXFwoLy50ZXN0KGRlY2wudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IHJldC5rZXlmcmFtZXMgfHwgcmV0LnJ1bGVzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBoYXNWYXJGdW5jID0gYXJyLnNvbWUoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChvYmouZGVjbGFyYXRpb25zIHx8IFtdKS5zb21lKChmdW5jdGlvbihkZWNsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC92YXJcXCgvLnRlc3QoZGVjbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc1ZhckZ1bmMgPyByZXQgOiB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcnVsZSgpIHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5wcmVzZXJ2ZVN0YXRpYykge1xuICAgICAgICAgICAgdmFyIGJhbGFuY2VkTWF0Y2gkMSA9IGJhbGFuY2VkTWF0Y2goXCJ7XCIsIFwifVwiLCBjc3MpO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2VkTWF0Y2gkMSkge1xuICAgICAgICAgICAgICAgIHZhciBoYXNWYXJEZWNsID0gLzooPzpyb290fGhvc3QpKD8hWy46IyhdKS8udGVzdChiYWxhbmNlZE1hdGNoJDEucHJlKSAmJiAvLS1cXFMqXFxzKjovLnRlc3QoYmFsYW5jZWRNYXRjaCQxLmJvZHkpO1xuICAgICAgICAgICAgICAgIHZhciBoYXNWYXJGdW5jID0gL3ZhclxcKC8udGVzdChiYWxhbmNlZE1hdGNoJDEuYm9keSk7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNWYXJEZWNsICYmICFoYXNWYXJGdW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzcyA9IGNzcy5zbGljZShiYWxhbmNlZE1hdGNoJDEuZW5kICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbCA9IHNlbGVjdG9yKCkgfHwgW107XG4gICAgICAgIHZhciBkZWNscyA9IHNldHRpbmdzLnByZXNlcnZlU3RhdGljID8gZGVjbGFyYXRpb25zKCkgOiBkZWNsYXJhdGlvbnMoKS5maWx0ZXIoKGZ1bmN0aW9uKGRlY2wpIHtcbiAgICAgICAgICAgIHZhciBoYXNWYXJEZWNsID0gc2VsLnNvbWUoKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLzooPzpyb290fGhvc3QpKD8hWy46IyhdKS8udGVzdChzKTtcbiAgICAgICAgICAgIH0pKSAmJiAvXi0tXFxTLy50ZXN0KGRlY2wucHJvcGVydHkpO1xuICAgICAgICAgICAgdmFyIGhhc1ZhckZ1bmMgPSAvdmFyXFwoLy50ZXN0KGRlY2wudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGhhc1ZhckRlY2wgfHwgaGFzVmFyRnVuYztcbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAoIXNlbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVycm9yKFwic2VsZWN0b3IgbWlzc2luZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogXCJydWxlXCIsXG4gICAgICAgICAgICBzZWxlY3RvcnM6IHNlbCxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbHNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcnVsZXMoY29yZSkge1xuICAgICAgICBpZiAoIWNvcmUgJiYgIW9wZW4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwibWlzc2luZyAneydcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vZGU7XG4gICAgICAgIHZhciBydWxlcyA9IGNvbW1lbnRzKCk7XG4gICAgICAgIHdoaWxlIChjc3MubGVuZ3RoICYmIChjb3JlIHx8IGNzc1swXSAhPT0gXCJ9XCIpICYmIChub2RlID0gYXRfcnVsZSgpIHx8IHJ1bGUoKSkpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBydWxlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcnVsZXMgPSBydWxlcy5jb25jYXQoY29tbWVudHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb3JlICYmICFjbG9zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJtaXNzaW5nICd9J1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnVsZXM7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBzdHlsZXNoZWV0OiB7XG4gICAgICAgICAgICBydWxlczogcnVsZXModHJ1ZSksXG4gICAgICAgICAgICBlcnJvcnM6IGVycm9yc1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VWYXJzKGNzc0RhdGEpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBwYXJzZUhvc3Q6IGZhbHNlLFxuICAgICAgICBzdG9yZToge30sXG4gICAgICAgIG9uV2FybmluZzogZnVuY3Rpb24gb25XYXJuaW5nKCkge31cbiAgICB9O1xuICAgIHZhciBzZXR0aW5ncyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdmFyIHJlVmFyRGVjbFNlbGVjdG9ycyA9IG5ldyBSZWdFeHAoXCI6XCIuY29uY2F0KHNldHRpbmdzLnBhcnNlSG9zdCA/IFwiaG9zdFwiIDogXCJyb290XCIsIFwiJFwiKSk7XG4gICAgaWYgKHR5cGVvZiBjc3NEYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNzc0RhdGEgPSBwYXJzZUNzcyhjc3NEYXRhLCBzZXR0aW5ncyk7XG4gICAgfVxuICAgIGNzc0RhdGEuc3R5bGVzaGVldC5ydWxlcy5mb3JFYWNoKChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgIGlmIChydWxlLnR5cGUgIT09IFwicnVsZVwiIHx8ICFydWxlLnNlbGVjdG9ycy5zb21lKChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVWYXJEZWNsU2VsZWN0b3JzLnRlc3Qocyk7XG4gICAgICAgIH0pKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJ1bGUuZGVjbGFyYXRpb25zLmZvckVhY2goKGZ1bmN0aW9uKGRlY2wsIGkpIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gZGVjbC5wcm9wZXJ0eTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRlY2wudmFsdWU7XG4gICAgICAgICAgICBpZiAocHJvcCAmJiBwcm9wLmluZGV4T2YoXCItLVwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLnN0b3JlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIHNldHRpbmdzLnN0b3JlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlDc3ModHJlZSkge1xuICAgIHZhciBkZWxpbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogXCJcIjtcbiAgICB2YXIgY2IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgcmVuZGVyTWV0aG9kcyA9IHtcbiAgICAgICAgY2hhcnNldDogZnVuY3Rpb24gY2hhcnNldChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJAY2hhcnNldCBcIiArIG5vZGUubmFtZSArIFwiO1wiO1xuICAgICAgICB9LFxuICAgICAgICBjb21tZW50OiBmdW5jdGlvbiBjb21tZW50KG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmNvbW1lbnQuaW5kZXhPZihcIl9fQ1NTVkFSU1BPTllGSUxMXCIpID09PSAwID8gXCIvKlwiICsgbm9kZS5jb21tZW50ICsgXCIqL1wiIDogXCJcIjtcbiAgICAgICAgfSxcbiAgICAgICAgXCJjdXN0b20tbWVkaWFcIjogZnVuY3Rpb24gY3VzdG9tTWVkaWEobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiQGN1c3RvbS1tZWRpYSBcIiArIG5vZGUubmFtZSArIFwiIFwiICsgbm9kZS5tZWRpYSArIFwiO1wiO1xuICAgICAgICB9LFxuICAgICAgICBkZWNsYXJhdGlvbjogZnVuY3Rpb24gZGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUucHJvcGVydHkgKyBcIjpcIiArIG5vZGUudmFsdWUgKyBcIjtcIjtcbiAgICAgICAgfSxcbiAgICAgICAgZG9jdW1lbnQ6IGZ1bmN0aW9uIGRvY3VtZW50KG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkBcIiArIChub2RlLnZlbmRvciB8fCBcIlwiKSArIFwiZG9jdW1lbnQgXCIgKyBub2RlLmRvY3VtZW50ICsgXCJ7XCIgKyB2aXNpdChub2RlLnJ1bGVzKSArIFwifVwiO1xuICAgICAgICB9LFxuICAgICAgICBcImZvbnQtZmFjZVwiOiBmdW5jdGlvbiBmb250RmFjZShub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJAZm9udC1mYWNlXCIgKyBcIntcIiArIHZpc2l0KG5vZGUuZGVjbGFyYXRpb25zKSArIFwifVwiO1xuICAgICAgICB9LFxuICAgICAgICBob3N0OiBmdW5jdGlvbiBob3N0KG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkBob3N0XCIgKyBcIntcIiArIHZpc2l0KG5vZGUucnVsZXMpICsgXCJ9XCI7XG4gICAgICAgIH0sXG4gICAgICAgIGltcG9ydDogZnVuY3Rpb24gX2ltcG9ydChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJAaW1wb3J0IFwiICsgbm9kZS5uYW1lICsgXCI7XCI7XG4gICAgICAgIH0sXG4gICAgICAgIGtleWZyYW1lOiBmdW5jdGlvbiBrZXlmcmFtZShub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS52YWx1ZXMuam9pbihcIixcIikgKyBcIntcIiArIHZpc2l0KG5vZGUuZGVjbGFyYXRpb25zKSArIFwifVwiO1xuICAgICAgICB9LFxuICAgICAgICBrZXlmcmFtZXM6IGZ1bmN0aW9uIGtleWZyYW1lcyhub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJAXCIgKyAobm9kZS52ZW5kb3IgfHwgXCJcIikgKyBcImtleWZyYW1lcyBcIiArIG5vZGUubmFtZSArIFwie1wiICsgdmlzaXQobm9kZS5rZXlmcmFtZXMpICsgXCJ9XCI7XG4gICAgICAgIH0sXG4gICAgICAgIG1lZGlhOiBmdW5jdGlvbiBtZWRpYShub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIgKyBub2RlLm1lZGlhICsgXCJ7XCIgKyB2aXNpdChub2RlLnJ1bGVzKSArIFwifVwiO1xuICAgICAgICB9LFxuICAgICAgICBuYW1lc3BhY2U6IGZ1bmN0aW9uIG5hbWVzcGFjZShub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJAbmFtZXNwYWNlIFwiICsgbm9kZS5uYW1lICsgXCI7XCI7XG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2U6IGZ1bmN0aW9uIHBhZ2Uobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiQHBhZ2UgXCIgKyAobm9kZS5zZWxlY3RvcnMubGVuZ3RoID8gbm9kZS5zZWxlY3RvcnMuam9pbihcIiwgXCIpIDogXCJcIikgKyBcIntcIiArIHZpc2l0KG5vZGUuZGVjbGFyYXRpb25zKSArIFwifVwiO1xuICAgICAgICB9LFxuICAgICAgICBcInBhZ2UtbWFyZ2luLWJveFwiOiBmdW5jdGlvbiBwYWdlTWFyZ2luQm94KG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkBcIiArIG5vZGUubmFtZSArIFwie1wiICsgdmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpICsgXCJ9XCI7XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bGU6IGZ1bmN0aW9uIHJ1bGUobm9kZSkge1xuICAgICAgICAgICAgdmFyIGRlY2xzID0gbm9kZS5kZWNsYXJhdGlvbnM7XG4gICAgICAgICAgICBpZiAoZGVjbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc2VsZWN0b3JzLmpvaW4oXCIsXCIpICsgXCJ7XCIgKyB2aXNpdChkZWNscykgKyBcIn1cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3VwcG9ydHM6IGZ1bmN0aW9uIHN1cHBvcnRzKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkBzdXBwb3J0cyBcIiArIG5vZGUuc3VwcG9ydHMgKyBcIntcIiArIHZpc2l0KG5vZGUucnVsZXMpICsgXCJ9XCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHZpc2l0KG5vZGVzKSB7XG4gICAgICAgIHZhciBidWYgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbiA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgY2Iobik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHh0ID0gcmVuZGVyTWV0aG9kc1tuLnR5cGVdKG4pO1xuICAgICAgICAgICAgaWYgKHR4dCkge1xuICAgICAgICAgICAgICAgIGJ1ZiArPSB0eHQ7XG4gICAgICAgICAgICAgICAgaWYgKHR4dC5sZW5ndGggJiYgbi5zZWxlY3RvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmICs9IGRlbGltO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gdmlzaXQodHJlZS5zdHlsZXNoZWV0LnJ1bGVzKTtcbn1cblxuZnVuY3Rpb24gd2Fsa0Nzcyhub2RlLCBmbikge1xuICAgIG5vZGUucnVsZXMuZm9yRWFjaCgoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICBpZiAocnVsZS5ydWxlcykge1xuICAgICAgICAgICAgd2Fsa0NzcyhydWxlLCBmbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bGUua2V5ZnJhbWVzKSB7XG4gICAgICAgICAgICBydWxlLmtleWZyYW1lcy5mb3JFYWNoKChmdW5jdGlvbihrZXlmcmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXlmcmFtZS50eXBlID09PSBcImtleWZyYW1lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm4oa2V5ZnJhbWUuZGVjbGFyYXRpb25zLCBydWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydWxlLmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZuKHJ1bGUuZGVjbGFyYXRpb25zLCBub2RlKTtcbiAgICB9KSk7XG59XG5cbnZhciBWQVJfUFJPUF9JREVOVElGSUVSID0gXCItLVwiO1xuXG52YXIgVkFSX0ZVTkNfSURFTlRJRklFUiA9IFwidmFyXCI7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUNzcyhjc3NEYXRhKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgcHJlc2VydmVTdGF0aWM6IHRydWUsXG4gICAgICAgIHByZXNlcnZlVmFyczogZmFsc2UsXG4gICAgICAgIHZhcmlhYmxlczoge30sXG4gICAgICAgIG9uV2FybmluZzogZnVuY3Rpb24gb25XYXJuaW5nKCkge31cbiAgICB9O1xuICAgIHZhciBzZXR0aW5ncyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgaWYgKHR5cGVvZiBjc3NEYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNzc0RhdGEgPSBwYXJzZUNzcyhjc3NEYXRhLCBzZXR0aW5ncyk7XG4gICAgfVxuICAgIHdhbGtDc3MoY3NzRGF0YS5zdHlsZXNoZWV0LCAoZnVuY3Rpb24oZGVjbGFyYXRpb25zLCBub2RlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVjbGFyYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGVjbCA9IGRlY2xhcmF0aW9uc1tpXTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gZGVjbC50eXBlO1xuICAgICAgICAgICAgdmFyIHByb3AgPSBkZWNsLnByb3BlcnR5O1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGVjbC52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSBcImRlY2xhcmF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2V0dGluZ3MucHJlc2VydmVWYXJzICYmIHByb3AgJiYgcHJvcC5pbmRleE9mKFZBUl9QUk9QX0lERU5USUZJRVIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihWQVJfRlVOQ19JREVOVElGSUVSICsgXCIoXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhciByZXNvbHZlZFZhbHVlID0gcmVzb2x2ZVZhbHVlKHZhbHVlLCBzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVkVmFsdWUgIT09IGRlY2wudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZSA9IGZpeE5lc3RlZENhbGMocmVzb2x2ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2V0dGluZ3MucHJlc2VydmVWYXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsLnZhbHVlID0gcmVzb2x2ZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zcGxpY2UoaSwgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc29sdmVkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBzdHJpbmdpZnlDc3MoY3NzRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGZpeE5lc3RlZENhbGModmFsdWUpIHtcbiAgICB2YXIgcmVDYWxjVmFsID0gL2NhbGNcXCgoW14pXSspXFwpL2c7XG4gICAgKHZhbHVlLm1hdGNoKHJlQ2FsY1ZhbCkgfHwgW10pLmZvckVhY2goKGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHZhciBuZXdWYWwgPSBcImNhbGNcIi5jb25jYXQobWF0Y2guc3BsaXQoXCJjYWxjXCIpLmpvaW4oXCJcIikpO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UobWF0Y2gsIG5ld1ZhbCk7XG4gICAgfSkpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIHNldHRpbmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgX19yZWN1cnNpdmVGYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgIGlmICh2YWx1ZS5pbmRleE9mKFwidmFyKFwiKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB2YXIgdmFsdWVEYXRhID0gYmFsYW5jZWRNYXRjaChcIihcIiwgXCIpXCIsIHZhbHVlKTtcbiAgICBmdW5jdGlvbiByZXNvbHZlRnVuYyh2YWx1ZSkge1xuICAgICAgICB2YXIgbmFtZSA9IHZhbHVlLnNwbGl0KFwiLFwiKVswXS5yZXBsYWNlKC9bXFxzXFxuXFx0XS9nLCBcIlwiKTtcbiAgICAgICAgdmFyIGZhbGxiYWNrID0gKHZhbHVlLm1hdGNoKC8oPzpcXHMqLFxccyopezF9KC4qKT8vKSB8fCBbXSlbMV07XG4gICAgICAgIHZhciBtYXRjaCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZXR0aW5ncy52YXJpYWJsZXMsIG5hbWUpID8gU3RyaW5nKHNldHRpbmdzLnZhcmlhYmxlc1tuYW1lXSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIHZhciByZXBsYWNlbWVudCA9IG1hdGNoIHx8IChmYWxsYmFjayA/IFN0cmluZyhmYWxsYmFjaykgOiB1bmRlZmluZWQpO1xuICAgICAgICB2YXIgdW5yZXNvbHZlZEZhbGxiYWNrID0gX19yZWN1cnNpdmVGYWxsYmFjayB8fCB2YWx1ZTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgc2V0dGluZ3Mub25XYXJuaW5nKCd2YXJpYWJsZSBcIicuY29uY2F0KG5hbWUsICdcIiBpcyB1bmRlZmluZWQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGxhY2VtZW50ICYmIHJlcGxhY2VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHJlcGxhY2VtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlVmFsdWUocmVwbGFjZW1lbnQsIHNldHRpbmdzLCB1bnJlc29sdmVkRmFsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwidmFyKFwiLmNvbmNhdCh1bnJlc29sdmVkRmFsbGJhY2ssIFwiKVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXZhbHVlRGF0YSkge1xuICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihcInZhcihcIikgIT09IC0xKSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5vbldhcm5pbmcoJ21pc3NpbmcgY2xvc2luZyBcIilcIiBpbiB0aGUgdmFsdWUgXCInLmNvbmNhdCh2YWx1ZSwgJ1wiJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlRGF0YS5wcmUuc2xpY2UoLTMpID09PSBcInZhclwiKSB7XG4gICAgICAgIHZhciBpc0VtcHR5VmFyRnVuYyA9IHZhbHVlRGF0YS5ib2R5LnRyaW0oKS5sZW5ndGggPT09IDA7XG4gICAgICAgIGlmIChpc0VtcHR5VmFyRnVuYykge1xuICAgICAgICAgICAgc2V0dGluZ3Mub25XYXJuaW5nKFwidmFyKCkgbXVzdCBjb250YWluIGEgbm9uLXdoaXRlc3BhY2Ugc3RyaW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlRGF0YS5wcmUuc2xpY2UoMCwgLTMpICsgcmVzb2x2ZUZ1bmModmFsdWVEYXRhLmJvZHkpICsgcmVzb2x2ZVZhbHVlKHZhbHVlRGF0YS5wb3N0LCBzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWVEYXRhLnByZSArIFwiKFwiLmNvbmNhdChyZXNvbHZlVmFsdWUodmFsdWVEYXRhLmJvZHksIHNldHRpbmdzKSwgXCIpXCIpICsgcmVzb2x2ZVZhbHVlKHZhbHVlRGF0YS5wb3N0LCBzZXR0aW5ncyk7XG4gICAgfVxufVxuXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcblxudmFyIGlzTmF0aXZlU3VwcG9ydCA9IGlzQnJvd3NlciAmJiB3aW5kb3cuQ1NTICYmIHdpbmRvdy5DU1Muc3VwcG9ydHMgJiYgd2luZG93LkNTUy5zdXBwb3J0cyhcIigtLWE6IDApXCIpO1xuXG52YXIgY291bnRlcnMgPSB7XG4gICAgZ3JvdXA6IDAsXG4gICAgam9iOiAwXG59O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgcm9vdEVsZW1lbnQ6IGlzQnJvd3NlciA/IGRvY3VtZW50IDogbnVsbCxcbiAgICBzaGFkb3dET006IGZhbHNlLFxuICAgIGluY2x1ZGU6IFwic3R5bGUsbGlua1tyZWw9c3R5bGVzaGVldF1cIixcbiAgICBleGNsdWRlOiBcIlwiLFxuICAgIHZhcmlhYmxlczoge30sXG4gICAgb25seUxlZ2FjeTogdHJ1ZSxcbiAgICBwcmVzZXJ2ZVN0YXRpYzogdHJ1ZSxcbiAgICBwcmVzZXJ2ZVZhcnM6IGZhbHNlLFxuICAgIHNpbGVudDogZmFsc2UsXG4gICAgdXBkYXRlRE9NOiB0cnVlLFxuICAgIHVwZGF0ZVVSTHM6IHRydWUsXG4gICAgd2F0Y2g6IG51bGwsXG4gICAgb25CZWZvcmVTZW5kOiBmdW5jdGlvbiBvbkJlZm9yZVNlbmQoKSB7fSxcbiAgICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKCkge30sXG4gICAgb25XYXJuaW5nOiBmdW5jdGlvbiBvbldhcm5pbmcoKSB7fSxcbiAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHt9LFxuICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUoKSB7fSxcbiAgICBvbkZpbmFsbHk6IGZ1bmN0aW9uIG9uRmluYWxseSgpIHt9XG59O1xuXG52YXIgcmVnZXggPSB7XG4gICAgY3NzQ29tbWVudHM6IC9cXC9cXCpbXFxzXFxTXSs/XFwqXFwvL2csXG4gICAgY3NzS2V5ZnJhbWVzOiAvQCg/Oi1cXHcqLSk/a2V5ZnJhbWVzLyxcbiAgICBjc3NNZWRpYVF1ZXJpZXM6IC9AbWVkaWFbXntdK1xceyhbXFxzXFxTXSs/fSlcXHMqfS9nLFxuICAgIGNzc1VybHM6IC91cmxcXCgoPyFbJ1wiXT8oPzpkYXRhfGh0dHB8XFwvXFwvKTopWydcIl0/KFteJ1wiKV0qKVsnXCJdP1xcKS9nLFxuICAgIGNzc1ZhckRlY2xSdWxlczogLyg/OjooPzpyb290fGhvc3QpKD8hWy46IyhdKVtcXHMsXSpbXntdKntcXHMqW159XSp9KS9nLFxuICAgIGNzc1ZhckRlY2xzOiAvKD86W1xccztdKikoLXsyfVxcd1tcXHctXSopKD86XFxzKjpcXHMqKShbXjtdKik7L2csXG4gICAgY3NzVmFyRnVuYzogL3ZhclxcKFxccyotLVtcXHctXS8sXG4gICAgY3NzVmFyczogLyg/Oig/OjooPzpyb290fGhvc3QpKD8hWy46IyhdKVtcXHMsXSpbXntdKntcXHMqW147XSo7KlxccyopfCg/OnZhclxcKFxccyopKSgtLVteOildKykoPzpcXHMqWzopXSkvXG59O1xuXG52YXIgdmFyaWFibGVTdG9yZSA9IHtcbiAgICBkb206IHt9LFxuICAgIGpvYjoge30sXG4gICAgdXNlcjoge31cbn07XG5cbnZhciBjc3NWYXJzSXNSdW5uaW5nID0gZmFsc2U7XG5cbnZhciBjc3NWYXJzT2JzZXJ2ZXIgPSBudWxsO1xuXG52YXIgY3NzVmFyc1NyY05vZGVDb3VudCA9IDA7XG5cbnZhciBkZWJvdW5jZVRpbWVyID0gbnVsbDtcblxudmFyIGlzU2hhZG93RE9NUmVhZHkgPSBmYWxzZTtcblxuLyoqXG4gKiBGZXRjaGVzLCBwYXJzZXMsIGFuZCB0cmFuc2Zvcm1zIENTUyBjdXN0b20gcHJvcGVydGllcyBmcm9tIHNwZWNpZmllZFxuICogPHN0eWxlPiBhbmQgPGxpbms+IGVsZW1lbnRzIGludG8gc3RhdGljIHZhbHVlcywgdGhlbiBhcHBlbmRzIGEgbmV3IDxzdHlsZT5cbiAqIGVsZW1lbnQgd2l0aCBzdGF0aWMgdmFsdWVzIHRvIHRoZSBET00gdG8gcHJvdmlkZSBDU1MgY3VzdG9tIHByb3BlcnR5XG4gKiBjb21wYXRpYmlsaXR5IGZvciBsZWdhY3kgYnJvd3NlcnMuIEFsc28gcHJvdmlkZXMgYSBzaW5nbGUgaW50ZXJmYWNlIGZvclxuICogbGl2ZSB1cGRhdGVzIG9mIHJ1bnRpbWUgdmFsdWVzIGluIGJvdGggbW9kZXJuIGFuZCBsZWdhY3kgYnJvd3NlcnMuXG4gKlxuICogQHByZXNlcnZlXG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9uc10gT3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zLnJvb3RFbGVtZW50PWRvY3VtZW50XSBSb290IGVsZW1lbnQgdG8gdHJhdmVyc2UgZm9yXG4gKiAgICAgICAgICAgICAgICAgICA8bGluaz4gYW5kIDxzdHlsZT4gbm9kZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLnNoYWRvd0RPTT1mYWxzZV0gRGV0ZXJtaW5lcyBpZiBzaGFkb3cgRE9NIDxsaW5rPlxuICogICAgICAgICAgICAgICAgICAgYW5kIDxzdHlsZT4gbm9kZXMgd2lsbCBiZSBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gICBbb3B0aW9ucy5pbmNsdWRlPVwic3R5bGUsbGlua1tyZWw9c3R5bGVzaGVldF1cIl0gQ1NTIHNlbGVjdG9yXG4gKiAgICAgICAgICAgICAgICAgICBtYXRjaGluZyA8bGluayByZT1cInN0eWxlc2hlZXRcIj4gYW5kIDxzdHlsZT4gbm9kZXMgdG9cbiAqICAgICAgICAgICAgICAgICAgIHByb2Nlc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSAgIFtvcHRpb25zLmV4Y2x1ZGVdIENTUyBzZWxlY3RvciBtYXRjaGluZyA8bGlua1xuICogICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVoc2VldFwiPiBhbmQgPHN0eWxlPiBub2RlcyB0byBleGNsdWRlIGZyb20gdGhvc2VcbiAqICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgYnkgb3B0aW9ucy5pbmNsdWRlXG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9ucy52YXJpYWJsZXNdIEEgbWFwIG9mIGN1c3RvbSBwcm9wZXJ0eSBuYW1lL3ZhbHVlXG4gKiAgICAgICAgICAgICAgICAgICBwYWlycy4gUHJvcGVydHkgbmFtZXMgY2FuIG9taXQgb3IgaW5jbHVkZSB0aGUgbGVhZGluZ1xuICogICAgICAgICAgICAgICAgICAgZG91YmxlLWh5cGhlbiAo4oCUKSwgYW5kIHZhbHVlcyBzcGVjaWZpZWQgd2lsbCBvdmVycmlkZVxuICogICAgICAgICAgICAgICAgICAgcHJldmlvdXMgdmFsdWVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5vbmx5TGVnYWN5PXRydWVdIERldGVybWluZXMgaWYgdGhlIHBvbnlmaWxsIHdpbGxcbiAqICAgICAgICAgICAgICAgICAgIG9ubHkgZ2VuZXJhdGUgbGVnYWN5LWNvbXBhdGlibGUgQ1NTIGluIGJyb3dzZXJzIHRoYXQgbGFja1xuICogICAgICAgICAgICAgICAgICAgbmF0aXZlIHN1cHBvcnQgKGkuZS4sIGxlZ2FjeSBicm93c2VycylcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLnByZXNlcnZlU3RhdGljPXRydWVdIERldGVybWluZXMgaWYgQ1NTXG4gKiAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMgdGhhdCBkbyBub3QgcmVmZXJlbmNlIGEgY3VzdG9tIHByb3BlcnR5IHdpbGxcbiAqICAgICAgICAgICAgICAgICAgIGJlIHByZXNlcnZlZCBpbiB0aGUgdHJhbnNmb3JtZWQgQ1NTXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5wcmVzZXJ2ZVZhcnM9ZmFsc2VdIERldGVybWluZXMgaWYgQ1NTIGN1c3RvbVxuICogICAgICAgICAgICAgICAgICAgcHJvcGVydHkgZGVjbGFyYXRpb25zIHdpbGwgYmUgcHJlc2VydmVkIGluIHRoZSB0cmFuc2Zvcm1lZFxuICogICAgICAgICAgICAgICAgICAgQ1NTXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5zaWxlbnQ9ZmFsc2VdIERldGVybWluZXMgaWYgd2FybmluZyBhbmQgZXJyb3JcbiAqICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBjb25zb2xlXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy51cGRhdGVET009dHJ1ZV0gRGV0ZXJtaW5lcyBpZiB0aGUgcG9ueWZpbGwgd2lsbFxuICogICAgICAgICAgICAgICAgICAgdXBkYXRlIHRoZSBET00gYWZ0ZXIgcHJvY2Vzc2luZyBDU1MgY3VzdG9tIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLnVwZGF0ZVVSTHM9dHJ1ZV0gRGV0ZXJtaW5lcyBpZiByZWxhdGl2ZSB1cmwoKVxuICogICAgICAgICAgICAgICAgICAgcGF0aHMgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYWJzb2x1dGUgdXJscyBpbiBleHRlcm5hbCBDU1NcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLndhdGNoPWZhbHNlXSBEZXRlcm1pbmVzIGlmIGEgTXV0YXRpb25PYnNlcnZlciB3aWxsXG4gKiAgICAgICAgICAgICAgICAgICBiZSBjcmVhdGVkIHRoYXQgd2lsbCBleGVjdXRlIHRoZSBwb255ZmlsbCB3aGVuIGEgPGxpbms+IG9yXG4gKiAgICAgICAgICAgICAgICAgICA8c3R5bGU+IERPTSBtdXRhdGlvbiBpcyBvYnNlcnZlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25CZWZvcmVTZW5kXSBDYWxsYmFjayBiZWZvcmUgWEhSIGlzIHNlbnQuIFBhc3Nlc1xuICogICAgICAgICAgICAgICAgICAgMSkgdGhlIFhIUiBvYmplY3QsIDIpIHNvdXJjZSBub2RlIHJlZmVyZW5jZSwgYW5kIDMpIHRoZVxuICogICAgICAgICAgICAgICAgICAgc291cmNlIFVSTCBhcyBhcmd1bWVudHNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uRXJyb3JdIENhbGxiYWNrIGFmdGVyIGEgQ1NTIHBhcnNpbmcgZXJyb3IgaGFzXG4gKiAgICAgICAgICAgICAgICAgICBvY2N1cnJlZCBvciBhbiBYSFIgcmVxdWVzdCBoYXMgZmFpbGVkLiBQYXNzZXMgMSkgYW4gZXJyb3JcbiAqICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsIGFuZCAyKSBzb3VyY2Ugbm9kZSByZWZlcmVuY2UsIDMpIHhociwgYW5kIDQgdXJsIGFzXG4gKiAgICAgICAgICAgICAgICAgICBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbldhcm5pbmddIENhbGxiYWNrIGFmdGVyIGVhY2ggQ1NTIHBhcnNpbmcgd2FybmluZ1xuICogICAgICAgICAgICAgICAgICAgaGFzIG9jY3VycmVkLiBQYXNzZXMgMSkgYSB3YXJuaW5nIG1lc3NhZ2UgYXMgYW4gYXJndW1lbnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vblN1Y2Nlc3NdIENhbGxiYWNrIGFmdGVyIENTUyBkYXRhIGhhcyBiZWVuXG4gKiAgICAgICAgICAgICAgICAgICBjb2xsZWN0ZWQgZnJvbSBlYWNoIG5vZGUgYW5kIGJlZm9yZSBDU1MgY3VzdG9tIHByb3BlcnRpZXNcbiAqICAgICAgICAgICAgICAgICAgIGhhdmUgYmVlbiB0cmFuc2Zvcm1lZC4gQWxsb3dzIG1vZGlmeWluZyB0aGUgQ1NTIGRhdGEgYmVmb3JlXG4gKiAgICAgICAgICAgICAgICAgICBpdCBpcyB0cmFuc2Zvcm1lZCBieSByZXR1cm5pbmcgYW55IHN0cmluZyB2YWx1ZSAob3IgZmFsc2VcbiAqICAgICAgICAgICAgICAgICAgIHRvIHNraXApLiBQYXNzZXMgMSkgQ1NTIHRleHQsIDIpIHNvdXJjZSBub2RlIHJlZmVyZW5jZSwgYW5kXG4gKiAgICAgICAgICAgICAgICAgICAzKSB0aGUgc291cmNlIFVSTCBhcyBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbkNvbXBsZXRlXSBDYWxsYmFjayBhZnRlciBhbGwgQ1NTIGhhcyBiZWVuXG4gKiAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWQsIGxlZ2FjeS1jb21wYXRpYmxlIENTUyBoYXMgYmVlbiBnZW5lcmF0ZWQsIGFuZFxuICogICAgICAgICAgICAgICAgICAgKG9wdGlvbmFsbHkpIHRoZSBET00gaGFzIGJlZW4gdXBkYXRlZC4gUGFzc2VzIDEpIGEgQ1NTXG4gKiAgICAgICAgICAgICAgICAgICBzdHJpbmcgd2l0aCBDU1MgdmFyaWFibGUgdmFsdWVzIHJlc29sdmVkLCAyKSBhbiBhcnJheSBvZlxuICogICAgICAgICAgICAgICAgICAgb3V0cHV0IDxzdHlsZT4gbm9kZSByZWZlcmVuY2VzIHRoYXQgaGF2ZSBiZWVuIGFwcGVuZGVkIHRvXG4gKiAgICAgICAgICAgICAgICAgICB0aGUgRE9NLCAzKSBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgY3VzdG9tIHByb3BlcmllcyBuYW1lc1xuICogICAgICAgICAgICAgICAgICAgYW5kIHZhbHVlcywgYW5kIDQpIHRoZSBwb255ZmlsbCBleGVjdXRpb24gdGltZSBpblxuICogICAgICAgICAgICAgICAgICAgbWlsbGlzZWNvbmRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25GaW5hbGx5XSBDYWxsYmFjayBpbiBtb2Rlcm4gYW5kIGxlZ2FjeSBicm93c2Vyc1xuICogICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIHBvbnlmaWxsIGhhcyBmaW5pc2hlZCBhbGwgdGFza3MuIFBhc3NlcyAxKSBhXG4gKiAgICAgICAgICAgICAgICAgICBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGxhc3QgcG9ueWZpbGwgY2FsbCByZXN1bHRlZCBpbiBhXG4gKiAgICAgICAgICAgICAgICAgICBzdHlsZSBjaGFuZ2UsIDIpIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBjdXJyZW50XG4gKiAgICAgICAgICAgICAgICAgICBicm93c2VyIHByb3ZpZGVzIG5hdGl2ZSBzdXBwb3J0IGZvciBDU1MgY3VzdG9tIHByb3BlcnRpZXMsXG4gKiAgICAgICAgICAgICAgICAgICBhbmQgMykgdGhlIHBvbnlmaWxsIGV4ZWN1dGlvbiB0aW1lIGluIG1pbGxpc2Vjb25kcy5cbiAqIEBleGFtcGxlXG4gKlxuICogICBjc3NWYXJzKHtcbiAqICAgICByb290RWxlbWVudCAgIDogZG9jdW1lbnQsXG4gKiAgICAgc2hhZG93RE9NICAgICA6IGZhbHNlLFxuICogICAgIGluY2x1ZGUgICAgICAgOiAnc3R5bGUsbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyxcbiAqICAgICBleGNsdWRlICAgICAgIDogJycsXG4gKiAgICAgdmFyaWFibGVzICAgICA6IHt9LFxuICogICAgIG9ubHlMZWdhY3kgICAgOiB0cnVlLFxuICogICAgIHByZXNlcnZlU3RhdGljOiB0cnVlLFxuICogICAgIHByZXNlcnZlVmFycyAgOiBmYWxzZSxcbiAqICAgICBzaWxlbnQgICAgICAgIDogZmFsc2UsXG4gKiAgICAgdXBkYXRlRE9NICAgICA6IHRydWUsXG4gKiAgICAgdXBkYXRlVVJMcyAgICA6IHRydWUsXG4gKiAgICAgd2F0Y2ggICAgICAgICA6IGZhbHNlLFxuICogICAgIG9uQmVmb3JlU2VuZCh4aHIsIG5vZGUsIHVybCkge30sXG4gKiAgICAgb25FcnJvcihtZXNzYWdlLCBub2RlLCB4aHIsIHVybCkge30sXG4gKiAgICAgb25XYXJuaW5nKG1lc3NhZ2UpIHt9LFxuICogICAgIG9uU3VjY2Vzcyhjc3NUZXh0LCBub2RlLCB1cmwpIHt9LFxuICogICAgIG9uQ29tcGxldGUoY3NzVGV4dCwgc3R5bGVOb2RlLCBjc3NWYXJpYWJsZXMsIGJlbmNobWFyaykge30sXG4gKiAgICAgb25GaW5hbGx5KGhhc0NoYW5nZWQsIGhhc05hdGl2ZVN1cHBvcnQsIGJlbmNobWFyaylcbiAqICAgfSk7XG4gKi8gZnVuY3Rpb24gY3NzVmFycygpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIG1zZ1ByZWZpeCA9IFwiY3NzVmFycygpOiBcIjtcbiAgICB2YXIgc2V0dGluZ3MgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKG1lc3NhZ2UsIHNvdXJjZU5vZGUsIHhociwgdXJsKSB7XG4gICAgICAgIGlmICghc2V0dGluZ3Muc2lsZW50ICYmIHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KG1zZ1ByZWZpeCkuY29uY2F0KG1lc3NhZ2UsIFwiXFxuXCIpLCBzb3VyY2VOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXR0aW5ncy5vbkVycm9yKG1lc3NhZ2UsIHNvdXJjZU5vZGUsIHhociwgdXJsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlV2FybmluZyhtZXNzYWdlKSB7XG4gICAgICAgIGlmICghc2V0dGluZ3Muc2lsZW50ICYmIHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJcIi5jb25jYXQobXNnUHJlZml4KS5jb25jYXQobWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdzLm9uV2FybmluZyhtZXNzYWdlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlRmluYWxseShoYXNDaGFuZ2VkKSB7XG4gICAgICAgIHNldHRpbmdzLm9uRmluYWxseShCb29sZWFuKGhhc0NoYW5nZWQpLCBpc05hdGl2ZVN1cHBvcnQsIGdldFRpbWVTdGFtcCgpIC0gc2V0dGluZ3MuX19iZW5jaG1hcmspO1xuICAgIH1cbiAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZXR0aW5ncy53YXRjaCkge1xuICAgICAgICBzZXR0aW5ncy53YXRjaCA9IGRlZmF1bHRzLndhdGNoO1xuICAgICAgICBhZGRNdXRhdGlvbk9ic2VydmVyKHNldHRpbmdzKTtcbiAgICAgICAgY3NzVmFycyhzZXR0aW5ncyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHNldHRpbmdzLndhdGNoID09PSBmYWxzZSAmJiBjc3NWYXJzT2JzZXJ2ZXIpIHtcbiAgICAgICAgY3NzVmFyc09ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgY3NzVmFyc09ic2VydmVyID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFzZXR0aW5ncy5fX2JlbmNobWFyaykge1xuICAgICAgICBpZiAoY3NzVmFyc0lzUnVubmluZyA9PT0gc2V0dGluZ3Mucm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNzc1ZhcnNEZWJvdW5jZWQob3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNyY05vZGVzID0gW10uc2xpY2UuY2FsbChzZXR0aW5ncy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jc3N2YXJzXTpub3QoW2RhdGEtY3NzdmFycz1cIm91dFwiXSknKSk7XG4gICAgICAgIHNldHRpbmdzLl9fYmVuY2htYXJrID0gZ2V0VGltZVN0YW1wKCk7XG4gICAgICAgIHNldHRpbmdzLmV4Y2x1ZGUgPSBbIGNzc1ZhcnNPYnNlcnZlciA/ICdbZGF0YS1jc3N2YXJzXTpub3QoW2RhdGEtY3NzdmFycz1cIlwiXSknIDogJ1tkYXRhLWNzc3ZhcnM9XCJvdXRcIl0nLCBcImxpbmtbZGlzYWJsZWRdOm5vdChbZGF0YS1jc3N2YXJzXSlcIiwgc2V0dGluZ3MuZXhjbHVkZSBdLmZpbHRlcigoZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgfSkpLmpvaW4oXCIsXCIpO1xuICAgICAgICBzZXR0aW5ncy52YXJpYWJsZXMgPSBmaXhWYXJOYW1lcyhzZXR0aW5ncy52YXJpYWJsZXMpO1xuICAgICAgICBzcmNOb2Rlcy5mb3JFYWNoKChmdW5jdGlvbihzcmNOb2RlKSB7XG4gICAgICAgICAgICB2YXIgaGFzU3R5bGVDYWNoZSA9IHNyY05vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdHlsZVwiICYmIHNyY05vZGUuX19jc3NWYXJzLnRleHQ7XG4gICAgICAgICAgICB2YXIgaGFzU3R5bGVDaGFuZ2VkID0gaGFzU3R5bGVDYWNoZSAmJiBzcmNOb2RlLnRleHRDb250ZW50ICE9PSBzcmNOb2RlLl9fY3NzVmFycy50ZXh0O1xuICAgICAgICAgICAgaWYgKGhhc1N0eWxlQ2FjaGUgJiYgaGFzU3R5bGVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgc3JjTm9kZS5zaGVldCAmJiAoc3JjTm9kZS5zaGVldC5kaXNhYmxlZCA9IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzcmNOb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtY3NzdmFyc1wiLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAoIWNzc1ZhcnNPYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIG91dE5vZGVzID0gW10uc2xpY2UuY2FsbChzZXR0aW5ncy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jc3N2YXJzPVwib3V0XCJdJykpO1xuICAgICAgICAgICAgb3V0Tm9kZXMuZm9yRWFjaCgoZnVuY3Rpb24ob3V0Tm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhR3JvdXAgPSBvdXROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtY3NzdmFycy1ncm91cFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgc3JjTm9kZSA9IGRhdGFHcm91cCA/IHNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNzc3ZhcnM9XCJzcmNcIl1bZGF0YS1jc3N2YXJzLWdyb3VwPVwiJy5jb25jYXQoZGF0YUdyb3VwLCAnXCJdJykpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIXNyY05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGlmIChjc3NWYXJzU3JjTm9kZUNvdW50ICYmIHNyY05vZGVzLmxlbmd0aCA8IGNzc1ZhcnNTcmNOb2RlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBjc3NWYXJzU3JjTm9kZUNvdW50ID0gc3JjTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlU3RvcmUuZG9tID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgIGlmIChpc05hdGl2ZVN1cHBvcnQgJiYgc2V0dGluZ3Mub25seUxlZ2FjeSkge1xuICAgICAgICAgICAgdmFyIGhhc1ZhckNoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLnVwZGF0ZURPTSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRFbG0gPSBzZXR0aW5ncy5yb290RWxlbWVudC5ob3N0IHx8IChzZXR0aW5ncy5yb290RWxlbWVudCA9PT0gZG9jdW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBzZXR0aW5ncy5yb290RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2V0dGluZ3MudmFyaWFibGVzKS5mb3JFYWNoKChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhclZhbHVlID0gc2V0dGluZ3MudmFyaWFibGVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGhhc1ZhckNoYW5nZSA9IGhhc1ZhckNoYW5nZSB8fCB2YXJWYWx1ZSAhPT0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXRFbG0pLmdldFByb3BlcnR5VmFsdWUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxtLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFyVmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZUZpbmFsbHkoaGFzVmFyQ2hhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNTaGFkb3dET01SZWFkeSAmJiAoc2V0dGluZ3Muc2hhZG93RE9NIHx8IHNldHRpbmdzLnJvb3RFbGVtZW50LnNoYWRvd1Jvb3QgfHwgc2V0dGluZ3Mucm9vdEVsZW1lbnQuaG9zdCkpIHtcbiAgICAgICAgICAgIGdldENzc0RhdGEoe1xuICAgICAgICAgICAgICAgIHJvb3RFbGVtZW50OiBkZWZhdWx0cy5yb290RWxlbWVudCxcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBkZWZhdWx0cy5pbmNsdWRlLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGU6IHNldHRpbmdzLmV4Y2x1ZGUsXG4gICAgICAgICAgICAgICAgc2tpcERpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2Vzcyhjc3NUZXh0LCBub2RlLCB1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzVXNlckRpc2FibGVkID0gKG5vZGUuc2hlZXQgfHwge30pLmRpc2FibGVkICYmICFub2RlLl9fY3NzVmFycztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVXNlckRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShyZWdleC5jc3NDb21tZW50cywgXCJcIikucmVwbGFjZShyZWdleC5jc3NNZWRpYVF1ZXJpZXMsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gKGNzc1RleHQubWF0Y2gocmVnZXguY3NzVmFyRGVjbFJ1bGVzKSB8fCBbXSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc1RleHQgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKGNzc1RleHQsIGNzc0FycmF5LCBub2RlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VWYXJzKGNzc1RleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlOiB2YXJpYWJsZVN0b3JlLmRvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uV2FybmluZzogaGFuZGxlV2FybmluZ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaXNTaGFkb3dET01SZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNzc1ZhcnMoc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NzVmFyc0lzUnVubmluZyA9IHNldHRpbmdzLnJvb3RFbGVtZW50O1xuICAgICAgICAgICAgZ2V0Q3NzRGF0YSh7XG4gICAgICAgICAgICAgICAgcm9vdEVsZW1lbnQ6IHNldHRpbmdzLnJvb3RFbGVtZW50LFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHNldHRpbmdzLmluY2x1ZGUsXG4gICAgICAgICAgICAgICAgZXhjbHVkZTogc2V0dGluZ3MuZXhjbHVkZSxcbiAgICAgICAgICAgICAgICBza2lwRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uQmVmb3JlU2VuZDogc2V0dGluZ3Mub25CZWZvcmVTZW5kLFxuICAgICAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoeGhyLCBub2RlLCB1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlVXJsID0geGhyLnJlc3BvbnNlVVJMIHx8IGdldEZ1bGxVcmwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dCA/IFwiKFwiLmNvbmNhdCh4aHIuc3RhdHVzVGV4dCwgXCIpXCIpIDogXCJVbnNwZWNpZmllZCBFcnJvclwiICsgKHhoci5zdGF0dXMgPT09IDAgPyBcIiAocG9zc2libHkgQ09SUyByZWxhdGVkKVwiIDogXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvck1zZyA9IFwiQ1NTIFhIUiBFcnJvcjogXCIuY29uY2F0KHJlc3BvbnNlVXJsLCBcIiBcIikuY29uY2F0KHhoci5zdGF0dXMsIFwiIFwiKS5jb25jYXQoc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGVycm9yTXNnLCBub2RlLCB4aHIsIHJlc3BvbnNlVXJsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHVybCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNVc2VyRGlzYWJsZWQgPSAobm9kZS5zaGVldCB8fCB7fSkuZGlzYWJsZWQgJiYgIW5vZGUuX19jc3NWYXJzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNVc2VyRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNMaW5rID0gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpbmtcIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzU3R5bGVJbXBvcnQgPSBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic3R5bGVcIiAmJiBjc3NUZXh0ICE9PSBub2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVmFsID0gc2V0dGluZ3Mub25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSByZXR1cm5WYWwgIT09IHVuZGVmaW5lZCAmJiBCb29sZWFuKHJldHVyblZhbCkgPT09IGZhbHNlID8gXCJcIiA6IHJldHVyblZhbCB8fCBjc3NUZXh0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudXBkYXRlVVJMcyAmJiAoaXNMaW5rIHx8IGlzU3R5bGVJbXBvcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gZml4UmVsYXRpdmVDc3NVcmxzKGNzc1RleHQsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc1RleHQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKGNzc1RleHQsIGNzc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlQXJyYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFZhcnMgPSBfZXh0ZW5kcyh7fSwgdmFyaWFibGVTdG9yZS5kb20sIHZhcmlhYmxlU3RvcmUudXNlcik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNWYXJDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVTdG9yZS5qb2IgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUFycmF5LmZvckVhY2goKGZ1bmN0aW9uKG5vZGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlQ1NTID0gY3NzQXJyYXlbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLl9fY3NzVmFycyA9IG5vZGUuX19jc3NWYXJzIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5fX2Nzc1ZhcnMudGV4dCA9IG5vZGVDU1M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVnZXguY3NzVmFycy50ZXN0KG5vZGVDU1MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNzc1RyZWUgPSBwYXJzZUNzcyhub2RlQ1NTLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZVN0YXRpYzogc2V0dGluZ3MucHJlc2VydmVTdGF0aWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDb21tZW50czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VWYXJzKGNzc1RyZWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSG9zdDogQm9vbGVhbihzZXR0aW5ncy5yb290RWxlbWVudC5ob3N0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlOiB2YXJpYWJsZVN0b3JlLmRvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uV2FybmluZzogaGFuZGxlV2FybmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5fX2Nzc1ZhcnMudHJlZSA9IGNzc1RyZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGVyci5tZXNzYWdlLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHModmFyaWFibGVTdG9yZS5qb2IsIHZhcmlhYmxlU3RvcmUuZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnVwZGF0ZURPTSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHModmFyaWFibGVTdG9yZS51c2VyLCBzZXR0aW5ncy52YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHModmFyaWFibGVTdG9yZS5qb2IsIHZhcmlhYmxlU3RvcmUudXNlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZXh0ZW5kcyh2YXJpYWJsZVN0b3JlLmpvYiwgdmFyaWFibGVTdG9yZS51c2VyLCBzZXR0aW5ncy52YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHMoY3VycmVudFZhcnMsIHNldHRpbmdzLnZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGFzVmFyQ2hhbmdlID0gY291bnRlcnMuam9iID4gMCAmJiBCb29sZWFuKE9iamVjdC5rZXlzKHZhcmlhYmxlU3RvcmUuam9iKS5sZW5ndGggPiBPYmplY3Qua2V5cyhjdXJyZW50VmFycykubGVuZ3RoIHx8IEJvb2xlYW4oT2JqZWN0LmtleXMoY3VycmVudFZhcnMpLmxlbmd0aCAmJiBPYmplY3Qua2V5cyh2YXJpYWJsZVN0b3JlLmpvYikuc29tZSgoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFyaWFibGVTdG9yZS5qb2Jba2V5XSAhPT0gY3VycmVudFZhcnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfSkpKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNWYXJDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Q3NzTm9kZXMoc2V0dGluZ3Mucm9vdEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVmFycyhzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3V0Q3NzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdXROb2RlQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNLZXlmcmFtZXNXaXRoVmFycyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnVwZGF0ZURPTSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJzLmpvYisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUFycmF5LmZvckVhY2goKGZ1bmN0aW9uKG5vZGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNTa2lwID0gIW5vZGUuX19jc3NWYXJzLnRyZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuX19jc3NWYXJzLnRyZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybUNzcyhub2RlLl9fY3NzVmFycy50cmVlLCBfZXh0ZW5kcyh7fSwgc2V0dGluZ3MsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlU3RvcmUuam9iLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uV2FybmluZzogaGFuZGxlV2FybmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG91dENzcyA9IHN0cmluZ2lmeUNzcyhub2RlLl9fY3NzVmFycy50cmVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy51cGRhdGVET00pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZUNTUyA9IGNzc0FycmF5W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNDU1NWYXJGdW5jID0gcmVnZXguY3NzVmFyRnVuYy50ZXN0KG5vZGVDU1MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNzc3ZhcnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNzc3ZhcnNcIiwgXCJzcmNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRDc3MubGVuZ3RoICYmIGhhc0NTU1ZhckZ1bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFHcm91cCA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jc3N2YXJzLWdyb3VwXCIpIHx8ICsrY291bnRlcnMuZ3JvdXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdXRDc3NOb1NwYWNlcyA9IG91dENzcy5yZXBsYWNlKC9cXHMvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdXROb2RlID0gc2V0dGluZ3Mucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY3NzdmFycz1cIm91dFwiXVtkYXRhLWNzc3ZhcnMtZ3JvdXA9XCInLmNvbmNhdChkYXRhR3JvdXAsICdcIl0nKSkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNLZXlmcmFtZXNXaXRoVmFycyA9IGhhc0tleWZyYW1lc1dpdGhWYXJzIHx8IHJlZ2V4LmNzc0tleWZyYW1lcy50ZXN0KG91dENzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wcmVzZXJ2ZVN0YXRpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zaGVldCAmJiAobm9kZS5zaGVldC5kaXNhYmxlZCA9IHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3V0Tm9kZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWNzc3ZhcnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dE5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1jc3N2YXJzXCIsIFwib3V0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRDc3NOb1NwYWNlcyA9PT0gbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHMvZywgXCJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2tpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0Tm9kZSAmJiBvdXROb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY3NzdmFycy1ncm91cFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3V0Q3NzTm9TcGFjZXMgIT09IG91dE5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvXFxzL2csIFwiXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIG5vZGUsIG91dE5vZGUgXS5mb3JFYWNoKChmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNzc3ZhcnMtam9iXCIsIGNvdW50ZXJzLmpvYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNzc3ZhcnMtZ3JvdXBcIiwgZGF0YUdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dE5vZGUudGV4dENvbnRlbnQgPSBvdXRDc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRDc3NBcnJheS5wdXNoKG91dENzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXROb2RlQXJyYXkucHVzaChvdXROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3V0Tm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvdXROb2RlLCBub2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvXFxzL2csIFwiXCIpICE9PSBvdXRDc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0Q3NzQXJyYXkucHVzaChvdXRDc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlcnIubWVzc2FnZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2tpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtY3NzdmFyc1wiLCBcInNraXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWNzc3ZhcnMtam9iXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1jc3N2YXJzLWpvYlwiLCBjb3VudGVycy5qb2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1ZhcnNTcmNOb2RlQ291bnQgPSBzZXR0aW5ncy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jc3N2YXJzXTpub3QoW2RhdGEtY3NzdmFycz1cIm91dFwiXSknKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3Muc2hhZG93RE9NKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsbXMgPSBbXS5jb25jYXQoc2V0dGluZ3Mucm9vdEVsZW1lbnQpLmNvbmNhdChbXS5zbGljZS5jYWxsKHNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGVsbTsgZWxtID0gZWxtc1tpXTsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbG0uc2hhZG93Um9vdCAmJiBlbG0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dTZXR0aW5ncyA9IF9leHRlbmRzKHt9LCBzZXR0aW5ncywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RFbGVtZW50OiBlbG0uc2hhZG93Um9vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NWYXJzKHNoYWRvd1NldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy51cGRhdGVET00gJiYgaGFzS2V5ZnJhbWVzV2l0aFZhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhLZXlmcmFtZXMoc2V0dGluZ3Mucm9vdEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVmFyc0lzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub25Db21wbGV0ZShvdXRDc3NBcnJheS5qb2luKFwiXCIpLCBvdXROb2RlQXJyYXksIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFyaWFibGVTdG9yZS5qb2IpKSwgZ2V0VGltZVN0YW1wKCkgLSBzZXR0aW5ncy5fX2JlbmNobWFyayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVGaW5hbGx5KG91dE5vZGVBcnJheS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZnVuY3Rpb24gaW5pdChldnQpIHtcbiAgICAgICAgICAgIGNzc1ZhcnMob3B0aW9ucyk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxuY3NzVmFycy5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvdW50ZXJzLmpvYiA9IDA7XG4gICAgY291bnRlcnMuZ3JvdXAgPSAwO1xuICAgIGNzc1ZhcnNJc1J1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3NzVmFyc09ic2VydmVyKSB7XG4gICAgICAgIGNzc1ZhcnNPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIGNzc1ZhcnNPYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICAgIGNzc1ZhcnNTcmNOb2RlQ291bnQgPSAwO1xuICAgIGRlYm91bmNlVGltZXIgPSBudWxsO1xuICAgIGlzU2hhZG93RE9NUmVhZHkgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBwcm9wIGluIHZhcmlhYmxlU3RvcmUpIHtcbiAgICAgICAgdmFyaWFibGVTdG9yZVtwcm9wXSA9IHt9O1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGFkZE11dGF0aW9uT2JzZXJ2ZXIoc2V0dGluZ3MpIHtcbiAgICBmdW5jdGlvbiBpc0Rpc2FibGVkKG5vZGUpIHtcbiAgICAgICAgdmFyIGlzRGlzYWJsZWRBdHRyID0gaXNMaW5rKG5vZGUpICYmIG5vZGUuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHZhciBpc0Rpc2FibGVkU2hlZXQgPSAobm9kZS5zaGVldCB8fCB7fSkuZGlzYWJsZWQ7XG4gICAgICAgIHJldHVybiBpc0Rpc2FibGVkQXR0ciB8fCBpc0Rpc2FibGVkU2hlZXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzTGluayhub2RlKSB7XG4gICAgICAgIHZhciBpc1N0eWxlc2hlZXQgPSBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlua1wiICYmIChub2RlLmdldEF0dHJpYnV0ZShcInJlbFwiKSB8fCBcIlwiKS5pbmRleE9mKFwic3R5bGVzaGVldFwiKSAhPT0gLTE7XG4gICAgICAgIHJldHVybiBpc1N0eWxlc2hlZXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU3R5bGUobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInN0eWxlXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmFsaWRBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbikge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIgJiYgaXNMaW5rKG11dGF0aW9uLnRhcmdldCkgJiYgIWlzRGlzYWJsZWQobXV0YXRpb24udGFyZ2V0KSkge1xuICAgICAgICAgICAgdmFyIGlzRW5hYmxlZE11dGF0aW9uID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gXCJkaXNhYmxlZFwiO1xuICAgICAgICAgICAgdmFyIGlzSHJlZk11dGF0aW9uID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gXCJocmVmXCI7XG4gICAgICAgICAgICB2YXIgaXNTa2lwTm9kZSA9IG11dGF0aW9uLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNzc3ZhcnNcIikgPT09IFwic2tpcFwiO1xuICAgICAgICAgICAgdmFyIGlzU3JjTm9kZSA9IG11dGF0aW9uLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNzc3ZhcnNcIikgPT09IFwic3JjXCI7XG4gICAgICAgICAgICBpZiAoaXNFbmFibGVkTXV0YXRpb24pIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gIWlzU2tpcE5vZGUgJiYgIWlzU3JjTm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNIcmVmTXV0YXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTa2lwTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbi50YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1jc3N2YXJzXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNTcmNOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Q3NzTm9kZXMoc2V0dGluZ3Mucm9vdEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYWxpZFN0eWxlVGV4dE11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XG4gICAgICAgICAgICB2YXIgaXNTdHlsZUVsbSA9IGlzU3R5bGUobXV0YXRpb24udGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciBpc091dE5vZGUgPSBtdXRhdGlvbi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jc3N2YXJzXCIpID09PSBcIm91dFwiO1xuICAgICAgICAgICAgaXNWYWxpZCA9IGlzU3R5bGVFbG0gJiYgIWlzT3V0Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYWxpZEFkZE11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gW10uc2xpY2UuY2FsbChtdXRhdGlvbi5hZGRlZE5vZGVzKS5zb21lKChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzRWxtID0gbm9kZS5ub2RlVHlwZSA9PT0gMTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzQXR0ciA9IGlzRWxtICYmIG5vZGUuaGFzQXR0cmlidXRlKFwiZGF0YS1jc3N2YXJzXCIpO1xuICAgICAgICAgICAgICAgIHZhciBpc1N0eWxlV2l0aFZhcnMgPSBpc1N0eWxlKG5vZGUpICYmIHJlZ2V4LmNzc1ZhcnMudGVzdChub2RlLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9ICFoYXNBdHRyICYmIChpc0xpbmsobm9kZSkgfHwgaXNTdHlsZVdpdGhWYXJzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZCAmJiAhaXNEaXNhYmxlZChub2RlKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYWxpZFJlbW92ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gW10uc2xpY2UuY2FsbChtdXRhdGlvbi5yZW1vdmVkTm9kZXMpLnNvbWUoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNFbG0gPSBub2RlLm5vZGVUeXBlID09PSAxO1xuICAgICAgICAgICAgICAgIHZhciBpc091dE5vZGUgPSBpc0VsbSAmJiBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtY3NzdmFyc1wiKSA9PT0gXCJvdXRcIjtcbiAgICAgICAgICAgICAgICB2YXIgaXNTcmNOb2RlID0gaXNFbG0gJiYgbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNzc3ZhcnNcIikgPT09IFwic3JjXCI7XG4gICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBpc1NyY05vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGlzU3JjTm9kZSB8fCBpc091dE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFHcm91cCA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jc3N2YXJzLWdyb3VwXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3JwaGFuTm9kZSA9IHNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNzc3ZhcnMtZ3JvdXA9XCInLmNvbmNhdChkYXRhR3JvdXAsICdcIl0nKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1NyY05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Q3NzTm9kZXMoc2V0dGluZ3Mucm9vdEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcnBoYW5Ob2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcnBoYW5Ob2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3JwaGFuTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuICAgIGlmICghd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY3NzVmFyc09ic2VydmVyKSB7XG4gICAgICAgIGNzc1ZhcnNPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIGNzc1ZhcnNPYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICAgIGNzc1ZhcnNPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChmdW5jdGlvbihtdXRhdGlvbnMpIHtcbiAgICAgICAgdmFyIGhhc1ZhbGlkTXV0YXRpb24gPSBtdXRhdGlvbnMuc29tZSgoZnVuY3Rpb24obXV0YXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pIHx8IGlzVmFsaWRTdHlsZVRleHRNdXRhdGlvbihtdXRhdGlvbikgfHwgaXNWYWxpZEFkZE11dGF0aW9uKG11dGF0aW9uKSB8fCBpc1ZhbGlkUmVtb3ZlTXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChoYXNWYWxpZE11dGF0aW9uKSB7XG4gICAgICAgICAgICBjc3NWYXJzKHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgIH0pKTtcbiAgICBjc3NWYXJzT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbIFwiZGlzYWJsZWRcIiwgXCJocmVmXCIgXSxcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNzc1ZhcnNEZWJvdW5jZWQoc2V0dGluZ3MpIHtcbiAgICB2YXIgZGVsYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDEwMDtcbiAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lcik7XG4gICAgZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXR0aW5ncy5fX2JlbmNobWFyayA9IG51bGw7XG4gICAgICAgIGNzc1ZhcnMoc2V0dGluZ3MpO1xuICAgIH0pLCBkZWxheSk7XG59XG5cbmZ1bmN0aW9uIGZpeEtleWZyYW1lcyhyb290RWxlbWVudCkge1xuICAgIHZhciBhbmltYXRpb25OYW1lUHJvcCA9IFsgXCJhbmltYXRpb24tbmFtZVwiLCBcIi1tb3otYW5pbWF0aW9uLW5hbWVcIiwgXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lXCIgXS5maWx0ZXIoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlbcHJvcF07XG4gICAgfSkpWzBdO1xuICAgIGlmIChhbmltYXRpb25OYW1lUHJvcCkge1xuICAgICAgICB2YXIgYWxsTm9kZXMgPSByb290RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIik7XG4gICAgICAgIHZhciBrZXlmcmFtZU5vZGVzID0gW107XG4gICAgICAgIHZhciBuYW1lTWFya2VyID0gXCJfX0NTU1ZBUlNQT05ZRklMTC1LRVlGUkFNRVNfX1wiO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYWxsTm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gYWxsTm9kZXNbaV07XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSlbYW5pbWF0aW9uTmFtZVByb3BdO1xuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbk5hbWUgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVthbmltYXRpb25OYW1lUHJvcF0gKz0gbmFtZU1hcmtlcjtcbiAgICAgICAgICAgICAgICBrZXlmcmFtZU5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdm9pZCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfbGVuID0ga2V5ZnJhbWVOb2Rlcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgdmFyIG5vZGVTdHlsZSA9IGtleWZyYW1lTm9kZXNbX2ldLnN0eWxlO1xuICAgICAgICAgICAgbm9kZVN0eWxlW2FuaW1hdGlvbk5hbWVQcm9wXSA9IG5vZGVTdHlsZVthbmltYXRpb25OYW1lUHJvcF0ucmVwbGFjZShuYW1lTWFya2VyLCBcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZml4UmVsYXRpdmVDc3NVcmxzKGNzc1RleHQsIGJhc2VVcmwpIHtcbiAgICB2YXIgY3NzVXJscyA9IGNzc1RleHQucmVwbGFjZShyZWdleC5jc3NDb21tZW50cywgXCJcIikubWF0Y2gocmVnZXguY3NzVXJscykgfHwgW107XG4gICAgY3NzVXJscy5mb3JFYWNoKChmdW5jdGlvbihjc3NVcmwpIHtcbiAgICAgICAgdmFyIG9sZFVybCA9IGNzc1VybC5yZXBsYWNlKHJlZ2V4LmNzc1VybHMsIFwiJDFcIik7XG4gICAgICAgIHZhciBuZXdVcmwgPSBnZXRGdWxsVXJsKG9sZFVybCwgYmFzZVVybCk7XG4gICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoY3NzVXJsLCBjc3NVcmwucmVwbGFjZShvbGRVcmwsIG5ld1VybCkpO1xuICAgIH0pKTtcbiAgICByZXR1cm4gY3NzVGV4dDtcbn1cblxuZnVuY3Rpb24gZml4VmFyTmFtZXMoKSB7XG4gICAgdmFyIHZhck9iaiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIHJlTGVhZGluZ0h5cGhlbnMgPSAvXi17Mn0vO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YXJPYmopLnJlZHVjZSgoZnVuY3Rpb24ob2JqLCB2YWx1ZSkge1xuICAgICAgICB2YXIga2V5ID0gcmVMZWFkaW5nSHlwaGVucy50ZXN0KHZhbHVlKSA/IHZhbHVlIDogXCItLVwiLmNvbmNhdCh2YWx1ZS5yZXBsYWNlKC9eLSsvLCBcIlwiKSk7XG4gICAgICAgIG9ialtrZXldID0gdmFyT2JqW3ZhbHVlXTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9KSwge30pO1xufVxuXG5mdW5jdGlvbiBnZXRGdWxsVXJsKHVybCkge1xuICAgIHZhciBiYXNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBsb2NhdGlvbi5ocmVmO1xuICAgIHZhciBkID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpO1xuICAgIHZhciBiID0gZC5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKTtcbiAgICB2YXIgYSA9IGQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZC5oZWFkLmFwcGVuZENoaWxkKGIpO1xuICAgIGQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICBiLmhyZWYgPSBiYXNlO1xuICAgIGEuaHJlZiA9IHVybDtcbiAgICByZXR1cm4gYS5ocmVmO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lU3RhbXAoKSB7XG4gICAgcmV0dXJuIGlzQnJvd3NlciAmJiAod2luZG93LnBlcmZvcm1hbmNlIHx8IHt9KS5ub3cgPyB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgOiAobmV3IERhdGUpLmdldFRpbWUoKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRDc3NOb2Rlcyhyb290RWxlbWVudCkge1xuICAgIHZhciByZXNldERPTVZhcmlhYmxlU3RvcmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIHZhciByZXNldE5vZGVzID0gW10uc2xpY2UuY2FsbChyb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jc3N2YXJzPVwic2tpcFwiXSxbZGF0YS1jc3N2YXJzPVwic3JjXCJdJykpO1xuICAgIHJlc2V0Tm9kZXMuZm9yRWFjaCgoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNzc3ZhcnNcIiwgXCJcIik7XG4gICAgfSkpO1xuICAgIGlmIChyZXNldERPTVZhcmlhYmxlU3RvcmUpIHtcbiAgICAgICAgdmFyaWFibGVTdG9yZS5kb20gPSB7fTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNzc1ZhcnM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MtdmFycy1wb255ZmlsbC5lc20uanMubWFwXG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciB0cmltbWVkRW5kSW5kZXggPSByZXF1aXJlKCcuL190cmltbWVkRW5kSW5kZXgnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUcmltO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCJ2YXIgYmFzZVRyaW0gPSByZXF1aXJlKCcuL19iYXNlVHJpbScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7QUN4R0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTs7Ozs7Ozs7Ozs7O0FDbGVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM2lEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9