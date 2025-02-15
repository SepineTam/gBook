// Manifest V3 使用 declarativeNetRequest，规则已在 rules.json 中定义
console.log('Google Books Redirect Extension loaded');

// // 监听 web 请求
// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//       // 获取当前 URL
//       const currentUrl = new URL(details.url);
      
//       // 检查是否是 books.google.cn
//       if (currentUrl.hostname === 'books.google.cn') {
//         // 构建新的 URL，将域名改为 books.google.com
//         const newUrl = details.url.replace('books.google.cn', 'books.google.com');
        
//         // 返回重定向信息
//         return {
//           redirectUrl: newUrl
//         };
//       }
//     },
//     {
//       // 匹配所有 books.google.cn 的请求
//       urls: ["*://books.google.cn/*"],
//       // 匹配所有类型的请求
//       types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
//     },
//     // 需要阻断请求以便进行重定向
//     ["blocking"]
//   );