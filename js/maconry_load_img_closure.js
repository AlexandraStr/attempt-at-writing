$(function () {

    // function rundom
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    jQuery.support.cors = true;//For IE 8+


   // Topics to search for images
    var titleIdea = [
        "Sport+and+Activity",
        "Beauty+and+Health",
        "Extreme+Sports",
        "Games",
        "Culture+and+Education",
        "Relaxation",
        "Travelling"
    ];



// load images by ajax

           function loadImages(titleArea,e) {
                     if (e && typeof e != 'undefined') {
                         e.preventDefault();
                     }
                     console.log(titleArea);
                     $(".grid-item").remove();

                     var APIkey="4534315-1446b5ff2fa21aef31d1c4233";
                     var url =    "https://pixabay.com/api/?key="+APIkey+"&image_type=photo&orientation=vertical&per_page=15&q=";


                     for(var i=0;i<titleArea.length;i++) {
                         var seachInput = titleArea[i];
                         var titlePict = titleArea[i].replace(/\+/gi, " ");
                         var urlik = url + seachInput;
                         console.log("urlik",urlik);
                     $.ajax({
                         url: urlik,
                         datatype: "jsonp",
                         success:function (title) {
                             return function (data) {
                                 var dataset = data.hits;
                                 if (dataset.length != 0) {
                                     var jPic = randomInteger(1, dataset.length) - 1;
                                     var urlDate = dataset[jPic].webformatURL;
                                     $('<div class="grid-item"><img src="'+urlDate+'"><a>'+title+'</a></div>')
                                         .appendTo(".grid");
                                 }
                             }
                             
                         }(titlePict)

                     });

                 }


           }

    loadImages(titleIdea);



    $(".form_button").click(function (e) {
            var j=randomInteger(1,titleIdea.length)-1
            titleIdea[j] = $("#seachInput").val();
            loadImages(titleIdea);
        }
    )
});
