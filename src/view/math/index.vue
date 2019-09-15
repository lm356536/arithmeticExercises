<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <table>
      <!-- <tr>
                    <td>班级：</td>
                    <td>姓名：</td>
                    <td>日期：</td>
                    <td>时间：</td>
                    <td>分数：</td>
                </tr> -->
      <!-- <tr v-for = "(item,index) in getTwoNum"  :key = index >
                    <td><div>{{index+1}}</div><div>{{item[0]}}</div></td>
                    <td><div>{{index+21}}</div><div>{{item[1]}}</div></td>
                    <td><div>{{index+41}}</div><div>{{item[2]}}</div></td>
                    <td><div>{{index+61}}</div><div>{{item[3]}}</div></td>
                    <td><div>{{index+81}}</div><div>{{item[4]}}</div></td>
        </tr> -->
      <tr v-for="(item,index) in questionList" :key="index">
        <td>
          <div>{{ item[0] }}</div>
        </td>
        <td>
          <div>{{ item[1] }}</div>
        </td>
        <td>
          <div>{{ item[2] }}</div>
        </td>
        <td>
          <div>{{ item[3] }}</div>
        </td>
        <td>
          <div>{{ item[4] }}</div>
        </td>
      </tr>
    </table>
    <div class="bottom-content">
      <div class="left">
        <table>
          <tr>
            <td class="border-bottom-left">姓名:</td>
            <td class="border-bottom-right"></td>
          </tr>
          <tr>
            <td class="border-bottom-left">时间:</td>
            <td class="border-bottom-right"></td>
          </tr>
          <tr>
            <td class="border-bottom-left">日期:</td>
            <td class="border-bottom-right">
            </td>
          </tr>
          <tr>
            <td class="border-bottom-left">分数:</td>
            <td class="border-bottom-right"></td>
          </tr>
        </table>
      </div>
      <div class="right"><span style="padding-left:5px;">错题再测:</span></div>
    </div>
  </div>
</template>
<script>
import { getTwoNums } from '../../lib/utils'
const INIT_NUM1 = 5
const INIT_NUM2 = 5
const INIT_NUM3 = 5
const MAX_NUM = 20
export default {
  data: function () {
    return {
      title: `${MAX_NUM}以内口算加减法算练习题`,
      arr: [[1, 2, 3, 4, 5]],
      questionList: []
    }
  },
  computed: {
    // 10以内加减法
  },
  methods: {
    getTwoNums
  },
  created () {
    this.questionList = this.getTwoNums(INIT_NUM1, INIT_NUM2, INIT_NUM3, MAX_NUM)
  }
}
</script>
  <style>
    #app {
        width:100%;
       /* background: #f00;*/
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
    #app table{
        top: 50%;
        left: 50;
        width: 90%;
       /* background-color: #ff0;*/
    }
    #app table tr td {
        width: 100px;
        white-space:pre;
        border: 0px solid;
        font-size: 18px;
        height: 35px;
        padding-left:15px;
    }
  /* #app  /deep/ div:first-child{
        line-height: 24px;
        text-align: center;
        width: 24px;
        height: 24px;
        border: 1px dotted;
        border-radius:50%;
        font-size: 12px;
        white-space: pre-wrap;
        float: left;
        margin-right:5px;
    } */
    /* #app  /deep/ div:last-child{
        white-space: pre-wrap;
        display: block;
        float: left;
    } */
   .bottom-content {
        border: 1px solid;
        width: 90%;
        height: 150px;
    }
    #app /deep/ .left {
        background-color: #ccc;
        width: 30%;
        height: 149px;
        float: left;
        border-right: 1px dashed;
    }
    #app /deep/ .right {
        padding:5px 0px 0px 20px;
        /* background-color: #ccc; */
        width: 70%;
        height: 150px;
        /* float: right !important; */
    }
    #app  /deep/ .border-bottom-left {
        text-align: right;
    }
    #app  /deep/ .border-bottom-right {
        text-align: left;
        border-bottom: 1px solid;
        height: 30px;
    }
    </style>
