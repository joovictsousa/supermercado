import { Pedido } from "src/pedido/pedido.entity";
import { Produto } from "src/produto/produto.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Itemlista {
    @PrimaryColumn()
    idItemLista: number;

    @Column()
    quantidade: number;

    @Column()
    total: number;

    @ManyToMany(() => Pedido)
    pedido: Pedido;

    @OneToOne(() => Produto)
    @JoinColumn()
    produto: Produto;
}
