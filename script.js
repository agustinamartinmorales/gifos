///API FOR GIPHY SEARCH

let APIKEY = "mbaPM0qpbVU4dwmPKI78DrliP7AIQqYV";
function init() {
    document.querySelector(".button_grey").addEventListener(click, ev => {
        ev.preventDefault(); //To stop the page to reload
        let url = "https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=";
        let str = document.querySelector(".buscador_barra").nodeValue.trim();
        url = url.concat(str);
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(content => {
                //Data //Pagination //Meta
                console.log(content.data);
                console.log("META", content.meta);
                let fig = 
            })
    })
}