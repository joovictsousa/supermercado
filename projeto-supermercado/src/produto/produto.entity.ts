import { Categoria } from "src/categoria/categoria.entity";
import { Itemlista } from "src/itemlista/itemlista.entity";
import { Supermercado } from "src/supermercado/supermercado.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    idProduto: number;

    @Column({length: 50})
    nome: string;

    @Column({length: 50})
    marca: string;

    @Column()
    validade: Date;

    @Column()   
    fabricacao: Date;

    @Column()
    quantidade: number;

    @Column()
    preco: number;

    @ManyToMany(() => Supermercado)
    supermercados: Supermercado;

    @OneToOne(() => Itemlista)
    @JoinColumn()
    itemLista: Itemlista;

    @ManyToMany(() => Categoria,{
        cascade: true,
    })
    @JoinTable()
    categorias: Categoria[];
}
