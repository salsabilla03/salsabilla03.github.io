const soalContainer = document.getElementById("soal");
const jawabanContainer = document.getElementById("jawaban");
const submitButton = document.getElementById("submit");
const hasilContainer = document.getElementById("hasil");

const pertanyaan = [
    {
        soal: "Bumi itu?",
        jawaban: ["Bundar", "Bulat", "Bola", "Ball"],
        jawabanBenar: "Bulat",
    },
    {
        soal: "Apa isi Bumi?",
      jawaban: ["Orang", "Pulau", "Kota", "Waduk"],
      jawabanBenar: "Pulau",

    },
    {
        soal: "Apa penyebab adanya bumi?",
        jawaban: ["Orbit", "Meteor", "Matahari", "Partikel luar angkasa"],
        jawabanBenar: "Partikel luar angkasa",
    }
    // Tambahkan pertanyaan lain di sini
];

let skor = 0;
let soalSaatIni = 0;
 
function tampilkanSoal() {
    const soal = pertanyaan[soalSaatIni];
    soalContainer.textContent = soal.soal;
 
    jawabanContainer.innerHTML = "";
    soal.jawaban.forEach((jawaban) => {
        const tombol = document.createElement("button");
        tombol.textContent = jawaban;
        tombol.addEventListener("click", () => cekJawaban(jawaban));
         jawabanContainer.appendChild(tombol);
    });
}
 
function cekJawaban(jawaban) {
    const soal = pertanyaan[soalSaatIni];
    if (jawaban === soal.jawabanBenar) {
        skor++;
    }
 
    soalSaatIni++;
    if (soalSaatIni < pertanyaan.length) {
        tampilkanSoal();
    } else {
        tampilkanHasil();
    }
}
 
function tampilkanHasil() {
    hasilContainer.textContent = `Skor Anda: ${skor} dari ${pertanyaan.length}`;
}
 
tampilkanSoal();
