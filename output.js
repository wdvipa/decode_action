//Mon Jul 14 2025 05:56:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const axios = require("axios");
var cookie = process.env.BLACKBOX_COOKIE;
function formatSecondsTimestamp(_0x2470c9) {
  const _0xdc8f4b = new Date(_0x2470c9 * 1000),
    _0x5abfa9 = _0xdc8f4b.getFullYear(),
    _0x53bf13 = String(_0xdc8f4b.getMonth() + 1).padStart(2, "0"),
    _0x2d858b = String(_0xdc8f4b.getDate()).padStart(2, "0"),
    _0xad651f = String(_0xdc8f4b.getHours()).padStart(2, "0"),
    _0x104e1e = String(_0xdc8f4b.getMinutes()).padStart(2, "0"),
    _0x1af6f5 = String(_0xdc8f4b.getSeconds()).padStart(2, "0");
  return _0x5abfa9 + "-" + _0x53bf13 + "-" + _0x2d858b + " " + _0xad651f + ":" + _0x104e1e + ":" + _0x1af6f5;
}
async function getHkey(_0x1be2f3, _0x4860c4, _0x42f9fd = "null") {
  const _0xe29c53 = "http://47.120.39.109:9900/hkey",
    _0x3b7fa3 = {
      "heyboxId": _0x1be2f3,
      "type": _0x4860c4,
      "taskName": _0x42f9fd
    },
    _0x45ff72 = {
      "headers": {
        "Content-Type": "application/json"
      },
      "timeout": 5000
    };
  try {
    {
      const _0x1924d8 = await axios.post(_0xe29c53, _0x3b7fa3, _0x45ff72);
      return _0x1924d8.data;
    }
  } catch (_0x2fa58f) {
    console.error("Error:", _0x2fa58f);
    return null;
  }
}
async function follow(_0x58e17c, _0x5cc48f) {
  var _0x599a14 = _0x58e17c.split("#"),
    _0x452557 = _0x599a14[0],
    _0x58e17c = _0x599a14[1],
    _0x384d73 = "following_id=12318034",
    _0x596c2f = await getHkey(_0x452557, 3);
  hkey = _0x596c2f.hkey;
  timestamp = _0x596c2f.timestamp;
  var _0x53907e = {
    "headers": {
      "Referer": "http://api.maxjia.com/",
      "User-Agent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML like Gecko) Chrome/41.0.2272.118 Safari/537.36 ApiMaxJia/1.0",
      "Host": "api.xiaoheihe.cn",
      "Connection": "Keep-Alive",
      "Accept": "*/*",
      "Cookie": _0x58e17c
    },
    "timeout": 5000
  };
  try {
    {
      var _0x3ca961 = await axios.post("https://api.xiaoheihe.cn/bbs/app/profile/follow/user?heybox_id=" + _0x452557 + "&imei=4187fb55b1be198a&device_info=XiaoMi%2013%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6%E7%89%88&nonce=l7iQ8IQMHzj3hSydLxxsQMSzjnCvkiY3&hkey=" + hkey + "&os_type=Android&x_os_type=Android&x_client_type=mobile&os_version=9&version=1.3.332&build=871&_time=" + timestamp + "&dw=428&channel=heybox_xiaomi&x_app=heybox", _0x384d73, _0x53907e);
      return _0x3ca961.data;
    }
  } catch (_0x4a9357) {
    console.error("Error:", _0x4a9357);
    return null;
  }
}
async function bc(_0x311943, _0x4bb0b8) {
  var _0x484bf1 = _0x311943.split("#");
  var _0x221f4a = _0x484bf1[0];
  var _0x311943 = _0x484bf1[1];
  var _0x40f22d = "battery_inc=1&link_id=150786895";
  var _0x558235 = await getHkey(_0x221f4a, 3);
  hkey = _0x558235.hkey;
  timestamp = _0x558235.timestamp;
  var _0xb70a44 = {
    "headers": {
      "Referer": "http://api.maxjia.com/",
      "User-Agent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML like Gecko) Chrome/41.0.2272.118 Safari/537.36 ApiMaxJia/1.0",
      "Host": "api.xiaoheihe.cn",
      "Connection": "Keep-Alive",
      "Accept": "*/*",
      "Cookie": _0x311943
    },
    "timeout": 5000
  };
  try {
    var _0x5c18fb = await axios.post("https://api.xiaoheihe.cn/bbs/app/author/article/battery/charging?heybox_id=" + _0x221f4a + "&imei=4187fb55b1be198a&device_info=XiaoMi%2013%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6%E7%89%88&nonce=l7iQ8IQMHzj3hSydLxxsQMSzjnCvkiY3&hkey=" + hkey + "&os_type=Android&x_os_type=Android&x_client_type=mobile&os_version=9&version=1.3.332&build=871&_time=" + timestamp + "&dw=428&channel=heybox_xiaomi&x_app=heybox", _0x40f22d, _0xb70a44);
    return _0x5c18fb.data;
  } catch (_0x3e2639) {
    console.error("Error:", _0x3e2639);
    return null;
  }
}
async function getTaskList(_0x269161, _0x915912) {
  var _0x4b01b9 = _0x269161.split("#"),
    _0x38ea0a = _0x4b01b9[0],
    _0x269161 = _0x4b01b9[1],
    _0x5a559c = await getHkey(_0x38ea0a, 2);
  hkey = _0x5a559c.hkey;
  timestamp = _0x5a559c.timestamp;
  var _0x2ff396 = {
    "headers": {
      "Referer": "http://api.maxjia.com/",
      "User-Agent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML like Gecko) Chrome/41.0.2272.118 Safari/537.36 ApiMaxJia/1.0",
      "Host": "api.xiaoheihe.cn",
      "Connection": "Keep-Alive",
      "Accept": "*/*",
      "Cookie": _0x269161
    },
    "timeout": 5000
  };
  try {
    {
      var _0x44efd5 = await axios.get("https://api.xiaoheihe.cn/task/list_v2/?heybox_id=" + _0x38ea0a + "&imei=4187fb55b1be198a&device_info=XiaoMi%2013%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6%E7%89%88&nonce=tb6e1k7WqQCIHToyzWzI8Ogq9d0EIgpb&hkey=" + hkey + "&os_type=Android&x_os_type=Android&x_client_type=mobile&os_version=9&version=1.3.332&build=871&_time=" + timestamp + "&dw=428&channel=heybox_xiaomi&x_app=heybox", _0x2ff396);
      return _0x44efd5.data;
    }
  } catch (_0x39c5e0) {
    console.error("Error:", _0x39c5e0);
    return null;
  }
}
async function getSignIn(_0x2161d6, _0xdaa0d2) {
  var _0x3c648d = _0x2161d6.split("#"),
    _0x72fd9e = _0x3c648d[0],
    _0x2161d6 = _0x3c648d[1],
    _0x1f9b90 = await getHkey(_0x72fd9e, 1);
  hkey = _0x1f9b90.hkey;
  timestamp = _0x1f9b90.timestamp;
  var _0xac6eee = {
    "headers": {
      "Referer": "http://api.maxjia.com/",
      "User-Agent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML like Gecko) Chrome/41.0.2272.118 Safari/537.36 ApiMaxJia/1.0",
      "Host": "api.xiaoheihe.cn",
      "Connection": "Keep-Alive",
      "Accept": "*/*",
      "Cookie": _0x2161d6
    },
    "timeout": 5000
  };
  try {
    {
      var _0x40f017 = await axios.get("https://api.xiaoheihe.cn/task/sign_v3/sign?heybox_id=" + _0x72fd9e + "&imei=4187fb55b1be198a&device_info=XiaoMi%2013%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6%E7%89%88&nonce=tb6e1k7WqQCIHToyzWzI8Ogq9d0EIgpb&hkey=" + hkey + "&os_type=Android&x_os_type=Android&x_client_type=mobile&os_version=9&version=1.3.332&build=871&_time=" + timestamp + "&dw=428&channel=heybox_xiaomi&x_app=heybox", _0xac6eee);
      return _0x40f017.data;
    }
  } catch (_0x4bf50a) {
    console.error("Error:", _0x4bf50a);
    return null;
  }
}
async function doTask(_0x273753, _0x34d91c) {
  var _0x49a30a = _0x273753.split("#"),
    _0x369e6c = _0x49a30a[0],
    _0x273753 = _0x49a30a[1],
    _0x217045 = await getHkey(_0x369e6c, 5, _0x34d91c);
  hkey = _0x217045.hkey;
  _time = _0x217045.timestamp;
  _post_data = _0x217045.data;
  _post_key = _0x217045.key;
  _post_sid = _0x217045.sid;
  var _0x57cdf9 = new URLSearchParams();
  _0x57cdf9.append("data", _post_data);
  _0x57cdf9.append("key", _post_key);
  _0x57cdf9.append("sid", _post_sid);
  var _0x5426a0 = {
    "headers": {
      "Referer": "http://api.maxjia.com/",
      "User-Agent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36 ApiMaxJia/1.0",
      "Cookie": _0x273753,
      "Content-Type": "application/x-www-form-urlencoded",
      "Host": "data.xiaoheihe.cn",
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip"
    },
    "timeout": 5000
  };
  try {
    {
      var _0x1e3b43 = await axios.post("https://data.xiaoheihe.cn/account/data_report/?type=104&time_=" + _time + "&session_id=77ee4fea-46d9-4a53-b5ce-5df9cf056b7e&heybox_id=" + _0x369e6c + "&imei=4187fb55b1be198a&device_info=XiaoMi%2013%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6%E7%89%88&nonce=fSz04CwxvcWzG737aFNKKxNeGZDFOqJ1&hkey=" + hkey + "&os_type=Android&x_os_type=Android&x_client_type=mobile&os_version=9&version=1.3.332&build=871&_time=" + _time + "&dw=428&channel=heybox_xiaomi&x_app=heybox", _0x57cdf9, _0x5426a0);
      return _0x1e3b43.data;
    }
  } catch (_0x1ebd65) {
    console.error("Error:", _0x1ebd65);
    return null;
  }
}
async function main() {
  if (cookie.includes("&")) var _0x3c873d = cookie.split("&");else var _0x3c873d = [cookie];
  console.log("找到" + _0x3c873d.length + "个账号");
  for (var _0x34e5fd = 0; _0x34e5fd < _0x3c873d.length; _0x34e5fd++) {
    follow(_0x3c873d[_0x34e5fd], _0x34e5fd + 1);
    bc(_0x3c873d[_0x34e5fd], _0x34e5fd + 1);
    console.log("--开始做签到任务--");
    var _0x202382 = await getSignIn(_0x3c873d[_0x34e5fd], _0x34e5fd + 1);
    if (_0x202382.result.state == "ignore") {
      console.log("账号" + (_0x34e5fd + 1) + " -> 今日已签到过！");
    } else {
      if (_0x202382.msg == "请重新登录") console.log("账号" + (_0x34e5fd + 1) + " -> cookie过期");else {
        console.log("账号" + (_0x34e5fd + 1) + " -> 签到成功！");
      }
    }
    console.log("--开始做分享贴子任务--");
    var _0x202382 = await doTask(_0x3c873d[_0x34e5fd], "shareArticle");
    if (_0x202382.msg == "") {
      console.log("ok！");
    } else console.log(_0x202382);
    console.log("--开始做分享游戏详情任务--");
    var _0x202382 = await doTask(_0x3c873d[_0x34e5fd], "shareGameDetail");
    _0x202382.msg == "" ? console.log("ok！") : console.log(_0x202382);
    console.log("--开始做分享游戏评价任务--");
    var _0x202382 = await doTask(_0x3c873d[_0x34e5fd], "shareGameComment");
    if (_0x202382.msg == "") console.log("ok！");else {
      console.log(_0x202382);
    }
    console.log("--开始游戏榜单停留10s任务--");
    var _0x202382 = await doTask(_0x3c873d[_0x34e5fd], "visitGameRank");
    if (_0x202382.msg == "") {
      console.log("ok！");
    } else console.log(_0x202382);
    var _0x300649 = await getTaskList(_0x3c873d[_0x34e5fd], _0x34e5fd + 1),
      _0x19378a = _0x300649.result.user.username,
      _0x399648 = _0x300649.result.user.level_info.coin,
      _0x2d8117 = _0x300649.result.user.level_info.level;
    console.log(_0x19378a + " 当前盒币 => " + _0x399648 + "≈" + _0x399648 / 1000 + "￥ 当前等级 => " + _0x2d8117);
    var _0x4d206a = _0x300649.result.task_list;
    for (var _0xbc42f5 = 0; _0xbc42f5 < _0x4d206a.length; _0xbc42f5++) {
      {
        if (_0x4d206a[_0xbc42f5].title == "每日任务") {
          console.log("--开始检查每日任务列表--");
          for (var _0x5bfb73 = 0; _0x5bfb73 < _0x4d206a[_0xbc42f5].tasks.length; _0x5bfb73++) {
            {
              var _0x268a72 = _0x4d206a[_0xbc42f5].tasks[_0x5bfb73].title,
                _0x2b20a1 = _0x4d206a[_0xbc42f5].tasks[_0x5bfb73].state;
              console.log("任务：" + _0x268a72 + " -> " + (_0x2b20a1 == "finish" ? "已完成" : "未完成"));
            }
          }
        } else {
          if (_0x4d206a[_0xbc42f5].title == "限时任务") {
            {
              console.log("--开始检查限时任务列表--");
              for (var _0x127a24 = 0; _0x127a24 < _0x4d206a[_0xbc42f5].tasks.length; _0x127a24++) {
                var _0x268a72 = _0x4d206a[_0xbc42f5].tasks[_0x127a24].title,
                  _0x2b20a1 = _0x4d206a[_0xbc42f5].tasks[_0x127a24].state,
                  _0x23fd7e = _0x4d206a[_0xbc42f5].tasks[_0x127a24].task_end_time,
                  _0xf0edd = formatSecondsTimestamp(_0x23fd7e);
                console.log("任务：" + _0x268a72 + " -> " + (_0x2b20a1 == "finish" ? "已完成" : "未完成") + " -- 结束时间" + _0xf0edd);
              }
            }
          }
        }
      }
    }
    console.log();
  }
}
main();