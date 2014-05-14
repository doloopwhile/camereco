// This is a JavaScript file
function Page1Controller($scope){
    $scope.imageData = "";
     $scope.takePhoto = function(){
        navigator.camera.getPicture(
            function(imageData) {
                $scope.$apply(function(){
                    $scope.imageData = "data:image/jpeg;base64," + imageData;
                });
            }, function (message) {
                alert('エラーが発生しました: ' + message);
            }, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            }
        );
    }
}