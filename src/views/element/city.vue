<!-- 
 <template>
   <div>
     <el-col :span="4">
       <el-form-item :prop="province" :rules="{required:false,message:'此项不能为空',trigger:'blur'}">
         <el-select v-model="item[province]" placeholder="选择省" @change="()=>{getCitys(item[province]);item[city] = ''; item[areas] = '';}">
           <el-option v-for="(key) in division" :value="key.value" :key="key.value" :label="key.text"></el-option>
         </el-select>
       </el-form-item>
     </el-col>
     <el-col :span="4">
       <el-form-item :prop="city" :rules="{required:false,message:'此项不能为空',trigger:'blur'}">
         <el-select v-model="item[city]" placeholder="选择市" v-show="item[province]" v-on:change="()=>{getAreas(item[city]);item[areas] = '';}">
           <el-option v-for="(key) in cityArr" :value="key.value" :key="key.value" :label="key.text"></el-option>
         </el-select>
       </el-form-item>
     </el-col>
     <el-col :span="4">
       <el-form-item :prop="areas" :rules="{required:false,message:'此项不能为空',trigger:'blur'}">
         <el-select v-model="item[areas]" placeholder="选择区" v-show="item[city]">
           <el-option v-for="key in areaArr" :value="key.value" :key="key.value" :label="key.text"></el-option>
         </el-select>
       </el-form-item>
     </el-col>
     <el-col :span="12">
       <el-form-item :prop="adress" :rules="{required:false,message:'此项不能为空',trigger:'blur'}">
         <el-input v-model="item[adress]" placeholder="请输入详细地址"></el-input>
       </el-form-item>
     </el-col>
   </div>
 </template>
 
 <script>
 import * as administrativedivision from "@/api/administrativedivision.js";
 export default {
   props: ["item", "province", "city", "areas", "adress"],
   data() {
     return {
       division: [],
       cityArr: [],
       areaArr: [],
     };
   },
   created() {
     this.$watch(
       function () {
         return this.item[this.city];
       },
       {
         handler(v && dis) {
           if (v) {
             this.getCitys(this.item[this.province]);
           }
         },
         // immediate: true,
       }
     );
     this.$watch(
       function () {
         return this.item[this.areas];
       },
       {
         handler(v && dis) {
           if (v) {
             this.getAreas(this.item[this.city]);
           }
         },
         // immediate: true,
       }
     );
   },
   mounted() {
     this.getTree();
 
     if (this.item[this.city]) {
       this.getCitys(this.item[this.province]);
     }
     if (this.item[this.areas]) {
       this.getAreas(this.item[this.city]);
     }
   },
   methods: {
     getTree() {
       administrativedivision.getTree().then((res) => {
         this.division = res.data;
       });
     },
     async getCitys(province) {
       if (province) {
         let res = await administrativedivision.getTree({
           parentId: province,
         });
         this.cityArr = res.data;
       } else {
         return [];
       }
     },
     async getAreas(province) {
       if (province) {
         let res = await administrativedivision.getTree({
           parentId: province,
         });
         this.areaArr = res.data;
       } else {
         return [];
       }
     },
   },
 };
 </script>
 
 <style lang="scss">
 </style>
 
 -->