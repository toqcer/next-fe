import { Button } from '@components/atoms';
import { BiChevronLeft, BiTrashAlt } from 'react-icons/bi';

const DeletedModal = () => {
  return (
    <div className="z-[999] fixed flex items-center justify-center top-0 left-0 w-full h-full bg-black/50">
        <div className="max-w-md w-full bg-white px-5 py-3 rounded-lg shadow-lg">
            <BiChevronLeft className="cursor-pointer" size={24} />
            <div className='space-y-4 mb-28'>
                <BiTrashAlt className='mx-auto block w-12 h-12 text-light-danger'/>
                <h3 className='font-bold text-orange text-center text-xl'>DELETE CONFIRMATION</h3>
                <p className='text-sm'>This product will permanently deleted and you won’t be able to see it again.</p>
            </div>
            <div className="flex gap-4 mb-4">
                <Button className="text-black rounded-sm py-4 text-sm">yes</Button>
                <Button className="!bg-light-danger/90 hover:!bg-light-danger text-sm rounded-sm py-4">no</Button>
            </div>
        </div>
    </div>
  )
}

export default DeletedModal