window.addEventListener('DOMContentLoaded', (event) => {
    if (window.innerWidth <= 767) { // Mobil cihaz genişliğine göre ayarlayın
        var ichigoSenpai = document.querySelector('.ichigo-senpai');
        if (ichigoSenpai) {
            ichigoSenpai.remove(); // .ichigo-senpai'ı DOM'dan kaldır
        }
    }
});
