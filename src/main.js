// --- MENU NAVIGATION BURGER MOBILE ---
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  if (mobileMenu.classList.contains('hidden')) {
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  } else {
    menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
  }
});

// --- LIVE TIME CLOCK ENGINE (DIKEMBALIKAN) ---
function updateTime() {
  const timeElement = document.getElementById('live-time');
  if(!timeElement) return;
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // Format 12 jam
  timeElement.textContent = `${hours}:${minutes} ${ampm}`;
}

// Jalankan langsung saat page di-load, lalu update setiap 1 menit
updateTime();
setInterval(updateTime, 60000);