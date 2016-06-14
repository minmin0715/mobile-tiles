$(document).ready(function() {
    // firstpage & secondpage switch
    $("#firstpage").show();
    $("#secondpage").hide();

    $("#gear").click(function() {
        $("body").css("background-color", "#D8D8D8");
        $("#firstpage").hide();
        $("#secondpage").show();
    });
    $("#done").click(function() {
        $("body").css("background-color", "#333333");
        $("#secondpage").hide();
        $("#firstpage").show();
    });

    $("#person").on("click", function() {
        alert("The paragraph was clicked.");
    });




    $.ajax({
        url: "json/tiles.json",
        type: "POST",
        dataType: "json",
        success: function(data) {
            $.each(data.Tiles, function(index, value) {
                if ((value.TileProperties.Dimensions.Width == 1) && (value.TileProperties.Dimensions.Height == 1) && (value.TileProperties.HomeTileStatus == true) && (value.TileProperties.HomeURL.substring(value.TileProperties.HomeURL.lastIndexOf(".") + 1) !== "html")) {
                    $("#imagelist").append("<li id=" + value.Id + "><span id = 'auto' style='background-image:url(" + value.TileProperties.HomeURL + ")'>" + value.Caption + "</span></li>");
                    $("#list").append("<li id = 'eachlist'><img id = 'check' src = '../enhanced_display/images/mobile/check.png' onclick='myFunction(this)'><span>" + value.Caption + "</span><img id='stack' src='../enhanced_display/images/mobile/stack.png'><hr id='pad'></li>");
                };
            });
        },
        error: function() {
            console.log("Error");
        }
    });

    $("#list").sortable({
        handle: "#stack"
    })

});

function myFunction(element) {
    //alert(element.src);
    console.log(element.getAttribute('src', 2));
    if (element.getAttribute('src', 2) == '../enhanced_display/images/mobile/check.png') {
        element.src = '../enhanced_display/images/mobile/empty.png';
    } else {
        element.src = '../enhanced_display/images/mobile/check.png';
    }
}