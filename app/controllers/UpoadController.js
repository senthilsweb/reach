'use strict';
reachApp.controller('datatableController', function (DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder
        .fromSource('data/patent-encounter-offline.js')
        .withDisplayLength(5)
        .withOption('responsive', true)
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

    vm.dtColumns = [
        DTColumnBuilder.newColumn('Id').withTitle('ID').notVisible(),
        DTColumnBuilder.newColumn(null).withTitle('').renderWith(actionsHtml).notSortable(),        
        DTColumnBuilder.newColumn('Id').withTitle('ID'),
        DTColumnBuilder.newColumn('Name').withTitle('Patient Name').withClass('vm-text-th-center vm-text-td-center'),
        DTColumnBuilder.newColumn('Illness').withTitle('Illness').withClass('vm-text-center'),
        DTColumnBuilder.newColumn('BloodPressure').withTitle('BP').withClass('vm-text-center'),
        DTColumnBuilder.newColumn('Temperature').withTitle('Temp.').withClass('vm-text-center'),       
        DTColumnBuilder.newColumn('ParamedicName').withTitle('Paramedic.').withClass('vm-text-th-center vm-text-td-center'),
        DTColumnBuilder.newColumn('DateCaptured').withTitle('En. Date.').withClass('vm-text-center'),
        DTColumnBuilder.newColumn(null).withTitle('').renderWith(labelHtml).notSortable()
    ];

    function actionsHtml(data, type, full, meta) {
        //console.log(data)
        var actions = '<a href="javascript:void(;)"><i class="fa fa-level-down text-primary"></i></a>';
        actions += '&nbsp;&nbsp;<a href="javascript:void(;)"><i class="fa fa-edit text-primary"></i></a>';
        actions += '&nbsp;&nbsp;<a href="javascript:void(;)"><i class="fa fa-trash-o text-danger"></i></a>';
        return actions;
    }

    function labelHtml(data, type, full, meta) {
        //console.log(data)
        var actions = '<span class="label label-success">Good to go.</span>';
        return actions;
    }

 

});