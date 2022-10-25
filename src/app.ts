import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import destinationsRoutes from "./routes/destinations";
import companiesRoutes from "./routes/companies";
import vehiclesRoutes from "./routes/vehicles";
import vehicleRoutes from "./routes/vehicle";
import userRoutes from "./routes/user";
import orderRoutes from "./routes/order";
import cors from 'cors';

const connectionString: string = "mongodb+srv://Xindel:Mongo200@cluster0.wr1db.mongodb.net/carmigo?retryWrites=true&w=majority"; //database connection string

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/destinations", destinationsRoutes);
app.use("/companies", companiesRoutes);
app.use("/vehicles", vehiclesRoutes);
app.use("/vehicle", vehicleRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).end();
});

const PORT = process.env.PORT ?? 8000;
mongoose.connect(connectionString).then(
  () => app.listen(PORT, () => console.log("Connected to port 8000")),
  (err) => console.log("Error connecting to the database", err)
);