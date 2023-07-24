import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Wrapper({ children }) {
  return (
    <>
      <Navbar />
      <div className="px-32 leading-snug">{children}</div>
      <Footer />
    </>
  );
}
