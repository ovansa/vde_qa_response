export enum TelevisionBrand {
  LG = 'LG',
  Redmi = 'Redmi',
  MI = 'MI',
  Samsung = 'Samsung',
  Sony = 'Sony',
  TCL = 'TCL',
  Acer = 'Acer',
}

export enum SortOption {
  Bestselling = 'Bestselling',
  PriceLowToHigh = 'Price: Low to High',
  PriceHighToLow = 'Price: High to Low',
  AvgCustomerReview = 'Avg. Customer Review',
  NewestArrivals = 'Newest Arrivals',
  BestSellers = 'Best Sellers',
}

export interface ICreateUserRequest {
  name: string;
  job: string;
}
