import React, { useState } from 'react'
import styles from '@components/ProductDetail/productDetail.module.css'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { 
  selectedProduct,
  updateProductSize,
  incrementCount,
  decrementCount
} from '@/redux/slices/selectedProductSlice'

const ProductDetail = () => {
  const selectedItem = useSelector(selectedProduct);
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const handleAdd = () => {
    setDisable(false)
    dispatch(incrementCount())
  }

  const handleSubstract = () => {
    if(selectedItem.productCount <= 1){
      setDisable(true);
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

        <div className={styles.sizes_container}>
          <div className={styles.sizes_title}>SIZE</div>
          <ul className={styles.sizes_list}>
            <li>
              <button 
                className={selectedSize == 'S' ? styles.selected_size : ''}
                onClick={(e) => handleSize(e)}
                value='S'
              >
              S
              </button>
            </li>
            <li>
              <button
                className={selectedSize === 'M' ? styles.selected_size : ''}
                onClick={(e) => handleSize(e)}
                value='M'
              >
              M
              </button>
            </li>
            <li>
              <button
                className={selectedSize === 'L' ? styles.selected_size : ''}
                onClick={(e) => handleSize(e)}
                value='L'
              >
              L
              </button>
            </li>
            <li>
              <button
                className={selectedSize === 'XL' ? styles.selected_size : ''}
                onClick={(e) => handleSize(e)}
                value='XL'
              >
              XL
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.quantity_container}>
          <div className={styles.quantity_title}>QUANTITY</div>
          <div className={styles.quantity_counter}>
            <button disabled={disable} onClick={handleSubstract}>-</button>
            <div className={styles.count}>{selectedItem.productCount}</div>
            <button onClick={handleAdd}>+</button>
          </div>
        </div>

        <div className={styles.add_to_cart}>
          <button className={styles.add_button}>ADD TO CART</button>
        </div>
        
      </div>
    </div>
  )
}

export default ProductDetail