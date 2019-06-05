$(() => {

    // ** Variables ** //
    const $navbar = $('.navbar');
    const $navbarToggler = $('.navbar-toggler');
    const $navlink = $('.nav-link');
    const $subscribeForm = $('#subscribe-form');
    const $subscribeModal = $('#subscribe-modal');
    /*--------------------------------------------------------------
                            Navigation
    --------------------------------------------------------------*/
    /* Show dropdown-submenu */
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parents('.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });

    /* Nav link active */
    $navlink.click(function () {
        $navlink.removeClass('active');
        $(this).addClass('active');
    });

    /* Change navbar style when toggled on mobile */
    $navbarToggler.click(function () {
        $navbar.toggleClass('navbar-toggled');
    });
	

    /* Subscribe form */
    $subscribeForm.submit(function(e){
        e.preventDefault();
        $subscribeForm[0].reset();
        $subscribeModal.modal('show');
    });

	/* Subjects page and Courses page dropdown elements */
	$("#dropdown-boxes-btn-one").click(function(){
		$("#dropdown-boxes-one").toggle();
		$("#dropdown-arrow-right-one").toggle();
		$("#dropdown-arrow-down-one").toggle();
	});

	$("#dropdown-boxes-btn-two").click(function(){
		$("#dropdown-boxes-two").toggle();
		$("#dropdown-arrow-right-two").toggle();
		$("#dropdown-arrow-down-two").toggle();
	});

	$("#dropdown-boxes-btn-three").click(function(){
		$("#dropdown-boxes-three").toggle();
		$("#dropdown-arrow-right-three").toggle();
		$("#dropdown-arrow-down-three").toggle();
	});
});

/*--------------------------------------------------------------
                        Homepage slideshow
--------------------------------------------------------------*/
var slideIndex = 1;
showDivs(slideIndex);


function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow-item");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " white";
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideshow-item");
    var dots = document.getElementsByClassName("demo");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white", "");
    }
    dots[myIndex-1].className += " white";
    setTimeout(carousel, 4000); // Change image every 4 seconds
}


/*--------------------------------------------------------------

--------------------------------------------------------------*/

function popup() {
  document.getElementById("about-us-management-popup").style.display = "block";
}

function popupClose() {
  document.getElementById("about-us-management-popup").style.display = "none";
}

function popupBg() {
  document.getElementById("dark-bg-popup-close").style.display = "block";
}

function popupCloseBg() {
  document.getElementById("dark-bg-popup-close").style.display = "none";
}
 
	