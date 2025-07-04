import { Request, Response } from 'express';
import { prisma } from '../prisma';

// Get all agents
export const getAllAgents = async (_: Request, res: Response) => {
  try {
    const agents = await prisma.propertyAgent.findMany();
    res.json(agents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch agents' });
  }
};

// Get agent by ID
export const getAgentById = async (req: Request, res: Response): Promise<any> => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid agent ID' });
  }

  try {
    const agent = await prisma.propertyAgent.findUnique({
      where: {
        id: id 
      }
    });

    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    return res.json(agent);
  } catch (error) {
    console.error('Error in getAgentById:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Create new agent
export const createAgent = async (req: Request, res: Response): Promise<any> => {
  const { firstName, lastName, mobileNumber, email } = req.body;

  try {
    const agent = await prisma.propertyAgent.create({
      data: { firstName, lastName, mobileNumber, email }
    });
    res.status(201).json(agent);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create agent', details: error });
  }
};

// Update agent
export const updateAgent = async (req: Request, res: Response): Promise<any> => {
  const id = Number(req.params.id);
  const { firstName, lastName, mobileNumber, email } = req.body;

  if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

  try {
    const agent = await prisma.propertyAgent.update({
      where: { id },
      data: { firstName, lastName, mobileNumber, email }
    });
    res.json(agent);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update agent', details: error });
  }
};

// Delete agent
export const deleteAgent = async (req: Request, res: Response): Promise<any> => {
  const id = Number(req.params.id);

  if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

  try {
    await prisma.propertyAgent.delete({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete agent', details: error });
  }
};
