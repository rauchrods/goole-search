
let searchbar = document.querySelector("#searchbar");

searchbar.addEventListener("keyup", function(event) {
    if(event.key=="Enter"){

        let inp = searchbar.value.toLowerCase().trim();

        let url = `https://www.google.com/search?q=${inp}`;
         searchbar.value ="";
        window.open(url, "_self");
        console.log(inp);
    }
    
});