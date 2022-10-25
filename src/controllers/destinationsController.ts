import { RequestHandler } from "express";
import { VehiclesModel } from "../models/vehicles";

export const getAllDestinations: RequestHandler = async (req, res, next) => {
  try {
    const { countryId } = req.params;
    const destinationsList = await VehiclesModel.distinct(
      "cityId",
      { countryId },
    );
    res.status(200).json(destinationsList);
  } catch (err) {
    return res.status(400).json(err);
  }
};
