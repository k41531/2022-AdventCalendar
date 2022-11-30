(() => {
    const rndInt = max => Math.floor(Math.random() * max);
    let snow_style = "url(\"data:image/svg+xml,\
<svg xmlns='http://www.w3.org/2000/svg'%20\
viewBox='0 0 50 50'>\
<style type='text/css'>\
.st0{opacity:0.7;fill:%23FFFFFF;}\
.st1{opacity:0.3;fill:%23FFFFFF;}\
</style>";
    for (let index = 0; index < 100; index++) {
       snow_style += `<circle class='st${rndInt(2)}' cx='${rndInt(50)}' cy='${rndInt(50)}' r='${Math.random() * 0.2}'/>` 
    }
    snow_style += "</svg>\")";
    document.querySelector(".snow").style.backgroundImage = snow_style;
})();