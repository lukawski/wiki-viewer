$(function () {
  if (localStorage.getItem('currentSearch') !== null) $('#search').val(localStorage.getItem('currentSearch'))

  $('#search').keyup(function (e) {
    localStorage.setItem('currentSearch', $(this).val())
    $('#content').empty()
    $.getJSON(
      'https://en.wikipedia.org/w/api.php?action=opensearch&list=search&search=' + $(this).val() + '&utf8&format=json', 
              function (r) {
                var results = r[1]
                var descriptions = r[2]
                var links = r[3]
                for(var i = 0; i < results.length; i++) {
                  $('#content').append('<a href=' + links[i] + ' target="_blank"><div class="result"><h3>' + results[i] + '</h3><p>' + descriptions[i] +'</p></div></a>')
                }
      })
  })
})