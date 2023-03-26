var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "users/info";
if(url.indexOf(cons) != -1)
{
obj.data.VIPExpire= "27/03/2250 00:00:00";
obj.data.isVIP= true;
}
$done({body: JSON.stringify(obj)});
