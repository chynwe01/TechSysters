//TOP NAVIGATION
// Nav start
(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery
// Nav end
   
    
    
    
    //SLIDE SHOW
    var myIndex = 0;
    carousel();
    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //INTERNET SPEED DETECT
    var imageAddr = "images/slide_1.jpg"; 
    var downloadSize = 289059;
    function ShowProgressMessage(msg) {
    if (console) {
    if (typeof msg == "string") {
    console.log(msg);
    } else {
    for (var i = 0; i < msg.length; i++) {
    console.log(msg[i]);
    }
    }
    }
    }
    function InitiateSpeedDetection() {
    ShowProgressMessage("Please wait...");
    window.setTimeout(MeasureConnectionSpeed, 1);
    };    
    if (window.addEventListener) {
    window.addEventListener('load', InitiateSpeedDetection, false);
    } else if (window.attachEvent) {
    window.attachEvent('onload', InitiateSpeedDetection);
    }
    function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
    endTime = (new Date()).getTime();
    showResults();
    }
    download.onerror = function (err, msg) {
    ShowProgressMessage("Invalid image, or error downloading");
    }
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;
    function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(0);
    if(speedMbps<="1"){
    document.getElementById("banner").style.display='none';
    document.getElementById("container").style.marginTop='20vh';
    }
    }
    }
    
    
    
    
    
    
    
    
    $(function() {
    var $clientslider = $('#clientlogo');
    var clients = $clientslider.children().length;
    var clientwidth = (clients * 220); 
    $clientslider.css('width', clientwidth);
    var rotating = true;
    var clientspeed = 1800;
    var seeclients = setInterval(rotateClients, clientspeed);
    $(document).on({
    mouseenter: function() {
    rotating = false;
    },
    mouseleave: function() {
    rotating = true;
    }
    }, '#ourclients');
    function rotateClients() {
    if (rotating != false) {
    var $first = $('#clientlogo li:first');
    $first.animate({
    'margin-left': '-33%'
    }, 2000, function() {
    $first.remove().css({
    'margin-left': '0px'
    });
    $('#clientlogo li:last').after($first);
    });
    }
    }
    });