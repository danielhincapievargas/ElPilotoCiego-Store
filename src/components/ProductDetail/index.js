import React, { useState, useEffect } from 'react'
import styles from '@components/ProductDetail/productDetail.module.css'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { stateProducts } from '@/redux/slices/productSlice'
import ProductCounter from '../ProductCounter'
import { 
  selectedProduct,
  updateProductSize,
  updateProductCount,
  incrementCount,
  decrementCount
} from '@/redux/slices/selectedProductSlice'
import { addToCart, cart } from '@/redux/slices/cartSlice'

const ProductDetail = () => {
  const selectedItem = useSelector(selectedProduct);;
  const dispatch = useDispatch();
  const router = useRouter()
  const [disableSubstract, setDisableSubstract] = useState(false);
  const [disableAdd, setDisableAdd] = useState(false);
  const [chooseSize, setChooseSize] = useState(false)
  const [selectedSize, setSelectedSize] = useState('');
  const { product } = useSelector(stateProducts)
  const currentCart = useSelector(cart)

  const getStockBySize = (data) => {
    const stockBySize = {};
    data.productSizes?.forEach(item => {
      stockBySize[item.size] = item.stock
    })
    return stockBySize
  }
  const stockBySize = getStockBySize(product)

  useEffect(() => {
    dispatch(updateProductCount({productCount: 1}));
  }, [dispatch]);


  const handleAdd = () => {
    if(selectedSize === '' 
    &&
    (selectedItem.productType === 'Tee' || selectedItem.productType === 'Hoodie')
    ){
      setChooseSize(true)
      setDisableAdd(true);
      return
    }

    if(
      (selectedItem.productStock === selectedItem.productCount)
      ||(selectedSize === 'S' && (selectedItem.productStockS === selectedItem.productCount))
      ||(selectedSize === 'M' && (selectedItem.productStockM === selectedItem.productCount))
      ||(selectedSize === 'L' && (selectedItem.productStockL === selectedItem.productCount))
      ||(selectedSize === 'XL' && (selectedItem.productStockXL === selectedItem.productCount))
      ){
      setDisableAdd(true);
      return
    }

    setDisableAdd(false)
    setDisableSubstract(false)
    dispatch(incrementCount())
  }

  const handleSubstract = () => {
    if(selectedSize === ''
    &&
    (selectedItem.productType === 'Tee' || selectedItem.productType === 'Hoodie')
    ){
      setChooseSize(true)
      setDisableSubstract(true);
      return
    }

    if(selectedItem.productCount <= 1){
      setDisableSubstract(true);
      return;
    } else {
      setDisableAdd(false)
      dispatch(decrementCount())
    }
  }

  const handleSize = (e) => {
    setDisableAdd(false)
    setChooseSize(false)
    dispatch(updateProductCount({productCount: 1}))
    dispatch(updateProductSize({ productSize: e.target.value}))
    setSelectedSize(e.target.value)
  }

  function findProduct(cart, productName, productSize) {
    return cart.some(product => 
      product.productName === productName && product.productSize === productSize
    );
  }


  const handleAddToCart = () => {
    if((product.productType === 'Tee' || product.productType === 'Hoodie') && !selectedSize ){
      setChooseSize(true);
      return
    }

    const newCartProduct = {
      ...product,
      productSize: selectedItem.productSize,
      productCount: selectedItem.productCount,
    }

    const isInCart = findProduct(currentCart.cart, newCartProduct.productName, newCartProduct.productSize)

    if(isInCart){
      return alert('Product is already in your cart')
    }

      dispatch(addToCart(newCartProduct))
      router.push('/cart')
      
    }

  return (
    <div>
      <h2 className={styles.product_detail_title}>PRODUCT DETAIL</h2>
      <div className={styles.product_detail_container}>
        <Image 
          className={styles.product_img}
          src={product.productImage}
          alt={product.productType}
          width={300}
          height={300}
          priority
        />
        <div className={styles.product_info}>
  
          <div className={styles.product_tags}>
            <div className={styles.product_name}>{product.productName}</div>
            <div className={styles.product_price}>{product.productPrice}</div>
          </div>
  
          {(product.productType === 'Tee' || product.productType === 'Hoodie')
          && (
          <div className={styles.sizes_container}>
            <div className={styles.sizes_title}>SIZE</div>
            <ul className={styles.sizes_list}>
              <li>
                <button 
                  className={
                    (selectedSize === 'S' && (stockBySize.S > 0)) 
                    ? styles.selected_size 
                    : (stockBySize.S == 0)  
                    ? styles.disabled : ''}
                  onClick={(e) => handleSize(e)}
                  value='S'
                  disabled={(stockBySize.S === 0) ? true : false}
                >
                S
                </button>
              </li>
              <li>
                <button
                  className={
                    (selectedSize === 'M' && (stockBySize.M > 0))
                    ? styles.selected_size
                    : (stockBySize.M == 0)
                    ? styles.disabled : ''}
                  onClick={(e) => handleSize(e)}
                  value='M'
                  disabled={(stockBySize.M === 0) ? true : false}
                >
                M
                </button>
              </li>
              <li>
                <button
                  className={
                    (selectedSize === 'L' && (stockBySize.L > 0)) 
                    ? styles.selected_size 
                    : (stockBySize.L == 0)  
                    ? styles.disabled : ''}
                  onClick={(e) => handleSize(e)}
                  value='L'
                  disabled={(stockBySize.L === 0) ? true : false}
                >
                L
                </button>
              </li>
              <li>
                <button
                  className={
                    (selectedSize === 'XL' && (stockBySize.XL > 0)) 
                    ? styles.selected_size 
                    : (stockBySize.XL == 0)  
                    ? styles.disabled : ''}
                  onClick={(e) => handleSize(e)}
                  value='XL'
                  disabled={(stockBySize.XL === 0) ? true : false}
                >
                XL
                </button>
              </li>
            </ul>
          </div>
          )
          }
  
          <ProductCounter
            title={true}
            productCount={selectedItem.productCount}
            handleAdd={handleAdd}
            handleSubstract={handleSubstract}
            disableAdd={disableAdd}
            disableSubstract={disableSubstract}
          />
  
          {chooseSize && (<p className={styles.choose_size}>choose a size</p>)}
  
          <div className={styles.add_to_cart}>
            <button 
              className={styles.add_button}
              onClick={() => handleAddToCart()}
            >
              ADD TO CART
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ProductDetail