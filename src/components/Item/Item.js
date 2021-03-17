import './Item.css';

function Item({ item }) {

    return (
        <div className="item" id={item.id}>
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
        </div>
    );
};



export default Item;
