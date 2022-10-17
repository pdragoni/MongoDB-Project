db.produtos.find({
  $or: [
    { curtidas: { $gt: 10, $lt: 100 } },
  ] },
  {
    _id: 0,
    ingredientes: 0,
    tags: 0,
    valoresNutricionais: 0,
    descricao: 0,
    vendidos: 0,
  });