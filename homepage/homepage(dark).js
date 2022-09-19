var icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        icon.src = '../homepage/sunnew.png';
    } else {
        icon.src = '../homepage/moon2.png';

    }
}
