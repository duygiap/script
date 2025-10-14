var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "user/info";
if(url.indexOf(cons) != -1) {
    obj.result.is_vip = true;
    obj.result.coin_balance = 1000000;
    obj.result.vip_expires_at = 100000;
}
$done({body: JSON.stringify(obj)});
