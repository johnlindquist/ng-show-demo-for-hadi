var app = angular.module("hadi", ["ngResource"]);

app.controller("AppCtrl", function ($scope, $resource) {
	$scope.data = {isReady:false};

	var twitterAPI = $resource('http://search.twitter.com/:action',
		{action: 'search.json', q: 'angularjs', callback: 'JSON_CALLBACK'},
		{get: {method: 'JSONP'}});

	$scope.twitterResult = twitterAPI.get({q: $scope.searchTerm}, function () {
		$scope.data.isReady = true;
	});

});

app.directive("thingy", function () {
	return {
		transclude: true,
		template: "<div ng-transclude></div>"
	}
});