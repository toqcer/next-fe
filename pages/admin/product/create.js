import { BiCamera } from 'react-icons/bi';
import AdminTemplates from '@components/templates/admin/AdminTemplates';


function ProductCreate() {
  return (
    <AdminTemplates title="product create">
        <div className='bg-white mt-12 w-full px-7 py-8 rounded-lg'>
            <h3 className='text-primary font-bold text-lg'>Product Photo</h3>
            <div className="flex space-x-2 my-6">
                <div className='h-40 w-40 flex justify-center items-center border-dashed border-2 border-muted'>
                    <img src="/dummy/hoodie.jpg" className='w-full object-cover' alt="product-pict" />
                </div>
                <div className='h-40 w-40 flex justify-center items-center border-dashed border-2 border-muted'>
                    <BiCamera size={36} className='text-muted'/>
                </div>
            </div>
        </div>
    </AdminTemplates>
  )
}

export default ProductCreate;