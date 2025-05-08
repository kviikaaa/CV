// 1. Збереження даних про ОС і браузер
const osInfo = navigator.platform;
const browserInfo = navigator.userAgent;
localStorage.setItem("OS", osInfo);
localStorage.setItem("Browser", browserInfo);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("os").textContent = localStorage.getItem("OS");
    document.getElementById("browser").textContent = localStorage.getItem("Browser");
});

// 2. Запит до API
fetch('https://jsonplaceholder.typicode.com/posts/3/comments') // заміни 3 на свій варіант
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById("comments-list");
        data.forEach(comment => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${comment.name}:</strong> ${comment.body}`;
            list.appendChild(li);
        });
    });

// 3. Модальне вікно через 1 хвилину
setTimeout(() => {
    document.getElementById("modal").style.display = "flex";
}, 60000);

// 4. Темна/Світла тема
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem("theme", document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

document.addEventListener("DOMContentLoaded", () => {
    const hour = new Date().getHours();
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        if (savedTheme === 'dark') document.body.classList.add('dark-theme');
    } else if (hour >= 21 || hour < 7) {
        document.body.classList.add('dark-theme');
    }
});
