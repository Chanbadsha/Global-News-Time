"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";

const SignInPage = () => {
  const onSubmit = (e) => {};
  return (
    // <div
    //   className={` mx-auto min-h-[calc(100vh-54px)] w-full flex items-center justify-center`}
    // >
    //   <div className=" bg-white px-40 py-30 rounded-lg">
    //     <h3 className="ml-4 font-semibold xl:text-2xl mb-4 text-center">
    //       Login Your Account
    //     </h3>

    //     <Separator className="mb-8" />
    //     <Form className="flex  flex-col gap-4" onSubmit={onSubmit}>
    //       <TextField
    //         isRequired
    //         name="email"
    //         type="email"
    //         validate={(value) => {
    //           if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    //             return "Please enter a valid email address";
    //           }
    //           return null;
    //         }}
    //       >
    //         <Label>Email</Label>
    //         <Input placeholder="john@example.com" />
    //         <FieldError />
    //       </TextField>
    //       <TextField
    //         isRequired
    //         minLength={8}
    //         name="password"
    //         type="password"
    //         validate={(value) => {
    //           if (value.length < 8) {
    //             return "Password must be at least 8 characters";
    //           }
    //           if (!/[A-Z]/.test(value)) {
    //             return "Password must contain at least one uppercase letter";
    //           }
    //           if (!/[0-9]/.test(value)) {
    //             return "Password must contain at least one number";
    //           }
    //           return null;
    //         }}
    //       >
    //         <Label>Password</Label>
    //         <Input placeholder="Enter your password" />
    //         <Description>
    //           Must be at least 8 characters with 1 uppercase and 1 number
    //         </Description>
    //         <FieldError />
    //       </TextField>
    //       <div className="flex flex-col gap-4 items-center">
    //         <Button variant="secondary" className="w-full" type="submit">
    //           Login
    //         </Button>
    //         <p className="text-xs">
    //           Dont’t Have An Account ?
    //           <Link className="text-red-500" href={"/auth/signup"}>
    //             Register
    //           </Link>
    //         </p>
    //       </div>
    //     </Form>
    //   </div>
    // </div>

    <div className="min-h-[calc(100vh-54px)] flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md lg:max-w-xl lg:p-20 bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        {/* Title */}
        <h3 className="text-xl font-semibold text-center text-gray-900">
          Login to your account
        </h3>

        <p className="text-sm text-gray-500 text-center mt-1">
          Welcome back! Please enter your details.
        </p>

        <Separator className="my-6" />

        {/* Form */}
        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input className="bg-[#e8f0fe]" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return "At least 8 characters required";
              if (!/[A-Z]/.test(value)) return "1 uppercase required";
              if (!/[0-9]/.test(value)) return "1 number required";
              return null;
            }}
          >
            <Label>Password</Label>
            <Input className="bg-[#e8f0fe]" placeholder="Enter your password" />
            <Description>8+ characters, 1 uppercase, 1 number</Description>
            <FieldError />
          </TextField>

          {/* Extra row */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-black" />
              Remember me
            </label>

            <Link href="#" className="hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800 transition font-medium py-2.5"
          >
            Login
          </Button>

          {/* Footer */}
          <p className="text-xs text-center text-gray-500">
            Don’t have an account?{" "}
            <Link
              className="text-black font-medium hover:underline"
              href="/auth/signup"
            >
              Register
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;
