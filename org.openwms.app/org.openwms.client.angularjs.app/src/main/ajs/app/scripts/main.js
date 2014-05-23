/*
 * openwms.org, the Open Warehouse Management System.
 * Copyright (C) 2014 Heiko Scherrer
 *
 * This file is part of openwms.org.
 *
 * openwms.org is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * openwms.org is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this software. If not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 *
 * Main colors:
 * blue		: 2e7bb1
 * yellow	: e1e76b
 * light-blue   : c9dcea
 * lighter-blue : edf4fa
 */

require.config({
	paths: {
		angular: '../bower_components/angular/angular',
		jquery: '../bower_components/jquery/dist/jquery',
		angular_file_upload_shim: '../bower_components/ng-file-upload/angular-file-upload-shim',
		angular_local_storage: '../bower_components/angular-local-storage/angular-local-storage',
		angular_resource: '../bower_components/angular-resource/angular-resource',
		angular_cookies: '../bower_components/angular-cookies/angular-cookies',
		angular_sanitize: '../bower_components/angular-sanitize/angular-sanitize',
		angular_animate: '../bower_components/angular-animate/angular-animate',
		angular_ui_router: '../bower_components/angular-ui-router/release/angular-ui-router',
		ui_bootstrap: '../bower_components/angular-bootstrap/ui-bootstrap',
		ui_bootstrap_tpls: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
		angular_file_upload: '../bower_components/ng-file-upload/angular-file-upload',
		underscore: '../bower_components/underscore/underscore',
		underscore_string: '../bower_components/underscore.string/lib/underscore.string',
		angular_base64: '../bower_components/angular-base64/angular-base64',
		toaster: '../bower_components/AngularJS-Toaster/toaster',
		radio: '../bower_components/radio/radio',
		domReady: '../bower_components/requirejs-domready/domReady',
		velocity: '../bower_components/velocity/jquery.velocity.min',

		routeResolver: 'routeResolver',
		core_rtModel: 'models/rt.model',
		core_secModel: 'models/sec.model',
		core_envModel : 'models/env.model'
	},
	shim: {/*
		angular: {
			deps: [ 'jquery'],
			exports: 'angular'
		},*/
		'ui_bootstrap': {
			deps: ['angular']
		},
		'ui_bootstrap_tpls': {
			deps: ['angular', 'ui_bootstrap']
		},
		'angular_resource': {
			deps: ['angular']
		},
		'angular_local_storage': {
			deps: ['angular']
		},
		'angular_ui_router': {
			deps: ['angular']
		},
		'toaster': {
			deps: ['angular', 'angular_animate']
		},
		'angular_file_upload': {
			deps: ['angular']
		},
		'angular_base64': {
			deps: ['angular']
		},
		'angular_animate': {
			deps: ['angular']
		},
		'velocity': {
			deps: ['jquery']
		}
	}
});

require([
		'domReady',
		'angular',
		'app',
		/*'routeResolver',*/
		'jquery',
		'ui_bootstrap',
		'ui_bootstrap_tpls',
		'angular_ui_router',
		'angular_local_storage',
		'angular_resource',
		'angular_file_upload',
		'toaster',
		'underscore',
		'velocity',
		'directives/openwmsCoreDirectives',

		/*		'radio',*/
		'angular_base64',
		'services/openwmsCoreServices',
		'services/projectServices'
	],
	function (domReady) {
		domReady(function () {
			angular.bootstrap(document, ['app']);
		});
	}
);