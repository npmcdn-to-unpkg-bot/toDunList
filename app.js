(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp', [  'ui.router', 'toastr' /* listed imported modules here */])
        .config(myAppConfig);

    function myAppConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
    }

})();

        // .config(function($urlRouterProvider ,$stateProvider){
        //     $urlRouterProvider.otherwise('/main');
        //
        //         $stateProvider
        //             .state('about', {
        //             url: '/ab',
        //             template: '<about></about>'
        //         });
        // });

    // function myAppConfig($urlRouterProvider ,$stateProvider) {
    //     $urlRouterProvider.otherwise('/main');
    //
    //     $stateProvider.state('about', {
    //         url: '/about',
    //         templateUrl: 'about/about.component.html'
    //     });
    // }

