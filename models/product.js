// blueprint for Product
class Product {
  // ownerId is user who created product
  constructor(id, ownerId, title, imageUrl, description, price) {
    this.ownerId = ownerId,
      this.id = id,
      this.title = title,
      this.imageUrl = imageUrl,
      this.description = description,
      this.price = price
  }
}

export default Product;