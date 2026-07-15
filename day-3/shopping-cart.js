const cart = {
    items: 3,
    total: 4200,
    couponApplied: true,
    isLoggedIn: false
};

if (!cart.isLoggedIn) {
    console.log("Please Login First");
}
else {

    if (cart.items === 0) {
        console.log("Cart is Empty");
    }

    else if (cart.couponApplied) {
        console.log("Discount Applied");
    }

    else {
        console.log("Proceed to Payment");
    }

}