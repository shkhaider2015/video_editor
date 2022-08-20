import { Formik, Field, Form } from "formik";
import React from "react";


const FormHandler = (props) => {
    const {
        initialValues,
        validationSchema,
        onSubmit,
        btnRef
    } = props;

    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={val =>  {
            onSubmit(val)
        }}
    >
        {({ errors, touched }) => (
            <Form  >
                {
                    Object.keys(initialValues).map((item, index) => <div key={index+item} >
                        <Field name={item}  />
                            {errors[item] && touched[item] ? (
                                <div>{errors[item]}</div>
                            ) : null}
                    </div> )
                }
                <button type="submit" ref={btnRef} style={{ display: 'none' }} />
            </Form>
        )}
    </Formik>
}

export default FormHandler;