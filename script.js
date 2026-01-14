function askAI() {
  const input = document.getElementById("question");
  const chat = document.getElementById("chat");
  const q = input.value.trim().toLowerCase();

  if (q === "") return;

  // User message
  chat.innerHTML += `<div class="message user">${input.value}</div>`;

  let reply = "I am still learning 🙂";

  if (q.includes("study")) reply = "Study daily with consistency 📚";
  else if (q.includes("life")) reply = "Life is about learning and growing 🌱";
  else if (q.includes("career")) reply = "Skills will pay more than shortcuts 🚀";

  // AI reply
  setTimeout(() => {
    chat.innerHTML += `<div class="message ai">${reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  input.value = "";
}
