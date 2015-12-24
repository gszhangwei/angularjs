app.controller("SelectArea", function($scope){
 	  var selectpubbuf;
 		var selecttagbuf=[];
 		selectpubbuf=_.pluck(data.books, 'publisher');
 		_.map(data.books, function(onebook){
 			selecttagbuf.push(_.pluck(onebook.tags, 'name'));
 			return _.pluck(onebook.tags, 'name');
 		});
 		var tagbuf=[];
 		for (var i = 0; i < selecttagbuf.length; i++){
 			var arr=selecttagbuf[i];
 			for(var j=0;j<arr.length;j++){
 				tagbuf.push(arr[j]);
 			}
 		}
 		var sellectpub=_.uniq(selectpubbuf);
 		var selecttag=_.uniq(tagbuf);
    $scope.selecttip = [
                    {
                        id: 0,
                        name: '标签',
                        interest: selecttag
                    },
                    {
                        id: 1,
                        name: '出版社',
                        interest: sellectpub
                    }
                ];
});

function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
};