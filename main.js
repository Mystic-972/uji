const characters = [
    { name: "Afif", role: "CHIEF EXECUTIVE", codename: "ALPHA", ultimate: "Visionary Command" },
    { name: "Aria", role: "VICE PRESIDENT", codename: "VANGUARD", ultimate: "Crisis Control" },
    { name: "Syahla", role: "HEAD OF ADMIN", codename: "ORACLE", ultimate: "Master Plan" },
    { name: "Farhan", role: "CHIEF OF FINANCE", codename: "THE VAULT", ultimate: "Asset Lock" }
];

const subjectCoordinators = [
    { subject: "Konsep Sistem Informasi", name: "Falisha" },
    { subject: "Bahasa Inggris", name: "Rayi" },
    { subject: "Algoritma", name: "Aloysius" },
    { subject: "Pancasila", name: "Reyhan Pratama" },
    { subject: "Pemrograman", name: "Putraa" },
    { subject: "Matematika Dasar", name: "Ikhsan" },
    { subject: "Agama Islam", name: "Ferdy" },
    { subject: "Bahasa Indonesia", name: "Nisrina" }
];

const scheduleData = [
    {
        day: "Senin",
        subjects: [
            { time: "12.00 – 13.40", name: "Pemrograman", room: "Pak Shopan" },
            { time: "13.40 – 15.20", name: "Bahasa Inggris", room: "Mis Astri" }
        ]
    },
    {
        day: "Selasa",
        subjects: [
            { time: "12.00 – 14.30", name: "Konsep Sistem Informasi", room: "Pak Elnadi" },
            { time: "14.30 – 16.10", name: "Algoritma", room: "Pak Istiqomah" }
        ]
    },
    {
        day: "Kamis",
        subjects: [
            { time: "08.40 – 10.20", name: "Agama Islam", room: "Pak Koirul Anam" },
            { time: "10.20 – 12.00", name: "Bahasa Indonesia", room: "Pak Muhammad Aziz" }
        ]
    },
    {
        day: "Jumat",
        subjects: [
            { time: "07.30 – 09.10", name: "Matematika Dasar", room: "Pak Munali" },
            { time: "09.10 – 10.50", name: "Pancasila", room: "Bu Kristiningsih" }
        ]
    }
];

const homeworkData = [
    {
        subject: "Matematika Dasar",
        title: "Tugas Kelompok",
        deadline: "2025-12-29",
        description: "Upload makalah & ppt ke Google Drive"
    },
    {
        subject: "Algoritma",
        title: "Flowchart Login",
        deadline: "2026-12-25",
        description: "Buat flowchart logika login sistem perpustakaan."
    }
];

function renderLegacyCards() {
    const container = document.getElementById('card-container');
    container.innerHTML = '';

    characters.forEach((char, index) => {
        const card = document.createElement('div');
        card.className = 'brutal-card';

        card.innerHTML = `
            <span class="card-num">0${index + 1}</span>
            <div class="role-tag">${char.role}</div>
            <h3 class="card-title">${char.name}</h3>
            
            <div class="game-info">
                <div class="codename-box">
                    <span class="skill-label">CODENAME</span>
                    <span class="codename-val">"${char.codename}"</span>
                </div>
                <div class="ultimate-box">
                    <span class="skill-label">ULTIMATE SKILL</span>
                    <span class="ultimate-val">${char.ultimate}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Parallax Effect 
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const imgBox = document.querySelector('.image-box');
        const decor = document.querySelector('.image-decoration');

        if (imgBox) {
            imgBox.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
        if (decor) {
            decor.style.transform = `translate(${scrolled * -0.05}px, ${scrolled * 0.05}px)`;
        }
    });
}

function renderPJList() {
    const container = document.getElementById('pj-container');
    if (!container) return;
    container.innerHTML = '';

    subjectCoordinators.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'pj-item';
        div.innerHTML = `
            <span class="pj-num">0${index + 1}</span>
            <div class="pj-info">
                <span class="pj-subject">${item.subject}</span>
                <span class="pj-name">${item.name}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderSchedule() {
    const container = document.getElementById('schedule-grid');
    if (!container) return;
    container.innerHTML = '';

    scheduleData.forEach((day, index) => {
        const div = document.createElement('div');
        div.className = 'schedule-column';

        let subjectsHtml = day.subjects.map(s => `
            <div class="sch-item">
                <span class="sch-time">${s.time}</span>
                <span class="sch-name">${s.name}</span>
                <span class="sch-room">${s.room}</span>
            </div>
        `).join('');

        div.innerHTML = `
            <div class="sch-day-header">${day.day}</div>
            <div class="sch-body">${subjectsHtml}</div>
        `;
        container.appendChild(div);
    });
}

function renderHomework() {
    const container = document.getElementById('homework-grid');
    if (!container) return;
    container.innerHTML = '';

    homeworkData.forEach((hw, index) => {
        const div = document.createElement('div');
        div.className = 'brutal-card task-card';
        div.innerHTML = `
            <span class="card-num">${hw.deadline}</span>
            <div class="role-tag">${hw.subject}</div>
            <h3 class="card-title">${hw.title}</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 10px;">${hw.description}</p>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderLegacyCards();
    renderPJList();
    renderSchedule();
    renderHomework();
    setupParallax();
});
