document.addEventListener('DOMContentLoaded', function(event) {
	var scrollPos = 0;
	var isScrolling = false; 

	function handleScroll() {
	  if (!isScrolling) {
	    window.requestAnimationFrame(function() {
	      var scroll = document.documentElement.scrollTop;
	      var header = document.querySelector('.header');
	      var headerTop = document.querySelector('.header-top');
	      if (scroll > 15 && scroll > scrollPos) {
	        header.classList.add('scroll');
	        headerTop.style.marginTop = -headerTop.offsetHeight + 'px';
	      } else {
	        header.classList.remove('scroll');
	        headerTop.style.marginTop = 0;
	      }
	      if (scroll > 1) {
	        header.classList.add('show');
	      } else {
	        header.classList.remove('show');
	      }
	      scrollPos = scroll;
	      isScrolling = false; 
	    });
	  }
	  isScrolling = true; 
	}

	handleScroll();
	window.addEventListener('scroll', handleScroll);


  var headerCatalog = document.querySelector('.header__catalog');
  var catalog = document.querySelector('.catalog');
  var body = document.querySelector('body');
	headerCatalog.addEventListener('click', function(event) {
	    catalog.classList.toggle('active');
	    body.classList.toggle('lock');
	});
	var catalogClose = document.querySelectorAll('.catalog__close');
	if(catalogClose){
		catalogClose.forEach(function(catalogClose) {
		    catalogClose.addEventListener('click', function(event) {
		    		body.classList.remove('lock');	
		    		catalog.classList.remove('active');

		    });
		});		
	}
	var catalogSubs = document.querySelectorAll('.catalog ul a.hassubs');
	if(catalogSubs){
		catalogSubs.forEach(function(catalogSubs) {
		    catalogSubs.addEventListener('click', function(event) {
		    		event.preventDefault();
		    		catalogSubs.classList.toggle('active');
		    		slideToggle(catalogSubs.nextElementSibling);
		    });
		});		
	}
	function slideToggle(element) {
	  var target = element.style;
	  target.transition = 'all 0.3s ease-in-out';
	  if (target.maxHeight) {
	    target.maxHeight = null;
	    element.classList.remove('active');
	  } else {
	    target.maxHeight = element.scrollHeight + 'px';
	    element.classList.add('active');
	  }
	}

	var headerSearch = document.querySelector('.header__search');
	var search = document.querySelector('.header__center');
	if(search && headerSearch){
		headerSearch.addEventListener('click', function(event) {
			event.preventDefault();
			headerCatalog.classList.remove('active');
			catalog.classList.remove('active');
			body.classList.remove('lock');
			search.classList.toggle('active');
		});
		document.addEventListener('click', function(event) {
		  if (!search.contains(event.target) && !headerSearch.contains(event.target)) {
			search.classList.remove('active');
		  }	  
		});
	}

  const popupButton = document.querySelectorAll("[data-topopup]");
  if(popupButton){
	  popupButton.forEach(function (popupButton) {
	    popupButton.addEventListener("click", function (event) {
	    	event.preventDefault();
	      const dataPopup = this.getAttribute("data-topopup");
	      const dataClassPopup = document.querySelector(`${dataPopup}`);
	      if (dataClassPopup !== null) {
	        dataClassPopup.classList.add("open");
	        body.classList.add('popuplock');	
	      }
	    });
	  });  	
  }
	var popupClose = document.querySelectorAll('.popup__close');
	if(popupClose){
		popupClose.forEach(function(popupClose) {
		    popupClose.addEventListener('click', function(event) {
		    		body.classList.remove('popuplock');	
		    		popupClose.closest('.popup').classList.remove('open');

		    });
		});		
	}
  if(document.querySelector('.main__slider')){
      new Swiper('.main__slider', {
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 4,
        loop:false,
			  navigation: {
			    nextEl: '.main__next',
			    prevEl: '.main__prev',
			  },
		    breakpoints: {
		        1400: {
		        		loop:false,
		            slidesPerView: 4,
		        },
		        992: {
		        		loop:false,
		        		spaceBetween: 30,
		            slidesPerView: 3,
		        },		        
		        601: {
		        		loop:false,
		        		spaceBetween: 16,
		            slidesPerView: 2,
		        },		  
		        0: {
		        		loop:true,
		        		spaceBetween: 10,
		            slidesPerView: 1,
		        }		 

		    }
      });
   }
  if(document.querySelector('.categories__cards')){
      new Swiper('.categories__cards', {
        speed: 600,
        spaceBetween: 33,
        slidesPerView: 12,
        loop:false,
			  navigation: {
			    nextEl: '.categories__next',
			    prevEl: '.categories__prev',
			  },
		    breakpoints: {
		        1400: {
		            slidesPerView: 12,
		            spaceBetween: 33,
		        },
		        1101: {
		        		spaceBetween: 20,
		            slidesPerView: 9,
		        },		
		        992: {
		        		spaceBetween: 20,
		            slidesPerView: 8,
		        },		        
		        901: {
		        		spaceBetween: 16,
		            slidesPerView: 7,
		        },		  
		        801: {
		        		spaceBetween: 16,
		            slidesPerView: 6,
		        },		  
		        701: {
		        		spaceBetween: 12,
		            slidesPerView: 5,
		        },	
		        0: {
		        		spaceBetween: 10,
		            slidesPerView: 4,
		        }		 

		    }
      });
   }
   if(document.querySelector('.main__slider')){
	new Swiper('.blog__slider', {
	  speed: 600,
	  spaceBetween: 20,
	  slidesPerView: 4,
	  loop:false,
		breakpoints: {
			1400: {
				loop:false,
				slidesPerView: 4,
			},
			992: {
				loop:false,
				spaceBetween: 30,
				slidesPerView: 3,
			},		        
			601: {
					loop:false,
					spaceBetween: 16,
				slidesPerView: 2,
			},		  
			0: {
					loop:true,
					spaceBetween: 10,
				slidesPerView: 1,
			}		 

		}
	});
 }
 var answersCard = document.querySelectorAll('.answers__card');
 if(answersCard){
	answersCard.forEach(function(answersCard) {
		answersCard.addEventListener('click', function(event) {
			event.preventDefault();
			answersCard.classList.toggle('active');
			slideToggle(answersCard.querySelector('.answers__body'));
		 });
	 });
 }

 var tabsItems = document.querySelectorAll('[data-tab]');
 if(tabsItems){
	 tabsItems.forEach(function(tabsItem) {
		 tabsItem.addEventListener('click', function(event) {
			event.preventDefault();
			var tabParent = this.closest('.tabs');
			var tabActive = tabParent.querySelector('[data-tab].active');
			var contentActive = tabParent.querySelectorAll('[data-content].target');
			if (tabActive) {
					tabActive.classList.remove('active');
			}
			contentActive.forEach(function(contentActive){
				if (contentActive) {
					contentActive.classList.remove('target');
				}	  
			});
			this.classList.add('active');
			const tabContent = this.getAttribute("data-tab");
			const tabId = tabParent.querySelectorAll(`[data-content="${tabContent}"]`);
			tabId.forEach(function(tabId){
				if (tabId) {
					tabId.classList.add('target');
				}	  
			});
		 });
	 });
 }
 if(document.querySelector('[data-fancybox]')){
	Fancybox.bind("[data-fancybox]", {
	 Images: {
		 zoom:false,
		 zoomOpacity:false,
	 },
	 Thumbs: {
	   type: "classic",
	 },
	});
}

if(document.querySelector('.reviews__slider')){
	new Swiper('.reviews__slider', {
	  speed: 600,
	  spaceBetween: 20,
	  slidesPerView: 4,
	  loop:false,
			navigation: {
			  nextEl: '.reviews__next',
			  prevEl: '.reviews__prev',
			},
		  breakpoints: {
			  1400: {
				loop:false,
				  slidesPerView: 4,
			  },
			  992: {
				loop:false,
				spaceBetween: 30,
				slidesPerView: 3,
			  },		        
			  601: {
				loop:false,
				spaceBetween: 16,
				slidesPerView: 2,
			  },		  
			  0: {
				loop:true,
				spaceBetween: 10,
				slidesPerView: 1,
			  }		 

		  }
	});
 }

 var flowersSliders = document.querySelectorAll('.flowers__image');
 if(flowersSliders){
	flowersSliders.forEach(function(flowersSlider) {
		if(flowersSlider.parentNode.querySelector('.flowers__pagination')){
			var flowersSliderPagination = flowersSlider.parentNode.querySelector('.flowers__pagination');
		}
		new Swiper(flowersSlider, {
			speed: 600,
			spaceBetween: 0,
			slidesPerView: 1,
			loop:true,
			pagination: {
			  el:flowersSliderPagination,
			},
		  });
	});
 }
 var filterSelect = document.querySelectorAll('.filter__select>p');
 var filterSelectWrapper = document.querySelectorAll('.filter__select');
 if(filterSelect){
	filterSelect.forEach(function(filterSelect) {
		filterSelect.addEventListener('click', function(event) {
			event.preventDefault();
			filterSelect.parentNode.classList.toggle('active');
		 });
	 });
	 filterSelectWrapper.forEach(function(filterSelectWrapper) {
		document.addEventListener('click', function(event) {
			if (!filterSelectWrapper.contains(event.target)) {
				filterSelectWrapper.classList.remove('active');
			}	  
		});
	});
 }
 var filterSelectRadio = document.querySelectorAll(".filter__select-checkbox input[type='radio']");
 if(filterSelectRadio){
	filterSelectRadio.forEach(function(filterSelectRadio) {
		filterSelectRadio.addEventListener('click', function(event) {
			filterSelectRadio.closest('.filter__select').classList.remove('active');
			var filterSelectName = filterSelectRadio.closest('.filter__select').querySelector('p>span');
			if(filterSelectName && filterSelectRadio.nextElementSibling){
				filterSelectName.innerHTML = filterSelectRadio.nextElementSibling.textContent;
			}
		 });
	 });
 }
 var filter = document.querySelectorAll(".filter__filter");
 if(filter){
	filter.forEach(function(filter) {
		filter.addEventListener('click', function(event) {
			var filterLeft = filter.parentNode.querySelector('.filter__left');
			if(filter.closest('.catalogue')){
				var filterCatalogue = filter.closest('.catalogue').querySelector('.catalogue__aside');
			}
			if(filterLeft){
				filterLeft.classList.toggle('open');
				body.classList.toggle('filterlock');
			}else if(filterCatalogue){
				filterCatalogue.classList.toggle('open');
				body.classList.toggle('filterlock');
			}
		 });
	 });
 }
 var filterClose = document.querySelectorAll(".filter__close");
 if(filterClose){
	filterClose.forEach(function(filterClose) {
		filterClose.addEventListener('click', function(event) {
			var filterLeftOpen = filterClose.closest('.filter__left.open');
			if(filterLeftOpen){
				filterLeftOpen.classList.toggle('open');
				body.classList.toggle('filterlock');
			}
		 });
	 });
 }
 var catalogueClose = document.querySelectorAll(".catalogue__close");
 if(catalogueClose){
	catalogueClose.forEach(function(catalogueClose) {
		catalogueClose.addEventListener('click', function(event) {
			var catalogueOpen = catalogueClose.closest('.catalogue__aside.open');
			if(catalogueOpen){
				catalogueOpen.classList.toggle('open');
				body.classList.toggle('filterlock');
			}
		 });
	 });
 }
 if(document.querySelector('.flowers__slider')){
	new Swiper('.flowers__slider', {
	  speed: 600,
	  spaceBetween: 0,
	  slidesPerView: 4,
	  loop:false,
	  navigation: {
		nextEl: '.flowers__next',
		prevEl: '.flowers__prev',
	  },
		  breakpoints: {
			  1400: {
				loop:false,
				spaceBetween:0,
				slidesPerView: 4,
			  },
			  992: {
				loop:false,
				spaceBetween: 0,
				slidesPerView: 3,
			  },		        
			  601: {
				loop:false,
				spaceBetween: 16,
				slidesPerView: 3,
			  },		  
			  0: {
				loop:true,
				spaceBetween: 10,
				slidesPerView: 2,
			  }		 

		  }
	});
 }
 var filterItems = document.querySelectorAll('[data-filter]');
 if(filterItems){
	 filterItems.forEach(function(filter) {
	   filter.addEventListener('click', function(event) {
		var filterValue = filter.getAttribute("data-filter");
		var contentItems = filter.parentNode.parentNode.querySelectorAll('[data-filtercontent]');
		contentItems.forEach(function (item) {
			if (filterValue === "all" || item.classList.contains("" + filterValue + "")) {
				item.classList.remove("hide");
			} else {
				item.classList.add("hide");
			}
			if(item.closest('.swiper')){
				item.closest('.swiper').swiper.update();
			}
		});
		 filterItems.forEach(function(filterItems) {
		   filterItems.classList.remove('active');
		 });
		 filter.classList.add('active');
	   });
	 });	
 }
 if (document.querySelector(".product__slider")) {
    new Swiper(".product__slider", {
      speed: 600,
      spaceBetween: 10,
      slidesPerView: 1,
	  pagination: {
		el: '.product__pagination',
	  },
      thumbs: {
        swiper: {
          el: ".product__navslider",
          slidesPerView: 6,
          spaceBetween: 8,
		  direction: 'vertical',
		  breakpoints: {
			1400: {
				slidesPerView: 6,
				direction: 'vertical',
			},
			0: {
				slidesPerView: 4,
				direction: 'horizontal',
			},		          	 
		}
        },
      },
    });
  }
  var decrementButtons = document.querySelectorAll('.decrement');
  var incrementButtons = document.querySelectorAll('.increment');
  decrementButtons.forEach(function (button) {
	  button.addEventListener('click', function (event) {
			  event.preventDefault();
			  decreaseQuantity(button);
	  });
  });
  incrementButtons.forEach(function (button) {
	  button.addEventListener('click', function (event) {
			  event.preventDefault();
			  increaseQuantity(button);
	  });
  });
  function decreaseQuantity(clickedButton) {
	  var parentDiv = clickedButton.closest('.quantity');
	  var quantityInput = parentDiv.querySelector('.quantityInput');
	  var currentValue = parseInt(quantityInput.value, 10);
	  if (!isNaN(currentValue) && currentValue > 1) {
		  quantityInput.value = currentValue - 1;
		  checkInputValue(quantityInput);
	  }
  }
  function increaseQuantity(clickedButton) {
	  var parentDiv = clickedButton.closest('.quantity');
	  var quantityInput = parentDiv.querySelector('.quantityInput');
	  var currentValue = parseInt(quantityInput.value, 10);
	  if (!isNaN(currentValue)) {
		  quantityInput.value = currentValue + 1;
		  checkInputValue(quantityInput);
	  }
  }
  var quantityInputs = document.querySelectorAll('.quantityInput');
  quantityInputs.forEach(function(input) {
	  checkInputValue(input);
  });
  function checkInputValue(input) {
    var parentDiv = input.closest('.quantity');
    var decrementButton = parentDiv.querySelector('.decrement');
    var currentValue = parseInt(input.value, 10);
    if (currentValue === 1) {
        decrementButton.classList.add('disabled');
    } else {
        decrementButton.classList.remove('disabled');
    }
}
  var spoilerTop = document.querySelectorAll('.product__spoiler-top');
  spoilerTop.forEach(function (spoilerTop) {
	spoilerTop.addEventListener('click', function (event) {
		slideToggle(spoilerTop.nextElementSibling);
	  });
  });
  if(document.querySelector('.filter__categories.swiper')){
	new Swiper('.filter__categories.swiper', {
	  speed: 600,
	  spaceBetween: 10,
	  slidesPerView: "auto",
	  loop:false,
	  pagination: {
		el: '.filter__categories-pagination',
		type: 'progressbar',
	  },
	});
 }
 
 var catalogueTop = document.querySelectorAll('.catalogue__top');
 catalogueTop.forEach(function (catalogueTop) {
	catalogueTop.addEventListener('click', function (event) {
		catalogueTop.classList.toggle('hide');
		catalogueTop.nextElementSibling.classList.toggle('hide');
	 });
 });
 var catalogueMore = document.querySelectorAll('.catalogue__more');
 catalogueMore.forEach(function (catalogueMore) {
	catalogueMore.addEventListener('click', function (event) {
		event.preventDefault();
		if(catalogueMore.parentNode){
			catalogueMore.parentNode.classList.toggle('show');
		}
	 });
 });
});

