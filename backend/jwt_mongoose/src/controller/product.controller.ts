import { Request, Response } from "express";
import {
  createProductInput,
  DeleteProductInput,
  ReadProductInput,
  updateProductInput,
} from "../schema/product.schema";
import {
  createProduct,
  deleteProduct,
  findAndUpdateProduct,
  findProduct,
} from "../service/product.service";
import logger from "../utils/logger";

export async function createProductHandler(
  req: Request<{}, {}, createProductInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const body = req.body;

  try {
    const product = await createProduct({ ...body, user: userId });
    return res.send(product);
  } catch (err) {
    logger.error(
      `Product creation failed for req body: ${req.body} & error: ${err}`
    );
    return res.sendStatus(500);
  }
}

export async function updateProductHandler(
  req: Request<updateProductInput["params"], {}, updateProductInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const productId = req.params.productId;
  const update = req.body;

  try {
    const product = await findProduct({ productId });

    if (!product) {
      return res.sendStatus(404);
    }

    if (String(product.user) != userId) {
      return res.sendStatus(403);
    }

    const updatedProduct = await findAndUpdateProduct({ productId }, update, {
      new: true,
    });

    return res.send(updatedProduct);
  } catch (err) {
    logger.error(
      `Product creation failed for req body: ${req.body} & error: ${err}`
    );
    return res.sendStatus(500);
  }
}

export async function getProductHandler(
  req: Request<ReadProductInput["params"]>,
  res: Response
) {
  const productId = req.params.productId;

  try {
    const product = await findProduct({ productId });
    if (!product) {
      return res.sendStatus(404);
    }

    return res.send(product);
  } catch (err) {
    logger.error(
      `Product creation failed for product Id:${productId} & error: ${err}`
    );
    return res.sendStatus(500);
  }
}

export async function deleteProductHandler(
  req: Request<DeleteProductInput["params"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const productId = req.params.productId;

  try {
    const product = await findProduct({ productId });

    if (!product || String(product.user) !== userId) {
      return res.sendStatus(404);
    }

    await deleteProduct({ productId });

    return res.sendStatus(204);
  } catch (err) {
    logger.error(
      `Product creation failed for product id: ${productId} & error: ${err}`
    );
    return res.sendStatus(500);
  }
}
