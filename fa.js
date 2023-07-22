var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "me/account";
if(url.indexOf(cons) != -1) {
//  obj.moneyAccount.availableBalance=100000000;
//  obj.moneyAccount.totalBalance=100000000;
//  obj.identityVerified= true;
//  obj.applications[0].version= 1;
//  obj.applications[1].version= 1;
//  obj.applications[2].version= 1;
//  obj.applications[3].version= 1;
  obj.membership.level= 2;
//  obj.membership.endDate="2025-01-01T00:00:00";
$done({body: JSON.stringify(obj)});
