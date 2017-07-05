

app.controller('BlogDetailController',function($scope,$location,BlogPostService,$routeParams){

	var id=$routeParams.id
	
	$scope.blogPost=BlogPostService.getBlogPost(id).then(function(response){
		$scope.blogPost=response.data;
	},function(response){
		console.log(response.status)
		
	})
	
	$scope.updateApproval=function(){

	BlogPostService.updateBlogPost($scope.blogPost).then(function(response){
		
	$location.path('/getallblogs')		
	},function(response){
		console.log(response.status);
		$location.path('/getBlogForApproval/'+id)
	})	
	}
	
	
	
	
	
	
})