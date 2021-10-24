window.onload = initBannerLink;

var theAd = 0;
var adURL = new Array("stopandshop.com","panerabread.com","metropolitanbakery.com","breadshopsf.com","facebook.com/breadandbuttercreambakery/","wegmans.com");
var adImages = new Array("stopandshop.png","panera_bread.png","metro_bakery.png","bread_shop.png","buttercream.jpg","wegmans.jpg");

function initBannerLink() {
    if (document.getElementById("adBanner").parentNode.tagName == "A") 
    {document.getElementById("adBanner").parentNode.onclick = newLocation;
    }
rotate();
}
function newLocation() {
document.location.href = "http://www." + adURL[theAd];
return false;
}
function rotate() {
theAd++;
if (theAd == adImages.length) {
theAd = 0;
}
document.getElementById("adBanner").src = adImages[theAd];
setTimeout(rotate, 3 * 1000);
}