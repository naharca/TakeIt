import "../ItemCount/ItemCount.css"

const ItemCount = ({ stock, value, onAdd, onSubstract }) => {

    
    return (
        <>
            <div>
            <p>Stock:{stock}</p>
                {stock
                    ?
                    <div className="counter-buttons-container">
                        <button type="button" className="btn btn-operator btn-secondary btn-sm" onClick={(e) => onSubstract(e)}> - </button>
                        <label>{value}</label>
                        <button type="button" className="btn btn-operator btn-secondary btn-sm" onClick={(e) => onAdd(e)}> + </button>
                    </div>
                    :
                    <div className="alert alert-info shadow" role="alert">
                        <p>No more in stock</p>
                    </div>
                }
                
            </div>
        </>
    )

}


export default ItemCount;




