let Istek = prompt("isim giriniz lutfen ");
let Isim = document.getElementById("name");
Isim.innerText = Istek;

function TarihGun() {
  let gun = new Date();
  let saat = gun.getHours();
  let dakika = gun.getMinutes();
  let saniye = gun.getSeconds();

  let tariH = document.getElementById("name2");

  tariH.innerText = saat + " " + dakika + " " + saniye;
}

setInterval(() => {
  TarihGun();
}, 1000);
