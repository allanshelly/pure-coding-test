import express from 'express';
import cors from 'cors';
import agentRoutes from './routes/agent';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
origin: 'http://localhost:5173', // allow Vue dev server
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.use('/agents', agentRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});