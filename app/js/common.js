$(document).ready(function(){
    
    $(window).on('scroll', function() {
        if($(window).scrollTop() > 150) {
            $('.headertop').slideUp();
            $('.arrow-top').show(); 
        }
        
        else {
           $('.headertop').slideDown(); 
           $('.arrow-top').hide();      
        }
    });
    
    $('.arrow-top').on('click', function() {
        $('html, body').animate({scrollTop: 0},500);
        return false;
    })

    $('.burger').on('click', function() {
        $('.headermainmenu').slideToggle();  
    })
    
    
  
	var carousel = $("#carousel");
    
	carousel.owlCarousel({
    items:             2,
	itemsDesktopSmall: [1200, 2],
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
    backgroundColor: '#d9f2f8',
    markers: [
      {latLng: [41.90, 12.45], name: 'Vatican City'},
      {latLng: [43.73, 7.41], name: 'Monaco'},
      {latLng: [-0.52, 166.93], name: 'Nauru'},
      {latLng: [-8.51, 179.21], name: 'Tuvalu'},
      {latLng: [43.93, 12.46], name: 'San Marino'},
      {latLng: [47.14, 9.52], name: 'Liechtenstein'},
      {latLng: [7.11, 171.06], name: 'Marshall Islands'},
      {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
      {latLng: [3.2, 73.22], name: 'Maldives'},
      {latLng: [35.88, 14.5], name: 'Malta'},
      {latLng: [12.05, -61.75], name: 'Grenada'},
      {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
      {latLng: [13.16, -59.55], name: 'Barbados'},
      {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
      {latLng: [-4.61, 55.45], name: 'Seychelles'},
      {latLng: [7.35, 134.46], name: 'Palau'},
      {latLng: [42.5, 1.51], name: 'Andorra'},
      {latLng: [14.01, -60.98], name: 'Saint Lucia'},
      {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
      {latLng: [1.3, 103.8], name: 'Singapore'},
      {latLng: [1.46, 173.03], name: 'Kiribati'},
      {latLng: [-21.13, -175.2], name: 'Tonga'},
      {latLng: [15.3, -61.38], name: 'Dominica'},
      {latLng: [-20.2, 57.5], name: 'Mauritius'},
      {latLng: [26.02, 50.55], name: 'Bahrain'},
      {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
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

