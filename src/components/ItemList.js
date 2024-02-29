import { useDispatch } from "react-redux";
import { con_url } from "../utils/constant";
import { addItems } from "../utils/Slice";


const ItemList = ({items})=>{
//  console.log(items)  

//   console.log(items.map(item=>  item.card ? item.card.info.name : item.map(ite=>ite.card.info.name) )) 

//    if(items.card){
// items_card = items.map(item=>item.card)

// console.log(items_cards)
// }

// else{
//     items_cat_card = items.map(item=> item.map(ite=>ite.card))
//     console.log(items_cat_card)
// }
   


const cartdispatch = useDispatch()

const handleDispatch = (item) =>{
    cartdispatch(addItems(item))
}
// console.log(items)

return (
    <div>
        {items.map((item => (
            <div key={item.card.info.id} className="p-2 m-2  border-gray-300 border-b-2 text-left flex justify-between" data-testid = "fooditems">
                
                <div className="w-9/12">
                <div className="py-2 text-sm">
                    <span>{item.card.info.name}</span>
                    <span>- ₹ {item.card.info.price/100 || item.card.info.defaultprice/100}</span>

                </div>
                <p className=" text-xs">{item.card.info.description}</p>
                
            </div> 
            <div className= "w-2/12 p-2">
               
              <div className="absolute">
               <button className="p-1 mx-6  rounded-md  bg-slate-800 text-white shadow-lg " onClick={()=>handleDispatch(item)}>Add +</button>
                </div>
                <img src = {item.card.info.imageId ? con_url + item.card.info.imageId : " "  }  className="rounded-md"/> 
                </div>
            </div>

        )))

        }
    </div>
)};

export default ItemList; 