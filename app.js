setInterval(
    function () {
        try {
            const skipButton = document.getElementsByClassName('ytp-ad-skip-button-container');
            skipButton[0].click();
        } catch (error) {
            console.log(error);
        }
    }
), 1000
