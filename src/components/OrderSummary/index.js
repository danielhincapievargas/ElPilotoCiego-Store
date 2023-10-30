import React from 'react'
import styles from '@components/OrderSummary/orderSummary.module.css'
import CartProduct from '../CartProduct'
import { cart } from '@/redux/slices/cartSlice'
import { useSelector } from 'react-redux'
import formatPrice from '@/services/formatPrice'

const OrderSummary = () => {
  const currentCart = useSelector(cart)
  let total = 0;
  return (
    <div className={styles.order_summary}>
      <div className={styles.order_title}>
        <h3>Order Summary</h3>
      </div>
      {currentCart && currentCart.cart.map((item) => {
        const subtotal = item.productCount * item.productPrice;
        total += subtotal;
        return(
        <div key={item._id} className={styles.order_list}>
          <div className={styles.order_product}>
            <CartProduct 
              page="checkout"
              productImage={item.productImage}
              productName={item.productName}
              productType={item.productType}
              productSize={item.productSize}
              productCount={item.productCount}
            />
            <div>{formatPrice(item.productPrice * item.productCount)}</div>
          </div>
        </div>
        )
      })}
      <div className={styles.order_total}>
        <div className={styles.total_title}>Total</div>
        <div>{formatPrice(total)}</div>
      </div>
    </div>
  )
}

export default OrderSummary