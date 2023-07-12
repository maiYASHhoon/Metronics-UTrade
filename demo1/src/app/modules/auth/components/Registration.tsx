/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {getUserByToken, register} from '../core/_requests'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import {useAuth} from '../core/Auth'

const initialValues = {
  firstname: '',
  Businessname: '',
  phone: '',
  email: '',
  password: '',
  changepassword: '',
  acceptTerms: false,
}

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
  .min(3, 'Minimum 3 symbols')
  .max(50, 'Maximum 50 symbols')
  .required('First name is required'),
  phone: Yup.string()
  .min(3, 'Minimum 10 digits')
  .max(50, 'Maximum 11 digits')
  .required('Phone number is required'),
  email: Yup.string()
  .email('Wrong email format')
  .min(3, 'Minimum 3 symbols')
  .max(50, 'Maximum 50 symbols')
  .required('Email is required'),
  Businessname: Yup.string()
  .min(3, 'Minimum 3 symbols')
  .max(50, 'Maximum 50 symbols')
  .required('Business name is required'),
  password: Yup.string()
  .min(3, 'Minimum 3 symbols')
  .max(50, 'Maximum 50 symbols')
  .required('Password is required'),
  changepassword: Yup.string()
  .required('Password confirmation is required')
  .when('password', {
    is: (val: string) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
  }),
  acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
})

export function Registration() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, saveCurrentUser} = useAuth()
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await register(
          values.email,
          values.firstname,
          values.Businessname,
          values.phone,
          values.password
        )
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        saveCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The registration details is incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Heading */}
      <div className='text-start mb-11'>
        {/* begin::Title */}
        <h1 className='text-dark fw-bolder mb-3'>
          Create your seller <br /> Business Account!
        </h1>
        {/* end::Title */}
      </div>
      {/* end::Heading */}

      {/* begin::Form group Firstname */}
      <div className='fv-row mb-8'>
        <input
          placeholder='Name'
          type='text'
          autoComplete='off'
          {...formik.getFieldProps('firstname')}
          className={clsx(
            'form-control bg-light',
            {
              'is-invalid': formik.touched.firstname && formik.errors.firstname,
            },
            {
              'is-valid': formik.touched.firstname && !formik.errors.firstname,
            }
          )}
        />
        {formik.touched.firstname && formik.errors.firstname && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.firstname}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}
      <div className='fv-row mb-8'>
        {/* begin::Form group Business Name */}
        <input
          placeholder='Business Name'
          type='text'
          autoComplete='off'
          {...formik.getFieldProps('Businessname')}
          className={clsx(
            'form-control bg-light',
            {
              'is-invalid': formik.touched.Businessname && formik.errors.Businessname,
            },
            {
              'is-valid': formik.touched.Businessname && !formik.errors.Businessname,
            }
          )}
        />
        {formik.touched.Businessname && formik.errors.Businessname && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.Businessname}</span>
            </div>
          </div>
        )}
        {/* end::Form group */}
      </div>
      {/* begin::Form group phone Number */}
      <div className='fv-row mb-8 d-flex flex-column align-items-center'>
        <div className='input-group'>
          <div className='border-right-0 fs-16 fw-600 text-black px-6 form is-invalid input-group-text'>
            +91
          </div>
          <div className='flex-grow-1'>
            <input
              placeholder=''
              type='string'
              autoComplete='off'
              {...formik.getFieldProps('phone')}
              className={clsx(
                'form-control bg-light ',
                {'is-invalid': formik.touched.phone && formik.errors.phone},
                {'is-valid': formik.touched.phone && !formik.errors.phone}
              )}
            />
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.phone}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* end::Form group Phone Number */}

      {/* begin::Form group Email */}
      <div className='fv-row mb-8'>
        <input
          placeholder='Email'
          type='email'
          autoComplete='off'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-light',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Password */}
      <div className='fv-row mb-8' data-kt-password-meter='true'>
        <div className='mb-1'>
          <div className='position-relative mb-3'>
            <input
              type='password'
              placeholder='Password'
              autoComplete='off'
              {...formik.getFieldProps('password')}
              className={clsx(
                'form-control bg-light',
                {
                  'is-invalid': formik.touched.password && formik.errors.password,
                },
                {
                  'is-valid': formik.touched.password && !formik.errors.password,
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>
          {/* begin::Meter */}
          <div
            className='d-flex align-items-center mb-3'
            data-kt-password-meter-control='highlight'
          >
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
          </div>
          {/* end::Meter */}
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <span>
          By continuing, you agree to
          <a href='#' target='_blank' className='ms-1 link-primary'>
            Terms & conditions
          </a>{' '}
          and
          <a href='#' target='_blank' className='ms-1 link-primary'>
            Privacy policy
          </a>
          .
        </span>

        {formik.touched.acceptTerms && formik.errors.acceptTerms && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.acceptTerms}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms}
        >
          {!loading && <span className='indicator-label'>Sign In</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <div className='fv-row mb-4 mt-6'>
          <span> Already have an account?</span>
          <Link to='/auth/login'>Sign In</Link>
        </div>
      </div>
      {/* end::Form group */}
    </form>
  )
}
