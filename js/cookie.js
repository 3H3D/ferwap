// Memuat Banner Cookie Keamanan Secara Otomatis
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah pengunjung sudah pernah menyetujui cookie sebelumnya
    if (localStorage.getItem('ferwap_cookie_accepted') === 'true') {
        return; // Jika sudah setuju, jangan tampilkan banner
    }

    // Buat elemen banner secara dinamis
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #121212;
        color: #ffffff;
        padding: 15px 20px;
        box-shadow: 0 -4px 20px rgba(0,0,0,0.8);
        z-index: 9999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        box-sizing: border-box;
        border-top: 1px solid #27272a;
    `;

    banner.innerHTML = `
        <div style="font-size: 0.85rem; line-height: 1.4; max-width: 800px; padding-right: 15px;">
            Kami menggunakan cookie untuk memastikan pengalaman terbaik di situs resmi Ferwap Music. Dengan terus menjelajahi situs ini, Anda menyetujui <a href="privacy.html" style="color: #3b82f6; text-decoration: underline;">Kebijakan Privasi</a> kami.
        </div>
        <div style="display: flex; gap: 10px; flex-shrink: 0;">
            <button id="accept-cookie-btn" style="background-color: #cc0000; color: #ffffff; border: none; padding: 8px 18px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 0.85rem; transition: background 0.2s;">Setuju</button>
        </div>
    `;

    // Tempelkan banner ke dalam halaman
    document.body.appendChild(banner);

    // Event listener untuk tombol Setuju
    document.getElementById('accept-cookie-btn').addEventListener('click', function() {
        localStorage.setItem('ferwap_cookie_accepted', 'true');
        banner.style.display = 'none';
    });
});
