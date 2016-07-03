window.onload = function() {
  //Получает URL текущей вкладки
  chrome.tabs.query({
  active: true,
  lastFocusedWindow: true
}, function(tabs) {
  // and use that tab to fill in out title and url
  var tab = tabs[0];
  console.log(tab.url);
  //alert(tab.url);
  var xhr = new XMLHttpRequest();

  var note = {
  link: "Tom1"
  };

  var body = "save=" + tab.url;


  xhr.open("GET", "http://citrus.ru.com/api.php?" +body , true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
       if(xhr.status == 200) {
         document.getElementById('result').innerHTML = xhr.responseText;

           }
    }

  }
  xhr.send();
});
}
