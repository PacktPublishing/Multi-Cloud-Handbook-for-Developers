const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const buildPath = path.join(__dirname, 'dist');

if (!fs.existsSync(buildPath)) {
  fs.mkdirSync(buildPath);
}

const buildFile = path.join(buildPath, 'index.js');

fs.writeFileSync(buildFile, 'const express = require(\'express\');\n\nconst app = express();\n\napp.get(\'/\', (req, res) => {\n\tres.send(\'Hello from Node.js!\');\n});\n\napp.listen(port, () => {\n\tconsole.log(`Server listening on port ${port}`);\n});');

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
