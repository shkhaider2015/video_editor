import * as Yup from 'yup';

const CutterSchema = Yup.object().shape({
    startTime: Yup.string()
        .min(8, 'Plsease use correct format hh:mm:ss')
        .max(8, 'Plsease use correct format hh:mm:ss')
        .required('Start time is required'),
    endTime: Yup.string()
        .min(8, 'Plsease use correct format hh:mm:ss')
        .max(8, 'Plsease use correct format hh:mm:ss')
        .required('End time is required'),
});

export default CutterSchema;