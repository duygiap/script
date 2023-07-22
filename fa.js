var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "me/account";
if(url.indexOf(cons) != -1) {
  obj.membership.level= 2;
  obj.membership.endDate="2050-01-01T00:00:00";
}
$done({body: JSON.stringify(obj)});
