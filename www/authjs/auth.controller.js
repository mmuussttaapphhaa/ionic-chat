var auth = angular.module("auth");
auth.controller('LoginCtrl', function ($scope, Auth, $ionicModal, $state) {

$ionicModal.fromTemplateUrl('template/signup.html', {
    scope: $scope
}).then(function (modal) {
    $scope.modal = modal;
});

$scope.loginWithGoogle = function () {
    Auth.$signInWithPopup("google")
        .then(function(firebaseUser) {
            $scope.userID = firebaseUser.user.uid;
            $state.go('rooms');
        }).catch(function(error) {
            console.log("L'authentification a échoué:", error);
        });
}

$scope.createUser = function (user) {

}

$scope.signIn = function () {
    $state.go('rooms');
}
})

