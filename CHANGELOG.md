# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0-alpha.20](https://github.com/inniti/middle/compare/v1.0.0-alpha.19...v1.0.0-alpha.20) (2021-10-27)

## [1.0.0-alpha.19](https://github.com/inniti/middle/compare/v1.0.0-alpha.18...v1.0.0-alpha.19) (2021-10-27)


### Features

* **schema:** add article options to Article type ([7f1c6a3](https://github.com/inniti/middle/commit/7f1c6a3573085778a7be7759286723a911ecb235))

## [1.0.0-alpha.18](https://github.com/inniti/middle/compare/v1.0.0-alpha.17...v1.0.0-alpha.18) (2021-10-26)


### Bug Fixes

* **schema:** Make Article::brandId and Product::brandId required ([d82ac69](https://github.com/inniti/middle/commit/d82ac69d6e243f4d11d013adde940594181c3ff7))

## [1.0.0-alpha.17](https://github.com/inniti/middle/compare/v1.0.0-alpha.16...v1.0.0-alpha.17) (2021-10-25)


### Features

* **schema:** add vendor types and query ([340070b](https://github.com/inniti/middle/commit/340070b6bfc309da9a33e51874ae087c95aa80e6))

## [1.0.0-alpha.16](https://github.com/inniti/middle/compare/v1.0.0-alpha.15...v1.0.0-alpha.16) (2021-10-22)

## [1.0.0-alpha.15](https://github.com/inniti/middle/compare/v1.0.0-alpha.14...v1.0.0-alpha.15) (2021-10-21)


### Features

* **schema:** add related products to schema ([1b82279](https://github.com/inniti/middle/commit/1b822798570682611604c8d459d7965955021c78))

## [1.0.0-alpha.14](https://github.com/inniti/middle/compare/v1.0.0-alpha.13...v1.0.0-alpha.14) (2021-10-20)

## [1.0.0-alpha.13](https://github.com/inniti/middle/compare/v1.0.0-alpha.12...v1.0.0-alpha.13) (2021-10-19)


### Features

* **schema:** extend schema to support reservations, extend warehouse types and queries ([e3ddf5b](https://github.com/inniti/middle/commit/e3ddf5b5f04d7ff1ff9af5d92ea6a691affc4535))

## [1.0.0-alpha.12](https://github.com/inniti/middle/compare/v1.0.0-alpha.11...v1.0.0-alpha.12) (2021-10-15)


### Features

* **error-handling:** export class MiddleError for standardized errors ([22275e4](https://github.com/inniti/middle/commit/22275e4f80d1be44c58829c4f28d451177032eb2))
* **schema:** remove resolveUrl types and query in favor of new pages types and queries ([fdead78](https://github.com/inniti/middle/commit/fdead786095380d87b725fb9b29b0571c948280f))

## [1.0.0-alpha.11](https://github.com/inniti/middle/compare/v1.0.0-alpha.10...v1.0.0-alpha.11) (2021-09-10)


### Features

* **schema:** add additional fields to address types ([ae0680a](https://github.com/inniti/middle/commit/ae0680a03948fb804e73942442f1593ee84c283c))
* **schema:** introduce resolver arguments to filter media list ([658cfd5](https://github.com/inniti/middle/commit/658cfd52ef24fe06a6cff56e3be70faec1c5c614))

## [1.0.0-alpha.10](https://github.com/inniti/middle/compare/v1.0.0-alpha.9...v1.0.0-alpha.10) (2021-07-27)


### Features

* **schema:** add *ByField queries for article, product, category, brand ([4d7df12](https://github.com/inniti/middle/commit/4d7df12e0e2d95ab0431a547fad9625202d21970))

## [1.0.0-alpha.9](https://github.com/inniti/middle/compare/v1.0.0-alpha.8...v1.0.0-alpha.9) (2021-07-15)


### Bug Fixes

* **schema:** add tax related fields to ReferencePrice ([4f927e7](https://github.com/inniti/middle/commit/4f927e7564b1cf083e38efc4dd59a5406cb7054b))

## [1.0.0-alpha.8](https://github.com/inniti/middle/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) (2021-07-15)


### Bug Fixes

* **schema:** clean up relations between Price, ReferencePrice, TaxValue and TaxClass ([b029b12](https://github.com/inniti/middle/commit/b029b127aa1edf3aa3a93a979bc64705e280b263))

## [1.0.0-alpha.7](https://github.com/inniti/middle/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2021-07-14)


### Features

* **schema:** introduce Country type for TaxClass ([f5591fc](https://github.com/inniti/middle/commit/f5591fca9cf0dfc9c479604e174075e50ee9be5d))

## [1.0.0-alpha.6](https://github.com/inniti/middle/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2021-07-13)


### Features

* **schema:** introduce AddToCartResult type, add optional reference to custom error type ([5e98d3c](https://github.com/inniti/middle/commit/5e98d3c62d8a0818cf170f0d12837f9c10e97a23))


### Bug Fixes

* **schema:** remove obsolete salesUnitId from CartItem ([e3bce32](https://github.com/inniti/middle/commit/e3bce32881f4ef3e122c4dc133d1923f7cc0ce79))

## [1.0.0-alpha.5](https://github.com/inniti/middle/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2021-07-13)


### Features

* **schema:** Differentiate between TaxClass and TaxValue ([7b5d7f0](https://github.com/inniti/middle/commit/7b5d7f05c9630814cb928689e328f7fff10cb573))

## [1.0.0-alpha.4](https://github.com/inniti/middle/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2021-07-13)


### Features

* **schema:** introduce Discounts and Total to Cart and CartItem, Add enum for AttributeType ([6da1fbd](https://github.com/inniti/middle/commit/6da1fbd48fcc394178dfc972eeb467ef5580948a))

## [1.0.0-alpha.3](https://github.com/inniti/middle/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2021-06-04)


### Bug Fixes

* **schema:** use `id` instead of `name` for Filter* inputs ([4a9ee48](https://github.com/inniti/middle/commit/4a9ee48ad843c9550a251dd136825317901e9572))

## [1.0.0-alpha.2](https://github.com/inniti/middle/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2021-06-04)


### Features

* **schema:** add type Warehouse ([9d90450](https://github.com/inniti/middle/commit/9d90450525c82e5ec4ac7bd2000d0c1593d95c24))
* **schema:** clean up mix of label/id/name properties in AttributeDefinition, ProductListFilter, ArticleListFilter ([8cf24a7](https://github.com/inniti/middle/commit/8cf24a7d498c91b31f808b3eb7196e430afa3d28))
* **schema:** make most type properties mandatory ([a7edc47](https://github.com/inniti/middle/commit/a7edc47f9ff2480ff7e247779dc5df30bca48143))
* **schema:** remove CustomCartItemData ([64bce47](https://github.com/inniti/middle/commit/64bce47fb393473b1aaf77b43259ae3ffc963422))

## 1.0.0-alpha.1 (2021-05-25)
