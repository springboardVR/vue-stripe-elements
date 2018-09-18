<script>
export default {
  props: {
    stripeKey: {
      required: true
    },
    options: {

    }
  },
  render (h) {
    return h('div', this.$slots.default)
  },
  created () {
    this.init(this.stripeKey, this.options)
  },
  provide () {
    const vm = this
    return {
      _stripe: {
        get create () { return vm.create }
      }
    }
  },
  methods: {
    createToken (options) { return this._instance && this._instance.createToken(this._element, options) },
    createSource (options) { return this._instance && this._instance.createSource(this._element, options) },
    retrieveSource (options) { return this._instance && this._instance.retrieveSource(options) },
    init (stripeKey, options = {}) {
      if (window.Stripe === undefined && this._instance === null) {
        console.error('Stripe V3 library not loaded!')
      } else if (!this._instance) {
        this._instance = window.Stripe(stripeKey)
      }

      if (!this._instance.elements) {
        console.error('Stripe V3 library not loaded!')
      } else if (!this._elements) {
        this._elements = this._instance.elements(options)
      }
    },
    create (elementType, options = {}) {
      this._element = this._elements.create(elementType, options)
      return this._element
    }
  }
}
</script>
