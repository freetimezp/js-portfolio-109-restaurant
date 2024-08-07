//header bg
window.addEventListener("scroll", function () {
    if (this.scrollY >= 40) {
        document.querySelector(".header").classList.add("header-bg");
    } else {
        document.querySelector(".header").classList.remove("header-bg");
    }
});


//tabs
function tabs(tabsSelector) {
    const tabsContainer = document.querySelector(tabsSelector);
    const tabsList = tabsContainer.querySelector(".tabs-list");

    tabsList.addEventListener("click", (event) => {
        const clickedTab = event.target.closest(".tabs-btn");

        if (!clickedTab || clickedTab.classList.contains("active")) {
            return;
        }

        switchTab(clickedTab);
    });

    function switchTab(clickedTab) {
        const activeTab = tabsContainer.querySelector(".tabs-btn.active");
        const activePanel = tabsContainer.querySelector(".tabs-panel.active");

        activeTab.classList.remove("active");
        activePanel.classList.remove("active");

        clickedTab.classList.add("active");
        const target = clickedTab.getAttribute("data-target");
        tabsContainer.querySelector(target).classList.add("active");
    }
};

tabs(".rest-menu-tabs");


//testimonials slider
const testimonialsSlider = new Swiper('.testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.testimonials-pagination',
        clickable: true
    }
});

























