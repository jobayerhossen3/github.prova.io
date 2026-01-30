// ১ ফেব্রুয়ারি ২০০৫ থেকে আজ পর্যন্ত সময় গণনা
function updateTimer() {
     const startDate = new Date('2005-02-01T00:00:00');
     const now = new Date();

     let diff = now - startDate;

     let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
     diff -= years * (1000 * 60 * 60 * 24 * 365.25);

     let days = Math.floor(diff / (1000 * 60 * 60 * 24));
     diff -= days * (1000 * 60 * 60 * 24);

     let hours = Math.floor(diff / (1000 * 60 * 60));
     diff -= hours * (1000 * 60 * 60);

     let minutes = Math.floor(diff / (1000 * 60));
     let seconds = Math.floor((diff % (1000 * 60)) / 1000);

     document.getElementById('countdown').innerHTML =
          `${years} বছর, ${days} দিন, ${hours} ঘণ্টা, ${minutes} মিনিট, ${seconds} সেকেন্ড`;
}

setInterval(updateTimer, 1000);
updateTimer();

// বাটন ক্লিক ইভেন্ট
document.getElementById('gift-btn').addEventListener('click', function () {
     // সেকশন দেখানো
     document.getElementById('message-section').classList.remove('hidden');
     document.getElementById('message-section').style.opacity = "1";

     // ফুল উড়ার অ্যানিমেশন
     createFlowers();
});

function createFlowers() {
     const container = document.getElementById('flower-container');
     const flowers = ['🌸', '🌹', '🌷', '🌺', '🌻', '🌼'];

     for (let i = 0; i < 50; i++) {
          setTimeout(() => {
               const flower = document.createElement('div');
               flower.className = 'flower';
               flower.style.left = Math.random() * 100 + 'vw';
               flower.style.animationDuration = (Math.random() * 2 + 3) + 's';
               flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
               container.appendChild(flower);

               // অ্যানিমেশন শেষে রিমুভ করা
               setTimeout(() => {
                    flower.remove();
               }, 5000);
          }, i * 100);
     }
}