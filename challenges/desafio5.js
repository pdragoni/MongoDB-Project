db.produtos.find({
  $or: [
    { curtidas: 36 },
    { vendidos: 85 },
  ] },
  {
    _id: 0,
    ingredientes: 0,
    tags: 0,
    valoresNutricionais: 0,
    descricao: 0,
  });