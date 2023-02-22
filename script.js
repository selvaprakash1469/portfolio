const queryCursor = document.querySelector(".cursor");

var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: window.innerWidth / 2,
  endY: window.innerHeight / 2,
  cursorVisible: true,
  cursorEnlarged: false,
  $cursor: queryCursor,

  init: function () {
    this.outlineSize = this.$cursor.offsetWidth;
    this.setupEventListeners();
    this.animateDotOutline();
  },

  setupEventListeners: function () {
    var self = this;

    // On Hover Some Elements
    document.querySelectorAll("img").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        self.cursorEnlarged = true;
        queryCursor.classList.add("active");
      });
      el.addEventListener("mouseout", function () {
        self.cursorEnlarged = false;
        queryCursor.classList.remove("active");
      });
    });
    
    // On Hover Disappears 
    document.querySelectorAll("a, input, textarea").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        self.cursorEnlarged = true;
        queryCursor.classList.add("hidden");
      });
      el.addEventListener("mouseout", function () {
        self.cursorEnlarged = false;
        queryCursor.classList.remove("hidden");
      });
    });

    document.addEventListener("mousemove", function (e) {
      // Show the cursor
      self.cursorVisible = true;
      self.toggleCursorVisibility();

      // Position the dot
      self.endX = e.pageX;
      self.endY = e.pageY;
    });

    // Hide/show cursor
    document.addEventListener("mouseenter", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$cursor.style.opacity = 1;
    });

    document.addEventListener("mouseleave", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$cursor.style.opacity = 0;
    });
  },

  animateDotOutline: function () {
    var self = this;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$cursor.style.top = self._y + "px";
    self.$cursor.style.left = self._x + "px";

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorVisibility: function () {
    var self = this;

    if (self.cursorVisible) {
      self.$cursor.style.opacity = 1;
    } else {
      self.$cursor.style.opacity = 0;
    }
  }
};
cursor.init();




var vwWidth = window.innerWidth;

var controller = new ScrollMagic.Controller();


/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



$.fn.isInViewport = function() {

	var elementTop = $(this).offset().top;

	var elementBottom = elementTop + $(this).outerHeight() / 2;

	var viewportTop = $(window).scrollTop();

	var viewportHalf = viewportTop + $(window).height() / 2;

	return elementBottom > viewportTop && elementTop < viewportHalf;

};

$(window).on('load resize scroll', function() {

	$('.resume-sec').each(function() {

		$(this).find(".title").text( $(this).data("title") );

		if ($(this).isInViewport()) {
			$(this).find(".title").addClass("active");
			$(this).addClass("in-view");

		} else {
			$(this).find(".title").removeClass("active");
			$(this).removeClass("in-view");

		}

	});

});





/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);


