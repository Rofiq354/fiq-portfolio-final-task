const track = document.getElementById("techTrack");

// Clone items to make seamless loop
track.innerHTML += track.innerHTML;

let position = 0;
const speed = 0.5; // makin kecil makin halus

function animate() {
  position -= speed;

  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();
