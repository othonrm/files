function FindProxyForURL(url, host) {
  var matchesSubdomain = shExpMatch(host, '*dmti.cloud');
  var matchesSubdomain2 = shExpMatch(host, '*wmgp.io');
  var matchesSubdomain3 = shExpMatch(host, '*cartoonnetwork.com.br');
  var matchesSubnet = false;

  if (
    matchesSubdomain ||
    matchesSubdomain2 ||
    matchesSubdomain3 ||
    matchesSubnet
  ) {
    return 'PROXY 18.228.38.80:7658';
  }

  return 'DIRECT';
}
