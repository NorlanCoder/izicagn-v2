import Ilustration from '../assets/detail_article.png'
import Aplose from '../assets/aplose.png'

const Article = () => {
  return (
    <div className=' px-4'>
      <div className='flex flex-col items-center'>
        <h1 className="text-3xl md:text-[42px] max-w-[937px] font-semibold leading-[122%] tracking-[-2px] pb-10">Comment formuler sa cagnotte et gagner la confiance des donateurs</h1>
        <img src={Ilustration} alt="" />
        <div>
          <div className='flex space-x-10 scroll-px-3 items-start py-14'>
            <div className='bg-[#EEF0F0] p-2 rounded-full'><img src={Aplose} alt="" /></div>
            <div className='max-w-[938px] space-y-[56px]'>
              <div className=' space-y-6'>
                <p>Lorem ipsum dolor sit amet consectetur. Tempor quis urna consectetur malesuada rutrum donec cras ultrices. Id suscipit tellus tortor odio volutpat velit est. Vel laoreet eu in porttitor eget auctor quis sed a. Scelerisque eget lacus vel augue suscipit. Turpis faucibus ornare platea ultricies elit massa porttitor adipiscing. Pellentesque eget aliquam ullamcorper pretium pharetra. Varius non quam nisi ac lobortis augue. Enim in id vel leo duis libero enim nulla fermentum. Luctus tellus placerat consequat pulvinar magna accumsan tristique in auctor. Id porttitor lorem commodo dui praesent leo etiam quis.</p>
                <div>
                  <p>Enim elementum blandit tempus eu amet. Nunc vitae quam quam quam egestas neque enim. Facilisi mattis proin amet interdum id neque. Luctus habitant risus pharetra suspendisse sit nibh eu in. Interdum luctus cum id tristique faucibus morbi enim nisi.</p>
                  <p>Arcu libero ipsum nulla diam diam augue neque vitae. Dolor platea pharetra eget consectetur aliquam vitae netus arcu. Morbi enim tincidunt imperdiet odio. Mauris faucibus etiam quis eget elementum. Odio et felis enim sit massa. Fermentum a facilisi ligula id tempor tristique aliquam. Mattis blandit nullam integer amet elit in tortor faucibus lacus. Semper vestibulum arcu viverra semper pellentesque pellentesque adipiscing nibh. Risus id venenatis amet etiam semper ullamcorper tristique aenean cras. Vitae dignissim nisi ligula mauris amet.</p>
                </div>
                <p>Congue nunc fusce nisi in nulla tellus eu tempus. Diam phasellus sit nunc sed viverra justo. Lacus quis ut cras lacinia. Turpis ut purus dui lacus est. Erat elit lectus viverra blandit enim donec potenti scelerisque. Commodo ac vulputate sociis ridiculus vestibulum cursus eros sapien bibendum. Cursus mi integer eget quam a.</p>
              </div>
              <div className=' space-y-6'>
                <p>Lorem ipsum dolor sit amet consectetur. Tempor quis urna consectetur malesuada rutrum donec cras ultrices. Id suscipit tellus tortor odio volutpat velit est. Vel laoreet eu in porttitor eget auctor quis sed a. Scelerisque eget lacus vel augue suscipit. Turpis faucibus ornare platea ultricies elit massa porttitor adipiscing. Pellentesque eget aliquam ullamcorper pretium pharetra. Varius non quam nisi ac lobortis augue. Enim in id vel leo duis libero enim nulla fermentum. Luctus tellus placerat consequat pulvinar magna accumsan tristique in auctor. Id porttitor lorem commodo dui praesent leo etiam quis.</p>
                <div>
                  <p>Enim elementum blandit tempus eu amet. Nunc vitae quam quam quam egestas neque enim. Facilisi mattis proin amet interdum id neque. Luctus habitant risus pharetra suspendisse sit nibh eu in. Interdum luctus cum id tristique faucibus morbi enim nisi.</p>
                  <p>Arcu libero ipsum nulla diam diam augue neque vitae. Dolor platea pharetra eget consectetur aliquam vitae netus arcu. Morbi enim tincidunt imperdiet odio. Mauris faucibus etiam quis eget elementum. Odio et felis enim sit massa. Fermentum a facilisi ligula id tempor tristique aliquam. Mattis blandit nullam integer amet elit in tortor faucibus lacus. Semper vestibulum arcu viverra semper pellentesque pellentesque adipiscing nibh. Risus id venenatis amet etiam semper ullamcorper tristique aenean cras. Vitae dignissim nisi ligula mauris amet.</p>
                </div>
                <p>Congue nunc fusce nisi in nulla tellus eu tempus. Diam phasellus sit nunc sed viverra justo. Lacus quis ut cras lacinia. Turpis ut purus dui lacus est. Erat elit lectus viverra blandit enim donec potenti scelerisque. Commodo ac vulputate sociis ridiculus vestibulum cursus eros sapien bibendum. Cursus mi integer eget quam a.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article