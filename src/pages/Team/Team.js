import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Team.scss';

const Team = () => {

return (
    <>
    <Header/>
    <main className='team'>
    <section className='home__section home__section--flex home__section--flex-team'>
                    <div className='home__container home__container--black'>
                        <div>
                        <h1 className='home__heading'>Team of Proffesionals</h1>
                        <p className='home__slogan'>Meet our superstars</p>
                        </div>
                    </div>
                </section>
        <section className='team__section'>
            <h1 className='team__heading'>Meet Our Proffesionals</h1>
            <p className='team__slogan'>We don't stop at hiring the best! We empower them to become even better. Our commitment to excellence extends to ongoing training and development programs that keep our specialists at the forefront of industry trends and techniques.</p>
        </section>
        <section className='team__section'>
            <div className='team__container'>
                <div className='team__member'>
                {/* <div className='team__image team__image--kevin'>
                </div> */}
                <img className='team__image' alt='Kevin Keene' src={require('../../assets/images/worker1.png')}/>
                    <div className='team__content'>
                        <h3 className='team__name'>Kevin Keene</h3>
                        <p className='team__description'>Kevin has over 2,000,000 ft.² of residential construction experience and 25 years dedicated to cabinetry design and finishing. His experience and passion creates a unique one of a kind result<br/>Constructor license: CGC1526225</p>
                    </div>
                </div>
                <div className='team__member'>
                <img className='team__image' alt=' Rodrigo' src={require('../../assets/images/worker2.png')}/>
                {/* <div className='team__image team__image--rodrigo'>
                </div> */}
                    <div className='team__content'>
                        <h3 className='team__name'>Rodrigo De Castro</h3>
                        <p className='team__description'>Rodrigo de Castro, is a seasoned professional with over a decade in the construction industry. He specializes in creating exquisite custom cabinets and providing top-tier workmanship.
Rodrigo thrives on pushing the boundaries of design, making him the ideal choice for discerning and high-end clients.  Rodrigo's artistry transforms your vision into reality, crafting opulent spaces. </p>
                    </div>
                </div>
                <div className='team__member'>
                    <img className='team__image' alt=' Will' src={require('../../assets/images/worker3.png')}/>
                {/* <div className='team__image team__image--renaldo'>
                </div> */}
                    <div className='team__content'>
                        <h3 className='team__name'>Willie Brown</h3>
                        <p className='team__description'>Is a Licensed Roofing Contractor CCC13332415 with 35 Years Roofing Experience in Florida.  Willie has both extensive residential and commercial experience and has completed millions of square feet of roofing for Associations.  His passion for roofing shows in our daily results!</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </>
);
}

export default Team;