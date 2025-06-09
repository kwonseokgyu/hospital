const infomate = () => {
    const ul = document.querySelector('#main-con1 .inner .boxes');
    const infolis = document.querySelectorAll('#main-con1 .inner .menu ul li');

    infolis.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            ul.innerHTML = '';
            if (ul.querySelectorAll('li').length >= 8 && idx === 0) {
                return;
            }
            switch (idx) {
                case 0:
                    ul.innerHTML += `<ul>
                        <li>
                            <img src="./img/brain/brain1.png" alt="" />
                            <strong>자발성 두개내압 저하증</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain2.png" alt="" />
                            <strong>두개골조기유합증</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain3.png" alt="" />
                            <strong>뇌교종</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain6.png" alt="" />
                            <strong>메니에르방</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain5.png" alt="" />
                            <strong>시신경척수염범주질환</strong>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="./img/brain/brain1.png" alt="" />
                            <strong>자발성 두개내압 저하증</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain2.png" alt="" />
                            <strong>자발성 두개내압 저하증</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain3.png" alt="" />
                            <strong>자발성 두개내압 저하증</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain4.png" alt="" />
                            <strong>자발성 두개내압 저하증</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain5.png" alt="" />
                            <strong>자발성 두개내압 저하증</strong>
                        </li>
                    </ul>`;
                    break;
                case 1:
                    ul.innerHTML += `<ul>
                <li>
                    <img src="./img/body/body0.jpg" alt="" />
                    <strong>재생불량성빈혈</strong>
                </li>
                <li>
                    <img src="./img/body/body1.png" alt="" />
                    <strong>혈우병</strong>
                </li>
                <li>
                    <img src="./img/body/body2.png" alt="" />
                    <strong>말단비대증</strong>
                </li>
                <li>
                    <img src="./img/body/body3.png" alt="" />
                    <strong>영아연축</strong>
                </li>
                <li>
                    <img src="./img/body/body4.png" alt="" />
                    <strong>시신경척수염범주질환</strong>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="./img/brain/brain1.png" alt="" />
                    <strong>자발성 두개내압 저하증</strong>
                </li>
                <li>
                    <img src="./img/brain/brain2.png" alt="" />
                    <strong>자발성 두개내압 저하증</strong>
                </li>
                <li>
                    <img src="./img/brain/brain3.png" alt="" />
                    <strong>자발성 두개내압 저하증</strong>
                </li>
                <li>
                    <img src="./img/brain/brain4.png" alt="" />
                    <strong>자발성 두개내압 저하증</strong>
                </li>
                <li>
                    <img src="./img/brain/brain5.png" alt="" />
                    <strong>자발성 두개내압 저하증</strong>
                </li>
            </ul>`;
                default:
                    break;
            }
        });
    });
};

// ------------------------------

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
    const con1 = get('#main-con1');
    const con2 = get('.main-con2');
    const morebtn = get('#more1');

    btn[0].classList.add('on');
    con1.classList.add('on');
    morebtn.classList.remove('on');
    btn.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            btn.forEach((btnitem, idx) => {
                btnitem.classList.remove('on');
            });
            item.classList.add('on');

            switch (idx) {
                case 0:
                    con1.classList.add('on');
                    con2.classList.remove('on');
                    morebtn.classList.remove('on');
                    break;
                case 1:
                    con2.classList.add('on');
                    con1.classList.remove('on');
                    morebtn.classList.add('on');
                    break;

                // 어떤 case와도 일치하지 않을 때 실행
            }
        });
    });
    // li메뉴바
    const libtn = document.querySelectorAll('#main-con1 .inner .menu ul li');

    libtn[0].classList.add('on');
    libtn.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            libtn.forEach((item, idx) => {
                item.classList.remove('on');
            });
            item.classList.add('on');
        });
    });

    const ul = document.querySelector('#main-con1 .inner .boxes');
    const more = get('#more .inner .btn button');
    let currentIdx = null;

    more.addEventListener('click', () => {
        // 배열로 사진 하기
        let content = '';
        for (let i = 1; i < 2; i++) {
            content += `
          <ul>
                        <li>
                            <img src="./img/brain/brain1.png" alt="" />
                            <strong>자발성 두개내압 저하증</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain2.png" alt="" />
                            <strong>자발성 두개내압 저하증</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain3.png" alt="" />
                            <strong>자발성 두개내압 저하증</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain4.png" alt="" />
                            <strong>자발성 두개내압 저하증</strong>
                        </li>
                        <li>
                            <img src="./img/brain/brain5.png" alt="" />
                            <strong>자발성 두개내압 저하증</strong>
                        </li>
                    </ul>
          `;
        }
        ul.innerHTML += content;
    });
};

const make = () => {
    const ul1 = document.querySelector('.main-con2 .inner');
    const more1 = document.querySelector('#more1 .inner1 .btn1 button');
    let currentIdx = null;
    more1.addEventListener('click', () => {
        // 배열로 사진 하기
        let content1 = '';
        // for (let i = 1; i < 2; i++) {
        content1 += `
             <ul>
                    <li>
                        <iframe
                            width="320"
                            height="200"
                            src="https://www.youtube.com/embed/zmUTzEIlnvM?si=TMv6X9pNMf8Rjk0i"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                        <strong>영상으로 만나는 국가보훈부 소식</strong>
                        <p>2025.05.06</p>
                    </li>
                    <li>
                        <iframe
                            width="320"
                            height="200"
                            src="https://www.youtube.com/embed/2ucbvEPznjc?si=NxHn2msVvFR5j3Mb"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                        <strong>몸이 보내는 폐암신호 4가지</strong>
                        <p>2025.05.06</p>
                    </li>
                    <li>
                        <iframe
                            width="320"
                            height="200"
                            src="https://www.youtube.com/embed/hQZeKFg1YaM?si=QBo8wQ956oTDAJC8"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                        <strong>놓쳐서는 안될 위암 초기증상 5가지</strong>
                        <p>2025.05.05</p>
                    </li>
                    <li>
                        <iframe
                            width="320"
                            height="200"
                            src="https://www.youtube.com/embed/ZpPjzSp7Hkc?si=gzBxeS4pukynUTpX"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                        <strong> 목에 나타나는 뇌졸중신호(?)</strong>
                        <p>2025.05.04</p>
                    </li>
                </ul>
          
          `;
        // }
        ul1.innerHTML += content1;
    });
};
infomate();
menubar();
make();
