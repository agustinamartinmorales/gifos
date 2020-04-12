///API FOR GIPHY SEARCH

let APIKEY = "mbaPM0qpbVU4dwmPKI78DrliP7AIQqYV";
document.addEventListener("DOMContentLoaded", init);

function init () {
    document.querySelector(".button_grey").addEventListener("click", function () {
        let url = "https://api.giphy.com/v1/gifs/search?api_key="+APIKEY+"&q=";
        let str = document.getElementById("buscador").value.trim();
        url = url.concat(str);
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(content => {
                //DATA //PAGINATION //META
                console.log(content.data);
                console.log("Meta:", content.meta);

                /*let img = document.querySelector(".tendencias_box-img");
                img.src = content.data[0].images.fixed_width.url;*/
                for (let i = 0; i < content.data.length; i++) {
                    let img = document.querySelectorAll(".sugerencias_box-img")[i];
                    img.src = content.data[i].images.fixed_width.url;
                }
            });
    });
}; //To stop the page to reload


let x = document.querySelectorAll(".tendencias_content-1-box");

x.forEach(function(div) {
    div.addEventListener("mouseover", function(){ imgOver(div) });
    div.addEventListener("mouseout", function(){ imgUnover(div) });
});

/*function mOverImg(img) {
    img.style.opacity="0";
  }
  
  function mOutImg(img) {
    img.style.opacity="1";
  }*/

function imgOver(div) {
    div.style.border = "5px solid #110038";
    let p = document.getElementById("p");
    p.className = "text_hover";
}

function imgUnover(div) {
    div.style.border = "none";
    let p = document.getElementById("p");
    p.className = "text_hide";
}

