document.addEventListener('DOMContentLoaded', () => {
    // Добавление падающих листьев
    const numLeaves = 10;
    for (let i = 0; i < numLeaves; i++) {
        const leaf = document.createElement('img');
        leaf.src = 'https://iimg.su/s/12/exmO4uSLNzES14k5cvXwo184DncYYsB22W34Zu5I.png';
        leaf.className = 'leaf';
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDuration = `${Math.random() * 3 + 2}s`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(leaf);
    }

    // Получение параметров из URL
    const urlParams = new URLSearchParams(window.location.search);
    const avatarUrl = urlParams.get('avatar_url');
    const username = urlParams.get('username');
    const telegramId = urlParams.get('id');
    const balance = urlParams.get('balance') || 0; // Если баланс отсутствует, установить 0

    // Установка параметров профиля
    if (avatarUrl) {
        const avatarImg = document.getElementById('avatar-img');
        if (avatarImg) avatarImg.src = avatarUrl;

        const profileAvatarImg = document.querySelector('.profile-avatar img');
        if (profileAvatarImg) profileAvatarImg.src = avatarUrl;
    }

    if (username) {
        const usernameField = document.getElementById('username');
        if (usernameField) usernameField.innerText = username;
    }

    if (telegramId) {
        const telegramIdField = document.getElementById('telegram-id');
        if (telegramIdField) telegramIdField.innerText = `ID: ${telegramId}`;
    }

    const balanceAmountField = document.getElementById('balance-amount');
    if (balanceAmountField) balanceAmountField.innerText = `${balance} ₽`;

    // Обработка клика по кнопке профиля
    const profileBtn = document.getElementById('profile-btn');
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            window.location.href = 'profile.html';
        });
    }

    // Открытие и закрытие модального окна
    const menuButton = document.getElementById('menu-btn');
    const popupModal = document.getElementById('popup-modal');
    const closeButton = document.getElementById('close-btn');

    if (menuButton && popupModal && closeButton) {
        menuButton.addEventListener('click', () => {
            popupModal.classList.add('show');
        });

        closeButton.addEventListener('click', () => {
            popupModal.classList.remove('show');
        });
    }

    // Копирование ID в буфер обмена
    const telegramIdElement = document.getElementById('telegram-id');
    if (telegramIdElement) {
        telegramIdElement.addEventListener('click', () => {
            navigator.clipboard.writeText(`ID: ${telegramId}`)
                .then(() => {
                    alert('ID скопирован в буфер обмена');
                })
                .catch(err => {
                    console.error('Ошибка при копировании ID:', err);
                });
        });
    }

    // Наведение и нажатие на кнопки покупок и пополнения
    const buttons = document.querySelectorAll('.profile-buttons a');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'rgba(48, 48, 48, 0.7)';
        });

        button.addEventListener('mousedown', () => {
            button.style.backgroundColor = 'rgba(48, 48, 48, 0.5)';
        });

        button.addEventListener('mouseup', () => {
            button.style.backgroundColor = 'rgba(48, 48, 48, 0.7)';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'rgba(44, 47, 51, 0.8)';
        });
    });
});
