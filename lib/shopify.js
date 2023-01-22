// @ts-ignore
import Client from 'shopify-buy'
import { isBrowser } from '@lib/helpers'

// First, check that Shopify variables are set
const hasShopify =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_ID &&
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN

// Warn the client if variables are missing
if (!hasShopify && isBrowser) {
  console.warn('Shopify .env variables are missing')
}

// Otherwise, setup the client and export
const options = {
  domain: `${process.env.NEXT_PUBLIC_SHOPIFY_STORE_ID}.myshopify.com`,
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
}

export default hasShopify ? Client.buildClient(options) : null
