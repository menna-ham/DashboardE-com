import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ErrorMessage, Field, Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface UserState {
  userName: string;
  password: string;
  rememberMe: boolean;
}

interface LoginProps {
  getUserToken: () => void;
}

const Login: React.FC<LoginProps> = ({ getUserToken }) => {
  const [user, setUser] = useState<UserState>({
    userName: '',
    password: '',
    rememberMe: true,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const initialValues: UserState = {
    userName: '',
    password: '',
    rememberMe: true
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    rememberMe: Yup.boolean()
  });

  const getUser = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, checked } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: name === 'rememberMe' ? checked : value
    }));
  };

  const handleSubmit = async (values: UserState, { setSubmitting }: FormikHelpers<UserState>): Promise<void> => {
    try {
      setIsLoading(true);
      const { data } = await axios.post<{ isSuccess: boolean; result: { token: string } }>(
        'https://ecomerce.runasp.net/api/User/Login',
        values,
        {
          headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json-patch+json',
          }
        }
      );
      console.log('logging', data);
      localStorage.setItem('loginToken', data?.result?.token);
      if (data.isSuccess) {
        console.log('logged in');
        // navigate('/');
      } else {
        console.log('error in login');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <section className="dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl bg-transparent font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting, values }) => (
                <Form className="space-y-4 md:space-y-6 bg-transparent">
                  <div>
                    <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-transparent">Your UserName</label>
                    <Field type="text" name="userName" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Username" />
                    <ErrorMessage name="userName" component="div" className="text-sm text-red-500" />
                  </div>

                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-transparent">Password</label>
                    <Field type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-blue-500" />
                    <ErrorMessage name="password" component="div" className="text-sm text-red-500" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <Field id="rememberMe" name="rememberMe" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-amber-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-amber-600 dark:ring-offset-gray-800" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300 bg-transparent">Remember me</label>
                      </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-amber-400 hover:underline dark:text-primary-500 bg-transparent">Forgot password?</a>
                  </div>

                  <button type="submit" disabled={isSubmitting || !!errors.password || !!errors.userName} className="w-full text-white bg-amber-400 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-amber-700 dark:focus:ring-primary-800">
                    {isLoading ? 'Loading...' : 'Sign In'}
                  </button>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don't have an account yet? <Link to="/SignUp" className="font-medium text-amber-400 hover:underline dark:text-primary-500 bg-transparent">Sign up</Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

