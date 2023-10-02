import React, { useEffect } from 'react'
import styles from '@components/ProductList/productList.module.css'
import Image from 'next/image'
import mockData from '../../services/mockData'
import { useSelector, useDispatch } from 'react-redux'
import { selectedProduct } from '@/redux/slices/selectedProductSlice'
import { selectProduct } from '@/redux/slices/selectedProductSlice'
import { stateProducts } from '@/redux/slices/productSlice'
import { useRouter } from 'next/router'


const ProductList = ({ title }) => {
  //const dispatch = useDispatch()
  const router = useRouter()
  //const selectedItem = useSelector(selectedProduct)
  const { products } = useSelector(stateProducts)

  console.log("products", products);


  const handleSelect = (item) => {
    console.log("item", item);
    //dispatch(selectProduct(item))
  }

  return (
    <div className={styles.featured_items}>
      <h2>{title}</h2>
      <div className={styles.items_list}>
        {
          products.map((item) => {
            return (
              <div key={item.id}>
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

/* export const getServerSideProps = wrapper.getServerSideProps( store => async () => {
  console.log('hola');
  await store.dispatch(getAllProducts())
})
 */

export default ProductList
