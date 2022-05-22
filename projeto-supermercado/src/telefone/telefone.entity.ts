import { Conta } from "src/conta/conta.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Telefone {
    @PrimaryGeneratedColumn()
    idTelefone: number;

    @Column({length: 20})
    telefone: string;

    @ManyToMany(() => Conta)
    contas: Conta[];
}
