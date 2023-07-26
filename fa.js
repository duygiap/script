var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "me/account";
if(url.indexOf(cons) != -1) {
  obj.membership.level = 3;
  obj.membership.applications[0].version=3;
  obj.membership.applications[1].version=3;
  obj.membership.applications[2].version=3;
  obj.membership.applications[3].version=3;
  obj.identityVerified=true;
  obj.isTeacher=true;
  obj.isExpert=true;
  obj.groups=1;
  obj.moneyAccount.availableBalance=100000000;
  obj.moneyAccount.totalBalance=1000000000;
}
$done({body: JSON.stringify(obj)});
