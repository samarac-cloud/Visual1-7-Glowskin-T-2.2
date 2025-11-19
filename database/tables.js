import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const cliente = mysql.define('Cliente', {
    Nome: DataTypes.STRING,
    Email: DataTypes.STRING, 
    Senha: DataTypes.STRING,
});
const produto = mysql.define('Produto', {
    Nome: DataTypes.STRING,
    Valor: DataTypes.STRING, 
    Descricao: DataTypes.STRING
});
const pedido = mysql.define('Pedido', {
    Data: DataTypes.DATE,
    Status: DataTypes.STRING,
    ValorTotal: DataTypes.DECIMAL
});
const itemPedido = mysql.define('ItemPedido', {
    Quantidade: DataTypes.INTEGER,
    PrecoUnitario: DataTypes.DECIMAL,
    Subtotal: DataTypes.DECIMAL
});
const feedback = mysql.define('Feedback', {
    Comentario: DataTypes.TEXT,
    Nota: DataTypes.INTEGER,
});
const estoque = mysql.define('Estoque', {
    Quantidade: DataTypes.INTEGER,
    Local: DataTypes.STRING,
});

cliente.hasMany(pedido);
pedido.belongsTo(cliente);

produto.hasMany(itemPedido);
itemPedido.belongsTo(produto);

pedido.hasMany(itemPedido);
itemPedido.belongsTo(pedido);

produto.hasOne(estoque);
estoque.belongsTo(produto);

cliente.hasMany(feedback);
feedback.belongsTo(cliente);

mysql.sync();

export {cliente as Cliente, produto as Produto, pedido as Pedido, itemPedido as ItemPedido, feedback as Feedback, estoque as Estoque, mysql};
