//css
import '../../common/css/app'
import './index.css'

import Vue from 'vue'

let vm = new Vue({
  el: '#lemontree',
  data: {
  	list: [],
    longTermList:[]
  },
  mounted: () => {
  	let urls = ['./static/json/level1/level1_0.json','./static/json/level1/level1_1.json','./static/json/level1/level1_2.json']   //,'./static/json/level1/level1_3.json'
  	let longTermUrls = ['./static/json/longlevel1/level1_1.json']
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
    for(let url of longTermUrls){
      $.ajax({
        url: url,
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          vm.longTermList.push(data)
        }
      });
    }
  },
  methods: {
  	showDetails: (id) => {
      window.location.href = 'details.html?type=st&id='+id
    },
    showLongTermDetails: (id) => {
      window.location.href = 'details.html?type=lt&id='+id
    }
  }
})
