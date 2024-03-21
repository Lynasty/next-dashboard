import { APIResponseData } from '@/src/types/types';
import Image from 'next/image';
import React from 'react'

function Product({ data }: { data: APIResponseData<"api::product.product"> }) {
  return (
    <div>
      <Image
        src={`http://localhost:1337${data.attributes.picture?.data.attributes.url}`}
        objectFit="cover"
        alt=""
        width={120}
        height={120}
      />
      <p>{data.attributes.title}</p>
      <p>{data.attributes.description}</p>
    </div>
  );
}

export default Product