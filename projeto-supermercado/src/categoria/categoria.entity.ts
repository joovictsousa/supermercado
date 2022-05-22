import { Produto } from "src/produto/produto.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    idCategoria: number;

    @Column({length: 50})
    titulo: string;

    @ManyToMany(() => Produto)
    @JoinTable()
    produtos: Produto[];
}
