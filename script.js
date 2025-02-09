document.addEventListener("DOMContentLoaded", function() {
    const botonNo = document.getElementById("no");
    const botonSi = document.getElementById("yes");
    const audio = document.getElementById("musica");
    const playButton = document.getElementById("playMusic");

    // Asegura que el botón "No" se mueva
    botonNo.style.position = "absolute";

    botonNo.addEventListener("mouseover", function() {
        const maxX = window.innerWidth - botonNo.clientWidth;
        const maxY = window.innerHeight - botonNo.clientHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        botonNo.style.left = `${randomX}px`;
        botonNo.style.top = `${randomY}px`;
    });

    // Hace que el botón "Sí" lleve a mensaje.html
    botonSi.addEventListener("click", function() {
        window.location.href = "mensaje.html";
    });

    // Botón para reproducir música
    playButton.addEventListener("click", function () {
        audio.play();
        playButton.style.display = "none"; // Oculta el botón después de hacer clic
    });
});
