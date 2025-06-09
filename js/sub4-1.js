const btn1 = document.querySelector('.btn p');
const btn2 = document.querySelectorAll('.mst li');
const btn3 = document.querySelectorAll('.btn ul li');

btn1.addEventListener('click', (e) => {
    btn1.classList.toggle('on');
});

btn2.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        window.location.href = `sub4-${idx + 2}.html`;
    });
});

// btn3.forEach((item, idx) => {
//     item.addEventListener('click', (e) => {
//         window.
//     })
// })
