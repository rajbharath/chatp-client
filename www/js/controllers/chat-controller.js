angular.module('chatp.controllers', [])
  .controller('ChatCtrl', function ( $scope ) {

    function initialize () {
      $scope.chat = {};
      $scope.chat.id = 1;
      $scope.chat.messages = [];
      $scope.chat.messages.push({ 'id': 1, 'text': 'hi' });
    }

    $scope.sendMessage = function () {
      $scope.chat.id = $scope.chat.id + 1;
      if ($scope.chat.newMessage) {
        $scope.chat.messages.push({'id': $scope.chat.id, 'text': $scope.chat.newMessage});
        console.log('message sent');
      } else {
        console.log('message empty');
      }

    };

    initialize();
  });
