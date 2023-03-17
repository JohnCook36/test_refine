
export interface IData {
    type?: "mysql"
    host?: string
    port?: number
    username?: string
    password?: string
    database?: string
    synchronize: boolean
    logging: boolean
    entities?: [any]
    migrations?: []
    subscribers?: []
}