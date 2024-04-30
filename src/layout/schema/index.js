const navitem = [
  {
    label: 'Our Services',
    link: ''
  },
  {
    label: 'Explore Our Applications',
    link: ''
  },
  {
    label: 'Discover Our Company',
    link: ''
  },
  {
    label: 'Contact us',
    link: '/contact-us'
  },
]

import * as Yup from 'yup';
const initialValues = {
  company: '',
  anrede: '',
  name: '',
  email: '',
  description: '',
}
const contactSchema = Yup.object({
  company: Yup.string().required('Company field is empty'),
  anrede: Yup.string().required('anrede field is empty'),
  name: Yup.string().min(2).max(25).required('please enter your name'),
  email: Yup.string().email().required('please enter email'),
  description: Yup.string()
    .min(10, 'Must be at least 10 characters')
    .required('Please enter a description'),
})

export {navitem, initialValues, contactSchema}