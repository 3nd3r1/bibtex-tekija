document.getElementById("luobib").onclick = (event) => {
    event.preventDefault();
    let btn = document.getElementById("copy");
    btn.className = "btn btn-secondary mt-2";
    btn.innerHTML = "Kopioi";

    let url = (document.getElementById("source_url").value).split("#")[0];
    let type = document.getElementById("source_type").value;
    let title = (url.split("/")[url.split("/").length - 1]).split("#")[0];
    let title_pure = title.replace("_"," ");
    let date = new Date();
    let year = date.getFullYear();
    let viitattu = date.getFullYear()+"-"+eval(date.getMonth()+1)+"-"+date.getDate();

    switch(type) {
        case "wiki":

            result = `@misc{wiki:${title},
                    author = "Wikipedia",
                    title = "{${title_pure}} --- {W}ikipedia{,} The Free Encyclopedia",
                    year = "${year}",
                    url = "${url}",
                    urldate = "${viitattu}"
                }`;
            document.getElementById("tulos").value = result;
    }
}

document.getElementById("copy").onclick = (event) => {
    navigator.clipboard.writeText(document.getElementById("tulos").value);
    let btn = document.getElementById("copy");
    btn.className = "btn btn-success mt-2"
    btn.innerHTML = "Kopioitu!"
}