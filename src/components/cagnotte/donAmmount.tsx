import { DonAmmountType } from '../../utils/type'

type DonAmmountProps = {
    item: DonAmmountType
}

const DonAmmount = ({item}: DonAmmountProps) => {
    return (
        <div className='py-[12px] px-[24px] border border-[#E8E8EC] rounded-[10px] flex flex-row justify-center self-baseline cursor-pointer items-center bg-white hover:bg-[#FBF5F3] '>
            <h1 className='text-[15px] text-black font-semibold '>{item.amount} XOF</h1>
        </div>
    )
}

export default DonAmmount