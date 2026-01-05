document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Elemen
    const heroContent = document.querySelector('.hero-content');
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navLinksA = document.querySelectorAll('.nav-links a');

    // 2. Animasi Hero (Delay 300ms agar smooth)
    setTimeout(() => {
        if (heroContent) heroContent.classList.add('show');
    }, 300);

    // 3. Logika Hamburger Menu (Buka/Tutup)
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle'); 
        });
    }

    // 4. Tutup Menu saat Link diklik
    navLinksA.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (hamburger) hamburger.classList.remove('toggle');
        });
    });

    // 5. Efek Navbar & Scroll Reveal Animation
    const reveal = () => {
        // --- Bagian Navbar ---
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.height = '80px'; 
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.height = '100px'; 
        }

        // --- Bagian Scroll Reveal (Optimasi untuk Teks Besar) ---
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        
        // revealPoint dikecilkan ke 50 agar teks besar langsung muncul 
        // begitu ujung atasnya masuk sedikit ke layar
        const revealPoint = 50; 

        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // Jalankan fungsi saat scroll
    window.addEventListener('scroll', reveal);

    // Jalankan sekali saat pertama load
    reveal();
});