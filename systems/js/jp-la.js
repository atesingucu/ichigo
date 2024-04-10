function applyFonts(element) {
    const text = element.textContent;
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        // Japon karakterler için genel bir aralık: 0x3040 ile 0x30ff arası, ve 0x4E00 ile 0x9FAF arası
        if ((charCode >= 0x3040 && charCode <= 0x30FF) || (charCode >= 0x4E00 && charCode <= 0x9FAF)) {
            newText += `<span class="japon">${text[i]}</span>`;
        } else {
            newText += `<span class="latin">${text[i]}</span>`;
        }
    }

    element.innerHTML = newText;
}

function applyFontsToAll() {
    const elements = document.querySelectorAll('p, div, span'); // İşlemek istediğiniz etiketleri buraya ekleyin

    elements.forEach(element => {
        // Eğer elementin içinde resim yoksa, font uygula
        if (!element.querySelector('img')) {
            applyFonts(element);
        }
    });
}

applyFontsToAll();
