document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        console.log('DOM has loaded');
    });
});