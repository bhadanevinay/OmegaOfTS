// Disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable long press on mobile
document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
});