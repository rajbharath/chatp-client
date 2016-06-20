angular.module('chatp.factories',['btford.socket-io'])
.factory('socket', function ($rootScope, socketFactory) {

  var socket = socketFactory({
    ioSocket: io.connect('http://localhost:4001')
  });

  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        if(!$rootScope.$$phase) {
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        }
      });
    },

    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        if(!$rootScope.$$phase) {
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        }
      })
    }
  }
});
