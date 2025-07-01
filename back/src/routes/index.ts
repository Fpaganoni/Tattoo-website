import { Router } from "express";
import userRouter from "./userRouter";
import appointmentsRouter from "./appointmentsRouter";

// interface IRecursos {
//   id: string;
//   name: string;
// }

const router: Router = Router();

router.use("/", userRouter);

router.use("/", appointmentsRouter);

export default router;
