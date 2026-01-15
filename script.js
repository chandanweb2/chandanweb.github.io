function askAI() {
  const input = document.getElementById("question");
  const chat = document.getElementById("chat");

  if (input.value.trim() === "") return;

  // User message
  chat.innerHTML += `<div class="message user">${input.value}</div>`;

  // AI reply
  setTimeout(() => {
    chat.innerHTML += `<div class="message ai">I am learning, ask me more 😊</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 400);

  input.value = "";
}
