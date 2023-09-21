function toggleMenu() {
    var menu = document.getElementById("myDropdown");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Cierra el menú si el usuario hace clic fuera de él 
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        var menu = document.getElementById("myDropdown");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
    }
}