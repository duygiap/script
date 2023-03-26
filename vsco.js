var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "camstore/ios";
if(url.indexOf(cons) != -1) {
   for (let ob of obj.products) {
      ob.always_show_in_storefront = true;
      ob.product_status= "free";
      ob.pricing_tier = 0;
  }
}
$done({body: JSON.stringify(obj)});
