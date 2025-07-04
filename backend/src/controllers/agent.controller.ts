import { Request, Response } from 'express';
import { prisma } from '../prisma';

// Get all agents
export const getAllAgents = async (_: Request, res: Response): Promise<any> => {
  try {
    const agents = await prisma.propertyAgent.findMany();
    return res.json(agents);
  } catch (error) {
    console.error('Error in getAllAgents:', error);
    return res.status(500).json({ message: 'Internal server error' });
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

  if (!firstName || !lastName || !mobileNumber || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const agent = await prisma.propertyAgent.create({
      data: { firstName, lastName, mobileNumber, email }
    });
    return res.status(201).json(agent);
  } catch (error) {
    console.error('Error in createAgent:', error);
    return res.status(400).json({ message: 'Failed to create agent' });
  }
};

// Update agent
export const updateAgent = async (req: Request, res: Response): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  const { firstName, lastName, mobileNumber, email } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid agent ID' });
  }

  try {
    const agent = await prisma.propertyAgent.update({
      where: { id },
      data: { firstName, lastName, mobileNumber, email }
    });
    return res.json(agent);
  } catch (error) {
    console.error('Error in updateAgent:', error);
    return res.status(400).json({ message: 'Failed to update agent' });
  }
};


// Delete agent
export const deleteAgent = async (req: Request, res: Response): Promise<any> => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid agent ID' });
  }

  try {
    await prisma.propertyAgent.delete({ where: { id } });
    return res.status(204).send();
  } catch (error) {
    console.error('Error in deleteAgent:', error);
    return res.status(400).json({ message: 'Failed to delete agent' });
  }
};
