const showHololive = document.querySelector('.hololive');
const hololiveContainer = document.querySelector('.hololive-container');
const closeBtn = document.querySelector('.close-btn');

showHololive.onclick = () => {
    hololiveContainer.classList.add('active');
}

closeBtn.oneclick = () => {
    hololiveContainer.classList.remove('active');
}
