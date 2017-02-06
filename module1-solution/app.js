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

                //clear all white speace in current item
                lunchItems[i] = lunchItems[i].replace(/\s/g, '');

                //if we have a blank item, remove it from the array
                if(lunchItems[i] == ""){

                    lunchItems.splice(i, 1);
                    //sets the iterator back one since we remove element
                    i--;
                }
            }

            //case with no items
            if(lunchItems[0] === "" || lunchItems.length === 0){
                $scope.message = "Please enter data first.";
                $scope.messageColor = "black";
                $scope.border = "1px solid red";
            }
            //case with too many items
            else if(lunchItems.length > 3){
                $scope.message = "Too much!";
                $scope.messageColor = "red";
                $scope.border = "1px solid green";
            }
            //case with 1 to 3 items
            else{
                $scope.message = "Enjoy!";
                $scope.messageColor = "green";
                $scope.border = "1px solid green";
            }
        };
    };

})();