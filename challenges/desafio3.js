db.produtos.find({},
  {
    _id: 0,
    ingredientes: 0,
    tags: 0,
    valoresNutricionais: 0,
    descricao: 0,
    curtidas: 0,
  })
  .sort({ vendidos: -1 })
  .limit(1);