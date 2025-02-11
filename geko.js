// QuanX script to modify API response
let body = $response.body; 
let obj = JSON.parse(body);

// Modify subscription details
obj.subscription.subscription_plan_name = "Premium";
obj.subscription.apple_price_id = "premium_plan";
obj.subscription.start_at = "2025-01-01T00:00:00Z";
obj.subscription.end_at = "2099-12-31T23:59:59Z";
obj.subscription.config.hide_ads = true; // Disable ads

// Convert modified object back to JSON
body = JSON.stringify(obj);

// Return modified response
$done({ body });
