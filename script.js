const surprises = [
  "🔥 Success comes to those who start!",
  "😄 You are smarter than you think.",
  "💡 Tip: Learn one new thing daily.",
  "😂 Fun Fact: Honey never expires!",
  "🚀 Keep going, don’t stop now!"
];

function surprise() {
  const random = Math.floor(Math.random() * surprises.length);
  document.getElementById("output").innerText = surprises[random];
}
