import StripeElement from './StripeElement'

const createHOC = (type) => ({
  functional: true,
  render (h, ctx) {
    return h(StripeElement, {
      ...ctx.data,
      props: {
        ...ctx.props,
        type
      }
    })
  }
})

export { default as StripeWrapper } from './StripeWrapper'
export { default as StripeElement } from './StripeElement'
export const Card = createHOC('card')
export const CardExpiry = createHOC('cardExpiry')
export const CardCvc = createHOC('cardCvc')
export const CardNumber = createHOC('cardNumber')
export const PostalCode = createHOC('postalCode')
