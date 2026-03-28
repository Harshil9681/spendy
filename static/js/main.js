// main.js — students will add JavaScript here as features are built

// Demo modal functionality
(function() {
    const modal = document.getElementById('demo-modal');
    const trigger = document.getElementById('demo-trigger');
    const closeBtn = document.getElementById('modal-close');
    const video = document.getElementById('demo-video');
    const VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    if (!modal || !trigger) return;

    function openModal() {
        modal.classList.add('active');
        video.src = VIDEO_URL;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        video.src = '';
        document.body.style.overflow = '';
    }

    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();
