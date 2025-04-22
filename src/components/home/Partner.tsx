import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import MasterCad from '../../assets/home/payment/mastercad.svg'
import Mtn from '../../assets/home/payment/mtn.svg'
import Moov from '../../assets/home/payment/moov.svg'
import Wave from '../../assets/home/payment/wave.svg'
import Visa from '../../assets/home/payment/visa.svg'
import Orange from '../../assets/home/payment/orange.svg'
import Paypal from '../../assets/home/payment/paypal.svg'

const Partner = () => {

    const logos = [
        {
          id: "Orange",
          description: "Orange",
          image: Orange,
          className: "h-10 w-auto",
        },
        {
          id: "Paypal",
          description: "Paypal",
          image: Paypal,
          className: "h-10 w-auto",
        },
        {
          id: "Visa",
          description: "Visa",
          image: Visa,
          className: "h-10 w-auto",
        },
        {
          id: "Wave",
          description: "Wave",
          image: Wave,
          className: "h-10 w-auto",
        },
        {
          id: "Mastercad",
          description: "Mastercad",
          image: MasterCad,
          className: "h-10 w-auto",
        },
        {
          id: "Mtn",
          description: "Mtn",
          image: Mtn,
          className: "h-4 w-auto",
        },
        {
          id: "Moov",
          description: "Moov",
          image: Moov,
          className: "h-10 w-auto",
        },
    ];

    const [emblaRef] = useEmblaCarousel ({loop: true}, [
        AutoScroll({ playOnInit: true })
    ])

    return (
        <div className='embla py-10'>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {
                        logos.map((item) => (
                            <div className='embla__slide' key={item.id}>
                                <img 
                                    src={item.image}
                                    alt={item.description}
                                    className={item.className}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Partner