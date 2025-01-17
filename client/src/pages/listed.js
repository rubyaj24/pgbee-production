import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import ActionAreaCard from '../components/ActionAreaCard';
import HouseList from '../components/HouseList';


const Listed = () => {

  // const [form,setform] = useState({});
  // const [houses,setHouses] = useState([]);

  // const handleForm = (e) => {
  //   // console.log(e.target.name,":",e.target.value);
  //   setform({
  //     ...form,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:5000/demo', {
  //     method: 'POST',
  //     body: JSON.stringify(form),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   const data = await response.text();
  //   console.log(data);
  // }

  // const getHouses = async () => {
  //   const response = await fetch('http://localhost:5000/demo',{
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   setHouses(data);
  // }

  // useEffect(() => {
  //   getHouses();
  // },[])

  return (
    <div>
      <div className="Navbar">
        <Navbar />
      </div>
      <h1>Listing Page</h1>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <p>{JSON.stringify(form)}</p>
          <span>name</span>
          <input type="text" onChange={handleForm} name="name" placeholder="Name" />
          <span>pass</span>
          <input type="text" onChange={handleForm} name="pass" placeholder="pass" />
          <input type="submit"></input>
        </form>
        <div>
          <h1>Users</h1>
          <ul>
            {
              users.map((user) => {
                return <li key={user._id}>{user.name} - {user.pass}</li>
            })
            }
          </ul>
        </div>
      </div> */}
      <div>
        <HouseList/>
      </div>
      <Footer/>
    </div>
  )
}

export default Listed