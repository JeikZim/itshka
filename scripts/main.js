let tagClickChecker = 0;
let hasSetEventsMobileChecker = 0;
let hasSetEventsAllDevicesChecker = 0;
let hiddenPartTags = 0;
let hiddenPartFilters = 0;

animationOpenMenu();
animationSearchButton();

if (window.screen.width < 481) {
    animationTogglesMobile();
}
if (window.screen.width > 480) {
    animationTogglesAllDevices();
}

window.addEventListener('resize', () => {
    if (window.screen.width < 481) {
        animationTogglesMobile();
    }
    if (window.screen.width > 480) {
        animationTogglesAllDevices();
    }
});

function animationTogglesAllDevices() {
    // console.log('Not Mobile');
    const tags = document.querySelector('.tags-button');
    const filters = document.querySelector('.filters-button');
    const tagsItems = document.querySelectorAll('.tags-items');
    const filtersSubmit = document.querySelector('.filters-submit');
    const wrapper = document.querySelector('.tags-en-filters-wrapper');
    /* let */ hiddenPartTags = 1;
    /* let */ hiddenPartFilters = 1;

    if (hasSetEventsAllDevicesChecker === 0) {
        tags.addEventListener('click', (ev) => tagsChangeStyle(ev));

        filters.addEventListener('click', (ev) => filterChangeStyle(ev));

        itemsChangeStyle(tagsItems);

        filtersSubmit.addEventListener('mousedown', () => animationFilterSubmitDown());
        filtersSubmit.addEventListener('mouseup', () => animationFilterSubmitUp());

        hasSetEventsAllDevicesChecker += 1;
    }

    tags.classList.add('is-dissabled-buttons');
    filters.classList.add('is-dissabled-buttons');
    tags.classList.remove('is-enabled-buttons');
    filters.classList.remove('is-enabled-buttons');

    document.querySelector('.tags').classList.remove('is-hidden');
    document.querySelector('.filters').classList.remove('is-hidden');
    wrapper.classList.remove('is-hidden');

    for (const i of tags.querySelector('.svg').getElementsByTagName('path')) {
        i.setAttribute('fill', '#242424');
    }

    for (const i of filters.querySelector('.svg').getElementsByTagName('path')) {
        i.setAttribute('fill', '#242424');
    }

    function tagsChangeStyle(ev) {
        // console.log('tagsChangeStyle set ALLDEVICES');
        ev.preventDefault();

        if (tags.classList.contains('is-enabled-buttons')) {
            tags.classList.remove('is-enabled-buttons');
            tags.classList.add('is-dissabled-buttons');

            for (const i of tags.querySelector('.svg').getElementsByTagName('path')) {
                i.setAttribute('fill', '#242424');
            }
            document.querySelector('.tags').classList.remove('is-hidden');
        } else {
            tags.classList.remove('is-dissabled-buttons');
            tags.classList.add('is-enabled-buttons');

            for (const i of tags.querySelector('.svg').getElementsByTagName('path')) {
                i.setAttribute('fill', '#0');
            }
            document.querySelector('.tags').classList.add('is-hidden');
        }

        hiddenPartTags = hiddenPartTags === 0 ? hiddenPartTags + 1 : hiddenPartTags - 1;
        // console.log('hiddenPartTags: ' + hiddenPartTags);
        // console.log('hiddenPartFilters: ' + hiddenPartFilters);
        examSubmitButton();
    }

    function filterChangeStyle(ev) {
        // console.log('filterChangeStyle set ALLDEVICES');
        ev.preventDefault();

        if (filters.classList.contains('is-enabled-buttons')) {
            filters.classList.remove('is-enabled-buttons');
            filters.classList.add('is-dissabled-buttons');

            for (const i of filters.querySelector('.svg').getElementsByTagName('path')) {
                i.setAttribute('fill', '#242424');
            }
            document.querySelector('.filters').classList.remove('is-hidden');
        } else {
            filters.classList.remove('is-dissabled-buttons');
            filters.classList.add('is-enabled-buttons');

            for (const i of filters.querySelector('.svg').getElementsByTagName('path')) {
                i.setAttribute('fill', '#EBEBEB');
            }
            document.querySelector('.filters').classList.add('is-hidden');
        }

        hiddenPartFilters = hiddenPartFilters === 0 ? hiddenPartFilters + 1 : hiddenPartFilters - 1;
        // console.log('hiddenPartTags: ' + hiddenPartTags);
        // console.log('hiddenPartFilters: ' + hiddenPartFilters);
        examSubmitButton();
    }

    function animationFilterSubmitDown() {
        filtersSubmit.classList.add('is-dissabled-buttons');
        filtersSubmit.classList.remove('is-enabled-buttons');
        filtersSubmit.classList.remove('is-hover-submit');
    }

    function animationFilterSubmitUp() {
        filtersSubmit.classList.remove('is-dissabled-buttons');
        filtersSubmit.classList.add('is-enabled-buttons');
        filtersSubmit.classList.add('is-hover-submit');
    }

    function examSubmitButton() {
        if (hiddenPartTags + hiddenPartFilters === 0) {
            console.log('Кнопка применить заблокирована');
        } else {
        }
    }
}

function animationTogglesMobile() {
    // console.log('Mobile');
    const tags = document.querySelector('.toggles-tags-button');
    const filters = document.querySelector('.toggles-filters-button');
    const tagsItems = document.querySelectorAll('.tags-items');
    const filtersSubmit = document.querySelector('.filters-submit');
    const wrapper = document.querySelector('.tags-en-filters-wrapper');
    /* let */ hiddenPartTags = 0;
    /* let */ hiddenPartFilters = 0;

    if (hasSetEventsMobileChecker === 0) {
        tags.addEventListener('click', (ev) => tagsChangeStyle(ev));

        filters.addEventListener('click', (ev) => filterChangeStyle(ev));

        itemsChangeStyle(tagsItems);

        filtersSubmit.addEventListener('touchstart' /* mousedown */, () => animationFilterSubmitDown());
        filtersSubmit.addEventListener('touchend' /* mouseup */, () => animationFilterSubmitUp());
        filtersSubmit.addEventListener('mousedown', () => animationFilterSubmitDown());
        filtersSubmit.addEventListener('mouseup', () => animationFilterSubmitUp());

        hasSetEventsMobileChecker += 1;
    }

    tags.classList.remove('is-dissabled-buttons');
    filters.classList.remove('is-dissabled-buttons');
    tags.classList.add('is-enabled-buttons');
    filters.classList.add('is-enabled-buttons');

    for (const i of tags.querySelector('.svg').getElementsByTagName('path')) {
        i.setAttribute('fill', '#0');
    }

    for (const i of filters.querySelector('.svg').getElementsByTagName('path')) {
        i.setAttribute('fill', '#EBEBEB');
    }

    document.querySelector('.tags').classList.add('is-hidden');
    document.querySelector('.filters').classList.add('is-hidden');
    wrapper.classList.add('is-hidden');

    function tagsChangeStyle(ev) {
        // console.log('tagsChangeStyle set MOBILE');
        ev.preventDefault();

        if (tags.classList.contains('is-enabled-buttons')) {
            tags.classList.remove('is-enabled-buttons');
            tags.classList.add('is-dissabled-buttons');

            for (const i of tags.querySelector('.svg').getElementsByTagName('path')) {
                i.setAttribute('fill', '#242424');
            }
            document.querySelector('.tags').classList.remove('is-hidden');
        } else {
            tags.classList.remove('is-dissabled-buttons');
            tags.classList.add('is-enabled-buttons');

            for (const i of tags.querySelector('.svg').getElementsByTagName('path')) {
                i.setAttribute('fill', '#0');
            }
            document.querySelector('.tags').classList.add('is-hidden');
        }

        hiddenPartTags = hiddenPartTags === 0 ? hiddenPartTags + 1 : hiddenPartTags - 1;
        // console.log('hiddenPartTags: ' + hiddenPartTags);
        // console.log('hiddenPartFilters: ' + hiddenPartFilters);
        examFormHide();
    }

    function filterChangeStyle(ev) {
        // console.log('filterChangeStyle set MOBILE');
        ev.preventDefault();

        if (filters.classList.contains('is-enabled-buttons')) {
            filters.classList.remove('is-enabled-buttons');
            filters.classList.add('is-dissabled-buttons');

            for (const i of filters.querySelector('.svg').getElementsByTagName('path')) {
                i.setAttribute('fill', '#242424');
            }
            document.querySelector('.filters').classList.remove('is-hidden');
        } else {
            filters.classList.remove('is-dissabled-buttons');
            filters.classList.add('is-enabled-buttons');

            for (const i of filters.querySelector('.svg').getElementsByTagName('path')) {
                i.setAttribute('fill', '#EBEBEB');
            }
            document.querySelector('.filters').classList.add('is-hidden');
        }

        hiddenPartFilters = hiddenPartFilters === 0 ? hiddenPartFilters + 1 : hiddenPartFilters - 1;
        // console.log('hiddenPartTags: ' + hiddenPartTags);
        // console.log('hiddenPartFilters: ' + hiddenPartFilters);
        examFormHide();
    }

    function animationFilterSubmitDown() {
        filtersSubmit.classList.add('is-dissabled-buttons');
        filtersSubmit.classList.remove('is-enabled-buttons');
    }

    function animationFilterSubmitUp() {
        filtersSubmit.classList.remove('is-dissabled-buttons');
        filtersSubmit.classList.add('is-enabled-buttons');
    }

    function examFormHide() {
        if (hiddenPartTags + hiddenPartFilters === 0) {
            wrapper.classList.add('is-hidden');
        } else {
            wrapper.classList.remove('is-hidden');
        }
    }
}

function animationOpenMenu() {
    'use strict';

    const toggle = document.querySelector('.menu-button');

    toggle.addEventListener('click', (event) => {
        event.preventDefault();
        toggle.classList.contains('active') ? toggle.classList.remove('active') : toggle.classList.add('active');

        const menu = document.querySelector('.menu');
        if (menu.classList.contains('is-hidden')) {
            menu.classList.remove('is-hidden');
            setTimeout(() => menu.classList.add('is-visible-menu'), 10);
        } else {
            menu.classList.remove('is-visible-menu');
            setTimeout(() => menu.classList.add('is-hidden'), 100);
        }
    });
}

function itemsChangeStyle(items) {
    if (tagClickChecker === 0) {
        for (const i of items) {
            i.addEventListener('click', (ev) => changes(i, ev));
        }
        tagClickChecker += 1;
    }

    function changes(el, ev) {
        ev.preventDefault();
        if (el.classList.contains('is-enabled-buttons')) {
            el.classList.remove('is-enabled-buttons');
            el.classList.add('is-dissabled-buttons');
        } else {
            el.classList.remove('is-dissabled-buttons');
            el.classList.add('is-enabled-buttons');
        }
    }
}

function animationSearchButton() {
    const searchButton = document.querySelector('.search-button');
    const searchField = document.querySelector('.header-search-field');

    searchButton.addEventListener('click', (ev) => animationSearchField(ev, searchButton, searchField));

    if (window.screen.width > 1023) {
        searchButton.classList.add('search-button-active');
        searchField.classList.remove('is-hidden');
    }

    function animationSearchField(ev, obj, subObj) {
        ev.preventDefault();
        obj = obj.classList;
        subObj = subObj.classList;

        if (obj.contains('search-button-active')) {
            obj.remove('search-button-active');
            subObj.add('is-hidden');
        } else {
            obj.add('search-button-active');
            subObj.remove('is-hidden');
        }
    }
}
