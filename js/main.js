(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
    });
   // Load Header & Footer
    $("#header").load("components/header.html", function () {
        $(window).trigger('scroll');
    });
    $("#footer").load("components/footer.html");
    $("#form").load("components/form.html");
    
})(jQuery);
$(document).ready(function () {
    $("#testimonial").load("components/testimonial.html", function () {
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            smartSpeed: 1000,
            dots: true,
            nav: false,
            items: 1
        });
    });
});
const container = document.getElementById("portfolioContainer");

  for (let i = 1; i <= 43; i++) {
    container.innerHTML += `
      <div class="col-lg-4 col-md-6 portfolio-item">
        <div class="position-relative portfolio-box">
          <div class="img-box"><img src="images/${i}.jpeg" alt=""></div>
        </div>
      </div>
    `;
  }
