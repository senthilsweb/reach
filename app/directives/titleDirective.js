'use strict';
//http://plnkr.co/edit/octwC4BCuXLmRhHgLD8T?p=preview
reachApp.directive('vmTitle', function () {
    console.log("docs title di")
    return {
        restict: 'E',
        //replace : true, //-> this will not work in this case.
        scope: {            
            titleValue: '@', // -> '@' will pass the value of the attribute whose name matches angular camelCase convention i.e. -
            styleValue: '@'
        },
        templateUrl: 'app/views/directiveTemplates/Title/Title.html',
        link: function (scope, element, attrs, controller) {           
            console.log(attrs.styleValue);
            console.log(attrs.titleValue);
        }
    };
});