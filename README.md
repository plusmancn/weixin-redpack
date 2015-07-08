# weixin-redpack
微信发企业红包 for node.js

## Installation
```
npm install weixin-redpack
```

## Requirements
Mac Os X 系统请先安装ca根证书，否则会报签名错误
> CA证书（rootca.pem）
微信支付api服务器上也部署了证明微信支付身份的服务器证书，您在使用api进行调用时也需要验证所调用服务器及域名的真实性
该文件为签署微信支付证书的权威机构的根证书，可以用来验证微信支付服务器证书的真实性
某些环境和工具已经内置了若干权威机构的根证书，无需引用该证书也可以正常进行验证，这里提供给您在未内置所必须根证书的环境中载入使用

## Usage
先创建一个红包实例 Redpack，再调用 send() 发送红包，减少每次发红包的参数。
```js
var Redpack = require('weixin-redpack').Redpack;

var redpack = Redpack({
	mch_id: 'xxx',
	partner_key: 'xxxxxx',
	pfx: fs.readFileSync('./wxpay_cert.p12'),
	wxappid: 'wxxxxxxx'
});

redpack.send({
	mch_billno: '123426900220150325'+Math.random().toString().substr(2,10),
	send_name: '红包来自',
	wishing: '收好不谢！',
	re_openid: '红包接收人openid',
	total_amount: 100,
	total_num: 1,
	client_ip: '14.23.102.146',
	nick_name: 'XXXX',
	act_name: '发测试红包',
	remark: 'remark'
}, function(err, result){
	console.log(result);
})
```

直接调用 sendRedpack() 输入所有参数。
```js
var wxredpack = require('weixin-redpack');

wxredpack.sendRedpack({
  mch_id: 'xxx',
  partner_key: 'xxxxxxx',
  pfx: fs.readFileSync('./application_cert.p12'),
  wxappid: 'wxxxxxx',
  mch_billno: '1234567890201503251234567890',
  nick_name: 'nickname',
  send_name: 'sendname',
  re_openid: '红包接收人openid'
  total_amount: 100,
  max_value: 100,
  min_value: 100,
  total_num: 1,
  wishing: 'thanks',
  client_ip: '192.168.1.10',
  act_name: '发红包啦',
  remark: '收好不谢！'
}, function(err, result){
  console.log(result);
});
```

