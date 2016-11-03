$(function () {
  $('#search').keypress(function (e) {
    if (e.which === 13) {
      $('#content').empty()
      $.getJSON(
        'https://en.wikipedia.org/w/api.php?action=opensearch&list=search&search=' + $(this).val() + '&utf8&format=json', 
               function (r) {
                 var results = r[1]
                 var descriptions = r[2]
                 var links = r[3]
                 for(var i = 0; i < results.length; i++) {
                    $('#content').append('<div class="result"><h3>' + results[i] + '</h3><p>' + descriptions[i] +'</p><a href=' + links[i] + ' target="_blank">More</a></div>')
                 }
      })
    }
  })
})