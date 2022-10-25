import { Document, Model, model, Schema, Types } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
}

const usersSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const UsersModel: Model<IUser | any> = model("users", usersSchema);

export { IUser, UsersModel };
