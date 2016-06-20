angular.module('chatp.controllers', [])
  .controller('ChatCtrl', function ( $scope, socket ) {

    function initialize () {
      $scope.chat = {};
      $scope.chat.id = 4;
      $scope.chat.messages = [];
      $scope.chat.messages.push({ 'id': 1, 'text': 'hi' });
      $scope.chat.messages.push({ 'id': 2, 'text': 'hi' });
      $scope.chat.messages.push({ 'id': 3, 'text': 'hi' });
      $scope.chat.messages.push({ 'id': 4, 'text': 'hi' });
    }

    socket.on('connect', function (data) {
      console.log('connected');
    });

    socket.on('hello', function (data) {
      console.log(data);
    });

    $scope.sendMessage = function () {
      $scope.chat.id = $scope.chat.id + 1;
      if ($scope.chat.newMessage) {
        var message = {'id': $scope.chat.id, 'text': $scope.chat.newMessage};
        $scope.chat.messages.push(message);
        socket.emit('newMessage', message);
      } else {
        console.log('message empty');
      }


    };

    initialize();
  });
