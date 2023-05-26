var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "Account/GetUser";
if(url.indexOf(cons) != -1) {
    obj.vipKind = 4,
    obj.vipDate= "2024-04-27T10:10:20.79"
}
$done({body: JSON.stringify(obj)});
