import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A map of scalars */
  ScalarMap: any;
}

/** One item to be added to the cart */
export interface AddToCartItemInput {
  customData?: InputMaybe<CartItemCustomDataInput>;
  parentCartItemId?: InputMaybe<Scalars['ID']>;
  quantity: Scalars['Int'];
  salesUnitId?: InputMaybe<Scalars['ID']>;
  sku: Scalars['ID'];
}

/** Result of adding one or many articles to the cart */
export interface AddToCartResult {
  __typename?: 'AddToCartResult';
  cart?: Maybe<Cart>;
  errors: Array<Error>;
}

/** An address */
export interface Address extends AddressFields {
  __typename?: 'Address';
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  street2?: Maybe<Scalars['String']>;
  zipCode: Scalars['String'];
}

export interface AddressFields {
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  street2?: Maybe<Scalars['String']>;
  zipCode: Scalars['String'];
}

/** Address data */
export interface AddressInput {
  city: Scalars['String'];
  company?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  street: Scalars['String'];
  street2?: InputMaybe<Scalars['String']>;
  zipCode: Scalars['String'];
}

/** Fields to narrow down search results for warehouses around a location */
export interface AroundLocationInput {
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  radius?: InputMaybe<Scalars['Int']>;
  searchQuery?: InputMaybe<Scalars['String']>;
}

/** An article is a concrete shape of a product */
export interface Article {
  __typename?: 'Article';
  attributes: Array<Attribute>;
  availabilities: Array<Availability>;
  baseUnit: BaseUnit;
  brand?: Maybe<Brand>;
  brandId: Scalars['ID'];
  id: Scalars['ID'];
  info: ArticleInfo;
  isBuyable: Scalars['Boolean'];
  isMaster: Scalars['Boolean'];
  labels: Array<Scalars['String']>;
  media: Array<Media>;
  options: Array<ArticleOption>;
  prices: Array<Price>;
  product?: Maybe<Product>;
  productId: Scalars['ID'];
  salesUnits: Array<SalesUnit>;
  sku: Scalars['String'];
  status: ArticleStatus;
  taxClass: TaxClass;
  title: Scalars['String'];
}

/** An article is a concrete shape of a product */
export interface ArticleAvailabilitiesArgs {
  warehouseId?: InputMaybe<Scalars['ID']>;
}

/** An article is a concrete shape of a product */
export interface ArticleMediaArgs {
  mediaType?: InputMaybe<MediaType>;
  purpose?: InputMaybe<MediaPurpose>;
}

/** An article is a concrete shape of a product */
export interface ArticlePricesArgs {
  quantity?: InputMaybe<Scalars['Int']>;
}

/** Article information */
export interface ArticleInfo extends SellableInfo {
  __typename?: 'ArticleInfo';
  description?: Maybe<Scalars['String']>;
}

/** Article list filter */
export interface ArticleListFilter {
  __typename?: 'ArticleListFilter';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  type: AttributeType;
  values: Array<ArticleListFilterValue>;
}

/** Value of an article list filter */
export interface ArticleListFilterValue {
  __typename?: 'ArticleListFilterValue';
  applied: Scalars['Boolean'];
  count: Scalars['Int'];
  type: AttributeType;
  value: Scalars['String'];
}

/** Options to be set before adding an article to the cart. This may include gift wrapping or customizations like engraving */
export interface ArticleOption {
  __typename?: 'ArticleOption';
  constraints: Array<ArticleOptionConstraint>;
  id: Scalars['ID'];
  label: Scalars['String'];
  mandatory: Scalars['Boolean'];
  optionType: ArticleOptionType;
  price?: Maybe<Price>;
}

/** Article options may have constraints, like "at most 10 characters are allowed for this text field" */
export interface ArticleOptionConstraint {
  __typename?: 'ArticleOptionConstraint';
  /** The value to which the referenced field shall be compared */
  comparisonValue: Scalars['String'];
  operator: ArticleOptionConstraintOperator;
  /** A reference to the field which shall be compared */
  reference: Scalars['String'];
}

export type ArticleOptionConstraintOperator =
  | 'EQUALS'
  | 'GREATER_THAN'
  | 'INCLUDES'
  | 'LESS_THAN';

export type ArticleOptionType =
  | 'CHECKBOX'
  | 'DATE'
  | 'NUMBER'
  | 'SELECT'
  | 'TEXT';

/** Status of an article */
export type ArticleStatus = 'DISCONTINUED' | 'DRAFT' | 'PUBLISHED';

/** A concrete product attribute (value) */
export interface Attribute {
  __typename?: 'Attribute';
  definition: AttributeDefinition;
  value: Scalars['String'];
}

/** Definition of a product attribute */
export interface AttributeDefinition {
  __typename?: 'AttributeDefinition';
  attributeType: AttributeType;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
}

export type AttributeType = 'BOOLEAN' | 'COLOR' | 'NUMBER' | 'TEXT';

export interface AuthToken {
  __typename?: 'AuthToken';
  expiresIn?: Maybe<Scalars['Int']>;
  value: Scalars['String'];
}

/** Tells how many items of an article are available. Refers to the BaseUnit of the article. */
export interface Availability {
  __typename?: 'Availability';
  value: Scalars['Int'];
  warehouse?: Maybe<Warehouse>;
  warehouseId: Scalars['ID'];
}

/** The base unit is used for all internal calculations */
export interface BaseUnit {
  __typename?: 'BaseUnit';
  id: Scalars['ID'];
  interval?: Maybe<Scalars['Int']>;
  maxQuantity?: Maybe<Scalars['Int']>;
  minQuantity?: Maybe<Scalars['Int']>;
  name: MeasurementUnit;
  standardQuantity?: Maybe<Scalars['Int']>;
}

/** Brand */
export interface Brand {
  __typename?: 'Brand';
  categories?: Maybe<Array<Category>>;
  categoryIds: Array<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  media: Array<Media>;
  products?: Maybe<ProductsResult>;
  slug: Scalars['String'];
  title: Scalars['String'];
}

/** Brand */
export interface BrandMediaArgs {
  mediaType?: InputMaybe<MediaType>;
  purpose?: InputMaybe<MediaPurpose>;
}

/** Brand */
export interface BrandProductsArgs {
  filters?: InputMaybe<Array<ProductsFiltersInput>>;
  paging?: InputMaybe<PagingInput>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<SortInput>>;
}

/** Paged result of a brand list */
export interface BrandsResult extends PagedResult {
  __typename?: 'BrandsResult';
  paging: Paging;
  results: Array<Brand>;
}

/** An instance of a shopping cart */
export interface Cart {
  __typename?: 'Cart';
  coupons: Array<Coupon>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  items: Array<CartItem>;
  /** List of available payment methods for this cart */
  paymentMethods: Array<PaymentMethod>;
  /** List of available shipping methods for this cart */
  shippingMethods: Array<ShippingMethod>;
  totals: Totals;
  updatedAt?: Maybe<Scalars['String']>;
}

/** A cart line item */
export interface CartItem {
  __typename?: 'CartItem';
  article?: Maybe<Article>;
  articleId: Scalars['ID'];
  cartId: Scalars['ID'];
  children: Array<CartItem>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<CartItem>;
  parentItemId?: Maybe<Scalars['ID']>;
  quantity: Scalars['Int'];
  salesUnit: SalesUnit;
  totals: Totals;
}

/** Custom cart item data */
export interface CartItemCustomDataInput {
  positionText?: InputMaybe<Scalars['String']>;
}

/** Result of a carts query */
export interface CartsResult extends PagedResult {
  __typename?: 'CartsResult';
  paging: Paging;
  results: Array<Cart>;
}

/** Paged result of a category list */
export interface CategoriesResult extends PagedResult {
  __typename?: 'CategoriesResult';
  paging: Paging;
  results: Array<Category>;
}

/** Categories are hierarchical containers for products */
export interface Category {
  __typename?: 'Category';
  breadcrumbs: Array<Maybe<CategoryBreadcrumb>>;
  children?: Maybe<Array<Category>>;
  childrenIds: Array<Maybe<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media: Array<Media>;
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['ID']>;
  products?: Maybe<ProductsResult>;
  slug: Scalars['String'];
  title: Scalars['String'];
}

/** Categories are hierarchical containers for products */
export interface CategoryMediaArgs {
  mediaType?: InputMaybe<MediaType>;
  purpose?: InputMaybe<MediaPurpose>;
}

/** Categories are hierarchical containers for products */
export interface CategoryProductsArgs {
  filters?: InputMaybe<Array<ProductsFiltersInput>>;
  paging?: InputMaybe<PagingInput>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<SortInput>>;
}

/** Breadcrumbs for hierarchical categories */
export interface CategoryBreadcrumb {
  __typename?: 'CategoryBreadcrumb';
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
}

/** Checkout state */
export interface CheckoutState {
  __typename?: 'CheckoutState';
  billingAddress?: Maybe<Address>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  paymentMethod?: Maybe<PaymentMethod>;
  shippingAddress?: Maybe<Address>;
  shippingMethod?: Maybe<ShippingMethod>;
}

/** Country */
export interface Country {
  __typename?: 'Country';
  /** ISO 3166-1 code */
  isoCode: Scalars['String'];
  name: Scalars['String'];
}

/** Users can apply coupons to a cart */
export interface Coupon {
  __typename?: 'Coupon';
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  value: Scalars['Int'];
}

/** Currency */
export interface Currency {
  __typename?: 'Currency';
  name: Scalars['String'];
  symbol: Scalars['String'];
}

/** Saved Customer */
export interface Customer {
  __typename?: 'Customer';
  addresses: Array<CustomerAddress>;
  blocked: Scalars['Boolean'];
  customerNumber: Scalars['String'];
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
}

/** A saved address of a customer */
export interface CustomerAddress extends AddressFields {
  __typename?: 'CustomerAddress';
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  id: Scalars['ID'];
  isDefaultBillingAddress: Scalars['Boolean'];
  isDefaultShippingAddress: Scalars['Boolean'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  street2?: Maybe<Scalars['String']>;
  zipCode: Scalars['String'];
}

/** Result of a mutation which deletes objects */
export interface DeleteResult {
  __typename?: 'DeleteResult';
  error?: Maybe<Error>;
  success: Scalars['Boolean'];
}

/** Opening hours can deviate from regular times in order to be able to reflect public holidays, for example. */
export interface DeviatingOpeningTime {
  __typename?: 'DeviatingOpeningTime';
  closed: Scalars['Boolean'];
  date: Scalars['String'];
  from?: Maybe<Scalars['String']>;
  until?: Maybe<Scalars['String']>;
}

/** Discounts can be applied by the system to either CartItems or the Cart as a whole */
export interface Discount {
  __typename?: 'Discount';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  value: Scalars['Int'];
}

/** General purpose error object */
export interface Error {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
}

/** Expenses are additional costs that will be charged to the customer */
export interface Expense {
  __typename?: 'Expense';
  id: Scalars['ID'];
  label: Scalars['String'];
  value: Scalars['Int'];
}

/** Locale */
export interface Locale {
  __typename?: 'Locale';
  isoCode: Scalars['String'];
  label?: Maybe<Scalars['String']>;
}

/** Login data may either be a combination of username and password or a token */
export interface LoginInput {
  password?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}

/** LoginResult */
export interface LoginResult {
  __typename?: 'LoginResult';
  accessToken?: Maybe<AuthToken>;
  customer?: Maybe<Customer>;
  refreshToken?: Maybe<AuthToken>;
}

export type MeasurementUnit =
  | 'ACRE'
  | 'ARES'
  | 'BARL'
  | 'BCUF'
  | 'BDFT'
  | 'BUSL'
  | 'CBME'
  | 'CELI'
  | 'CMET'
  | 'DGEU'
  | 'FOOT'
  | 'GBGA'
  | 'GBOU'
  | 'GBPI'
  | 'GBQA'
  | 'GBTN'
  | 'GGEU'
  | 'GRAM'
  | 'HECT'
  | 'HUWG'
  | 'INCH'
  | 'ITEM'
  | 'KILO'
  | 'KMET'
  | 'LITR'
  | 'METR'
  | 'MIBA'
  | 'MILE'
  | 'MILI'
  | 'MMET'
  | 'OZTR'
  | 'PUND'
  | 'SCMT'
  | 'SMET'
  | 'SMIL'
  | 'SQFO'
  | 'SQIN'
  | 'SQKI'
  | 'SQMI'
  | 'SQYA'
  | 'TONE'
  | 'UCWT'
  | 'USGA'
  | 'USOU'
  | 'USPI'
  | 'USQA'
  | 'USTN'
  | 'YARD';

/** A media object */
export interface Media {
  __typename?: 'Media';
  mediaType: MediaType;
  purpose?: Maybe<MediaPurpose>;
  url: Scalars['String'];
}

/** Purpose of a Media object */
export type MediaPurpose = 'COVER';

/** Type of a media object */
export type MediaType = 'IMAGE' | 'VIDEO';

/** Meta data for SEO */
export interface Meta {
  __typename?: 'Meta';
  description: Scalars['String'];
  robots?: Maybe<Scalars['String']>;
  title: Scalars['String'];
}

export interface Mutation {
  __typename?: 'Mutation';
  addCustomerAddress?: Maybe<CustomerAddress>;
  addToCart?: Maybe<AddToCartResult>;
  addToWishlist?: Maybe<Wishlist>;
  applyCoupon?: Maybe<Cart>;
  cancelReservation?: Maybe<DeleteResult>;
  createCart?: Maybe<Cart>;
  createReservation?: Maybe<Reservation>;
  createWishlist?: Maybe<Wishlist>;
  deleteCart?: Maybe<DeleteResult>;
  deleteCustomerAddress?: Maybe<DeleteResult>;
  deleteWishlist?: Maybe<DeleteResult>;
  finishCheckout?: Maybe<Order>;
  login?: Maybe<LoginResult>;
  register?: Maybe<RegistrationResult>;
  removeFromCart?: Maybe<DeleteResult>;
  removeFromWishlist?: Maybe<DeleteResult>;
  startCheckout?: Maybe<CheckoutState>;
  startSession?: Maybe<Session>;
  updateCartItem?: Maybe<CartItem>;
  updateCheckout?: Maybe<CheckoutState>;
  updateCustomer?: Maybe<Customer>;
  updateCustomerAddress?: Maybe<CustomerAddress>;
}

export interface MutationAddCustomerAddressArgs {
  data: AddressInput;
}

export interface MutationAddToCartArgs {
  cartId: Scalars['ID'];
  items: Array<AddToCartItemInput>;
}

export interface MutationAddToWishlistArgs {
  wishlistId: Scalars['ID'];
}

export interface MutationApplyCouponArgs {
  cartId: Scalars['ID'];
  coupon: Scalars['String'];
}

export interface MutationCancelReservationArgs {
  reservationId: Scalars['ID'];
}

export interface MutationCreateReservationArgs {
  articleId: Scalars['ID'];
  quantity: Scalars['Int'];
  reservationData: ReservationInput;
}

export interface MutationDeleteCartArgs {
  id: Scalars['ID'];
}

export interface MutationDeleteCustomerAddressArgs {
  id: Scalars['ID'];
}

export interface MutationFinishCheckoutArgs {
  cartId: Scalars['ID'];
}

export interface MutationLoginArgs {
  input: LoginInput;
}

export interface MutationRegisterArgs {
  data: RegistrationInput;
}

export interface MutationRemoveFromCartArgs {
  cartItemId: Scalars['ID'];
}

export interface MutationRemoveFromWishlistArgs {
  wishlistItemId: Scalars['ID'];
}

export interface MutationStartCheckoutArgs {
  cartId: Scalars['ID'];
  data: UpdateCheckoutInput;
}

export interface MutationUpdateCartItemArgs {
  data?: InputMaybe<UpdateCartItemInput>;
  id: Scalars['ID'];
}

export interface MutationUpdateCheckoutArgs {
  cartId: Scalars['ID'];
  data: UpdateCheckoutInput;
}

export interface MutationUpdateCustomerArgs {
  data: UpdateCustomerInput;
  id: Scalars['ID'];
}

export interface MutationUpdateCustomerAddressArgs {
  data?: InputMaybe<AddressInput>;
  setDefaultBilling?: InputMaybe<Scalars['Boolean']>;
  setDefaultShipping?: InputMaybe<Scalars['Boolean']>;
}

/** Opening times of a warehouse/store */
export type OpeningTime = DeviatingOpeningTime | RegularOpeningTime;

/** Order */
export interface Order {
  __typename?: 'Order';
  billingAddress: Address;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  items?: Maybe<Array<OrderItem>>;
  paymentInfo: OrderPaymentInfo;
  shippingAddress: Address;
  shippingInfo: OrderShippingInfo;
  status: OrderStatus;
}

/** Order item */
export interface OrderItem {
  __typename?: 'OrderItem';
  article?: Maybe<Article>;
  id: Scalars['ID'];
  orderId: Scalars['ID'];
  price: Scalars['Int'];
  quantity: Scalars['Int'];
  sku: Scalars['ID'];
  title: Scalars['String'];
}

/** Container for payment information of an order */
export interface OrderPaymentInfo {
  __typename?: 'OrderPaymentInfo';
  method: PaymentMethod;
  payments: Array<Payment>;
}

/** Container for shipping information */
export interface OrderShippingInfo {
  __typename?: 'OrderShippingInfo';
  method: ShippingMethod;
  shipments: Array<Shipment>;
}

export type OrderStatus = 'CANCELED' | 'CLOSED' | 'NEW' | 'SHIPPED';

/** Order list filters */
export interface OrdersFiltersInput {
  from?: InputMaybe<Scalars['String']>;
  until?: InputMaybe<Scalars['String']>;
}

/** Paged result of an order list */
export interface OrdersResult extends PagedResult {
  __typename?: 'OrdersResult';
  paging: Paging;
  results?: Maybe<Array<Order>>;
}

/** A page represents a page in the storefront, typically provided by a CMS */
export interface Page {
  __typename?: 'Page';
  blocks: Array<PageBlock>;
  children?: Maybe<Array<Page>>;
  childrenIds: Array<Scalars['ID']>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  meta: Meta;
  reference?: Maybe<PageReference>;
  referenceId?: Maybe<Scalars['ID']>;
  status: PageStatus;
  template?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  url: Scalars['String'];
}

/** A page can have multiple blocks, each of a specific type, which are optionally placed into slots */
export interface PageBlock {
  __typename?: 'PageBlock';
  blockType: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  data: Scalars['ScalarMap'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  /** Page blocks have a specific order within a page. The order field can be null if the page block is global (i.e. not associated with a page) */
  order?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['String']>;
  status: PageBlockStatus;
  updatedAt?: Maybe<Scalars['String']>;
}

export type PageBlockStatus = 'DRAFT' | 'PUBLISHED';

export type PageReference = Article | Brand | Category | Product;

export type PageStatus = 'DRAFT' | 'PUBLISHED';

export interface PagedResult {
  paging: Paging;
}

/** Result of a pages query */
export interface PagesResult extends PagedResult {
  __typename?: 'PagesResult';
  paging: Paging;
  results: Array<Page>;
}

/** Paging information */
export interface Paging {
  __typename?: 'Paging';
  total: Scalars['Int'];
}

/** Paging specifier */
export interface PagingInput {
  limit: Scalars['Int'];
  page: Scalars['Int'];
}

/** Payment */
export interface Payment {
  __typename?: 'Payment';
  status: PaymentStatus;
}

/** Payment Method */
export interface PaymentMethod {
  __typename?: 'PaymentMethod';
  description?: Maybe<Scalars['String']>;
  expense?: Maybe<Expense>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
}

export type PaymentStatus = 'COMPLETE' | 'PENDING';

/** Prices (and their related quantities) always refer to the BaseUnit of an article */
export interface Price {
  __typename?: 'Price';
  currency: Currency;
  discount?: Maybe<Scalars['Int']>;
  grossValue: Scalars['Int'];
  netValue: Scalars['Int'];
  original?: Maybe<Scalars['Int']>;
  quantity: Scalars['Int'];
  referencePrice?: Maybe<ReferencePrice>;
  taxValue: TaxValue;
  validFrom?: Maybe<Scalars['String']>;
  validUntil?: Maybe<Scalars['String']>;
}

/** The product catalog consists of products. Products are made up of one or many articles. Products by their own are not buyable. */
export interface Product {
  __typename?: 'Product';
  articleIds: Array<Scalars['String']>;
  articles?: Maybe<Array<Article>>;
  attributes: Array<Maybe<Attribute>>;
  brand?: Maybe<Brand>;
  brandId: Scalars['ID'];
  categories?: Maybe<Array<Category>>;
  categoryIds: Array<Scalars['ID']>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  info: ProductInfo;
  labels: Array<Scalars['String']>;
  media: Array<Media>;
  relatedProducts?: Maybe<RelatedProductsResult>;
  slug: Scalars['String'];
  status: ProductStatus;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  /** These are the attributes which make up variants. Each article must have these attributes defined. */
  variantAttributes: Array<AttributeDefinition>;
  vendor?: Maybe<Vendor>;
  vendorId?: Maybe<Scalars['ID']>;
}

/** The product catalog consists of products. Products are made up of one or many articles. Products by their own are not buyable. */
export interface ProductMediaArgs {
  mediaType?: InputMaybe<MediaType>;
  purpose?: InputMaybe<MediaPurpose>;
}

/** The product catalog consists of products. Products are made up of one or many articles. Products by their own are not buyable. */
export interface ProductRelatedProductsArgs {
  paging?: InputMaybe<PagingInput>;
  type?: InputMaybe<RelatedProductType>;
}

/** Product information */
export interface ProductInfo extends SellableInfo {
  __typename?: 'ProductInfo';
  description: Scalars['String'];
}

/** Product list filter */
export interface ProductListFilter {
  __typename?: 'ProductListFilter';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  type: AttributeType;
  values: Array<ProductListFilterValue>;
}

/** Value of a product list filter */
export interface ProductListFilterValue {
  __typename?: 'ProductListFilterValue';
  applied: Scalars['Boolean'];
  count: Scalars['Int'];
  type: AttributeType;
  value: Scalars['String'];
}

/** Status of a product */
export type ProductStatus = 'DISCONTINUED' | 'DRAFT' | 'PUBLISHED';

/** Product list filters */
export interface ProductsFiltersInput {
  id: Scalars['ID'];
  values: Array<Scalars['String']>;
}

/** Paged result of a product list */
export interface ProductsResult extends PagedResult {
  __typename?: 'ProductsResult';
  filters: Array<ProductListFilter>;
  paging: Paging;
  results: Array<Product>;
  sortings: Array<Sorting>;
}

export interface Query {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articleByField?: Maybe<Article>;
  brand?: Maybe<Brand>;
  brandByField?: Maybe<Brand>;
  brands?: Maybe<BrandsResult>;
  cart?: Maybe<Cart>;
  carts?: Maybe<CartsResult>;
  categories?: Maybe<CategoriesResult>;
  category?: Maybe<Category>;
  categoryByField?: Maybe<Category>;
  customer?: Maybe<Customer>;
  order?: Maybe<Order>;
  orders?: Maybe<OrdersResult>;
  page?: Maybe<Page>;
  pageByField?: Maybe<Page>;
  pages?: Maybe<PagesResult>;
  product?: Maybe<Product>;
  productByField?: Maybe<Product>;
  products?: Maybe<ProductsResult>;
  reservation?: Maybe<Reservation>;
  reservationByField?: Maybe<Reservation>;
  reservations?: Maybe<ReservationsResult>;
  search?: Maybe<SearchResult>;
  shop?: Maybe<Shop>;
  suggestions: Array<Suggestion>;
  vendor?: Maybe<Vendor>;
  vendorByField?: Maybe<Vendor>;
  vendors?: Maybe<VendorsResult>;
  warehouse?: Maybe<Warehouse>;
  warehouseByField?: Maybe<Warehouse>;
  warehouses?: Maybe<WarehousesResult>;
  wishlist?: Maybe<Wishlist>;
  wishlists?: Maybe<WishlistsResult>;
}

export interface QueryArticleArgs {
  id: Scalars['ID'];
}

export interface QueryArticleByFieldArgs {
  field: Scalars['String'];
  value: Scalars['String'];
}

export interface QueryBrandArgs {
  id: Scalars['ID'];
}

export interface QueryBrandByFieldArgs {
  field: Scalars['String'];
  value: Scalars['String'];
}

export interface QueryBrandsArgs {
  paging?: InputMaybe<PagingInput>;
}

export interface QueryCartArgs {
  id: Scalars['ID'];
}

export interface QueryCategoriesArgs {
  paging?: InputMaybe<PagingInput>;
}

export interface QueryCategoryArgs {
  id: Scalars['ID'];
}

export interface QueryCategoryByFieldArgs {
  field: Scalars['String'];
  value: Scalars['String'];
}

export interface QueryOrderArgs {
  id: Scalars['ID'];
}

export interface QueryOrdersArgs {
  filters?: InputMaybe<Array<OrdersFiltersInput>>;
  paging?: InputMaybe<PagingInput>;
  sort?: InputMaybe<Array<SortInput>>;
}

export interface QueryPageArgs {
  id: Scalars['ID'];
}

export interface QueryPageByFieldArgs {
  field: Scalars['String'];
  value: Scalars['String'];
}

export interface QueryPagesArgs {
  paging?: InputMaybe<PagingInput>;
  sort?: InputMaybe<Array<SortInput>>;
  status?: InputMaybe<Array<PageStatus>>;
}

export interface QueryProductArgs {
  id: Scalars['ID'];
}

export interface QueryProductByFieldArgs {
  field: Scalars['String'];
  value: Scalars['String'];
}

export interface QueryProductsArgs {
  filters?: InputMaybe<Array<ProductsFiltersInput>>;
  paging?: InputMaybe<PagingInput>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<SortInput>>;
}

export interface QueryReservationArgs {
  id: Scalars['ID'];
}

export interface QueryReservationByFieldArgs {
  field: Scalars['String'];
  value: Scalars['String'];
}

export interface QuerySearchArgs {
  filters?: InputMaybe<Array<SearchFiltersInput>>;
  paging?: InputMaybe<PagingInput>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<SortInput>>;
}

export interface QuerySuggestionsArgs {
  searchTerm: Scalars['String'];
}

export interface QueryVendorArgs {
  id: Scalars['ID'];
}

export interface QueryVendorByFieldArgs {
  field: Scalars['String'];
  value: Scalars['String'];
}

export interface QueryWarehouseArgs {
  id: Scalars['ID'];
}

export interface QueryWarehouseByFieldArgs {
  field: Scalars['String'];
  value: Scalars['String'];
}

export interface QueryWarehousesArgs {
  aroundLocation?: InputMaybe<AroundLocationInput>;
}

export interface QueryWishlistArgs {
  id: Scalars['ID'];
}

export interface QueryWishlistsArgs {
  sort?: InputMaybe<Array<SortInput>>;
}

/**
 * A reference price provides a baseline with which prices of different articles can be compared, even though these
 * articles might be sond in different SalesUnits.
 */
export interface ReferencePrice {
  __typename?: 'ReferencePrice';
  currency: Currency;
  grossValue: Scalars['Int'];
  netValue: Scalars['Int'];
  quantity: Scalars['Int'];
  salesUnit: SalesUnit;
  taxValue: TaxValue;
}

/** Customer data for registration */
export interface RegistrationInput {
  addresses: Array<AddressInput>;
  company?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  salutation?: InputMaybe<Scalars['String']>;
}

/** RegistrationResult */
export interface RegistrationResult {
  __typename?: 'RegistrationResult';
  accessToken?: Maybe<AuthToken>;
  customer?: Maybe<Customer>;
  refreshToken?: Maybe<AuthToken>;
}

/** Regular (recurring) opening times of a warehouse/store */
export interface RegularOpeningTime {
  __typename?: 'RegularOpeningTime';
  dayOfWeek: Scalars['String'];
  from: Scalars['String'];
  until: Scalars['String'];
}

/** A product which related to an other product */
export interface RelatedProduct {
  __typename?: 'RelatedProduct';
  product: Product;
  type: RelatedProductType;
}

export type RelatedProductType = 'ACCESSORY' | 'ALTERNATIVE' | 'SUCCESSOR';

/** Paged result of a related-product list */
export interface RelatedProductsResult extends PagedResult {
  __typename?: 'RelatedProductsResult';
  paging: Paging;
  results: Array<RelatedProduct>;
}

/** A reservation of articles in specified quantites in a warehouse */
export interface Reservation {
  __typename?: 'Reservation';
  articles: Array<ReservedArticle>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  reservationNumber: Scalars['String'];
  status: ReservationStatus;
  validUntil: Scalars['String'];
  warehouse?: Maybe<Warehouse>;
  warehouseId: Scalars['ID'];
}

/** Contact data required to create a reservation */
export interface ReservationContactDataInput {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
}

/** Data required to create a new reservation */
export interface ReservationInput {
  articleId: Scalars['ID'];
  contactData: ReservationContactDataInput;
  quantity: Scalars['Int'];
}

export type ReservationStatus = 'CANCELLED' | 'CLOSED' | 'NEW' | 'READY';

/** Result of a reservations query */
export interface ReservationsResult extends PagedResult {
  __typename?: 'ReservationsResult';
  paging: Paging;
  results: Array<Reservation>;
}

/** A reserved article references an article in a specified quantity which is part of a reservation */
export interface ReservedArticle {
  __typename?: 'ReservedArticle';
  article?: Maybe<Article>;
  articleID: Scalars['ID'];
  id: Scalars['ID'];
  quantity: Scalars['Int'];
}

export type ResolveUrlResultType = 'ARTICLE' | 'BRAND' | 'CATEGORY' | 'PRODUCT';

/** A sales unit is the unit in which an article is sold. Every article has to have at least SalesUnit, usually "piece" */
export interface SalesUnit {
  __typename?: 'SalesUnit';
  /** Factor which defines how to convert its BaseUnit to this SalesUnit */
  conversion: Scalars['Int'];
  id: Scalars['ID'];
  name: MeasurementUnit;
}

/** Search filters */
export interface SearchFiltersInput {
  id: Scalars['ID'];
  values: Array<Scalars['String']>;
}

/** Paged search result */
export interface SearchResult extends PagedResult {
  __typename?: 'SearchResult';
  filters: Array<ProductListFilter>;
  paging: Paging;
  results: Array<SearchResultItem>;
  sortings: Array<Sorting>;
}

/** A search result entry for product searches */
export interface SearchResultItem {
  __typename?: 'SearchResultItem';
  previewImage?: Maybe<Scalars['String']>;
  price?: Maybe<Price>;
  reference?: Maybe<SearchResultItemReference>;
  referenceId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: SearchResultItemType;
}

export type SearchResultItemReference = Brand | Category | Product;

export type SearchResultItemType = 'PRODUCT';

export interface SellableInfo {
  description?: Maybe<Scalars['String']>;
}

/** Session */
export interface Session {
  __typename?: 'Session';
  id: Scalars['String'];
}

/** Shipment */
export interface Shipment {
  __typename?: 'Shipment';
  carrier?: Maybe<Scalars['String']>;
  items: Array<ShipmentItem>;
  status: ShipmentStatus;
  trackingNumber?: Maybe<Scalars['String']>;
}

/** A Shipment Item describes which articles have been shipped in which quantity */
export interface ShipmentItem {
  __typename?: 'ShipmentItem';
  article?: Maybe<Article>;
  id: Scalars['ID'];
  quantity: Scalars['Int'];
}

export type ShipmentStatus = 'DELIVERED' | 'PENDING' | 'SHIPPED';

/** Shipping Method */
export interface ShippingMethod {
  __typename?: 'ShippingMethod';
  description?: Maybe<Scalars['String']>;
  expense?: Maybe<Expense>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
}

/** Shop specific settings and configuration */
export interface Shop {
  __typename?: 'Shop';
  currencies: Array<Currency>;
  defaultLocale?: Maybe<Locale>;
  locales: Array<Locale>;
  pricePrecision: Scalars['Int'];
}

/** Sort specifier */
export interface SortInput {
  field: Scalars['String'];
  value: SortValue;
}

export type SortValue = 'ASC' | 'DESC';

/** Sorting option */
export interface Sorting {
  __typename?: 'Sorting';
  applied: Scalars['Boolean'];
  id: Scalars['String'];
  label: Scalars['String'];
}

/** Search Suggestion */
export interface Suggestion {
  __typename?: 'Suggestion';
  result?: Maybe<SuggestionResult>;
  resultId: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: SuggestionType;
}

export type SuggestionResult = Article | Brand | Category | Product;

/** Type of a suggestion entry */
export type SuggestionType = 'ARTICLE' | 'BRAND' | 'CATEGORY' | 'PRODUCT';

/** Tax class */
export interface TaxClass {
  __typename?: 'TaxClass';
  country: Country;
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Fractional value in percent applied to the net amount, e.g. 19 */
  value: Scalars['Int'];
}

/** An actual tax value, referring to a TaxClass */
export interface TaxValue {
  __typename?: 'TaxValue';
  taxClass: TaxClass;
  value: Scalars['Int'];
}

/** Total amounts of a Cart or a CartItem */
export interface Totals {
  __typename?: 'Totals';
  discounts: Array<Discount>;
  expenses: Array<Expense>;
  gross: Scalars['Int'];
  net: Scalars['Int'];
  taxes: Array<Maybe<TaxValue>>;
}

/** Update cart item data */
export interface UpdateCartItemInput {
  customData?: InputMaybe<CartItemCustomDataInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  salesUnitId?: InputMaybe<Scalars['ID']>;
}

/** Checkout data to be updated */
export interface UpdateCheckoutInput {
  billingAddress?: InputMaybe<AddressInput>;
  email?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<Scalars['ID']>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingMethod?: InputMaybe<Scalars['ID']>;
}

/** Customer data to be updated */
export interface UpdateCustomerInput {
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
}

/** Vendors sell products. In most cases there is only one vendor in the system, but there may be many for marketplaces */
export interface Vendor {
  __typename?: 'Vendor';
  id: Scalars['ID'];
  name: Scalars['String'];
}

/** Result of a vendors query */
export interface VendorsResult extends PagedResult {
  __typename?: 'VendorsResult';
  paging: Paging;
  results: Array<Vendor>;
}

/** A warehouse */
export interface Warehouse {
  __typename?: 'Warehouse';
  id: Scalars['ID'];
  name: Scalars['String'];
  openingTimes: Array<OpeningTime>;
}

/** Result of a warehouses query */
export interface WarehousesResult extends PagedResult {
  __typename?: 'WarehousesResult';
  paging: Paging;
  results: Array<Warehouse>;
}

/** Wishlist */
export interface Wishlist {
  __typename?: 'Wishlist';
  id: Scalars['ID'];
  items: Array<WishlistItem>;
}

/** Wishlist item */
export interface WishlistItem {
  __typename?: 'WishlistItem';
  article?: Maybe<Article>;
  articleId: Scalars['ID'];
  id: Scalars['ID'];
  quantity: Scalars['Int'];
}

/** Paged result of a wishlist list */
export interface WishlistsResult extends PagedResult {
  __typename?: 'WishlistsResult';
  paging: Paging;
  results?: Maybe<Array<Wishlist>>;
}

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
  AroundLocationInput: AroundLocationInput;
  Article: ResolverTypeWrapper<Article>;
  ArticleInfo: ResolverTypeWrapper<ArticleInfo>;
  ArticleListFilter: ResolverTypeWrapper<ArticleListFilter>;
  ArticleListFilterValue: ResolverTypeWrapper<ArticleListFilterValue>;
  ArticleOption: ResolverTypeWrapper<ArticleOption>;
  ArticleOptionConstraint: ResolverTypeWrapper<ArticleOptionConstraint>;
  ArticleOptionConstraintOperator: ArticleOptionConstraintOperator;
  ArticleOptionType: ArticleOptionType;
  ArticleStatus: ArticleStatus;
  Attribute: ResolverTypeWrapper<Attribute>;
  AttributeDefinition: ResolverTypeWrapper<AttributeDefinition>;
  AttributeType: AttributeType;
  AuthToken: ResolverTypeWrapper<AuthToken>;
  Availability: ResolverTypeWrapper<Availability>;
  BaseUnit: ResolverTypeWrapper<BaseUnit>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Brand: ResolverTypeWrapper<Brand>;
  BrandsResult: ResolverTypeWrapper<BrandsResult>;
  Cart: ResolverTypeWrapper<Cart>;
  CartItem: ResolverTypeWrapper<CartItem>;
  CartItemCustomDataInput: CartItemCustomDataInput;
  CartsResult: ResolverTypeWrapper<CartsResult>;
  CategoriesResult: ResolverTypeWrapper<CategoriesResult>;
  Category: ResolverTypeWrapper<Category>;
  CategoryBreadcrumb: ResolverTypeWrapper<CategoryBreadcrumb>;
  CheckoutState: ResolverTypeWrapper<CheckoutState>;
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
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Locale: ResolverTypeWrapper<Locale>;
  LoginInput: LoginInput;
  LoginResult: ResolverTypeWrapper<LoginResult>;
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
  OrdersFiltersInput: OrdersFiltersInput;
  OrdersResult: ResolverTypeWrapper<OrdersResult>;
  Page: ResolverTypeWrapper<
    Omit<Page, 'reference'> & {
      reference?: Maybe<ResolversTypes['PageReference']>;
    }
  >;
  PageBlock: ResolverTypeWrapper<PageBlock>;
  PageBlockStatus: PageBlockStatus;
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
    | ResolversTypes['OrdersResult']
    | ResolversTypes['PagesResult']
    | ResolversTypes['ProductsResult']
    | ResolversTypes['RelatedProductsResult']
    | ResolversTypes['ReservationsResult']
    | ResolversTypes['SearchResult']
    | ResolversTypes['VendorsResult']
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
  ProductListFilter: ResolverTypeWrapper<ProductListFilter>;
  ProductListFilterValue: ResolverTypeWrapper<ProductListFilterValue>;
  ProductStatus: ProductStatus;
  ProductsFiltersInput: ProductsFiltersInput;
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
  SearchFiltersInput: SearchFiltersInput;
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
  Session: ResolverTypeWrapper<Session>;
  Shipment: ResolverTypeWrapper<Shipment>;
  ShipmentItem: ResolverTypeWrapper<ShipmentItem>;
  ShipmentStatus: ShipmentStatus;
  ShippingMethod: ResolverTypeWrapper<ShippingMethod>;
  Shop: ResolverTypeWrapper<Shop>;
  SortInput: SortInput;
  SortValue: SortValue;
  Sorting: ResolverTypeWrapper<Sorting>;
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
  Vendor: ResolverTypeWrapper<Vendor>;
  VendorsResult: ResolverTypeWrapper<VendorsResult>;
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
  AroundLocationInput: AroundLocationInput;
  Article: Article;
  ArticleInfo: ArticleInfo;
  ArticleListFilter: ArticleListFilter;
  ArticleListFilterValue: ArticleListFilterValue;
  ArticleOption: ArticleOption;
  ArticleOptionConstraint: ArticleOptionConstraint;
  Attribute: Attribute;
  AttributeDefinition: AttributeDefinition;
  AuthToken: AuthToken;
  Availability: Availability;
  BaseUnit: BaseUnit;
  Boolean: Scalars['Boolean'];
  Brand: Brand;
  BrandsResult: BrandsResult;
  Cart: Cart;
  CartItem: CartItem;
  CartItemCustomDataInput: CartItemCustomDataInput;
  CartsResult: CartsResult;
  CategoriesResult: CategoriesResult;
  Category: Category;
  CategoryBreadcrumb: CategoryBreadcrumb;
  CheckoutState: CheckoutState;
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
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Locale: Locale;
  LoginInput: LoginInput;
  LoginResult: LoginResult;
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
  OrdersFiltersInput: OrdersFiltersInput;
  OrdersResult: OrdersResult;
  Page: Omit<Page, 'reference'> & {
    reference?: Maybe<ResolversParentTypes['PageReference']>;
  };
  PageBlock: PageBlock;
  PageReference:
    | ResolversParentTypes['Article']
    | ResolversParentTypes['Brand']
    | ResolversParentTypes['Category']
    | ResolversParentTypes['Product'];
  PagedResult:
    | ResolversParentTypes['BrandsResult']
    | ResolversParentTypes['CartsResult']
    | ResolversParentTypes['CategoriesResult']
    | ResolversParentTypes['OrdersResult']
    | ResolversParentTypes['PagesResult']
    | ResolversParentTypes['ProductsResult']
    | ResolversParentTypes['RelatedProductsResult']
    | ResolversParentTypes['ReservationsResult']
    | ResolversParentTypes['SearchResult']
    | ResolversParentTypes['VendorsResult']
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
  ProductListFilter: ProductListFilter;
  ProductListFilterValue: ProductListFilterValue;
  ProductsFiltersInput: ProductsFiltersInput;
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
  SearchFiltersInput: SearchFiltersInput;
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
  Session: Session;
  Shipment: Shipment;
  ShipmentItem: ShipmentItem;
  ShippingMethod: ShippingMethod;
  Shop: Shop;
  SortInput: SortInput;
  Sorting: Sorting;
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
  Vendor: Vendor;
  VendorsResult: VendorsResult;
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
    RequireFields<ArticleAvailabilitiesArgs, never>
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
    RequireFields<ArticleMediaArgs, never>
  >;
  options?: Resolver<
    Array<ResolversTypes['ArticleOption']>,
    ParentType,
    ContextType
  >;
  prices?: Resolver<
    Array<ResolversTypes['Price']>,
    ParentType,
    ContextType,
    RequireFields<ArticlePricesArgs, never>
  >;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  salesUnits?: Resolver<
    Array<ResolversTypes['SalesUnit']>,
    ParentType,
    ContextType
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

export type ArticleListFilterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticleListFilter'] = ResolversParentTypes['ArticleListFilter']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AttributeType'], ParentType, ContextType>;
  values?: Resolver<
    Array<ResolversTypes['ArticleListFilterValue']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleListFilterValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticleListFilterValue'] = ResolversParentTypes['ArticleListFilterValue']
> = {
  applied?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AttributeType'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleOptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticleOption'] = ResolversParentTypes['ArticleOption']
> = {
  constraints?: Resolver<
    Array<ResolversTypes['ArticleOptionConstraint']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mandatory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  optionType?: Resolver<
    ResolversTypes['ArticleOptionType'],
    ParentType,
    ContextType
  >;
  price?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleOptionConstraintResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticleOptionConstraint'] = ResolversParentTypes['ArticleOptionConstraint']
> = {
  comparisonValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operator?: Resolver<
    ResolversTypes['ArticleOptionConstraintOperator'],
    ParentType,
    ContextType
  >;
  reference?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type AuthTokenResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthToken'] = ResolversParentTypes['AuthToken']
> = {
  expiresIn?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
    RequireFields<BrandMediaArgs, never>
  >;
  products?: Resolver<
    Maybe<ResolversTypes['ProductsResult']>,
    ParentType,
    ContextType,
    RequireFields<BrandProductsArgs, never>
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
    RequireFields<CategoryMediaArgs, never>
  >;
  parent?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  products?: Resolver<
    Maybe<ResolversTypes['ProductsResult']>,
    ParentType,
    ContextType,
    RequireFields<CategoryProductsArgs, never>
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

export type LocaleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Locale'] = ResolversParentTypes['Locale']
> = {
  isoCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']
> = {
  accessToken?: Resolver<
    Maybe<ResolversTypes['AuthToken']>,
    ParentType,
    ContextType
  >;
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType
  >;
  refreshToken?: Resolver<
    Maybe<ResolversTypes['AuthToken']>,
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
  login?: Resolver<
    Maybe<ResolversTypes['LoginResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'input'>
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
    RequireFields<MutationUpdateCustomerAddressArgs, never>
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
    Array<ResolversTypes['PageBlock']>,
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

export type PageBlockResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageBlock'] = ResolversParentTypes['PageBlock']
> = {
  blockType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  data?: Resolver<ResolversTypes['ScalarMap'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PageBlockStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
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
    | 'OrdersResult'
    | 'PagesResult'
    | 'ProductsResult'
    | 'RelatedProductsResult'
    | 'ReservationsResult'
    | 'SearchResult'
    | 'VendorsResult'
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
    ContextType
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
  media?: Resolver<
    Array<ResolversTypes['Media']>,
    ParentType,
    ContextType,
    RequireFields<ProductMediaArgs, never>
  >;
  relatedProducts?: Resolver<
    Maybe<ResolversTypes['RelatedProductsResult']>,
    ParentType,
    ContextType,
    RequireFields<ProductRelatedProductsArgs, never>
  >;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProductStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  variantAttributes?: Resolver<
    Array<ResolversTypes['AttributeDefinition']>,
    ParentType,
    ContextType
  >;
  vendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType>;
  vendorId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductInfo'] = ResolversParentTypes['ProductInfo']
> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductListFilterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductListFilter'] = ResolversParentTypes['ProductListFilter']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AttributeType'], ParentType, ContextType>;
  values?: Resolver<
    Array<ResolversTypes['ProductListFilterValue']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductListFilterValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductListFilterValue'] = ResolversParentTypes['ProductListFilterValue']
> = {
  applied?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AttributeType'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductsResult'] = ResolversParentTypes['ProductsResult']
> = {
  filters?: Resolver<
    Array<ResolversTypes['ProductListFilter']>,
    ParentType,
    ContextType
  >;
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  sortings?: Resolver<
    Array<ResolversTypes['Sorting']>,
    ParentType,
    ContextType
  >;
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
    RequireFields<QueryBrandsArgs, never>
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
    RequireFields<QueryCategoriesArgs, never>
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
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
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
    RequireFields<QueryOrdersArgs, never>
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
    RequireFields<QueryPagesArgs, never>
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
    RequireFields<QueryProductsArgs, never>
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
    RequireFields<QuerySearchArgs, never>
  >;
  shop?: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType>;
  suggestions?: Resolver<
    Array<ResolversTypes['Suggestion']>,
    ParentType,
    ContextType,
    RequireFields<QuerySuggestionsArgs, 'searchTerm'>
  >;
  vendor?: Resolver<
    Maybe<ResolversTypes['Vendor']>,
    ParentType,
    ContextType,
    RequireFields<QueryVendorArgs, 'id'>
  >;
  vendorByField?: Resolver<
    Maybe<ResolversTypes['Vendor']>,
    ParentType,
    ContextType,
    RequireFields<QueryVendorByFieldArgs, 'field' | 'value'>
  >;
  vendors?: Resolver<
    Maybe<ResolversTypes['VendorsResult']>,
    ParentType,
    ContextType
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
    RequireFields<QueryWarehousesArgs, never>
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
    RequireFields<QueryWishlistsArgs, never>
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
  accessToken?: Resolver<
    Maybe<ResolversTypes['AuthToken']>,
    ParentType,
    ContextType
  >;
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType
  >;
  refreshToken?: Resolver<
    Maybe<ResolversTypes['AuthToken']>,
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
    Array<ResolversTypes['ProductListFilter']>,
    ParentType,
    ContextType
  >;
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<
    Array<ResolversTypes['SearchResultItem']>,
    ParentType,
    ContextType
  >;
  sortings?: Resolver<
    Array<ResolversTypes['Sorting']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResultItem'] = ResolversParentTypes['SearchResultItem']
> = {
  previewImage?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  price?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  reference?: Resolver<
    Maybe<ResolversTypes['SearchResultItemReference']>,
    ParentType,
    ContextType
  >;
  referenceId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<
    ResolversTypes['SearchResultItemType'],
    ParentType,
    ContextType
  >;
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

export type SortingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Sorting'] = ResolversParentTypes['Sorting']
> = {
  applied?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type VendorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Vendor'] = ResolversParentTypes['Vendor']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VendorsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VendorsResult'] = ResolversParentTypes['VendorsResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Vendor']>, ParentType, ContextType>;
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
  Article?: ArticleResolvers<ContextType>;
  ArticleInfo?: ArticleInfoResolvers<ContextType>;
  ArticleListFilter?: ArticleListFilterResolvers<ContextType>;
  ArticleListFilterValue?: ArticleListFilterValueResolvers<ContextType>;
  ArticleOption?: ArticleOptionResolvers<ContextType>;
  ArticleOptionConstraint?: ArticleOptionConstraintResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  AttributeDefinition?: AttributeDefinitionResolvers<ContextType>;
  AuthToken?: AuthTokenResolvers<ContextType>;
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
  Locale?: LocaleResolvers<ContextType>;
  LoginResult?: LoginResultResolvers<ContextType>;
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
  PageBlock?: PageBlockResolvers<ContextType>;
  PageReference?: PageReferenceResolvers<ContextType>;
  PagedResult?: PagedResultResolvers<ContextType>;
  PagesResult?: PagesResultResolvers<ContextType>;
  Paging?: PagingResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  PaymentMethod?: PaymentMethodResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductInfo?: ProductInfoResolvers<ContextType>;
  ProductListFilter?: ProductListFilterResolvers<ContextType>;
  ProductListFilterValue?: ProductListFilterValueResolvers<ContextType>;
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
  Session?: SessionResolvers<ContextType>;
  Shipment?: ShipmentResolvers<ContextType>;
  ShipmentItem?: ShipmentItemResolvers<ContextType>;
  ShippingMethod?: ShippingMethodResolvers<ContextType>;
  Shop?: ShopResolvers<ContextType>;
  Sorting?: SortingResolvers<ContextType>;
  Suggestion?: SuggestionResolvers<ContextType>;
  SuggestionResult?: SuggestionResultResolvers<ContextType>;
  TaxClass?: TaxClassResolvers<ContextType>;
  TaxValue?: TaxValueResolvers<ContextType>;
  Totals?: TotalsResolvers<ContextType>;
  Vendor?: VendorResolvers<ContextType>;
  VendorsResult?: VendorsResultResolvers<ContextType>;
  Warehouse?: WarehouseResolvers<ContextType>;
  WarehousesResult?: WarehousesResultResolvers<ContextType>;
  Wishlist?: WishlistResolvers<ContextType>;
  WishlistItem?: WishlistItemResolvers<ContextType>;
  WishlistsResult?: WishlistsResultResolvers<ContextType>;
};
