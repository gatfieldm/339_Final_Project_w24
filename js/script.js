function sendToPage() {
    if (this.id === 'head') {
        window.location.href = 'headphones.html';
    } else if (this.id === 'tablet') {
        window.location.href = 'tablets.html';
    } else if (this.id === 'laptop') {
        window.location.href = 'laptops.html';
    } else {
        return;
    }
}
