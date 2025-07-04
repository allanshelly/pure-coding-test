export type Agent = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  createdAt: Date;
  updatedAt: Date;
};

export let agents: Agent[] = [];

export const state = {
  currentId: 1
};
