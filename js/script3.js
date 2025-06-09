const menubar = () => {
    const gnblis = document.querySelectorAll('#header .nav .gnb > li');
    const sublis = document.querySelectorAll('#header .nav .gnb > li ul');
    const header = document.querySelector('#header');
    gnblis.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            sublis.forEach((item, idx) => {
                item.classList.remove('on');
            });
            sublis[idx].classList.add('on');
            header.classList.add('on');
        });
        header.addEventListener('mouseleave', (e) => {
            sublis[idx].classList.remove('on');
            header.classList.remove('on');
        });
    });
    // 버튼임.
    const getAll = (taget) => document.querySelectorAll(taget);
    const get = (taget) => document.querySelector(taget);

    const btn = getAll('#main-con2 .inner .mainbtn ul li');
    const con3 = get('#main-con3');
    const con4 = get('#main-con4');

    const con5 = get('#main-con3-1');
    const con6 = get('#main-con4-1');

    const con7 = get('#main-con5');
    const con8 = get('#main-con6');

    btn.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            btn.forEach((item, idx) => {
                item.classList.remove('on');
            });
            item.classList.add('on');
            switch (idx) {
                case 0:
                    con3.classList.add('on');
                    con4.classList.add('on');
                    con5.classList.remove('on');
                    con6.classList.remove('on');
                    con7.classList.remove('on');
                    con8.classList.remove('on');
                    break;
                case 1:
                    con3.classList.remove('on');
                    con4.classList.remove('on');
                    con5.classList.add('on');
                    con6.classList.add('on');
                    con7.classList.remove('on');
                    con8.classList.remove('on');
                    break;
                case 2:
                    con3.classList.remove('on');
                    con4.classList.remove('on');
                    con5.classList.remove('on');
                    con6.classList.remove('on');
                    con7.classList.add('on');
                    con8.classList.add('on');
                    break;
                default:
                // 어떤 case와도 일치하지 않을 때 실행
            }
        });
    });
};

menubar();


// const get = (target) => document.querySelector(target);
// const getAll = (target) => document.querySelectorAll(target);

// const box = get('.box');
// const boxAll = getAll('.box');
// const txt = get('.num span');
// const btns = getAll('button');
// // const lis = getAll('.box.box ul li');

// let cnt = 0;
// const banner = () => {
//     boxAll.forEach((item, idx) => {
//         item.style.opacity = 0;
//     });
//     // 박스 없어지는거
//     boxAll[cnt].style.opacity = 1;
//     txt.textContent = `${cnt + 1}/3`;
//     // 처음에 1인 상태로 시작해라
// };

// btns[1].addEventListener('click', (e) => {
//     cnt = cnt > 1 ? (cnt = 0) : cnt + 1;
//     banner();
// });

// btns[0].addEventListener('click', (e) => {
//     cnt = cnt < 1 ? (cnt = 2) : cnt - 1;
//     banner();
// });
// lis.clas;
