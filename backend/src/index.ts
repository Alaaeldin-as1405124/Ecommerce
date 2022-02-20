import app from './app'
import * as process from "process";

const port = process.env.PORT || 5005;
const hostname = '127.0.0.1';
app.listen(port, () => {
    console.log(`Server started @ http://${hostname}:${port}`);
});
