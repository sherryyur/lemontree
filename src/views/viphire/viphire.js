//css
import '../../common/css/app'
import './viphire.css'

import Vue from 'vue'

let vm = new Vue({
  el: '#viphire',
  data: {
  	list: []
  },
  mounted: () => {
  	let urls = ['./static/json/level1/level1_0.json','./static/json/level1/level1_1.json','./static/json/level1/level1_2.json','./static/json/level1/level1_3.json']
    for(let url of urls){
      $.ajax({
        url: url,
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          vm.list.push(data)
        }
      });
    }
  },
  methods: {
  	showDetails: (id) => {
      window.location.href = 'details.html?id='+id
    }
  }
})
