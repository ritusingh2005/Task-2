/* ---------------- SHOW / HIDE SECTIONS ---------------- */
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.add("hidden");
    });

    const active = document.getElementById(sectionId);
    active.classList.remove("hidden");
    active.style.opacity = 0;

    setTimeout(() => {
        active.style.opacity = 1;
        active.style.transition = "0.4s";
    }, 10);
}

/* ---------------- FORM VALIDATION ---------------- */
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");

    if (name === "" || email === "" || message === "") {
        showMessage(msg, "❌ All fields are required!", "red");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showMessage(msg, "❌ Enter a valid email!", "red");
        return;
    }

    showMessage(msg, "✔ Form Submitted Successfully!", "green");
    document.getElementById("contactForm").reset();
});

function showMessage(elem, text, color) {
    elem.innerText = text;
    elem.style.color = color;
    elem.style.opacity = 0;

    setTimeout(() => {
        elem.style.opacity = 1;
        elem.style.transition = "0.4s";
    }, 10);
}

/* ---------------- TO-DO LIST ---------------- */
function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button onclick="removeTask(this)">Delete</button>
    `;

    li.style.opacity = 0;
    document.getElementById("todoList").appendChild(li);

    setTimeout(() => {
        li.style.opacity = 1;
        li.style.transition = "0.3s";
    }, 10);

    input.value = "";
}

function removeTask(btn) {
    const li = btn.parentElement;
    li.style.opacity = 0;

    setTimeout(() => {
        li.remove();
    }, 250);
}

/* ---------------- IMAGE GALLERY WITH DEVICE FILE ---------------- */
function addImage() {
    const fileInput = document.getElementById("imgFile");
    const file = fileInput.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        const gallery = document.getElementById("gallery");

        const div = document.createElement("div");
        div.classList.add("gallery-item");

        div.innerHTML = `
            <img src="${e.target.result}" alt="Image">
            <button class="del-img" onclick="removeImage(this)">X</button>
        `;

        gallery.appendChild(div);
    };

    reader.readAsDataURL(file);
    fileInput.value = "";
}

function removeImage(btn) {
    btn.parentElement.remove();
}
