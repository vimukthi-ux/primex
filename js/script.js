// Live Search
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const cards = document.querySelectorAll(".card");

    if (searchInput) {
        searchInput.addEventListener("keyup", () => {
            const filter = searchInput.value.toLowerCase();
            cards.forEach(card => {
                const title = card.querySelector(".card-title").textContent.toLowerCase();
                card.style.display = title.includes(filter) ? "" : "none";
            });
        });
    }
});