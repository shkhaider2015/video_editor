import { Formik, Field, Form } from "formik";
import React from "react";
import styled from "styled-components";


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
                                <ErrorWrapper>{errors[item]}</ErrorWrapper>
                            ) : <ErrorWrapper />}
                    </div> )
                }
                <button type="submit" ref={btnRef} style={{ display: 'none' }} />
            </Form>
        )}
    </Formik>
}

const ErrorWrapper = styled.div`
    color: red;
    font-size: 10px;
    margin-top: 2px;
    margin-bottom: 3px;
    min-height: 15px;
`;

export default FormHandler;
