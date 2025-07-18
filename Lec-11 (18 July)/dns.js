// node-dns-demo.js
const dns = require('dns')

// SECTION 1: DNS LOOKUP (uses system resolver)
dns.lookup('example.com', (err, address, family) => {
    console.log('dns.lookup')
    if (err) return console.error(err)
    console.log(`Address: ${address}, Family: IPv${family}`)
})

// SECTION 2: RESOLVE A (IPv4)
dns.resolve4('example.com', (err, addresses) => {
    console.log('dns.resolve4')
    if (err) return console.error(err)
    console.log('IPv4 Addresses:', addresses)
})

// SECTION 3: RESOLVE AAAA (IPv6)
dns.resolve6('google.com', (err, addresses) => {
    console.log('dns.resolve6')
    if (err) return console.error(err)
    console.log('IPv6 Addresses:', addresses)
})

// SECTION 4: RESOLVE MX (Mail Servers)
dns.resolveMx('google.com', (err, addresses) => {
    console.log('dns.resolveMx')
    if (err) return console.error(err)
    console.log('MX Records:', addresses)
})

// SECTION 5: RESOLVE TXT (Verification / SPF / DKIM)
dns.resolveTxt('google.com', (err, records) => {
    console.log('dns.resolveTxt')
    if (err) return console.error(err)
    console.log('TXT Records:', records)
})

// SECTION 6: RESOLVE CNAME
dns.resolveCname('www.microsoft.com', (err, records) => {
    console.log('dns.resolveCname')
    if (err) return console.error(err)
    console.log('CNAME Records:', records)
})

// SECTION 7: RESOLVE NS (Name Servers)
dns.resolveNs('google.com', (err, records) => {
    console.log('dns.resolveNs')
    if (err) return console.error(err)
    console.log('NS Records:', records)
})

// SECTION 8: RESOLVE SRV (Service Records)
dns.resolveSrv('_sip._tcp.google.com', (err, addresses) => {
    console.log('dns.resolveSrv')
    if (err) return console.error(err)
    console.log('SRV Records:', addresses)
})

// SECTION 9: REVERSE LOOKUP (IP to domain)
dns.reverse('8.8.8.8', (err, hostnames) => {
    console.log('dns.reverse')
    if (err) return console.error(err)
    console.log('Reverse Lookup:', hostnames)
})

// SECTION 10: LOOKUP SERVICE NAME from IP + port
dns.lookupService('8.8.8.8', 53, (err, hostname, service) => {
    console.log('dns.lookupService')
    if (err) return console.error(err)
    console.log(`Host: ${hostname}, Service: ${service}`)
})

// SECTION 11: resolveAny — get all records
dns.resolveAny('cloudflare.com', (err, records) => {
    console.log('dns.resolveAny')
    if (err) return console.error(err)
    console.log('Any Records:', records)
})
