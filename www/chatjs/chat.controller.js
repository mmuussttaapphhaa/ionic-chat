var chat = angular.module("chat");

chat.controller('ChatsCtrl', function ($scope, rooms, $state) {
    //console.log("Chat Controller initialized");
    $scope.room = rooms.get($state.params.roomId);
    console.log($scope.room);
    $scope.sendMessage = function (msg) {
        console.log(msg);
        $scope.room.push({
            "messages": {
                "text": msg,
                "createdAt": firebase.database.ServerValue.TIMESTAMP,
                "from" : "moi"
            }
        });
    }

    $scope.remove = function (chat) {
        Chats.remove(chat);
    }
});

chat.controller("RoomsCtrl", function($scope, rooms, $state,$ionicModal) {
    $scope.rooms = rooms.all();
    $ionicModal.fromTemplateUrl('template/addRoom.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.addRoom = function(room) {
        var id = Math.round(Math.random() * 100);
        $scope.rooms.$add({
            "id": id,
            "name": room.name,
            "timestamp": firebase.database.ServerValue.TIMESTAMP,
            "messages": {}
        });
        $scope.modal.hide();
        room.name = "";
    };

    $scope.openChatRoom = function (roomId) {
        $state.go('chat', {
            roomId : roomId
        });
    }


  });