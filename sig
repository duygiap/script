var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "Account/GetUser";
if(url.indexOf(cons) != -1) {
    obj.vipKind : 4,
    obj.uTime : "2023-04-25T22:14:57.157",
}
$done({body: JSON.stringify(obj)});
