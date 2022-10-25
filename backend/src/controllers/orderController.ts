import { RequestHandler } from "express";
import { IOrder, OrdersModel } from "../models/order";

export const createOrder: RequestHandler = async (req, res, next) => {
  try {
    let newOrder: IOrder = req.body;
    await OrdersModel.create(newOrder)
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).send();
  }
};
