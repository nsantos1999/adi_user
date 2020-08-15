import express from 'express';

import UserRoutes from '../routes/UserRoutes';

const app = express();

app.use("/user",UserRoutes);

export default app;