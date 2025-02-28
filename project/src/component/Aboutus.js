import Header from './Header'

function AboutUs() {
    const style = {
        header: {
            backgroundColor: 'cornflowerblue', display: 'flex', width: '100%',marginTop: '50px',
            padding: '15px 20px', marginRight: '150px', marginBottom: '80px',
        },
        a: {
            textDecoration: "none"
        },
        Link: {
            textDecoration: "none"
        }
    }

    return (
        <>
            <div>

                <Header stl={style} />
            
            </div>
            <div className='aboutMe' style={{ marginTop: '80px' }}>
                <h2 style={{ marginBottom: '35px' }}  st>Hello Users</h2>
                <span style={{ MarginBottom: '15px', marginTop: "45px" }}>Hey Whatsapp I Am prince I AM In 1st year BSCIT Student<br /></span>
                <p style={{ marginTop: "25px" }}>
                    ● I learn HTML, CSS, SCSS, React.js, Node.js, Express.js, MongoDB(Database), Github, Bootstrap, CRUD Operators, RESTful APIs, CORS, Responsive Design<br />
                    ● I Know how to make  Reusable components, dynamic tables, real-time updates, API handling.  <br />
                    ● I made plenty of projects and use Reusable components and made them Responsive as well </p >
            </div>
        </>
    )
}
export default AboutUs