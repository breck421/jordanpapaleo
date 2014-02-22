'use strict';

App.factory('ProjectService', function ProjectService(AjaxService) {
	return {
		get: function() {
			var serviceUrl = "/portfolio.json";
			return AjaxService.makeCall(serviceUrl);
		}
	};
});