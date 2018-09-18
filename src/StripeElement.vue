<script>
export default {
  // please see https://stripe.com/docs/elements/reference for details
  inject: ['_stripe'],
  props: {
    value: {
      type: String,
      required: false
    },
    options: {
      type: Object,
      required: false
    },
    type: { type: String, required: true }
  },
  beforeMount () {
    this._element = this._stripe.create(this.type, this.options)
    this._element.on('blur', event => this.$emit('blur'))
    this._element.on('focus', event => this.$emit('focus'))
    this._element.on('change', event => this.$emit('change', event))
  },
  render (h) {
    return h('span')
  },
  mounted () {
    // Vue likes to stay in control of $el but Stripe needs a real element
    const el = document.createElement('div')
    this._element.mount(el)
    // this.$children cannot be used because it expects a VNode :(
    this.$el.appendChild(el)
  },

  beforeDestroy () {
    this._element.unmount()
    this._element.destroy()
  },

  methods: {
    blur () { this._element.blur() },
    clear () { this._element.clear() },
    focus () { this._element.focus() },
    update () { this._element.update() }
  }
}
</script>
