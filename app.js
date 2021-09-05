const adSkipButton = () => {
    try {
        const adButtonClass = document.getElementsByClassName('ytp-ad-skip-button-container');
        const adButtonElem = adButtonClass[0];
        adButtonElem.click();
    } catch (e) {
        ;
    }
}
setInterval(adSkipButton ,1000);
