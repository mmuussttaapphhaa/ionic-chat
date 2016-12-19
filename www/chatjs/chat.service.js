var chat = angular.module("chat");
chat.factory("rooms", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database where we will store our data
    var ref = firebase.database().ref();
    var roomsData = $firebaseArray(ref)
    return {
        all: function () {
            return roomsData;
        },
        get: function (roomId) {
            for (var i = 0; i <  roomsData.length; i++) {
                if ( roomsData[i].id === parseInt(roomId)) {
                    return roomsData[i];
                }
            }
            return null;
        }
    }

  }
]);

chat.factory("room", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database where we will store our data
    var ref = firebase.database().ref();
    var selectedRoom = firebase.database().ref();
    var roomsData = $firebaseArray(ref)
    return {
        get: function (roomId) {
            for (var i = 0; i <  roomsData.length; i++) {
                console.log(i);
                if ( roomsData[i].id === parseInt(selectedRoom)) {
                    return roomsData[i];
                }
            }
            return null;
        }
    }

  }
]);