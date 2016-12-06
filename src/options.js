function saveOptions() {
  alert('LOL')
  var lang = document.getElementById('lang').value;
  chrome.storage.sync.set({'lang': lang}, function () {
   var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  })
}

function restoreOptions() {
  chrome.storage.sync.get({'lang': 'en'}, function (items) {
    console.log(items.lang)
    document.getElementById('lang').value = items.lang
  }) 
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click',
    saveOptions);