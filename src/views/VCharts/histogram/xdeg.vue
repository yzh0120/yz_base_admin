<template>
  <page>
    <ve-histogram :data="chartData" :extend="extend"></ve-histogram>
  </page>
</template>
<script>
export default {
  data() {
    this.extend = {
      "xAxis.0.axisLabel.rotate": 45, //x轴倾斜 45
      // backgroundColor : 'rgb(255,111,111)'
    };
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "111111111111", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "22222222222", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "33333333333", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "4444444444", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "55555555555", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "66666666666", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
    };
  },
};
</script>