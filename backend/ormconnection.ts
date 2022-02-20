import {createConnection} from "typeorm";
import ormConfig from "./ormconfig";
// @ts-ignore
const connection = createConnection(ormConfig);

export default connection;
