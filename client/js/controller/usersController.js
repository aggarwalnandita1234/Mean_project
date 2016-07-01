
msg_dashboard_app.controller('usersController', function($scope, UserFactory, $location, $routeParams ){

		  	UserFactory.index(function(data){
		  		$scope.users = data;
		  	});

		  	UserFactory.get_current_user($routeParams.id, function(data){
		  		console.log('CUREENT USER SHOULD BE', data);

		  		$scope.user = data;
		  	});



		  	
		  	$scope.enterUser = function(){
		  		console.log("fist console:", $scope.new_user);
		  		UserFactory.create($scope.new_user, function(current_user){
		  			$scope.id= current_user._id;
		  			$scope.user = current_user
		  			$scope.user.name= current_user.name

		  			console.log("$scope id is:", current_user)
		  			$location.url('/search/'+$scope.id)
		  		});
		  			$scope.new_user="";
		  		}	

		 })