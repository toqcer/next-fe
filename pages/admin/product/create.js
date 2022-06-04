import { useState } from "react";
import { BiCamera } from "react-icons/bi";
import axios from "axios";

import { ImgUpload } from "@components/molecules";
import AdminTemplates from "@components/templates/admin/AdminTemplates";
import { Button, Input, Label, TextArea } from "@components/atoms";

function ProductCreate() {
  const [imgDataList, setImgDataList] = useState([]);
  const [imgPreviews, setImgPreviews] = useState([]);
  const [productCode, setProductCode] = useState("");
  const [title, setTitle] = useState("");
  const [supplier, setSupplier] = useState("");
  const [description, setDescription] = useState("");
  const [purchase, setPurchase] = useState(0);
  const [price, setPrice] = useState(0);
  const [markup, setMarkup] = useState(0);
  const [stock, setStock] = useState(0);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeSupplier = (e) => {
    setSupplier(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangePurchase = (e) => {
    setPurchase(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChageMarkup = (e) => {
    setMarkup(e.target.value);
  };

  const handleChangeStock = (e) => {
    setStock(e.target.value);
  };

  const handleChangeProductCode = (e) => {
    setProductCode(e.target.value);
  };

  const handleInputChange = ({ target }) => {
    const files = target.files[0];
    if (!files) return;
    if (imgDataList.length < 10) {
      const imgPreview = URL.createObjectURL(files);
      setImgDataList([...imgDataList, files]);
      setImgPreviews([...imgPreviews, imgPreview]);
    }
  };

  const handleSubmit = async () => {
    const form = new FormData();
    console.log("jere");
    imgDataList.forEach((item) => {
      form.append("files", item);
    });
    form.append("code", productCode);
    form.append("title", title);
    form.append("supplier", supplier);
    form.append("description", description);
    form.append("purchase", purchase);
    form.append("stock", stock);
    form.append("price", price);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post("/api/posts/products", form, config);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminTemplates title="product create">
      <div className="bg-white mt-12 w-full px-10 py-8 rounded-lg">
        <h3 className="text-primary font-bold text-lg">Product Photo</h3>
        <div className="flex flex-wrap space-x-4 space-y-4 my-6">
          <input
            className="absolute w-0 h-0 -z-50 invisible"
            type="file"
            id="imgInput"
            multiple
            onChange={handleInputChange}
          />
          {imgPreviews.length < 10 && (
            <label className="cursor-pointer" htmlFor="imgInput">
              <div className="h-40 w-40 flex justify-center items-center border-dashed border-2 border-muted relative object-cover">
                <BiCamera size={36} className="text-muted" />
              </div>
            </label>
          )}
          {imgPreviews.length > 0 &&
            imgPreviews.map((image, idx) => (
              <ImgUpload key={idx} src={image} />
            ))}
        </div>
        <div className="my-6 flex">
          <Label htmlFor="title" text="Product Supplier" />
          <Input
            value={title}
            onChange={handleChangeTitle}
            type="text"
            id="title"
            placeholder="Product Title"
          />
        </div>
        <div className="my-6 flex">
          <Label htmlFor="supplier" text="Product Supplier" />
          <Input
            type="text"
            value={supplier}
            onChange={handleChangeSupplier}
            id="supplier"
            placeholder="Product Supplier"
          />
        </div>
        <div className="my-6 flex">
          <Label htmlFor="desc" text="Product Description" />
          <TextArea
            type="text"
            value={description}
            onChange={handleChangeDescription}
            id="desc"
            placeholder="Product Description"
          />
        </div>
        <div className="my-6 flex gap-4">
          <div className="flex">
            <Label htmlFor="purchase" text="Purchase" />
            <Input
              type="number"
              value={purchase}
              onChange={handleChangePurchase}
              id="purchase"
              placeholder="text-field"
            />
          </div>
          <div className="flex">
            <Label htmlFor="price" text="price" />
            <Input
              type="number"
              value={price}
              onChange={handleChangePrice}
              id="price"
              placeholder="text-field"
            />
          </div>
          <div className="flex">
            <Label htmlFor="markup" text="markup" />
            <Input
              type="number"
              value={markup}
              onChange={handleChageMarkup}
              id="markup"
              placeholder="text-field"
            />
          </div>
        </div>
        <div className="my-6 flex gap-4">
          <div className="flex flex-1">
            <Label htmlFor="stock" text="Stock" />
            <Input
              type="number"
              value={stock}
              onChange={handleChangeStock}
              id="stock"
              placeholder="text-field"
            />
          </div>
          <div className="flex flex-1">
            <Label htmlFor="code" text="Code" />
            <Input
              type="text"
              id="code"
              value={productCode}
              onChange={handleChangeProductCode}
              placeholder="text-field"
            />
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="mx-auto w-48 mt-10 ">
          <Button onClick={handleSubmit} className="rounded-sm text-xs">
            Create
          </Button>
        </div>
      </div>
    </AdminTemplates>
  );
}

export default ProductCreate;
