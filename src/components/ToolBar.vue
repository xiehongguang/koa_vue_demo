<template>
  <div>
    <div class="toolbar">
      <md-toolbar class="md-dense"  >
        <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title center" >Server Monitor Report Server</h2>
        <div class="field-group">
        <md-input-container>
            <select class="md-select" name="date" id="date" v-model="date" @change="show(date)">
              <option class="md-option" value="one hour">one hour</option>
              <option class="md-option" value="one day">one day</option>
              <option class="md-option" value="one week">one week</option>
            </select>
      </md-input-container>
        </div>
      </md-toolbar>
    </div>
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h5 class="md-title">Sidenav content</h5>

        </div>
      </md-toolbar>
      <div id="tabPanel">
        <div class="item">
          <div class="menutitle" @click="toggle()"><i class="icon-th-list"></i>&nbsp;{{parentItem}}</div>
          <div class="sildermun" v-show="status">
            <ul>
              <li v-for="(index,v) in childItems"><i class="icon-star"></i>&nbsp;{{v+index}}</li>
            </ul>
          </div>
        </div>
      </div>
      <p>vue  metrial drawer</p>
    </md-sidenav>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  // el: '#tabItem',
  data () {
    return {
      date: 'one hour',
      status: false,
      parentItem: '父级菜单',
      childItems: ['子级菜单', '子级菜单', '子级菜单', '子级菜单']
    }
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav () {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav () {
      this.$refs.rightSidenav.close()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    },
    toggle: function () {
      this.status = !this.status
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/tooBar.css";
</style>
