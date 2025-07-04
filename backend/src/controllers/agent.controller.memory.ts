import { Request, Response } from 'express';
import { agents, state } from '../data/agents';

type Agent = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  createdAt: Date;
  updatedAt: Date;
};

// Get all agents
export const getAllAgents = async (_: Request, res: Response): Promise<any> => {
  return res.json(agents);
};

// Get agent by ID
export const getAgentById = async (req: Request, res: Response): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ message: 'Invalid agent ID' });

  const agent = agents.find((a) => a.id === id);
  if (!agent) return res.status(404).json({ message: 'Agent not found' });

  return res.json(agent);
};

// Create new agent
export const createAgent = async (req: Request, res: Response): Promise<any> => {
  const { firstName, lastName, mobileNumber, email } = req.body;

  if (!firstName || !lastName || !mobileNumber || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newAgent: Agent = {
    id: state.currentId++,
    firstName,
    lastName,
    mobileNumber,
    email,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  agents.push(newAgent);
  return res.status(201).json(newAgent);
};

// Update agent
export const updateAgent = async (req: Request, res: Response): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  const { firstName, lastName, mobileNumber, email } = req.body;

  if (isNaN(id)) return res.status(400).json({ message: 'Invalid agent ID' });

  const index = agents.findIndex((a) => a.id === id);
  if (index === -1) return res.status(404).json({ message: 'Agent not found' });

  agents[index] = {
    ...agents[index],
    firstName,
    lastName,
    mobileNumber,
    email,
    updatedAt: new Date()
  };

  return res.json(agents[index]);
};

// Delete agent
export const deleteAgent = async (req: Request, res: Response): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ message: 'Invalid agent ID' });

  const index = agents.findIndex((a) => a.id === id);
  if (index === -1) return res.status(404).json({ message: 'Agent not found' });

  agents.splice(index, 1);
  return res.status(204).send();
};
