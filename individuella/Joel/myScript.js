
; (function () {
    ///
    // Varibles & Literls
    ///

    const photoGallery =
        [
            "assets/images/image1.png"
            ,"assets/images/image2.png"
            ,"assets/images/image3.png"
            ,"assets/images/image4.png"
            ,"assets/images/image5.png"
            ,"assets/images/image6.png"
        ];

    const photoSlide = document.querySelector(".photoSlide");
    const photo = document.getElementById("photo");
    const backwardBtn = document.getElementById("backwardBtn");
    const forwardBtn = document.getElementById("forwardBtn");


    ///
    // Functions
    ///

    function logElement(event) {
        console.log(event.target);
    }

    function nextPhoto() {
        const source = photo.getAttribute("src");
        const currentIndex = photoGallery.indexOf(source);
        const nextIndex = currentIndex + 1 === photoGallery.length ? 0 : currentIndex + 1;
        photo.setAttribute("src", photoGallery.at(nextIndex));
    };

    function previosPhoto() {

        const source = photo.getAttribute("src");
        const currentIndex = photoGallery.indexOf(source);
        const previosIndex = currentIndex - 1 === -1 ? photoGallery.length - 1 : currentIndex - 1;
        photo.setAttribute("src", photoGallery.at(previosIndex));
    };

    function start(startIndex) {

        photo.setAttribute("src", photoGallery.at(startIndex));
    };

    ///
    // Inits & Event listeners
    ///

    photoSlide.addEventListener('click', logElement)
    forwardBtn.addEventListener('click', nextPhoto);
    backwardBtn.addEventListener('click', previosPhoto);

    start(0);

})();



