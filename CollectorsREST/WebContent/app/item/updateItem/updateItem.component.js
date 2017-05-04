angular.module('item')
	.component('updateItem', {
		templateUrl: 'app/item/updateItem/updateItem.component.html',
		controller: function(itemService, categoryService, $location, $routeParams) {
			var vm = this;
			
			vm.categories = [];
			vm.conditions = categoryService.conditions;
			vm.item = {};
			vm.editItem = null;
			
			var setEditItem = function(){
				vm.editItem = angular.copy(vm.item);
			}
			
			var getCategories = function() {
				categoryService.index().then(function(res){
						vm.categories = res.data;
				});
			};
			
			getCategories();
			
//			if (!vm.item && parseInt($routeParams.id)) {
				itemService.show($routeParams.id)
				.then(function(response){
					vm.item = response.data;
					setEditItem();
				})
				.catch(function(error){
				    $location.path('/notfound');
				})
//			};
			
			vm.update = function(item) {

				itemService.update(item).then(function(res) {
					$location.path('/itemList');
				})
			};
		},
		controllerAs: 'vm',
});