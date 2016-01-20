angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

angular.module('controller',[])


.controller('piwoMarkaCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {

	
	// $http.get('./js/popData.php')
		// .success(function(data) {
			// $scope.piwoMarka = data;
		// })
		// .error(function(err) {
			// $log.error(err);
		// })


	$scope.frmToggle = function() {
		$('#blogForm').slideToggle();
	}

		 $http.get('./js/popData.php')
		 .success(function(data) {
			 $scope.piwoMarka = data;
		 })
		 .error(function(err) {
			 $log.error(err);
		 })
	
	// $http.get('./js/popData.php')
		// .success(function(data) {
			// $scope.blogs = data;
		// })
		// .error(function(err) {
			// $log.error(err);
		// })

	$scope.pushData = function($params) {
		$http.post('./js/pushData.php',{'title':$params.title, 'description':$params.description})
			.success(function(data) {
				$scope.blogs = data;
			})
			.error(function(err) {
				$log.error(err);
			})
	}

	$scope.removeData = function($params) {
		var cnfrm = confirm("Are you sure to delete?");
		if(cnfrm) {
			$http.post('./js/removeData.php', {'id':$params})
			.success(function(data) {
				$scope.blogs = data;
			})
			.error(function(err) {
				$log.error(err);
			})
		} else {
			// 
		}
		
	}

}])	