const app = require('./src/app');
const connectDB = require('./src/db/db');
const dotenv = require('dotenv')
dotenv.config();
const port = 3000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
