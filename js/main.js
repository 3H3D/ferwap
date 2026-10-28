document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.footer-dots .dot');

    // Contoh fungsi interaktif sederhana saat tombol panah atau dot diklik
    prevBtn.addEventListener('click', () => {
        console.log('Tombol Sebelumnya diklik');
        // Tambahkan logika perpindahan artis/slide di sini jika ada data array multiple artis
    });

    nextBtn.addEventListener('click', () => {
        console.log('Tombol Selanjutnya diklik');
        // Tambahkan logika perpindahan artis/slide di sini jika ada data array multiple artis
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            console.log(`Dot ke-${index + 1} dipilih`);
        });
    });
});
