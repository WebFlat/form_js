;(function(){
    "use strict";
  var user = prompt( 'Введите логин: ' );
  if ( user == 'Админ' ) {
      var pass = prompt( 'Введите пароль: ' );
        if ( pass == 'Черный Властелин' ) {
            alert( 'Добро пожаловать!' );
        } else if (pass == null) {
            alert('Вход отменен');
        } else {
            alert( 'Пароль неверен' );
        }
  } else if ( user == null ) {
      alert( 'Вход отменен' );
  } else {
      alert( 'Я вас не знаю' );
  }
})();