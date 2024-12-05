import app from "./app.js"
import { PORT } from "./config.js";

// Ruta principal
app.get('/', (req, res) => {
    res.send('Server is running!');
  });
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`); 
});
