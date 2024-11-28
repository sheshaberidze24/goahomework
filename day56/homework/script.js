document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
    }
});

const programmers = {
    "Ada Lovelace": {
        bio: "Ada Lovelace was the first computer programmer.",
        img: "AdaLovelace.webp"
    },
    "Alan Turing": {
        bio: "Alan Turing was a pioneer in computer science.",
        img: "Alan-Turing.webp"
    },
    "Grace Hopper": {
        bio: "Grace Hopper invented the first compiler.",
        img: "Grace Hopper.jfif"
    },
    "Linus Torvalds": {
        bio: "Linus Torvalds created Linux.",
        img: "Linus-Torvalds.webp"
    }
};

function showProgrammer() {
    const selected = document.querySelector('input[name="programmer"]:checked');
    const infoDiv = document.getElementById('programmerInfo');
    infoDiv.innerHTML = ""; // Clear previous content

    if (!selected) {
        alert("Please select a programmer!");
        return;
    }

    const programmer = programmers[selected.value];
    const card = `
        <div class="programmer-card">
            <img src="${programmer.img}" alt="${selected.value}">
            <h3>${selected.value}</h3>
            <p>${programmer.bio}</p>
        </div>
    `;
    infoDiv.innerHTML = card;
}