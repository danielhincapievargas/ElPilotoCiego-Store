import React, { useState, useEffect } from 'react'
import styles from '@components/ProductDetail/productDetail.module.css'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
<<<<<<< HEAD
import { stateProducts } from '@/redux/slices/productSlice'
import ProductCounter from '../ProductCounter'
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
import { 
  selectedProduct,
  updateProductSize,
  updateProductCount,
  incrementCount,
  decrementCount
} from '@/redux/slices/selectedProductSlice'
import { addToCart, cart } from '@/redux/slices/cartSlice'

const ProductDetail = () => {
<<<<<<< HEAD
=======
  const currentCart = useSelector(cart)
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
  const selectedItem = useSelector(selectedProduct);;
  const dispatch = useDispatch();
  const router = useRouter()
  const [disableSubstract, setDisableSubstract] = useState(false);
  const [disableAdd, setDisableAdd] = useState(false);
  const [chooseSize, setChooseSize] = useState(false)
  const [selectedSize, setSelectedSize] = useState('');
<<<<<<< HEAD
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
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

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

<<<<<<< HEAD
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
=======
  const handleAddToCart = () => {
    if((selectedItem.productType === 'Tee' || selectedItem.productType === 'Hoodie') && !selectedSize ){
      setChooseSize(true);
      return
    }
      console.log(selectedItem);
      dispatch(addToCart(selectedItem))
      //router.push('/cart')
      
    }
    console.log(currentCart);




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
            <button disabled={disableAdd} onClick={handleAdd}>+</button>
          </div>
        </div>

        {chooseSize && (<p className={styles.choose_size}>choose a size</p>)}

        <div className={styles.add_to_cart}>
          <button 
            className={styles.add_button}
            onClick={() => handleAddToCart()}
          >
            ADD TO CART
          </button>
        </div>
        
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
      </div>
    </div>
  )
}

export default ProductDetail