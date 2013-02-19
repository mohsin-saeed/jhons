function ShowMe(a)
{	
	if ($('#'+a).attr('class') == 'active')
	{
		console.log($('.family-hint-book-'+a).text());
		$('.image-hint').text($('.family-hint-book-'+a).text());
		$('#parent-dash-main').css('visibility','visible');
		$('.opacity').height($(document).height());
		$('.opacity').css('display','block');
	}
}

function CloseMe()
{
	$('#parent-dash-main').css('visibility','hidden');
	$('.opacity').css('display','none');
}

//-----------------Multichild Parent Dashboard << , >> functinality ------------------//

var child_data_url = "child_data";
function loadPrevChildData(){
   $("#ajax-loader").show();
   var childIndex = $("#prevChildIndex").text();
   $.get(child_data_url, { child: childIndex },
       function(data){
            $("#parents-child-page").html(data);
        }
    );

}

function loadNextChildData(){
   $("#ajax-loader").show();
   var childIndex = $("#nextChildIndex").text();
   $.get(child_data_url, { child: childIndex },
       function(data){
         $("#parents-child-page").html(data);           
        }
    );

}


        

     