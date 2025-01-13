import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import BeeSupport from '../components/BeeSupport';

function App() {
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
        <BeeSupport/>
    </div>
  );
}

export default App;
