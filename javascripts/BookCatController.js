app.controller('BookCatController',function($scope){
	$scope.books=data.books;
	// $scope.selectedTip="出版社";
	$scope.searchbookinlist=function(selectedTip,selectedGenre){
		var bookbuf=_.filter(data.books, function(onebook){ 
        if(selectedTip.name == "出版社"){
          return  onebook.publisher == selectedGenre;
        }
        if(selectedTip.name  == "标签"){
          var tagif=_.some(onebook.tags, function(tagg){ return tagg.name == selectedGenre; });
          if(tagif)
            return onebook;}
		});
		 if(!_.isEmpty(bookbuf))
        $scope.books = bookbuf;
	}

	$scope.searchbook = function(searchContent){
   	  var bookbuf=_.filter(data.books, function(onebook){ 
        if(searchContent != null){
          if(onebook.title.indexOf(searchContent) > 0)
            return onebook;
        }
   	  });
   	  if(!_.isEmpty(bookbuf))
   	  	$scope.books = bookbuf; 
   }

	$scope.visible=false;
	$scope.toggle=function(){
		this.visible=!this.visible;
	}
});
