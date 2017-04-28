$(function () {
    // function rundom
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    $.support.cors = true;//For IE 8+


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
    function loadImages(titleArea, e) {
        if (e && typeof e !== "undefined") {
            e.preventDefault();
        }
         $(".grid-item").remove();

        console.log("titleArea = ",titleArea);

        var APIkey = "4534315-1446b5ff2fa21aef31d1c4233";
        var url = "https://pixabay.com/api/?key=" + APIkey + "&image_type=photo&per_page=3&q=";

        titleArea.forEach(function (seachInput, i, titleArea) {
            var titlePict = titleArea[i].replace(/\+/gi, " ");
            var urlik = url + seachInput;
            console.log("seachInput = ",seachInput);
            $.ajax({
                url: urlik,
                datatype: "jsonp",
                success: function (data) {
                    var dataset = data.hits;
                    // var titlePict = titleArea[i].replace(/\+/gi, " ");
                    if (dataset.length !== 0) {
                        var jPic = randomInteger(1, dataset.length) - 1;
                        var urlDate = dataset[jPic].webformatURL;
                        console.log('url=',urlDate);
                        console.log("i=",i);

                        $("<div class='grid-item '><img src=" + urlDate + "/><a>" + titlePict + "</a></div>")
                            .appendTo('.grid');

// ********************************************************

                        var wrapper = $('.grid');
                        var images = wrapper.find('img');
                        var imagesToLoad = images.length;
                         console.log('wrapper=',wrapper);
                         console.log('images',images);
                         console.log('imagesToload',imagesToLoad);

                        (function (wrapper, images, jQuery) {
                            images.on('load', function () {
                                console.log('imagesToload --=',imagesToLoad);
                                imagesToLoad--;
                                console.log("imagesToLoad Masonry =",imagesToLoad);
                                console.log("images Masorny =",images);
                                if (imagesToLoad <= 0) {
                                    console.log("masonry");
                                    wrapper.masonry({
                                        itemSelector: '.grid-item',
                                        columnWidth: '.grid-sizer',
                                        percentPosition: true,
                                        gutter: 15,
                                    });

                                    $(window).on('load', function () {
                                        console.log("load");
                                        wrapper.masonry({
                                            itemSelector: '.grid-item',
                                            columnWidth: '.grid-sizer',
                                            percentPosition: true,
                                            gutter: 15,
                                        });

                                    })
                                }

                            })

                        })(wrapper, images, $)
//*************************************************************************************************

                    }

                } //success
          }); // ajax


        }); // forEach


    }; //  function loadImages


        loadImages(titleIdea);






        $(".form_button").click(function (e) {
           var j = randomInteger(1, titleIdea.length) - 1;
            var seachElement = $("#seachInput").val();
            titleIdea[j] = seachElement;
            loadImages(titleIdea);
        });

});
