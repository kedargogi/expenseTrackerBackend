const Sequelize=require('sequelize')

const sequelize= new Sequelize('expenses','root','Password@91',{
    dialect:'mysql',
    host:'localhost'
})



module.exports=sequelize;