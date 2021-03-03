import React, { useState } from 'react'
import samsunggalaxy from '../Photos/samsunggalaxy-s20.jpg'
function Home(props) {

    // const [isHome, setIsHome] = useState(true);
    // const [input, setInput] = useState('');
    // const [myList, setMyList] = useState([]);

    return (
        <div>

            {/* <h1>{isHome ? 'Home Component' : 'Not Home'}</h1>
            <input 
                type={'text'}
                onChange={
                    (e) => setInput(e.currentTarget.value)
                }
            />
            <button 
                onClick={
                    (e) => setMyList([...myList, input])
                }
            >
                Add
            </button>
            <br/>
            {
                myList.map((val) => {
                    return (<>
                        {val}
                        <br/>
                    </>)
                })
            } */}
            <div className="cart-wrapper">
                <div className="add-to-cart">
                <img src={samsunggalaxy} alt="cart" />

                </div>

                <div className="img-wrapper item">
                    <img src={samsunggalaxy} alt="img_mobile" />
                </div>
                    <div className="text-wrapper item">
                        <span>
                            I-Phone
                        </span>
                        <span>
                            Price: $1000.00
                        </span>
                    </div>
                    <div className="btn-wrapper item">
                        <button onClick={() => { props.addToCartHandler({ price: 1000, name: 'i phone 11' }) }}> Add To Cart</button>
                    </div>
            </div>
        </div>
    )
}
export default Home