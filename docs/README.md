📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Add to Cart Info Component

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

## Description

The Add to Cart Info Component is a block that shows the products that were added to the cart.

![](https://i.imgur.com/cEIzzWt.gif)

## Configuration 

1. Add the Add to cart info app to your theme's dependencies in the manifest.json, for example:
```json
  dependencies: {
    "{vendor}.add-to-cart-info": "0.x"
  }
 ```
 
2. install node modules, go to `react` folder and run `yarn`
 
3. Add the `list-context` block to your store-theme, for example:
```json
  {
    "modal-layout#add-to-cart-info": {
    "title": "product add to cart info",
    "children": [
      "modal-header#add-to-cart-info",
      "add-to-cart-info"
    ],
    "props": {
      "blockClass": "add-to-cart-info--desktop--modal-layout",
      "title": "Información de compra"
      }
    },
  }
  
   ```
Block name     | Description                                      |
| -------------- | ----------------------------------------------- |
| `add-to-cart-info` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  This is the top-level block that must be declared in a `store-theme` block to render the Add to cart info Component.   |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

`No CSS Handles are available yet for the app customization.`

Styles from /components/styles.css are applied to the component.

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Heric Olier

---

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
