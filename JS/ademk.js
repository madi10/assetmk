<script>
var images = [
  {src: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/3/dd2dbcdb-a504-48b6-bc93-c06f4966dfcb.png.webp", href: "https://tokopedia.link/BDrke6PlOCb"},
  {src: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/6/2/00f390cd-e16d-4cef-989a-7830afd5e69f.png.webp", href: "https://tokopedia.link/Tr3KkjLlOCb"},
  {src: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/6/2/00f390cd-e16d-4cef-989a-7830afd5e69f.png.webp", href: "https://tokopedia.link/Tr3KkjLlOCb"}
];
  function displayImage() {
    var randomIndex = Math.floor(Math.random() * images.length);
    var image = images[randomIndex];
    var link = document.createElement("a");
    link.href = image.href;
    link.target = "_blank";
    var img = document.createElement("img");
    img.loading = "lazy";
    img.src = image.src;
    img.alt = "Aff";
    link.appendChild(img);
    var container = document.getElementById("munculre");
    container.appendChild(link);
  }
  window.onload = displayImage;
  </script>