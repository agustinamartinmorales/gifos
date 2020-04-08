///API FOR GIPHY SEARCH

let APIKEY = "mbaPM0qpbVU4dwmPKI78DrliP7AIQqYV";
document.addEventListener("DOMContentLoaded", init);

function init () {
    document.querySelector(".button_grey").addEventListener("click", function () {
        let url = "https://api.giphy.com/v1/gifs/search?api_key="+APIKEY+"&limit=4&q=";
        let str = document.getElementById("buscador").value.trim();
        url = url.concat(str);
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(content => {
                //DATA //PAGINATION //META
                console.log(content.data);
                console.log("Meta:", content.meta);

                let img = document.querySelector(".tendencias_box-img");
                img.src = content.data[0].images.fixed_width.url;

                /*for (let i = 0; i > 4; i++) {
                    let img = document.querySelector(".tendencias_box-img");
                    img.src = content.data[i].images.fixed_width.url;
                    return img;
                }*/
            });
    });
}; //To stop the page to reload

/*function init() {
        fetch(url)
            .then(response => response.json())
            .then(content => {
                //Data //Pagination //Meta
                console.log(content.data);
                console.log("META", content.meta);
                let img = document.querySelector(".tendencias_box-img");
                img.src = content.data[0].images.downsized.url;
            });
            .catch(err => {
                console.error(err);
              });
    });
};*/