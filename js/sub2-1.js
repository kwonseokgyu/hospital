'use strict';
const links = document.querySelectorAll('#content .box2 .con1 span ul li')

// links.setAttribute('href', 'https://map.naver.com/p/search/%EB%B3%B4%ED%9B%88%EC%A4%91%EC%95%99%EB%B3%91%EC%9B%90/place/11582978?placePath=%3Fentry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=entry%3Dpll%26fromNxList%3Dtrue%26x%3D127.022781%26y%3D37.524010&searchType=place')
const make = () => {
    links.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            if (index === 2) {
                window.open('https://map.naver.com/p/search/%EB%B3%B4%ED%9B%88%EC%A4%91%EC%95%99%EB%B3%91%EC%9B%90/place/11582978?placePath=%3Fentry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=entry%3Dpll%26fromNxList%3Dtrue%26x%3D127.022781%26y%3D37.524010&searchType=place', '_blank');
            }
        });
    });
};

(() => {
    make();
})();
