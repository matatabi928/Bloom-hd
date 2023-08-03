document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const headerOffset = 70;  // ヘッダーの高さ。必要に応じて変更してください。
        const elementY = document.querySelector(this.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
        const finalY = elementY - headerOffset;

        window.scrollTo({
            top: finalY,
            behavior: 'smooth'
        });
    });
});

// バーガーメニュー要素とナビゲーションメニュー要素の取得
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav__menu');

// バーガーメニュー要素がクリックされたときのイベントリスナーを設定
burger.addEventListener('click', toggleNav);

// メニュー内の全てのリンク要素を取得
const navLinks = document.querySelectorAll('.header__nav__menu a');

// 各リンクにイベントリスナーを追加
navLinks.forEach(link => {
    link.addEventListener('click', toggleNav);
});

// ナビゲーションメニューの表示を切り替える関数
function toggleNav() {
    if (nav.classList.contains('show')) {
        nav.style.transition = 'none'; // トランジションを無効化
        nav.classList.remove('show');
        // トランジションを元に戻すためのタイマーをセット
        setTimeout(() => {
            nav.style.transition = '';
        }, 0);
    } else {
        nav.classList.add('show');
    }
}






document.addEventListener('DOMContentLoaded', () => {
    const fadeLeftItems = document.querySelectorAll('.effect-fade-left');
    fadeLeftItems.forEach((fadeLeftItem) => {
        fadeLeftItem.classList.add('effect-scroll');
    });

    const fadeItems = document.querySelectorAll('.effect-fade');
    fadeItems.forEach((fadeItem) => {
        fadeItem.classList.add('effect-scroll');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var fadeElements = document.querySelectorAll('.effect-fade, .effect-fade-in');
    fadeElements.forEach(function(fadeElement) {
        fadeElement.classList.remove('effect-scroll');
    });

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('effect-scroll');
            } else {
                entry.target.classList.remove('effect-scroll');
            }
        });
    });

    fadeElements.forEach(function(fadeElement) {
        observer.observe(fadeElement);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var fadeElements = document.querySelectorAll('.effect-fade');
    fadeElements.forEach(function(fadeElement) {
        fadeElement.classList.remove('effect-scroll');
    });
});

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('effect-scroll');
        } else {
            entry.target.classList.remove('effect-scroll');
        }
    });
});

var fadeElements = document.querySelectorAll('.effect-fade');
fadeElements.forEach(function(fadeElement) {
    observer.observe(fadeElement);
});