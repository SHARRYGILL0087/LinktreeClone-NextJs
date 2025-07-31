'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify'


const Signup = () => {
  const router = useRouter();
  const [dataForm, setDataForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: ""
  });

  const handleChange = async (e) => {
    const { value, name } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataForm)
      });

      if (res.ok) {
        console.log("Signup successful!");
        toast('SignUp Successfull')
        setDataForm({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
        });
        router.push('/login');
      } else {
        const errorData = await res.json();
        // console.error("Signup error:", errorData.msg);
        toast(errorData.msg || 'Email or username Already Exist')
      }
    } catch (err) {
      // console.error("Signup error:", err.message);
      toast(err.message.toString() || 'Something went wrong')
    }
  };

  return (
    <div className='flex h-screen w-screen'>
      <ToastContainer />
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='fixed top-10 left-10 cursor-pointer'
        height={"150px"}
        width={"150px"}
        onClick={() => { router.push('/') }}
      >
        <title>Linktree Logo</title>
        <desc>Linktree Logo Symbol and Word Mark</desc>
        <path
          d="M0 1.72687H2.25964V13.6313H8.50582V15.7244H0V1.72687ZM10.7287 1.72687C10.9121 1.72444 11.0941 1.75816 11.2644 1.82609C11.4348 1.89402 11.59 1.99484 11.7214 2.12278C11.8528 2.25073 11.9576 2.4033 12.03 2.57178C12.1024 2.74026 12.1409 2.92135 12.1433 3.1047C12.1433 3.47987 11.9943 3.83967 11.729 4.10496C11.4637 4.37024 11.1039 4.51928 10.7287 4.51928C10.3536 4.51928 9.99375 4.37024 9.72847 4.10496C9.46318 3.83967 9.31415 3.47987 9.31415 3.1047C9.31491 2.92087 9.3523 2.73903 9.42412 2.56981C9.49594 2.40058 9.60076 2.24736 9.73245 2.11909C9.86414 1.99082 10.0201 1.89008 10.1911 1.82273C10.3622 1.75539 10.5449 1.7228 10.7287 1.72687ZM9.62645 5.63991H11.7942V15.7244H9.62645V5.63991Z
              M13.0618 5.63991H15.2296V7.03612C15.8714 5.97059 16.9737 5.36435 18.425 5.36435C20.7765 5.36435 22.2462 7.20146 22.2462 10.1225V15.7244H20.0784V10.3062C20.0784 8.41395 19.2517 7.34843 17.7587 7.34843C16.1249 7.34843 15.2247 8.46906 15.2247 10.4899V15.7244H13.057L13.0618 5.63991Z
              M23.3852 1.72687H25.553V10.5817L29.5946 5.63991H32.3135L27.9963 10.692L32.3135 15.7244H29.5946L25.553 10.8022V15.7244H23.3852V1.72687Z
              M33.1586 3.07408H35.3631V5.64604H37.9351V7.44641H35.3631V12.6442C35.3631 13.3068 35.7673 13.7109 36.3919 13.7109H37.8445V15.7305H36.098C34.2058 15.7305 33.1586 14.6099 33.1586 12.6271V3.07408Z
              M38.8904 5.64604H41.0582V6.89527C41.5909 5.93998 42.4911 5.37047 43.5934 5.37047C43.8478 5.35888 44.1024 5.38993 44.3466 5.46233V7.48315C44.0813 7.42486 43.8097 7.40017 43.5383 7.40966C41.94 7.40966 41.0582 8.75688 41.0582 11.0655V15.7305H38.8904V5.64604Z
              M49.4158 5.37047C51.804 5.37047 54.3944 6.82179 54.3944 10.9185V11.2125H46.6234C46.79 13.0116 47.8359 14.0037 49.5811 14.0037C50.8304 14.0037 51.8959 13.3239 52.1347 12.3882H54.3393C54.1188 14.4078 52.0245 16.0061 49.5811 16.0061C46.4581 16.0061 44.4936 13.9669 44.4936 10.6797C44.4936 7.75259 46.3858 5.36435 49.4158 5.36435V5.37047ZM52.0796 9.41211C51.7673 8.16288 50.7936 7.37292 49.4158 7.37292C48.0931 7.37292 47.1574 8.18125 46.79 9.41211H52.0796Z
              M60.2731 5.37047C62.6614 5.37047 65.2517 6.82179 65.2517 10.9185V11.2125H57.4807C57.646 13.0116 58.6932 14.0037 60.4385 14.0037C61.6877 14.0037 62.7532 13.3239 62.992 12.3882H65.1966C64.9761 14.4078 62.8818 16.0061 60.4385 16.0061C57.3154 16.0061 55.3497 13.9669 55.3497 10.6797C55.3497 7.75259 57.2419 5.36435 60.2731 5.36435V5.37047ZM62.9369 9.41211C62.6246 8.16288 61.651 7.37292 60.2731 7.37292C58.9504 7.37292 58.0135 8.18125 57.646 9.41211H62.9369Z"
          fill="#000"
        />
        <path
          d="M65.7852 5.33374H69.6615L66.9058 2.70668L68.4306 1.13901L71.0577 3.83956V0H73.3357V3.83956L75.9627 1.14513L77.4863 2.70668L74.7319 5.32762H78.607V7.49541H74.7098L77.4827 10.1898L75.9627 11.7208L72.1967 7.93631L68.4306 11.7208L66.9058 10.196L69.6798 7.50153H65.7852V5.33374ZM71.0515 10.6062H73.3296V15.7502H71.0515V10.6062Z"
          fill="#43E660"
        />
      </svg>

      <div className='w-full md:w-1/2 flex flex-col items-center justify-center gap-8'>
        <h1 className='text-5xl font-extrabold'>Join LinkTree</h1>
        <p className='text-md text-gray-500'>Sign up for free! </p>

        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-3'>
          <input onChange={handleChange} type="text" name='firstname' value={dataForm.firstname} placeholder='First Name' className='placeholder:text-gray-500 border-0 bg-gray-100 w-[400px] px-3 py-3.5 rounded-lg hover:border hover:border-gray-300' required />
          <input onChange={handleChange} type="text" name='lastname' value={dataForm.lastname} placeholder='Last Name' className='placeholder:text-gray-500 border-0 bg-gray-100 w-[400px] px-3 py-3.5 rounded-lg hover:border hover:border-gray-300' required />
          <input onChange={handleChange} type="text" name='username' value={dataForm.username} placeholder='Username' className='placeholder:text-gray-500 border-0 bg-gray-100 w-[400px] px-3 py-3.5 rounded-lg hover:border hover:border-gray-300' required />
          <input onChange={handleChange} type="email" name='email' value={dataForm.email} placeholder='Email' className='placeholder:text-gray-500 border-0 bg-gray-100 w-[400px] px-3 py-3.5 rounded-lg hover:border hover:border-gray-300' required />
          <input onChange={handleChange} type="password" name='password' value={dataForm.password} placeholder='Password' className='placeholder:text-gray-500 border-0 bg-gray-100 w-[400px] px-3 py-3.5 rounded-lg hover:border hover:border-gray-300' required />
          <button type='submit' className={`text-lg font-medium w-[400px] rounded-4xl text-center py-2.5 ${dataForm.email ? "text-white bg-blue-600 cursor-pointer" : "text-[#a8aaa2] bg-[#e0e2d9] cursor-not-allowed"} `}>Continue</button>
        </form>

        <div>
          <p className='text-gray-600 text-sm'>By clicking Create account, you agree to Linktree's <a href="3" className='underline'>privacy notice</a>, <a href="#" className='underline'>T&Cs</a></p>
          <p className='text-gray-600 text-sm text-center'>and to receive offers, news and updates.</p>
        </div>

        <p className='text-center text-sm text-gray-600'>Already have an account? <Link href={'/login'} className='text-blue-500'>Login</Link> </p>
      </div>

      <div className='hidden w-0 md:block md:w-1/2'>
        <img src="assets/signupImg.png" alt="SignupImg" className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default Signup;
