var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "me/account";
if(url.indexOf(cons) != -1) {
  obj.membership.level = 3;
  obj.membership.applications[0].version=3;
  obj.membership.applications[1].version=3;
  obj.membership.applications[2].version=3;
  obj.membership.applications[3].version=3;
  
}
$done({body: JSON.stringify(obj)});
