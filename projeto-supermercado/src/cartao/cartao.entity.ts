import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm'
import { Cliente } from '../cliente/cliente.entity';

@Entity()
export class Cartao {
    @PrimaryGeneratedColumn()
    idCartao: number;

    @Column({length: 20})
    bandeira: string;

    @Column({length: 20})
    numero: string;

    @Column({length: 10})
    CVC: string;

    @Column({length: 10})
    validade: string;

    @Column({length: 10})
    tipo: string;

    @OneToOne(() => Cliente)
    @JoinColumn()
    cliente: Cliente;
}
