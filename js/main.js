(function() {
	'use strict';
  
	// DOM elements
	const header = document.getElementById('fh5co-header');
	const scrollToTopBtn = document.querySelector('.scroll-to-top');
	
	// Add scroll to top button to the DOM if it doesn't exist
	if (!scrollToTopBtn) {
	  const scrollBtn = document.createElement('div');
	  scrollBtn.className = 'scroll-to-top';
	  scrollBtn.innerHTML = '<i class="icon-arrow-up"></i>';
	  document.body.appendChild(scrollBtn);
	}
  
	// Function to handle sticky header
	function handleStickyHeader() {
	  if (window.scrollY > 100) {
		header.classList.add('header-scrolled');
	  } else {
		header.classList.remove('header-scrolled');
	  }
	}
  
	// Function to handle scroll to top button visibility
	function handleScrollToTopVisibility() {
	  const scrollToTopBtn = document.querySelector('.scroll-to-top');
	  if (window.scrollY > 500) {
		scrollToTopBtn.classList.add('active');
	  } else {
		scrollToTopBtn.classList.remove('active');
	  }
	}
  
	// Function to scroll to top
	function scrollToTop() {
	  window.scrollTo({
		top: 0,
		behavior: 'smooth'
	  });
	}
  
	// Function to initialize animations
	function initAnimations() {
	  // Add animation classes to elements
	  const animatedElements = document.querySelectorAll('.gtco-heading, .project-title, .fh5co-feature');
	  
	  animatedElements.forEach((element, index) => {
		element.classList.add('animate-fade-in');
		
		// Add delay classes based on index
		if (index % 3 === 1) {
		  element.classList.add('animate-delay-1');
		} else if (index % 3 === 2) {
		  element.classList.add('animate-delay-2');
		} else if (index % 3 === 0 && index !== 0) {
		  element.classList.add('animate-delay-3');
		}
	  });
	}
  
	// Function to handle smooth scrolling for anchor links
	function initSmoothScrolling() {
	  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
		  e.preventDefault();
		  
		  const targetId = this.getAttribute('href');
		  if (targetId === '#') return;
		  
		  const targetElement = document.querySelector(targetId);
		  if (targetElement) {
			window.scrollTo({
			  top: targetElement.offsetTop - 80, // Offset for header
			  behavior: 'smooth'
			});
		  }
		});
	  });
	}
  
	// Function to enhance project cards
	function enhanceProjectCards() {
	  const projectItems = document.querySelectorAll('.fh5co-project-item');
	  
	  projectItems.forEach(item => {
		// Add overlay with icon if not present
		const figure = item.querySelector('figure');
		if (figure) {
		  let overlay = figure.querySelector('.overlay');
		  
		  if (!overlay) {
			overlay = document.createElement('div');
			overlay.className = 'overlay';
			overlay.innerHTML = '<i class="icon-link"></i>';
			figure.appendChild(overlay);
		  }
		}
	  });
	}
  
	// Event listeners
	window.addEventListener('scroll', function() {
	  handleStickyHeader();
	  handleScrollToTopVisibility();
	});
  
	document.querySelector('.scroll-to-top')?.addEventListener('click', scrollToTop);
  
	// Initialize on DOM content loaded
	document.addEventListener('DOMContentLoaded', function() {
	  handleStickyHeader(); // Check initial scroll position
	  handleScrollToTopVisibility(); // Check initial scroll position
	  initAnimations();
	  initSmoothScrolling();
	  enhanceProjectCards();
	  
	  // Initialize parallax effect
	  if (typeof $.fn.stellar === 'function') {
		$(window).stellar({
		  horizontalScrolling: false,
		  hideDistantElements: false,
		  responsive: true
		});
	  }
	});
  
  })();
  