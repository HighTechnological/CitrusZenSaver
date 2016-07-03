window.onload = function() {
  // Когда расширение открыто, получает имя пользователя
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://citrus.ru.com/api.php?user=name" , true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
       if(xhr.status == 200) {
         document.getElementById('result').innerHTML = xhr.responseText;
           }
    }
  }
  xhr.send();
  // Дальше получает URL текущей вкладки
  chrome.tabs.query({
  active: true,
  lastFocusedWindow: true
}, function(tabs) {
  var tab = tabs[0];
  //console.log(tab.url); // Сообщение в консоль
  var xhr = new XMLHttpRequest();
  // URL сохраняется в переменную с запросом
  var body = "save=" + tab.url;
  // При нажатии кнопки отправить запрос
  document.getElementById('saveLink').onclick = function() {
  // Используя CitrusZen API
  xhr.open("GET", "http://citrus.ru.com/api.php?" +body , true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
       if(xhr.status == 200) { //Если все в порядке, выводит ответ
         document.getElementById('result').innerHTML = xhr.responseText;
           }
    }
  }
  xhr.send();
}
});
}
