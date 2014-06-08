
function Page1Controller($scope){
    $scope.imageData = "";
    $scope.recTime = 0;
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
    $scope.recordVoice = function() {
        var src = "myrecording.amr";
        function onSuccess() {
            console.log("recordAudio():Audio Success");
        }
        function onError(error) {
            alert('コード: '        + error.code    + '\n' +
                  'メッセージ: '    + error.message + '\n');
        }


        var mediaRec = new Media(src, onSuccess, onError);

        // オーディオの録音
        mediaRec.startRecord();

        // 6秒後に録音を停止
        var start = new Date;
        var recInterval = setInterval(function() {
            var now = new Date;
            var duration = now.getTime() - start.getTime();
            
            $scope.$apply(function(){
                $scope.recTime = duration;
            });
            
            if (duration / 1000  >= 6) {
                clearInterval(recInterval);
                mediaRec.stopRecord();
            }
        }, 100);
    };

    
    $scope.playVoice = function() {
        var src = "myrecording.amr";
          function onSuccess() {
            console.log("recordAudio():Audio Success");
        }
        function onError(error) {
            alert('コード: '        + error.code    + '\n' +
                  'メッセージ: '    + error.message + '\n');
        }

        var media = new Media(src, onSuccess, onError);
        media.play();
    }
}