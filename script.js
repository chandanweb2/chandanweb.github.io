const truths = [
  "Tum busy ho, productive nahi.",
  "Shortcut dhoondhne me hi zyada time waste hota hai.",
  "Tum phone kam aur bahane zyada chalate ho.",
  "Aaj jo avoid kar rahe ho, wahi tumhari problem hai.",
  "Skill bina discipline ke zero hai.",
  "Tum consistency se nahi, mood se kaam karte ho.",
  "Tum me potential hai, par routine nahi.",
  "Sach ye hai: tum khud hi apni rukawat ho."
];

function showTruth() {
  const t = document.getElementById("truth");
  t.style.opacity = 0;

  setTimeout(() => {
    const r = Math.floor(Math.random() * truths.length);
    t.innerText = truths[r];
    t.style.opacity = 1;
  }, 200);
}
