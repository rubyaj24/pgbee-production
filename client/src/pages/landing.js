import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import BeeSupport from '../components/BeeSupport';

function Landing() {
  // const aboutRef = useRef(null)
  // useEffect(() => {
  //   aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [])

  return (
    <div className="App">
      <div className="Navbar">
        <Navbar/>
      </div>
        <div className="Home">
          <Home/>
        </div>
        <div className='About'>
          <About/>
        </div>
        <div className='Work'>
            <Work/>
        </div>
        <div className='Contact'>
          <Contacts/>
        </div>
        <Footer/>
        <a href="https://wa.me/919999999999" className="whatsapp" target="_blank" rel="noopener noreferrer">
          <BeeSupport/>
        </a>
    </div>
  );
}

export default Landing;
