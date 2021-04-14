Ext.define('MyApp.model.StockPrice', {
    extend: 'MyApp.model.Base',

    fields: [
        {name: 'time',  type: 'date'},
        {name: 'close',  type: 'number'},
        {name: 'high',  type: 'number'},
        {name: 'low',   type: 'number'},
        {name: 'open', type: 'number'}
    ]

});