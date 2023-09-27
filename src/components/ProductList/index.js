import React from 'react'
import styles from '@components/ProductList/productList.module.css'
import Image from 'next/image'
import mockData from '../../services/mockData'
import { useSelector } from 'react-redux'
import { selectedProduct } from '@/redux/slices/selectedProductSlice'
import { selectProduct } from '@/redux/slices/selectedProductSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

const ProductList = ({title}) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const selectedItem = useSelector(selectedProduct)
  //console.log('selectedItem', selectedItem.productImg);

  const handleSelect = (item) => {
    dispatch(selectProduct(item))
  }

  return (
    <div className={styles.featured_items}>
      <h2>{title}</h2>
      <div className={styles.items_list}>
        {
          mockData.map((item) => {
            return (
              <div key={item.id}>
                {
                  (item.productStock > 0) && (
                <div 
                  onClick={() => {handleSelect(item); router.push('/product_detail')}}
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

export default ProductList