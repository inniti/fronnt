import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

/** One item to be added to the cart */
export interface AddToCartItemInput {
  sku: Scalars['ID'];
  quantity: Scalars['Int'];
  salesUnitId?: Maybe<Scalars['ID']>;
  parentCartItemId?: Maybe<Scalars['ID']>;
  customData?: Maybe<CartItemCustomDataInput>;
}

/** An address */
export interface Address extends AddressFields {
  __typename?: 'Address';
  name: Scalars['String'];
  street: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
}

export interface AddressFields {
  name: Scalars['String'];
  street: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
}

/** Address data */
export interface AddressInput {
  name: Scalars['String'];
  street: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
}

/** An article is a concrete shape of a product */
export interface Article {
  __typename?: 'Article';
  id: Scalars['ID'];
  sku: Scalars['String'];
  title: Scalars['String'];
  productId: Scalars['ID'];
  media: Array<Media>;
  description?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['ID']>;
  brand?: Maybe<Brand>;
  isBuyable: Scalars['Boolean'];
  isMaster: Scalars['Boolean'];
  labels: Array<Scalars['String']>;
  attributes: Array<Attribute>;
  meta: Meta;
  prices: Array<Price>;
  referencePrice?: Maybe<ReferencePrice>;
  availabilities: Array<Availability>;
  status: ArticleStatus;
  product?: Maybe<Product>;
  salesUnits: Array<SalesUnit>;
  baseUnit: BaseUnit;
}

/** An article is a concrete shape of a product */
export interface ArticlePricesArgs {
  quantity?: Maybe<Scalars['Int']>;
}

/** Article list filter */
export interface ArticleListFilter {
  __typename?: 'ArticleListFilter';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  values: Array<ArticleListFilterValue>;
}

/** Value of an article list filter */
export interface ArticleListFilterValue {
  __typename?: 'ArticleListFilterValue';
  type: Scalars['String'];
  value: Scalars['String'];
  applied: Scalars['Boolean'];
  count: Scalars['Int'];
}

/** Status of an article */
export type ArticleStatus = 'DRAFT' | 'PUBLISHED' | 'DISCONTINUED';

/** Paged result of an article list */
export interface ArticlesResult extends PagedResult {
  __typename?: 'ArticlesResult';
  paging: Paging;
  results: Array<Article>;
  filters: Array<ArticleListFilter>;
  sortings: Array<Sorting>;
}

/** Article list search filters */
export interface ArticlesSearchFiltersInput {
  id: Scalars['ID'];
  values: Array<Scalars['String']>;
}

/** A concrete product attribute (value) */
export interface Attribute {
  __typename?: 'Attribute';
  definition: AttributeDefinition;
  value: Scalars['String'];
}

/** Definition of a product attribute */
export interface AttributeDefinition {
  __typename?: 'AttributeDefinition';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  super: Scalars['Boolean'];
  type: AttributeType;
}

export type AttributeType = 'NUMBER' | 'COLOR' | 'STRING' | 'BOOLEAN';

/** Tells how many items of an article are available */
export interface Availability {
  __typename?: 'Availability';
  value: Scalars['Int'];
  warehouseId: Scalars['ID'];
  warehouse: Warehouse;
}

/** The base unit is used for all internal calculations */
export interface BaseUnit {
  __typename?: 'BaseUnit';
  id: Scalars['ID'];
  name: Scalars['String'];
  minQuantity?: Maybe<Scalars['Int']>;
  maxQuantity?: Maybe<Scalars['Int']>;
  standardQuantity?: Maybe<Scalars['Int']>;
  interval?: Maybe<Scalars['Int']>;
}

/** Brand */
export interface Brand {
  __typename?: 'Brand';
  id: Scalars['ID'];
  title: Scalars['String'];
  media?: Maybe<Array<Media>>;
  slug: Scalars['String'];
  description: Scalars['String'];
  meta: Meta;
  categoryIds: Array<Scalars['String']>;
  categories?: Maybe<CategoriesResult>;
  products?: Maybe<ProductsResult>;
}

/** Brand */
export interface BrandCategoriesArgs {
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

/** Brand */
export interface BrandProductsArgs {
  query?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<ProductsSearchFiltersInput>>;
  sort?: Maybe<Array<SortInput>>;
  paging?: Maybe<PagingInput>;
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
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
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  items: Array<CartItem>;
  coupons: Array<Coupon>;
  totals: Totals;
}

/** A cart line item */
export interface CartItem {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  cartId: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  articleId: Scalars['ID'];
  article?: Maybe<Article>;
  parentItemId?: Maybe<Scalars['ID']>;
  parent?: Maybe<CartItem>;
  quantity: Scalars['Int'];
  salesUnitId: Scalars['ID'];
  salesUnit: SalesUnit;
  children: Array<CartItem>;
  totals: Totals;
}

/** Custom cart item data */
export interface CartItemCustomDataInput {
  positionText?: Maybe<Scalars['String']>;
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
  id: Scalars['ID'];
  title: Scalars['String'];
  media?: Maybe<Array<Media>>;
  description?: Maybe<Scalars['String']>;
  childrenIds: Array<Maybe<Scalars['String']>>;
  parentId?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  meta: Meta;
  products?: Maybe<ProductsResult>;
  parent?: Maybe<Category>;
  children?: Maybe<CategoriesResult>;
}

/** Categories are hierarchical containers for products */
export interface CategoryProductsArgs {
  query?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<ProductsSearchFiltersInput>>;
  sort?: Maybe<Array<SortInput>>;
  paging?: Maybe<PagingInput>;
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

/** Categories are hierarchical containers for products */
export interface CategoryChildrenArgs {
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

/** Checkout state */
export interface CheckoutState {
  __typename?: 'CheckoutState';
  id: Scalars['ID'];
  payment?: Maybe<PaymentInfo>;
  shippingAddress?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
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

/** Custom query condition applied to filterable list queries */
export interface CustomQueryConditionInput {
  field: Scalars['String'];
  operator: Scalars['String'];
  value: Scalars['String'];
}

/** Saved Customer */
export interface Customer {
  __typename?: 'Customer';
  id: Scalars['ID'];
  customerNumber: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  blocked: Scalars['Boolean'];
  email: Scalars['String'];
  addresses?: Maybe<Array<CustomerAddress>>;
}

/** A saved address of a customer */
export interface CustomerAddress extends AddressFields {
  __typename?: 'CustomerAddress';
  id: Scalars['ID'];
  name: Scalars['String'];
  street: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
}

/** Result of a mutation which deletes objects */
export interface DeleteResult {
  __typename?: 'DeleteResult';
  success: Scalars['Boolean'];
  error?: Maybe<Error>;
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
}

/** A media object */
export interface Media {
  __typename?: 'Media';
  type: MediaType;
  url: Scalars['String'];
}

/** Type of a media object */
export type MediaType = 'IMAGE' | 'VIDEO';

/** Meta data for SEO */
export interface Meta {
  __typename?: 'Meta';
  description: Scalars['String'];
  title: Scalars['String'];
  robots?: Maybe<Scalars['String']>;
}

export interface Mutation {
  __typename?: 'Mutation';
  createCart?: Maybe<Cart>;
  deleteCart?: Maybe<DeleteResult>;
  addToCart?: Maybe<Array<CartItem>>;
  updateCartItem?: Maybe<CartItem>;
  removeFromCart?: Maybe<DeleteResult>;
  applyCoupon?: Maybe<Cart>;
  createWishlist?: Maybe<Wishlist>;
  deleteWishlist?: Maybe<DeleteResult>;
  addToWishlist?: Maybe<Wishlist>;
  removeFromWishlist?: Maybe<DeleteResult>;
  startCheckout?: Maybe<CheckoutState>;
  updateCheckout?: Maybe<CheckoutState>;
  finishCheckout?: Maybe<Order>;
  register?: Maybe<Customer>;
  updateCustomer?: Maybe<Customer>;
}

export interface MutationDeleteCartArgs {
  id: Scalars['ID'];
}

export interface MutationAddToCartArgs {
  cartId: Scalars['ID'];
  items: Array<AddToCartItemInput>;
}

export interface MutationUpdateCartItemArgs {
  id: Scalars['ID'];
  data?: Maybe<UpdateCartItemInput>;
}

export interface MutationRemoveFromCartArgs {
  cartItemId: Scalars['ID'];
}

export interface MutationApplyCouponArgs {
  cartId: Scalars['ID'];
  coupon: Scalars['String'];
}

export interface MutationAddToWishlistArgs {
  wishlistId: Scalars['ID'];
}

export interface MutationRemoveFromWishlistArgs {
  wishlistItemId: Scalars['ID'];
}

export interface MutationStartCheckoutArgs {
  cartId: Scalars['ID'];
  data: UpdateCheckoutInput;
}

export interface MutationUpdateCheckoutArgs {
  cartId: Scalars['ID'];
  data: UpdateCheckoutInput;
}

export interface MutationFinishCheckoutArgs {
  cartId: Scalars['ID'];
}

export interface MutationRegisterArgs {
  data: RegistrationInput;
}

export interface MutationUpdateCustomerArgs {
  id: Scalars['ID'];
  data: UpdateCustomerInput;
}

/** Order */
export interface Order {
  __typename?: 'Order';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  items?: Maybe<Array<OrderItem>>;
  billingAddress: Address;
  shippingAddress: Address;
  payment: PaymentInfo;
}

/** Order item */
export interface OrderItem {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  sku: Scalars['ID'];
  article?: Maybe<Article>;
  quantity: Scalars['Int'];
  price: Scalars['Int'];
  orderId: Scalars['ID'];
}

/** Paged result of an order list */
export interface OrdersResult extends PagedResult {
  __typename?: 'OrdersResult';
  paging: Paging;
  results?: Maybe<Array<Order>>;
}

export interface PagedResult {
  paging: Paging;
}

/** Paging information */
export interface Paging {
  __typename?: 'Paging';
  total: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
}

/** Paging specifier */
export interface PagingInput {
  limit: Scalars['Int'];
  page: Scalars['Int'];
}

/** Container for payment information */
export interface PaymentInfo {
  __typename?: 'PaymentInfo';
  method: Scalars['String'];
}

/** Prices (and their related quantities) always refer to the BaseUnit of an article */
export interface Price {
  __typename?: 'Price';
  currency: Currency;
  quantity: Scalars['Int'];
  netValue: Scalars['Int'];
  taxClass: TaxClass;
  validFrom?: Maybe<Scalars['String']>;
  validUntil?: Maybe<Scalars['String']>;
  original?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Int']>;
}

/** The product catalog consists of products. Products are made up of one or many articles. Products by their own are not buyable. */
export interface Product {
  __typename?: 'Product';
  id: Scalars['ID'];
  title: Scalars['String'];
  articleIds: Array<Scalars['String']>;
  categoryIds: Array<Scalars['ID']>;
  media: Array<Media>;
  description: Scalars['String'];
  brandId?: Maybe<Scalars['ID']>;
  brand?: Maybe<Brand>;
  labels: Array<Scalars['String']>;
  superAttributeDefinitions: Array<AttributeDefinition>;
  attributes: Array<Maybe<Attribute>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  meta: Meta;
  status: ProductStatus;
  articles?: Maybe<ArticlesResult>;
  categories?: Maybe<Array<Category>>;
}

/** The product catalog consists of products. Products are made up of one or many articles. Products by their own are not buyable. */
export interface ProductArticlesArgs {
  filters?: Maybe<Array<ArticlesSearchFiltersInput>>;
  sort?: Maybe<Array<SortInput>>;
  paging?: Maybe<PagingInput>;
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

/** The product catalog consists of products. Products are made up of one or many articles. Products by their own are not buyable. */
export interface ProductCategoriesArgs {
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

/** Product list filter */
export interface ProductListFilter {
  __typename?: 'ProductListFilter';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  values: Array<ProductListFilterValue>;
}

/** Value of a product list filter */
export interface ProductListFilterValue {
  __typename?: 'ProductListFilterValue';
  type: Scalars['String'];
  value: Scalars['String'];
  applied: Scalars['Boolean'];
  count: Scalars['Int'];
}

/** Status of a product */
export type ProductStatus = 'DRAFT' | 'PUBLISHED' | 'DISCONTINUED';

/** Paged result of a product list */
export interface ProductsResult extends PagedResult {
  __typename?: 'ProductsResult';
  paging: Paging;
  results: Array<Product>;
  filters: Array<ProductListFilter>;
  sortings: Array<Sorting>;
}

/** Product list search filters */
export interface ProductsSearchFiltersInput {
  id: Scalars['ID'];
  values: Array<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  shop?: Maybe<Shop>;
  products?: Maybe<ProductsResult>;
  product?: Maybe<Product>;
  productBySlug?: Maybe<Product>;
  article?: Maybe<Article>;
  brands?: Maybe<BrandsResult>;
  brand?: Maybe<Brand>;
  brandBySlug?: Maybe<Brand>;
  categories?: Maybe<CategoriesResult>;
  category?: Maybe<Category>;
  categoryBySlug?: Maybe<Category>;
  suggestions: Array<Suggestion>;
  carts?: Maybe<CartsResult>;
  cart?: Maybe<Cart>;
  wishlists?: Maybe<WishlistsResult>;
  wishlist?: Maybe<Wishlist>;
  orders?: Maybe<OrdersResult>;
  order?: Maybe<Order>;
  customer?: Maybe<Customer>;
  resolveUrl?: Maybe<ResolveUrlResult>;
}

export interface QueryProductsArgs {
  query?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<ProductsSearchFiltersInput>>;
  sort?: Maybe<Array<SortInput>>;
  paging?: Maybe<PagingInput>;
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

export interface QueryProductArgs {
  id: Scalars['ID'];
}

export interface QueryProductBySlugArgs {
  slug: Scalars['String'];
}

export interface QueryArticleArgs {
  id: Scalars['ID'];
}

export interface QueryBrandsArgs {
  paging?: Maybe<PagingInput>;
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

export interface QueryBrandArgs {
  id: Scalars['ID'];
}

export interface QueryBrandBySlugArgs {
  slug: Scalars['String'];
}

export interface QueryCategoriesArgs {
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

export interface QueryCategoryArgs {
  id: Scalars['ID'];
}

export interface QueryCategoryBySlugArgs {
  slug: Scalars['String'];
}

export interface QuerySuggestionsArgs {
  searchTerm?: Maybe<Scalars['String']>;
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

export interface QueryCartsArgs {
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

export interface QueryCartArgs {
  id: Scalars['ID'];
}

export interface QueryWishlistsArgs {
  sort?: Maybe<Array<SortInput>>;
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

export interface QueryWishlistArgs {
  id: Scalars['ID'];
}

export interface QueryOrdersArgs {
  paging?: Maybe<PagingInput>;
  sort?: Maybe<Array<SortInput>>;
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

export interface QueryOrderArgs {
  id: Scalars['ID'];
}

export interface QueryResolveUrlArgs {
  url?: Maybe<Scalars['String']>;
}

/**
 * A reference price provides a baseline with which prices of different articles can be compared, even though these
 * articles might be sond in different SalesUnits.
 */
export interface ReferencePrice {
  __typename?: 'ReferencePrice';
  quantity: Scalars['Int'];
  value: Scalars['Int'];
  salesUnit: SalesUnit;
  taxClass: TaxClass;
  currency: Currency;
}

/** Customer data for registration */
export interface RegistrationInput {
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}

export interface ResolveUrlResult {
  __typename?: 'ResolveUrlResult';
  resolved?: Maybe<Scalars['Boolean']>;
  resultId?: Maybe<Scalars['ID']>;
  resultType?: Maybe<ResolveUrlResultType>;
  redirectUrl?: Maybe<Scalars['String']>;
}

export type ResolveUrlResultType = 'CATEGORY' | 'PRODUCT' | 'ARTICLE' | 'BRAND';

/** A sales unit is the unit in which an article is sold. Every article has to have at least SalesUnit, usually "piece" */
export interface SalesUnit {
  __typename?: 'SalesUnit';
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Factor which defines how to convert its BaseUnit to this SalesUnit */
  conversion: Scalars['Int'];
}

/** Shop specific settings and configuration */
export interface Shop {
  __typename?: 'Shop';
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
  id: Scalars['String'];
  label: Scalars['String'];
  applied: Scalars['Boolean'];
}

/** Search Suggestion */
export interface Suggestion {
  __typename?: 'Suggestion';
  type: SuggestionType;
  resultId: Scalars['ID'];
  title: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
}

/** Type of a suggestion entry */
export type SuggestionType = 'PRODUCT' | 'ARTICLE' | 'BRAND' | 'CATEGORY';

/** Tax class */
export interface TaxClass {
  __typename?: 'TaxClass';
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Fractional value in percent applied to the net amount, e.g. 19 */
  value: Scalars['Int'];
}

/** Total amounts of a Cart or a CartItem */
export interface Totals {
  __typename?: 'Totals';
  net: Scalars['Int'];
  gross: Scalars['Int'];
  taxes: Array<TaxClass>;
  discounts: Array<Discount>;
}

/** Update cart item data */
export interface UpdateCartItemInput {
  quantity?: Maybe<Scalars['Int']>;
  salesUnitId?: Maybe<Scalars['ID']>;
  customData?: Maybe<CartItemCustomDataInput>;
}

/** Checkout data to be updated */
export interface UpdateCheckoutInput {
  email?: Maybe<Scalars['String']>;
  billingAddress?: Maybe<AddressInput>;
  shippingAddress?: Maybe<AddressInput>;
}

/** Customer data to be updated */
export interface UpdateCustomerInput {
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
}

/** A warehouse */
export interface Warehouse {
  __typename?: 'Warehouse';
  id: Scalars['ID'];
  name: Scalars['String'];
}

/** Wishlist */
export interface Wishlist {
  __typename?: 'Wishlist';
  id: Scalars['ID'];
  items: Array<WishlistItem>;
}

/** Wishlist */
export interface WishlistItemsArgs {
  customQueryConditions?: Maybe<Array<CustomQueryConditionInput>>;
}

/** Wishlist item */
export interface WishlistItem {
  __typename?: 'WishlistItem';
  id: Scalars['ID'];
  articleId: Scalars['ID'];
  article?: Maybe<Article>;
}

/** Paged result of a wishlist list */
export interface WishlistsResult extends PagedResult {
  __typename?: 'WishlistsResult';
  paging: Paging;
  results?: Maybe<Array<Wishlist>>;
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Address: ResolverTypeWrapper<Address>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AddressFields: ResolversTypes['Address'] | ResolversTypes['CustomerAddress'];
  AddressInput: AddressInput;
  Article: ResolverTypeWrapper<Article>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ArticleListFilter: ResolverTypeWrapper<ArticleListFilter>;
  ArticleListFilterValue: ResolverTypeWrapper<ArticleListFilterValue>;
  ArticleStatus: ArticleStatus;
  ArticlesResult: ResolverTypeWrapper<ArticlesResult>;
  ArticlesSearchFiltersInput: ArticlesSearchFiltersInput;
  Attribute: ResolverTypeWrapper<Attribute>;
  AttributeDefinition: ResolverTypeWrapper<AttributeDefinition>;
  AttributeType: AttributeType;
  Availability: ResolverTypeWrapper<Availability>;
  BaseUnit: ResolverTypeWrapper<BaseUnit>;
  Brand: ResolverTypeWrapper<Brand>;
  BrandsResult: ResolverTypeWrapper<BrandsResult>;
  Cart: ResolverTypeWrapper<Cart>;
  CartItem: ResolverTypeWrapper<CartItem>;
  CartItemCustomDataInput: CartItemCustomDataInput;
  CartsResult: ResolverTypeWrapper<CartsResult>;
  CategoriesResult: ResolverTypeWrapper<CategoriesResult>;
  Category: ResolverTypeWrapper<Category>;
  CheckoutState: ResolverTypeWrapper<CheckoutState>;
  Coupon: ResolverTypeWrapper<Coupon>;
  Currency: ResolverTypeWrapper<Currency>;
  CustomQueryConditionInput: CustomQueryConditionInput;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerAddress: ResolverTypeWrapper<CustomerAddress>;
  DeleteResult: ResolverTypeWrapper<DeleteResult>;
  Discount: ResolverTypeWrapper<Discount>;
  Error: ResolverTypeWrapper<Error>;
  Media: ResolverTypeWrapper<Media>;
  MediaType: MediaType;
  Meta: ResolverTypeWrapper<Meta>;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<Order>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrdersResult: ResolverTypeWrapper<OrdersResult>;
  PagedResult:
    | ResolversTypes['ArticlesResult']
    | ResolversTypes['BrandsResult']
    | ResolversTypes['CartsResult']
    | ResolversTypes['CategoriesResult']
    | ResolversTypes['OrdersResult']
    | ResolversTypes['ProductsResult']
    | ResolversTypes['WishlistsResult'];
  Paging: ResolverTypeWrapper<Paging>;
  PagingInput: PagingInput;
  PaymentInfo: ResolverTypeWrapper<PaymentInfo>;
  Price: ResolverTypeWrapper<Price>;
  Product: ResolverTypeWrapper<Product>;
  ProductListFilter: ResolverTypeWrapper<ProductListFilter>;
  ProductListFilterValue: ResolverTypeWrapper<ProductListFilterValue>;
  ProductStatus: ProductStatus;
  ProductsResult: ResolverTypeWrapper<ProductsResult>;
  ProductsSearchFiltersInput: ProductsSearchFiltersInput;
  Query: ResolverTypeWrapper<{}>;
  ReferencePrice: ResolverTypeWrapper<ReferencePrice>;
  RegistrationInput: RegistrationInput;
  ResolveUrlResult: ResolverTypeWrapper<ResolveUrlResult>;
  ResolveUrlResultType: ResolveUrlResultType;
  SalesUnit: ResolverTypeWrapper<SalesUnit>;
  Shop: ResolverTypeWrapper<Shop>;
  SortInput: SortInput;
  SortValue: SortValue;
  Sorting: ResolverTypeWrapper<Sorting>;
  Suggestion: ResolverTypeWrapper<Suggestion>;
  SuggestionType: SuggestionType;
  TaxClass: ResolverTypeWrapper<TaxClass>;
  Totals: ResolverTypeWrapper<Totals>;
  UpdateCartItemInput: UpdateCartItemInput;
  UpdateCheckoutInput: UpdateCheckoutInput;
  UpdateCustomerInput: UpdateCustomerInput;
  Warehouse: ResolverTypeWrapper<Warehouse>;
  Wishlist: ResolverTypeWrapper<Wishlist>;
  WishlistItem: ResolverTypeWrapper<WishlistItem>;
  WishlistsResult: ResolverTypeWrapper<WishlistsResult>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddToCartItemInput: AddToCartItemInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Address: Address;
  String: Scalars['String'];
  AddressFields:
    | ResolversParentTypes['Address']
    | ResolversParentTypes['CustomerAddress'];
  AddressInput: AddressInput;
  Article: Article;
  Boolean: Scalars['Boolean'];
  ArticleListFilter: ArticleListFilter;
  ArticleListFilterValue: ArticleListFilterValue;
  ArticlesResult: ArticlesResult;
  ArticlesSearchFiltersInput: ArticlesSearchFiltersInput;
  Attribute: Attribute;
  AttributeDefinition: AttributeDefinition;
  Availability: Availability;
  BaseUnit: BaseUnit;
  Brand: Brand;
  BrandsResult: BrandsResult;
  Cart: Cart;
  CartItem: CartItem;
  CartItemCustomDataInput: CartItemCustomDataInput;
  CartsResult: CartsResult;
  CategoriesResult: CategoriesResult;
  Category: Category;
  CheckoutState: CheckoutState;
  Coupon: Coupon;
  Currency: Currency;
  CustomQueryConditionInput: CustomQueryConditionInput;
  Customer: Customer;
  CustomerAddress: CustomerAddress;
  DeleteResult: DeleteResult;
  Discount: Discount;
  Error: Error;
  Media: Media;
  Meta: Meta;
  Mutation: {};
  Order: Order;
  OrderItem: OrderItem;
  OrdersResult: OrdersResult;
  PagedResult:
    | ResolversParentTypes['ArticlesResult']
    | ResolversParentTypes['BrandsResult']
    | ResolversParentTypes['CartsResult']
    | ResolversParentTypes['CategoriesResult']
    | ResolversParentTypes['OrdersResult']
    | ResolversParentTypes['ProductsResult']
    | ResolversParentTypes['WishlistsResult'];
  Paging: Paging;
  PagingInput: PagingInput;
  PaymentInfo: PaymentInfo;
  Price: Price;
  Product: Product;
  ProductListFilter: ProductListFilter;
  ProductListFilterValue: ProductListFilterValue;
  ProductsResult: ProductsResult;
  ProductsSearchFiltersInput: ProductsSearchFiltersInput;
  Query: {};
  ReferencePrice: ReferencePrice;
  RegistrationInput: RegistrationInput;
  ResolveUrlResult: ResolveUrlResult;
  SalesUnit: SalesUnit;
  Shop: Shop;
  SortInput: SortInput;
  Sorting: Sorting;
  Suggestion: Suggestion;
  TaxClass: TaxClass;
  Totals: Totals;
  UpdateCartItemInput: UpdateCartItemInput;
  UpdateCheckoutInput: UpdateCheckoutInput;
  UpdateCustomerInput: UpdateCustomerInput;
  Warehouse: Warehouse;
  Wishlist: Wishlist;
  WishlistItem: WishlistItem;
  WishlistsResult: WishlistsResult;
};

export type AddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ArticleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  media?: Resolver<Array<ResolversTypes['Media']>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  brandId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType>;
  isBuyable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMaster?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<
    Array<ResolversTypes['Attribute']>,
    ParentType,
    ContextType
  >;
  meta?: Resolver<ResolversTypes['Meta'], ParentType, ContextType>;
  prices?: Resolver<
    Array<ResolversTypes['Price']>,
    ParentType,
    ContextType,
    RequireFields<ArticlePricesArgs, never>
  >;
  referencePrice?: Resolver<
    Maybe<ResolversTypes['ReferencePrice']>,
    ParentType,
    ContextType
  >;
  availabilities?: Resolver<
    Array<ResolversTypes['Availability']>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes['ArticleStatus'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  salesUnits?: Resolver<
    Array<ResolversTypes['SalesUnit']>,
    ParentType,
    ContextType
  >;
  baseUnit?: Resolver<ResolversTypes['BaseUnit'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleListFilterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticleListFilter'] = ResolversParentTypes['ArticleListFilter']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  applied?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticlesResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticlesResult'] = ResolversParentTypes['ArticlesResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
  filters?: Resolver<
    Array<ResolversTypes['ArticleListFilter']>,
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
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  super?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AttributeType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailabilityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Availability'] = ResolversParentTypes['Availability']
> = {
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  warehouseId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  warehouse?: Resolver<ResolversTypes['Warehouse'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseUnitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseUnit'] = ResolversParentTypes['BaseUnit']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  standardQuantity?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  interval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrandResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  media?: Resolver<
    Maybe<Array<ResolversTypes['Media']>>,
    ParentType,
    ContextType
  >;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['Meta'], ParentType, ContextType>;
  categoryIds?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  categories?: Resolver<
    Maybe<ResolversTypes['CategoriesResult']>,
    ParentType,
    ContextType,
    RequireFields<BrandCategoriesArgs, never>
  >;
  products?: Resolver<
    Maybe<ResolversTypes['ProductsResult']>,
    ParentType,
    ContextType,
    RequireFields<BrandProductsArgs, never>
  >;
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
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  items?: Resolver<Array<ResolversTypes['CartItem']>, ParentType, ContextType>;
  coupons?: Resolver<Array<ResolversTypes['Coupon']>, ParentType, ContextType>;
  totals?: Resolver<ResolversTypes['Totals'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cartId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  articleId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  parentItemId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salesUnitId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  salesUnit?: Resolver<ResolversTypes['SalesUnit'], ParentType, ContextType>;
  children?: Resolver<
    Array<ResolversTypes['CartItem']>,
    ParentType,
    ContextType
  >;
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
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  media?: Resolver<
    Maybe<Array<ResolversTypes['Media']>>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  childrenIds?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['Meta'], ParentType, ContextType>;
  products?: Resolver<
    Maybe<ResolversTypes['ProductsResult']>,
    ParentType,
    ContextType,
    RequireFields<CategoryProductsArgs, never>
  >;
  parent?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  children?: Resolver<
    Maybe<ResolversTypes['CategoriesResult']>,
    ParentType,
    ContextType,
    RequireFields<CategoryChildrenArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutStateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CheckoutState'] = ResolversParentTypes['CheckoutState']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payment?: Resolver<
    Maybe<ResolversTypes['PaymentInfo']>,
    ParentType,
    ContextType
  >;
  shippingAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
  billingAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
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
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  customerNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addresses?: Resolver<
    Maybe<Array<ResolversTypes['CustomerAddress']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CustomerAddress'] = ResolversParentTypes['CustomerAddress']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DeleteResult'] = ResolversParentTypes['DeleteResult']
> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']
> = {
  type?: Resolver<ResolversTypes['MediaType'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']
> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  robots?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  deleteCart?: Resolver<
    Maybe<ResolversTypes['DeleteResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCartArgs, 'id'>
  >;
  addToCart?: Resolver<
    Maybe<Array<ResolversTypes['CartItem']>>,
    ParentType,
    ContextType,
    RequireFields<MutationAddToCartArgs, 'cartId' | 'items'>
  >;
  updateCartItem?: Resolver<
    Maybe<ResolversTypes['CartItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCartItemArgs, 'id'>
  >;
  removeFromCart?: Resolver<
    Maybe<ResolversTypes['DeleteResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveFromCartArgs, 'cartItemId'>
  >;
  applyCoupon?: Resolver<
    Maybe<ResolversTypes['Cart']>,
    ParentType,
    ContextType,
    RequireFields<MutationApplyCouponArgs, 'cartId' | 'coupon'>
  >;
  createWishlist?: Resolver<
    Maybe<ResolversTypes['Wishlist']>,
    ParentType,
    ContextType
  >;
  deleteWishlist?: Resolver<
    Maybe<ResolversTypes['DeleteResult']>,
    ParentType,
    ContextType
  >;
  addToWishlist?: Resolver<
    Maybe<ResolversTypes['Wishlist']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddToWishlistArgs, 'wishlistId'>
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
  updateCheckout?: Resolver<
    Maybe<ResolversTypes['CheckoutState']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCheckoutArgs, 'cartId' | 'data'>
  >;
  finishCheckout?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationFinishCheckoutArgs, 'cartId'>
  >;
  register?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<MutationRegisterArgs, 'data'>
  >;
  updateCustomer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCustomerArgs, 'id' | 'data'>
  >;
};

export type OrderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['OrderItem']>>,
    ParentType,
    ContextType
  >;
  billingAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  shippingAddress?: Resolver<
    ResolversTypes['Address'],
    ParentType,
    ContextType
  >;
  payment?: Resolver<ResolversTypes['PaymentInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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

export type PagedResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PagedResult'] = ResolversParentTypes['PagedResult']
> = {
  __resolveType: TypeResolveFn<
    | 'ArticlesResult'
    | 'BrandsResult'
    | 'CartsResult'
    | 'CategoriesResult'
    | 'OrdersResult'
    | 'ProductsResult'
    | 'WishlistsResult',
    ParentType,
    ContextType
  >;
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
};

export type PagingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Paging'] = ResolversParentTypes['Paging']
> = {
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentInfo'] = ResolversParentTypes['PaymentInfo']
> = {
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']
> = {
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  netValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taxClass?: Resolver<ResolversTypes['TaxClass'], ParentType, ContextType>;
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
  original?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  articleIds?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  categoryIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  media?: Resolver<Array<ResolversTypes['Media']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  brandId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  superAttributeDefinitions?: Resolver<
    Array<ResolversTypes['AttributeDefinition']>,
    ParentType,
    ContextType
  >;
  attributes?: Resolver<
    Array<Maybe<ResolversTypes['Attribute']>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['Meta'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProductStatus'], ParentType, ContextType>;
  articles?: Resolver<
    Maybe<ResolversTypes['ArticlesResult']>,
    ParentType,
    ContextType,
    RequireFields<ProductArticlesArgs, never>
  >;
  categories?: Resolver<
    Maybe<Array<ResolversTypes['Category']>>,
    ParentType,
    ContextType,
    RequireFields<ProductCategoriesArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductListFilterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductListFilter'] = ResolversParentTypes['ProductListFilter']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  applied?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductsResult'] = ResolversParentTypes['ProductsResult']
> = {
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  filters?: Resolver<
    Array<ResolversTypes['ProductListFilter']>,
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

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  shop?: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType>;
  products?: Resolver<
    Maybe<ResolversTypes['ProductsResult']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductsArgs, never>
  >;
  product?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductArgs, 'id'>
  >;
  productBySlug?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductBySlugArgs, 'slug'>
  >;
  article?: Resolver<
    Maybe<ResolversTypes['Article']>,
    ParentType,
    ContextType,
    RequireFields<QueryArticleArgs, 'id'>
  >;
  brands?: Resolver<
    Maybe<ResolversTypes['BrandsResult']>,
    ParentType,
    ContextType,
    RequireFields<QueryBrandsArgs, never>
  >;
  brand?: Resolver<
    Maybe<ResolversTypes['Brand']>,
    ParentType,
    ContextType,
    RequireFields<QueryBrandArgs, 'id'>
  >;
  brandBySlug?: Resolver<
    Maybe<ResolversTypes['Brand']>,
    ParentType,
    ContextType,
    RequireFields<QueryBrandBySlugArgs, 'slug'>
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
  categoryBySlug?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoryBySlugArgs, 'slug'>
  >;
  suggestions?: Resolver<
    Array<ResolversTypes['Suggestion']>,
    ParentType,
    ContextType,
    RequireFields<QuerySuggestionsArgs, never>
  >;
  carts?: Resolver<
    Maybe<ResolversTypes['CartsResult']>,
    ParentType,
    ContextType,
    RequireFields<QueryCartsArgs, never>
  >;
  cart?: Resolver<
    Maybe<ResolversTypes['Cart']>,
    ParentType,
    ContextType,
    RequireFields<QueryCartArgs, 'id'>
  >;
  wishlists?: Resolver<
    Maybe<ResolversTypes['WishlistsResult']>,
    ParentType,
    ContextType,
    RequireFields<QueryWishlistsArgs, never>
  >;
  wishlist?: Resolver<
    Maybe<ResolversTypes['Wishlist']>,
    ParentType,
    ContextType,
    RequireFields<QueryWishlistArgs, 'id'>
  >;
  orders?: Resolver<
    Maybe<ResolversTypes['OrdersResult']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrdersArgs, never>
  >;
  order?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderArgs, 'id'>
  >;
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType
  >;
  resolveUrl?: Resolver<
    Maybe<ResolversTypes['ResolveUrlResult']>,
    ParentType,
    ContextType,
    RequireFields<QueryResolveUrlArgs, never>
  >;
};

export type ReferencePriceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReferencePrice'] = ResolversParentTypes['ReferencePrice']
> = {
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salesUnit?: Resolver<ResolversTypes['SalesUnit'], ParentType, ContextType>;
  taxClass?: Resolver<ResolversTypes['TaxClass'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResolveUrlResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ResolveUrlResult'] = ResolversParentTypes['ResolveUrlResult']
> = {
  resolved?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  resultId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  resultType?: Resolver<
    Maybe<ResolversTypes['ResolveUrlResultType']>,
    ParentType,
    ContextType
  >;
  redirectUrl?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesUnitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SalesUnit'] = ResolversParentTypes['SalesUnit']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  conversion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']
> = {
  pricePrecision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SortingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Sorting'] = ResolversParentTypes['Sorting']
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  applied?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuggestionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Suggestion'] = ResolversParentTypes['Suggestion']
> = {
  type?: Resolver<ResolversTypes['SuggestionType'], ParentType, ContextType>;
  resultId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxClassResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TaxClass'] = ResolversParentTypes['TaxClass']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Totals'] = ResolversParentTypes['Totals']
> = {
  net?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gross?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taxes?: Resolver<Array<ResolversTypes['TaxClass']>, ParentType, ContextType>;
  discounts?: Resolver<
    Array<ResolversTypes['Discount']>,
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
    ContextType,
    RequireFields<WishlistItemsArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WishlistItem'] = ResolversParentTypes['WishlistItem']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
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
  Address?: AddressResolvers<ContextType>;
  AddressFields?: AddressFieldsResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  ArticleListFilter?: ArticleListFilterResolvers<ContextType>;
  ArticleListFilterValue?: ArticleListFilterValueResolvers<ContextType>;
  ArticlesResult?: ArticlesResultResolvers<ContextType>;
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
  CheckoutState?: CheckoutStateResolvers<ContextType>;
  Coupon?: CouponResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerAddress?: CustomerAddressResolvers<ContextType>;
  DeleteResult?: DeleteResultResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  OrdersResult?: OrdersResultResolvers<ContextType>;
  PagedResult?: PagedResultResolvers<ContextType>;
  Paging?: PagingResolvers<ContextType>;
  PaymentInfo?: PaymentInfoResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductListFilter?: ProductListFilterResolvers<ContextType>;
  ProductListFilterValue?: ProductListFilterValueResolvers<ContextType>;
  ProductsResult?: ProductsResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReferencePrice?: ReferencePriceResolvers<ContextType>;
  ResolveUrlResult?: ResolveUrlResultResolvers<ContextType>;
  SalesUnit?: SalesUnitResolvers<ContextType>;
  Shop?: ShopResolvers<ContextType>;
  Sorting?: SortingResolvers<ContextType>;
  Suggestion?: SuggestionResolvers<ContextType>;
  TaxClass?: TaxClassResolvers<ContextType>;
  Totals?: TotalsResolvers<ContextType>;
  Warehouse?: WarehouseResolvers<ContextType>;
  Wishlist?: WishlistResolvers<ContextType>;
  WishlistItem?: WishlistItemResolvers<ContextType>;
  WishlistsResult?: WishlistsResultResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
