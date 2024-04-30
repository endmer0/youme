// Reklamalar ro'yhati
const ads = [
  "logo-white.jpg",
  "logo-black.jpg",
  
];

// Reklama rasmini yangilash funktsiyasi
function changeAd() {
  const ad = document.getElementById("ad");
  // Tasdiqlash
  const index = Math.floor(Math.random() * ads.length);
  ad.src = ads[index];
}

// Reklama qutisini boshlash va reklamalarni avtomatik ravishda yangilash
window.onload = function() {
  changeAd(); // Birinchi reklamaning avtomatik ravishda o'zgarishi
  setInterval(changeAd, 1000); // 10 sekundga bir reklamani yangilash
};

  