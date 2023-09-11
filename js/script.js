/*  (#) işareti ID'yi belirtir.
    (.) sembolü Class'ı belirtir. */

const searchForm =
  document.querySelector(
    ".search-form"
  ); /* class'ı "search-form" olan komut satırına ulaş. */

const cartItem = document.querySelector(".cart-items-container");

const navbar = document.querySelector(".navbar");

/* BUTTONS */
const searchBtn =
  document.querySelector(
    "#search-btn"
  ); /* ID'si "search-btn" olan komut satırına ulaş. */

const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  /* searchBtn değişkeninin "click"(yani tıklanması) olayına "active" yazısı eklenmesini sağlamaktadır. 

     "TOGGLE" komutu ise "active" yazısının tekrar tıklandığında komutlar arasından silinmesi işlemine yaramaktadır. Bu sayede farklı bir komutla yazının silinmesini yazmayıp temiz bir kod yazmış bulunmaktayız. */

  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
    /* Yukarıdaki komutumuz eğer tıklama konumu form veya formun içerisindeki herhangi bir kısım olursa yani arama kutucuğu harici bir bölgeye tıklanması durumunda arama kutucuğunun kapanması işlevine yaramaktadır. */
  });
});

/* Aşağıdaki kodlar yukarıdakinin farklı bir butondaki hali yani açıklama satırları buradaki komutlar içinde geçerlidir. */
cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});
