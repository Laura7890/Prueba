window.addEventListener("DOMContentLoaded", () => {
    showLoader();
})
window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader();
    }, 1000);
})

const loader = document.getElementById("loaderPagina");

const showLoader = () =>{
    loader.classList.add("show_loader")
}
const hideLoader = () =>{
    loader.classList.remove("show_loader")
}