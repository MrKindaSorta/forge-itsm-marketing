const https = require('https');

const ACCOUNT_ID = 'ce115cacc8399727e03f87e6604f9d6c';
const API_TOKEN = 'wYUBb0BAocgjmkVcXSjdqOWM6R4WSZCXiRtoc8np';
const DATABASE_ID = 'db10d5f6-7366-4f39-9cb6-290199ce3c4d';

const requiredTables = [
  'form_configurations',
  'branding_configuration',
  'categories'
];

const postData = JSON.stringify({
  sql: "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;",
  params: []
});

const options = {
  hostname: 'api.cloudflare.com',
  path: `/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DATABASE_ID}/query`,
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const result = JSON.parse(data);
    const existingTables = result.result[0].results.map(t => t.name);
    
    console.log('Existing tables:');
    existingTables.forEach(t => console.log(`  ✓ ${t}`));
    
    console.log('\nMissing tables:');
    requiredTables.forEach(t => {
      if (!existingTables.includes(t)) {
        console.log(`  ✗ ${t}`);
      }
    });
  });
});

req.on('error', (error) => {
  console.error('Error:', error.message);
});

req.write(postData);
req.end();
