$(document).ready(function() {

	var tab = $('.selected_tab').text();
	var selected_book_table = $('.current_book_table').text();

	if (selected_book_table == 0)
	{
		$('.no-result-message').show();
		$('#previous_page_link').hide();
		$('#next_page_link').hide();
	}
	else if (selected_book_table == 1){
		$('#book-table-page-'+selected_book_table).attr('class', "displayed_table");
		$('#book-table-page-'+selected_book_table).show();
		$('.parents-tabular-data').hide();
		$('#book-table-page-'+selected_book_table).parent().show();
		$('#previous_page_link').hide();
		$('.total_books_read_time').show();
	}

});

function show_dashboard_video_table()
{
	$('.no-result-message').hide();
	var tab = $('.selected_tab').text();
	if (tab == 'books')
	{
		var check = $('.current_book_table').text();
		if (check > 0)
		{
			$('.current_book_table').text(1);
			var id = $('.displayed_table').attr('id');
			$('#'+id).attr('class', "");
			$('#'+id).hide();
			$('#'+id).parent().hide();
		}
		

		$('.selected_tab').text('videos');
		check = $('.current_video_table').text();

		if (check > 0)
		{
			$('#video-table-page-'+check).show();
			$('#video-table-page-'+check).parent().show();
			$('#video-table-page-'+check).attr('class', "displayed_table");
			var total = $('.total_videos_tables').text();
			if (total <= 1)
			{
				$('#next_page_link').hide();
			}
			else
			{
				$('#next_page_link').show();
			}
		}
		else
		{
			$('.no-result-message').show();
			$('#next_page_link').hide();
		}
	
		$('#previous_page_link').hide();
		$('.total_books_read_time').hide();
		$('.total_trips_time').show();
	}
}

function show_dashboard_books_table()
{
	$('.no-result-message').hide();
	var tab = $('.selected_tab').text();
	if (tab == 'videos')
	{
		var check = $('.current_video_table').text();
		if (check > 0)
		{
			$('.current_video_table').text(1);
			var id = $('.displayed_table').attr('id');
			$('#'+id).attr('class', "");
			$('#'+id).hide();
			$('#'+id).parent().hide();				
		}
		

		$('.selected_tab').text('books');
		check = $('.current_book_table').text();

		if (check > 0)
		{
			$('#book-table-page-'+check).show();
			$('#book-table-page-'+check).parent().show();
			$('#book-table-page-'+check).attr('class', "displayed_table");
			var total = $('.total_books_tables').text();
			if (total <= 1)
			{
				$('#next_page_link').hide();
			}
			else
			{
				$('#next_page_link').show();
			}
		}
		else
		{
			$('.no-result-message').show();
			$('#next_page_link').hide();
		}
	
		$('#previous_page_link').hide();
		$('.total_books_read_time').show();
		$('.total_trips_time').hide();
	}
}

function previousPage()
{
	var tab = $('.selected_tab').text();
	var id = $('.displayed_table').attr('id');
	$('#'+id).attr('class', "");
	$('#'+id).hide();
	$('#'+id).parent().hide();
	var curr_table;

	if (tab == 'books')
	{
		curr_table = $('.current_book_table').text();
		curr_table--;
		$('.current_book_table').text(curr_table);

		$('#book-table-page-'+curr_table).show();
		$('#book-table-page-'+curr_table).parent().show();
		$('#book-table-page-'+curr_table).attr('class', "displayed_table");		
	}
	else
	{
		curr_table = $('.current_video_table').text();
		curr_table--;
		$('.current_video_table').text(curr_table);

		$('#video-table-page-'+curr_table).show();
		$('#video-table-page-'+curr_table).parent().show();
		$('#video-table-page-'+curr_table).attr('class', "displayed_table");		
	}

	if (curr_table <= 1)
	{
		$('#previous_page_link').hide();
	}
	$('#next_page_link').show();

}

function nextPage()
{
	var tab = $('.selected_tab').text();
	var id = $('.displayed_table').attr('id');
	$('#'+id).attr('class', "");
	$('#'+id).hide();
	$('#'+id).parent().hide();
	var curr_table;

	if (tab == 'books')
	{
		curr_table = $('.current_book_table').text();
		curr_table++;
		$('.current_book_table').text(curr_table);

		$('#book-table-page-'+curr_table).show();
		$('#book-table-page-'+curr_table).parent().show();
		$('#book-table-page-'+curr_table).attr('class', "displayed_table");
		var tot = $('.total_books_tables').text();
		if (curr_table == tot)
		{
			$('#next_page_link').hide();
		}
	}
	else
	{
		curr_table = $('.current_video_table').text();
		curr_table++;
		$('.current_video_table').text(curr_table);

		$('#video-table-page-'+curr_table).show();
		$('#video-table-page-'+curr_table).parent().show();
		$('#video-table-page-'+curr_table).attr('class', "displayed_table");
		var tot = $('.total_videos_tables').text();
		if (curr_table == tot)
		{
			$('#next_page_link').hide();
		}
	}
	
	$('#previous_page_link').show();
}
