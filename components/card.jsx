import Image from 'next/image'

const Card = ({icon, title, analytics}) => {
  return (
    <div className='bg-white/45 mt-5 w-2/6 h-28 p-3 cursor-pointer shadow-sm hover:shadow-md flex flex-col mx-2 items-start justify-between rounded-md'>
        <Image src={icon} alt='icon' className='w-8'/>
        <small className='text-bold uppercase mt-1 font-medium'>{title}</small>
        <p className='font-semibold text-bold text-2xl'>{analytics}</p>
    </div>
  )
}

export default Card