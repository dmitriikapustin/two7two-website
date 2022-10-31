$(document).ready(function () {
    let counterBoolean = false;
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart + " +";
        }
      }, 40);
    }
  

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('.block-4').offset().top + $('.block-4').outerHeight() - window.innerHeight && counterBoolean === false)  {
            counterBoolean = true;
            for (j = 0; j < countersQuantity; j++) {
                count(0, counter[j], j);
            }
        }
    });

})