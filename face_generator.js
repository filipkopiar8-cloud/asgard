// Pixel Art Character Generator pre hry Valhalla / Bohovia Severu

// Palety farieb pre kožu a oči
const SKIN_PALETTES = [
    { skin: '#ffe0bd', shadow: '#d4a373', outline: '#8d5b4c' }, // Svietivá / Svetlá
    { skin: '#f3c193', shadow: '#c68b59', outline: '#73462c' }, // Opálená
    { skin: '#a67244', shadow: '#784c28', outline: '#422712' }, // Tmavá
    { skin: '#5c3a21', shadow: '#3b2312', outline: '#1c0f06' }  // Veľmi tmavá
];

const EYE_COLORS = ['#3a86ff', '#38b000', '#ebcb8b', '#d90429', '#8338ec', '#000000'];

let currentSkinIndex = 0;

function updateFaceGenerator() {
    const skinPalette = SKIN_PALETTES[currentSkinIndex];
    const hairColor = document.getElementById('face-color').value;
    const eyeColor = document.getElementById('face-eye-color').value;
    const hairStyle = document.getElementById('face-hair-style').value;
    const beardStyle = document.getElementById('face-beard-style').value;
    const expression = document.getElementById('face-expression').value;
    const accessory = document.getElementById('face-accessory').value;

    // Prvky SVG
    const skinEls = document.querySelectorAll('.pixel-skin');
    const shadowEls = document.querySelectorAll('.pixel-skin-shadow');
    const outlineEls = document.querySelectorAll('.pixel-skin-outline');
    const eyeLEl = document.getElementById('svg-eye-l');
    const eyeREl = document.getElementById('svg-eye-r');
    const hairEl = document.getElementById('svg-hair');
    const beardEl = document.getElementById('svg-beard');
    const mouthEl = document.getElementById('svg-mouth');
    const accessoryEl = document.getElementById('svg-accessory');

    // Nastavenie farby kože
    skinEls.forEach(el => el.setAttribute('fill', skinPalette.skin));
    shadowEls.forEach(el => el.setAttribute('fill', skinPalette.shadow));
    outlineEls.forEach(el => el.setAttribute('fill', skinPalette.outline));

    // Nastavenie farby očí a vlasov
    if (eyeLEl) eyeLEl.setAttribute('fill', eyeColor);
    if (eyeREl) eyeREl.setAttribute('fill', eyeColor);
    if (hairEl) hairEl.setAttribute('fill', hairColor);
    if (beardEl) beardEl.setAttribute('fill', hairColor);

    // Výrazy úst (Pixel art tvary)
    if (mouthEl) {
        if (expression === 'smile') {
            mouthEl.setAttribute('d', 'M 42 62 h 16 v 3 h -16 z M 40 59 h 2 v 3 h -2 z M 58 59 h 2 v 3 h -2 z');
        } else if (expression === 'angry') {
            mouthEl.setAttribute('d', 'M 42 64 h 16 v 3 h -16 z M 40 64 h 2 v -3 h -2 z M 58 64 h 2 v -3 h -2 z');
        } else if (expression === 'surprised') {
            mouthEl.setAttribute('d', 'M 45 60 h 10 v 8 h -10 z');
        } else if (expression === 'smirk') {
            mouthEl.setAttribute('d', 'M 44 62 h 12 v 3 h -12 z M 56 59 h 3 v 3 h -3 z');
        } else {
            // Neutrálny
            mouthEl.setAttribute('d', 'M 43 62 h 14 v 3 h -14 z');
        }
    }

    // Účesy (Pixel art)
    if (hairEl) {
        if (hairStyle === 'braids') {
            hairEl.setAttribute('d', 'M 25 15 h 50 v 20 h -50 z M 20 25 h 10 v 45 h -10 z M 70 25 h 10 v 45 h -10 z M 15 50 h 10 v 25 h -10 z M 75 50 h 10 v 25 h -10 z');
        } else if (hairStyle === 'mane') {
            hairEl.setAttribute('d', 'M 20 10 h 60 v 25 h -60 z M 15 20 h 15 v 55 h -15 z M 70 20 h 15 v 55 h -15 z M 10 35 h 15 v 30 h -15 z M 75 35 h 15 v 30 h -15 z');
        } else if (hairStyle === 'mohawk') {
            hairEl.setAttribute('d', 'M 40 5 h 20 v 30 h -20 z M 45 0 h 10 v 10 h -10 z');
        } else if (hairStyle === 'dreads') {
            hairEl.setAttribute('d', 'M 20 15 h 60 v 18 h -60 z M 20 30 h 8 v 50 h -8 z M 32 30 h 8 v 45 h -8 z M 60 30 h 8 v 45 h -8 z M 72 30 h 8 v 50 h -8 z');
        } else if (hairStyle === 'spiky') {
            hairEl.setAttribute('d', 'M 20 20 h 60 v 15 h -60 z M 25 10 h 10 v 15 h -10 z M 45 5 h 10 v 20 h -10 z M 65 10 h 10 v 15 h -10 z');
        } else {
            // Bald / Holohlavý
            hairEl.setAttribute('d', '');
        }
    }

    // Brady (Pixel art)
    if (beardEl) {
        if (beardStyle === 'full') {
            beardEl.setAttribute('d', 'M 25 55 h 50 v 30 h -50 z M 35 85 h 30 v 10 h -30 z M 40 95 h 20 v 5 h -20 z');
            beardEl.style.display = 'block';
        } else if (beardStyle === 'twin') {
            beardEl.setAttribute('d', 'M 25 55 h 50 v 20 h -50 z M 30 75 h 12 v 25 h -12 z M 58 75 h 12 v 25 h -12 z');
            beardEl.style.display = 'block';
        } else if (beardStyle === 'stubble') {
            beardEl.setAttribute('d', 'M 30 65 h 40 v 15 h -40 z');
            beardEl.style.display = 'block';
        } else if (beardStyle === 'mustache') {
            beardEl.setAttribute('d', 'M 32 56 h 36 v 7 h -36 z');
            beardEl.style.display = 'block';
        } else {
            beardEl.style.display = 'none';
        }
    }

    // Doplnky (Okuliare, Páska cez oko...)
    if (accessoryEl) {
        if (accessory === 'eyepatch') {
            accessoryEl.setAttribute('d', 'M 20 30 L 80 50 h -5 v 3 L 20 33 z M 58 38 h 14 v 14 h -14 z');
            accessoryEl.setAttribute('fill', '#1a1a1a');
            accessoryEl.style.display = 'block';
        } else if (accessory === 'glasses') {
            accessoryEl.setAttribute('d', 'M 25 38 h 20 v 14 h -20 z M 55 38 h 20 v 14 h -20 z M 45 42 h 10 v 4 h -10 z M 15 42 h 10 v 3 h -10 z M 75 42 h 10 v 3 h -10 z');
            accessoryEl.setAttribute('fill', '#2d3436');
            accessoryEl.style.display = 'block';
        } else if (accessory === 'scar') {
            accessoryEl.setAttribute('d', 'M 34 32 h 4 v 22 h -4 z M 30 38 h 12 v 4 h -12 z M 30 46 h 12 v 4 h -12 z');
            accessoryEl.setAttribute('fill', '#d63031');
            accessoryEl.style.display = 'block';
        } else {
            accessoryEl.style.display = 'none';
        }
    }
}

function selectSkinPalette(index) {
    currentSkinIndex = index;
    updateFaceGenerator();
}

function syncProfileFace() {
    const mainSvg = document.getElementById('dynamic-face-svg');
    const profileSvg = document.getElementById('profile-face-svg');
    if (mainSvg && profileSvg) {
        profileSvg.innerHTML = mainSvg.innerHTML;
    }
}
