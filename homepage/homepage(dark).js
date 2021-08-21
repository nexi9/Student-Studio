var icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        icon.src = 'sunnew.png';
    } else {
        icon.src = 'moon2.png';

    }
}
