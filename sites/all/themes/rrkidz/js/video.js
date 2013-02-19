    
function RandNo(num) {
    return Math.floor(Math.random() * num);
}
$(document).ready(function() {
	
	var data;
    $.ajax({
        type: "GET",
        url: "http://gdata.youtube.com/feeds/api/playlists/4C4587483EF2A205?v=2&alt=jsonc",
	contentType: "application/json; charset=utf-8",
        dataType: "jsonp",

        success: function(result) {
        data = result.data;
	var totalItems = data.totalItems;
	var randNumber = RandNo(totalItems);

            if (data)
            {
            $("#yt").html("<iframe wmode='Opaque' width='300' height='240' src='http://www.youtube.com/embed/" + data.items[randNumber].video.id + "?rel=0&wmode=transparent' frameborder='0' allowfullscreen></iframe>");

            $("#head").html(data.items[randNumber].video.title);
	    
	    var des = data.items[randNumber].video.description;
	    if (des.length > 110)
	    {
		    des = des.substr(0,110);
                    des = des + "...";
	    }
            $("#video-desc").html(des);

           }
        }
    });
});

