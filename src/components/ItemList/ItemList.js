import Item from '../Item/Item';
import '../ItemList/ItemList.css'

const ItemList = (props) => (
    <>
        <h1>List</h1>
        <ul>
            {props.items.map((item) => (
                <Item key={item.name} item={item} />
            ))}

        </ul>
    </>

);
export default ItemList;
