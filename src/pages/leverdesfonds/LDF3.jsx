import Navbar from '/src/components/general/navbar.tsx'
import GobackComponent from '/src/components/general/gobackComponent.tsx'
import Frame from "/src/assets/leverdefond/Frame1000002142(1).png"
import Background from "/src/assets/leverdefond/Background2.png"
import Footer from '/src/components/general/footer';

const LDFS = () => {
 
    return (
        <>
            <div className=" px-6">
                <Navbar />
                <div className='md:px-4'><GobackComponent/></div>
                <div className="flex flex-col justify-center items-center space-y-6">
                    <h1 className="text-center text-4xl md:text-[54px]">Qui peut lever des fonds sur izicagn ?</h1>
                    <img src={Frame} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col space-y-8 max-w-[938px] py-20">
                        <p className="text-[#555B6D]">Izicagn offre une opportunité unique pour les investisseurs, qu’ils soient des particuliers ou des entreprises, de soutenir des projets qui leur tiennent à cœur, tout en contribuant au développement de l’économie locale ou à des causes sociales. En tant que particulier, vous pouvez investir dans des projets qui vous inspirent, qu’il s’agisse de soutenir un entrepreneur prometteur, d'aider au financement d'une petite entreprise ou de contribuer à une initiative sociale ayant un impact positif. La plateforme vous permet de diversifier vos investissements en choisissant parmi une grande variété de projets. De plus, les risques sont minimisés grâce à une gestion rigoureuse des campagnes, vous permettant d’investir en toute confiance.</p>
                        <p className="text-[#555B6D]">Izicagn offre une opportunité unique pour les investisseurs, qu’ils soient des particuliers ou des entreprises, de soutenir des projets qui leur tiennent à cœur, tout en contribuant au développement de l’économie locale ou à des causes sociales. En tant que particulier, vous pouvez investir dans des projets qui vous inspirent, qu’il s’agisse de soutenir un entrepreneur prometteur, d'aider au financement d'une petite entreprise ou de contribuer à une initiative sociale ayant un impact positif. La plateforme vous permet de diversifier vos investissements en choisissant parmi une grande variété de projets. De plus, les risques sont minimisés grâce à une gestion rigoureuse des campagnes, vous permettant d’investir en toute confiance.</p>
                    </div>
                    <div className="max-w-[938px] flex flex-col space-y-8 pb-20">
                        <h2 className="text-[36px] font-extrabold">Pays couverts</h2>
                        <p className="text-[#555B6D]">Lorem ipsum dolor sit amet consectetur. Tempor quis urna consectetur malesuada rutrum donec cras ultrices. Id suscipit tellus tortor odio volutpat velit est. Vel laoreet eu in porttitor eget auctor quis sed a. Scelerisque eget lacus vel augue suscipit. Turpis faucibus ornare platea ultricies elit massa porttitor adipiscing. Pellentesque eget aliquam ullamcorper pretium pharetra. Varius non quam nisi ac lobortis augue. Enim in id vel leo duis libero enim nulla fermentum. Luctus tellus placerat consequat pulvinar magna accumsan tristique in auctor. Id porttitor lorem commodo dui praesent leo etiam quis.</p>
                        <img src={Background} alt="" />
                        <p className="text-[#555B6D]">Lorem ipsum dolor sit amet consectetur. Tempor quis urna consectetur malesuada rutrum donec cras ultrices. Id suscipit tellus tortor odio volutpat velit est. Vel laoreet eu in porttitor eget auctor quis sed a. Scelerisque eget lacus vel augue suscipit. Turpis faucibus ornare platea ultricies elit massa porttitor adipiscing. Pellentesque eget aliquam ullamcorper pretium pharetra. Varius non quam nisi ac lobortis augue. Enim in id vel leo duis libero enim nulla fermentum. Luctus tellus placerat consequat pulvinar magna accumsan tristique in auctor. Id porttitor lorem commodo dui praesent leo etiam quis.</p>
                       <div>
                            <p className="text-[#555B6D]">Enim elementum blandit tempus eu amet. Nunc vitae quam quam quam egestas neque enim. Facilisi mattis proin amet interdum id neque. Luctus habitant risus pharetra suspendisse sit nibh eu in. Interdum luctus cum id tristique faucibus morbi enim nisi.</p>
                            <p className="text-[#555B6D]">Arcu libero ipsum nulla diam diam augue neque vitae. Dolor platea pharetra eget consectetur aliquam vitae netus arcu. Morbi enim tincidunt imperdiet odio. Mauris faucibus etiam quis eget elementum. Odio et felis enim sit massa. Fermentum a facilisi ligula id tempor tristique aliquam. Mattis blandit nullam integer amet elit in tortor faucibus lacus. Semper vestibulum arcu viverra semper pellentesque pellentesque adipiscing nibh. Risus id venenatis amet etiam semper ullamcorper tristique aenean cras. Vitae dignissim nisi ligula mauris amet.</p>
                        </div>
                        <p className="text-[#555B6D]">Congue nunc fusce nisi in nulla tellus eu tempus. Diam phasellus sit nunc sed viverra justo. Lacus quis ut cras lacinia. Turpis ut purus dui lacus est. Erat elit lectus viverra blandit enim donec potenti scelerisque. Commodo ac vulputate sociis ridiculus vestibulum cursus eros sapien bibendum. Cursus mi integer eget quam a.</p>
                        </div>
                </div>
                    <div className='px-5'>
                        <Footer/> 
                    </div>
            </div>
        </>
    )
}

export default LDFS
