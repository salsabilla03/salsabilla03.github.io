<!DOCTYPE html>
<html>
<head>
  <title>Contoh Event Handling dan Manipulasi DOM</title>
</head>
<body>
  <h1 id="judul">Judul Halaman</h1>
  <p class="paragraf">Ini adalah contoh paragraf.</p>
  <button id="tombol">Ubah Teks</button>
 
  <script>
   document.addEventListener('DOMContentLoaded', function() {
   const judul = document.getElementById('judul');
   const paragraf = document.querySelector('.paragraf');
   const tombol = document.getElementById('tombol');

   tombol.addEventListener('click', function() {
      judul.textContent = 'Judul Halaman Diubah!';
      paragraf.innerHTML = 'Ini adalah <strong>paragraf</strong> yang diubah.';
   });
});
  </script>
</body>
</html>