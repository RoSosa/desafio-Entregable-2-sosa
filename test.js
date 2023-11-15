async function testProductManager() {
  const ProductManager = require("./productManager");


  const productManager = new ProductManager("./products.json");

  await productManager.clearProducts();


  console.log({ products: await productManager.getProducts() });


  await productManager.addProduct("Black Shirt", "A classic black shirt is a wardrobe staple, and this one is no exception. Featuring a flattering fit and a timeless design, this shirt is perfect for any occasion.r", 3000, "https://im.uniqlo.com/global-cms/spa/res9f736c9e8b74b06eeed863832f7d92cefr.jpg", "BS", 8);
  await productManager.addProduct("Square Dress", "Step into timeless elegance with this vintage-inspired grey dress, perfect for special occasions and garden parties.", 5000, "https://im.uniqlo.com/global-cms/spa/res9f736c9e8b74b06eeed863832f7d92cefr.jpg", "SD", 2);


  console.log({ productsAfterInsert: await productManager.getProducts() });


  try {
    await productManager.addProduct("", "Your new go-to pair of premium denim jeans, offering a comfortable and flattering fit for versatile, stylish looks.", 5000, "https://hmuruguay.vtexassets.com/arquivos/ids/1353785-483-725/Skinny-High-Jeans---Dark-denim-blue---H-M-UY.jpg?v=638065865013800000", "BJ", 3);
  } catch (error) {
    console.log({ error: error.message });
  }


  try {
    await productManager.addProduct("Blue Jeans", "Your new go-to pair of premium denim jeans, offering a comfortable and flattering fit for versatile, stylish looks.", 5000, "https://hmuruguay.vtexassets.com/arquivos/ids/1353785-483-725/Skinny-High-Jeans---Dark-denim-blue---H-M-UY.jpg?v=638065865013800000", "SD", 3);
  } catch (error) {
    console.log({ error: error.message });
  }


  try {
    await productManager.getProductById(10);
  } catch (error) {
    console.log({ error: error.message });
  }


  console.log({ specificProduct: await productManager.getProductById(1) });


  try {
    const updatedProduct = await productManager.updateProduct(
      1,
      "black t shirt",
      "A classic black Modify shirt is a wardrobe staple, and this one is no exception. Featuring a flattering fit and a timeless design, this shirt is perfect for any occasion.r",
      6000,
      "https://im.uniqlo.com/global-cms/spa/res9f736c9e8b74b06eeed863832f7d92cefr.jpg",
      7
    );
    console.log({ updatedProduct });

    console.log({ updatedProduct: await productManager.getProductById(1) });
  } catch (error) {
    console.log({ error: error.message });
  }


  try {
    const deletedProduct = await productManager.deleteProduct(1);
    console.log({ deletedProduct });

    console.log({ productsAfterDelete: await productManager.getProducts() });
  } catch (error) {
    console.log({ error: error.message });
  }
  await productManager.clearProducts();
}

testProductManager()
  .then(() => console.log("Done"))
  .catch((error) => console.log(error));
