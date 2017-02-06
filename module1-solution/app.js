(function(){

    angular.module('LunchCheck', [])
    .controller('LunchCheckerController', LunchCheckerController);
    
    LunchCheckerController.$inject = ['$scope'];
    function LunchCheckerController($scope){
        $scope.message = "";
        $scope.messageColor = "";
        $scope.border = "";
        $scope.enteredText = "";
        $scope.checkSize = function(){
            
            var lunchItems = $scope.enteredText.split(",");

            //this removes cases where a space count as an item, ie case like sandwhich, chips, , pepsi 
            //only counts as three instead of four
            for(var i = 0; i < lunchItems.length; i++){
                lunchItems[i] = lunchItems[i].replace(/\s/g, '');
                if(lunchItems[i] == ""){
                    lunchItems.splice(i, 1);
                }
            }

            console.log(lunchItems.length);
            if(lunchItems[0] === "" || lunchItems.length === 0){
                $scope.message = "Please enter data first.";
                $scope.messageColor = "black";
                $scope.border = "1px solid red";
            }
            else if(lunchItems.length > 3){
                $scope.message = "Too much!";
                $scope.messageColor = "red";
                $scope.border = "1px solid green";
            }
            else{
                $scope.message = "Enjoy!";
                $scope.messageColor = "green";
                $scope.border = "1px solid green";
            }
        };
    };

})();