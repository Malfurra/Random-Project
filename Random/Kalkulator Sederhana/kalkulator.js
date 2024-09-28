function luasLingkaran(){
  const r = document.getElementById("hasil1").value;
  const luasLingkaran = 3.14*r*r;
  if (r !== '') {
    const hasilLingkaran = document.getElementById('hasil');
    hasilLingkaran.innerHTML = `${luasLingkaran} cm`
    document.getElementById("hasil1").value = "";
    return false;
  } 
}

function luasPersegi() {
  const s = document.getElementById('hasil1').value;
  const luasPersegi = s*s;
  if (s !== '') {
    const hasilPersegi = document.getElementById('hasil');
    hasilPersegi.innerHTML = `${luasPersegi} cm`
    document.getElementById("hasil1").value = "";
    return false;
  }
}



function jumlah() {
  const x = Number(prompt("Masukan angka pertama"))
  const y = Number(prompt("Masukan angka kedua"))
  const z = x + y
  alert(`Hasil : ${z}`)
}

function kurang() {
  const x = Number(prompt("Masukan angka pertama"))
  const y = Number(prompt("Masukan angka kedua"))
  const z = x - y
  alert(`Hasil : ${z}`)
}

function bagi() {
  const x = Number(prompt("Masukan angka pertama"))
  const y = Number(prompt("Masukan angka kedua"))
  const z = x * y
  alert(`Hasil : ${z}`)
}

function kali() {
  const x = Number(prompt("Masukan angka pertama"))
  const y = Number(prompt("Masukan angka kedua"))
  const z = x / y
  alert(`Hasil : ${z}`)
}


function reset() {
  hasil.innerHTML = "";
  hasil1.addValue = ""
}
