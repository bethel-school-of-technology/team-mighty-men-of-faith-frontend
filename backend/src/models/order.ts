import { Document, Model, model, Schema } from "mongoose";

interface IOrder extends Document {
  vehicleDetails: string;
  additionalDetails: string;
}

const orderSchema: Schema = new Schema(
  {
    vehicleDetails: {
      type: Schema.Types.Mixed,
      required: true,
    },
    additionalDetails: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const OrdersModel: Model<IOrder | any> = model("orders", orderSchema);

export { IOrder, OrdersModel };
