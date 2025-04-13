
import Footer from '../components/general/footer'
import Navbar from '../components/general/navbar'
import ZigzagText from '../assets/home/deco/zigzag.svg'

const Home = () => {
    return (
        <div>
            <Navbar /> 
            <div className='h-[80vh] flex flex-row items-center justify-center'>
                
                <section>
                    
                    <div>
                        <h1 className='text-[56px] text-[#0C0C44] font-bold flex md:flex-col flex-row text-center leading-14 '><span>La collecte de</span> <span className='text-[#07AED8]'> <span className=' text-[#0C0C44]'>fonds</span> éfficace <span className=' text-[#0C0C44]'>et</span> sécurosé</span></h1>
                        <p className='flex justify-center'><img src={ZigzagText} alt="" /></p>
                    </div>
                    
                    <div className='flex justify-center mt-5'>
                        <p className='text-center md:w-2/3'>Izicagn vous accompagne pour vos collectes de dons en ligne quelque soit votre projet. Créez et gérez des campagnes de collecte de fonds facilement et efficacement.</p>
                    </div>

                </section>
            </div>

            <Footer />

        </div>
    )
}

export default Home