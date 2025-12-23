// Data Definitions
const stackData = [
    {
        icon: '#',
        title: '.NET',
        desc: 'Building high-performance, containerized microservices. Expert in Entity Framework, MassTransit, and Azure deployment.'
    },
    {
        icon: '☕',
        title: 'Java Spring Boot',
        desc: 'Designing backends with Spring Security. Focus on Banking and Transactional consistency.'
    },
    {
        icon: '⚡',
        title: 'webMethods',
        desc: 'The glue that holds the enterprise together. ESB pipelines, B2B integration, and API Management gateways.'
    }
];

const experienceData = [
    {
        date: '2025 - PRESENT',
        title: 'WebMethods Developer',
        company: 'Bank Negara Indonesia',
        desc: 'Developing microservices architecture governed by Software AG webMethods.'
    },
    {
        date: '2024 - 2025',
        title: 'Java Spring Developer',
        company: 'Bank Negara Indonesia',
        desc: 'Developing backend for QRIS Merchant of BNI.'
    },
    {
        date: '2022 - 2024',
        title: 'Android Developer',
        company: 'Bank Negara Indonesia',
        desc: 'Developing mobile banking of BNI.'
    },
    {
        date: '2019 - 2022',
        title: '.NET Developer',
        company: 'Bank Sahabat Sampoerna',
        desc: 'Developing LOS and FOS with ASP.NET MVC web services.'
    }
];

// Render Functions
function renderStack() {
    const container = document.getElementById('stack-grid');
    if (!container) return;

    stackData.forEach((item, index) => {
        const delayClass = `delay-${index + 1}`;
        const card = document.createElement('div');
        card.className = `card fade-in ${delayClass}`;
        card.innerHTML = `
            <span class="card-icon">${item.icon}</span>
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
        `;
        container.appendChild(card);
    });
}

function renderExperience() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    experienceData.forEach((item, index) => {
        const delayClass = `delay-${index + 1}`;
        const div = document.createElement('div');
        div.className = `timeline-item fade-in ${delayClass}`;
        div.innerHTML = `
            <span class="timeline-date">${item.date}</span>
            <h3>${item.title}</h3>
            <p class="highlight">${item.company}</p>
            <p>${item.desc}</p>
        `;
        container.appendChild(div);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderStack();
    renderExperience();
    initObserver();
});

// Intersection Observer
function initObserver() {
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scroll without Hash Update
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Disable Inspect Element
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
    ) {
        e.preventDefault();
    }
});

// Loader Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader-wrapper');
        if (loader) {
            loader.classList.add('loaded');
            // Allow scrolling again if we blocked it (optional, but good practice if body was hidden)
            document.body.style.overflow = 'auto'; // ensure scrolling is enabled
        }

        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');

        // Default to Dark Mode (No localStorage check)

        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'light') {
                document.documentElement.setAttribute('data-theme', 'dark');
                // localStorage.setItem('theme', 'dark'); // Persistence removed
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                // localStorage.setItem('theme', 'light'); // Persistence removed
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        });

    }, 500); // Minimum 0.5 seconds loader
});
