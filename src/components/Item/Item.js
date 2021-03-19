import './Item.css';
// import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function Item({ item }) {

    return (
        <div className="item" id={item.id} >
            <img className="item-picture" src={item.picture} alt={item.name} />
            <div className="card-body">
                <h5 className="product-name">{item.name}</h5>
                {/* <div className="product-description">
                   <p> RAM : {item.ram}</p>
                   <p> CORE : {item.core}</p>
                   <p> SCREEN :{item.screen_size}</p>
                   
                <p className="price">PRICE:  {item.price_USD}$</p>
                </div> */}
                {/* <a href="#" className="btn btn-primary"></a> */}
            </div>
        </div>

    );
};



export default Item;





{/* <div className="item" id={item.id}>
            <figure>
                <img src={item.picture} alt={item.name} />
                <figcaption>
                    <h3 className="title">{item.name}</h3>
                    <div className="description">
                        {item.ram};
                        {item.core};
                        {item.screen_size}
                    </div>
                </figcaption>

            </figure>
            <span className="price">$ {item.price_USD}</span>
        </div> */}