app.controller('BookCatController',function($scope){
	$scope.books=data.books;
	$scope.visible=false;
	$scope.toggle=function(){
		this.visible=!this.visible;
	};

	var temp="";
	$scope.searchFun=function(){
		temp=document.getElementById('Text').value;
	$scope.books=_.filter([data.books],function(elem){
		return elem.title==temp;
	});
	}
});