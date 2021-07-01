window.onload = function () {

    /*--------------------------------------------------------
    Корректировка ширины элементов карусели
    
    Нужна, чтобы учесть наличие/отсутствие полосы вертикальной прокрутки
    --------------------------------------------------------*/
    var carousel__items = document.querySelectorAll(".carousel__item");

    //alert(carousel__items.length); 
    function changeCarouselItemWidth () {
        if (document.documentElement.clientWidth >= 1140) {
            for (var i = 0, n = carousel__items.length; i < n; i++) {
                carousel__items[i].style.width = document.documentElement.clientWidth / 3 - 60 + "px";
            }
        }
        else {
            for (var i = 0, n = carousel__items.length; i < n; i++) {
                carousel__items[i].style.width = "320px";
            }
        }
    }
    changeCarouselItemWidth();

    window.addEventListener("resize", changeCarouselItemWidth); 


}
 