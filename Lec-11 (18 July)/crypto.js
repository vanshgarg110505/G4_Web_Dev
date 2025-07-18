const crypto = require('crypto')

// 1. Hashing
const sha256 = crypto.createHash('sha256').update('hello').digest('hex')
console.log('SHA-256:', sha256)

// 2. HMAC
const hmac = crypto.createHmac('sha256', 'secret').update('data').digest('hex')
console.log('HMAC:', hmac)

// 3. Random values
console.log('Random Bytes:', crypto.randomBytes(16).toString('hex'))
console.log('Random Int (0-99):', crypto.randomInt(100))
console.log('UUID:', crypto.randomUUID())

// 4. AES Encryption/Decryption
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
let encrypted = cipher.update('secret', 'utf8', 'hex') + cipher.final('hex')
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
let decrypted =
    decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8')
console.log('Encrypted:', encrypted)
console.log('Decrypted:', decrypted)

// 5. PBKDF2
crypto.pbkdf2('pass', 'salt', 100000, 32, 'sha512', (err, key) => {
    console.log('PBKDF2:', key.toString('hex'))
})

// 6. Scrypt
crypto.scrypt('password', 'salt', 32, (err, derivedKey) => {
    console.log('Scrypt:', derivedKey.toString('hex'))
})

// 7. RSA Key Pair & Signing
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
})
const sign = crypto.createSign('sha256').update('msg').end()
const signature = sign.sign(privateKey)
const verify = crypto.createVerify('sha256').update('msg').end()
console.log('Signature valid:', verify.verify(publicKey, signature))

// 8. Direct sign/verify
const signed = crypto.sign('sha256', Buffer.from('hello'), privateKey)
const valid = crypto.verify('sha256', Buffer.from('hello'), publicKey, signed)
console.log('Valid:', valid)

// 9. Diffie-Hellman
const alice = crypto.createDiffieHellman(2048)
const aliceKey = alice.generateKeys()
const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator())
const bobKey = bob.generateKeys()
const sharedA = alice.computeSecret(bobKey)
const sharedB = bob.computeSecret(aliceKey)
console.log('DH shared key match:', sharedA.equals(sharedB))

// 10. ECDH
const ecdh = crypto.createECDH('secp256k1')
ecdh.generateKeys()
console.log('ECDH Public:', ecdh.getPublicKey('hex'))

// 11. checkPrime
crypto.checkPrime(Buffer.from('11'), (err, res) =>
    console.log('checkPrime(11):', res)
)
console.log('checkPrimeSync(11):', crypto.checkPrimeSync(Buffer.from('11')))

// 12. generatePrime
crypto.generatePrime(32, (err, prime) =>
    console.log('Generated prime:', prime.toString('hex'))
)

// 13. create keys from PEM
const pubKeyObj = crypto.createPublicKey(publicKey)
const privKeyObj = crypto.createPrivateKey(privateKey)
console.log('Public Key Object Type:', pubKeyObj.type)

// 14. createSign / createVerify already shown

// 15. HKDF
crypto.hkdf(
    'sha256',
    Buffer.from('key'),
    Buffer.from('salt'),
    Buffer.from('info'),
    32,
    (err, derivedKey) => {
        console.log('HKDF Key:', derivedKey.toString('hex'))
    }
)

// 16. timingSafeEqual
const a = Buffer.from('abcd')
const b = Buffer.from('abcd')
console.log('Timing Safe Equal:', crypto.timingSafeEqual(a, b))

// 17. getHashes / getCiphers / getCurves
console.log('Available Hashes:', crypto.getHashes())
console.log('Available Ciphers:', crypto.getCiphers())
console.log('Available Curves:', crypto.getCurves())

// 18. getCipherInfo
console.log('Cipher Info AES-256-CBC:', crypto.getCipherInfo('aes-256-cbc'))

// 19. constants
console.log('OpenSSL constants:', crypto.constants)

// 20. subtle (Web Crypto)
console.log('Subtle crypto available:', !!crypto.webcrypto?.subtle)

// 21. getRandomValues (browser-like)
const arr = new Uint32Array(4)
crypto.getRandomValues(arr)
console.log('Random Uint32Array:', arr)

// 22. createSecretKey
const secretKey = crypto.createSecretKey(
    Buffer.from('mykeymykeymykeymykeymykeymykeymykey12')
)
console.log('SecretKey Export:', secretKey.export().toString('hex'))

// 23. secureHeapUsed
if (crypto.secureHeapUsed)
    console.log('Secure Heap Used:', crypto.secureHeapUsed())
