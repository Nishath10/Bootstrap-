// Attractions//
var swiper = new Swiper('.inc-attraction-swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1400: { slidesPerView: 4 }
    }
});


    const filterButtons = document.querySelectorAll('.inc-trips-filter-btn');
    const chipsContainer = document.querySelector('.inc-trips-filter-bar__active-items');
    const clearAllBtn = document.querySelector('.inc-trips-filter-bar__clear-all-button');

    function createChip(label) {
        const chip = document.createElement('li');
        chip.className = 'inc-trips-filter-bar__active-item';

        chip.innerHTML = `
            <button class="inc-trips-filter-bar__remove-active-item-button button--base">
                <i class="icon-cross"></i>
                <span class="visually-hidden">Remove filter item</span>
                ${label}
            </button>
        `;

        // Remove chip on click
        chip.querySelector('button').addEventListener('click', () => {
            chip.remove();
            toggleContainerState();
        });

        return chip;
    }

    function toggleContainerState() {
        const container = document.querySelector('.inc-trips-filter-bar__active-items-container');
        if (chipsContainer.children.length === 0) {
            container.classList.add('inc-trips-filter-bar__active-items-container--empty');
        } else {
            container.classList.remove('inc-trips-filter-bar__active-items-container--empty');
        }
    }

    // Add chip when filter button clicked
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const label = button.textContent.trim();
            // Avoid duplicate chips
            const exists = [...chipsContainer.children].some(chip =>
                chip.textContent.includes(label)
            );
            if (!exists) {
                const chip = createChip(label);
                chipsContainer.appendChild(chip);
                toggleContainerState();
            }
        });
    });

   
         // funtion/event//

document.addEventListener("DOMContentLoaded", function () {
    // Tabs: Festivals and Events
    const tabs = document.querySelectorAll(".inc-tab-switch .tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active from all, then add to clicked
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            // You can toggle content based on tab ID
            const isFestival = this.id === "festival-tab";
            // Example: Show/hide content
            document.getElementById("festival-content").style.display = isFestival ? "block" : "none";
            document.getElementById("events-content").style.display = isFestival ? "none" : "block";
        });
    });

    // Filter buttons - add dropdown toggle logic (if needed)
    const filterButtons = document.querySelectorAll(".inc-filter-btn");
    filterButtons.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            alert(`Filter ${btn.innerText} clicked!`);
            // Replace alert with custom dropdown/modal logic
        });
    });
});


    
      // By month/ By states & uts/ By interest//
      
document.addEventListener("DOMContentLoaded", function () {
    const buttons = {
        "inc-filter-btn-0": "dropdown-month",
        "inc-filter-btn-1": "dropdown-states",
        "inc-filter-btn-2": "dropdown-interests"
    };

    Object.entries(buttons).forEach(([btnId, dropdownId]) => {
        const button = document.getElementById(btnId);
        const dropdown = document.getElementById(dropdownId);

        button.addEventListener("click", function (e) {
            e.stopPropagation();
            // Close all dropdowns first
            document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
            // Toggle this dropdown
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        });

        // Optional: handle selection
        dropdown.querySelectorAll("li").forEach(item => {
            item.addEventListener("click", () => {
                alert(`You selected: ${item.textContent}`);
                dropdown.style.display = "none";
                // Insert filtering logic here
            });
        });
    });

    // Close dropdowns when clicking elsewhere
    document.addEventListener("click", function () {
        document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
    });
});



