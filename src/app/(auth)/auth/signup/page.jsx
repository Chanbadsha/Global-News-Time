"use client";

import signUpUser from "@/lib/signUpUser";
import { Eye, EyeSlash } from "@gravity-ui/icons";
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

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());

    const { data, error } = await signUpUser(userInfo);
    if (data.token) {
      console.log(data);
      redirect("/");
    }
  };

  return (
    <div className="min-h-[calc(100vh-54px)] flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md  lg:max-w-2xl lg:p-20 bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        {/* Title */}
        <h3 className="text-xl font-semibold text-center text-gray-900">
          Create your account
        </h3>

        <p className="text-sm text-gray-500 text-center mt-1">
          Join us and stay updated with global news.
        </p>

        <Separator className="my-6" />

        {/* Form */}
        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          {/* Name */}
          <TextField isRequired name="name">
            <Label>Full Name</Label>
            <Input className="bg-[#e8f0fe]" placeholder="John Doe" />
            <FieldError />
          </TextField>

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
                placeholder="Enter password"
                className="w-full bg-[#e8f0fe] "
                type={isVisible ? "text" : "password"}
                // value={isVisible ? "text" : "••••••••"}
              />
              <InputGroup.Suffix className="pr-0">
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

          {/* Confirm Password */}
          <TextField
            isRequired
            name="confirmPassword"
            type="password"
            validate={(value) => {
              if (value.length === 0) return "Please confirm your password";
              return null;
            }}
          >
            <Label>Confirm Password</Label>

            <InputGroup>
              <InputGroup.Input
                placeholder="Re-enter password"
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
            <FieldError />
          </TextField>

          {/* Terms */}
          <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
            <input type="checkbox" className="mt-1 accent-black" />I agree to
            the Terms & Conditions
          </label>

          {/* Button */}
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800 transition font-medium py-2.5"
          >
            Create Account
          </Button>

          {/* Footer */}
          <p className="text-xs text-center text-gray-500">
            Already have an account?{" "}
            <Link
              className="text-black font-medium hover:underline"
              href="/auth/signin"
            >
              Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
