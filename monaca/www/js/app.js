var myApp = angular.module('myApp', ['onsen.directives']);

myApp.filter('formatDuration', function() {
  return function(milliseconds) {
    if (milliseconds > 6000) {
      milliseconds = 6000;
    }
    var s = Math.floor(milliseconds / 1000);
    var f = Math.floor((milliseconds % 1000) / 100);
    return s +  "." + f;
  }
});

function db() {
  return window.openDatabase("Database", "1.0", "Photo", 200000);
}

myApp.run(function() { 
  db().transaction(
    function(tx) {
      //tx.executeSql('DROP TABLE IF EXISTS Photos');
      //tx.executeSql('CREATE TABLE Photos (id INTEGER PRIMARY KEY, photo_data, date)');
    },
    function(err) {
      alert("SQL 実行中にエラーが発生しました: "+err);
    }
  );
});