'use strict';
//http://plnkr.co/edit/octwC4BCuXLmRhHgLD8T?p=preview
reachApp.directive('vmSelect2', function ($timeout) {
    return {
        restict: 'E',
        //replace : true, //-> this will not work in this case.
        scope: {
            items: '=', //'=' -> will pass the object as-is as the name of the arrtibute matches
            textField: '@', // -> '@' will pass the value of the attribute whose name matches angular camelCase convention i.e. -
            valueField: '@',
            ngModel: '=',
            controlId: '@',
            placeHolder: '@'
        },
        templateUrl: 'app/views/directiveTemplates/select2/select2.html',
        link: function (scope, element, attrs, controller) {           
            //http://stackoverflow.com/questions/14483348/query-function-not-defined-for-select2-undefined-error
            //$(".vm-select2").select2({ placeholder: attrs.placeHolder});
            $timeout(function(){  $("#" + attrs.controlId).select2({ placeholder: attrs.placeHolder,allowClear : true })},0);
        }
    };
    //select2Change = function () { alert("Item changed");}
});