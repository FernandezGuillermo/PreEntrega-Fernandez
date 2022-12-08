import { Item } from "./Item"

const ItemList = ({listProducts}) =>{
    return(
        <div>
            {listProducts.map(product => <Item key={product.id} product ={product}/>)}
        </div>
    )
}

export {ItemList}