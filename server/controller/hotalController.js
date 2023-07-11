// import bcrypt from 'bcrypt';
const Users = require("../model/User");
const secretKey = process.env.JWT_SECRET_KEY;
const hotelAPI = process.env.HOTELS_API;
const productAPI = process.env.PRODUCT_API;

class HotelController {
  constructor() {
    this.getHotels = this.getHotels.bind(this);
  }

  /**
   * @description: getHotels API
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async getHotels(req, res) {
    try {
      const { minPrice, maxPrice } = req.query;
      const responce = await fetch(productAPI, {
        Method: "POST",
      });
      const data = await responce.json();
      let filteredProduct = data.products.filter((product) => {
        if (minPrice && maxPrice) {
          return product.price >= Number(minPrice) && product.price <= Number(maxPrice);
        } else {
          return true; // If no price range is provided, include all hotels
        }
      });

      filteredProduct.sort((a, b) => a.price - b.price);
      return res.status(200).json({ Messge: "Success", Products: filteredProduct });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "server error", error });
    }
  }
}

module.exports = new HotelController();
