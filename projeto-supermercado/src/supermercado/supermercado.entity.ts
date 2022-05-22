import { Conta } from "src/conta/conta.entity";
import { Pedido } from "src/pedido/pedido.entity";
import { Produto } from "src/produto/produto.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";

@Entity()
export class Supermercado extends Conta {
    @Column({length: 50})
    CNPJ: string;

    @Column({length: 50})
    funcionamento: string;

    @ManyToMany(() => Pedido)
    @JoinTable()
    pedidos: Pedido[];

    @ManyToMany(() => Produto)
    @JoinTable()
    produtos: Produto[];
}
