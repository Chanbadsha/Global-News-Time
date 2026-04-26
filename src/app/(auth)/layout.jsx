import NavBar from "@/components/shared/NavBar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
