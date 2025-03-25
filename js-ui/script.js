// 🎨 Перемикання теми
const toggle = document.getElementById("toggle-theme");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme", toggle.checked);
});

// 📬 Обробка форми
document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const msg = document.getElementById('msg').value;
  const date = document.getElementById('date').value;

  if (!msg || !date) {
    alert("Будь ласка, заповни обидва поля.");
    return;
  }

  try {
    const res = await fetch('http://localhost:8080/capsule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: msg, openAt: date }),
    });

    if (!res.ok) {
      throw new Error("Щось пішло не так з сервером.");
    }

    const data = await res.json();
    const respBlock = document.getElementById('response');
    respBlock.classList.add('show');
    respBlock.textContent = `✅ Капсула збережена! ID: ${data.id}`;
  } catch (err) {
    alert("🚫 Помилка: " + err.message);
  }
});
