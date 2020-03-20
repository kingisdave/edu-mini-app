var myProject = angular.module('body', ["ngRoute"]);
myProject.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "myproject.html"
  })
  .when("/first", {
    templateUrl : "./angularassignment.html"
  })
  .when("/second", {
    templateUrl : "./firstclass.html"
  })
  .when("/third", {
    templateUrl : "./angular.html"
  });
}); 

myProject.controller('engine', function($scope) {
	$scope.myD = new Date();
	$scope.myArray = ["Software Engineering", "Hardware Engineering", "Graphic Designer"];
	$scope.submitter =function() {

		$scope.myDocument = {name: $scope.name, level: $scope.level, age :$scope.age, mod:$scope.myModel};
	
		retrieved = localStorage.getItem("details");
		if(!retrieved) {
			storeArray = [];
			storeArray.push($scope.myDocument);
			storeArray = JSON.stringify(storeArray);
			localStorage.setItem("details", storeArray);
		}
		else{
			storeArray = JSON.parse(localStorage.getItem("details"));
			storeArray.push($scope.myDocument);
			storeArray = JSON.stringify(storeArray);
			localStorage.setItem("details", storeArray);
		
		}
		//con = JSON.parse(localStorage.getItem('infos'));
		console.log(localStorage.details)
		
		$scope.name = "";
		$scope.level = "";
		$scope.age = "";
		$scope.myModel = "";	
	}

	$scope.checker = function() {
		$scope.text = localStorage.getItem("details");
		console.log($scope.text);
		$scope.myWork = JSON.parse($scope.text);
	}
	$scope.deleter = function(index) {
		// $scope.newWork = $scope.myWork.filter((myname, ind)=> ind !== index);
		console.log(index);

	}

});

// myProject.filter('mydatefil', function(){
//  	return function(x) {
//  	// 	var days, months, myD, dd, mm, yy, myShortD, myMedD;
// 		// days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// 		// months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
// 		$scope.myD = new Date();
// 		var dd = $scope.myD.getDate();
// 		var mm = $scope.myD.getMonth();
// 		var yy = $scope.myD.getFullYear();
// 		var myShortD = dd + "-" + mm + "-" + yy;
// 		// myMedD = days[myD.getDay()] + " " + dd + ", " + months[myD.getMonth()] + "-" + yy;

// 		if (x == "myShort") {
// 			return myShortD;
// 		}
// 		//  else if (x == "myMed") {
// 		// 	return myMedD;
// 		// }

// 	// setTimeout(function(), 1000);
//  	}
// })
myProject.filter('mydatefil', function($filter) {    
    var myOwnDate = $filter('date');
    return function(myDate) {
    	
    	 if ("myMediumD") {
       		return myOwnDate(myDate, 'dd - MMMM - yyyy');
       }
       else if ("myLongD") {
       		return myOwnDate(myDate, 'EEEE, dd - MMMM - yyyy');
       }
    }
});