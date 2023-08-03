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
burger.addEventListener('click', () => {
    // クリックされたらナビゲーションメニューに "show" クラスを追加/削除
    nav.classList.toggle('show');
});

// メニュー内の全てのリンク要素を取得
const navLinks = document.querySelectorAll('.header__nav__menu a');

// 各リンクにイベントリスナーを追加
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // リンクがクリックされたらナビゲーションメニューの "show" クラスを削除
        nav.classList.remove('show');
    });
});




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