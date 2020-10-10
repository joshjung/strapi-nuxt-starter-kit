<template>
  <div>
      This is the index page.
  </div>
</template>

<script>
import Footer from "~/layouts/Footer";

export default {
  data () {
    return {
    }
  },
  components: {
  },
  head () {
    return {
      title:'Home / My Personal Site',
      meta: [
        { hid: 'description', name: 'description', content: 'My Personal site.' }
      ]
    }
  }
}
</script>
