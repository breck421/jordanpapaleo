'use strict';

Jay.factory('EmailService', function EmailService (AjaxService) {

	return {
		send: function(emailData) {

			var ajaxParams = {
				method: 'POST',
				url: 'backend/email.php',
				params: {
					name: emailData.name.$modelValue,
					email: emailData.email.$modelValue,
					message: emailData.message.$modelValue
				},
				cache: false
			}

			return AjaxService.http(ajaxParams);
		}
	}
});