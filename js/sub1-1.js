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

    //이건 개인 버튼 ㅠ
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
