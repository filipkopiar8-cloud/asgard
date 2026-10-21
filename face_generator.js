// Pixel Art Character & Body Generator pre hry Valhalla / Bohovia Severu

const SKIN_PALETTES = [
    { skin: '#ffe0bd', shadow: '#d4a373', outline: '#8d5b4c' }, // Svietivá / Svetlá
    { skin: '#f3c193', shadow: '#c68b59', outline: '#73462c' }, // Opálená
    { skin: '#a67244', shadow: '#784c28', outline: '#422712' }, // Tmavá
    { skin: '#5c3a21', shadow: '#3b2312', outline: '#1c0f06' }  // Veľmi tmavá
];

let currentSkinIndex = 0;

function updateFaceGenerator() {
    const skinPalette = SKIN_PALETTES[currentSkinIndex] || SKIN_PALETTES[0];
    
    // Získanie hodnôt z formulára
    const hairColor = document.getElementById('face-color')?.value || '#6c584c';
    const eyeColor = document.getElementById('face-eye-color')?.value || '#3a86ff';
    const hairStyle = document.getElementById('face-hair-style')?.value || 'braids';
    const beardStyle = document.getElementById('face-beard-style')?.value || 'full';
    const expression = document.getElementById('face-expression')?.value || 'neutral';
    const accessory = document.getElementById('face-accessory')?.value || 'none';
    
    const bodyType = document.getElementById('body-type')?.value || 'plate';
    const armorColor = document.getElementById('body-armor-color')?.value || '#88c0d0';
    const weaponLeft = document.getElementById('body-weapon-left')?.value || 'axe';
    const weaponRight = document.getElementById('body-weapon-right')?.value || 'shield';
    const capeStyle = document.getElementById('body-cape')?.value || 'cape';

    // Výber SVG prvkov
    const skinEls = document.querySelectorAll('.pixel-skin');
    const shadowEls = document.querySelectorAll('.pixel-skin-shadow');
    const outlineEls = document.querySelectorAll('.pixel-skin-outline');
    
    const eyeLEl = document.getElementById('svg-eye-l');
    const eyeREl = document.getElementById('svg-eye-r');
    const hairEl = document.getElementById('svg-hair');
    const beardEl = document.getElementById('svg-beard');
    const mouthEl = document.getElementById('svg-mouth');
    const accessoryEl = document.getElementById('svg-accessory');

    const bodyArmorEl = document.getElementById('svg-body-armor');
    const capeEl = document.getElementById('svg-cape');
    const wL_El = document.getElementById('svg-weapon-left');
    const wR_El = document.getElementById('svg-weapon-right');

    // 1. Nastavenie farby kože
    skinEls.forEach(el => el.setAttribute('fill', skinPalette.skin));
    shadowEls.forEach(el => el.setAttribute('fill', skinPalette.shadow));
    outlineEls.forEach(el => el.setAttribute('fill', skinPalette.outline));

    // 2. Farba očí, vlasov, brady
    if (eyeLEl) eyeLEl.setAttribute('fill', eyeColor);
    if (eyeREl) eyeREl.setAttribute('fill', eyeColor);
    if (hairEl) hairEl.setAttribute('fill', hairColor);
    if (beardEl) beardEl.setAttribute('fill', hairColor);

    // 3. Výraz tváre (Mouth)
    if (mouthEl) {
        if (expression === 'smile') {
            mouthEl.setAttribute('d', 'M 42 37 h 16 v 2 h -16 z M 40 35 h 2 v 2 h -2 z M 58 35 h 2 v 2 h -2 z');
        } else if (expression === 'angry') {
            mouthEl.setAttribute('d', 'M 42 38 h 16 v 2 h -16 z M 40 38 h 2 v -2 h -2 z M 58 38 h 2 v -2 h -2 z');
        } else if (expression === 'surprised') {
            mouthEl.setAttribute('d', 'M 46 36 h 8 v 5 h -8 z');
        } else if (expression === 'smirk') {
            mouthEl.setAttribute('d', 'M 44 37 h 12 v 2 h -12 z M 56 35 h 3 v 2 h -3 z');
        } else {
            mouthEl.setAttribute('d', 'M 43 37 h 14 v 2 h -14 z');
        }
    }

    // 4. Vlasy (Hair)
    if (hairEl) {
        if (hairStyle === 'braids') {
            hairEl.setAttribute('d', 'M 25 8 h 50 v 12 h -50 z M 20 14 h 10 v 26 h -10 z M 70 14 h 10 v 26 h -10 z');
        } else if (hairStyle === 'mane') {
            hairEl.setAttribute('d', 'M 20 6 h 60 v 16 h -60 z M 15 12 h 12 v 34 h -12 z M 73 12 h 12 v 34 h -12 z');
        } else if (hairStyle === 'mohawk') {
            hairEl.setAttribute('d', 'M 42 2 h 16 v 18 h -16 z M 46 0 h 8 v 6 h -8 z');
        } else if (hairStyle === 'dreads') {
            hairEl.setAttribute('d', 'M 22 8 h 56 v 10 h -56 z M 22 18 h 6 v 28 h -6 z M 30 18 h 6 v 24 h -6 z M 64 18 h 6 v 24 h -6 z M 72 18 h 6 v 28 h -6 z');
        } else if (hairStyle === 'spiky') {
            hairEl.setAttribute('d', 'M 22 12 h 56 v 8 h -56 z M 25 4 h 8 v 8 h -8 z M 46 2 h 8 v 10 h -8 z M 67 4 h 8 v 8 h -8 z');
        } else {
            hairEl.setAttribute('d', '');
        }
    }

    // 5. Brada (Beard)
    if (beardEl) {
        if (beardStyle === 'full') {
            beardEl.setAttribute('d', 'M 28 34 h 44 v 18 h -44 z M 34 52 h 32 v 8 h -32 z M 40 60 h 20 v 4 h -20 z');
            beardEl.style.display = 'block';
        } else if (beardStyle === 'twin') {
            beardEl.setAttribute('d', 'M 28 34 h 44 v 12 h -44 z M 32 46 h 10 v 18 h -10 z M 58 46 h 10 v 18 h -10 z');
            beardEl.style.display = 'block';
        } else if (beardStyle === 'stubble') {
            beardEl.setAttribute('d', 'M 32 38 h 36 v 10 h -36 z');
            beardEl.style.display = 'block';
        } else if (beardStyle === 'mustache') {
            beardEl.setAttribute('d', 'M 34 34 h 32 v 5 h -32 z');
            beardEl.style.display = 'block';
        } else {
            beardEl.style.display = 'none';
        }
    }

    // 6. Doplnky tváre
    if (accessoryEl) {
        if (accessory === 'eyepatch') {
            accessoryEl.setAttribute('d', 'M 20 18 L 80 30 h -5 v 2 L 20 20 z M 56 22 h 12 v 10 h -12 z');
            accessoryEl.setAttribute('fill', '#1a1a1a');
            accessoryEl.style.display = 'block';
        } else if (accessory === 'glasses') {
            accessoryEl.setAttribute('d', 'M 28 22 h 16 v 10 h -16 z M 56 22 h 16 v 10 h -16 z M 44 25 h 12 v 3 h -12 z');
            accessoryEl.setAttribute('fill', '#2d3436');
            accessoryEl.style.display = 'block';
        } else if (accessory === 'scar') {
            accessoryEl.setAttribute('d', 'M 36 18 h 3 v 16 h -3 z M 32 22 h 10 v 3 h -10 z M 32 28 h 10 v 3 h -10 z');
            accessoryEl.setAttribute('fill', '#d63031');
            accessoryEl.style.display = 'block';
        } else {
            accessoryEl.style.display = 'none';
        }
    }

    // 7. Zbroj a Telo (Armor & Body)
    if (bodyArmorEl) {
        bodyArmorEl.setAttribute('fill', armorColor);
        if (bodyType === 'plate') {
            bodyArmorEl.setAttribute('d', 'M 32 50 h 36 v 30 h -36 z M 28 52 h 44 v 8 h -44 z M 36 80 h 28 v 15 h -28 z');
        } else if (bodyType === 'leather') {
            bodyArmorEl.setAttribute('d', 'M 34 50 h 32 v 28 h -32 z M 30 52 h 8 v 12 h -8 z M 62 52 h 8 v 12 h -8 z M 36 78 h 28 v 16 h -28 z');
        } else if (bodyType === 'robe') {
            bodyArmorEl.setAttribute('d', 'M 32 50 h 36 v 48 h -36 z M 26 54 h 48 v 10 h -48 z M 30 98 h 40 v 2 h -40 z');
        } else if (bodyType === 'barbarian') {
            bodyArmorEl.setAttribute('d', 'M 32 50 h 36 v 10 h -36 z M 30 48 h 40 v 6 h -40 z M 38 60 h 24 v 20 h -24 z M 34 80 h 32 v 15 h -32 z');
        } else { // naked / bez zbroje
            bodyArmorEl.setAttribute('d', 'M 42 75 h 16 v 5 h -16 z M 36 80 h 28 v 15 h -28 z');
        }
    }

    // 8. Plášť (Cape)
    if (capeEl) {
        if (capeStyle === 'cape') {
            capeEl.setAttribute('d', 'M 22 48 h 56 v 50 h -56 z');
            capeEl.setAttribute('fill', '#bf616a');
            capeEl.style.display = 'block';
        } else if (capeStyle === 'fur') {
            capeEl.setAttribute('d', 'M 18 46 h 64 v 18 h -64 z M 22 64 h 10 v 30 h -10 z M 68 64 h 10 v 30 h -10 z');
            capeEl.setAttribute('fill', '#d8dee9');
            capeEl.style.display = 'block';
        } else {
            capeEl.style.display = 'none';
        }
    }

    // 9. Zbraň Vľavo (Left Hand Weapon)
    if (wL_El) {
        if (weaponLeft === 'axe') {
            wL_El.setAttribute('d', 'M 12 40 h 4 v 55 h -4 z M 4 42 h 12 v 16 h -12 z');
            wL_El.setAttribute('fill', '#d8dee9');
            wL_El.style.display = 'block';
        } else if (weaponLeft === 'sword') {
            wL_El.setAttribute('d', 'M 13 30 h 3 v 50 h -3 z M 8 80 h 13 v 4 h -13 z M 13 84 h 3 v 10 h -3 z');
            wL_El.setAttribute('fill', '#e5e9f0');
            wL_El.style.display = 'block';
        } else if (weaponLeft === 'hammer') {
            wL_El.setAttribute('d', 'M 12 45 h 4 v 50 h -4 z M 2 45 h 24 v 16 h -24 z');
            wL_El.setAttribute('fill', '#81a1c1');
            wL_El.style.display = 'block';
        } else if (weaponLeft === 'magic') {
            wL_El.setAttribute('d', 'M 10 50 h 8 v 8 h -8 z M 8 48 h 12 v 12 h -12 z');
            wL_El.setAttribute('fill', '#b48ead');
            wL_El.style.display = 'block';
        } else {
            wL_El.style.display = 'none';
        }
    }

    // 10. Zbraň / Štít Vpravo (Right Hand Weapon / Shield)
    if (wR_El) {
        if (weaponRight === 'shield') {
            wR_El.setAttribute('d', 'M 74 52 h 22 v 30 h -22 z M 78 48 h 14 v 38 h -14 z');
            wR_El.setAttribute('fill', '#ebcb8b');
            wR_El.style.display = 'block';
        } else if (weaponRight === 'axe') {
            wR_El.setAttribute('d', 'M 84 40 h 4 v 55 h -4 z M 84 42 h 12 v 16 h -12 z');
            wR_El.setAttribute('fill', '#d8dee9');
            wR_El.style.display = 'block';
        } else if (weaponRight === 'sword') {
            wR_El.setAttribute('d', 'M 84 30 h 3 v 50 h -3 z M 79 80 h 13 v 4 h -13 z M 84 84 h 3 v 10 h -3 z');
            wR_El.setAttribute('fill', '#e5e9f0');
            wR_El.style.display = 'block';
        } else {
            wR_El.style.display = 'none';
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

// Automatické načítanie a inicializácia po otvorení stránky
document.addEventListener('DOMContentLoaded', () => {
    updateFaceGenerator();
});
