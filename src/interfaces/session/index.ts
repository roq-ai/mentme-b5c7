import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SessionInterface {
  id?: string;
  date: any;
  mentor_id?: string;
  student_id?: string;
  created_at?: any;
  updated_at?: any;

  user_session_mentor_idTouser?: UserInterface;
  user_session_student_idTouser?: UserInterface;
  _count?: {};
}

export interface SessionGetQueryInterface extends GetQueryInterface {
  id?: string;
  mentor_id?: string;
  student_id?: string;
}
