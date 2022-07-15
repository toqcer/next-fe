import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { AuthLink, Input, Button, Gap } from '@components/atoms';
import { Form, Footer } from '@components/molecules';
import ErrorMessage from '@components/molecules/ErrorMessage/ErrorMessage';

function Login() {
  const [field, setField] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = field;
    const validate = email !== '' && password !== '';
    if (validate) {
      return login(email, password);
    }
    return setErrorMsg('Email atau Password harus diisi!');
  };

  const handleChange = (e) => {
    const data = e.target.getAttribute('data-field');
    if (data === 'email') {
      setField({
        ...field,
        email: e.target.value,
      });
    } else {
      setField({
        ...field,
        password: e.target.value,
      });
    }
  };

  const login = async (email, password) => {
    const credentials = { email, password };
    try {
      setIsLoading(true);
      await axios.post('/api/auth/admin/login', credentials);

      router.reload();
    } catch (e) {
      setIsLoading(false);
      setErrorMsg('Sedang ada masalah, harap dicoba lagi');

      console.log(e);
    }
  };
  return (
    // TODO Styling tag SPAN if request status 403
    <div className="h-screen bg-primary text-white overflow-hidden flex flex-col">
      <Head>
        <title>Toqcer | login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-orange font-bold text-4xl my-14">ToqCer</h1>
        {/* Form */}
        <div className="max-w-md w-full">
          <Form onSubmit={handleSubmit} title="Sign In">
            {/* styling error input in component Input*/}
            <Input
              label="email"
              placeholder="Email"
              value={field.email}
              type="text"
              data-field="email"
              onChange={(e) => handleChange(e)}
            />
            <Gap height={8} />
            <Input
              label="password"
              placeholder="Password"
              value={field.password}
              type="password"
              data-field="password"
              onChange={(e) => handleChange(e)}
            />
            <Gap height={28} />
            <Button
              className="rounded-lg flex items-center justify-center gap-x-2"
              type="submit"
              isDisabled={isLoading}
              isLoading={isLoading}
            >
              Sign in
            </Button>
            {errorMsg && <ErrorMessage msg={errorMsg} />}
          </Form>
          <div className="flex justify-between text-sm px-2 py-3 text-muted ">
            <AuthLink href="/" title="Forgot password ?" />
          </div>
        </div>
        {/* Form End */}
      </div>
      <Footer />
    </div>
  );
}
export default Login;
