"use client";
import signInUser from "@/lib/signInUser";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { da } from "date-fns/locale";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());
    console.log(userInfo);
    const { data, error } = await signInUser(userInfo);
    console.log(data, error);
    if (data?.token) {
      toast.success("Successfully signed in.");
      redirect("/");
    } else if (error) {
      toast.success("Sign in failed. Please try again.");
    } else {
      toast.error("Something went wrong.");
    }
  };
  return (
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

            <InputGroup>
              <InputGroup.Input
                placeholder="Enter your password"
                className="w-full bg-[#e8f0fe] "
                type={isVisible ? "text" : "password"}
              />
              <InputGroup.Suffix className="pr-0 ">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
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
