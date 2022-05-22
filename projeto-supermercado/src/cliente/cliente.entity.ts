import { Cartao } from "src/cartao/cartao.entity";
import { Conta } from "src/conta/conta.entity";
import { Pedido } from "src/pedido/pedido.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne } from "typeorm";

@Entity()
export class Cliente extends Conta {
    @Column({length: 20})
    CPF: string;

    @OneToOne(() => Cartao)
    @JoinColumn()
    cartao: Cartao;

    @ManyToMany(() => Pedido)
    @JoinTable()
    pedidos: Pedido[];
}
