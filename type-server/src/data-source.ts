import "reflect-metadata"
import { DataSource } from "typeorm"
import {Data} from "../Data";
import {IData} from "./interface";

const {type, host, port, username, password, database, entities}: IData = Data
export const AppDataSource = new DataSource({
    type: type,
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    synchronize: true,
    logging: false,
    entities: entities,
    migrations: [],
    subscribers: [],
})