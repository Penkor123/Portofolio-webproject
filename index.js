    // Fungsi untuk mengatur layout responsif
    function adjustLayout() {
        const main = document.querySelector('main');
        const aside = document.querySelector('aside');

        // Jika lebar jendela lebih kecil dari 768px
        if (window.innerWidth < 768) {
            main.style.flexDirection = 'column'; // Ubah menjadi satu kolom
            aside.style.order = '1'; // Pindahkan aside ke atas
        } else {
            main.style.flexDirection = 'row'; // Kembali ke dua kolom
            aside.style.order = '0'; // Kembalikan urutan aside
        }
    }

    // Menjalankan fungsi saat halaman dimuat
    window.addEventListener('load', adjustLayout);

    // Menjalankan fungsi saat ukuran jendela berubah
    window.addEventListener('resize', adjustLayout);