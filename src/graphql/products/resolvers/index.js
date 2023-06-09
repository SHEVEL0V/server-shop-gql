/** @format */
import get from "./get.js";
import getById from "./getById.js";
import getDesc from "./getDesc.js";
import add from "./add.js";
import update from "./update.js";
import remove from "./remove.js";
import { wrapper } from "../../../helpers/wrapper.js";

const query = {
  getProducts: wrapper(get),
  getProductById: wrapper(getById),
  getProductsDesc: wrapper(getDesc),
};

const mutations = {
  addProduct: wrapper(add),
  updateProduct: wrapper(update),
  removeProduct: wrapper(remove),
};

export const resolvers = { query, mutations };
