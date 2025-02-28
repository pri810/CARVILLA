import CarSection from './CarSection';
import CarService from './CarService';
import click from '../img/images/icon1.png';
import imgclick from '../img/images/new-cars-model/ncm1.png';
import ngclick from '../img/images/new-cars-model/ncm2.png';
import pgclick from '../img/images/new-cars-model/ncm3.png';
import cpclick from '../img/images/new-cars-model/ncm1.png';
import BrandSection from './Brands'
import Brand1 from '../img/images/brand/br1.png'
import Brand2 from '../img/images/brand/br2.png'
import Brand3 from '../img/images/brand/br3.png'
import Brand4 from '../img/images/brand/br4.png'
import Brand5 from '../img/images/brand/br5.png'
import Brand6 from '../img/images/brand/br6.png'
import Header from './Header';

function Home() {

    const style ={
        header:{backgroundcolor:'transperent', color:'white', display:'flex', justifyContent:'space-around'},
        a:{
            textDecoration:"none"
        },
        Link:{
            textDecoration:"none"
        }
    }
    const BSCards = [
        {
            name: "Largest Dealershipe of car",
            img: click,
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur out adit aut den fugit sed quia."

        },

        {
            name: "Unlimited Repair Warrenty",
            img: click,
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur out adit aut den fugit sed quia."

        },
        {
            name: "Insurence Support",
            img: click,
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur out adit aut den fugit sed quia."

        }
    ]
    const FCCards = [
        {
            name: "BMW 6-series gran coupe",
            img: imgclick,
            p: 'model:2017 3100mi 240hp automatic',
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur out adit aut den fugit sed quia.",
            price: '$89,395'

        },

        {
            name: "Chevrolet Camaro WMV20 ",
            img: ngclick,
            p: 'model:2017 3100mi 240hp automatic',
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur out adit aut den fugit sed quia.",
            price: '$66,575'

        },
        {
            name: "Lamborghini V520",
            img: pgclick,
            p: 'model:2017 3100mi 240hp automatic',
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur out adit aut den fugit sed quia.",
            price: '$125,250'

        },

        {
            name: "bmw",
            img: cpclick,
            p: 'model:2017 3100mi 240hp automatic',
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur out adit aut den fugit sed quia.",
            price: '$95,500'

        }
    ]

    const BrSection = [
        {
            img: Brand1,
        },
        {
            img: Brand2,
        },
        {
            img: Brand3,
        },
        {
            img: Brand4,
        },
        {
            img: Brand5,
        },
        {
            img: Brand6
        }
    ]
    return (
        <>
         <Header stl={style} />
            <div className='herobanner'>
                <div id="overlay"></div>
                <div className='heading'>
                    <h1>GET YOUR DESIRED CAR IN RESONABLE PRICE</h1>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sem urna <br />
                        Curabitur vestibulum nunc purus, nec pellentesque augue
                    </p>
                    <button>contact us</button>
                </div>

            </div>
            <div id='service' className="carmodel">
                {
                    BSCards.map((card) => {

                        return <CarService cards={card} />
                    })
                }
            </div>


            <div id='featured-cars' className="carsection">
                <div className="heading">
                    <span>Checkout the featured cars</span>
                    <h1>FEATURED Cars</h1>
                    <div className="bttm-line"></div>

                    <div className="loopsection">
                        {
                            FCCards.map((card) => {

                                return <CarSection cards={card} />
                            })
                        }
                    </div>
                </div>
            </div>

            <div id='Brands' className="BrandSection">
                {
                    BrSection.map((card) => {

                        return <BrandSection BrandSection={card} />
                    })
                }
            </div>

        </>
        
    )
}
export default Home