export default interface Phone {
  brand: string,
  displayName: string,
  contentKey: string,
  price: string,
  pricePrefix: string,
  priceSuffix: string,
  internalMemoryGB: number[],
  dualSIM: boolean,
  networkTechnology: string[],
  colorOptions: [
    {
      name: string,
      hex: string
    }
  ],
  imgUrl: string,
  link: string
}