// predefined components
import Header from './Header';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
import Table  from './Table';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
// custom components

  

function FeaturedTable  () {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [link, setLink] = useState("")

  const [profiles, setProfiles] = useState([]);
  const [singelProfile, setSingelProfile] = useState({
    id: '',
    link: '',
    name: '',
    desc: '',
  });


  useEffect(() => {
    //get all profiles
    fetch('http://localhost:8000/profiles')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProfiles(res)
      })
      .catch((error) => { console.log(error) })

    // get single profile

    // fetch('http://localhost:8000/profile/1')
    // .then((res)=>{
    //   return res.json();
    // })
    // .then((res)=>{
    //   setSingelProfile(res)

    // })
    // .catch((error)=>{console.log(error)})
  }, []);

  function createprofile(e) {
    e.preventDefault()
    const id = profiles.length+1;
    fetch("http://localhost:8000/profileCreate", {
      method: "POST",
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        id: id,
        name: name,
        desc: desc,
        link: link,

      })
    })
      .then((res) => { return res.json() })
      .then((res) => {
        setProfiles(res);
        setName("");
        setDesc("");
        setLink("");
      })
      .catch((error) => { console.log(error) })
  }

  function updateProfile(e) {
    e.preventDefault()
    // const id =profiles.length+1;
    fetch("http://localhost:8000/profileUpdate", {
      method: "PUT",
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        id: singelProfile.id,
        name: singelProfile.name,
        desc: singelProfile.desc,
        link: singelProfile.link,

      })
    })
      .then((res) => { return res.json() })
      .then((res) => {
        setProfiles(res);
        setSingelProfile({
          id: '',
          link: '',
          name: '',
          desc: '',
        })
      })
      .catch((error) => { console.log(error) })
  }

  /////////
const style ={
    header:{backgroundcolor:'cornflowerblue', color:'red', display:'flex', marginTop:'50px'},
     a:{
        textDecoration:"none"
     },
     link:{
        textDecoration:"none"
     }
   }

  return (
    <>
    <div>
    <Header stl={style}/>
    </div>
    {/* <div className="container mt-4"> */}
      <h1>Profiles</h1>
      <div className="row mb-3">
        <div>
          <div className="card">
            {/* heading */}
            <div className="card-header">
              <h3>Update Profile</h3>
            </div>
            {/* body */}
            <div className="card-body">
              <Form>
                {/* Name */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name"
                    onChange={(e) => { setSingelProfile({ ...singelProfile, name: e.target.value }) }} value={singelProfile.name} />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Description */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter Description"
                    onChange={(e) => { setSingelProfile({ ...singelProfile, desc: e.target.value }) }} value={singelProfile.desc} />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Link */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Github Profile Link"
                    onChange={(e) => { setSingelProfile({ ...singelProfile, link: e.target.value }) }} value={singelProfile.link} />

                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Submit Button */}
                <Button variant="primary" type="submit" onClick={(e) => {
                  // profileUpdate(e)
                  // e.preventDefault()
                  // setProfiles((old)=>[{
                  //   name: name,
                  //   desc: desc,
                  //   link: link,
                  // },
                  //   ...old 
                  // ])
                  updateProfile(e)
                }}>
                  edit Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Profile List */}
        <div className="col-md-8">
          <Table
           profiles={profiles} set={setSingelProfile} setProfiles={setProfiles}
          />
        </div>
        {/* Create Profile Form */}
        <div className="col-md-4">
          <div className="card">
            {/* heading */}
            <div className="card-header">
              <h3>Create Service Cars</h3>
            </div>
            {/* body */}
            <div className="card-body">
              <Form>
                {/* Name */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name"
                    onChange={(e) => { setName(e.target.value) }} value={name} />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Description */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter Description"
                    onChange={(e) => { setDesc(e.target.value) }} value={desc} />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Link */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Github Profile Link"
                    onChange={(e) => { setLink(e.target.value) }} value={link} />

                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Submit Button */}
                <Button variant="primary" type="submit" onClick={(e) => {
                  createprofile(e)
                }}>
                  Add Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>

      </div>
    {/* </div> */}
    </>
  );
}

export default FeaturedTable;