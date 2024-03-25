// Memastikan bahwa dokumen HTML telah dimuat sebelum menjalankan skrip JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Mengambil elemen-elemen yang diperlukan dari dokumen HTML
    const checkboxToggle = document.getElementById("checkbox_toggle"); // Checkbox untuk toggle menu
    const navLinks = document.querySelector(".nav-links"); // Link navigasi
    const hamburger = document.querySelector(".hamburger"); // Icon hamburger

    // Menambahkan event listener untuk hamburger icon agar bisa mengaktifkan toggle menu
    hamburger.addEventListener("click", function() {
        // Menambahkan animasi loading selama 1.5 detik saat hamburger icon diklik
        addLoadingAnimation();
        setTimeout(() => {
            navLinks.classList.toggle("show");
        }, 1500);
    });

    // Menyembunyikan menu saat link diklik (untuk tampilan mobile)
    navLinks.querySelectorAll("li a").forEach(link => {
        link.addEventListener("click", function() {
            // Menambahkan animasi loading selama 1.5 detik saat link diklik
            addLoadingAnimation();
            setTimeout(() => {
                navLinks.classList.remove("show");
            }, 1500);
        });
    });

    // Highlight link aktif sesuai halaman yang sedang dibuka
    const currentLocation = window.location.href;
    const navItems = navLinks.querySelectorAll("li a");
    navItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add("active");
        }
    });

    // Menambahkan efek parallax pada hero section saat melakukan scroll
    window.addEventListener("scroll", function() {
        const scrolled = window.scrollY;
        const hero = document.querySelector(".hero");
        hero.style.backgroundPositionY = -scrolled * 0.5 + "px";
    });

    // Menambahkan fitur smooth scrolling untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                // Menambahkan animasi loading selama 1.5 detik saat anchor link diklik
                addLoadingAnimation();
                setTimeout(() => {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }, 1500);
            }
        });
    });

    // Menampilkan atau menyembunyikan tombol scroll-to-top saat melakukan scroll
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    // Mengatur aksi saat tombol scroll-to-top diklik
    scrollToTopBtn.addEventListener("click", function() {
        // Menambahkan animasi loading selama 1.5 detik saat tombol scroll-to-top diklik
        addLoadingAnimation();
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 1500);
    });

    // Fungsi untuk membagikan link ke Facebook atau Twitter saat tombol "Bagikan" diklik
    function shareOnSocialMedia(platform) {
        let shareUrl;
        if (platform === 'facebook') {
            shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href);
        } else if (platform === 'twitter') {
            shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href);
        }
        
        // Membuka jendela baru untuk pembagian
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }

    // Menambahkan event listener untuk tombol "Bagikan"
    const shareButton = document.querySelector('.share-button button');
    shareButton.addEventListener('click', function() {
        // Menampilkan jendela pembagian ke Facebook atau Twitter saat tombol "Bagikan" diklik
        shareOnSocialMedia('facebook');
        shareOnSocialMedia('twitter');
    });
});

// Tampilkan animasi loading saat perpindahan halaman
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader');

    // Sembunyikan loader setelah konten dimuat
    window.addEventListener('load', function() {
        loader.style.display = 'none';
    });

    // Tampilkan loader saat perpindahan halaman
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            loader.style.display = 'block';
            setTimeout(function() {
                loader.style.display = 'none';
            }, 1500); // Tampilkan loader selama 1,5 detik
        });
    });
});
