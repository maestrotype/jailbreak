$(document).ready(function(){
    
    $(window).on('scroll', function() {
        if($(window).scrollTop() > 150) {
            $('.headertop').slideUp();
            $('.arrow-top').show(); 
            $('.headermainmenu').addClass('headermainmenu-scroll');
            $('.logo').addClass('small');
            $('.container-f').addClass('small');
        }
        
        else {
           $('.headertop').slideDown(); 
           $('.arrow-top').hide(); 
           $('.headermainmenu').removeClass('headermainmenu-scroll');
           $('.logo').removeClass('small');  
           $('.container-f').removeClass('small');   
        }
    });
    
    $('.arrow-top').on('click', function() {
        $('html, body').animate({scrollTop: 0},500);
        return false;
    })

    $('.burger').on('click', function() {
        $('.headermainmenu').slideToggle(); 
        $(this).toggleClass('active-burger'); 
    })
    
    
  
	var carousel = $("#carousel");
    
	carousel.owlCarousel({
    items:             2,
	itemsDesktopSmall: [1200, 1],
    itemsTablet:       [1080, 1],
	itemsMobile:       false
    
    });
        
    $('#js-prev').click(function () {
	carousel.trigger('owl.prev');
	return false;
});

$('#js-next').click(function () {
	carousel.trigger('owl.next');
	return false;
}); 
    
    $(function(){


  $('#map').vectorMap({
    map: 'world_mill',
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: '#10b5dc',
        stroke: '#10b5dc'
      }
    },
    markerStyle: {
      initial: {
        fill: '#d9f2f8',
        stroke: '#10849f'
      }
    },
    backgroundColor: 'transparent',
    markers: [
      {latLng: [52.50, 13.39], name: 'Berlin'},
        {latLng: [53.56, 10.00], name: 'Hamburg'},
        {latLng: [48.13, 11.56], name: 'Munich'},
        {latLng: [50.95, 6.96], name: 'Cologne'},
        {latLng: [50.11, 8.68], name: 'Frankfurt am Main'},
        {latLng: [48.77, 9.17], name: 'Stuttgart'},
        {latLng: [51.23, 6.78], name: 'Düsseldorf'},
        {latLng: [51.51, 7.46], name: 'Dortmund'},
        {latLng: [51.45, 7.01], name: 'Essen'},
        {latLng: [53.07, 8.80], name: 'Bremen'},
        {latLng: [40.785091, -73.968285], name: 'New York'},
        {latLng: [36.778259, -119.417931], name: 'California'},
        {latLng: [47.751076, -120.740135], name: 'Washington'},
        {latLng: [37.839333, -84.270020], name: 'Kentucky'},
        {latLng: [39.876019, -117.224121], name: 'Nevada'},
        
    ]
  })

});
    (function() {

  // get's all video wrapper divs
  var youtube = document.querySelectorAll(".youtube");

  // iterates through all the divs
  for (var i = 0; i < youtube.length; i++) {

    /* 
    gets the video id we mentioned in the data-embed attribute
    to generate image thumbnail urls, youtube has several
    resolutions.
    https://maestro83@bitbucket.org/codersgalaxy/jailbreakvpn-front.git
    https://github.com/maestrotype/jailbreak.git
    - mqdefault 320 x 180
    - hqdefault 480 x 360
    - sddefault - 640 x 480
    - maxresdefault - 1920 x 1080
    */
    var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

    /*
    creates new image and sets the source attribute to the thumbnail
    url we generated above and sets it to load the image on page load
    */
    var image = new Image();
    image.src = source;
    image.addEventListener("load", function() {
      youtube[i].appendChild(image);
    }(i));

    /*
    below is where the magic happens, we attach click listeners to the 
    video embed divs and when clicked we create a new iframe and sets
    it inside the video wrapper div and only then will the js files
    associated with the embedded video be loaded
    */

    youtube[i].addEventListener("click", function() {

      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  };

})();

  $('.headertop__select').on('click', function () {
    $('.headertop__list').slideToggle();
  })

  $('.headertop__list .headertop__link').on('click', function (event) {
    event.preventDefault();
    var value = $(this).text();
    $('.headertop__select').text(value);
    $('.headertop__list').slideToggle();
  })

});

