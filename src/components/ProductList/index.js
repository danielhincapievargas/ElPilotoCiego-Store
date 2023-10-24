<<<<<<< HEAD
import React from 'react'
import styles from '@components/ProductList/productList.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { stateProducts } from '@/redux/slices/productSlice'
import { useRouter } from 'next/router'


const ProductList = ({ title }) => {
  const router = useRouter()
  const { products } = useSelector(stateProducts)

  const handleSelect = (item) => {
    router.push(`/product_detail/${item._id}`)
=======
import React, { useEffect } from 'react'
import styles from '@components/ProductList/productList.module.css'
import Image from 'next/image'
import mockData from '../../services/mockData'
import { useSelector } from 'react-redux'
import { selectedProduct } from '@/redux/slices/selectedProductSlice'
import { selectProduct } from '@/redux/slices/selectedProductSlice'
import { listProducts, products } from '@/redux/slices/productSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

const ProductList = ({title}) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const selectedItem = useSelector(selectedProduct)
  const productList = useSelector(products)

  useEffect(() => {
    dispatch(listProducts(mockData))
  },[])

  console.log(productList);

  const handleSelect = (item) => {
    dispatch(selectProduct(item))
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
  }

  return (
    <div className={styles.featured_items}>
      <h2>{title}</h2>
      <div className={styles.items_list}>
        {
<<<<<<< HEAD
          products.map((item) => {
            return (
              <div key={item._id}>
                {
                  (item.productStock > 0) && (
                <div 
                  onClick={() => {handleSelect(item)}}
=======
          productList.products.map((item) => {
            return (
              <div key={item.id}>
                {
                  (item.productStock > 0) && (
                <div 
                  onClick={() => {handleSelect(item); router.push('/product_detail')}}
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
                  className={styles.product_card}
                >
                  <Image
                    className={styles.product_img}
                    src={item.productImage}
                    alt={item.productName}
                    width={162}
                    height={162}
                    priority
                  />
                  <div className={styles.product_name}>{item.productName}</div>
                  <div className={styles.product_price}>{item.productPrice}</div>
                </div>
                  ) 
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default ProductList
=======
export default ProductList
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
