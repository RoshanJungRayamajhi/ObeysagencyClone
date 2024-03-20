let create = document.querySelector(".create")
const text = new SplitType(create)


gsap.set(text.chars, {
  fontFamily: "plain light",
})


create.addEventListener("mouseenter", () => {
  create.classList.add("create1")
  gsap.to(text.chars, {
    color: "transparent",
    fontFamily: "sansSerif",
    font: "italic",
    stagger: .1,
    duration: 1,
    ease: "linear",
  })
})
create.addEventListener("mouseleave", () => {
  create.classList.remove("create1")
  gsap.to(text.chars, {
    color: "white",
    fontFamily: "plain light",
    stagger: 0.1,
    duration: 2,
    ease: "linear",

  });


})



function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
const loader = document.querySelector(".loader")
document.addEventListener("DOMContentLoaded", function () {
  locomotiveAnimation();
});
function loadinganimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 100,
    stagger: 0.5,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from(".linepart1", {
    opacity: 0,
    onStart: function () {
      var h5 = document.querySelector(".linepart1 h5");
      let count = 0;
      setInterval(() => {
        if (count < 100) {
          count++;
          // num.innerHTML=count;
          h5.textContent = count;
        } else {
          h5.textContent = count;
        }
      }, 40);
    },
  });
  tl.to(".now", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    delay: 0,
    y: "-100%",
    display: "none",
    opacity: 0,
    duration: 2,
  }, "loading");
  tl.to("#page1", {
    delay: 0.3,
    opacity: 1,
    // y: 1300,
    ease: Power4,
  }, "loading");
  tl.from(".hero1 h1,.hero2 h1,.hero3 h2,.hero4 h1", {
    y: 130,
    stagger: 0.2,
  });
}

function cursoranimation() {
  document.addEventListener("mousemove", (e) => {
    gsap.to("#crsr", {
      left: e.x,
      top: e.y,
    });
    Shery.makeMagnet("#navpart2 h4");
  });




  const videoContainer = document.querySelector("#videocontainer");
  const videoCursor = document.getElementById("videocrsr");
  const video = document.getElementById('video')
  // Event listener for mousemove inside the video container
  videoContainer.addEventListener('mousemove', (e) => {
    gsap.to("#crsr", {
      display: "none",
    })
    const rect = videoContainer.getBoundingClientRect();
    const x = (e.clientX - rect.left);
    const y = (e.clientY - rect.top);


    // Use GSAP to smoothly move the video cursor
    gsap.to("#videocrsr", { left: x, top: y, duration: 0.2 });
  });
  videoContainer.addEventListener('mouseleave', (e) => {
    gsap.to("#crsr", {
      display: "initial",
    })
    gsap.to("#videocrsr", { left: "70%", top: "0", duration: 0.2 });

  })

  videoContainer.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      video.style.opacity = 1;
      document.querySelector("#videocrsr").innerHTML = `<i class="ri-pause-line"></i>`
      gsap.to("#videocrsr", {
        scale: 0.5,

      })
    } else {
      video.pause();
      video.style.opacity = 0;
      document.querySelector("#videocrsr").innerHTML = `<i class="ri-play-line"></i>`
      gsap.to("#videocrsr", {
        scale: 1,

      })
    }
  })
}
function sheryAnimation() {


  Shery.imageEffect("#imgdiv", {
    style: 2,
    gooey: true,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7241195453907675 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.23, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.5, "range": [0, 10] }, "metaball": { "value": 0.33, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.01, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
  });
}

function flaganimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
      left: dets.x,
      top: dets.y
    })
  })
  document.querySelector(".hero3").addEventListener("mouseenter", function () {
    gsap.to("#flag", {
      opacity: 1
    })
  })
  document.querySelector(".hero3").addEventListener("mouseleave", function () {
    gsap.to("#flag", {
      opacity: 0
    })
  })

}






loadinganimation();
cursoranimation();
flaganimation();
sheryAnimation();
