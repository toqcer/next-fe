import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import getProductDetail from 'utils/api/getProductDetail';
import deleteProduct from 'utils/api/deleteProduct';
import { numberFormatToIdr } from '@src/helpers/numberFormatter';

import AdminTemplates from 'layouts/AdminTemplates';
import { LiDash, Button } from '@components/atoms';
import { DeletedModal } from '@components/molecules';

// <-------------------------------------------------------------------

export default function ProductShow({ productDetail }) {
  const router = useRouter();
  const { data } = productDetail;
  const [isShown, setIsShown] = useState(false);

  const {
    code,
    id,
    price,
    stock,
    markup_price: markupPrice,
    purchase_price: purchasePrice,
    title,
    description,
  } = data;

  const handleDeleteProduct = async () => {
    // do something here
    try {
      await Promise.any([deleteProduct(id)]);
      router.push('/admin/product/list');
    } catch (err) {
      // handle error later !!
      console.error(err);
    }
  };

  return (
    <>
      <DeletedModal
        isShown={isShown}
        setModalShown={setIsShown}
        cb={() => handleDeleteProduct()}
      />
      <AdminTemplates title="product show">
        <div className="bg-white  mt-12 w-full px-10 py-8 rounded-lg">
          <div className="lg:flex gap-x-12">
            <div className="h-48 w-48  flex flex-shrink-0 justify-center items-center border-muted relative object-cover">
              <Image
                src="/dummy/hoodie.jpg"
                alt="product-pict"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-bold ">{title}</h2>
              <div className="flex items-center my-6">
                <h1 className="font-bold text-orange text-4xl">
                  {numberFormatToIdr(price)}
                </h1>
                <div className="ml-8">
                  <p className="text-sm leading-4">
                    Purchase{' '}
                    <span className="font-bold">
                      {numberFormatToIdr(purchasePrice)}
                    </span>
                  </p>
                  <p className="text-sm leading-4">
                    Markup{' '}
                    <span className="font-bold">
                      {numberFormatToIdr(markupPrice)}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-sm">
                Suplier <span className="font-bold">PT.Roughneck</span>
              </p>
              <div className="flex my-6 ">
                <p className="text-sm">
                  Stock <span className="font-bold">{stock}</span>
                </p>
                <p className="ml-24 text-sm">
                  Product Code <span className="font-bold">{code}</span>
                </p>
              </div>
              <small>this description from API</small>
              <p>{description}</p>

              <small className="mt-8 block">
                This is dummy from FIGMA please delete me later
              </small>
              <div>
                <p>Material : Cotton Fleece</p>
                <p>Size : S M L XL XXL</p>
                <p>Status : Ready Stock</p>
                <p>Kebijakan pengembalian dan penukaran barang :</p>
                <ul className="list">
                  <LiDash>
                    Barang boleh di tukar max tiga hari setalah penerimaan
                    barang selama hangtag label masih dipasang.
                  </LiDash>
                  <LiDash>
                    Penukaran barang karena kesalahan kami ongkir akan kami
                    tanggung
                  </LiDash>
                </ul>
                <p>
                  Jika paket sudah tiba nanti. silahkan record video unboxing
                  guna sebagai bukti saat ada kendala pada produk tersebut
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[400px] flex gap-x-5 mt-12">
            <Button className="rounded-sm py-5">Update</Button>
            <Button
              className="rounded-sm py-5"
              color="bg-danger"
              onClick={() => setIsShown(true)}
            >
              Delete
            </Button>
          </div>
        </div>
      </AdminTemplates>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const {
    params: { id },
  } = ctx;
  const { data: productDetail } = await Promise.any([getProductDetail(id)]);
  if (!productDetail) {
    return {
      notFound: true,
    };
  }

  return { props: { productDetail } };
}
