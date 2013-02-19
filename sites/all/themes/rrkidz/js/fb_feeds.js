$(document).ready(function() {

     window.fbAsyncInit = function() {
          FB.init({
               appId      : '219770054723942', // App ID
               status     : true, // check login status
               cookie     : true, // enable cookies to allow the server to access the session
               xfbml      : true  // parse XFBML
          });
          
          FB.api('/35109204795/feed?access_token=317638024977493|bKzIa9tQhNcP93c25NDNxQM28_4', {limit:4} , function(response){
               if (response && response.data && response.data.length)
               {
                    var main_div = document.getElementById('facebook');
                    for (var j=0; j<response.data.length; j++)
                    {
                         var feed = response.data[j];
                         var feed_div = document.createElement('div');
                         feed_div.className = "feed";
                         var time_div = document.createElement('div');
                         time_div.className = "time";

                         var time_message = time_ago(feed.created_time);

                         var msg = feed.message;

                         if ((msg != null)&&(msg.length > 80))
                              msg = msg.substr(0,77) + '...' ;

                         feed_div.innerHTML = msg;
                         time_div.innerHTML = time_message;

                         feed_div.appendChild(time_div);
                         main_div.appendChild(feed_div);

//                         li = document.createElement('li'),
//                         a = document.createElement('a');
//                         a.innerHTML = feed.message;
//                         var time_message = time_ago(feed.created_time);
//                         a.innerHTML = time_message;
//                         a.href = feed.link;
//                         li.appendChild(a);
//                         ul.appendChild(li);
                    }
               }
          });
     };//end window.fbAsyncInit

     // Load the SDK Asynchronously
     (function(d){

          var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement('script');js.id = id;js.async = true;
          js.src = "//connect.facebook.net/en_US/all.js";
          ref.parentNode.insertBefore(js, ref);
     }(document));
});


function time_ago(time)
{
//     var periods = new Array("second", "minute", "hour", "day", "week", "month", "year", "decade");
//     var lengths = new Array("60","60","24","7","4.35","12","10");

     var now = new Date();
     var d    = time.split(/[-:T+]/);d[1] -= 1;d.pop();
     var date = new Date(Date.UTC.apply(Date, d));

     var message = '';

     var curr = now.getYear();
     var prev = date.getYear();
     
     if (prev < curr){
          var diff = curr - prev;
          message = diff + ' year';
          if (diff > 1){
               message = message + 's';
          }
          message = message + ' ago';

          return message;
     }

     curr = now.getMonth();
     prev = date.getMonth();

     if (prev < curr){
          diff = curr - prev;
          message = diff + ' month';
          if (diff > 1){
               message = message + 's';
          }
          message = message + ' ago';

          return message;
     }

     curr = now.getDate();
     prev = date.getDate();

     curr = Math.floor(curr / 7);
     prev = Math.floor(prev / 7);

     if (prev < curr){
          diff = curr - prev;
          message = diff + ' week';
          if (diff > 1){
               message = message + 's';
          }
          message = message + ' ago';

          return message;
     }

     curr = now.getDate();
     prev = date.getDate();
     
     if (prev < curr){
          diff = curr - prev;
          message = diff + ' day';
          if (diff > 1){
               message = message + 's';
          }
          message = message + ' ago';

          return message;
     }

     curr = now.getHours();
     prev = date.getHours();

     if (prev < curr){
          diff = curr - prev;
          message = diff + ' hour';
          if (diff > 1){
               message = message + 's';
          }
          message = message + ' ago';

          return message;
     }

     curr = now.getMinutes();
     prev = date.getMinutes();

     if (prev < curr){
          diff = curr - prev;
          message = diff + ' minute';
          if (diff > 1){
               message = message + 's';
          }
          message = message + ' ago';

          return message;
     }

     curr = now.getSeconds();
     prev = date.getSeconds();

     if (prev < curr){
          diff = curr - prev;
          message = diff + ' second';
          if (diff > 1){
               message = message + 's';
          }
          message = message + ' ago';

          return message;
     }

     
return null;

 /*   // Declare an array of short month names
    var mon  = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov", "Dec"];
    // Determine between AM and PM
    ampm = date.getHours() > 12 ? "PM" : "AM",

    // Prepare for working out the date suffix
        nth  = date.getDate();

    // Date is nth for 11th, 12th and 13th
    if (nth >= 11 && nth <= 13)
        nth = "th";
    // Otherwise it's st, nd, rd, th if the date ends in 1, 2, 3 or anything else
    else
        nth  = ["", "st", "nd", "rd"][(nth+"").slice(-1)] || "th";

    // Return the string formatted date
    return (date.getHours() % 12) + ":" + (date.getMinutes()) + " " + ampm +
           " " + mon[date.getMonth()] + " " + date.getDate() + nth;
*/

}
