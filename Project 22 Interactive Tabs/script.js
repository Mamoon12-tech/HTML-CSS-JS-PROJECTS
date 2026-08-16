function getTab(el) {
    const active = document.querySelector(".active");
    const visible = document.querySelector(".content-visible");
    const tabContent = document.getElementById(el.href.split("#")[1]);

    active.classList.remove("active");
    visible.classList.remove("content-visible");

    el.classList.add("active");
    tabContent.classList.add("content-visible");
}

document.addEventListener("click", (e) => {
    if (e.target.matches(".tab-item a")) {
        e.preventDefault();
        getTab(e.target);
    }
});