console.log('New Controller');

app.controller('newController', ['$scope', '$location', 'friendsFactory', function($scope, $location, FF) {
    $scope.createFriend = function() {
        FF.createFriend($scope.newFriend)
        .then( (response) => {
            console.log("Response:", response.data);
            $scope.newFriend = {};
            $location.url('/');
        })
        .catch( (error) => console.log('Error:', error))
    }
}])
