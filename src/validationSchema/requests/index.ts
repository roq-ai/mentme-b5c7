import * as yup from 'yup';

export const requestValidationSchema = yup.object().shape({
  description: yup.string().required(),
  student_id: yup.string().nullable(),
  parent_id: yup.string().nullable(),
});
