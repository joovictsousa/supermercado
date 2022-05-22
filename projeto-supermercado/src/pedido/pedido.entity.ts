import { Cliente } from "src/cliente/cliente.entity";
import { Itemlista } from "src/itemlista/itemlista.entity";
import { Supermercado } from "src/supermercado/supermercado.entity";
import { Column, Double, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    idPedido: number;

    @Column({length: 50})
    titulo: string;

    @Column({length: 20})
    tipo: string;

    @Column()
    entrega: Date;

    @Column()
    entregue: boolean;

    @Column()
    valorTotal: number;

    @Column({length: 50})
    localizacao: string;

    @ManyToMany(() => Itemlista)
    @JoinTable()
    itemListas: Itemlista[];

    @ManyToMany(() => Cliente, cliente => cliente.pedidos)
    clientes: Cliente[];

    @ManyToMany(() => Supermercado)
    supermercados: Supermercado[];
}
