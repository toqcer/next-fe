import React from "react";
import Image from "next/image";

import getProductDetail from "@src/api/getProductDetail";
import getDataProduct from "@src/api/getDataProduct";
import AdminTemplates from "@components/templates/admin/AdminTemplates";
import { LiDash, Button } from "@components/atoms";

const numberFormatToIdr = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
};

const ProductShow = ({ productDetail }) => {
  const { data } = productDetail;
  const {
    code,
    price,
    stock,
    markup_price: markupPrice,
    purchase_price: purchasePrice,
    title,
    description,
  } = productDetail.data;

  console.log(data);
  // return (<pre>{JSON.stringify(data, null, 2)}</pre>);
  return (
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
                  Purchase{" "}
                  <span className="font-bold">
                    {numberFormatToIdr(purchasePrice)}
                  </span>
                </p>
                <p className="text-sm leading-4">
                  Markup{" "}
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
                  Barang boleh di tukar max tiga hari setalah penerimaan barang
                  selama hangtag label masih dipasang.
                </LiDash>
                <LiDash>
                  Penukaran barang karena kesalahan kami ongkir akan kami
                  tanggung
                </LiDash>
              </ul>
              <p>
                Jika paket sudah tiba nanti. silahkan record video unboxing guna
                sebagai bukti saat ada kendala pada produk tersebut
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto w-[400px] flex gap-x-5 mt-12">
          <Button className="rounded-sm py-5">Update</Button>
          <Button className="rounded-sm py-5 bg-danger">Delete</Button>
        </div>
      </div>
    </AdminTemplates>
  );
};

export async function getStaticPaths() {
  const { data } = await Promise.any([getDataProduct({})]);
  const paths = data.map((product) => {
    return { params: { id: `${product.id}` } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data: productDetail } = await Promise.any([
    getProductDetail(params.id),
  ]);

  return { props: { productDetail } };
}

export default ProductShow;
