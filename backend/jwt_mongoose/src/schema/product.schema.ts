import { object, number, string, TypeOf } from "zod";

const payload = {
  body: object({
    title: string({
      required_error: "title is required",
    }),
    description: string({
      required_error: "description is required",
    }).min(20, "Description should be atleast 20 characters long"),
    price: number({
      required_error: "price is reaquired",
    }),
    image: string({
      required_error: "image is required",
    }),
  }),
};

const params = {
  params: object({
    productId: string({
      required_error: "productId(param) is required",
    }),
  }),
};

export const createProductSchema = object({
  ...payload,
});

export const updateProductSchema = object({
  ...payload,
  ...params,
});

export const getProductSchema = object({
  ...params,
});

export const deleteProductSchema = object({
  ...params,
});

export type createProductInput = TypeOf<typeof createProductSchema>;
export type updateProductInput = TypeOf<typeof updateProductSchema>;
export type ReadProductInput = TypeOf<typeof getProductSchema>;
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>;
