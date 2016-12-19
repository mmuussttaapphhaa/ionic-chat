var chat = angular.module("chat");

chat.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state("rooms", {
          url: "/rooms",
          templateUrl : "template/rooms.html",
          controller: 'RoomsCtrl'
      })
      .state("chat", {
          url: "/chat",
          templateUrl : "template/chat.html",
          params: {
                roomId: null
          },
          controller: 'ChatsCtrl'
      });
});
