$(function () {


    var elementCount = 0;
    var widthElement = $('.slide_step li').outerWidth(true);
    var leftFunc=0;
    var centrFunc=0;
    var rightFunc=0;


    $('.arrow').click(function () {
        var parentBlock = $(this).parent().attr('id');
        var pointer = "#" + parentBlock  + " " + ".slide_step";
        var leftMove = $("#" + parentBlock + " .left");
        var rightMove = $("#" + parentBlock + " .right");
        var elementList = $(pointer);
        var currentList = pointer + " li";

    if ($(this).hasClass("right")) {
        var direction = 1;
    } else if ($(this).hasClass("left")) {
        var direction = -1;
    }


        switch(parentBlock){
            case "leftBlock":
              leftFunc = moveSlide(leftFunc);
                break;
            case "centralBlock":
                centrFunc = moveSlide(centrFunc);
                break;
            case "rightBlock":
              rightFunc = moveSlide(rightFunc);
                break;
            default:
                alert("Error");
        }



        function moveSlide ($currentPosition) {

                var elementCount = $(currentList).length;
                var maxPosition = -widthElement * (elementCount - 1);
                if (direction > 0) {
                    leftMove.show();
                    $currentPosition -= widthElement;
                    if ($currentPosition <= maxPosition) {
                        rightMove.hide();
                    }

                } else if (direction < 0) {
                    rightMove.show();
                    $currentPosition += widthElement;
                    if ($currentPosition >= 0) {
                        leftMove.hide();
                    }

                }

                elementList.animate({left: $currentPosition + 'px'}, 500);
            return $currentPosition;
        }



    })

})
