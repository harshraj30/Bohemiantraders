import React from 'react'
import { useParams } from 'react-router-dom'


const ProductList = () => {
const slug = useParams()

  return (
    <div className="text-3xl font-bold bg-blue-500 w-screen">
        <p>{slug.slug} dolor sit amet consectetur, adipisicing elit. Aut asperiores tempora eligendi iusto, dignissimos recusandae odio illo doloremque vel necessitatibus hic sed nobis quis, facere fugiat beatae quasi facilis. Ut.</p>
    </div>
  )
}

export default ProductList