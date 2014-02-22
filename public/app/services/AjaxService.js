'use strict';

App.factory('AjaxService', function AjaxService($http, $q) {

	return {
		makeCall: function(serviceUrl) {
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: serviceUrl
			}).
			success(function(data, status) {
				deferred.resolve(data);
			}).
			error(function(data, status) {
				deferred.reject('');
			});

			return deferred.promise;
		}
	};
});