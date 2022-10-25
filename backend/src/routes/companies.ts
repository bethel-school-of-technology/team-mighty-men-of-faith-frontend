import { Router } from "express";
import { CompaniesModel } from "../models/companies";

const router = Router();

router.route("/:countryId/:cityId").get(async (req, res) => {
  const { countryId, cityId } = req.params;

  try {
    const response = await CompaniesModel.find({
      countries: countryId,
      cities: cityId,
    });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
});

export default router;
