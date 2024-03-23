// https://docs.dnscontrol.org/
var REG_NAMECHEAP = NewRegistrar('namecheap');
var DSP_NAMECHEAP = NewDnsProvider("namecheap");

D('satstack.cloud', REG_NAMECHEAP, DnsProvider(DSP_NAMECHEAP),
    A('@', '141.11.94.21'), // sableye
    A('sableye', '141.11.94.21'),
    A('lanturn', '23.95.61.215'),
    CNAME('ntfy', 'sableye.satstack.cloud.'),
);
