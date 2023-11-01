import React from 'react'
import styles from '@components/ProductList/productList.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { stateProducts } from '@/redux/slices/productSlice'
import { useRouter } from 'next/router'
import formatPrice from '@/services/formatPrice'


const ProductList = ({ title, page }) => {
  const router = useRouter()
  const { products } = useSelector(stateProducts)

  const handleSelect = (item) => {
    router.push(`/product_detail/${item._id}`)
  }

let filteredProducts;

if (page === 'Home') {

  filteredProducts = products;

} else if (page === 'Apparel') {

  filteredProducts = products.filter(product => {
    return product.productType === 'Tee' || product.productType === 'Hoodie';
  });

} else if (page === 'Music') {

  filteredProducts = products.filter(product => {
    return product.productType === 'CD' || product.productType === 'LP';
  });

}

  return (
    <div className={styles.featured_items}>
      <h2>{title}</h2>
      <div className={styles.items_list}>
        {
          filteredProducts.map((item) => {
            return (
              <div key={item._id}>
                {
                  (item.productStock > 0) && (
                <div 
                  onClick={() => {handleSelect(item)}}
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
                  <div className={styles.product_price}>{formatPrice(item.productPrice)}</div>
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
