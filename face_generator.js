// Modul na generovanie a synchronizáciu tváre avatara pre hru Valhalla / Bohovia Severu

function updateFaceGenerator() {
    const hairStyle = document.getElementById('face-hair-style').value;
    const beardStyle = document.getElementById('face-beard-style').value;
    const hairColor = document.getElementById('face-color').value;
    const eyeColor = document.getElementById('face-eye-color').value;
    const tattooType = document.getElementById('face-tattoo').value;
    const scarType = document.getElementById('face-scar').value;

    const hairEl = document.getElementById('svg-hair');
    const beardEl = document.getElementById('svg-beard');
    const eyeLEl = document.getElementById('svg-eye-l');
    const eyeREl = document.getElementById('svg-eye-r');
    const tattooEl = document.getElementById('svg-tattoo');
    const scarEl = document.getElementById('svg-scar');

    // Farba očí
    eyeLEl.setAttribute('fill', eyeColor);
    eyeREl.setAttribute('fill', eyeColor);

    // Farba vlasov a brady
    hairEl.setAttribute('fill', hairColor);
    beardEl.setAttribute('fill', hairColor);

    // Tvary účesov
    if(hairStyle === 'braids') {
        hairEl.setAttribute('d', 'M 20 50 Q 50 15 80 50 Q 75 60 70 45 Q 50 20 30 45 Q 25 60 20 50 Z');
    } else if(hairStyle === 'mane') {
        hairEl.setAttribute('d', 'M 10 55 Q 50 0 90 55 Q 85 30 50 10 Q 15 30 10 55 Z');
    } else if(hairStyle === 'mohawk') {
        hairEl.setAttribute('d', 'M 40 45 Q 50 5 60 45 Z');
    } else if(hairStyle === 'dreads') {
        hairEl.setAttribute('d', 'M 15 50 Q 50 10 85 50 L 80 65 L 70 45 L 50 15 L 30 45 L 20 65 Z');
    } else if(hairStyle === 'helmet') {
        hairEl.setAttribute('d', 'M 20 45 Q 50 5 80 45 Q 80 52 20 52 Z M 50 5 L 50 0 M 40 5 L 60 5');
        hairEl.setAttribute('fill', '#8d99ae');
    } else if(hairStyle === 'bald') {
        hairEl.setAttribute('d', 'M 0 0 Z');
    }

    // Tvary brady
    if(beardStyle === 'full') {
        beardEl.setAttribute('d', 'M 28 60 Q 50 98 72 60 Q 65 98 50 98 Q 35 98 28 60 Z');
        beardEl.style.display = 'block';
    } else if(beardStyle === 'twin') {
        beardEl.setAttribute('d', 'M 35 60 L 40 98 L 45 65 L 55 65 L 60 98 L 65 60 Z');
        beardEl.style.display = 'block';
    } else if(beardStyle === 'stubble') {
        beardEl.setAttribute('d', 'M 32 60 Q 50 78 68 60 Q 60 78 50 78 Q 40 78 32 60 Z');
        beardEl.style.display = 'block';
    } else if(beardStyle === 'mustache') {
        beardEl.setAttribute('d', 'M 35 58 Q 50 68 65 58 Q 55 62 50 60 Q 45 62 35 58 Z');
        beardEl.style.display = 'block';
    } else {
        beardEl.style.display = 'none';
    }

    // Tetovania
    if(tattooType === 'vegvisir') {
        tattooEl.setAttribute('d', 'M 50 28 L 50 36 M 46 32 L 54 32 M 48 30 L 52 34 M 48 34 L 52 30');
        tattooEl.setAttribute('stroke', '#e63946');
        tattooEl.style.display = 'block';
    } else if(tattooType === 'valknut') {
        tattooEl.setAttribute('d', 'M 47 27 L 53 27 L 50 35 Z M 45 32 L 51 32 L 48 38 Z');
        tattooEl.setAttribute('stroke', '#88c0d0');
        tattooEl.style.display = 'block';
    } else if(tattooType === 'warpaint') {
        tattooEl.setAttribute('d', 'M 25 45 L 45 45 M 55 45 L 75 45');
        tattooEl.setAttribute('stroke', '#800000');
        tattooEl.style.display = 'block';
    } else {
        tattooEl.style.display = 'none';
    }

    // Jazvy
    if(scarType === 'eye_scar') {
        scarEl.setAttribute('d', 'M 34 38 L 40 58');
        scarEl.style.display = 'block';
    } else if(scarType === 'cheek_scar') {
        scarEl.setAttribute('d', 'M 55 55 L 70 65 M 58 52 L 68 68');
        scarEl.style.display = 'block';
    } else {
        scarEl.style.display = 'none';
    }
}

function syncProfileFace() {
    const hairEl = document.getElementById('svg-hair');
    const beardEl = document.getElementById('svg-beard');
    const eyeLEl = document.getElementById('svg-eye-l');
    const eyeREl = document.getElementById('svg-eye-r');
    const tattooEl = document.getElementById('svg-tattoo');
    const scarEl = document.getElementById('svg-scar');

    document.getElementById('p-svg-hair').setAttribute('d', hairEl.getAttribute('d'));
    document.getElementById('p-svg-hair').setAttribute('fill', hairEl.getAttribute('fill'));

    document.getElementById('p-svg-beard').setAttribute('d', beardEl.getAttribute('d'));
    document.getElementById('p-svg-beard').setAttribute('fill', beardEl.getAttribute('fill'));
    document.getElementById('p-svg-beard').style.display = beardEl.style.display;

    document.getElementById('p-svg-eye-l').setAttribute('fill', eyeLEl.getAttribute('fill'));
    document.getElementById('p-svg-eye-r').setAttribute('fill', eyeREl.getAttribute('fill'));

    document.getElementById('p-svg-tattoo').setAttribute('d', tattooEl.getAttribute('d'));
    document.getElementById('p-svg-tattoo').setAttribute('stroke', tattooEl.getAttribute('stroke'));
    document.getElementById('p-svg-tattoo').style.display = tattooEl.style.display;

    document.getElementById('p-svg-scar').setAttribute('d', scarEl.getAttribute('d'));
    document.getElementById('p-svg-scar').style.display = scarEl.style.display;
}
