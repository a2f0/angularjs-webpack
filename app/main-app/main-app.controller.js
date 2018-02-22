import myModule from '../app.module.js';

export default myModule.controller('MainController',['$scope',function($scope){
	console.log("Controller created!");
	var self = this;
	self.myModel = "Hello world from the main controller!";
}]);