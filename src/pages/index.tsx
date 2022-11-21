import { Feature, Footer, Hero, Informasi, Navbar } from '../components';
import { Infografis } from '../components/infografis';
import { StrukturOrganisasi } from '../components/pemerintahan';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Informasi />
      <Infografis />
      <StrukturOrganisasi />
      <Feature />
      <Footer />
    </div>
  );
}
