///API FOR GIPHY SEARCH

let APIKEY = "mbaPM0qpbVU4dwmPKI78DrliP7AIQqYV";
document.addEventListener("DOMContentLoaded", trend);


/// SEARCH
function init () {
    document.querySelector(".button_grey").addEventListener("click", function () {
        let url = "https://api.giphy.com/v1/gifs/search?api_key="+APIKEY+"&limit=4"+"&q=";
        let str = document.getElementById("buscador").value.trim();
        url = url.concat(str);
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(content => {
                //DATA //PAGINATION //META
                console.log(content.data);
                console.log("Meta:", content.meta);
                
                for (let i = 0; i < content.data.length; i++) {
                    let img = document.querySelectorAll(".sugerencias_box-img")[i];
                    img.src = content.data[i].images.fixed_width.url;
                }
            });
    });
}; //To stop the page to reload

function trend() {
        let url = "https://api.giphy.com/v1/gifs/trending?api_key="+APIKEY+"&limit=7"+"&q=";
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(content => {
                //DATA //PAGINATION //META
                console.log(content.data);
                console.log("Meta:", content.meta);
                
                for (let i = 0; i < content.data.length; i++) {
                    let img = document.querySelectorAll(".img-tendencias")[i];
                    img.src = content.data[i].images.fixed_width.url;
                }

                for (let i = 0; i < content.data.length; i++) {
                    let p = document.querySelectorAll(".text_hover")[i];
                    p.innerText = content.data[i].title;
                }

            });
};

/* HOVER FUNCTION

let x = document.querySelectorAll(".tendencias_content-1-box");
let pr;

x.forEach(function(div) {
    div.addEventListener("mouseover", function(){ imgHover(div) });
    div.addEventListener("mouseout", function(){ imgUnhover(div) });
});

function imgHover(div) {
    div.style.outline = "5px solid #110038";
    
    for (let i = 0; i < x.length; i++) {
        let pr = document.getElementsByClassName("text_hide")[i];
        pr.className = "text_hover";
    }
}

function imgUnhover(div) {
    div.style.outline = "none";
    for (let i = 0; i < x.length; i++) {
        let pr = document.getElementsByClassName("text_hover")[i];
        pr.className = "text_hide";
    }
}*/

