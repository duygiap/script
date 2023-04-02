var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "accounts/me.json";
if(url.indexOf(cons) != -1) {
  obj.subscription.subscription_plan_name=
    'Premium';
  obj.subscription.config.hide_ads=true;
  obj.active_events.nft_rewards_program=true;
  obj.subscription.apple_price_id=1366;
}
$done({body: JSON.stringify(obj)});
