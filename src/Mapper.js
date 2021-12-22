import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Mapper() {
  const [{ basket }] = useStateValue();
  let map=new Map();
      basket.map((item)=>{
            if(map.has(item.id)){
                const updated=map.get(item.id).count+1;
                map.set(item.id,{...map.get(item.id),count:updated});
            }
            else{
                map.set(item.id,item);
            }
        })
        const list=[];
        for (const  value of map.values()) {
            list.push(value)
          }
  return (
    <div>
      {list.map((item)=>{
          return <CheckoutProduct {...item} >
          </CheckoutProduct>
      })}
    </div>
  )
}

export default Mapper
