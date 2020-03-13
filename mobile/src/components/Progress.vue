<template>
  <div :class="progressType">
      <van-progress :track-color="'#E2ECF5'"
                    :color="'#4A63E7'"
                    :percentage="percentage"
                    stroke-width="8"
                    style="margin-bottom: 15px;"
                    />
  </div>
</template>
<script>
export default {
  name: 'lineProgress',
  data () {
    return {

    }
  },
  props: {
    progressType: {
      type: String,
      default: 'circleProgress'
    },
    percentage: {
      type: Number,
      default: () => {return 50}
    }
  }
}
</script>
<style lang="less" scoped>
</style>