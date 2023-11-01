import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@components/AdminProductDetail/adminProductDetail.module.css'
import { stateProducts, listSingleProduct } from '@/redux/slices/productSlice'
import { useSelector, useDispatch } from 'react-redux'



const AdminProductDetail = ({action}) => {
  const { product } = useSelector(stateProducts)
  const [image, setImage] = useState(null)
  const [file, setFile] = useState (null)
  const [type, setType] = useState('')
  const dispatch = useDispatch()

  const urlUpdate = `http://localhost:8080/api/products/${product._id}`
  const urlAdd = "http://localhost:8080/api/products/"



  const [currentStockS, setCurrentStockS] = useState(0)
  const [currentStockM, setCurrentStockM] = useState(0)
  const [currentStockL, setCurrentStockL] = useState(0)
  const [currentStockXL, setCurrentStockXL] = useState(0)

  useEffect(() => {
      const getStockBySize = (data) => {
      const stockBySize = {};
      data.productSizes?.forEach(item => {
        stockBySize[item.size] = item.stock
      })

      return stockBySize
    }
    const stockBySize = getStockBySize(product)

    setCurrentStockS(stockBySize.S)
    setCurrentStockM(stockBySize.M)
    setCurrentStockL(stockBySize.L)
    setCurrentStockXL(stockBySize.XL)

  }, [])

  const handleType = (e) => {
    const choosedType = e.target.value;
    setType(choosedType)
  }

  const readFile = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => setImage(e.target.result)
    reader.readAsDataURL(file)
  }

  const handleChangeImg = (e) => {
    readFile(e.target.files[0])
    setFile(e.target.files[0])
    
  }

  const handleChangeStock = (event) => {

    const { value, name } = event.target
    
    if(name === "currentStockS"){
      setCurrentStockS(parseInt(value))
    }
    if(name === "currentStockM"){
      setCurrentStockM(parseInt(value))
    }
    if(name === "currentStockL"){
      setCurrentStockL(parseInt(value))
    }
    if(name === "currentStockXL"){
      setCurrentStockXL(parseInt(value))
    }

    const currentSotck = [
      {
        size: "S",
        stock: currentStockS,
      },
      {
        size: "M",
        stock: currentStockM,
      },
      {
        size: "L",
        stock: currentStockL,
      },
      {
        size: "XL",
        stock: currentStockXL,
      },
    ]

    const updatedProduct = {
      ...product,
      productSizes: currentSotck
    }


    dispatch(listSingleProduct(updatedProduct))

  };

  


  const handleChange = (e) => {
    const {name, value} = e.target

    const updatedProduct = {
      ...product,
      [name]: value,
    }

    console.log(updatedProduct);

    dispatch(listSingleProduct(updatedProduct))
  }

  const fetchUpdateProduct = async (url, data) => {

    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: data, 
      });
      const res = await response.json();
      return res
    } catch (error) {
      alert('Error en fetchImg', error)
    }
  }
  const fetchAddProduct = async (url, data) => {
    console.log("Entré al fetchAdd");
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: data, 
      });
      const res = await response.json();
      console.log('res', res);
      return res
    } catch (error) {
      alert('Error en fetchImg', error)
    }
  }

  const handleSubmit = async (e, action) => {
    e.preventDefault()

    const data = new FormData

    data.append('productName', product.productName);
    data.append('productPrice', product.productPrice);
    data.append('productType', product.productType);
    data.append('productStock', product.productStock);
    data.append('productFeatured', product.productFeatured);

    if((image && action === "add") || (image && action === "edit")){
      data.append('productImage', file, file.name)
    }
    if(!image && action === "add"){
      data.append('productImage', '/no_img.jpg')
    }
    if(!image && action === "edit"){
      data.append('productImage', product.productImage)
    }

    console.log("kjasndfjjn");

    /* product.productSizes.forEach((sizeObj, index) => {
      const sizeKey = `productSizes[${index}]`;
      data.append(`${sizeKey}[size]`, sizeObj.size);
      data.append(`${sizeKey}[stock]`, sizeObj.stock);
    }); */

    if(action === "edit"){
      await fetchUpdateProduct(urlUpdate, data)
      return alert('editar producto')
    }

    if(action ==="add"){
      await fetchAddProduct(urlAdd, data)
      return alert('agregar producto')
    }

}

  return (
    <div className={styles.add_product_container}>


        <form className={styles.admin_product}>

          <div className={styles.image_group}>
            <h2>PRODUCT IMAGE</h2>
            
          {!image && action === "edit"
          ? <Image 
              className={styles.product_img}
              src={product.productImage}
              alt={product.productType}
              width={300}
              height={300}
              priority
            />
          : !image &&
            <Image 
              className={styles.product_img}
              src='/no_img.jpg'
              alt='No Image'
              width={300}
              height={300}
              priority
            />
            }
          {image && <Image 
              className={styles.product_img}
              src={image}
              alt={'img'}
              width={300}
              height={300}
              priority
            />}
            <input
              type="file"
/*               name="file" */
              multiple={true}
              accept='image/*'
              onChange={ handleChangeImg }
            />
          </div>

          <div className={styles.form_detail_info}>
            <h2 className={styles.delivery}>PRODUCT INFO</h2>

            <div className={styles.form_group}>
              <label htmlFor="product_name">Name</label>
              <input
                id="product_name"
                type="text"
                placeholder="Product name"
                required
                name="productName"
                value={product.productName}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className={styles.groups}>
              <div className={styles.group}>
                <label htmlFor="product_type">Product Type</label>
                <select
                  onChange={(e) => handleChange(e)}
                  value={product.productType}
                  name="productType"
                  id="product_type"
                  type="text"
                  placeholder="Type"
                  required
                >
                  <option value="">Choose Type</option>
                  <option value="Tee">Tee</option>
                  <option value="Hoodie">Hoodie</option>
                  <option value="Cap">Cap</option>
                  <option value="CD">CD</option>
                  <option value="LP">LP</option>
                  <option value="Accesorie">Accesorie</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.group}>
                <label htmlFor="prduct_price">Price</label>
                <input
                  id="prduct_price"
                  type="text"
                  placeholder="Price"
                  required
                  name="productPrice"
                  value={product.productPrice}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {(product.productType === 'Tee' || product.productType === 'Hoodie') && (
              <div className={styles.groups}>
                <div className={styles.group_stock}>
                  <label htmlFor="currentStockS">S</label>
                  <input
                    className={styles.stockBySize}
                    value={currentStockS}
                    name="currentStockS"
                    id="currentStockS" 
                    type="number"
                    placeholder="S Stock"
                    required
                    onChange={(event) => handleChangeStock(event)}
                  />
                </div>
                <div className={styles.group_stock}>
                  <label htmlFor="m_stock">M</label>
                  <input
                  className={styles.stockBySize}
                  value={currentStockM}
                  name="currentStockM"
                  id="currentStockM" 
                  type="number"
                  placeholder="M Stock"
                  required
                  onChange={(event) => handleChangeStock(event)}
                  />
                </div>
                <div className={styles.group_stock}>
                  <label htmlFor="l_stock">L</label>
                  <input
                  className={styles.stockBySize}
                  value={currentStockL}
                  name="currentStockL"
                  id="currentStockL" 
                  type="number"
                  placeholder="L Stock"
                  required
                  onChange={(event) => handleChangeStock(event)}
                  />
                </div>
                <div className={styles.group_stock}>
                  <label htmlFor="xl_stock">XL</label>
                  <input
                  className={styles.stockBySize}
                  value={currentStockXL}
                  name="currentStockXL"
                  id="currentStockXL" 
                  type="number"
                  placeholder="XL Stock"
                  required
                  onChange={(event) => handleChangeStock(event)}
                  />
                </div>
              </div>
            )}

            <div className={styles.groups}>
              <div className={styles.group}>
                <label htmlFor="stock">STOCK</label>
                <input
                  value={product.productStock}
                  id="stock"
                  type="number"
                  min={0}
                  placeholder="Stock"
                  required
                  name="productStock"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className={styles.group}>
                <label htmlFor="featured">FEATURED?</label>
                <select 
                  defaultValue={product ? product.productFeatured : false}
                  id="featured"
                  type="text"
                  placeholder=""
                  required
                  onChange={(e) => handleChange(e)}
                  value={product.productFeatured}
                  name="productFeatured"
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>

            {action === 'add' && (
              <div className={styles.add_product}>
                <button onClick={(e) => handleSubmit(e, 'add')} className={styles.add_button}>ADD PRODUCT</button>
              </div>
            )}

            {action === 'edit' && 
              <div className={styles.edit_product}>
                <button onClick={(e) => handleSubmit(e, 'edit')} className={styles.edit_button}>SAVE CHANGES</button>
              </div>
            }
          </div>

        </form>


    </div>
  )
}

export default AdminProductDetail