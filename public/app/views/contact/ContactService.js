'use strict';

App.factory('ContactService', function ContactService(AjaxService) {

	return {
		getSources: function() {
			var serviceUrl = "/Contact.json";

			return AjaxService.makeCall(serviceUrl);
		}
	};
});