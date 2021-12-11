
/* 
前端通过Blob实现文件下载
 https://www.cnblogs.com/lsqy/p/11447528.html
 */
import axios from 'axios';
import * as Cookie from "@/tools/cookjs.js"

/**
 * 封装download下载文件流
 * @param url
 * @param title
 * @returns {Promise}
 */

// export function download(params = {},type) {
//   let baseURL = process.env.VUE_APP_BASE_API;
//   let headers = {
//     'Authorization': "Bearer " + Cookie.get("token")
//   }
//   let url = "/v1/base/file/download"
//     if (type == "batchImportHistory") {
//       url = "/v1/data/batchImportHistory/download"
//     }
//   return new Promise((resolve, reject) => {
//     axios({
//         method: 'get',
//         url: url,
//         baseURL: baseURL,
//         params: params,
//         responseType: 'blob',
//         headers: headers
//       })
//       .then(response => {
//         let blob = new Blob([response.data]);
//         let objectUrl = URL.createObjectURL(blob);

//         let link = document.createElement("a");
//         link.style.display = "none";
//         link.href = objectUrl;
//         link.setAttribute("download", decodeURIComponent(response.headers.filename));
//         document.body.appendChild(link);
//         link.click();
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }


/**
 * 封装download下载文件流
 * @param url
 * @param title
 * @returns {Promise}
 */

export function download(params = {}, type) {
  let baseURL = process.env.VUE_APP_BASE_API;
  let headers = {
    'Authorization': "Bearer " + Cookie.get("token")
  }

  let url = "/v1/base/file/download"
  if (type == "batchImportHistory") {
    url = "/v1/data/batchImportHistory/download"
  }
  return new Promise((resolve, reject) => {
    axios({
        method: 'get',
        url: url,
        baseURL: baseURL,
        params: params,
        responseType: 'blob',
        headers: headers
      })
      .then(response => {
        let blob = new Blob([response.data]);
        let objectUrl = URL.createObjectURL(blob);

        let link = document.createElement("a");
        link.style.display = "none";
        link.href = objectUrl;
        link.setAttribute("download", decodeURIComponent(response.headers["content-disposition"].split("filename=")[1]));
        document.body.appendChild(link);
        link.click();
      })
      .catch(err => {
        reject(err)
      })
  })
}