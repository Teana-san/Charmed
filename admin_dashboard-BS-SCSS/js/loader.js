// Loader wrapper
const loaderWrapper = document.createElement('div');
loaderWrapper.className = 'loader-wrapper';

// dotlottie-player element
const lottiePlayer = document.createElement('dotlottie-player');
lottiePlayer.src = 'https://lottie.host/734c1f12-ce5f-4684-babc-998c1861c78d/L0mGuOyjQl.json';
lottiePlayer.background = 'transparent';
lottiePlayer.speed = '1';
lottiePlayer.style.width = '300px';
lottiePlayer.style.height = '300px';
lottiePlayer.setAttribute('loop', '');
lottiePlayer.setAttribute('autoplay', '');

// Append player to wrapper
loaderWrapper.appendChild(lottiePlayer);

// Add loader to body
document.body.appendChild(loaderWrapper);

// Hide loader after X seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        loaderWrapper.classList.add('fade-out');
        // Remove loader from DOM after animation
        setTimeout(() => {
            loaderWrapper.remove();
        }, 300);
    }, 1000);
});