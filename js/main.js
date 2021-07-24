document.addEventListener('DOMContentLoaded', function() {

  var markerText = document.querySelectorAll('.js-marker');

  var markerTextArr = Array.prototype.slice.call(markerText);


  var cb = function(entries, observer) {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add('inview');
        observer.unobserve(entry.target);
      }

    });
  }

  var options = {
    rootMargin: "-50px 0px"
  }

  var io = new IntersectionObserver(cb, options);
  io.POLL_INTERVAL = 100;
  markerTextArr.forEach(el => {
    io.observe(el);
  });

});
