import React ,{useState} from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const AddShop = (props) => {
  

  const validate = Yup.object({
    name: Yup.string().max(15, 'Must be 15 characters or less').required('Shop name is required'),
    category: Yup.string().max(15, 'Must be 15 characters or less').required('Category is required'),
    location: Yup.string().max(15,  'Must be 15 characters or less').required('Location is required'),
    status: Yup.number().required('Must not be before opening date'),
  })


  const [shop, setshop] = useState({
        name: '',
        category: '',
        location: '',
        status: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target.value)
    setshop(prevshop => {
      return {
        ...prevshop,
        [name]: value
      };
    });
  }

  function submitshop(event) {
    props.onAdd(shop);
    setshop({
      name: '',
      category: '',
      location: '',
      status: '',
    });
    event.preventDefault();
  }
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
          <TextField label="Shop Name" value={shop.name} name="name" onChange={handleChange}  />
          <TextField label="Category" value={shop.category}  name="category" onChange={handleChange} />
          <TextField label="Location"  value={shop.location}  name="location" onChange={handleChange} />
          <TextField label="Status"  value={shop.status}  name="status" onChange={handleChange} />
          <button className='btn btn-primary my-3' onClick={() => {props.setOpenModal(false);submitshop();}} type='submit'>Add</button>
          <button className='btn btn-danger mx-3' type="reset">Reset</button>
       </Form>
      </div>
      </div>
      )}
    </Formik>
  )
}
