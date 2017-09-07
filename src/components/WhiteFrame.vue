<template>
  <div id="showNumber">
    <div class="totalContainer">
      <md-whiteframe md-elevation="3">
      <div class="wfContainer">
        <div class="text">
          <span>{{ one }}</span>
        </div>

        <div class="numChange">
          <div class="numIncrease">
              <span>+</span>
              <lable>num</lable>
          </div>
          <div class="numDecrease">
              <span>-</span>
              <label>1000</label>
          </div>
        </div>
      </div>
        <div class="totalNumber">
          number
        </div>
      </md-whiteframe>
      </div>

    <div class="totalContainer">
      <md-whiteframe md-elevation="3">
        <div class="wfContainer">
          <div class="text">
            <span>{{ two }}</span>
          </div>

          <div class="numChange">
            <div class="numIncrease">
                <span>+</span>
                <lable>num</lable>
            </div>
            <div class="numIncrease">
                <span>-</span>
                <label>10000</label>
            </div>
          </div>
        </div>
        <div class="totalNumber">
          number
        </div>
      </md-whiteframe>
    </div>

     <div class="totalContainer">
      <md-whiteframe md-elevation="3">
        <div class="wfContainer">
          <div class="text">
            <span>{{ three }}</span>
          </div>

          <div class="numChange">
            <div class="numIncrease">
                <span>+</span>
                <lable>num</lable>
            </div>
            <div class="numIncrease">
              <span>-</span>
              <label>1000</label>
            </div>
          </div>
        </div>
        <div>
          <div class="totalNumber">
            number
          </div>
        </div>
      </md-whiteframe>
     </div>
  </div>
</template>
<script>
export default{
  name: '#el',
  data () {
    return {
      one: 'Devices',
      two: 'Servers',
      three: 'Events'
    }
  }
}
</script>
<style scoped>
  @import "../css/whiteFrame.css";
</style>
