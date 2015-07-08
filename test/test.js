'use strict';
var fs = require('fs');
var Redpack = require('../').Redpack;

var redpack = Redpack({
    mch_id: '1251346401',
    partner_key: 'C19F5A89071B442A8938A6C60343C7D8',
    pfx: fs.readFileSync('../config/apiclient_cert.p12'),
    wxappid: 'wx5ecfab01a48b09a6'
});


redpack.send({
    mch_billno: '1436357169351' + Math.random().toString().substr(2,10),
    send_name: '红包来自',
    wishing: '收好不谢！',
    re_openid: 'oTKASwizfV4u3pPk-6jnGhs-Fot4',
    total_amount: 100 ,
    total_num: 1,
    client_ip: '127.0.0.1',
    nick_name: '珀冰科技-大玩家',
    act_name: '发测试红包',
    remark: 'send from hw.tech.plusman'
}, function(err, result){
    console.log(err,result);
});