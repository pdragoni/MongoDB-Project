db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: 
    { curtidas: "" },
  },
);

/*
Users.updateMany({ first_name: { $exists: true } }, { $unset: { first_name: '' } });
// remove from all documents first_name field
*/

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    curtidas: 1,
  },
);