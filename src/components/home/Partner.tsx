import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import MasterCad from '../../assets/home/payment/mastercard.png'
import Mtn from '../../assets/home/payment/mtn.png'
import Moov from '../../assets/home/payment/moov.png'
import Wave from '../../assets/home/payment/wave.png'
import Visa from '../../assets/home/payment/visa.png'
import Orange from '../../assets/home/payment/orange.png'
import Paypal from '../../assets/home/payment/paypal.png'

const Partner = () => {

    const logos = [
        {
          id: "Orange",
          description: "Orange",
          image: Orange,
          className: "h-20 w-auto",
        },
        {
          id: "Paypal",
          description: "Paypal",
          image: Paypal,
          className: "h-12 w-auto mt-4",
        },
        {
          id: "Visa",
          description: "Visa",
          image: Visa,
          className: "h-16 mt-2 w-auto",
        },
        {
          id: "Wave",
          description: "Wave",
          image: Wave,
          className: "h-18 w-auto",
        },
        {
          id: "Mastercad",
          description: "Mastercad",
          image: MasterCad,
          className: "h-18 w-auto",
        },
        {
          id: "Mtn",
          description: "Mtn",
          image: Mtn,
          className: "h-20 w-auto",
        },
        {
          id: "Moov",
          description: "Moov",
          image: Moov,
          className: "h-20 w-auto",
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