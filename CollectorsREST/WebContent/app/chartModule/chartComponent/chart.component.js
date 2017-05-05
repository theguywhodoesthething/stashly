angular
		.module("appModule")
		.component(
				'chart',
				{
					templateUrl : 'app/chartModule/chartComponent/chart.component.html',
					controller : function($scope, itemService) {
						var prices = [];
						var getPrices = function() {
							itemService.index().then(function(res) {
								prices = res.data;
								console.log(prices);
							})
						}
						getPrices();
						$scope.labels = [ "January", "February", "March",
								"April", "May", "June", "July" ];
						$scope.series = [ 'Series A', 'Series B' ];
						$scope.data = [ [ 65, 59, 80, 81, 56, 55, 40 ],
								[ 28, 48, 40, 19, 86, 27, 90 ] ];
						$scope.onClick = function(points, evt) {
							console.log(points, evt);
						};
						$scope.datasetOverride = [ {
							yAxisID : 'y-axis-1'
						}, {
							yAxisID : 'y-axis-2'
						} ];
						$scope.options = {
							scales : {
								yAxes : [ {
									id : 'y-axis-1',
									type : 'linear',
									display : true,
									position : 'left'
								}, {
									id : 'y-axis-2',
									type : 'linear',
									display : true,
									position : 'right'
								} ]
							}
						}
					}
				});
