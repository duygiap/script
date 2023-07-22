var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "me/account";
if(url.indexOf(cons) != -1) {
  obj.membership.level= 1;
  obj.membership.endDate="2024-01-01T00:00:00";
}
$done({body: JSON.stringify(obj)});
