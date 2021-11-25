import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Products.css';
const Products = () => {
    const { user } = useAuth();
    const coffeeMug = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1CvHp9MTQzQqo5w4b88vvaWqV-e20NU9zg&usqp=CAU";
    const ladiesBag = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qw14UMuLzZfu5N16b6wBiL1BxOZGmx3dEw&usqp=CAU";
    const plant = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-d2X6m7iweHyjZ6pxVF7Hi0HiwJdDjOTGg&usqp=CAU";
    const homeDecor = "https://i0.wp.com/shaadiwish.com/blog/wp-content/uploads/2020/10/ekam1.jpg";
    const watch = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELOlG92es6w7XhZCFNJ5GuAIc701GsVGvvQ&usqp=CAU";
    const shoe = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYUVMKkGHW4PELImrWAM4izxpaPkK0WHgUw&usqp=CAU";
    const mirror = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDvNc8QboXI6R735ETylRBV9liTmUhBFaSQ&usqp=CAU";
    const flowerTop = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8yIPx16lvuCslhh5CdkD43RGWJJq2vrdxA&usqp=CAU";
    const perfume = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaglyi4L0VvNQp_PxATEZx107dMNLodlE6dQ&usqp=CAU";
    const shelf = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9fKYg7z7hBBxEsbv35TX6Y_kDN6iccloLA&usqp=CAU";
    const acurium = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxQ4EqAf3GzmuldPSu-lURKooR7ahcz-weg&usqp=CAU";
    const wallpaper = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlaWtpGo3v8uiQl4EP1ANlTuP-5cRXijHeV5-RITh_olMtB1IxQEHqatX0KOk1SDb1FI&usqp=CAU";




    // handle order now button
    const handleOrderNow = () => {
        console.log("clicked");
    }



    return (
        <div>
            <hr />
            <div className="d-flex align-items-start ms-5"> You Are Logged In As : <span> {user.email}({user.displayName})</span></div>
            <h2 className="fw-bold mt-5">Place Your Order !!!</h2><p>________________</p>

            {/* order summary */}
            <div className="d-flex flex-md-column align-items-start ms-5">
                <form className="bg-white p-5 shadow">
                    <h3>Order Summary</h3>
                    <p>Items Ordered:0</p>
                </form>
            </div>



            <p className="mt-5">We've huge stock of different kind of products.So, hurry up and place your order!!!</p>
            {/* products card */}
            <div class="container mx-auto row row-cols-1 row-cols-md-3 g-4 mb-5 pb-5">
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={homeDecor} class="card-img-top" alt="..." />

                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><button
                                onClick={handleOrderNow}
                                className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={flowerTop} class="card-img-top" alt="..." />
                        </div>

                        <div class="card-footer">
                            <small class="text-muted"><button
                                onClick={handleOrderNow} className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={plant} class="card-img-top" alt="..." />

                        </div>


                        <div class="card-footer">
                            <small class="text-muted"><button onClick={handleOrderNow} className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={ladiesBag} class="card-img-top" alt="..." />

                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><button onClick={handleOrderNow} className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={watch} class="card-img-top" alt="..." />
                        </div>

                        <div class="card-footer">
                            <small class="text-muted"><button onClick={handleOrderNow} className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={perfume} class="card-img-top" alt="..." />

                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><button onClick={handleOrderNow} className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={shelf} class="card-img-top" alt="..." />

                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><button onClick={handleOrderNow} className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={acurium} class="card-img-top" alt="..." />

                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><button onClick={handleOrderNow} className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={coffeeMug} class="card-img-top" alt="..." />

                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><button onClick={handleOrderNow} className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={wallpaper} class="card-img-top" alt="..." />

                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><button onClick={handleOrderNow} className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={mirror} class="card-img-top" alt="..." />

                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><button onClick={handleOrderNow} className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
                <div class="col products shadow">
                    <div class="card h-100">
                        <div className="productsImg">
                            <img src={shoe} class="card-img-top" alt="..." />

                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><button onClick={handleOrderNow} className="w-100 btn btn-danger"><i class="fas fa-cart-plus"></i> Order Now</button></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;