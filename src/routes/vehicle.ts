import { Router } from "express";
import Mongoose from "mongoose";
import { VehiclesModel } from "../models/vehicles";

const router = Router();

router.route("/:vehicleId").get(async (req, res) => {
  try {
    const { vehicleId } = req.params;
    const response = await VehiclesModel.findOne({
      _id: new Mongoose.Types.ObjectId(vehicleId),
    });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
});

export default router;
