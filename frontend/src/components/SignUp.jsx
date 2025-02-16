import React from 'react'

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center gap-5 w-96 p-4 border border-gray-300 rounded-md">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        {/* Sign Up form */}
        <form className="flex flex-col gap-4 w-full m-2">
          {/* email */}
          <input type="email" className="w-full border rounded-md p-2" placeholder="Email" />
          {/* password */}
          <input type="password" className="w-full border rounded-md p-2" placeholder="Password" />
          {/* confirm password */}
          <input type="password" className="w-full border rounded-md p-2" placeholder="Confirm Password" />
          {/* submit button */}
          <button type="submit"  className="w-full border rounded-full p-2 bg-primary hover:bg-[#906ebf]">Sign Up</button>
        </form>
        <p className="mt-4 text-center">Already have an account? <a href="#" className="text-[#60a1ea]">Log In</a></p>
      </div>
    </div>
  )
}

export default SignUp
