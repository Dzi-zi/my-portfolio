import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Basic health route (server.js also mounts root route)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;
