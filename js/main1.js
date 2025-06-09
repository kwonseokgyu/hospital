  window.addEventListener('DOMContentLoaded', () => {
    const scrollWrap = document.querySelector('.scroll-wrap');
    const conBox = document.querySelector('.con-box');

    const scrollAmount = (conBox.scrollWidth - scrollWrap.clientWidth) / 2;
    scrollWrap.scrollLeft = scrollAmount;
  });


// const boxs = document.querySelectorAll('.con5 .inner .con .right .box');
const vod = document.querySelector('.con5 .inner .con .left .vod iframe');
const txt = document.querySelectorAll('.con5 .inner .con .right .box .txt');
const dots = document.querySelectorAll('.con5 .inner .con .left .dots .dot')


txt.forEach((item, idx) => {
  item.addEventListener('click', (e) => {
    const newSrc = item.dataset.video;
    vod.src = newSrc;

    dots.forEach(dot =>
      dot.classList.remove('active')
    );
    dots[idx].classList.add('active');
  });
});

// const banner = () => {
//     boxs.forEach((item, idx) => {
//         item.classList.remove('on');
//     });
//     boxs[cnt].classList.add('on');
//     imgurl = `./image/img${cnt + 1}.jpg`;
//     picbox.setAttribute('src', iframe);
//     vid.animate({ opacity: [0, 1] }, 300);
// };

// boxs.forEach((itemLI, idx) => {
//     itemLI.addEventListener('click', (e) => {
//         cnt = idx;
//         banner();
//     });
// });
