const ItemDetail = ({ item }) => {
    

    return (
        <div className="item" id={item.id} >
            <img className="item-picture" src={item.picture} alt={item.name} />
            <div className="card-body">
                <h5 className="product-name">{item.name}</h5>
                <div className="product-description">
                    <p> TYPE : {item.Type}</p>
                    <p> RAM : {item.ram}</p>
                    <p> CORE : {item.core}</p>
                    <p> SCREEN :{item.screen_size}</p>
                    <p> STOCK :{item.stock}</p>

                    <p className="price">PRICE:  {item.price_USD}$</p>
                </div>
                {/* <a href="#" className="btn btn-primary"></a> */}
            </div>
        </div>

    );




};

export default ItemDetail;