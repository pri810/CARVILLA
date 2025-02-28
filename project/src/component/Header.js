import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"


function Header({ stl }) {
  let Navigate = useNavigate();
  const [query,setQuery]=useState("")
  const onSearch = ()=>{
    Navigate('/search/' +query)
  }
  return (
    <header style={stl.header}>
      <a style={stl.a} href="" className="car">CARVILLA</a>
      <from onSubmit={onSearch}>
      <input type="text" name="search" placeholder="Search your car..." onChange={(e)=>{
          setQuery(e.target.value)
        }}/>
        <input type="submit" value={"search"}/>
      </from>
      <nav>
              <Link state={stl.Link} to="/">Home</Link>
              <a href="#service">SERVICE</a>
              <a href="#featured-cars" style={stl.Link}>FEATURED CARS</a>           
              <a href="#Brands" style={stl.Link}>BRANDS</a>           
              <Link state={stl.Link} to="/Aboutus">AboutUs</Link>
              <Link style={stl.Link} to="/Create Profile">Create Profile</Link>                    
              <Link style={stl.Link} to="/CarSection">CarSection</Link>                    
              
              {/* <Link to="/update-profile">Update Profile</Link> */}

        </nav>
      {/* <nav>
        <a href='#'>HOME</a>
        <a href='#'>SERVICE</a>
        <a href='#'>FEATURED CAR</a>
        <a href='#'>NEW CAR</a>
        <a href='#'>BRANDS</a>
        <a href='#'>CONTACT</a>
      </nav> */}
    </header>
  )
}
export default Header
