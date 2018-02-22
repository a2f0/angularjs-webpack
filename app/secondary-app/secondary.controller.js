import myModule from '../app.module.js';

export default myModule.controller('SecondaryController',['$scope',function($scope){
	console.log("Secondary Controller created!");
	var self = this;
	self.myModel = "Hello world from the other controller!";
}]);