import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddToCartItemInput: AddToCartItemInput;
  AddToCartResult: ResolverTypeWrapper<AddToCartResult>;
  Address: ResolverTypeWrapper<Address>;
  AddressFields: ResolversTypes['Address'] | ResolversTypes['CustomerAddress'];
  AddressInput: AddressInput;
  AppliedFilter: ResolverTypeWrapper<AppliedFilter>;
  AroundLocationInput: AroundLocationInput;
  Article: ResolverTypeWrapper<Article>;
  ArticleInfo: ResolverTypeWrapper<ArticleInfo>;
  ArticleStatus: ArticleStatus;
  Attribute: ResolverTypeWrapper<Attribute>;
  AttributeDefinition: ResolverTypeWrapper<AttributeDefinition>;
  AttributeType: AttributeType;
  Availability: ResolverTypeWrapper<Availability>;
  BaseUnit: ResolverTypeWrapper<BaseUnit>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Brand: ResolverTypeWrapper<Brand>;
  BrandsResult: ResolverTypeWrapper<BrandsResult>;
  Cart: ResolverTypeWrapper<Cart>;
  CartItem: ResolverTypeWrapper<CartItem>;
  CartItemDataInput: CartItemDataInput;
  CartsResult: ResolverTypeWrapper<CartsResult>;
  CategoriesResult: ResolverTypeWrapper<CategoriesResult>;
  Category: ResolverTypeWrapper<Category>;
  CategoryBreadcrumb: ResolverTypeWrapper<CategoryBreadcrumb>;
  CheckoutState: ResolverTypeWrapper<CheckoutState>;
  ContentBlock: ResolverTypeWrapper<ContentBlock>;
  ContentBlockStatus: ContentBlockStatus;
  ContentBlocksResult: ResolverTypeWrapper<ContentBlocksResult>;
  Country: ResolverTypeWrapper<Country>;
  Coupon: ResolverTypeWrapper<Coupon>;
  Currency: ResolverTypeWrapper<Currency>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerAddress: ResolverTypeWrapper<CustomerAddress>;
  DeleteResult: ResolverTypeWrapper<DeleteResult>;
  DeviatingOpeningTime: ResolverTypeWrapper<DeviatingOpeningTime>;
  Discount: ResolverTypeWrapper<Discount>;
  Error: ResolverTypeWrapper<Error>;
  Expense: ResolverTypeWrapper<Expense>;
  Features: ResolverTypeWrapper<Features>;
  FilterInput: FilterInput;
  FilterType: FilterType;
  FilterValue: ResolverTypeWrapper<FilterValue>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Locale: ResolverTypeWrapper<Locale>;
  Manufacturer: ResolverTypeWrapper<Manufacturer>;
  ManufacturersResult: ResolverTypeWrapper<ManufacturersResult>;
  MeasurementUnit: MeasurementUnit;
  Media: ResolverTypeWrapper<Media>;
  MediaPurpose: MediaPurpose;
  MediaType: MediaType;
  Meta: ResolverTypeWrapper<Meta>;
  Mutation: ResolverTypeWrapper<{}>;
  OpeningTime:
    | ResolversTypes['DeviatingOpeningTime']
    | ResolversTypes['RegularOpeningTime'];
  Order: ResolverTypeWrapper<Order>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderPaymentInfo: ResolverTypeWrapper<OrderPaymentInfo>;
  OrderShippingInfo: ResolverTypeWrapper<OrderShippingInfo>;
  OrderStatus: OrderStatus;
  OrdersFilterInput: OrdersFilterInput;
  OrdersResult: ResolverTypeWrapper<OrdersResult>;
  Page: ResolverTypeWrapper<
    Omit<Page, 'reference'> & {
      reference?: Maybe<ResolversTypes['PageReference']>;
    }
  >;
  PageReference:
    | ResolversTypes['Article']
    | ResolversTypes['Brand']
    | ResolversTypes['Category']
    | ResolversTypes['Product'];
  PageStatus: PageStatus;
  PagedResult:
    | ResolversTypes['BrandsResult']
    | ResolversTypes['CartsResult']
    | ResolversTypes['CategoriesResult']
    | ResolversTypes['ContentBlocksResult']
    | ResolversTypes['ManufacturersResult']
    | ResolversTypes['OrdersResult']
    | ResolversTypes['PagesResult']
    | ResolversTypes['ProductsResult']
    | ResolversTypes['RelatedProductsResult']
    | ResolversTypes['ReservationsResult']
    | ResolversTypes['SearchResult']
    | ResolversTypes['SellersResult']
    | ResolversTypes['WarehousesResult']
    | ResolversTypes['WishlistsResult'];
  PagesResult: ResolverTypeWrapper<PagesResult>;
  Paging: ResolverTypeWrapper<Paging>;
  PagingInput: PagingInput;
  Payment: ResolverTypeWrapper<Payment>;
  PaymentMethod: ResolverTypeWrapper<PaymentMethod>;
  PaymentStatus: PaymentStatus;
  Price: ResolverTypeWrapper<Price>;
  Product: ResolverTypeWrapper<Product>;
  ProductInfo: ResolverTypeWrapper<ProductInfo>;
  ProductOption: ResolverTypeWrapper<ProductOption>;
  ProductOptionType: ProductOptionType;
  ProductOptionValue: ResolverTypeWrapper<ProductOptionValue>;
  ProductStatus: ProductStatus;
  ProductsResult: ResolverTypeWrapper<ProductsResult>;
  Query: ResolverTypeWrapper<{}>;
  ReferencePrice: ResolverTypeWrapper<ReferencePrice>;
  RegistrationInput: RegistrationInput;
  RegistrationResult: ResolverTypeWrapper<RegistrationResult>;
  RegularOpeningTime: ResolverTypeWrapper<RegularOpeningTime>;
  RelatedProduct: ResolverTypeWrapper<RelatedProduct>;
  RelatedProductType: RelatedProductType;
  RelatedProductsResult: ResolverTypeWrapper<RelatedProductsResult>;
  Reservation: ResolverTypeWrapper<Reservation>;
  ReservationContactDataInput: ReservationContactDataInput;
  ReservationInput: ReservationInput;
  ReservationStatus: ReservationStatus;
  ReservationsResult: ResolverTypeWrapper<ReservationsResult>;
  ReservedArticle: ResolverTypeWrapper<ReservedArticle>;
  ResolveUrlResultType: ResolveUrlResultType;
  SalesUnit: ResolverTypeWrapper<SalesUnit>;
  ScalarMap: ResolverTypeWrapper<Scalars['ScalarMap']>;
  SearchResult: ResolverTypeWrapper<SearchResult>;
  SearchResultItem: ResolverTypeWrapper<
    Omit<SearchResultItem, 'reference'> & {
      reference?: Maybe<ResolversTypes['SearchResultItemReference']>;
    }
  >;
  SearchResultItemReference:
    | ResolversTypes['Brand']
    | ResolversTypes['Category']
    | ResolversTypes['Product'];
  SearchResultItemType: SearchResultItemType;
  SellableInfo: ResolversTypes['ArticleInfo'] | ResolversTypes['ProductInfo'];
  Seller: ResolverTypeWrapper<Seller>;
  SellersResult: ResolverTypeWrapper<SellersResult>;
  Session: ResolverTypeWrapper<Session>;
  Shipment: ResolverTypeWrapper<Shipment>;
  ShipmentItem: ResolverTypeWrapper<ShipmentItem>;
  ShipmentStatus: ShipmentStatus;
  ShippingMethod: ResolverTypeWrapper<ShippingMethod>;
  Shop: ResolverTypeWrapper<Shop>;
  SortInput: SortInput;
  SortValue: SortValue;
  String: ResolverTypeWrapper<Scalars['String']>;
  Suggestion: ResolverTypeWrapper<
    Omit<Suggestion, 'result'> & {
      result?: Maybe<ResolversTypes['SuggestionResult']>;
    }
  >;
  SuggestionResult:
    | ResolversTypes['Article']
    | ResolversTypes['Brand']
    | ResolversTypes['Category']
    | ResolversTypes['Product'];
  SuggestionType: SuggestionType;
  TaxClass: ResolverTypeWrapper<TaxClass>;
  TaxValue: ResolverTypeWrapper<TaxValue>;
  Totals: ResolverTypeWrapper<Totals>;
  UpdateCartItemInput: UpdateCartItemInput;
  UpdateCheckoutInput: UpdateCheckoutInput;
  UpdateCustomerInput: UpdateCustomerInput;
  Warehouse: ResolverTypeWrapper<
    Omit<Warehouse, 'openingTimes'> & {
      openingTimes: Array<ResolversTypes['OpeningTime']>;
    }
  >;
  WarehousesResult: ResolverTypeWrapper<WarehousesResult>;
  Wishlist: ResolverTypeWrapper<Wishlist>;
  WishlistItem: ResolverTypeWrapper<WishlistItem>;
  WishlistsResult: ResolverTypeWrapper<WishlistsResult>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddToCartItemInput: AddToCartItemInput;
  AddToCartResult: AddToCartResult;
  Address: Address;
  AddressFields:
    | ResolversParentTypes['Address']
    | ResolversParentTypes['CustomerAddress'];
  AddressInput: AddressInput;
  AppliedFilter: AppliedFilter;
  AroundLocationInput: AroundLocationInput;
  Article: Article;
  ArticleInfo: ArticleInfo;
  Attribute: Attribute;
  AttributeDefinition: AttributeDefinition;
  Availability: Availability;
  BaseUnit: BaseUnit;
  Boolean: Scalars['Boolean'];
  Brand: Brand;
  BrandsResult: BrandsResult;
  Cart: Cart;
  CartItem: CartItem;
  CartItemDataInput: CartItemDataInput;
  CartsResult: CartsResult;
  CategoriesResult: CategoriesResult;
  Category: Category;
  CategoryBreadcrumb: CategoryBreadcrumb;
  CheckoutState: CheckoutState;
  ContentBlock: ContentBlock;
  ContentBlocksResult: ContentBlocksResult;
  Country: Country;
  Coupon: Coupon;
  Currency: Currency;
  Customer: Customer;
  CustomerAddress: CustomerAddress;
  DeleteResult: DeleteResult;
  DeviatingOpeningTime: DeviatingOpeningTime;
  Discount: Discount;
  Error: Error;
  Expense: Expense;
  Features: Features;
  FilterInput: FilterInput;
  FilterValue: FilterValue;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Locale: Locale;
  Manufacturer: Manufacturer;
  ManufacturersResult: ManufacturersResult;
  Media: Media;
  Meta: Meta;
  Mutation: {};
  OpeningTime:
    | ResolversParentTypes['DeviatingOpeningTime']
    | ResolversParentTypes['RegularOpeningTime'];
  Order: Order;
  OrderItem: OrderItem;
  OrderPaymentInfo: OrderPaymentInfo;
  OrderShippingInfo: OrderShippingInfo;
  OrdersFilterInput: OrdersFilterInput;
  OrdersResult: OrdersResult;
  Page: Omit<Page, 'reference'> & {
    reference?: Maybe<ResolversParentTypes['PageReference']>;
  };
  PageReference:
    | ResolversParentTypes['Article']
    | ResolversParentTypes['Brand']
    | ResolversParentTypes['Category']
    | ResolversParentTypes['Product'];
  PagedResult:
    | ResolversParentTypes['BrandsResult']
    | ResolversParentTypes['CartsResult']
    | ResolversParentTypes['CategoriesResult']
    | ResolversParentTypes['ContentBlocksResult']
    | ResolversParentTypes['ManufacturersResult']
    | ResolversParentTypes['OrdersResult']
    | ResolversParentTypes['PagesResult']
    | ResolversParentTypes['ProductsResult']
    | ResolversParentTypes['RelatedProductsResult']
    | ResolversParentTypes['ReservationsResult']
    | ResolversParentTypes['SearchResult']
    | ResolversParentTypes['SellersResult']
    | ResolversParentTypes['WarehousesResult']
    | ResolversParentTypes['WishlistsResult'];
  PagesResult: PagesResult;
  Paging: Paging;
  PagingInput: PagingInput;
  Payment: Payment;
  PaymentMethod: PaymentMethod;
  Price: Price;
  Product: Product;
  ProductInfo: ProductInfo;
  ProductOption: ProductOption;
  ProductOptionValue: ProductOptionValue;
  ProductsResult: ProductsResult;
  Query: {};
  ReferencePrice: ReferencePrice;
  RegistrationInput: RegistrationInput;
  RegistrationResult: RegistrationResult;
  RegularOpeningTime: RegularOpeningTime;
  RelatedProduct: RelatedProduct;
  RelatedProductsResult: RelatedProductsResult;
  Reservation: Reservation;
  ReservationContactDataInput: ReservationContactDataInput;
  ReservationInput: ReservationInput;
  ReservationsResult: ReservationsResult;
  ReservedArticle: ReservedArticle;
  SalesUnit: SalesUnit;
  ScalarMap: Scalars['ScalarMap'];
  SearchResult: SearchResult;
  SearchResultItem: Omit<SearchResultItem, 'reference'> & {
    reference?: Maybe<ResolversParentTypes['SearchResultItemReference']>;
  };
  SearchResultItemReference:
    | ResolversParentTypes['Brand']
    | ResolversParentTypes['Category']
    | ResolversParentTypes['Product'];
  SellableInfo:
    | ResolversParentTypes['ArticleInfo']
    | ResolversParentTypes['ProductInfo'];
  Seller: Seller;
  SellersResult: SellersResult;
  Session: Session;
  Shipment: Shipment;
  ShipmentItem: ShipmentItem;
  ShippingMethod: ShippingMethod;
  Shop: Shop;
  SortInput: SortInput;
  String: Scalars['String'];
  Suggestion: Omit<Suggestion, 'result'> & {
    result?: Maybe<ResolversParentTypes['SuggestionResult']>;
  };
  SuggestionResult:
    | ResolversParentTypes['Article']
    | ResolversParentTypes['Brand']
    | ResolversParentTypes['Category']
    | ResolversParentTypes['Product'];
  TaxClass: TaxClass;
  TaxValue: TaxValue;
  Totals: Totals;
  UpdateCartItemInput: UpdateCartItemInput;
  UpdateCheckoutInput: UpdateCheckoutInput;
  UpdateCustomerInput: UpdateCustomerInput;
  Warehouse: Omit<Warehouse, 'openingTimes'> & {
    openingTimes: Array<ResolversParentTypes['OpeningTime']>;
  };
  WarehousesResult: WarehousesResult;
  Wishlist: Wishlist;
  WishlistItem: WishlistItem;
  WishlistsResult: WishlistsResult;
};

export type AddToCartResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AddToCartResult'] = ResolversParentTypes['AddToCartResult']
> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']
> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AddressFields'] = ResolversParentTypes['AddressFields']
> = {
  __resolveType: TypeResolveFn<
    'Address' | 'CustomerAddress',
    ParentType,
    ContextType
  >;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type AppliedFilterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AppliedFilter'] = ResolversParentTypes['AppliedFilter']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['FilterType'], ParentType, ContextType>;
  values?: Resolver<
    Array<ResolversTypes['FilterValue']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']
> = {
  attributes?: Resolver<
    Array<ResolversTypes['Attribute']>,
    ParentType,
    ContextType
  >;
  availabilities?: Resolver<
    Array<ResolversTypes['Availability']>,
    ParentType,
    ContextType,
    Partial<ArticleAvailabilitiesArgs>
  >;
  baseUnit?: Resolver<ResolversTypes['BaseUnit'], ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType>;
  brandId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  info?: Resolver<ResolversTypes['ArticleInfo'], ParentType, ContextType>;
  isBuyable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMaster?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<
    Array<ResolversTypes['Media']>,
    ParentType,
    ContextType,
    Partial<ArticleMediaArgs>
  >;
  prices?: Resolver<
    Array<ResolversTypes['Price']>,
    ParentType,
    ContextType,
    Partial<ArticlePricesArgs>
  >;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  salesUnits?: Resolver<
    Array<ResolversTypes['SalesUnit']>,
    ParentType,
    ContextType
  >;
  sellers?: Resolver<
    Array<ResolversTypes['Seller']>,
    ParentType,
    ContextType,
    Partial<ArticleSellersArgs>
  >;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ArticleStatus'], ParentType, ContextType>;
  taxClass?: Resolver<ResolversTypes['TaxClass'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticleInfo'] = ResolversParentTypes['ArticleInfo']
> = {
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']
> = {
  definition?: Resolver<
    ResolversTypes['AttributeDefinition'],
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeDefinitionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AttributeDefinition'] = ResolversParentTypes['AttributeDefinition']
> = {
  attributeType?: Resolver<
    ResolversTypes['AttributeType'],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailabilityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Availability'] = ResolversParentTypes['Availability']
> = {
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  warehouse?: Resolver<
    Maybe<ResolversTypes['Warehouse']>,
    ParentType,
    ContextType
  >;
  warehouseId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseUnitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseUnit'] = ResolversParentTypes['BaseUnit']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['MeasurementUnit'], ParentType, ContextType>;
  standardQuantity?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrandResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']
> = {
  categories?: Resolver<
    Maybe<Array<ResolversTypes['Category']>>,
    ParentType,
    ContextType
  >;
  categoryIds?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  media?: Resolver<
    Array<ResolversTypes['Media']>,
    ParentType,
    ContextType,
    Partial<BrandMediaArgs>
  >;
  products?: Resolver<
    Maybe<ResolversTypes['ProductsResult']>,
    ParentType,
    ContextType,
    Partial<BrandProductsArgs>
  >;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrandsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BrandsResult'] = ResolversParentTypes['BrandsResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Brand']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']
> = {
  coupons?: Resolver<Array<ResolversTypes['Coupon']>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['CartItem']>, ParentType, ContextType>;
  paymentMethods?: Resolver<
    Array<ResolversTypes['PaymentMethod']>,
    ParentType,
    ContextType
  >;
  shippingMethods?: Resolver<
    Array<ResolversTypes['ShippingMethod']>,
    ParentType,
    ContextType
  >;
  totals?: Resolver<ResolversTypes['Totals'], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']
> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cartId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  children?: Resolver<
    Array<ResolversTypes['CartItem']>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType>;
  parentItemId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salesUnit?: Resolver<ResolversTypes['SalesUnit'], ParentType, ContextType>;
  totals?: Resolver<ResolversTypes['Totals'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CartsResult'] = ResolversParentTypes['CartsResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Cart']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoriesResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CategoriesResult'] = ResolversParentTypes['CategoriesResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<
    Array<ResolversTypes['Category']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']
> = {
  breadcrumbs?: Resolver<
    Array<Maybe<ResolversTypes['CategoryBreadcrumb']>>,
    ParentType,
    ContextType
  >;
  children?: Resolver<
    Maybe<Array<ResolversTypes['Category']>>,
    ParentType,
    ContextType
  >;
  childrenIds?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  media?: Resolver<
    Array<ResolversTypes['Media']>,
    ParentType,
    ContextType,
    Partial<CategoryMediaArgs>
  >;
  parent?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  products?: Resolver<
    Maybe<ResolversTypes['ProductsResult']>,
    ParentType,
    ContextType,
    Partial<CategoryProductsArgs>
  >;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryBreadcrumbResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CategoryBreadcrumb'] = ResolversParentTypes['CategoryBreadcrumb']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutStateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CheckoutState'] = ResolversParentTypes['CheckoutState']
> = {
  billingAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  paymentMethod?: Resolver<
    Maybe<ResolversTypes['PaymentMethod']>,
    ParentType,
    ContextType
  >;
  shippingAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
  shippingMethod?: Resolver<
    Maybe<ResolversTypes['ShippingMethod']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ContentBlock'] = ResolversParentTypes['ContentBlock']
> = {
  blockType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  data?: Resolver<ResolversTypes['ScalarMap'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes['ContentBlockStatus'],
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentBlocksResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ContentBlocksResult'] = ResolversParentTypes['ContentBlocksResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<
    Array<ResolversTypes['ContentBlock']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']
> = {
  isoCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouponResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Coupon'] = ResolversParentTypes['Coupon']
> = {
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']
> = {
  addresses?: Resolver<
    Array<ResolversTypes['CustomerAddress']>,
    ParentType,
    ContextType
  >;
  blocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  customerNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CustomerAddress'] = ResolversParentTypes['CustomerAddress']
> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefaultBillingAddress?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  isDefaultShippingAddress?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DeleteResult'] = ResolversParentTypes['DeleteResult']
> = {
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviatingOpeningTimeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DeviatingOpeningTime'] = ResolversParentTypes['DeviatingOpeningTime']
> = {
  closed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  until?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']
> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ref?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExpenseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Expense'] = ResolversParentTypes['Expense']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeaturesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Features'] = ResolversParentTypes['Features']
> = {
  core?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  openingTimes?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reservations?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sellers?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  warehouses?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilterValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FilterValue'] = ResolversParentTypes['FilterValue']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocaleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Locale'] = ResolversParentTypes['Locale']
> = {
  isoCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManufacturerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Manufacturer'] = ResolversParentTypes['Manufacturer']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManufacturersResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ManufacturersResult'] = ResolversParentTypes['ManufacturersResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<
    Array<ResolversTypes['Manufacturer']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']
> = {
  mediaType?: Resolver<ResolversTypes['MediaType'], ParentType, ContextType>;
  purpose?: Resolver<
    Maybe<ResolversTypes['MediaPurpose']>,
    ParentType,
    ContextType
  >;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']
> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  robots?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  addCustomerAddress?: Resolver<
    Maybe<ResolversTypes['CustomerAddress']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddCustomerAddressArgs, 'data'>
  >;
  addToCart?: Resolver<
    Maybe<ResolversTypes['AddToCartResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddToCartArgs, 'cartId' | 'items'>
  >;
  addToWishlist?: Resolver<
    Maybe<ResolversTypes['Wishlist']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddToWishlistArgs, 'wishlistId'>
  >;
  applyCoupon?: Resolver<
    Maybe<ResolversTypes['Cart']>,
    ParentType,
    ContextType,
    RequireFields<MutationApplyCouponArgs, 'cartId' | 'coupon'>
  >;
  cancelReservation?: Resolver<
    Maybe<ResolversTypes['DeleteResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationCancelReservationArgs, 'reservationId'>
  >;
  createCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  createReservation?: Resolver<
    Maybe<ResolversTypes['Reservation']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateReservationArgs,
      'articleId' | 'quantity' | 'reservationData'
    >
  >;
  createWishlist?: Resolver<
    Maybe<ResolversTypes['Wishlist']>,
    ParentType,
    ContextType
  >;
  deleteCart?: Resolver<
    Maybe<ResolversTypes['DeleteResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCartArgs, 'id'>
  >;
  deleteCustomerAddress?: Resolver<
    Maybe<ResolversTypes['DeleteResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCustomerAddressArgs, 'id'>
  >;
  deleteWishlist?: Resolver<
    Maybe<ResolversTypes['DeleteResult']>,
    ParentType,
    ContextType
  >;
  finishCheckout?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationFinishCheckoutArgs, 'cartId'>
  >;
  register?: Resolver<
    Maybe<ResolversTypes['RegistrationResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationRegisterArgs, 'data'>
  >;
  removeFromCart?: Resolver<
    Maybe<ResolversTypes['DeleteResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveFromCartArgs, 'cartItemId'>
  >;
  removeFromWishlist?: Resolver<
    Maybe<ResolversTypes['DeleteResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveFromWishlistArgs, 'wishlistItemId'>
  >;
  startCheckout?: Resolver<
    Maybe<ResolversTypes['CheckoutState']>,
    ParentType,
    ContextType,
    RequireFields<MutationStartCheckoutArgs, 'cartId' | 'data'>
  >;
  startSession?: Resolver<
    Maybe<ResolversTypes['Session']>,
    ParentType,
    ContextType
  >;
  updateCartItem?: Resolver<
    Maybe<ResolversTypes['CartItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCartItemArgs, 'id'>
  >;
  updateCheckout?: Resolver<
    Maybe<ResolversTypes['CheckoutState']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCheckoutArgs, 'cartId' | 'data'>
  >;
  updateCustomer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCustomerArgs, 'data' | 'id'>
  >;
  updateCustomerAddress?: Resolver<
    Maybe<ResolversTypes['CustomerAddress']>,
    ParentType,
    ContextType,
    Partial<MutationUpdateCustomerAddressArgs>
  >;
};

export type OpeningTimeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OpeningTime'] = ResolversParentTypes['OpeningTime']
> = {
  __resolveType: TypeResolveFn<
    'DeviatingOpeningTime' | 'RegularOpeningTime',
    ParentType,
    ContextType
  >;
};

export type OrderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']
> = {
  billingAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['OrderItem']>>,
    ParentType,
    ContextType
  >;
  paymentInfo?: Resolver<
    ResolversTypes['OrderPaymentInfo'],
    ParentType,
    ContextType
  >;
  shippingAddress?: Resolver<
    ResolversTypes['Address'],
    ParentType,
    ContextType
  >;
  shippingInfo?: Resolver<
    ResolversTypes['OrderShippingInfo'],
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']
> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderPaymentInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderPaymentInfo'] = ResolversParentTypes['OrderPaymentInfo']
> = {
  method?: Resolver<ResolversTypes['PaymentMethod'], ParentType, ContextType>;
  payments?: Resolver<
    Array<ResolversTypes['Payment']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderShippingInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderShippingInfo'] = ResolversParentTypes['OrderShippingInfo']
> = {
  method?: Resolver<ResolversTypes['ShippingMethod'], ParentType, ContextType>;
  shipments?: Resolver<
    Array<ResolversTypes['Shipment']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrdersResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrdersResult'] = ResolversParentTypes['OrdersResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<
    Maybe<Array<ResolversTypes['Order']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']
> = {
  blocks?: Resolver<
    Array<ResolversTypes['ContentBlock']>,
    ParentType,
    ContextType
  >;
  children?: Resolver<
    Maybe<Array<ResolversTypes['Page']>>,
    ParentType,
    ContextType
  >;
  childrenIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['Meta'], ParentType, ContextType>;
  reference?: Resolver<
    Maybe<ResolversTypes['PageReference']>,
    ParentType,
    ContextType
  >;
  referenceId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PageStatus'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageReferenceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageReference'] = ResolversParentTypes['PageReference']
> = {
  __resolveType: TypeResolveFn<
    'Article' | 'Brand' | 'Category' | 'Product',
    ParentType,
    ContextType
  >;
};

export type PagedResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PagedResult'] = ResolversParentTypes['PagedResult']
> = {
  __resolveType: TypeResolveFn<
    | 'BrandsResult'
    | 'CartsResult'
    | 'CategoriesResult'
    | 'ContentBlocksResult'
    | 'ManufacturersResult'
    | 'OrdersResult'
    | 'PagesResult'
    | 'ProductsResult'
    | 'RelatedProductsResult'
    | 'ReservationsResult'
    | 'SearchResult'
    | 'SellersResult'
    | 'WarehousesResult'
    | 'WishlistsResult',
    ParentType,
    ContextType
  >;
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
};

export type PagesResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PagesResult'] = ResolversParentTypes['PagesResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Paging'] = ResolversParentTypes['Paging']
> = {
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']
> = {
  status?: Resolver<ResolversTypes['PaymentStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']
> = {
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  expense?: Resolver<Maybe<ResolversTypes['Expense']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']
> = {
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  grossValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  netValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  original?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  referencePrice?: Resolver<
    Maybe<ResolversTypes['ReferencePrice']>,
    ParentType,
    ContextType
  >;
  taxValue?: Resolver<ResolversTypes['TaxValue'], ParentType, ContextType>;
  validFrom?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  validUntil?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
  articleIds?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  articles?: Resolver<
    Maybe<Array<ResolversTypes['Article']>>,
    ParentType,
    ContextType,
    Partial<ProductArticlesArgs>
  >;
  attributes?: Resolver<
    Array<Maybe<ResolversTypes['Attribute']>>,
    ParentType,
    ContextType
  >;
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType>;
  brandId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  categories?: Resolver<
    Maybe<Array<ResolversTypes['Category']>>,
    ParentType,
    ContextType
  >;
  categoryIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  info?: Resolver<ResolversTypes['ProductInfo'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<
    Maybe<ResolversTypes['Manufacturer']>,
    ParentType,
    ContextType
  >;
  manufacturerId?: Resolver<
    Maybe<ResolversTypes['ID']>,
    ParentType,
    ContextType
  >;
  media?: Resolver<
    Array<ResolversTypes['Media']>,
    ParentType,
    ContextType,
    Partial<ProductMediaArgs>
  >;
  options?: Resolver<
    Array<ResolversTypes['ProductOption']>,
    ParentType,
    ContextType
  >;
  relatedProducts?: Resolver<
    Maybe<ResolversTypes['RelatedProductsResult']>,
    ParentType,
    ContextType,
    Partial<ProductRelatedProductsArgs>
  >;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProductStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductInfo'] = ResolversParentTypes['ProductInfo']
> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductOption'] = ResolversParentTypes['ProductOption']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProductOptionType'], ParentType, ContextType>;
  values?: Resolver<
    Array<ResolversTypes['ProductOptionValue']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductOptionValue'] = ResolversParentTypes['ProductOptionValue']
> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductsResult'] = ResolversParentTypes['ProductsResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  article?: Resolver<
    Maybe<ResolversTypes['Article']>,
    ParentType,
    ContextType,
    RequireFields<QueryArticleArgs, 'id'>
  >;
  articleByField?: Resolver<
    Maybe<ResolversTypes['Article']>,
    ParentType,
    ContextType,
    RequireFields<QueryArticleByFieldArgs, 'field' | 'value'>
  >;
  brand?: Resolver<
    Maybe<ResolversTypes['Brand']>,
    ParentType,
    ContextType,
    RequireFields<QueryBrandArgs, 'id'>
  >;
  brandByField?: Resolver<
    Maybe<ResolversTypes['Brand']>,
    ParentType,
    ContextType,
    RequireFields<QueryBrandByFieldArgs, 'field' | 'value'>
  >;
  brands?: Resolver<
    Maybe<ResolversTypes['BrandsResult']>,
    ParentType,
    ContextType,
    Partial<QueryBrandsArgs>
  >;
  cart?: Resolver<
    Maybe<ResolversTypes['Cart']>,
    ParentType,
    ContextType,
    RequireFields<QueryCartArgs, 'id'>
  >;
  carts?: Resolver<
    Maybe<ResolversTypes['CartsResult']>,
    ParentType,
    ContextType
  >;
  categories?: Resolver<
    Maybe<ResolversTypes['CategoriesResult']>,
    ParentType,
    ContextType,
    Partial<QueryCategoriesArgs>
  >;
  category?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoryArgs, 'id'>
  >;
  categoryByField?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoryByFieldArgs, 'field' | 'value'>
  >;
  contentBlock?: Resolver<
    Maybe<ResolversTypes['ContentBlock']>,
    ParentType,
    ContextType,
    Partial<QueryContentBlockArgs>
  >;
  contentBlocks?: Resolver<
    Maybe<ResolversTypes['ContentBlocksResult']>,
    ParentType,
    ContextType,
    Partial<QueryContentBlocksArgs>
  >;
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType
  >;
  features?: Resolver<ResolversTypes['Features'], ParentType, ContextType>;
  manufacturer?: Resolver<
    Maybe<ResolversTypes['Manufacturer']>,
    ParentType,
    ContextType,
    RequireFields<QueryManufacturerArgs, 'id'>
  >;
  manufacturerByField?: Resolver<
    Maybe<ResolversTypes['Manufacturer']>,
    ParentType,
    ContextType,
    RequireFields<QueryManufacturerByFieldArgs, 'field' | 'value'>
  >;
  manufacturers?: Resolver<
    Maybe<ResolversTypes['ManufacturersResult']>,
    ParentType,
    ContextType
  >;
  order?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderArgs, 'id'>
  >;
  orders?: Resolver<
    Maybe<ResolversTypes['OrdersResult']>,
    ParentType,
    ContextType,
    Partial<QueryOrdersArgs>
  >;
  page?: Resolver<
    Maybe<ResolversTypes['Page']>,
    ParentType,
    ContextType,
    RequireFields<QueryPageArgs, 'id'>
  >;
  pageByField?: Resolver<
    Maybe<ResolversTypes['Page']>,
    ParentType,
    ContextType,
    RequireFields<QueryPageByFieldArgs, 'field' | 'value'>
  >;
  pages?: Resolver<
    Maybe<ResolversTypes['PagesResult']>,
    ParentType,
    ContextType,
    Partial<QueryPagesArgs>
  >;
  product?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductArgs, 'id'>
  >;
  productByField?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductByFieldArgs, 'field' | 'value'>
  >;
  products?: Resolver<
    Maybe<ResolversTypes['ProductsResult']>,
    ParentType,
    ContextType,
    Partial<QueryProductsArgs>
  >;
  reservation?: Resolver<
    Maybe<ResolversTypes['Reservation']>,
    ParentType,
    ContextType,
    RequireFields<QueryReservationArgs, 'id'>
  >;
  reservationByField?: Resolver<
    Maybe<ResolversTypes['Reservation']>,
    ParentType,
    ContextType,
    RequireFields<QueryReservationByFieldArgs, 'field' | 'value'>
  >;
  reservations?: Resolver<
    Maybe<ResolversTypes['ReservationsResult']>,
    ParentType,
    ContextType
  >;
  search?: Resolver<
    Maybe<ResolversTypes['SearchResult']>,
    ParentType,
    ContextType,
    Partial<QuerySearchArgs>
  >;
  seller?: Resolver<
    Maybe<ResolversTypes['Seller']>,
    ParentType,
    ContextType,
    RequireFields<QuerySellerArgs, 'id'>
  >;
  sellerByField?: Resolver<
    Maybe<ResolversTypes['Seller']>,
    ParentType,
    ContextType,
    RequireFields<QuerySellerByFieldArgs, 'field' | 'value'>
  >;
  sellers?: Resolver<
    Maybe<ResolversTypes['SellersResult']>,
    ParentType,
    ContextType,
    Partial<QuerySellersArgs>
  >;
  session?: Resolver<Maybe<ResolversTypes['Session']>, ParentType, ContextType>;
  shop?: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType>;
  suggestions?: Resolver<
    Array<ResolversTypes['Suggestion']>,
    ParentType,
    ContextType,
    RequireFields<QuerySuggestionsArgs, 'searchTerm'>
  >;
  warehouse?: Resolver<
    Maybe<ResolversTypes['Warehouse']>,
    ParentType,
    ContextType,
    RequireFields<QueryWarehouseArgs, 'id'>
  >;
  warehouseByField?: Resolver<
    Maybe<ResolversTypes['Warehouse']>,
    ParentType,
    ContextType,
    RequireFields<QueryWarehouseByFieldArgs, 'field' | 'value'>
  >;
  warehouses?: Resolver<
    Maybe<ResolversTypes['WarehousesResult']>,
    ParentType,
    ContextType,
    Partial<QueryWarehousesArgs>
  >;
  wishlist?: Resolver<
    Maybe<ResolversTypes['Wishlist']>,
    ParentType,
    ContextType,
    RequireFields<QueryWishlistArgs, 'id'>
  >;
  wishlists?: Resolver<
    Maybe<ResolversTypes['WishlistsResult']>,
    ParentType,
    ContextType,
    Partial<QueryWishlistsArgs>
  >;
};

export type ReferencePriceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReferencePrice'] = ResolversParentTypes['ReferencePrice']
> = {
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  grossValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  netValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salesUnit?: Resolver<ResolversTypes['SalesUnit'], ParentType, ContextType>;
  taxValue?: Resolver<ResolversTypes['TaxValue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegistrationResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RegistrationResult'] = ResolversParentTypes['RegistrationResult']
> = {
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegularOpeningTimeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RegularOpeningTime'] = ResolversParentTypes['RegularOpeningTime']
> = {
  dayOfWeek?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  until?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelatedProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RelatedProduct'] = ResolversParentTypes['RelatedProduct']
> = {
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  type?: Resolver<
    ResolversTypes['RelatedProductType'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelatedProductsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RelatedProductsResult'] = ResolversParentTypes['RelatedProductsResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<
    Array<ResolversTypes['RelatedProduct']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReservationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Reservation'] = ResolversParentTypes['Reservation']
> = {
  articles?: Resolver<
    Array<ResolversTypes['ReservedArticle']>,
    ParentType,
    ContextType
  >;
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType
  >;
  customerId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservationNumber?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  status?: Resolver<
    ResolversTypes['ReservationStatus'],
    ParentType,
    ContextType
  >;
  validUntil?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  warehouse?: Resolver<
    Maybe<ResolversTypes['Warehouse']>,
    ParentType,
    ContextType
  >;
  warehouseId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReservationsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReservationsResult'] = ResolversParentTypes['ReservationsResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<
    Array<ResolversTypes['Reservation']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReservedArticleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReservedArticle'] = ResolversParentTypes['ReservedArticle']
> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  articleID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesUnitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SalesUnit'] = ResolversParentTypes['SalesUnit']
> = {
  conversion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['MeasurementUnit'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ScalarMapScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['ScalarMap'], any> {
  name: 'ScalarMap';
}

export type SearchResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']
> = {
  filters?: Resolver<
    Array<ResolversTypes['AppliedFilter']>,
    ParentType,
    ContextType
  >;
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<
    Array<ResolversTypes['SearchResultItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResultItem'] = ResolversParentTypes['SearchResultItem']
> = {
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<
    Maybe<ResolversTypes['SearchResultItemReference']>,
    ParentType,
    ContextType
  >;
  referenceId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<
    ResolversTypes['SearchResultItemType'],
    ParentType,
    ContextType
  >;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultItemReferenceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResultItemReference'] = ResolversParentTypes['SearchResultItemReference']
> = {
  __resolveType: TypeResolveFn<
    'Brand' | 'Category' | 'Product',
    ParentType,
    ContextType
  >;
};

export type SellableInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SellableInfo'] = ResolversParentTypes['SellableInfo']
> = {
  __resolveType: TypeResolveFn<
    'ArticleInfo' | 'ProductInfo',
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
};

export type SellerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Seller'] = ResolversParentTypes['Seller']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellersResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SellersResult'] = ResolversParentTypes['SellersResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Seller']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Shipment'] = ResolversParentTypes['Shipment']
> = {
  carrier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes['ShipmentItem']>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes['ShipmentStatus'], ParentType, ContextType>;
  trackingNumber?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ShipmentItem'] = ResolversParentTypes['ShipmentItem']
> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingMethodResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ShippingMethod'] = ResolversParentTypes['ShippingMethod']
> = {
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  expense?: Resolver<Maybe<ResolversTypes['Expense']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']
> = {
  currencies?: Resolver<
    Array<ResolversTypes['Currency']>,
    ParentType,
    ContextType
  >;
  defaultLocale?: Resolver<
    Maybe<ResolversTypes['Locale']>,
    ParentType,
    ContextType
  >;
  locales?: Resolver<Array<ResolversTypes['Locale']>, ParentType, ContextType>;
  pricePrecision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuggestionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Suggestion'] = ResolversParentTypes['Suggestion']
> = {
  result?: Resolver<
    Maybe<ResolversTypes['SuggestionResult']>,
    ParentType,
    ContextType
  >;
  resultId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SuggestionType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuggestionResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SuggestionResult'] = ResolversParentTypes['SuggestionResult']
> = {
  __resolveType: TypeResolveFn<
    'Article' | 'Brand' | 'Category' | 'Product',
    ParentType,
    ContextType
  >;
};

export type TaxClassResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TaxClass'] = ResolversParentTypes['TaxClass']
> = {
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TaxValue'] = ResolversParentTypes['TaxValue']
> = {
  taxClass?: Resolver<ResolversTypes['TaxClass'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Totals'] = ResolversParentTypes['Totals']
> = {
  discounts?: Resolver<
    Array<ResolversTypes['Discount']>,
    ParentType,
    ContextType
  >;
  expenses?: Resolver<
    Array<ResolversTypes['Expense']>,
    ParentType,
    ContextType
  >;
  gross?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  net?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taxes?: Resolver<
    Array<Maybe<ResolversTypes['TaxValue']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WarehouseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Warehouse'] = ResolversParentTypes['Warehouse']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  openingTimes?: Resolver<
    Array<ResolversTypes['OpeningTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WarehousesResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WarehousesResult'] = ResolversParentTypes['WarehousesResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<
    Array<ResolversTypes['Warehouse']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Wishlist'] = ResolversParentTypes['Wishlist']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes['WishlistItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WishlistItem'] = ResolversParentTypes['WishlistItem']
> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WishlistsResult'] = ResolversParentTypes['WishlistsResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<
    Maybe<Array<ResolversTypes['Wishlist']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AddToCartResult?: AddToCartResultResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  AddressFields?: AddressFieldsResolvers<ContextType>;
  AppliedFilter?: AppliedFilterResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  ArticleInfo?: ArticleInfoResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  AttributeDefinition?: AttributeDefinitionResolvers<ContextType>;
  Availability?: AvailabilityResolvers<ContextType>;
  BaseUnit?: BaseUnitResolvers<ContextType>;
  Brand?: BrandResolvers<ContextType>;
  BrandsResult?: BrandsResultResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  CartItem?: CartItemResolvers<ContextType>;
  CartsResult?: CartsResultResolvers<ContextType>;
  CategoriesResult?: CategoriesResultResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryBreadcrumb?: CategoryBreadcrumbResolvers<ContextType>;
  CheckoutState?: CheckoutStateResolvers<ContextType>;
  ContentBlock?: ContentBlockResolvers<ContextType>;
  ContentBlocksResult?: ContentBlocksResultResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Coupon?: CouponResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerAddress?: CustomerAddressResolvers<ContextType>;
  DeleteResult?: DeleteResultResolvers<ContextType>;
  DeviatingOpeningTime?: DeviatingOpeningTimeResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Expense?: ExpenseResolvers<ContextType>;
  Features?: FeaturesResolvers<ContextType>;
  FilterValue?: FilterValueResolvers<ContextType>;
  Locale?: LocaleResolvers<ContextType>;
  Manufacturer?: ManufacturerResolvers<ContextType>;
  ManufacturersResult?: ManufacturersResultResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OpeningTime?: OpeningTimeResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  OrderPaymentInfo?: OrderPaymentInfoResolvers<ContextType>;
  OrderShippingInfo?: OrderShippingInfoResolvers<ContextType>;
  OrdersResult?: OrdersResultResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  PageReference?: PageReferenceResolvers<ContextType>;
  PagedResult?: PagedResultResolvers<ContextType>;
  PagesResult?: PagesResultResolvers<ContextType>;
  Paging?: PagingResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  PaymentMethod?: PaymentMethodResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductInfo?: ProductInfoResolvers<ContextType>;
  ProductOption?: ProductOptionResolvers<ContextType>;
  ProductOptionValue?: ProductOptionValueResolvers<ContextType>;
  ProductsResult?: ProductsResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReferencePrice?: ReferencePriceResolvers<ContextType>;
  RegistrationResult?: RegistrationResultResolvers<ContextType>;
  RegularOpeningTime?: RegularOpeningTimeResolvers<ContextType>;
  RelatedProduct?: RelatedProductResolvers<ContextType>;
  RelatedProductsResult?: RelatedProductsResultResolvers<ContextType>;
  Reservation?: ReservationResolvers<ContextType>;
  ReservationsResult?: ReservationsResultResolvers<ContextType>;
  ReservedArticle?: ReservedArticleResolvers<ContextType>;
  SalesUnit?: SalesUnitResolvers<ContextType>;
  ScalarMap?: GraphQLScalarType;
  SearchResult?: SearchResultResolvers<ContextType>;
  SearchResultItem?: SearchResultItemResolvers<ContextType>;
  SearchResultItemReference?: SearchResultItemReferenceResolvers<ContextType>;
  SellableInfo?: SellableInfoResolvers<ContextType>;
  Seller?: SellerResolvers<ContextType>;
  SellersResult?: SellersResultResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  Shipment?: ShipmentResolvers<ContextType>;
  ShipmentItem?: ShipmentItemResolvers<ContextType>;
  ShippingMethod?: ShippingMethodResolvers<ContextType>;
  Shop?: ShopResolvers<ContextType>;
  Suggestion?: SuggestionResolvers<ContextType>;
  SuggestionResult?: SuggestionResultResolvers<ContextType>;
  TaxClass?: TaxClassResolvers<ContextType>;
  TaxValue?: TaxValueResolvers<ContextType>;
  Totals?: TotalsResolvers<ContextType>;
  Warehouse?: WarehouseResolvers<ContextType>;
  WarehousesResult?: WarehousesResultResolvers<ContextType>;
  Wishlist?: WishlistResolvers<ContextType>;
  WishlistItem?: WishlistItemResolvers<ContextType>;
  WishlistsResult?: WishlistsResultResolvers<ContextType>;
};
