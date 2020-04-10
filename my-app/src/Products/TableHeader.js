import React from "react"
import ProductData from "./ProductData"

function TableHeader(props) {
    const productKeys = Object.keys(ProductData[1])
const headerData = productKeys.map(productKeys => <th>{productKeys}</th>)
    return (
        <tr>
                {headerData}
            </tr>
    )
}

export default TableHeader