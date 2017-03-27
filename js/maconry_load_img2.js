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


        $("#Seach_form").submit(function (e) {
              var titlePict = $("#seachInput").val();
              var seachInput= $("#seachInput").val()
              loadImages(seachInput,e);
           }
    )

             for(var i=0;i<titleIdea.length;i++) {
                 var seachInput = titleIdea[i];
                 var titlePict = titleIdea[i].replace(/\+/gi, " ");

// ajax
                 var loadImages = function (seachVal,e) {
                     if (e && typeof e != 'undefined') {
                         e.preventDefault();
                     }

                     $(".grid-item").remove();

                     var APIkey="4534315-1446b5ff2fa21aef31d1c4233";
                     var url =    "https://pixabay.com/api/?key="+APIkey+"&image_type=photo&orientation=vertical&per_page=15&q=";
                     var urlik = url + seachVal;
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

                 // call function

                 loadImages(seachInput);

             }


});
