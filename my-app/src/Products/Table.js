import React from "react"
import Products from "./Products"
import ProductData from "./ProductData"
import TableHeader from "./TableHeader"

console.log(ProductData)

function Table (){
   
    const productInput = ProductData.map(
        function (ProductData) {
            return (
                <Products   key = {ProductData.id} name = {ProductData.name} price = {ProductData.price} description = {ProductData.description} />
            )
        }
    )
    return (
        <table>
            <tbody>
            <TableHeader  />
            {productInput}
            </tbody>
        </table>
    )
}

export default Table