Ext.define('MyApp.store.StockPrice', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.StockPrice',
    alias: 'store.stock-price',



    // proxy: Ext.create('Ext.data.Proxy', {
    //     type: 'ajax',

    // }),
    proxy: {
        type: 'rest',
        url: 'https://api.coinlayer.com/timeframe?access_key=94ba88431b0310b32ddc1af867f90a57&start_date=2020-01-01&end_date=2020-05-31&target=USD&symbols=BTC&expand=1',
        reader: {
            type: 'json',
            rootProperty: 'rates',
            transform: {
                fn: function(data){
                    var times = Object.keys(data.rates);
                    var values = Object.values(data.rates);

                    var tempV = 0;
                    var newData = values.map( (v, index) => {
                        return {
                            
                            time: times[index],
                            // ...v.BTC,

                            high: v.BTC.high,
                            low: v.BTC.low,
                            open: (v.BTC.high - (v.BTC.high - v.BTC.rate)),
                            close: (v.BTC.low + (v.BTC.rate - v.BTC.low))
                        }
                        tempV = v.BTC.sup;
                    })



                    return newData;
                },
                scope: this
            }
        },
        cors: true,
        method: 'GET',
        useDefaultXhrHeader : false,
    },
    autoLoad: true
});