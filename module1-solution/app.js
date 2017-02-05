(function(){

    angular.module('LunchCheck', [])
    .controller('LunchCheckerController', LunchCheckerController);
    
    LunchCheckerController.$inject = [$scope];
    function LunchCheckerController($scope){
        $scope.lunchChecked = "test";
    }

    function LunchCheck(){
        
    }

})();