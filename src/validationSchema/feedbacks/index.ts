import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  content: yup.string().required(),
  mentor_id: yup.string().nullable(),
  student_id: yup.string().nullable(),
  parent_id: yup.string().nullable(),
});
