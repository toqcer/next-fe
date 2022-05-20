import { BiCamera } from 'react-icons/bi';
import Image from 'next/image';

import AdminTemplates from '@components/templates/admin/AdminTemplates';
import { Button, Input, Label, TextArea } from '@components/atoms';

function ProductCreate() {


  return (
    <AdminTemplates title="product create">
        <div className='bg-white mt-12 w-full px-10 py-8 rounded-lg'>
            <h3 className='text-primary font-bold text-lg'>Product Photo</h3>
            <div className="flex space-x-4 my-6">
                <div className='h-40 w-40 flex justify-center items-center border-dashed border-2 border-muted relative object-cover'>
                    <Image 
                        src="/dummy/hoodie.jpg" 
                        alt="product-pict"
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
                <div className='h-40 w-40 flex justify-center items-center border-dashed border-2 border-muted relative object-cover'>
                    <BiCamera size={36} className='text-muted'/>
                </div>
            </div>
            <div className='my-6 flex'>
                <Label htmlFor='title' text="Product Supplier"/>
                <Input 
                    type="text"
                    id="title"
                    placeholder="Product Title"
                />
            </div>
            <div className='my-6 flex'>
                <Label htmlFor='supplier' text="Product Supplier"/>
                <Input 
                    type="text"
                    id="supplier" 
                    placeholder="Product Supplier"
                />
            </div>
            <div className='my-6 flex'>
                <Label htmlFor='desc' text="Product Description"/>
                <TextArea 
                    type="text"
                    id="desc"
                    placeholder="Product Description"
                />
            </div>
            <div className="my-6 flex gap-4">
                <div className='flex'>
                    <Label htmlFor='purchase' text="Purchase"/>
                    <Input 
                        type="number"
                        id="purchase"
                        placeholder="text-field"
                    />
                </div>
                <div className='flex'>
                    <Label htmlFor='price' text="price"/>
                    <Input 
                        type="number"
                        id="price"
                        placeholder="text-field"
                    />
                </div>
                <div className='flex'>
                    <Label htmlFor='markup' text="markup"/>
                    <Input 
                        type="number"
                        id="markup"
                        placeholder="text-field"
                    />
                </div>
            </div>
            <div className="my-6 flex gap-4">
                <div className='flex flex-1'>
                    <Label htmlFor='stock' text="Stock"/>
                    <Input 
                        type="number"
                        id="stock"
                        placeholder="text-field"
                    />
                </div>
                <div className='flex flex-1'>
                    <Label htmlFor='code' text="Code"/>
                    <Input 
                        type="number"
                        id="code"
                        placeholder="text-field"
                    />
                </div>
                <div className="flex-1"></div>
            </div>
            <div className="mx-auto w-48 mt-10 ">
                <Button className="rounded-sm text-xs">
                    Create
                </Button>  
            </div>
        </div>
    </AdminTemplates>
  )
}

export default ProductCreate;