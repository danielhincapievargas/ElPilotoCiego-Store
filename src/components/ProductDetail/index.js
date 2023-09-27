import React, { useState } from 'react'
import styles from '@components/ProductDetail/productDetail.module.css'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { 
  selectedProduct,
  updateProductSize,
  incrementCount,
  decrementCount
} from '@/redux/slices/selectedProductSlice'

const ProductDetail = () => {
  const selectedItem = useSelector(selectedProduct);
  const dispatch = useDispatch();
  const router = useRouter()
  const [disableSubstract, setDisableSubstract] = useState(false);
  const [disableAdd, setDisableAdd] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const handleAdd = () => {

    setDisableSubstract(false)
    dispatch(incrementCount())
  }

  const handleSubstract = () => {
    if(selectedItem.productCount <= 1){
      setDisableSubstract(true);
      return;
    } else {
      dispatch(decrementCount())
    }
  }

  const handleSize = (e) => {
    dispatch(updateProductSize({ productSize: e.target.value}))
    setSelectedSize(e.target.value)
  }

  console.log(selectedItem);

  return (
    <div className={styles.product_detail}>
      <Image 
        className={styles.product_img}
        src={selectedItem.productImage}
        alt={selectedItem.productType}
        width={375}
        height={375}
        priority
      />
      <div className={styles.product_info}>

        <div className={styles.product_tags}>
          <div className={styles.product_name}>{selectedItem.productName}</div>
          <div className={styles.product_price}>{selectedItem.productPrice}</div>
        </div>

        {(selectedItem.productType === 'Tee' || selectedItem.productType === 'Hoodie')
        && (
        <div className={styles.sizes_container}>
          <div className={styles.sizes_title}>SIZE</div>
          <ul className={styles.sizes_list}>
            <li>
              <button 
                className={
                  (selectedSize === 'S' && (selectedItem.productStockS > 0)) 
                  ? styles.selected_size 
                  : (selectedItem.productStockS == 0)  
                  ? styles.disabled : ''}
                onClick={(e) => handleSize(e)}
                value='S'
              >
              S
              </button>
            </li>
            <li>
              <button
                className={
                  (selectedSize === 'M' && (selectedItem.productStockM > 0))
                  ? styles.selected_size
                  : (selectedItem.productStockM == 0)
                  ? styles.disabled : ''}
                onClick={(e) => handleSize(e)}
                value='M'
              >
              M
              </button>
            </li>
            <li>
              <button
                className={
                  (selectedSize === 'L' && (selectedItem.productStockL > 0)) 
                  ? styles.selected_size 
                  : (selectedItem.productStockL == 0)  
                  ? styles.disabled : ''}
                onClick={(e) => handleSize(e)}
                value='L'
                
              >
              L
              </button>
            </li>
            <li>
              <button
                className={
                  (selectedSize === 'XL' && (selectedItem.productStockXL > 0)) 
                  ? styles.selected_size 
                  : (selectedItem.productStockXL == 0)  
                  ? styles.disabled : ''}
                onClick={(e) => handleSize(e)}
                value='XL'
                disabled={(selectedItem.productStockXL === 0) ? true : false}
              >
              XL
              </button>
            </li>
          </ul>
        </div>
        )
        }


        <div className={styles.quantity_container}>
          <div className={styles.quantity_title}>QUANTITY</div>
          <div className={styles.quantity_counter}>
            <button disabled={disableSubstract} onClick={handleSubstract}>-</button>
            <div className={styles.count}>{selectedItem.productCount}</div>
            <button onClick={handleAdd}>+</button>
          </div>
        </div>

        <div className={styles.add_to_cart}>
          <button 
            className={styles.add_button}
            onClick={() => {router.push('/cart')}}
          >
            ADD TO CART
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default ProductDetail