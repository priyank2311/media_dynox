import './App.css';
import Blogs from './components/Blogs';
import Connect from './components/Connect';
import Dedicated from './components/Dedicated';
import Footer from './components/Footer';
import Investor from './components/Investor';
import { Main } from './components/Main';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Investor />
      <Blogs />
      <Dedicated />
      <Testimonial />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
