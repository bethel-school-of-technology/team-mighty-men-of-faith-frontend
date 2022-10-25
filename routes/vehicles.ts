import { Router } from "express";
import { VehiclesModel } from "../models/vehicles";

const router = Router();

router.route("/:companyId").get(async (req, res) => {
  try {
    let { companyId } = req.params;
    const { country, city } = req.query;

    const response = await VehiclesModel.find({
      companyId,
      ...(country ? { countryId: country } : {}),
      ...(city ? { cityId: city } : {}),
    });

    return res.status(200).json(response)
  } catch (err) {
    return res.status(400).json(err);
  }
});

export default router;
