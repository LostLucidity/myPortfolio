// On document ready.
$().ready(function(){
  console.log('document ready');

  console.log($('title').html());

  $('#skills').find('tr').eq(0).find('th').eq(0).text('Mad Skills');

  var images = $("img")
  console.log("There are " + images.length + " images on this page.");
  console.log($("img").length);

  $('h1 strong').css('fontSize', "66px");
})

function postText(){
  var $formInput = $('#comment').val();
  $('#commentList').append('<li>' + $formInput + '</li>');
  $('#comment').val('');
}
