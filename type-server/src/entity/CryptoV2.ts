import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class CryptoV2 {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: string

    @Column({ type: 'float'})
    value: number;
}
