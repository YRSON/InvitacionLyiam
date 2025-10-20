const music = document.getElementById('bg-music');
        const musicButton = document.getElementById('music-button');
        let isPlaying = false;

        musicButton.addEventListener('click', () => {
            if (isPlaying) {
                music.pause();
                musicButton.innerText = '🎵';
            } else {
                music.play();
                musicButton.innerText = '🔇';
            }
            isPlaying = !isPlaying;
        });