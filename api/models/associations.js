const ProductModel = require('./ProductModel');
const StockModel = require('./StockModel');
const BillSaleDetailModel = require('./BillSaleDetailModel'); 
const BillSaleModel = require('./BillSaleModel');
const UserModel = require('./UserModel');
const Report = require('./Report');

// การเชื่อมโยงระหว่าง Product และ Stock
ProductModel.hasMany(StockModel, { foreignKey: 'productId' });
StockModel.belongsTo(ProductModel, { foreignKey: 'productId' });

// การเชื่อมโยงระหว่าง Product และ BillSaleDetail
ProductModel.hasMany(BillSaleDetailModel, { foreignKey: 'productId' });
BillSaleDetailModel.belongsTo(ProductModel, { foreignKey: 'productId' });

// Add BillSale and BillSaleDetail associations
BillSaleModel.hasMany(BillSaleDetailModel, { 
  foreignKey: 'billSaleId',
  as: 'details'
});
BillSaleDetailModel.belongsTo(BillSaleModel, { 
  foreignKey: 'billSaleId',
  as: 'billSale'
});

// Remove Report-User association since we no longer use userId