const reactions = [
  "😏 Dekha! Mana kiya tha phir bhi click kar diya.",
  "🧠 Tumhara dimag 'forbidden' cheez ki taraf attract hota hai.",
  "😂 90% log yahi karte hain. Tum bhi unme se ho.",
  "✨ Control mushkil hota hai jab curiosity aa jaaye.",
  "🔥 Sach ye hai: mana ki cheez sabse tempting hoti hai."
];

function tricked() {
  const box = document.getElementById("result");
  box.style.opacity = 0;

  setTimeout(() => {
    const r = Math.floor(Math.random() * reactions.length);
    box.innerText = reactions[r];
    box.style.opacity = 1;
  }, 200);
}
