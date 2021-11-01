import { TaskStatus } from '../task.model';

// We'll filter with status proprerty && search sting to search in both title and description.
export class FilterTasksDto {
  status: TaskStatus;
  search: string;
}
