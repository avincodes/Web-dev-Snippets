// default variable reference to html elements we need
const ref_container = document.getElementById("container");
const ref_checkbox = document.getElementById("switch");

// onclick function which runs everytime we click on toggle button
function toggleFunc() {
    if (ref_container.classList.contains("light")) {
        ref_container.classList.remove("light");
        ref_container.classList.add("dark");

        /* To keep the other checkbox btn with same state we need to update that as well, 
        state needs to be updated not for styling but to keep both button and checkbox click state same*/
        ref_checkbox.checked = true;
    } else {
        ref_container.classList.remove("dark");
        ref_container.classList.add("light");
        ref_checkbox.checked = false;
    }
}

// we add an event listener to checkbox input to change mode as per its state
// Checbox is checked then dark mode else light mode.
ref_checkbox.addEventListener("change", (event) => {
    console.log(event.target.checked)
    if (event.target.checked) {
        ref_container.classList.remove("light");
        ref_container.classList.add("dark");
    } else {
        ref_container.classList.remove("dark");
        ref_container.classList.add("light");
    }
});
