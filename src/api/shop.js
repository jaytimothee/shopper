export const PRODUCTS = [
    {
      heading: "Cap - $10",
      name: "Cap",
      price: 10
    },
    {
      heading: "Hand Bag - $30",
      name: "HandBag",
      price: 30
    },
    {
      heading: "Shirt - $30",
      name: "Shirt",
      price: 30
    },
    {
      heading: "Shoes - $50",
      name: "Shoe",
      price: 50
    },
    {
      heading: "Pant - $40",
      name: "Pant",
      price: 40
    },
    {
      heading: "Slipper - $20",
      name: "Slipper",
      price: 20
    }
  ]

  export default {
    getProducts (cb) {
      setTimeout(() => cb(PRODUCTS), 100)
    },
  
  }