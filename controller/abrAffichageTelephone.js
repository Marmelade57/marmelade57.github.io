document.querySelectorAll('.abr').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        el.classList.toggle('active');
    });
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.abr')) {
        document.querySelectorAll('.abr.active').forEach(function (el) {
            el.classList.remove('active');
        });
    }
});