// import React from 'react'       //export by default

import { add, sub as biyog } from "./functions"  //export as object

export const Import = () => {
  add(4,6);
  biyog(5,3);
  return (
    <div>Import</div>
  )
}
