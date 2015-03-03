'use strict';
reachApp.controller('datatableController', function (DTOptionsBuilder, DTColumnBuilder) {

    var vm = this;
    vm.dtOptions = DTOptionsBuilder
        .fromSource('data/data.js')
        .withDisplayLength(5)
        //.withDOM('<lf<t>ip>')
        // Add Bootstrap compatibility
        .withBootstrap()
       .withBootstrapOptions({
           TableTools: {
               classes: {
                   container: 'btn-group',
                   buttons: {
                       normal: 'btn btn-danger'
                   }
               }
           },
           pagination: {
               classes: {
                   ul: 'pagination pagination-sm'
               }
           }
       })
    console.log(vm.dtOptions)
    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name')
    ];
});