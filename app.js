setInterval(
    function () {
        try {
            const adButtonClass = document.getElementsByClassName('ytp-ad-skip-button-container');
            const adButtonElem = adButtonClass[0];
            adButtonElem.click();
        } catch (e) {
            ;
        }
    }
), 1000

