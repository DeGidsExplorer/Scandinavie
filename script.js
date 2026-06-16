document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");

    document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;

        card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });
});
