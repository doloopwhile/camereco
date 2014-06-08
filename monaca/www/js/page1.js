function savePhoto(photoData, date) {
  db().transaction(
    function(tx) {
      tx.executeSql(
        'INSERT INTO Photos (photo_data, date) VALUES (?, ?)',
        [photoData, date]
      );
    },
    function(err) {
      alert("SQL 実行中にエラーが発生しました: "+err);
    }
  );  
}

function Page1Controller($scope){
  $scope.imageData = "";
  $scope.recTime = 0;
  
  $scope.takePhoto = function(){
    navigator.camera.getPicture(
      function(imageData) {
        $scope.$apply(function(){
          savePhoto(imageData, new Date);
        });
      }, function (message) {
        alert('エラーが発生しました: ' + message);
      }, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
      }
    );
  }
  
  db().transaction(
    function(tx) {
      tx.executeSql('SELECT * FROM Photos', [], function(tx, ret) {
        $scope.$apply(function(){
          $scope.photos = rowListAsArray(ret.rows);
        });
      });
    },
    function(err) {
      alert("SQL 実行中にエラーが発生しました: "+err);
    }
  );
}

function rowListAsArray(rows) {
  var arr = [];
  for (var i =0; i < rows.length; ++i ){
    arr.push(rows.item(i));
  }
  return arr;
}

function Page2Controller($scope){
}