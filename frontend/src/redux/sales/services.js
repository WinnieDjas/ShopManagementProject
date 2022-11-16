import axios from "axios";

export const getAllSalesService = async () => {
  try {
      const res = await axios.get("http://localhost:4041/v1/shop/sales");
      return res;
  } catch (err) {
    console.log("error: ", err);
  }
};