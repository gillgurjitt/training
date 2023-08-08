// Select relevant HTML elements
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Function to filter cards based on filter buttons
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide");
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name=== "all") {
        card.classList.remove ("hide");
        }
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));