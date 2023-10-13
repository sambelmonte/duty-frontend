export interface Duty {
  id: string;
  name: string;
}

export enum TaskMode {
  ADD = 'add',
  EDIT = 'edit',
  LOCKED = 'locked',
}