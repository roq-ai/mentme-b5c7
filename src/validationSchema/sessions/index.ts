import * as yup from 'yup';

export const sessionValidationSchema = yup.object().shape({
  date: yup.date().required(),
  mentor_id: yup.string().nullable(),
  student_id: yup.string().nullable(),
});
