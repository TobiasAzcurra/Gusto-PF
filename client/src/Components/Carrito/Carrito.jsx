import ProductItem from './ProductItem'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, clearCart, delFromCart } from '../../redux/actions/shoppingActions'
import CarritoItem from './CarritoItem'
import { useEffect } from 'react'
import { getAllProducts } from '../../redux/actions/globalActions'
import PediYa from '../../pages/PediYa'

const Carrito = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    const cart = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <div style={{ color: 'black' }}>
            <article className="box">
                <section class="h-100 gradient-custom">
                    <div class="container py-2">
                        <div class="row d-flex justify-content-center my-4">
                            <div class="col-md-8">
                                <div class="card mb-0">
                                    <div class="card-body">
                                        {
                                            cart.map((item, index) =>
                                                <CarritoItem
                                                    key={item.id}
                                                    id={item.id}
                                                    name={item.name}
                                                    price={item.price}
                                                    quantity={item.quantity}
                                                    description={item.description}
                                                    image={item.image}
                                                    delOneFromCart={() => dispatch(delFromCart(item.id))}
                                                    delAllFromCart={() => dispatch(delFromCart(item.id, true))}
                                                />
                                            )
                                        }
                                        < PediYa />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </article>
        </div>

    )
}

export default Carrito






