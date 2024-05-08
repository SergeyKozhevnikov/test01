import { Table, Column, AllowNull, AutoIncrement, PrimaryKey, Model, Default, DataType, Unique } from 'sequelize-typescript'

@Table
export default class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    email!: string;

    @Column(DataType.STRING)
    password!: string;
}