### Automatically use addresses and credentials between networks.

Example Usage JS: 
```javascript
const { Blobs } = require('blobrouter');
blobs = new Blobs( 'localhost' , './cache')
blobs.write('anything','8x8x8x8x8')
blobs.read('anything')
```
