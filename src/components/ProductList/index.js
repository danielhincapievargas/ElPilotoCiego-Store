import React, { useEffect } from 'react'
import styles from '@components/ProductList/productList.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { stateProducts } from '@/redux/slices/productSlice'
import { useRouter } from 'next/router'


const ProductList = ({ title }) => {
  const router = useRouter()
  //const selectedItem = useSelector(selectedProduct)
  const { products } = useSelector(stateProducts)


  //console.log("products", products);


  const handleSelect = (item) => {
    console.log("item", item);
    router.push(`/product_detail/${item._id}`)
  }

  return (
    <div className={styles.featured_items}>
      <h2>{title}</h2>
      <div className={styles.items_list}>
        {
          products.map((item) => {
            return (
              <div key={item._id}>
                {
                  (item.productStock > 0) && (
                <div 
                  onClick={() => {handleSelect(item); /* router.push('/product_detail') */}}
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
