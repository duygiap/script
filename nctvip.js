var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "users/info";
if(url.indexOf(cons) != -1) {
  obj.data.VIPExpire= "27/03/2250 00:00:00";
  obj.data.isVIP= true;
  obj.vipExpire= "01.01.2050";
  obj.balance= "1000000 xu"
}
$done({body: JSON.stringify(obj)});
