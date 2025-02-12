// QuanX script to modify API response
let body = $response.body; 
let obj = JSON.parse(body);

// Modify subscription details
obj.subscription.subscription_plan_name = "Premium";
// obj.subscription.apple_price_id = "Premium";
// obj.subscription.start_at = "2025-01-01T00:00:00Z";
// obj.subscription.end_at = "2099-12-31T23:59:59Z";
obj.subscription.config.candy_multiplier=2
obj.subscription.config.hide_ads = true; // Disable ads
obj.active_events.nft_rewards_program = true;
obj.subscribed_to_newsletter = false;
obj.show_onboarding_portfolio = true;


// Convert modified object back to JSON
body = JSON.stringify(obj);

// Return modified response
$done({ body });
