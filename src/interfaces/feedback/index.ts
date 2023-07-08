import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  content: string;
  mentor_id?: string;
  student_id?: string;
  parent_id?: string;
  created_at?: any;
  updated_at?: any;

  user_feedback_mentor_idTouser?: UserInterface;
  user_feedback_student_idTouser?: UserInterface;
  user_feedback_parent_idTouser?: UserInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  mentor_id?: string;
  student_id?: string;
  parent_id?: string;
}
