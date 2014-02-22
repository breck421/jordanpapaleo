'use strict';

Jay.factory('AjaxService', function AjaxService ($q, $http) {
	return {
		http: function(ajaxParams) {
			console.log(ajaxParams)

			var deferred = $q.defer();

			$http(ajaxParams)
				.success(function (data, status, headers, config) {
					deferred.resolve(data, status);
				})
				.error(function (data, status, headers, config) {
					deferred.reject(status);
				});

			return deferred.promise;
		}
	}
});