document.addEventListener('DOMContentLoaded', () => {
    // Data daftar artis (Foto, Nama, dan Link Web Resmi)
    const artists = [
        {
            name: "3H3D",
            image: "3H3D.jpeg", // Menggunakan file foto yang sudah ada di repository kamu
            link: "https://3h3dofficial.web.id"
        },
        {
            name: "ANDER",
            image: "ANDER.jpg", // Ubah/tambahkan file foto artis berikutnya di folder img jika ada
            link: "https://3h3d.github.io/ANDER"
        },
        {
            name: "Ferrson",
            image: "Ferrson.F.jpeg", // Ubah/tambahkan file foto artis berikutnya jika ada
            link: "https://3h3d.github.io/Ferrson"
        }
    ];

    let currentIndex = 0;

    // Ambil elemen HTML yang dibutuhkan
    const artistNameEl = document.querySelector('.artist-label-text');
    const artistImgEl = document.querySelector('.hero-img');
    const artistLinkEl = document.querySelector('.hero-image-box a');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.hero-dots .dot');

    // Fungsi untuk memperbarui tampilan slide berdasarkan index aktif
    function updateSlide(index) {
        const currentArtist = artists[index];
        
        // Ganti teks nama artis
        if (artistNameEl) artistNameEl.textContent = currentArtist.name;
        
        // Ganti gambar foto artis
        if (artistImgEl) artistImgEl.src = currentArtist.image;
        
        // Ganti link web resmi jika gambar diklik
        if (artistLinkEl) artistLinkEl.href = currentArtist.link;

        // Perbarui titik indikator (dots) aktif
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Tombol Panah Kanan (Selanjutnya)
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % artists.length;
            updateSlide(currentIndex);
        });
    }

    // Tombol Panah Kiri (Sebelumnya)
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + artists.length) % artists.length;
            updateSlide(currentIndex);
        });
    }

    // Interaksi klik pada titik indikator (dots)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlide(currentIndex);
        });
    });

    // Fitur Otomatis Bergeser Sendiri Setiap 10 Detik
    setInterval(() => {
        currentIndex = (currentIndex + 1) % artists.length;
        updateSlide(currentIndex);
    }, 10000);
});
