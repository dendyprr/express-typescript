import express, { Request, Response } from "express";
import "dotenv/config";
import appMiddleware from "./middleware";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(appMiddleware);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
