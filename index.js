function clicked() {
    document.title = document.querySelector("input").value;
}

function loading() {
    document.querySelector("#local").innerText = window.localStorage.getItem("local") || 0;
    document.querySelector("#session").innerText = window.sessionStorage.getItem("session") || 0;
}

function add(x) {
    x.innerText = parseInt(x.innerText, 10) + 1;
    window[x.id + "Storage"].setItem(x.id, x.innerText)
}
