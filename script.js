const backgrounds = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #43cea2, #185a9d)",
  "linear-gradient(135deg, #ff512f, #dd2476)",
  "linear-gradient(135deg, #2193b0, #6dd5ed)",
  "linear-gradient(135deg, #cc2b5e, #753a88)"
];

function changeBackground() {
  const random = Math.floor(Math.random() * backgrounds.length);
  document.body.style.background = backgrounds[random];
}
