import { BiCamera } from 'react-icons/bi';
import Image from 'next/image';

import AdminTemplates from '@components/templates/admin/AdminTemplates';
import { Input, TextArea } from '@components/atoms';

function ProductCreate() {
  return (
    <AdminTemplates title="product create">
        <div className='bg-white mt-12 w-full px-10 py-8 rounded-lg'>
            <h3 className='text-primary font-bold text-lg'>Product Photo</h3>
            <div className="flex space-x-2 my-6">
                <div className='h-40 w-40 flex justify-center items-center border-dashed border-2 border-muted relative object-cover'>
                    <Image 
                        src="/dummy/hoodie.jpg" 
                        alt="product-pict" 
                        layout='fill'
                    />
                </div>
                <div className='h-40 w-40 flex justify-center items-center border-dashed border-2 border-muted relative object-cover'>
                    <BiCamera size={36} className='text-muted'/>
                </div>
            </div>
            <div className='my-6'>
                <label className='flex items-center'>
                    <span className='capitalize text-primary font-bold text-lg w-64'>Product Title</span> 
                    <Input 
                        type="text" 
                        placeholder="Product Title"
                    />
                </label>
            </div>
            <div className='my-6'>
                <label className='flex items-center'>
                    <span className='capitalize text-primary font-bold text-lg w-64'>Product Supplier</span> 
                    <Input 
                        type="text" 
                        placeholder="Product Supplier"
                    />
                </label>
            </div>
            <div className='my-6'>
                <label className='flex'>
                    <span className='capitalize text-primary font-bold text-lg w-64'>Product Description</span> 
                    <TextArea 
                        type="text" 
                        placeholder="Product Description"
                    />
                </label>
            </div>
            <div className="my-6">
                <div className='flex'>
                    <label htmlFor='purchase' className='capitalize text-primary font-bold text-lg w-64'>
                        Purchase
                    </label>
                    <Input 
                        type="text"
                        id="purchase"
                        placeholder="text-field"
                    />
                </div>
            </div>
            
        </div>
    </AdminTemplates>
  )
}

export default ProductCreate;