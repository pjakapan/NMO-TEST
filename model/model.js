var model = {
    namespace: 'jsreport',
    entityTypes: {
        'customerType': {
            '_id': { 'type': 'Edm.String', key: true },
            'fullname': { 'type': 'Edm.String' },
            'email': { 'type': "Edm.String" },
            'iPAddress': { 'type': "Edm.String" }
        },
        'deviceType': {
            '_id': { 'type': 'Edm.String', key: true },
            'partno': { 'type': 'Edm.String' },
            'name': { 'type': "Edm.String" },
            "qty": { "type": "Edm.Int32" },
            "price": { "type": "Edm.Double" },
            "date": { "type": "Edm.DateTimeOffset" },
            "warrant": { "type": "Edm.DateTimeOffset" },
            "store": { "type": "Collection(jsreport.storeType)" }
        },
        'recordType': {
            '_id': { 'type': 'Edm.String', key: true },
            'customer_id': { 'type': 'Edm.String' },
            'device_id': { 'type': "Edm.String" },
            "date": { "type": "Edm.DateTimeOffset" }
        },
    },
    complexTypes: {
        "storeType": {
            "room": { "type": "Edm.String" },
            "locker": { "type": "Edm.String" },
            "shelf": { "type": "Edm.String" },
            "box": { "type": "Edm.String" }
        }
    },
    entitySets: {
        'customer': {
            entityType: 'jsreport.customerType'
        },
        'device': {
            entityType: 'jsreport.deviceType'
        },
        'record': {
            entityType: 'jsreport.recordType'
        }
    }
}
module.exports = {
    models: model
};