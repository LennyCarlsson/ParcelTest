const img = document.createElement("img");
document.body.append(img);
const imgUrl = new URL("../media/GettingOld.jpg", import.meta.url);
img.src = imgUrl.href;
