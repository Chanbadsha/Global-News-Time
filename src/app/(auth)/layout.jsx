import NavBar from "@/components/shared/NavBar";

const AuthLayout = ({ children }) => {
  return (
    <>
      {/* Nav */}
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
