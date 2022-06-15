import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const AddShop = () => {
  

  const validate = Yup.object({
    name: Yup.string().max(15, 'Must be 15 characters or less').required('Shop name is required'),
    category: Yup.string().max(15, 'Must be 15 characters or less').required('Category is required'),
    location: Yup.string().max(15,  'Must be 15 characters or less').required('Location is required'),
    status: Yup.number().required('Must not be before opening date'),
  })
  return (
    <Formik
      initialValues={{
        name: '',
        category: '',
        location: '',
        status: '',
        
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
      <div className="modalBackground">
      <div className="modalContainer">
      
      
      <Form>
        <div class="mb-3">
          <label htmlFor="image" class="form-label">Image</label>
          <input type="file" name="image" class="form-control" id="image" placeholder="Shop Image" />
        </div>
          <TextField label="Shop Name" name="name"  />
          <TextField label="Category" name="category"  />
          <TextField label="Location" name="location"  />
          <TextField label="Status" name="status"  />
          <button className='btn btn-primary my-3' type='submit'>Add</button>
          <button className='btn btn-danger mx-3' type="reset">Reset</button>
       </Form>
      </div>
      </div>
      )}
    </Formik>
  )
}
