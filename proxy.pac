function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "194.88.106.169")) return "PROXY 194.88.106.169:13021";
  if (dnsDomainIs(host, "93.190.142.139")) return "PROXY 93.190.142.139:13186";
  if (dnsDomainIs(host, "93.190.138.107")) return "PROXY 93.190.138.107:11919";
  if (dnsDomainIs(host, "185.21.60.181")) return "PROXY 185.21.60.181:12907";
  // Add more proxy configurations for other IP addresses as needed.
  return "DIRECT";
}
