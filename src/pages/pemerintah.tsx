import { Footer, Navbar } from "../components";
import { StrukturOrganisasi } from "../components/pemerintahan";

export default function Home() {
  return (
    <div>
      <Navbar />
      <StrukturOrganisasi />
      <Footer />
    </div>
  );
}
