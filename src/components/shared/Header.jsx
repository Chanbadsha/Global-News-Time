import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center space-y-2  mt-6">
      <h1 className="lg:text-4xl xl:text-5xl leading-14 font-semibold lg:font-bold">
        Global News Times
      </h1>
      <p>Journalism Without Fear or Favour</p>
      <p className="font-semibold">{format(new Date(), "EEEE MMM dd,yyyy")}</p>
    </div>
  );
};

export default Header;
