document.getElementById('click-box').onclick = function() {
    alert("¡Hiciste click!");
};


document.getElementById('hover-box').onmouseover = function() {
    this.style.backgroundColor = "#F896A3";
};


document.getElementById('dblclick-box').ondblclick = function() {
    this.innerHTML = "¡DOBLE CLICK! 🚀";
};


window.addEventListener('keydown', function(e) {
    const box = document.getElementById('keydown-box');
    box.innerHTML = `Presionaste: ${e.key}`;
});


document.getElementById('context-box').oncontextmenu = function(e) {
    e.preventDefault(); 
    alert("Menú contextual activado");
};


document.getElementById('scroll-box').onwheel = function() {
    this.style.borderRadius = "50%";
};


document.getElementById('mouse-leave').onmouseleave = function() {
    alert("¡No te vayas de la caja!");
};


document.getElementById('input-change').onchange = function() {
    alert("El texto cambió a: " + this.value);
};