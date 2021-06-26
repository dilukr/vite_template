function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function parseJSON(response) {
  return response.json();
}


/**
 *
 * 请求获取页面中的数据
 * @export
 * @param {*} url 地址
 * @returns
 * 使用方法
 * import getdata from '[相对路径]'
 * 
 * getdata("url")
 * .then(data => {
 *
 * })
 * 
 * 
 */
export default function getdata(url) {
    return new Promise((resolve, reject) => {
        fetch(url,{credentials: 'include'})
        .then(checkStatus)
        .then(parseJSON)
        .then(function(data) {
            return resolve(data);
        })
        .catch((err) => ( err ));
    })
    
}