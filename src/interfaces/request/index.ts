import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RequestInterface {
  id?: string;
  description: string;
  student_id?: string;
  parent_id?: string;
  created_at?: any;
  updated_at?: any;

  user_request_student_idTouser?: UserInterface;
  user_request_parent_idTouser?: UserInterface;
  _count?: {};
}

export interface RequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  student_id?: string;
  parent_id?: string;
}
