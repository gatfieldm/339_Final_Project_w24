var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var id = button.id;
            if (id === 'head') {
                window.location.href = 'headphones.html';
            } else if (id === 'tablet') {
                window.location.href = 'tablets.html';
            } else if (id === 'laptop') {
                window.location.href = 'laptops.html';
            }
        });
    }
);