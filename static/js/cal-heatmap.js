/*结果变量*/
const weekNum = 8;
const resultObj = {};
const resultList = [];

/*获取index.xml页面的数据*/

//补位0
function Appendzero(obj) {
  if (obj < 10) return "0" + "" + obj;
  else return obj;
}

if (window.XMLHttpRequest) {
  xhttp = new XMLHttpRequest();
} else {
  // IE 5/6
  xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

let localurl = "/index.xml"; //ssr地址
xhttp.overrideMimeType("text/xml");
xhttp.open("GET", localurl, false);
xhttp.send(null);
xmlDoc = xhttp.responseXML;

//遍历元素
let rootEle = xmlDoc.getElementsByTagName("channel")[0]["children"];
for (let key in rootEle) {
  let element = rootEle[key];
  if (element.nodeName == "item") {
    let child = element["children"];
    let title = child[0];
    let pubDate = child[2];
    if (pubDate.textContent == "" || title.textContent == "") {
      continue;
    }
    let date = new Date(pubDate.textContent);
    let dateFormat =
      date.getFullYear() +
      "-" +
      Appendzero(date.getMonth() + 1) +
      "-" +
      Appendzero(date.getDate());
    if (resultObj.hasOwnProperty(dateFormat)) {
      resultObj[dateFormat]["num"]++;
      resultObj[dateFormat]["postTitles"] += "," + title.textContent;
    } else {
      resultObj[dateFormat] = {};
      resultObj[dateFormat]["num"] = 1;
      resultObj[dateFormat]["postTitles"] = title.textContent;
    }
  }
}
//遍历obj，放入list
for (let key in resultObj) {
  let val = resultObj[key];
  let tmpJson = { date: key, value: val["num"], title: val["postTitles"] };
  resultList.push(tmpJson);
}
// console.log("HeatMap处理后的结果", resultList);

/*获取数据*/

//获取上几个星期的天
function getLastNWeeksDate(n) {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7 * n);
}
//获取这星期的周一
function getMonday(d) {
  d = new Date(d);
  let day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}
let lastnweekday = getLastNWeeksDate(weekNum - 2);
let firstday = getMonday(lastnweekday);

const cal = new CalHeatmap();

//一年
// cal.paint({
//   theme: "dark",
//   domain: { type: "month" },
//   subDomain: { type: "day", label: "D", sort: "asc" },
// });

//一月
// cal.paint({
//   theme: "dark",
//   domain: {
//     type: "month",
//     label: {
//       text: null, //不显示标签
//     },
//   },
//   range: 1,
//   subDomain: { type: "day", label: "D", sort: "asc" },
// });

/*深色与明亮主题初始值判断*/
let isDark = document.body.className.includes("dark");
// console.log("是否深色主题", isDark);
let hlDate = new Date().toLocaleDateString();
let hlArr = hlDate.split('/');
let dateFormat = hlArr[0] + "-" + Appendzero(hlArr[1]) + "-" + Appendzero(hlArr[2]);
let realHLDate = new Date(dateFormat);

/* 参数 */
let options = {
  animationDuration: 200,
  theme: isDark ? "dark" : "light",
  verticalOrientation: true,
  date: {
    start: firstday, //开始时间为上8-2个周的周一
    highlight: [realHLDate],
    locale: { weekStart: 1 }, //周一为第一天
  },
  domain: {
    type: "week",
    label: {
      position: "right",
      text: null, //不显示标签
    },
  },
  range: weekNum,
  subDomain: {
    width: 12,
    height: 12,
    radius: 2,
    type: "day",
    // label: "D", //D是显示日期的日；null是不显示；回调函数是自定义
    label: function (timestamp, value) {
      return value;
    },
    sort: "asc",
  },
  data: {
    type: "json",
    source: resultList,
    x: "date",
    y: "value",
  },
  scale: {
    color: {
      range: ["#eea2a4", "#5c2223"], //[浅色，深色]
      interpolate: "hsl",
      type: "linear",
      domain: [0, 5], //文章数阈值：[min,max]
    },
  },
};

/*深色与明亮主题切换监听*/
document.getElementById("theme-toggle").addEventListener("click", () => {
  location.reload();// 由于没有重新渲染的函数，只能刷新界面
});

/*渲染*/
cal.paint(options);

/*初始点击的数据*/
let listObj = {}
function initClickUrls() {
  fetch("/index.xml")
    .then((res) => res.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      let ls = data.querySelectorAll("channel item");
      listObj = {};
      ls.forEach(element => {
        let eleCollect = element.children;
        let dateStr = eleCollect.item(2).textContent;
        let url = eleCollect.item(3).textContent;
        let dateTs = Date.parse(dateStr);
        let date = new Date(dateTs);
        let ymd = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        if (listObj.hasOwnProperty(ymd)) {
          listObj[ymd]['url'].push(url);
        }
        else {
          listObj[ymd] = { 'date': ymd, 'url': [url] };
        }
      });
      console.log(listObj)
    });
}
initClickUrls();

//事件处理
cal.on("mouseover", (event, timestamp, value) => {
  let date = new Date(timestamp);
  let dateFormat = Appendzero(date.getMonth() + 1) + "/" + Appendzero(date.getDate());
  let str = '周' + '日一二三四五六'.charAt(new Date(timestamp).getDay());
  let tips = "";
  if (value == null) {
    tips = str + " " + dateFormat + " , 懒虫!";
  }
  else {
    tips = str + " " + dateFormat + " , " + value + " 篇";
  }
  tippy(event.target, {
    placement: "top",
    content: tips,
  });
});
cal.on('click', (event, timestamp, value) => {
  let date = new Date(timestamp);
  let ymd = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  let dateObj = listObj[ymd];
  if (dateObj) {
    let urlList = dateObj.url;
    if (urlList && urlList.length > 0) {
      let locationHref = urlList[Math.floor(Math.random() * urlList.length)];
      location.href = locationHref;
    }
  }
});