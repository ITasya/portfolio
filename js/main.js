"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Использование addEventListener на старых версиях
if (!Element.prototype.addEventListener) {
  var runListeners = function runListeners(oEvent) {
    if (!oEvent) {
      oEvent = window.event;
    }

    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) {
          oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent);
        }

        break;
      }
    }
  };

  var oListeners = {};

  Element.prototype.addEventListener = function (sEventType, fListener
  /*, useCapture (will be ignored!) */
  ) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];

      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) {
          nElIdx = iElId;
          break;
        }
      }

      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];

        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }

        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) {
            return;
          }
        }

        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = {
        aEls: [this],
        aEvts: [[fListener]]
      };
      this["on" + sEventType] = runListeners;
    }
  };

  Element.prototype.removeEventListener = function (sEventType, fListener
  /*, useCapture (will be ignored!) */
  ) {
    if (!oListeners.hasOwnProperty(sEventType)) {
      return;
    }

    var oEvtListeners = oListeners[sEventType];

    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        nElIdx = iElId;
        break;
      }
    }

    if (nElIdx === -1) {
      return;
    }

    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) {
        aElListeners.splice(iLstId, 1);
      }
    }
  };
} // InputMask
//const { src } = require("gulp");
//const { active } = require("browser-sync");
//const swiperBundleMin = require("./swiper-bundle.min");


if (document.querySelectorAll('input[type="tel"]')) {
  var inputs = document.querySelectorAll('input[type="tel"]');
  var im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputs);
}

if (document.querySelectorAll('.item-apartment-aboutTheObject__input')) {
  var inputs1 = document.querySelectorAll('.item-apartment-aboutTheObject__input');
  inputs1.forEach(function (el) {
    var im1 = new Inputmask('99:99:9999999:99');
    im1.mask(el);
  });
}

if (document.querySelectorAll('.input-card')) {
  var inputs2 = document.querySelectorAll('.input-card');
  inputs2.forEach(function (el) {
    var im2 = new Inputmask('9999:9999:9999:9999');
    im2.mask(el);
  });
}

var contactsInput = document.querySelectorAll('.contacts-apartment__input');
var cadastrialNumber = document.querySelectorAll('.item-apartment-aboutTheObject__input');
var apartmentBtn = document.querySelectorAll('.apartment__bt');

if (apartmentBtn) {
  apartmentBtn.forEach(function (el) {
    el.addEventListener('click', function (e) {
      apartmentBtn.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
}

if (contactsInput) {
  contactsInput.forEach(function (el) {
    el.addEventListener('input', function (evt) {
      var value = evt.target.value;

      if (value.length >= 8) {
        el.parentElement.classList.add('active');
      } else {
        el.parentElement.classList.remove('active');
      }
    });
  });
}

if (cadastrialNumber) {
  cadastrialNumber.forEach(function (el) {
    el.addEventListener('input', function (evt) {
      var value = evt.target.value;

      if (value.length >= 11) {
        el.parentElement.classList.add('active');
      } else {
        el.parentElement.classList.remove('active');
      }
    });
  });
}

var itemPromotionSelection = document.querySelectorAll('.item-promotionSelection');

if (itemPromotionSelection) {
  itemPromotionSelection.forEach(function (el) {
    var promotionSelectionInput = el.querySelector('.item-promotionSelection__input');
    var promotionSelectionChoice = el.querySelector('.item-promotionSelection__choice');
    promotionSelectionInput.addEventListener('input', function (evt) {
      var value = evt.target.value;

      if (value.length >= 1) {
        promotionSelectionChoice.checked = true;
        promotionSelectionInput.parentElement.classList.add('active');
      } else {
        promotionSelectionChoice.checked = false;
        promotionSelectionInput.parentElement.classList.remove('active');
      }
    });
  });
}

function ValidPhone() {
  var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  var myPhone = document.getElementById('phone').value;
  var valid = re.test(myPhone);
  if (valid) document.getElementById('done').style.display = 'flex';else {
    document.getElementById('done').style.display = 'none';
  }
  return valid;
} // Burger menu


var menuNavToggle = document.querySelector('.nav-toggle');
var menuNavToggleRes = document.getElementById('.nav_toggleResults');
var navMenu = document.querySelector('.body-header');
var navMenuItem = document.querySelectorAll('.nav-menu-item');
var closeNavMenu = document.getElementById('close-nav-menu');
var wrapperResult = document.querySelector('.wrapper-result');
var bodyHeaderMain = document.querySelector('.body-headerMain');
var wrapper = document.querySelector('.wrapper');
var navToggleMain = document.querySelector('.nav-toggleMain');
var navClose = document.querySelector('.nav-close');

if (navToggleMain) {
  navToggleMain.addEventListener('click', function (e) {
    bodyHeaderMain.classList.add('active');
    wrapperResult.classList.add('active');
    document.body.classList.add('active');
    navClose.classList.add('active');
  });
  navClose.addEventListener('click', function (e) {
    navClose.classList.remove('active');
    bodyHeaderMain.classList.remove('active');
    wrapperResult.classList.remove('active');
    document.body.classList.remove('active');
  });
  closeNavMenu.addEventListener('click', function (e) {
    navClose.classList.remove('active');
    bodyHeaderMain.classList.remove('active');
    wrapperResult.classList.remove('active');
    document.body.classList.remove('active');
  });
}

var headerNav = document.querySelector('.body-headerMain__nav');

if (menuNavToggle) {
  menuNavToggle.addEventListener('click', function (e) {
    e.preventDefault(); //menu.classList.toggle('active')

    navMenu.classList.add('active');
    wrapper.classList.add('active');

    var _iterator = _createForOfIteratorHelper(navMenuItem),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;
        elem.classList.add('active');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  closeNavMenu.addEventListener("click", function (e) {
    navMenu.classList.remove('active');
    wrapper.classList.remove('active');

    var _iterator2 = _createForOfIteratorHelper(navMenuItem),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var elem = _step2.value;
        elem.classList.remove('active');
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
} //Ограничение на ввод чисел в type - number


if (document.querySelectorAll('.item-price__input')) {
  document.querySelectorAll('.item-price__input').forEach(function (elem) {
    elem.oninput = function () {
      if (elem.value.length > 7) elem.value = elem.value.substr(0, 7);
    };
  });
}

if (document.querySelectorAll('.cart-input--two')) {
  document.querySelectorAll('.cart-input--two').forEach(function (elem) {
    elem.oninput = function () {
      if (elem.value.length > 2) elem.value = elem.value.substr(0, 2);
    };
  });
}

if (document.querySelectorAll('.cart-input--three')) {
  document.querySelectorAll('.cart-input--three').forEach(function (elem) {
    elem.oninput = function () {
      if (elem.value.length > 3) elem.value = elem.value.substr(0, 3);
    };
  });
} // sleep password


function showPassword() {
  var btn = document.querySelector('.form-password__btn');
  var input = document.querySelector('.form-password__input');
  var btnProverka = document.querySelector('.form-password__btn-proverka');
  var inputProverka = document.querySelector('.form-password__input-proverka');
  btn.addEventListener('click', function () {
    btn.classList.toggle('active');

    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  });
  btnProverka.addEventListener('click', function () {
    btnProverka.classList.toggle('active');

    if (inputProverka.getAttribute('type') === 'password') {
      inputProverka.setAttribute('type', 'text');
    } else {
      inputProverka.setAttribute('type', 'password');
    }
  });
}

function showPasswordSignUp() {
  var btn = document.querySelector('.form-password__btn');
  var input = document.querySelector('.form-password__input');
  btn.addEventListener('click', function () {
    btn.classList.toggle('active');

    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  });
}

if (document.querySelector('.form-password__btn') && document.querySelector('.form-password__btn-proverka')) {
  showPassword();
} else if (document.querySelector('.form-password__btn')) {
  showPasswordSignUp();
} //----------------------------------------------ФИЛЬТР---------------------------------------------------------------------------------------------
//---------------------------------DROPDOWN----------------------------------------------------------------------------------------------------------------


var itemResult = document.querySelectorAll('.item-results');
var sellerComparison = document.querySelectorAll('.seller-comparison');

if (itemResult) {
  itemResult.forEach(function (el) {
    var showContact = el.querySelector('.show-contact');

    if (showContact) {
      showContact.addEventListener('click', function (e) {
        showContact.classList.add('active');
      });
    }
  });
}

var product = document.querySelectorAll('.product');

if (product) {
  product.forEach(function (el) {
    var favourites = el.querySelector('.favourite');
    var add = el.querySelector('.add');
    var more = el.querySelector('.more');
    var moreMenu = el.querySelector('.more-menu');

    if (more) {
      more.addEventListener('click', function (e) {
        more.classList.toggle('active');
        moreMenu.classList.toggle('active');
      });
    }
  });
}

if (sellerComparison) {
  sellerComparison.forEach(function (el) {
    var showContact = el.querySelectorAll('.show-contact');

    if (showContact) {
      showContact.forEach(function (el) {
        el.addEventListener('click', function (e) {
          el.classList.add('active');
        });
      });
    }
  });
}

var secondaryItem = document.querySelectorAll('.secondary__item');

if (secondaryItem) {
  secondaryItem.forEach(function (el) {
    var itemFavourites = el.querySelector('.item-body__favourites');

    if (itemFavourites) {
      var favourite = itemFavourites.querySelectorAll('.favourite');
      favourite.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          el.parentElement.classList.toggle('active');
        });
      });
    }
  });
}

var compareItem = document.querySelectorAll('.item-compare');

if (compareItem) {
  compareItem.forEach(function (el) {
    var itemFavourites = el.querySelector('.item-body__favourites');

    if (itemFavourites) {
      var favourite = itemFavourites.querySelectorAll('.favourite');
      favourite.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          el.parentElement.classList.toggle('active');
        });
      });
    }
  });
}

var newBuildingsItem = document.querySelectorAll('.newBuildings__item');

if (newBuildingsItem) {
  newBuildingsItem.forEach(function (el) {
    var itemFavourites = el.querySelector('.item-body__favourites');

    if (itemFavourites) {
      var favourite = itemFavourites.querySelectorAll('.favourite');
      favourite.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          el.parentElement.classList.toggle('active');
        });
      });
    }
  });
}

var tabsMainBtn = document.getElementById('tabsmainBtn');
var tabsMainBlock = document.querySelector('.tabs-main__block');
var tabsMainItems = document.querySelectorAll('.tabs-main__btn');

if (tabsMainBtn) {
  tabsMainBtn.addEventListener('click', function (e) {
    tabsMainBlock.classList.toggle('open');
    tabsMainItems.forEach(function (el) {
      el.addEventListener('click', function (e) {
        tabsMainBtn.innerText = el.innerText;
        tabsMainBlock.classList.remove('open');
      });
    });
  });
} // Скролл шапки


var height = '334';
var fixedFilter = document.querySelector('.headerResult');
var mainResults = document.querySelector('.main-result');

if (fixedFilter) {
  //const filterHeight = fixedFilter.offsetHeight;
  //const mainHeight = mainResults.offsetHeight;
  window.addEventListener('scroll', function () {
    var scrollDistance = window.scrollY;

    if (scrollDistance >= height) {
      fixedFilter.classList.add('fixed');
      mainResults.style.marginTop = "{filterHeight}px";
    } else {
      fixedFilter.classList.remove('fixed');
      mainResults.style.marginTop = null;
    }
  });
} //TO COMPARE скролл сравнения


var compareFixedheight = '390';
var fixedCompareItems = document.querySelector('.compare__fixed');
var comparisonTitle = document.querySelector('.comparison__title');

if (fixedCompareItems) {
  var compareHeight = fixedCompareItems.offsetHeight;
  var comparisonTitleHeight = comparisonTitle.offsetHeight;
  window.addEventListener('scroll', function () {
    var scrollDistance = window.scrollY;

    if (scrollDistance >= compareFixedheight) {
      fixedCompareItems.classList.add('fixed');
      comparisonTitle.style.marginTop = "".concat(compareHeight, "px");
    } else {
      fixedCompareItems.classList.remove('fixed');
      comparisonTitle.style.marginTop = null;
    }
  });
}

var publicationTimeAccordionFlat = document.getElementById('publicationTimeAccordion-flat');
var publicationTimeItemsFlat = document.querySelector('.publicationTime__items-flat');
var publicationTimeFlat = document.getElementById('publicationTime-flat');

if (publicationTimeAccordionFlat) {
  var menu = publicationTimeItemsFlat.querySelector('.accordion-menu');

  var _options = publicationTimeItemsFlat.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionFlat.addEventListener('click', function (e) {
    menu.classList.toggle('open');
  });

  _options.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeFlat.innerText = option.innerText;
      menu.classList.remove('open');
      option.parentElement.parentElement.classList.remove('active');

      _options.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

;
var publicationTimeAccordionHome = document.getElementById('publicationTimeAccordion-home');
var publicationTimeItemsHome = document.querySelector('.publicationTime__items-home');
var publicationTimeHome = document.getElementById('publicationTime-home');

if (publicationTimeAccordionHome) {
  var _menu = publicationTimeItemsHome.querySelector('.accordion-menu');

  var _options2 = publicationTimeItemsHome.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionHome.addEventListener('click', function (e) {
    _menu.classList.toggle('open');
  });

  _options2.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeHome.innerText = option.innerText;

      _menu.classList.remove('open');

      option.parentElement.parentElement.classList.remove('active');

      _options2.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

;
var publicationTimeAccordionRoom = document.getElementById('publicationTimeAccordion-room');
var publicationTimeItemsRoom = document.querySelector('.publicationTime__items-room');
var publicationTimeRoom = document.getElementById('publicationTime-room');

if (publicationTimeAccordionRoom) {
  var _menu2 = publicationTimeItemsRoom.querySelector('.accordion-menu');

  var _options3 = publicationTimeItemsRoom.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionRoom.addEventListener('click', function (e) {
    _menu2.classList.toggle('open');
  });

  _options3.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeRoom.innerText = option.innerText;

      _menu2.classList.remove('open');

      option.parentElement.parentElement.classList.remove('active');

      _options3.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

;
var publicationTimeAccordionHomeBuy = document.getElementById('publicationTimeAccordion-home-buy');
var publicationTimeItemsHomeBuy = document.querySelector('.publicationTime__items-home--buy');
var publicationTimeHomeBuy = document.getElementById('publicationTime-home-buy');

if (publicationTimeAccordionHomeBuy) {
  var _menu3 = publicationTimeItemsHomeBuy.querySelector('.accordion-menu');

  var _options4 = publicationTimeItemsHomeBuy.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionHomeBuy.addEventListener('click', function (e) {
    _menu3.classList.toggle('open');
  });

  _options4.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeHomeBuy.innerText = option.innerText;

      _menu3.classList.remove('open');

      option.parentElement.parentElement.classList.remove('active');

      _options4.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

;
var publicationTimeAccordionFlatBuy = document.getElementById('publicationTimeAccordion-flat-buy');
var publicationTimeItemsFlatBuy = document.querySelector('.publicationTime__items-flat--buy');
var publicationTimeFlatBuy = document.getElementById('publicationTime-flat-buy');

if (publicationTimeAccordionFlatBuy) {
  var _menu4 = publicationTimeItemsFlatBuy.querySelector('.accordion-menu');

  var _options5 = publicationTimeItemsFlatBuy.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionFlatBuy.addEventListener('click', function (e) {
    _menu4.classList.toggle('open');
  });

  _options5.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeFlatBuy.innerText = option.innerText;

      _menu4.classList.remove('open');

      option.parentElement.parentElement.classList.remove('active');

      _options5.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

;
var publicationTimeAccordionRoomBuy = document.getElementById('publicationTimeAccordion-room-buy');
var publicationTimeItemsRoomBuy = document.querySelector('.publicationTime__items-room--buy');
var publicationTimeRoomBuy = document.getElementById('publicationTime-room-buy');

if (publicationTimeAccordionRoomBuy) {
  var _menu5 = publicationTimeItemsRoomBuy.querySelector('.accordion-menu');

  var _options6 = publicationTimeItemsRoomBuy.querySelectorAll('.accordion-menu__item');

  publicationTimeAccordionRoomBuy.addEventListener('click', function (e) {
    _menu5.classList.toggle('open');
  });

  _options6.forEach(function (option) {
    option.addEventListener('click', function (e) {
      publicationTimeRoomBuy.innerText = option.innerText;

      _menu5.classList.remove('open');

      option.parentElement.parentElement.classList.remove('active');

      _options6.forEach(function (option) {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
}

; //--------------------------------switcher------------------------------------------------------------

var switcherItems = document.querySelectorAll('.switcher__item');
var switcherBuyRoom = document.querySelectorAll('.switcher-buy--room');
var switcherBuyFlat = document.querySelectorAll('.switcher-buy--flat');
var switcherTakeOffFlat = document.querySelectorAll('.switcher-takeOff--flat');
var switcherTakeOffRoom = document.querySelectorAll('.switcher-takeOff--room');
var switcherBuy = document.querySelectorAll('.switcher-buy');
var switcherTakeOff = document.querySelectorAll('.switcher-takeOff');
var switcherMortgage = document.querySelectorAll('.switcher-mortgage');

if (switcherBuy) {
  switcherBuy.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherBuy.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherTakeOff) {
  switcherTakeOff.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherTakeOff.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherBuyFlat) {
  switcherBuyFlat.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherBuyFlat.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherBuyRoom) {
  switcherBuyRoom.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherBuyRoom.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherTakeOffFlat) {
  switcherTakeOffFlat.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherTakeOffFlat.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherTakeOffRoom) {
  switcherTakeOffRoom.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherTakeOffRoom.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
}

if (switcherMortgage) {
  switcherMortgage.forEach(function (switcherItem) {
    switcherItem.addEventListener('click', function () {
      switcherItem.classList.add('active');
      switcherMortgage.forEach(function (switcherItem) {
        switcherItem.classList.remove('active');
      });
      switcherItem.classList.add('active');
    });
  });
} //---------------------------------------------------POPUP-----------------------------------------------------------------------------------------


var regionBtn = document.querySelector('.main__subtitle');
var popUp = document.querySelector('.popUp');
var popUpClose = document.querySelector('.popUp-filter__close');
var popUpSearch = document.getElementById('search-item');
var regionList = document.getElementById('list-region');
var regions = document.querySelectorAll('.region__title');
var localBtn = document.getElementById('localBtn');
var areas = document.querySelectorAll('.area-popUp__title');

if (regionBtn && popUpClose) {
  popUpClose.addEventListener("click", function (e) {
    hideModal();
  });
  regions.forEach(function (region) {
    region.addEventListener('click', function () {
      popUpSearch.value = region.innerText;
    });
  });
  areas.forEach(function (area) {
    area.addEventListener('click', function () {
      popUpSearch.value = area.innerText;
    });
  });

  if (popUpSearch.value != " ") {
    localBtn.addEventListener('click', function (e) {
      e.preventDefault();
      regionBtn.innerText = popUpSearch.value;
    });
  }
} //-----------------------------------------------TABS-----------------------------------------------------------------------------------------------------


var parameters = document.querySelectorAll('.filter-btn');
var parametersClose = document.getElementById('modal-parameters-close');
var modalParameters = document.querySelector('.modal-parameters');
var tabsMain = document.getElementById('tabs-main');
var contenttabsButton = document.querySelector('.content-tabs__button');
var modalBtnSave = document.querySelector('.modal-btn-save');
var mainBlock = document.querySelector('.main__block');
var after = document.querySelector('.after');
var filterContent = document.querySelectorAll('.filter-parameters');
var modalClose = document.querySelectorAll('.modal-close');

if (modalClose) {
  modalClose.forEach(function (el) {
    el.addEventListener('click', function (e) {
      mainBlock.after(tabsMain);
      tabsMain.after(contenttabsButton);
      modalParameters.classList.remove('active');
      document.body.classList.remove('active');
    });
  });
}

if (parameters && parametersClose) {
  parameters.forEach(function (parameter) {
    parameter.addEventListener('click', function (e) {
      modalParameters.classList.add('active');
      document.body.classList.add('active');
      after.before(tabsMain);
      modalBtnSave.after(contenttabsButton);
    });
  });
  parametersClose.addEventListener('click', function (e) {
    mainBlock.after(tabsMain);
    tabsMain.after(contenttabsButton);
    modalParameters.classList.remove('active');
    document.body.classList.remove('active');
  });
}

var tabs = document.querySelector('.tabs-main');
var tabsBtn = document.querySelectorAll('.tabs-main__btn');
var tabsContent = document.querySelectorAll('.tabs-main__content');
var filterParametersTakeOff = document.querySelectorAll('.filter-parameters-takeOff');
var filterParametersBuy = document.querySelectorAll('.filter-parameters-buy');
var options = document.querySelectorAll('.dropdown-menu__item');
var apartmenBody = document.querySelector('.apartment__body');
var apartmentTabsContent = document.querySelectorAll('.apartment__tabs-content');
var tabsLink = document.querySelectorAll('.tabs-link');
var itemTabs = document.querySelectorAll('.apartment__item-tabs');

if (apartmenBody) {
  apartmenBody.addEventListener('click', function (e) {
    if (e.target.classList.contains('tabs-link')) {
      var tabsPath = e.target.dataset.sellPath;
      sellHandler(tabsPath);
    }
  });
}

var sellHandler = function sellHandler(path) {
  tabsLink.forEach(function (el) {
    el.classList.remove('active');
  });
  itemTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-sell-path=\"".concat(path, "\"]")).classList.add('active');
  apartmentTabsContent.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-sell-target=\"".concat(path, "\"]")).classList.add('active');
};

var tabsHandler = function tabsHandler(path) {
  tabsBtn.forEach(function (el) {
    el.classList.remove('tabs-main__btn--active');
  });
  document.querySelector("[data-tabs-path=\"".concat(path, "\"]")).classList.add('tabs-main__btn--active');
  tabsContent.forEach(function (el) {
    el.classList.remove('tabs-main__content--active');
  });
  document.querySelector("[data-tabs-target=\"".concat(path, "\"]")).classList.add('tabs-main__content--active');
};

var filterHandler = function filterHandler(path) {
  filterContent.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-filter-target=\"".concat(path, "\"]")).classList.add('active');
}; //------------------------------СЛАЙДЕР-----------------------------------------------------------


if (document.querySelector('.slide-container')) {
  new Swiper('.slide-container', {
    //slidesPerGroup:4,
    pagination: {
      el: '.newBuildings-pagination',
      clickable: true,
      dynamicBullets: true
    },
    grabCursor: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    mousewheel: {
      sensitivity: 1
    },
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    speed: 500,
    breakpoints: {
      950: {
        enabled: true,
        slidesPerView: 4
      },
      566: {
        enabled: true,
        slidesPerView: 2
      },
      460: {
        enabled: true,
        slidesPerView: 1.7
      },
      360: {
        enabled: true,
        slidesPerView: 1.3
      },
      320: {
        enabled: true,
        slidesPerView: 1.1
      }
    }
  });
}

if (document.querySelector('.secondary-container')) {
  new Swiper('.secondary-container', {
    pagination: {
      el: '.secondary-pagination',
      clickable: true,
      dynamicBullets: true
    },
    grabCursor: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    mousewheel: {
      sensitivity: 1
    },
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    speed: 500,
    breakpoints: {
      950: {
        enabled: true,
        slidesPerView: 4
      },
      566: {
        enabled: true,
        slidesPerView: 2
      },
      460: {
        enabled: true,
        slidesPerView: 1.7
      },
      360: {
        enabled: true,
        slidesPerView: 1.3
      },
      320: {
        enabled: true,
        slidesPerView: 1.1
      }
    }
  });
}

var secondarySlide = document.querySelectorAll('.secondary-slide');

if (secondarySlide) {
  secondarySlide.forEach(function (el) {
    var torentSlide = el.querySelector('.torent-container');
    var pagination = el.querySelector('.secondary-pagination');
    new Swiper(torentSlide, {
      pagination: {
        el: pagination,
        clickable: true,
        dynamicBullets: true
      },
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 3,
      watchOverflow: true,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: false,
      speed: 500,
      breakpoints: {
        950: {
          enabled: true,
          slidesPerView: 3
        },
        566: {
          enabled: true,
          slidesPerView: 2
        },
        460: {
          enabled: true,
          slidesPerView: 1.7
        },
        360: {
          enabled: true,
          slidesPerView: 1.3
        },
        320: {
          enabled: true,
          slidesPerView: 1.1
        }
      }
    });
  });
}

if (document.querySelector('.secondary-container-two')) {
  new Swiper('.secondary-container-two', {
    pagination: {
      el: '.secondary-pagination-two',
      clickable: true,
      dynamicBullets: true
    },
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    mousewheel: {
      sensitivity: 1
    },
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    speed: 500,
    breakpoints: {
      950: {
        enabled: true,
        slidesPerView: 4
      },
      566: {
        enabled: true,
        slidesPerView: 2
      },
      460: {
        enabled: true,
        slidesPerView: 1.7
      },
      360: {
        enabled: true,
        slidesPerView: 1.3
      },
      320: {
        enabled: true,
        slidesPerView: 1.1
      }
    }
  });
} //------------------------------RANGE----------------------------------------------------------------------------


var rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [999999]
    }
  });
  var input0 = document.getElementById('input0');
  var input1 = document.getElementById('input1');
  var _inputs = [input0, input1];
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    _inputs[handle].value = Math.round(values[handle]);
  });

  var setRangeSlider = function setRangeSlider(i, value) {
    var arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };

  _inputs.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

var rangeSlider1 = document.getElementById('range-slider1');

if (rangeSlider1) {
  noUiSlider.create(rangeSlider1, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [999999]
    }
  });

  var _input = document.getElementById('input2');

  var _input2 = document.getElementById('input3');

  var _inputs2 = [_input, _input2];
  rangeSlider1.noUiSlider.on('update', function (values, handle) {
    _inputs2[handle].value = Math.round(values[handle]);
  });

  var _setRangeSlider = function _setRangeSlider(i, value) {
    var arr = [null, null];
    arr[i] = value;
    rangeSlider1.noUiSlider.set(arr);
  };

  _inputs2.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      _setRangeSlider(index, e.currentTarget.value);
    });
  });
}

var rangeSlider2 = document.getElementById('range-slider2');

if (rangeSlider2) {
  noUiSlider.create(rangeSlider2, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [999999]
    }
  });

  var _input3 = document.getElementById('input4');

  var _input4 = document.getElementById('input5');

  var _inputs3 = [_input3, _input4];
  rangeSlider2.noUiSlider.on('update', function (values, handle) {
    _inputs3[handle].value = Math.round(values[handle]);
  });

  var _setRangeSlider2 = function _setRangeSlider2(i, value) {
    var arr = [null, null];
    arr[i] = value;
    rangeSlider2.noUiSlider.set(arr);
  };

  _inputs3.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      _setRangeSlider2(index, e.currentTarget.value);
    });
  });
} //------------------------btn-parameters-------------------------------------------------------------------------------
// CheckConveniences


var checkConveniences = document.querySelectorAll('.item-checkbox__checkbox');
var noOptions = document.querySelectorAll('.item-checkbox-no');
var balconyloggiaList = document.querySelector('.balcony-loggia__list');

if (checkConveniences || noOptions) {
  checkConveniences.forEach(function (check) {
    check.addEventListener('change', function (e) {
      if (check.checked) {
        check.parentElement.classList.add('checked');
      } else {
        check.parentElement.classList.remove('checked');
      }

      ;
    });
  });
  noOptions.forEach(function (noOption) {
    noOption.addEventListener('click', function (e) {
      noOption.classList.toggle('checked');
      var checkConveniences1 = noOption.parentElement.querySelectorAll('.item-checkbox__checkbox');

      if (noOption.classList.contains('checked')) {
        checkConveniences1.forEach(function (check) {
          check.checked = false;
          check.parentElement.classList.remove('checked');
          check.parentElement.classList.add('disabled');
        });
      } else {
        checkConveniences1.forEach(function (check) {
          check.parentElement.classList.remove('disabled');
        });
      }
    });
  });
}

if (document.documentElement.clientWidth <= 950) {
  if (document.querySelector('.distance__swiper')) {
    new Swiper('.distance__swiper', {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 2.8,
      watchOverflow: true,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: false,
      speed: 500
    });
  }
} //Height__swiper


if (document.documentElement.clientWidth <= 950) {
  if (document.querySelector('.height__swiper')) {
    new Swiper('.height__swiper', {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 4.4,
      watchOverflow: true,
      spaceBetween: 12,
      slidesPerGroup: 1,
      loop: false,
      speed: 500,
      breakpoints: {
        950: {}
      }
    });
  }
}

if (document.documentElement.clientWidth >= 950) {
  var itemResults = document.querySelectorAll('.item-results');

  if (itemResults) {
    itemResults.forEach(function (el) {
      var resultsSlider = el.querySelector('.image-results_swiper');
      var resultsSlidermini = el.querySelector('.image-mini-slider');
      var imageSliderOne = el.querySelector('.image-results_swiper-one');
      new Swiper(resultsSlider, {
        grabCursor: false,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true
        },
        mousewheel: {
          sensitivity: 1
        },
        slidesPerView: 1,
        watchOverflow: true,
        slidesPerGroup: 1,
        loop: false,
        speed: 500,
        thumbs: {
          swiper: {
            el: resultsSlidermini,
            slidesPerView: 4
          }
        }
      });
      new Swiper(imageSliderOne, {
        grabCursor: false,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true
        },
        mousewheel: {
          sensitivity: 1
        },
        slidesPerView: 1,
        watchOverflow: true,
        slidesPerGroup: 1,
        loop: false,
        speed: 500,
        thumbs: {
          swiper: {
            el: resultsSlidermini,
            slidesPerView: 1
          }
        }
      });
    });
  }
}

if (product) {
  product.forEach(function (el) {
    var productSlider = el.querySelector('.product__swiper');
    var productSlidermini = el.querySelector('.product__swiper-mini');
    new Swiper(productSlider, {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 1,
      watchOverflow: true,
      slidesPerGroup: 1,
      loop: false,
      speed: 500,
      thumbs: {
        swiper: {
          el: productSlidermini,
          slidesPerView: 3
        }
      }
    });
  });
}

var housingComplex = document.querySelector('.housingComplex');

if (housingComplex) {
  var productSlider = housingComplex.querySelectorAll('.product__swiper');
  productSlider.forEach(function (el) {
    new Swiper(el, {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 1,
      watchOverflow: true,
      slidesPerGroup: 1,
      loop: false,
      speed: 500
    });
  });
}
/*let progressBar = document.querySelector('.selection__content');
let valueProgress = document.querySelector('.selection__value');

let progressValue = 0;
let progressEndValue = 65;
let speed = 50;



let progress = setInterval(()=>{
    progressValue++;
    valueProgress.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
    )`;
    if(progressValue == progressEndValue){
      clearInterval(progress);
    }
}, speed);

*/
//year__swiper


if (document.documentElement.clientWidth <= 950) {
  if (document.querySelector('.year__swiper')) {
    new Swiper('.year__swiper', {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 4.4,
      watchOverflow: true,
      spaceBetween: 12,
      slidesPerGroup: 1,
      loop: false,
      speed: 500
    });
  }
} //ACCORDION


var accordionBtns = document.querySelectorAll('.accordion__title');

if (accordionBtns) {
  accordionBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      btn.parentElement.classList.toggle('active');
    });
  });
} // SLIDER CAD


var sliderCADBuy = document.getElementById('range-slider-CAD-buy');

if (sliderCADBuy) {
  noUiSlider.create(sliderCADBuy, {
    start: [0, 100],
    tooltips: true,
    connect: false,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    },
    format: {
      to: function to(value) {
        return parseInt(value);
      },
      from: function from(value) {
        return parseInt(value);
      }
    }
  });
}

var sliderCADTakeOff = document.getElementById('range-slider-CAD-takeOff');

if (sliderCADTakeOff) {
  noUiSlider.create(sliderCADTakeOff, {
    start: [0, 100],
    tooltips: true,
    connect: false,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    },
    format: {
      to: function to(value) {
        return parseInt(value);
      },
      from: function from(value) {
        return parseInt(value);
      }
    }
  });
}

if (document.documentElement.clientWidth <= 950) {
  var _itemResults = document.querySelectorAll('.item-results');

  if (_itemResults) {
    _itemResults.forEach(function (el) {
      var topData = el.querySelector('.top-data');
      var itemResultsTitle = el.querySelector('.image-results');
      itemResultsTitle.before(topData);
    });
  }
}

if (document.documentElement.clientWidth <= 767) {
  var productTitle = document.querySelector('.data-product__title');
  var productAfter = document.querySelector('.product-after');

  if (productTitle) {
    productAfter.after(productTitle);
  }
}

var selectionContent = document.querySelectorAll('.selection__content');
var selectionTitleYes = document.querySelector('.selection__value-yes');
var selectionTitleNo = document.querySelector('.selection__value-no');
var yes = 'Да';
var no = 'Нет';

if (selectionContent) {
  selectionContent.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var selectionValue = el.querySelector('.selection__value');
      var selection__per = el.querySelector('.selection__per');
      selectionContent.forEach(function (el) {
        el.classList.remove('active');
        selectionTitleNo.textContent = "".concat(no);
        selectionTitleYes.textContent = "".concat(yes);
      });
      selectionValue.textContent = "".concat(selection__per.style.width = '45%');
      el.classList.add('active');
    });
  });
}

var parametersLink = document.querySelector('.parameters-results__link-menu');
var parametersBlock = document.querySelector('.parameters-results__block-1');
var historyTop = document.querySelector('.history__top');

if (parametersBlock) {
  var parametersItem = parametersBlock.querySelectorAll('.parameters-results__item');
  var parametersContent = parametersBlock.querySelector('.parameters-results__content');
  parametersLink.addEventListener('click', function (e) {
    e.preventDefault();
    parametersLink.classList.toggle('active');
    parametersLink.parentElement.classList.toggle('active');
    parametersContent.classList.toggle('active');
  });
  parametersItem.forEach(function (el) {
    el.addEventListener('click', function (e) {
      parametersLink.innerText = el.innerText;
      parametersLink.classList.remove('active');
      parametersLink.parentElement.classList.remove('active');
      parametersContent.classList.remove('active');
      parametersItem.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
}

if (historyTop) {
  var _parametersItem = historyTop.querySelectorAll('.parameters-results__item');

  var _parametersContent = historyTop.querySelector('.parameters-results__content');

  parametersLink.addEventListener('click', function (e) {
    e.preventDefault();
    parametersLink.classList.toggle('active');
    parametersLink.parentElement.classList.toggle('active');

    _parametersContent.classList.toggle('active');
  });

  _parametersItem.forEach(function (el) {
    el.addEventListener('click', function (e) {
      parametersLink.innerText = el.innerText;
      parametersLink.classList.remove('active');
      parametersLink.parentElement.classList.remove('active');

      _parametersContent.classList.remove('active');

      _parametersItem.forEach(function (el) {
        el.classList.remove('active');
      });

      el.classList.add('active');
    });
  });
}

var saveSearchBtn = document.querySelectorAll('.saveBtn');
var notifySave = document.getElementById('notify-save');
var notifyComparison = document.getElementById('notify-comparison');

if (saveSearchBtn) {
  saveSearchBtn.forEach(function (el) {
    el.addEventListener('click', function (e) {
      notifySave.classList.add('active');
      setTimeout(function (e) {
        notifySave.classList.remove('active');
      }, 2000);
    });
  });
}

var comparisonAdd = document.querySelectorAll('.comparison-add');

if (comparisonAdd) {
  comparisonAdd.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      notifyComparison.classList.add('active');
      setTimeout(function (e) {
        notifyComparison.classList.remove('active');
      }, 2000);
    });
  });
}

var accordionDescription = document.querySelectorAll('.accordion-description');

if (accordionDescription) {
  accordionDescription.forEach(function (el) {
    var titleDescription = el.querySelector('.title-description');
    var accordionBody = el.querySelector('.accordion-description__body');

    if (titleDescription) {
      titleDescription.addEventListener('click', function (e) {
        titleDescription.classList.toggle('active');
        accordionBody.classList.toggle('active');
      });
    }
  });
}

var contactBtn = document.getElementById('contactBtn');

if (contactBtn) {
  contactBtn.addEventListener('click', function (e) {
    contactBtn.classList.add('active');
  });
} // ДИОГРАММА
// ДИОГРАММА


var chartD = document.getElementById('graph1');

if (chartD) {
  var _options7 = {
    chart: {
      height: 200,
      type: "area",
      stacked: !0,
      toolbar: {
        tools: {
          download: false
        }
      },
      zoom: {
        enabled: false
      }
    },
    colors: ["#F7E1FF", "#C1BEE7"],
    dataLabels: {
      enabled: 1,
      formatter: function formatter(val, opts) {
        return val + ' млн';
      },
      textAnchor: 'middle',
      style: {
        fontSize: '14px',
        fontWeight: 'normal',
        colors: ['#151516']
      },
      background: {
        enabled: false
      },
      dropShadow: {
        enabled: false
      },
      offsetX: 0,
      offsetY: -10
    },
    stroke: {
      colors: ['#6A56E8'],
      curve: "straight",
      width: 1,
      dashArray: [0, 4],
      lineCap: "round"
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      },
      strokeDashArray: 0,
      yaxis: {
        lines: {
          show: false
        }
      },
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },
    series: [{
      name: "",
      data: [1.9, 1.7, 2.5]
    }],
    xaxis: {
      type: "month",
      categories: ['1 ноя.', '1 янв.', '1 фев.'],
      axisBorder: {
        show: !0
      },
      axisTicks: {
        show: !0
      },
      labels: {
        style: {
          fontSize: "14px",
          colors: '#6C7F9C'
        }
      }
    },
    yaxis: {
      show: true,
      labels: {
        offsetX: -99,
        show: true
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 2,
        opacityFrom: 1,
        opacityTo: 0.4,
        stops: [0, 100]
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "right"
    }
  };
  var chart = new ApexCharts(document.querySelector("#graph1"), _options7);
  chart.render();
}

var oneSlider = document.getElementById('one-slider');
var termSlider = document.getElementById('term-slider');

if (oneSlider) {
  noUiSlider.create(oneSlider, {
    start: 2430000,
    connect: [true, false],
    step: 1,
    range: {
      'min': 720000,
      'max': 7800000
    },
    format: {
      to: function to(value) {
        return parseInt(value);
      },
      from: function from(value) {
        return parseInt(value);
      }
    }
  });
  var initialPayment = document.getElementById('initialPayment');

  if (initialPayment) {
    oneSlider.noUiSlider.on('update', function (values, handle) {
      initialPayment.innerHTML = values[handle];
    });
  }
}

if (termSlider) {
  noUiSlider.create(termSlider, {
    start: 12,
    connect: [true, false],
    step: 1,
    range: {
      'min': 1,
      'max': 30
    },
    format: {
      to: function to(value) {
        return parseInt(value);
      },
      from: function from(value) {
        return parseInt(value);
      }
    }
  });
  var loanTerm = document.getElementById('loanTerm');

  if (loanTerm) {
    termSlider.noUiSlider.on('update', function (values, handle) {
      loanTerm.innerHTML = values[handle];
    });
  }
}

if (document.documentElement.clientWidth <= 520) {
  var mortgageBuy = document.querySelector('.mortgage-description__top');
  var mortgageDescription = document.querySelector('.mortgage-description');

  if (mortgageBuy) {
    var switcherBody = mortgageBuy.querySelector('.switcher__body');
    var switcherList = mortgageBuy.querySelector('.switcher__list');
    var switcherItem = mortgageBuy.querySelectorAll('.switcher__item');
    switcherItem.forEach(function (el) {
      el.classList.add('swiper-slide');
    });
    switcherBody.classList.add('swiper');
    switcherList.classList.add('swiper-wrapper');
    new Swiper(switcherBody, {
      grabCursor: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mousewheel: {
        sensitivity: 1
      },
      slidesPerView: 1.5,
      watchOverflow: true,
      //slidesPerGroup:1,
      loop: false,
      speed: 500
    });
  }
} //interestRate


var interestRate = document.querySelectorAll('.interestRate');

if (interestRate) {
  interestRate.forEach(function (el) {
    var interestRateItem = el.querySelectorAll('.interestRate__item');
    interestRateItem.forEach(function (el) {
      el.addEventListener('click', function (e) {
        interestRateItem.forEach(function (el) {
          el.classList.remove('active');
        });
        el.classList.add('active');
      });
    });
  });
} // СКРОЛЛ TO COMPARE


var slider = document.querySelector('.scroll');
var sliderImageCompare = document.querySelector('.compare__items');
var itemCompare = document.querySelectorAll('.compare__item');

if (document.querySelectorAll('.compare__items .item-compare').length <= 2) {
  itemCompare.forEach(function (el) {
    el.style.minWidth = '257px';
  });
}

if (slider) {
  var isDown = false;
  var startX;
  var scrollLeft;
  slider.addEventListener('mousedown', function (e) {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', function () {
    isDown = false;
  });
  slider.addEventListener('mouseup', function () {
    isDown = false;
  });
  slider.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 3; //scroll-fast

    slider.scrollLeft = scrollLeft - walk;
  });
  sliderImageCompare.addEventListener('mousedown', function (e) {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = sliderImageCompare.scrollLeft;
  });
  sliderImageCompare.addEventListener('mouseleave', function () {
    isDown = false;
  });
  sliderImageCompare.addEventListener('mouseup', function () {
    isDown = false;
  });
  sliderImageCompare.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 3; //scroll-fast

    sliderImageCompare.scrollLeft = scrollLeft - walk;
  });
  slider.addEventListener('scroll', function (e) {
    sliderImageCompare.scrollTop = slider.scrollTop;
    sliderImageCompare.scrollLeft = slider.scrollLeft;
  });
  sliderImageCompare.addEventListener('scroll', function (e) {
    slider.scrollTop = sliderImageCompare.scrollTop;
    slider.scrollLeft = sliderImageCompare.scrollLeft;
  });
} //history active


var historyItem = document.querySelectorAll('.history__item');

if (historyItem) {
  historyItem.forEach(function (el) {
    el.addEventListener('click', function (e) {
      historyItem.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
} //WEB


var webItem = document.querySelectorAll('.web__item');

if (webItem) {
  webItem.forEach(function (el) {
    el.addEventListener('click', function (e) {
      webItem.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
} // APARTMENT


var apartmentItem = document.querySelectorAll('.apartment__item-tabs');
apartmentItem.forEach(function (el) {
  el.addEventListener('click', function (e) {
    apartmentItem.forEach(function (el) {
      el.classList.remove('active');
    });
    el.classList.add('active');
  });
}); // APARTMENT ACCORDION

var accordionApartment = document.querySelectorAll('.accordion-apartment');

if (accordionApartment) {
  accordionApartment.forEach(function (el) {
    var apartmentItem = el.querySelectorAll('.accordion-apartment__item');
    apartmentItem.forEach(function (acc) {
      var apartmentList = acc.querySelector('.accordion-apartment__list');
      var apartmentTitle = acc.querySelector('.accordion-apartment__title');
      var apartmentLink = acc.querySelectorAll('.accordion-apartment__link');
      apartmentTitle.addEventListener('click', function (e) {
        acc.classList.toggle('active');
        apartmentTitle.classList.toggle('active');
        apartmentList.classList.toggle('active');
      });
      apartmentLink.forEach(function (el) {
        el.addEventListener('click', function (e) {
          apartmentTitle.innerText = el.innerText;
          apartmentTitle.classList.remove('active');
          apartmentList.classList.remove('active');
          acc.classList.remove('active');
          apartmentLink.forEach(function (el) {
            el.classList.remove('active');
          });
          el.classList.add('active');
        });
      });
    });
  });
} // PHOTO-APARTMENT


var flat = document.querySelector('.flat-content');
var home = document.querySelector('.home-content');
var room = document.querySelector('.room-content');

if (flat) {
  var photoApartment = flat.querySelectorAll('.photo-apartment__item');
  photoApartment.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      photoApartment.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
}

if (home) {
  var _photoApartment = home.querySelectorAll('.photo-apartment__item');

  _photoApartment.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      _photoApartment.forEach(function (el) {
        el.classList.remove('active');
      });

      el.classList.add('active');
    });
  });
}

if (room) {
  var _photoApartment2 = room.querySelectorAll('.photo-apartment__item');

  _photoApartment2.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      _photoApartment2.forEach(function (el) {
        el.classList.remove('active');
      });

      el.classList.add('active');
    });
  });
}

var photo = document.querySelectorAll('.photo-apartment');

if (photo) {
  photo.forEach(function (el) {
    var contentPlan = el.querySelector('.content-plan');
    var contentPhoto = el.querySelector('.content-photo');
    var addPhoto = el.querySelector('.addPhoto');
    var addLayout = el.querySelector('.addLayout');
    var addPanorama = el.querySelector('.addPanorama');

    if (addPhoto.classList.contains('active')) {
      contentPhoto.classList.add('active');
    }

    addPhoto.addEventListener('click', function (e) {
      contentPhoto.classList.add('active');
    });
    addLayout.addEventListener('click', function (e) {
      contentPlan.classList.add('active');
    });
  });
} //STEP


var itemStep = document.querySelectorAll('.item-step');

if (itemStep) {
  itemStep.forEach(function (el) {
    var input = el.querySelector('.item-step__input');
    var label = el.querySelector('.item-step__label');
    label.addEventListener('click', function (e) {
      el.classList.toggle('active');
      input.checked = true;
      var mutationObserver = new MutationObserver(function (entries) {
        if (!el.classList.contains('active')) {
          input.checked = false;
        }
      });
      mutationObserver.observe(el, {
        attributes: true
      });
    });
    el.addEventListener('click', function (e) {
      el.classList.toggle('active');
      input.checked = true;
      var mutationObserver = new MutationObserver(function (entries) {
        if (!el.classList.contains('active')) {
          input.checked = false;
        }
      });
      mutationObserver.observe(el, {
        attributes: true
      });
    });
  });
}

var stepLink = document.querySelectorAll('.item-step__link');

if (stepLink) {
  stepLink.forEach(function (el) {
    el.addEventListener('click', function (e) {
      el.classList.toggle('active');
    });
  });
}

var stepInput = document.querySelectorAll('.item-step__input');

if (stepInput) {
  stepInput.forEach(function (el) {
    el.addEventListener('change', function (e) {
      if (el.checked) {
        stepLink.forEach(function (el) {
          el.classList.remove('active');
        });
        el.classList.add('active');
      }
    });
  });
} //STEPS


if (document.querySelectorAll('.step .active-step').length > 1) {
  var step = document.querySelector('.step');
  var stepBody = step.querySelectorAll('.step__body');
  stepBody.forEach(function (el) {
    if (el.classList.contains('go')) {
      el.classList.add('done');
    } else if (el.classList.contains('go-error')) {
      el.classList.add('done-err');
    }
  });
}

var datePickerInputs = document.querySelectorAll('.account-edit__select input');

if (datePickerInputs) {
  datePickerInputs.forEach(function (instance) {
    var datepicker = new Datepicker(instance, {
      language: 'ru',
      prevArrow: '<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L8 7L1 0.999999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      nextArrow: '<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L8 7L1 0.999999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    });
    instance.addEventListener('show', function () {
      if (datepicker.picker.element.classList.contains('datepicker-orient-bottom')) {
        this.classList.add('datepicker-orient-bottom');
      } else {
        this.classList.add('datepicker-orient-top');
      }
    });
    instance.addEventListener('hide', function () {
      this.classList.remove('datepicker-orient-bottom', 'datepicker-orient-top');
    });
  });
} // ACCOUNT DELETE COMMENTS


var bodyComents = document.querySelectorAll('.comments-description__body');

if (bodyComents) {
  bodyComents.forEach(function (el) {
    var swipeBox = el.querySelector('.comments-description__item');
    var deleteComent = el.querySelector('.delete-comment');
    swipeBox.addEventListener('touchstart', handleTouchStart, false);
    swipeBox.addEventListener('touchmove', handleTouchMove, false);
    var x1 = null;

    function handleTouchStart(event) {
      var firstTouch = event.touches[0];
      x1 = firstTouch.clientX;
    }

    function handleTouchMove(event) {
      if (!x1) {
        return false;
      }

      var x2 = event.touches[0].clientX;
      var xDiff = x2 - x1;

      if (xDiff > 0) {
        swipeBox.style.right = '0px';
        deleteComent.style.right = '0px';
      } else {
        swipeBox.style.right = '110px';
        deleteComent.style.right = '-18px';
      }
    }
  });
}

if (document.documentElement.clientWidth >= 767) {
  var accountViewMode = document.querySelector('.account-viewMode');

  if (accountViewMode) {
    var comments = accountViewMode.querySelectorAll('.comments-description__item');
    comments.forEach(function (el) {
      el.addEventListener('click', function (e) {
        el.parentElement.classList.toggle('active');
      });
    });
  }
}

var promoBody = document.querySelector('.top-account__body--promo');

if (document.documentElement.clientWidth <= 767) {
  if (promoBody) {
    var btnEmail = document.querySelector('.left-account__btn--mail');
    btnEmail.after(promoBody);
  }
} // Модальное окно ПОДТВЕРДИТЬ ПОЧТУ


var modalCenterClose = document.querySelector('.modal-centerClose');

function hideModal() {
  if (document.querySelector('.shown-modal')) {
    document.querySelector('.shown-modal').classList.remove('shown-modal');
  }

  document.body.classList.remove('overflow-hidden', 'body-dark');
}

document.addEventListener('click', function (e) {
  if (e.target.closest('[data-add-shown]')) {
    hideModal();
    document.getElementById(e.target.closest('[data-add-shown]').dataset.addShown).classList.toggle('shown-modal');
    document.body.classList.toggle('overflow-hidden');
  }

  if (e.target.closest('.modal-centerClose')) {
    hideModal();
  }

  if (!e.target.closest('.shown-modal') && !e.target.closest('[data-add-shown]') && document.querySelector('.shown-modal')) {
    hideModal();
  }

  if (e.target.closest('[data-body-dark]')) {
    document.body.classList.add('body-dark');
  }

  if (e.target.closest('#add-workplace')) {
    var _datePickerInputs = document.querySelectorAll('.account-edit__select input');

    var workplace = document.querySelector('.account-edit__block');
    var workplaceNext = workplace.cloneNode(true);
    document.getElementById('workplace-now').before(workplaceNext);

    if (_datePickerInputs) {
      _datePickerInputs.forEach(function (instance) {
        var datepicker = new Datepicker(instance, {
          language: 'ru',
          prevArrow: '<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L8 7L1 0.999999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          nextArrow: '<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L8 7L1 0.999999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        });
        instance.addEventListener('show', function () {
          if (datepicker.picker.element.classList.contains('datepicker-orient-bottom')) {
            this.classList.add('datepicker-orient-bottom');
          } else {
            this.classList.add('datepicker-orient-top');
          }
        });
        instance.addEventListener('hide', function () {
          this.classList.remove('datepicker-orient-bottom', 'datepicker-orient-top');
        });
      });
    }
  }
}); //ACCOUNT AGENT PARTNERS TABS

var partnersTabs = document.querySelectorAll('.account-partners__item-tabs');
var accountPartners = document.querySelector('.account-partners__content');
var accountPartnersTabs = document.querySelectorAll('.account-partners__body');

if (accountPartners) {
  accountPartners.addEventListener('click', function (e) {
    if (e.target.classList.contains('account-partners__item-tabs')) {
      var tabsPath = e.target.dataset.partnersPath;
      partnersHandler(tabsPath);
    }
  });
}

var partnersHandler = function partnersHandler(path) {
  partnersTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  accountPartnersTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-partners-path=\"".concat(path, "\"]")).classList.add('active');
  accountPartnersTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-partners-target=\"".concat(path, "\"]")).classList.add('active');
}; // ACCOUNT CART TABS


var cartTabs = document.querySelectorAll('.account-cart__item');
var accountCart = document.querySelector('.account-cart');
var accountCartTabs = document.querySelectorAll('.account-cart__tabs-content');

if (accountCart) {
  accountCart.addEventListener('click', function (e) {
    if (e.target.classList.contains('account-cart__item')) {
      var tabsPath = e.target.dataset.cartPath;
      cartHandler(tabsPath);
    }
  });
}

var cartHandler = function cartHandler(path) {
  cartTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  accountCartTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-cart-path=\"".concat(path, "\"]")).classList.add('active');
  accountCartTabs.forEach(function (el) {
    el.classList.remove('active');
  });
  document.querySelector("[data-cart-target=\"".concat(path, "\"]")).classList.add('active');
}; // FLAT-BTN


var flatBtn = document.querySelectorAll('.flat-btn');

if (flatBtn) {
  flatBtn.forEach(function (el) {
    el.addEventListener('click', function (e) {
      el.parentElement.parentElement.classList.toggle('active');
    });
  });
} // MESSAGE ACCOUNT


var messageItem = document.querySelectorAll('.left-message__item');

if (messageItem) {
  messageItem.forEach(function (el) {
    el.addEventListener('click', function (e) {
      messageItem.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
}

var images = document.querySelector('.bottom-message__images');
document.addEventListener('click', function (e) {
  if (images) {
    if (!e.target.closest('.toFix') && !e.target.closest('.bottom-message__images')) {
      images.classList.remove('shown');
    }

    if (e.target.closest('.toFix')) {
      e.preventDefault();
      images.classList.toggle('shown');
    }
  }
}); // BTN-BORDER ACTIVE

var buttons = document.querySelector('.buttons-click');

if (buttons) {
  var button = buttons.querySelectorAll('.btn-border');
  button.forEach(function (el) {
    el.addEventListener('click', function (e) {
      button.forEach(function (el) {
        el.classList.remove('active');
      });
      el.classList.add('active');
    });
  });
} // CALC


var mortgageBottom = document.querySelector('.block-mortgage--bottom');

if (mortgageBottom) {
  var calcTotalMoveEnd = function calcTotalMoveEnd(e) {
    document.body.classList.remove('overflow-hidden');
    calcTotalEndMove = true;
  };

  var calcTtotalCounter = 0,
      calcTotalStart,
      calcTotalEnd,
      calcTotalEndMove,
      calcTotalDelta = 0;
  mortgageBottom.addEventListener('touchmove', function (e) {
    document.body.classList.add('overflow-hidden');

    if (!calcTotalStart || calcTotalEndMove) {
      calcTotalStart = calcTotalEnd = e.changedTouches[0].screenY;
    } else {
      calcTotalStart = calcTotalEnd;
      calcTotalEnd = e.changedTouches[0].screenY;
    }

    calcTotalDelta += calcTotalEnd - calcTotalStart;

    if (calcTtotalCounter % 2 == 0) {
      calcTotalDelta;

      if (calcTotalDelta <= 0) {
        calcTotalMoveEnd;
      } else {
        mortgageBottom.style.transform = "translateY(".concat(calcTotalDelta, "px)");
      }
    }

    calcTtotalCounter++;
    calcTotalEndMove = false;
  });
  mortgageBottom.addEventListener('touchend', calcTotalMoveEnd);
  mortgageBottom.addEventListener('touchcancel', calcTotalMoveEnd);
} // payOff__btn


var payOffBtn = document.querySelector('.payOff__btn');

if (payOffBtn) {
  payOffBtn.addEventListener('click', function (e) {
    payOffBtn.parentElement.parentElement.classList.add('green');
  });
} // MY OBJECTS


var accMyObjects = document.querySelector('.account-Myobjects');

if (accMyObjects) {
  var itemChoiceBody = accMyObjects.querySelectorAll('.account-Myobjects__item-body--choice');
  itemChoiceBody.forEach(function (el) {
    var input = el.querySelector('.item-step__input');
    var label = el.querySelector('.item-step__label');
    label.addEventListener('click', function (e) {
      el.classList.toggle('active');
      input.checked = true;
      var mutationObserver = new MutationObserver(function (entries) {
        if (!el.classList.contains('active')) {
          input.checked = false;
        }
      });
      mutationObserver.observe(el, {
        attributes: true
      });
    });
    el.addEventListener('click', function (e) {
      el.classList.toggle('active');
      input.checked = true;
      var mutationObserver = new MutationObserver(function (entries) {
        if (!el.classList.contains('active')) {
          input.checked = false;
        }
      });
      mutationObserver.observe(el, {
        attributes: true
      });
    });
  });
}

var accSeo = document.querySelector('.acc-seo');
var leftAccountContent = document.querySelector('.left-account__content');

if (document.documentElement.clientWidth <= 950) {
  if (accSeo) {
    leftAccountContent.after(accSeo);
  }
}

var findOutHow = document.querySelector('.find-out-how');
var stepTwoN = document.querySelector('.step-two__notify-choice');
var contentStep = document.querySelector('.content-step');

if (document.querySelector('.body-pakcLight')) {
  if (document.documentElement.clientWidth <= 950) {
    stepTwoN.before(findOutHow);
  }
}

if (document.querySelector('.body-pakcMark')) {
  if (document.documentElement.clientWidth <= 950) {
    contentStep.after(findOutHow);
  }
}

if (document.documentElement.clientWidth <= 950) {
  if (document.querySelector('.aboutNewBuildings')) {
    var _contactBtn = document.querySelector('.aboutNewBuildings__contacts');

    var aboutNewBuildingsList = document.querySelector('.aboutNewBuildings__list');
    aboutNewBuildingsList.after(_contactBtn);
  }
}

function createSelectArrow() {
  var arrow = document.createElement('div');
  arrow.classList.add('ts-arrow');
  arrow.innerHTML = '<div class="_icon-arrow"></div>';
  return arrow;
}

if (document.querySelector('.select-styled')) {
  document.querySelectorAll('.select-styled').forEach(function (el) {
    new TomSelect(el, {
      onInitialize: function onInitialize() {
        this.control.append(createSelectArrow());
      }
    });

    if (el.classList.contains('select-realty-type')) {
      var checkValue = function checkValue(value) {
        var $filterRooms = document.querySelector('.filter-rooms');

        if (value == 'flat') {
          clearRealtyType();
          document.body.classList.add('filter-flat');
        } else if (value == 'house') {
          clearRealtyType();
          document.body.classList.add('filter-house');
        } else if (value == 'room') {
          clearRealtyType();
          document.body.classList.add('filter-room');
        }
      };

      var clearRealtyType = function clearRealtyType() {
        document.body.classList.remove('filter-flat', 'filter-house', 'filter-room');
      };

      var select = el.tomselect;
      checkValue(select.items[0]);
      select.on('change', function (value) {
        filterHandler(value);
      });
    }
  });
}

if (document.querySelector('.select-styled-multiple')) {
  var showSelectMore = function showSelectMore(control) {
    var cotrolStyle = window.getComputedStyle(control);
    var ellipsis = 45;
    var controlRightBorder = control.getBoundingClientRect().right - parseInt(cotrolStyle.paddingRight) - ellipsis;
    var items = control.querySelectorAll('.item');
    var i = items.length - 1;
    control.classList.remove('ts-more');
    items.forEach(function (el) {
      el.classList.remove('d-none');
    });

    while (items.length && items[i].getBoundingClientRect().right > controlRightBorder && i > 0) {
      items[i].classList.add('d-none');
      control.classList.add('ts-more');
      i--;
    }
  };

  document.querySelectorAll('.select-styled-multiple').forEach(function (el) {
    new TomSelect(el, {
      plugins: ['checkbox_options'],
      hidePlaceholder: true,
      render: {
        item: function item(data, escape) {
          return '<div><figure></figure>' + escape(data.text) + '</div>';
        },
        option: function option(data, escape) {
          return '<div>' + escape(data.text) + '<figure></figure></div>';
        }
      },
      onInitialize: function onInitialize() {
        var _this = this;

        this.control.append(createSelectArrow());
        this.on('item_select', function (item) {
          _this.removeItem(item);

          setTimeout(function () {
            _this.wrapper.classList.remove('input-hidden');
          }, 0);
          showSelectMore(_this.control);
        });
        showSelectMore(this.control);
      },
      onChange: function onChange() {
        showSelectMore(this.control);
      }
    });
  });
}

if (tabs) {
  tabs.addEventListener('click', function (e) {
    if (e.target.classList.contains('tabs-main__btn')) {
      var tabsPath = e.target.dataset.tabsPath;
      tabsHandler(tabsPath);
    }

    ;

    if (e.target.classList.contains('dropdown-menu__item-takeOff')) {
      var filtertakePath = e.target.dataset.value;
      filterTakeOffHandler(filtertakePath);
    }

    ;
  });
}

var apartmentModalContent = document.querySelector('.step-two__content--dekstop');
var modalApartment = document.querySelector('.modal-apartment__content');

if (document.documentElement.clientWidth <= 950) {
  if (apartmentModalContent) {
    modalApartment.before(apartmentModalContent);
  }
} // rollUp 


var rollUp = document.querySelector('.rollUp');

if (rollUp) {
  rollUp.addEventListener('click', function (e) {
    document.querySelector('.metroSearch').classList.toggle('open');
  });
} //DRAW


var drawBtn = document.querySelector('.btn-draw');

if (drawBtn) {
  drawBtn.addEventListener('click', function (e) {
    document.querySelector('.searchByMap').classList.add('draw');
  });
}

var drawStop = document.querySelector('.draw-stop');

if (drawStop) {
  drawStop.addEventListener('click', function (e) {
    document.querySelector('.searchByMap').classList.remove('draw');
  });
}
