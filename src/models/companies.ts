import { Document, Model, model, Schema, Types } from "mongoose";

interface ICompanies extends Document {
  _id: string;
  avatar: string;
  title: string;
}

const companiesSchema: Schema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    countries: {
      type: [String],
      required: true,
    },
    cities: {
      type: [String],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const CompaniesModel: Model<ICompanies | any> = model(
  "companies",
  companiesSchema
);

export { ICompanies, CompaniesModel };
