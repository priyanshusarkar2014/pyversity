(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

  // Close dropdown when cross button is clicked
  function closeDropdown(btn) {
    btn.closest('.dropdown-menu').classList.add('hidden');
  }

  // Close all dropdowns (e.g., when a nav item is clicked)
  function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.navbar .dropdown-menu');
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.add('hidden');
    });
  }

  // Handle click outside dropdown to close it
  window.addEventListener('click', function (e) {
    if (window.matchMedia("(min-width: 992px)").matches) {
      const dropdowns = document.querySelectorAll('.navbar .dropdown-menu');
      dropdowns.forEach(function (dropdown) {
        // If click is outside the dropdown and navbar
        if (!dropdown.contains(e.target) && !dropdown.closest('.nav-item').contains(e.target)) {
          dropdown.classList.add('hidden');
        }
      });
    }
  });

  // Reopen dropdown on hover
  document.querySelectorAll('.navbar .nav-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
      if (window.matchMedia("(min-width: 992px)").matches) {
        const dropdown = item.querySelector('.dropdown-menu');
        if (dropdown) {
          dropdown.classList.remove('hidden');
        }
      }
    });
  });