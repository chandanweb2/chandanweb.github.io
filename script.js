// -------- Background auto change (soft & premium) --------
const gradients = [
  "linear-gradient(135deg, #1d2671, #c33764)",
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #2193b0, #6dd5ed)",
  "linear-gradient(135deg, #cc2b5e, #753a88)"
];

function changeBackground() {
  const i = Math.floor(Math.random() * gradients.length);
  document.body.style.background = gradients[i];
}

// -------- Smooth page fade-in --------
window.onload = () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1s";
  document.body.style.opacity = 1;
  changeBackground();
};

// -------- Useful Click & Surprise (not useless 😅) --------
const tips = [
  "📌 Govt work ke liye sirf official website use karein.",
  "📄 Aadhaar–PAN details hamesha match rakhein.",
  "🗂️ DigiLocker me documents safe rakhein.",
  "🧾 Income Tax ka kaam last date se pehle karein.",
  "🗳️ Voter ID update online hi possible hai."
];

function showTip() {
  const box = document.getElementById("tip");
  const r = Math.floor(Math.random() * tips.length);
  box.innerText = tips[r];
}
