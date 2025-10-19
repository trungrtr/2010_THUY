document.addEventListener('DOMContentLoaded', function() {
    // Các biến không đổi
    const giftBox = document.getElementById('gift-box');
    const card = document.getElementById('card');
    const cardTitle = document.querySelector('.card-title');
    const letterIcon = document.getElementById('letter-icon');
    const modal = document.getElementById('letter-modal');
    const closeButton = document.querySelector('#letter-modal .close-button'); 
    const body = document.querySelector('body');
    const iconContainer = document.getElementById('icon-container');
    const imageIcon = document.getElementById('image-icon');
    const imageModal = document.getElementById('image-modal');
    const imageCloseButton = document.querySelector('#image-modal .close-button');
    const letterTextElement = document.getElementById('letter-text');
    const backgroundMusic = document.getElementById('background-music');

    const letterContent = "Nhân ngày 20/10, Trung chỉ muốn chúc Thùy luôn vui vẻ, bình yên và được làm mọi điều Thùy thích. Mong Thùy có một ngày 20/10 thật vui vẻ và ý nghĩa! LOVE<3";

    function typeWriter(text, element, index) {
        element.classList.add('typing');
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            setTimeout(() => typeWriter(text, element, index + 1), 60);
        } else {
            element.classList.remove('typing');
        }
    }

    body.addEventListener('mousemove', function(event) {
        if (Math.random() > 0.8) { createHeart(event.clientX, event.clientY); }
    });

    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        const hearts = ['❤️', '😋', '💝', '💖 ', '😜', '🧡', '💖','🫶','❤️‍🔥'];
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }

    // --- THAY ĐỔI LOGIC MỞ QUÀ Ở ĐÂY ---
    giftBox.addEventListener('click', function() {
        giftBox.style.opacity = '0';
        giftBox.style.transform = 'scale(0.8)';
        setTimeout(() => {
            giftBox.style.display = 'none';
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';

                // 1. Hiện tiêu đề "Happy Women's Day" trước
                setTimeout(() => {
                    cardTitle.classList.add('visible');
                }, 500); // Hiện sau 0.5 giây

                // 2. Sau đó mới hiện các icon
                setTimeout(() => {
                    iconContainer.classList.add('visible');
                }, 1500); // Hiện sau 1.5 giây

            }, 50);
        }, 700);
    });

    // --- THAY ĐỔI LOGIC MỞ/ĐÓNG THƯ VÀ ẢNH ---
    letterIcon.addEventListener('click', function() {
        cardTitle.classList.remove('visible'); // Ẩn tiêu đề đi
        modal.classList.remove('hidden');
        iconContainer.classList.remove('visible');
        letterTextElement.innerHTML = '';
        typeWriter(letterContent, letterTextElement, 0);
        backgroundMusic.play();
    });

    function closeModal() {
        modal.classList.add('hidden');
        iconContainer.classList.add('visible'); 
        cardTitle.classList.add('visible'); // Hiện lại tiêu đề
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }

    closeButton.addEventListener('click', closeModal);
    
    imageIcon.addEventListener('click', function() {
        cardTitle.classList.remove('visible'); // Ẩn tiêu đề đi
        imageModal.classList.remove('hidden');
        iconContainer.classList.remove('visible');
    });

    function closeImageModal() {
        imageModal.classList.add('hidden');
        iconContainer.classList.add('visible');
        cardTitle.classList.add('visible'); // Hiện lại tiêu đề
    }

    imageCloseButton.addEventListener('click', closeImageModal);

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
        if (event.target == imageModal) {
            closeImageModal();
        }
    });
});