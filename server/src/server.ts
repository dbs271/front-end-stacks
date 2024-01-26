import express, { Request, Response, NextFunction } from "express";

const app: express.Application = express();

interface Data {
  id: number;
  name: string;
}

const Send: Data = {
  id: 0,
  name: "test",
};

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: Send,
  });
});

app.listen(6000);
