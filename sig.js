var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "Account/GetUser";
if(url.indexOf(cons) != -1) {
    obj.vipKind : 2
}
$done({body: JSON.stringify(obj)});
