import imagenCarrito from "../assets/icons/carrito.jpg"
function CartWidget() {
    return (
        <div>
            <img src= {imagenCarrito} height={32} width='auto' alt='cart icon' />
            <span>(0)</span>
        </div>
    );
}

export default CartWidget