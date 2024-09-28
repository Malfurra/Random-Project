
let levelGyat;

function levelGyatt() {
  levelGyat = Number(prompt("Berapa level gyat kamu? (HANYA ANGKA)"));

  if (levelGyat === 0) {
    alert(`Level gyat kamu adalah ${levelGyat}. Kamu TIDAK sigma SAMA SEKALI, silakan perbanyak mewing untuk meningkatkan level gyat!`);
  } else if (levelGyat < 20) {
    alert(`Level gyat kamu adalah ${levelGyat}. Kamu KURANG sigma, silakan perbanyak mewing untuk meningkatkan level gyat!`);
  } else if (levelGyat < 50) {
    alert(`Level gyat kamu adalah ${levelGyat}. Kamu LUMAYAN sigma, silakan perbanyak mewing untuk meningkatkan level gyat!`);
  } else {
    alert(`Level gyat kamu adalah ${levelGyat}. Kamu SUDAH sigma`);
  }

  return levelGyat;
}

let hasil = levelGyatt();
console.log(`Level gyatt = ${hasil}`);

function suki() {
  const nama = document.getElementById('namaLengkap').value;
  if (!nama) {
    return false;
  }

  const kodam = khodam();

  document.getElementById('nama').innerHTML = (`
    <p>NAMA : <br>${nama.toUpperCase()}</p>
    <p>KHODAM : <br>${kodam.toUpperCase()}</p>
  `);

  document.getElementById("popup-1").classList.add("active");

  document.getElementById("namaLengkap").value = "";
  return false;
}

function closePopup() {
  document.getElementById("popup-1").classList.remove("active");
}

function khodam() {
  const khodam = [
    'Amba',
    'Gojo Satoru',
    'Kuda Negro',
    'Laba Laba Sunda',
    'Daffa Suki',
    'Mewing Wotabul',
    'Sukiliar',
    'Shiroko Bugil',
    'Botol Kecap',
    'Atmosfer Bumi',
    'Jawa Suki',
    'Rahmat Fushiguro',
    'Mas Herman Penjaga Toleransi Beragama',
    'Jamin Merdu',
    'Belatung Miskin',
    'Hendrik Darksistem',
    'KOSONG 😂'
  ];

  const randomIndex = Math.floor(Math.random() * khodam.length);
  return khodam[randomIndex];
}

