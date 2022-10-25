import { Router } from "express";
import { getAllDestinations } from "../controllers/destinationsController";

const router = Router();

router.get("/:countryId/cities", getAllDestinations);

export default router;
