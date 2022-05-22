import { Telefone } from "src/telefone/telefone.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conta {
    @PrimaryGeneratedColumn()
    idConta: number;

    @Column({length: 50})
    nome: string;

    @Column({length: 50})
    endereco: string;

    @Column({length: 50})
    localizacao: string;

    @Column({length: 50})
    email: string;

    @Column({length: 50})
    senha: string;

    @ManyToMany(() => Telefone,{
        cascade: true,
    })
    @JoinTable()
    telefones: Telefone[];
}
