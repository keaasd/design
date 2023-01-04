let burger = document.querySelector(".link-block-2"),
    menu = document.querySelector(".modal"),
    burgerclose = document.querySelector(".burger-btn__close");
const body = document.body;

burger && menu && (burger.onclick = (() => {
    console.log('rkbr');
    menu.classList.toggle("burger_active"),
    body.classList.add("_locked")
})),
    burgerclose.addEventListener("click", () => {
        menu.classList.remove("burger_active"),
        body.classList.remove("_locked")
    }),
    menu.addEventListener("click", e => { e.target.classList.contains("modal__mb_window") || menu.classList.remove("burger_active") });