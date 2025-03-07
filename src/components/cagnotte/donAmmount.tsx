import { DonAmmountType } from '../../utils/type'

type DonAmmountProps = {
    item: DonAmmountType
}

const DonAmmount = ({item}: DonAmmountProps) => {
    return (
        <div className='py-[12px] px-[14px] border rounded-[10px] flex flex-row justify-center cursor-pointer items-center bg-white hover:bg-[#FBF5F3] '>
            <h1 className='text-[15px] '>{item.amount} XOF</h1>
        </div>
    )
}

export default DonAmmount