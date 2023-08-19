// mobile search screen & menu screen
const $scrollWrapper = document.querySelector("#scroll-wrapper");
const $mTopWrap = document.querySelector(".m-top-wrap");
const $mSearchWrap = document.querySelector(".m-search-wrap");
const $mMenuWrap = document.querySelector(".m-menu-wrap");
const $mSearchIcon = document.querySelectorAll(".m-search-icon");
const $mHamburgerIcon = document.querySelectorAll(".m-hamburger-icon");
const $mLeftArrow = document.querySelector(".m-left-arrow");
const $mSearchInputbox = document.querySelector(".m-search-input__inputbox");

let mTopWrapClickedBefore = true;

function disableScrollToggle() {
  if (($mSearchWrap.classList.contains("active") || $mMenuWrap.classList.contains("active")) && window.matchMedia("(max-width: 767px)").matches) {
    $scrollWrapper.classList.add("disable-scroll");
  } else {
    $scrollWrapper.classList.remove("disable-scroll");
  }
}

function mSearchScreenActive(e) {  
  $mSearchWrap.classList.add("active");

  if (e.target.parentNode.classList.contains("is-top")) {
    mTopWrapClickedBefore = true;
    $mTopWrap.classList.remove("active");
  } else {
    mTopWrapClickedBefore = false;
    $mMenuWrap.classList.remove("active");
  }

  disableScrollToggle();
}

function mTopWrapActive() {
  $mTopWrap.classList.add("active");
  $mSearchWrap.classList.remove("active");

  disableScrollToggle();
}

function mMenuContainerActive() {
  $mMenuWrap.classList.add("active");
  $mSearchWrap.classList.remove("active");

  disableScrollToggle();
}

function mMenuScreenToggle(e) {
  if (e.target.parentNode.classList.contains("is-top")) {
    $mMenuWrap.classList.add("active");
    $mTopWrap.classList.remove("active");
  } else {
    mSearchScreenMenuIsOpen = false;

    $mTopWrap.classList.add("active");
    $mMenuWrap.classList.remove("active");
  }
  
  disableScrollToggle();
}

function inputboxPlaceholderFocus() {
  $mSearchInputbox.placeholder = "검색어를 입력하세요.";
}

function inputboxPlaceholderBlur() {
  $mSearchInputbox.placeholder = "최대 18% 멤버십 페이백";
}

$mSearchIcon.forEach(element => {
  element.addEventListener("click", mSearchScreenActive);
});

$mLeftArrow.addEventListener("click", function() {
  if (mTopWrapClickedBefore) {
    mTopWrapActive();
  } else {
    mMenuContainerActive();
  }
});

$mHamburgerIcon.forEach(element => {
  element.addEventListener("click", mMenuScreenToggle);
});

$mSearchInputbox.addEventListener("focus", inputboxPlaceholderFocus);
$mSearchInputbox.addEventListener("blur", inputboxPlaceholderBlur);

window.addEventListener("resize", function() {
  disableScrollToggle();
})

//mobile top wrap bottom header
const $mBottomHeaderMenuItem = document.querySelectorAll(".m-bottom-header__menu-item");
const $toastMessages = document.querySelector(".toast-messages");

let mBottomHeaderPreIndex = 0;
let toastMessagesIsShowing = false;

function mBottomHeaderMenuItemActivate(e) {
  const nodes = [...$mBottomHeaderMenuItem];
  const index = nodes.indexOf(e.currentTarget);

  e.currentTarget?.classList.add("active");

  if (index !== mBottomHeaderPreIndex) {
    $mBottomHeaderMenuItem[mBottomHeaderPreIndex]?.classList.remove("active");
  }
  
  mBottomHeaderPreIndex = index;

  if (!toastMessagesIsShowing) {
    toastMessagesIsShowing = true;
    $toastMessages.classList.add("active");

    setTimeout(function() {
      $toastMessages.classList.remove("active");
      toastMessagesIsShowing = false;
    }, 5100);
  }
}

$mBottomHeaderMenuItem.forEach(element => {
  element.addEventListener("click", mBottomHeaderMenuItemActivate);
});

// mobile recent search word context menu
const $mRecentSearchEllipsis = document.querySelector(".m-recent-search__ellipsis");
const $mRecentSearchContextMenu = document.querySelector(".m-recent-search__context-menu");

function mRecentSearchEllipsisContextMenuToggle() {
  $mRecentSearchContextMenu.classList.toggle("active")
}

$mRecentSearchEllipsis.addEventListener("click", mRecentSearchEllipsisContextMenuToggle);

// mobile top searched word swiper
const mTopSearchedWordSwiper = new Swiper(".m-top-searched-word__swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".m-top-searched-word__swiper-pagination",
    clickable: true,
  },
});

// mobile banner swiper
const mBannerSwiper = new Swiper(".m-banner__swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".m-banner__swiper-pagination",
    clickable: true,
  },
});

// mobile menu submenu
const $mMenuLeftItem = document.querySelectorAll(".m-menu-left-item");
const $mMenuRightSubmenuItems = document.querySelectorAll(".m-menu-right-submenu__items");

let mMenuPreIndex = 0;

function mMenuRightSubmenuItemsAddClass(e) {
  const nodes = [...$mMenuLeftItem];
  const index = nodes.indexOf(e.currentTarget);

  e.currentTarget?.classList.add("active");
  $mMenuRightSubmenuItems[index]?.classList.add("active");

  if (index !== mMenuPreIndex) {
    $mMenuRightSubmenuItems[mMenuPreIndex]?.classList.remove("active");
    $mMenuLeftItem[mMenuPreIndex]?.classList.remove("active");
  }
  
  mMenuPreIndex = index;
}

$mMenuLeftItem.forEach(element => {
  element.addEventListener("click", mMenuRightSubmenuItemsAddClass);
});

// mobile intro video swiper
const mIntroVideoSwiper = new Swiper(".m-intro-video__swiper", {
  loop: true,
  autoplay: {
    delay: 5100,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".m-intro-video__swiper-pagination",
    clickable: true,
    type: "fraction",
  },
});

// mobile intro video Fix screen flickering
const $mIntroVideoContainerVideos = document.querySelectorAll(".m-intro-video__video-container video");
const $mIntroVideoContainerImages = document.querySelectorAll(".m-intro-video__video-container img");

$mIntroVideoContainerVideos.forEach((element, index) => {
  element.addEventListener("DOMContentLoaded", function() {
    $mIntroVideoContainerImages[index].style.display = "none";
  })
})

// mobile new arrival swiper
const mNewArrivalSwiper = new Swiper(".m-new-arrival__swiper", {
  loop: true,
  autoplay: {
    delay: 5100,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".m-new-arrival__swiper-pagination-progressbar",
    clickable: true,
    type: "progressbar",
  },
});

// mobile exclusives swiper
const mExclusivesSwiper = new Swiper(".m-exclusives__swiper", {
  loop: true,
  autoplay: {
    delay: 5100,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".m-exclusives__swiper-pagination-progressbar",
    clickable: true,
    type: "progressbar",
  },
});

// mobile intro video autoplay
const $mAccessoriesVideoContainer = document.querySelector(".m-accessories__video-container video");

const mAccessoriesVideoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      $mAccessoriesVideoContainer.pause();
    } else {
      $mAccessoriesVideoContainer.play();
    }
  });
}, {});

mAccessoriesVideoObserver.observe($mAccessoriesVideoContainer);

// mobile life&culture swiper
const mLifeSwiper = new Swiper(".m-life__swiper", {
  loop: true,
  autoplay: {
    delay: 5100,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".m-life__swiper-pagination",
    clickable: true,
  },
});

// GNB
const $topNavArea = document.querySelectorAll(".top-nav-area>ul>li>a");
const $bottomLeftNavArea = document.querySelectorAll(".bottom-left-nav-area>ul>li>a");
const $bottomRightNavArea = document.querySelectorAll(".bottom-right-nav-area>ul>li");
const $bottomNavArea = document.querySelector(".bottom-nav-area");
const $topNavAreaMouseEnter = document.querySelector(".top-nav-area--mouse-enter");
const $topNavAreaMouseEvent = document.querySelector(".top-nav-area--mouse-event");

let gnbPreIndex = 0;

function topNavAreaAddClass(e) {
  const nodes = [...$topNavArea];
  const index = nodes.indexOf(e.target) - 1 < 0 ? 0 : nodes.indexOf(e.target) - 1;

  bottomNavAreaAddClass();
  $bottomRightNavArea[index].classList.add("active");

  if (index !== gnbPreIndex) {
    $bottomRightNavArea[gnbPreIndex]?.classList.remove("active");
  }

  gnbPreIndex = index;
}

function bottomLeftNavAreaAddClass(e) {
  const nodes = [...$bottomLeftNavArea];
  const index = nodes.indexOf(e.target);

  bottomNavAreaAddClass();
  $bottomRightNavArea[index].classList.add("active");

  if (index !== gnbPreIndex) {
    $bottomRightNavArea[gnbPreIndex]?.classList.remove("active");
  }

  gnbPreIndex = index;
}

function bottomNavAreaAddClass() {
  $bottomNavArea.classList.add("active");
}

function bottomNavAreaRemoveClass() {
  $bottomNavArea.classList.remove("active");
}

$topNavArea.forEach((element) => {
  element.addEventListener("mouseenter", topNavAreaAddClass);
})

$bottomLeftNavArea.forEach((element) => {
  element.addEventListener("mouseenter", bottomLeftNavAreaAddClass);
})

$topNavAreaMouseEnter.addEventListener("mouseenter", bottomNavAreaRemoveClass);
$topNavAreaMouseEvent.addEventListener("mouseenter", bottomNavAreaAddClass);
$topNavAreaMouseEvent.addEventListener("mouseleave", bottomNavAreaRemoveClass);

$bottomNavArea.addEventListener("mouseenter", bottomNavAreaAddClass);
$bottomNavArea.addEventListener("mouseleave", bottomNavAreaRemoveClass);

// Intro Video Carousel
const $sectionDesktop = document.querySelectorAll(".section-desktop");
const $introVideoCarousel = document.querySelector(".intro-video-carousel");
const $introVideoCarouselSlide = document.querySelectorAll(".intro-video-carousel__slide");
const $introVideoCarouselSlideVideos = document.querySelectorAll(".intro-video-carousel__slide > a > div > video");
const $introVideoCarouselTitle = document.querySelectorAll(".intro-video-carousel__title");5
const $introVideoPrev = document.querySelector(".intro-video__prev");
const $introVideoNext = document.querySelector(".intro-video__next");
const $introVideoCountCurrent = document.querySelector(".nav-intro-video-count--current");
const $introVideoCountTotal = document.querySelector(".nav-intro-video-count--total");
const $introVideoPlayPause = document.querySelector(".nav-intro-video__play-pause");
const $introVideoPlay = document.querySelector(".nav-intro-video__play");
const $introVideoPause = document.querySelector(".nav-intro-video__pause");

const introVideoCurrTransl = [];
const INTRO_VIDEO_SET_TIMEOUT_DELAY = 7100;
const INTRO_VIDEO_SLIDE_WIDTH_PERCENT = 100;

// Exclusives Carousel start
const EXCLUSIVES_SET_TIMEOUT_DELAY = 3100;

let exclusivesSetTimeoutSwipeNext;
// Exclusives Carousel end

let introVideoIndex = 0;
let introVideoMainIndex;
let introVideoPreIndex;
let introVideoDirection;
let introVideoAmount;
let introVideoTranslationComplete = true;
let introVideoMoveOffset;
let introVideoSetTimeoutScreenChangeNext;
let introVideoPlayEnabled = true;

function introVideoTransitionCompleted() {
    introVideoTranslationComplete = true;
}

function introVideoMeasureWidth() {
  introVideoAmount = $introVideoCarouselSlide.length;
  introVideoMoveOffset = INTRO_VIDEO_SLIDE_WIDTH_PERCENT;
  $introVideoCarousel.style.width = (introVideoAmount * introVideoMoveOffset) + "%";

  setTimeoutScreenChange(INTRO_VIDEO_SET_TIMEOUT_DELAY);
}

document.addEventListener("DOMContentLoaded", function() {
  introVideoMeasureWidth();
  
  introVideoActiveScreen(introVideoIndex, introVideoAmount, introVideoDirection);
  introVideoCount(introVideoIndex, parseInt(introVideoAmount / 2, 10));

  for(let i = 0; i < introVideoAmount; i++) {
    introVideoCurrTransl[i] = -introVideoMoveOffset;
    $introVideoCarouselSlide[i].addEventListener("transitionend", introVideoTransitionCompleted, true);
    $introVideoCarouselSlide[i].addEventListener("webkitTransitionEnd", introVideoTransitionCompleted, true);
    $introVideoCarouselSlide[i].addEventListener("oTransitionEnd", introVideoTransitionCompleted, true);
    $introVideoCarouselSlide[i].addEventListener("MSTransitionEnd", introVideoTransitionCompleted, true);
  }

  $introVideoPrev.addEventListener("click", introVideoPrev, true);
  $introVideoNext.addEventListener("click", introVideoNext, true);

  window.addEventListener("resize", function(e) {
    if (this.window.matchMedia("(min-width: 768px)").matches) {
      introVideoTransitionCompleted();
      introVideoMeasureWidth();
    }
  });

  setTimeoutScreenChange(INTRO_VIDEO_SET_TIMEOUT_DELAY);
  
  // Exclusives Carousel start 
  exclusivesSetTimeoutSwipeCarousel(EXCLUSIVES_SET_TIMEOUT_DELAY);
  // Exclusives Carousel end
});

function introVideoPrev() {
  if (introVideoTranslationComplete === true) {
    introVideoTranslationComplete = false;
    introVideoIndex--;
    introVideoDirection = 1;

    if (introVideoIndex === -1) {
      introVideoIndex = introVideoAmount - 1;
    }

    introVideoCount(introVideoIndex, parseInt(introVideoAmount / 2, 10));

    const outerIndex = introVideoIndex % introVideoAmount;

    for (let i = 0; i < introVideoAmount; i++) {
      let slide = $introVideoCarouselSlide[i];
      slide.style.opacity = "1";
      slide.style.transform = `translateX(${introVideoCurrTransl[i] + introVideoMoveOffset}%)`;
      introVideoCurrTransl[i] = introVideoCurrTransl[i] + introVideoMoveOffset;
    }

    const outerSlide = $introVideoCarouselSlide[outerIndex];
    outerSlide.style.transform = `translateX(${introVideoCurrTransl[outerIndex] - (introVideoMoveOffset * introVideoAmount)}%)`;
    outerSlide.style.opacity = ".25";
    outerSlide.style.zIndex = "0";
    outerSlide.addEventListener("transitionend", introVideoVisibleOnScreen, true);
    outerSlide.addEventListener("webkitTransitionEnd", introVideoVisibleOnScreen, true);
    outerSlide.addEventListener("oTransitionEnd", introVideoVisibleOnScreen, true);
    outerSlide.addEventListener("MozTransitionEnd", introVideoVisibleOnScreen, true);
    introVideoCurrTransl[outerIndex] = introVideoCurrTransl[outerIndex] - (introVideoMoveOffset * introVideoAmount);
    
    introVideoActiveScreen(introVideoIndex, introVideoAmount, introVideoDirection);
    setTimeoutScreenChange(INTRO_VIDEO_SET_TIMEOUT_DELAY);
  }
}

function introVideoNext() {
  if (introVideoTranslationComplete === true) {
    introVideoTranslationComplete = false;
    const outerIndex = introVideoIndex % introVideoAmount;
    introVideoIndex++;
    introVideoDirection = -1;

    introVideoCount(introVideoIndex, parseInt(introVideoAmount / 2, 10));

    for(var i = 0; i < introVideoAmount; i++) {
      let slide = $introVideoCarouselSlide[i];
      slide.style.opacity = "1";
      slide.style.transform = `translateX(${introVideoCurrTransl[i] - introVideoMoveOffset}%)`;
      introVideoCurrTransl[i] = introVideoCurrTransl[i] - introVideoMoveOffset;
    }

    const outerSlide = $introVideoCarouselSlide[outerIndex];
    outerSlide.style.transform = `translateX(${introVideoCurrTransl[outerIndex] + (introVideoMoveOffset * introVideoAmount)}%)`;
    outerSlide.style.opacity = ".25";
    outerSlide.style.zIndex = "0";
    outerSlide.addEventListener("transitionend", introVideoVisibleOnScreen, true);
    outerSlide.addEventListener("webkitTransitionEnd", introVideoVisibleOnScreen, true);
    outerSlide.addEventListener("oTransitionEnd", introVideoVisibleOnScreen, true);
    outerSlide.addEventListener("MozTransitionEnd", introVideoVisibleOnScreen, true);
    introVideoCurrTransl[outerIndex] = introVideoCurrTransl[outerIndex] + (introVideoMoveOffset * introVideoAmount);

    introVideoActiveScreen(introVideoIndex, introVideoAmount, introVideoDirection);
    setTimeoutScreenChange(INTRO_VIDEO_SET_TIMEOUT_DELAY);
  }
}

function introVideoVisibleOnScreen(e) {
  e.target.style.opacity = "1";
  e.target.style.zIndex = "5";
}

function introVideoActiveScreen(introVideoIndex, introVideoAmount, introVideoDirection) {
  introVideoMainIndex = (introVideoIndex + 2) % introVideoAmount;
  
  if (introVideoDirection) {
    introVideoPreIndex = (introVideoMainIndex + introVideoDirection) % introVideoAmount;
    
    if (introVideoPreIndex === -1) {
      introVideoPreIndex = introVideoAmount - 1;
    }

    $introVideoCarouselSlideVideos[introVideoPreIndex].pause();
    $introVideoCarouselSlideVideos[introVideoMainIndex].play();
  }

  $introVideoCarouselTitle[introVideoMainIndex].classList.add("active");
  
  if (introVideoDirection) {
    $introVideoCarouselTitle[introVideoPreIndex].classList.remove("active");
  }
}

function introVideoCount(introVideoIndex, introVideoAmount) {
  $introVideoCountCurrent.textContent = ((introVideoIndex + 1) % introVideoAmount) === 0 ? introVideoAmount : (introVideoIndex + 1) % introVideoAmount;
  $introVideoCountTotal.textContent = introVideoAmount;
}

function setTimeoutScreenChange(delay) {
  if (introVideoPlayEnabled) {
    if (introVideoSetTimeoutScreenChangeNext) {
      clearTimeout(introVideoSetTimeoutScreenChangeNext);
      introVideoSetTimeoutScreenChangeNext = null;
    }
    introVideoSetTimeoutScreenChangeNext = setTimeout(introVideoNext, delay);
  } else {
    clearTimeout(introVideoSetTimeoutScreenChangeNext);
  }
}

function introVideoPlayPauseToggle() {
  if (introVideoPlayEnabled) {
    introVideoPlayEnabled = false;
    clearTimeout(introVideoSetTimeoutScreenChangeNext);
    introVideoSetTimeoutScreenChangeNext = null;
    $introVideoPause.classList.remove("active");
    $introVideoPlay.classList.add("active");
  } else {
    introVideoPlayEnabled = true;
    setTimeoutScreenChange(INTRO_VIDEO_SET_TIMEOUT_DELAY);
    $introVideoPause.classList.add("active");
    $introVideoPlay.classList.remove("active");
  }
}

$introVideoPlayPause.addEventListener("click", introVideoPlayPauseToggle);

// Fixed MenuBar
const $headerDesktop = document.querySelector(".header-desktop");
const HEADER_ADD_CLASS_FIXED_DELAY = 100;

let headerAddClassFixedSetTimeOut;

function headerAddClassFixed() {
  headerAddClassFixedSetTimeOut = null;

  const scrollTop = document.scrollingElement.scrollTop;

  if (scrollTop > 180) {
    $headerDesktop.classList.add("fixed");
  } else {
    $headerDesktop.classList.remove("fixed");
  }
}

window.addEventListener("scroll", function(event) {
  if (!headerAddClassFixedSetTimeOut) {
    headerAddClassFixedSetTimeOut = setTimeout(headerAddClassFixed, HEADER_ADD_CLASS_FIXED_DELAY);
  }
})

// New Arrival Slider
const $newArrivalSlider = document.querySelector(".new-arrival-slider");
const $newArrivalSliderBarCurrent = document.querySelector(".new-arrival-slider__bar-current");

let newArrivalIsDown = false;
let newArrivalStartX;
let newArrivalScrollLeft;

const newArrivalEnd = () => {
	newArrivalIsDown = false;
  $newArrivalSlider.classList.remove("active");
}

const newArrivalStart = (e) => {
  newArrivalIsDown = true;
  $newArrivalSlider.classList.add("active");
  newArrivalStartX = e.pageX || e.touches[0].pageX - $newArrivalSlider.offsetLeft;
  newArrivalScrollLeft = $newArrivalSlider.scrollLeft;
}

const newArrivalMove = (e) => {
	if(!newArrivalIsDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - $newArrivalSlider.offsetLeft;
  const dist = (x - newArrivalStartX);
  $newArrivalSlider.scrollLeft = newArrivalScrollLeft - dist;

  const scrollLeftPercent = (((($newArrivalSlider.scrollLeft / ($newArrivalSlider.scrollWidth - $newArrivalSlider.clientWidth)) / 100) * 84) + .16) * 100;
  $newArrivalSliderBarCurrent.style.width = `${scrollLeftPercent}%`;
}

$newArrivalSlider.addEventListener("mousedown", newArrivalStart);
$newArrivalSlider.addEventListener("touchstart", newArrivalStart);

$newArrivalSlider.addEventListener("mousemove", newArrivalMove);
$newArrivalSlider.addEventListener("touchmove", newArrivalMove);

$newArrivalSlider.addEventListener("mouseleave", newArrivalEnd);
$newArrivalSlider.addEventListener("mouseup", newArrivalEnd);
$newArrivalSlider.addEventListener("touchend", newArrivalEnd);

// Exclusives Carousel
const $exclusivesCarousel = document.querySelector(".exclusives-carousel");
const $exclusivesCarouselSeats = document.querySelectorAll(".exclusives-carousel__seat");
const $exclusivesPrev = document.querySelector(".exclusives__prev");
const $exclusivesNext = document.querySelector(".exclusives__next");
const $exclusivesToggle = document.querySelectorAll(".exclusives__nav-buttons .toggle");

let exclusivesTransitionComplete = true;

function exclusivesTransitionCompleted() {
  exclusivesTransitionComplete = true;
}

function exclusivesDelegate(criteria, listener) {
  $exclusivesCarousel.addEventListener("transitionend", exclusivesTransitionCompleted, true);
  $exclusivesCarousel.addEventListener("webkitTransitionEnd", exclusivesTransitionCompleted, true);
  $exclusivesCarousel.addEventListener("oTransitionEnd", exclusivesTransitionCompleted, true);
  $exclusivesCarousel.addEventListener("MSTransitionEnd", exclusivesTransitionCompleted, true);

  return function(e) {
    let el = e.target;
    do {
      if (!criteria(el)) {
        continue;
      }
      
      e.delegateTarget = el;
      listener.call(this, e);
      return;
    } while ((el = el.parentNode));
  };
}

function exclusivesToggleFilter(elem) {
  return (elem instanceof HTMLElement) && elem.matches(".toggle");
}

function exclusivesToggleHandler(e) {
  if (exclusivesTransitionComplete === true) {
    exclusivesTransitionComplete = false;

    exclusivesSetTimeoutSwipeCarousel(EXCLUSIVES_SET_TIMEOUT_DELAY);

    let $newSeat;
    const $el = document.querySelector(".exclusives-is-ref");
    const $currSliderControl = e.delegateTarget;

    $el.classList.remove("exclusives-is-ref");

    if ($currSliderControl.getAttribute("data-toggle") === "next") {
      $newSeat = exclusivesNext($el);
      $exclusivesCarousel.classList.remove("is-reversing");
    } else {
      $newSeat = exclusivesPrev($el);
      $exclusivesCarousel.classList.add("is-reversing");
    }

    $newSeat.classList.add("exclusives-is-ref");
    $newSeat.style.order = 1;

    for (let i = 2; i <= $exclusivesCarouselSeats.length; i++) {
      $newSeat = exclusivesNext($newSeat);
      $newSeat.style.order = i;
    }

    $exclusivesCarousel.classList.remove("is-set");

    return setTimeout(function() {
      return $exclusivesCarousel.classList.add("is-set");
    }, 50);

    function exclusivesNext($el) {
      if ($el.nextElementSibling) {
        return $el.nextElementSibling;
      } else {
        return $exclusivesCarousel.firstElementChild;
      }
    }

    function exclusivesPrev($el) {
      if ($el.previousElementSibling) {
        return $el.previousElementSibling;
      } else {
        return $exclusivesCarousel.lastElementChild;
      }
    }
  }
}

function exclusivesSetTimeoutSwipeCarousel(delay) {
  if (exclusivesSetTimeoutSwipeNext) {
    clearTimeout(exclusivesSetTimeoutSwipeNext);
    exclusivesSetTimeoutSwipeNext = null;
  }
  exclusivesSetTimeoutSwipeNext = setTimeout(exclusivesSwipeNext, delay);
}

function exclusivesSwipeNext() {
  let event = new Event("click");
  $exclusivesNext.dispatchEvent(event);
}

$exclusivesPrev.addEventListener("click", exclusivesDelegate(exclusivesToggleFilter, exclusivesToggleHandler));
$exclusivesNext.addEventListener("click", exclusivesDelegate(exclusivesToggleFilter, exclusivesToggleHandler));

window.addEventListener("resize", function(e) {
  if (this.window.matchMedia("(min-width: 768px)").matches) {
    exclusivesTransitionCompleted();
    exclusivesSetTimeoutSwipeCarousel(EXCLUSIVES_SET_TIMEOUT_DELAY);
  }
})

// Accessories
const $accessoriesMainVideo = document.querySelector(".accessories-main-video video");
const ACCESSORIES_ADD_CLASS_FIXED_DELAY = 100;

let accessoriesAddClassFixedSetTimeOut;

function accessoriesAddClassFixed() {
  accessoriesAddClassFixedSetTimeOut = null;
  const scrollTop = document.scrollingElement.scrollTop;

  if ((scrollTop > ($sectionDesktop[0].offsetHeight * 2.25)) && (scrollTop < ($sectionDesktop[0].offsetHeight * 4))) {
    $accessoriesMainVideo.play();
  } else {
    $accessoriesMainVideo.pause();
  }
}

window.addEventListener("scroll", function(event) {
  if (!accessoriesAddClassFixedSetTimeOut) {
    accessoriesAddClassFixedSetTimeOut = setTimeout(accessoriesAddClassFixed, ACCESSORIES_ADD_CLASS_FIXED_DELAY);
  }
})
