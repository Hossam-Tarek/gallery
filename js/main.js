let images = $(".image");

let sliderView = $(".slider__view");
let innerSliderWidth = parseFloat(sliderView.css("width").split("px")[0]);
let imagesNum = $(".slider__image").length;

images.hover(function () {
    $(this).fadeTo(300, 1);
}, function () {
    $(this).fadeTo(300, 0.7);
});

images.click(function () {
    let translateX = -$(this).index() * innerSliderWidth;
    $(".slider").css("visibility", "visible");
    sliderView.css("transform", `translateX(${translateX}px)`);
});

$("#right-arrow").click(function () {
    if (imagesNum < 2) {
        return;
    }

    let translateX = sliderView.css("transform");

    if (translateX === "none") {
        sliderView.css("transform", `translateX(-${sliderView.css("width")})`);
        return;
    }

    translateX = parseFloat(translateX.split(",")[4]);
    let newTranslateX = translateX - innerSliderWidth;

    if (imagesNum === 0 || newTranslateX < -(imagesNum - 1) * innerSliderWidth) {
        sliderView.css("transform", `translateX(0)`);
        return;
    }

    sliderView.css("transform", `translateX(${newTranslateX}px)`);
});

$("#left-arrow").click(function () {
    if (imagesNum < 2) {
        return;
    }

    let translateX = sliderView.css("transform");

    if (translateX === "none") {
        return;
    }

    translateX = parseFloat(translateX.split(",")[4]);
    let newTranslateX = translateX + innerSliderWidth;

    if (imagesNum === 0 || newTranslateX >= 0) {
        sliderView.css("transform", `translateX(0)`);
        return;
    }

    sliderView.css("transform", `translateX(${newTranslateX}px)`);
});

$("#close-icon").click(function () {
    $(this).parent().css("visibility", "hidden");
});
