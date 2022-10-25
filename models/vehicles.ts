import { Document, Model, model, Schema, Types } from "mongoose";

interface IVehicles extends Document {
  companyId: string;
  countryId: string;
  cityId: string;
  driverAvailable: boolean;
  driverRentPerMonth: number;
  images: string[];
  insuranceAvailable: boolean;
  insuranceRentPerMonth: number;
  model: number;
  vehicleAvailable: boolean;
  vehicleRentPerDay: number;
  driverRentPerDay: number;
  vehicleRentPerMonth: number;
  title: string;
  insuranceRentPerDay: number;
}

const vehiclesSchema: Schema = new Schema(
  {
    _id: {
      type: Types.ObjectId,
      required: true,
    },
    companyId: {
      type: String,
      required: true,
    },
    countryId: {
      type: String,
      required: true,
    },
    cityId: {
      type: String,
      required: true,
    },
    driverAvailable: {
      type: Boolean,
      required: true,
    },
    driverRentPerMonth: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    insuranceAvailable: {
      type: Boolean,
      required: true,
    },
    insuranceRentPerMonth: {
      type: Number,
      required: true,
    },
    model: {
      type: Number,
      required: true,
    },
    vehicleAvailable: {
      type: Boolean,
      required: true,
    },
    vehicleRentPerDay: {
      type: Number,
      required: true,
    },
    driverRentPerDay: {
      type: Number,
      required: true,
    },
    vehicleRentPerMonth: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    insuranceRentPerDay: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const VehiclesModel: Model<IVehicles | any> = model("vehicles", vehiclesSchema);

export { IVehicles, VehiclesModel };
