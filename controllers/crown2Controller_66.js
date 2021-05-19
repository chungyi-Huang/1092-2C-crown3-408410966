const Category_66 = require('../models/categoryModel_66');

exports.getHomepage = async (req, res) => {
    let data;
  const [rows] = await Category_66.fetchAll();
  data = rows;
  //res.json(data);
  res.render('crown2_66', { 
    title: 'Chungyi Huang 408410966 (async/await)' ,
    data
  });
}