// Here goes the schema for the form
import * as yup from 'yup';

const schema=yup.object().shape({
    username:yup.string().trim().required('user is required').min(6,'need to over 6 characters'),
    email: yup.string().email('must be a valid email').required('email is required'),
    role: yup.string().oneOf(['student', 'alumni','instructor'],'you must to choose one role'),
    civil: yup.string().oneOf(['single','married'],'you must choose one civil'),
    coding:yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean()
    
})
export default schema;
