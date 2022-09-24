$(document ).ready(function() {
    $("#Ayam").click(function(){
        $(".ayam").toggle();
        $(this).css({
            background: "url('./gambar/ayam.jpg')",
            height: "230px",
            "background-repeat": "repeat-y",
        })

        $(this).find("gambar hewan").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/ayam.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });
    
    $("#Bebek").click(function(){
        $(".bebek").toggle();
        $(this).css({
            background: "url('./gambar/bebek55.jpg')",
            height: "230px",
            "background-repeat": "repeat-y",
        })

        $(this).find("gambar hewan").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/bebek.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });
    
    $("#Merpati").click(function(){
        $(".merpati").toggle();
        $(this).css({
            background: "url('./gambar/Merpati1.jpg')",
            height: "230px",
            "background-repeat": "repeat-y",
        })

        $(this).find("gambar hewan").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/merpati.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });
    
    $("#Singa").click(function(){
        $(".singa").toggle();
        $(this).find("gambar hewan").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/singa.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });
    $("#Harimau").click(function(){
        $(".harimau").toggle();
        $(this).find("gambar hewan").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/harimau.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });
    
    $("#Buaya").click(function(){
        $(".buaya").toggle();
        $(this).find("gambar hewan").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/buaya.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });
   $("#Kambing").click(function(){
        $(".kambing").toggle();
        $(this).find("gambar hewan").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/kambing.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });
    $("#Sapi").click(function(){
        $(".sapi").toggle();
        $(this).find("gambar hewan").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/sapi.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });
    
    $("#Kuda").click(function(){
        $(".kuda").toggle();
        $(this).find("gambar hewan").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/kuda.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });

});   