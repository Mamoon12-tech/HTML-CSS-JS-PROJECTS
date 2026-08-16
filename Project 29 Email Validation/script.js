let input = document.getElementById("inputBox");

// Use 'input' event instead of 'keydown' for real-time validation
input.addEventListener("input", validate);

function validate() {
    let form = document.querySelector(".mainForm");
    let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

    if (input.value.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.add("invalid");
        form.classList.remove("valid");
    }
}