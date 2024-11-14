function regOpenGrid1() {
    var openGrid1Button = document.getElementById("open-grid1-button");
    var openedBoolg1 = true;
    openGrid1Button.addEventListener('click', (e) => {
        // function
        var grid1 = document.getElementById("grid1");
        if (openedBoolg1 == false) {
            grid1.style.visibility = "visible";
            openGrid1Button.innerHTML = "Close grid 1";
            openedBoolg1 = true;
        } else if (openedBoolg1 == true) {
            grid1.style.visibility = "hidden";
            openGrid1Button.innerHTML = "Open grid 1";
            openedBoolg1 = false;
        }
        // animation
        openGrid1Button.classList.add("animation");
        setTimeout(() => {
            openGrid1Button.classList.remove("animation");
        }, 250);
    });
}

function regOpenGird2() {
    var openGrid2Button = document.getElementById("open-grid2-button");
    var openedBoolg2 = true;
    openGrid2Button.addEventListener('click', (e) => {
        // function
        var grid1 = document.getElementById("grid2");
        if (openedBoolg2 == false) {
            grid1.style.visibility = "visible";
            openGrid2Button.innerHTML = "Close grid 2";
            openedBoolg2 = true;
        } else if (openedBoolg2 == true) {
            grid1.style.visibility = "hidden";
            openGrid2Button.innerHTML = "Open grid 2";
            openedBoolg2 = false;
        }
        // animation
        openGrid2Button.classList.add("animation");
        setTimeout(() => {
            openGrid2Button.classList.remove("animation");
        }, 250);
    });
}

export function registerButtons() {
    regOpenGrid1();
    regOpenGird2();
}