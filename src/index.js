//Importamos APP 
import APP from './app.js'
//Importamos dotenv
import { PORT } from './config.js'

APP.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);    
});


