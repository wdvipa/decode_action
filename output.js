//Wed Jun 18 2025 16:35:44 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

(self.webpackChunkcombination_template = self.webpackChunkcombination_template || []).push([[2861], {
  33858: function (e, t) {
    var r, l, c, p;
    r = 452005, l = {
      channelCode: 10013e6,
      netId: "cedf920e510149c48484284aae65a1a2",
      channelId: "10011000",
      contentId: "608716069205"
    }, c = {
      channelId: "10011000",
      contentId: "608716069205",
      netid: "9532d4f105694bb28b0a66320b6a86ab",
      jsID: "10011000"
    }, p = {
      integralMercNo: "CMV14223937"
    }, t.A = {
      BASE_URL: "https://betagame.migufun.com/",
      HOST: "https://www.migufun.com/miguplay",
      H5_HOST_URL: "https://www.migufun.com",
      RULE_ID: r,
      DOWNLOAD_URL: "https://www.migufun.com/h5/cloudgame/appdownload/appDownload.html",
      baseContext: "https://g.10086.cn/miguplay/",
      payMsg: l,
      payMsgDemand: c,
      payMsgIntegral: p,
      NET_ID: "bd481aa8478f4e5baaa87680ad83a5c1",
      ruleUrl: "https://www.migufun.com/h5/cloudgame/game/rule.html?id=",
      pactId: "608007",
      questionId: "608003",
      kefuBaseKey: "5749C1B1384787C2456333DEC616502E",
      kefuUrl: "https://kf.migu.cn/revision1906/",
      envConfig: "prod",
      ruleId: "188003"
    };
  },
  62861: function (e, t, o) {
    o.r(t), o.d(t, {
      default: function () {
        return x;
      }
    });
    var a = o(50697),
      n = o.n(a),
      r = o(26100),
      i = o.n(r),
      s = o(96319),
      l = o.n(s),
      c = o(78928),
      p = o.n(c),
      d = o(36751),
      u = o.n(d),
      y = o(34963),
      g = o(3300),
      I = o(56255),
      f = o.n(I),
      h = o(14607),
      m = o.n(h),
      w = o(85569),
      v = o.n(w),
      P = o(11393),
      C = o.n(P),
      S = o(44828),
      N = o.n(S),
      T = o(57083),
      A = o(95353),
      b = o(93547),
      F = o(48590),
      _ = o(33858),
      M = o(93975);
    function k(e, t) {
      var o = n()(e);
      if (i()) {
        var a = i()(e);
        t && (a = l()(a).call(a, function (t) {
          return p()(e, t).enumerable;
        })), o.push.apply(o, a);
      }
      return o;
    }
    function D(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? k(Object(o), true).forEach(function (t) {
          (0, g.A)(e, t, o[t]);
        }) : u() ? Object.defineProperties(e, u()(o)) : k(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, p()(o, t));
        });
      }
      return e;
    }
    var U = {
        name: "PayForYuanbaoPopup",
        props: ["popupFloorInfo", "activityInfo", "giftInfo", "activityId"],
        components: {},
        data: function () {
          return {
            showLoading: false,
            selType: 1,
            consent: false,
            debounceSelAct: MiguplayUtils.fn.throttle(this.clickPay),
            userItem: "",
            isGotoquery: false,
            firstNum: 0,
            loopFindNum: 3,
            transactionId: "",
            totalAmount: "",
            productCode: "",
            productPrice: 0,
            integralMercNo: "",
            tradeDate: "",
            tradeTime: "",
            integralFlag: "",
            gwURL: "",
            expireDateTime: "",
            packageDescWord: ""
          };
        },
        computed: D(D({}, (0, A.aH)("user", ["payPopInfoList"])), {}, {
          onlyonePayInfo: function () {
            return this.payPopInfoList[0] ? this.payPopInfoList[0] : {};
          }
        }),
        watch: {
          onlyonePayInfo: {
            deep: true,
            handler: function (e, t) {
              e && this.setPackageDescWord();
            }
          }
        },
        created: function () {},
        mounted: function () {
          var e = this;
          return (0, y.A)(N().mark(function t() {
            var o;
            return N().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  o = e, MiguplayUtils.ua.isAndroid() ? document.addEventListener("visibilitychange", function () {
                    document.hidden || o.isGotoquery || o.handlePayStatus();
                  }) : window.addEventListener("pageshow", (0, y.A)(N().mark(function e() {
                    return N().wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          o.isGotoquery || o.handlePayStatus();
                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  })), false), o.isGotoquery || o.handlePayStatus();
                case 4:
                case "end":
                  return t.stop();
              }
            }, t);
          }))();
        },
        methods: D(D({}, (0, A.PY)("user", ["setLuckyCloverNum", "setPayPopInfoList", "setShowPayPop"])), {}, {
          setPackageDescWord: function () {
            var e = this;
            return (0, y.A)(N().mark(function t() {
              var o, a;
              return N().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.onlyonePayInfo || !e.onlyonePayInfo.packageDescWordid) {
                      t.next = 8;
                      break;
                    }
                    return o = {
                      data: {
                        id: e.onlyonePayInfo.packageDescWordid
                      }
                    }, t.next = 4, T.A.queryCopyWriting(o);
                  case 4:
                    (a = t.sent).data.returnCode && "000000" == a.data.returnCode ? e.packageDescWord = a.data.resultData.content || "" : e.this.packageDescWord = "", t.next = 9;
                    break;
                  case 8:
                    e.this.packageDescWord = "";
                  case 9:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          handlePayStatus: function () {
            this.getQueryString("pay") && 3 == window.localStorage.getItem("payType") && window.localStorage.getItem("gotoPay") ? (this.isGotoquery = true, this.$parent.dialogType = 3, this.handleHFPayStatus()) : !window.localStorage.getItem("gotoPay") || 1 != window.localStorage.getItem("payType") && 2 != window.localStorage.getItem("payType") && 4 != window.localStorage.getItem("payType") || (window.localStorage.removeItem("payType"), this.isGotoquery = true, this.$parent.dialogType = 3, this.queryPaySatus(), MiguplayUtils.appUtils.isMiguApp() && MiguplayUtils.appUtils.messageHandlers({
              functionName: "dealKeyBackEventByH5",
              iosMethodType: "jsbridge"
            }));
          },
          handleHFPayStatus: function () {
            var e = this;
            JSON.parse(window.sessionStorage.getItem("packageInfo"));
            "success" == this.getQueryString("pay") && (this.$parent.dialogType = 1, window.localStorage.removeItem("gotoPay"), this.isGotoquery = false, f()(function () {
              try {
                b.A.recordEventAction({
                  pageName: "云分发活动模板页面",
                  eventType: "clouddistribute_64",
                  rese8: "曝光 云分发活动模板页面-支付成功",
                  rese2: window.location.href,
                  rese1: e.activityId,
                  rese3: e.popupFloorInfo.activityName,
                  rese4: e.activityInfo.pageId,
                  labelName: e.popupFloorInfo.floorName,
                  topicName: e.popupFloorInfo.floorId,
                  indexno: e.popupFloorInfo.floorType,
                  rese9: e.popupFloorInfo.floorName,
                  rese19: 1,
                  rese10: window.localStorage.getItem("payBusinessCode") || "",
                  rese16: window.localStorage.getItem("payprice") || ""
                }), b.A.newrecordEventAction({
                  eventContent: "1-1-18-1-1",
                  activityId: e.activityId,
                  type: 1,
                  opValue: 0,
                  action: "1-1-18-1-1兑换支付弹窗-支付按钮-支付成功确认（曝光）",
                  floorId: e.popupFloorInfo.floorId,
                  rese2: window.localStorage.getItem("payBusinessCode") || "",
                  rese4: window.localStorage.getItem("payprice") || ""
                });
              } catch (e) {}
            }, 2e3)), "fail" == this.getQueryString("pay") && (this.$parent.dialogType = 2, window.localStorage.removeItem("gotoPay"), this.isGotoquery = false, f()(function () {
              e.$parent.dialogType = 0;
              try {
                b.A.recordEventAction({
                  pageName: "云分发活动模板页面",
                  eventType: "clouddistribute_65",
                  rese8: "曝光 云分发活动模板页面-支付失败",
                  rese2: window.location.href,
                  rese1: e.activityId,
                  rese3: e.popupFloorInfo.activityName,
                  rese4: e.activityInfo.pageId,
                  labelName: e.popupFloorInfo.floorName,
                  topicName: e.popupFloorInfo.floorId,
                  indexno: e.popupFloorInfo.floorType,
                  rese9: e.popupFloorInfo.floorName,
                  rese10: window.localStorage.getItem("payBusinessCode") || "",
                  rese16: window.localStorage.getItem("payprice") || "",
                  rese19: 1,
                  reason: ""
                }), b.A.newrecordEventAction({
                  eventContent: "1-1-18-1-2",
                  activityId: e.activityId,
                  type: 1,
                  opValue: 0,
                  action: "1-1-18-1-2兑换支付弹窗-支付按钮-支付失败确认（曝光）",
                  floorId: e.popupFloorInfo.floorId,
                  rese2: window.localStorage.getItem("payBusinessCode") || "",
                  rese4: window.localStorage.getItem("payprice") || ""
                }), e.reportCoreUserPayErrorEvent();
              } catch (e) {}
            }, 2e3));
          },
          queryPaySatus: function () {
            var e = this,
              t = {
                data: {
                  orderId: window.localStorage.getItem("payOrderid")
                }
              };
            T.A.querySubscribeStatus(t).then(function (t) {
              if ("000000" === t.data.returnCode) {
                if (1 != t.data.resultData.payStatus) e.loopFindOrder || (e.loopFindOrder = m()(function () {
                  e.firstNum >= e.loopFindNum ? (e.$parent.dialogType = 2, clearInterval(e.loopFindOrder), e.firstNum = 0, f()(function () {
                    e.$parent.dialogType = 0;
                  }, 2e3), b.A.recordEventAction({
                    pageName: "云分发活动模板页面",
                    eventType: "clouddistribute_65",
                    rese8: "曝光 云分发活动模板页面-支付失败",
                    rese2: window.location.href,
                    rese1: e.activityId,
                    rese3: e.popupFloorInfo.activityName,
                    rese4: e.activityInfo.pageId,
                    labelName: e.popupFloorInfo.floorName,
                    topicName: e.popupFloorInfo.floorId,
                    indexno: e.popupFloorInfo.floorType,
                    rese9: e.popupFloorInfo.floorName,
                    rese10: window.localStorage.getItem("payBusinessCode") || "",
                    rese16: window.localStorage.getItem("payprice") || "",
                    reason: "",
                    rese19: 1
                  }), b.A.newrecordEventAction({
                    eventContent: "1-1-18-1-2",
                    activityId: e.activityId,
                    type: 1,
                    opValue: 0,
                    action: "1-1-18-1-2兑换支付弹窗-支付按钮-支付失败确认（曝光）",
                    floorId: e.popupFloorInfo.floorId,
                    rese2: window.localStorage.getItem("payBusinessCode") || "",
                    rese4: window.localStorage.getItem("payprice") || ""
                  }), e.reportCoreUserPayErrorEvent()) : e.queryPaySatus(), e.firstNum++;
                }, 1e3));else {
                  e.loopFindOrder && (clearInterval(e.loopFindOrder), e.firstNum = 0), e.$parent.dialogType = 1, e.$parent.refreshTimeFunction();
                  try {
                    b.A.recordEventAction({
                      pageName: "云分发活动模板页面",
                      eventType: "clouddistribute_64",
                      rese8: "曝光 云分发活动模板页面-支付成功",
                      rese2: window.location.href,
                      rese1: e.activityId,
                      rese3: e.popupFloorInfo.activityName,
                      rese4: e.activityInfo.pageId,
                      labelName: e.popupFloorInfo.floorName,
                      topicName: e.popupFloorInfo.floorId,
                      indexno: e.popupFloorInfo.floorType,
                      rese9: e.popupFloorInfo.floorName,
                      rese19: 1,
                      rese10: window.localStorage.getItem("payBusinessCode") || "",
                      rese16: window.localStorage.getItem("payprice") || ""
                    }), b.A.newrecordEventAction({
                      eventContent: "1-1-18-1-1",
                      activityId: e.activityId,
                      type: 1,
                      opValue: 0,
                      action: "1-1-18-1-1兑换支付弹窗-支付按钮-支付成功确认（曝光）",
                      floorId: e.popupFloorInfo.floorId,
                      rese2: window.localStorage.getItem("payBusinessCode") || "",
                      rese4: window.localStorage.getItem("payprice") || ""
                    });
                  } catch (e) {}
                }
                window.localStorage.removeItem("gotoPay");
              } else e.$parent.dialogType = 0, F.A.popMessageNew(t.data.message), window.localStorage.removeItem("gotoPay");
              e.isGotoquery = false;
            }).catch(function (e) {});
          },
          getQueryString: function (e) {
            for (var t, o, a, n = [], r = (location.search.length > 0 ? location.search.substring(1) : "").split("&"), i = 0, s = r.length; i < s; i++) t = r[i].split("="), o = decodeURIComponent(t[0]), a = decodeURIComponent(t[1]), e == o && n.push(a);
            return n.length > 0 ? n[n.length - 1] : "";
          },
          getPrice: function (e) {
            return e ? e.saleChargeId ? e.salePrice / 100 : e.price / 100 : "";
          },
          clickPay: function () {
            if (!window.localStorage.getItem("userId")) return MiguplayUtils.user.gotoLogin(), void localStorage.setItem("my_login_back", "im_go_login");
            var e = JSON.parse(v()(this.onlyonePayInfo));
            e.selType = this.selType;
            var t = e.saleChargeId ? e.saleChargeId : e.chargeId;
            window.localStorage.setItem("payBusinessCode", t), window.localStorage.setItem("payprice", this.getPrice(this.onlyonePayInfo));
            try {
              b.A.recordEventAction({
                pageName: "云分发活动模板页面",
                eventType: "clouddistribute_63",
                rese8: "点击 云分发活动模板页面-元宝支付弹窗-立即支付",
                rese2: window.location.href,
                rese1: this.activityId,
                rese3: this.popupFloorInfo.activityName,
                rese4: this.activityInfo.pageId,
                labelName: this.popupFloorInfo.floorName,
                topicName: this.popupFloorInfo.floorId,
                indexno: this.popupFloorInfo.floorType,
                rese9: this.popupFloorInfo.floorName,
                rese10: window.localStorage.getItem("payBusinessCode") || "",
                rese16: window.localStorage.getItem("payprice") || ""
              }), b.A.newrecordEventAction({
                eventContent: "1-1-18-1",
                activityId: this.activityId,
                type: 2,
                opValue: 0,
                action: "1-1-18-1兑换支付弹窗-支付按钮（点击）",
                floorId: this.popupFloorInfo.floorId,
                rese2: window.localStorage.getItem("payBusinessCode") || "",
                rese4: window.localStorage.getItem("payprice") || ""
              });
            } catch (e) {}
            this.placeOrder(e);
          },
          queryPayLimit: function (e) {
            return (0, y.A)(N().mark(function t() {
              var o, a, n, r, i, s;
              return N().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return o = e.saleChargeId ? e.salePrice : e.price, a = {
                      data: {
                        money: o
                      }
                    }, t.next = 4, T.A.queryPayLimitForPay(a);
                  case 4:
                    if (n = t.sent, r = n.data, i = r.returnCode, r.resultData, r.message, "020206" != i) {
                      t.next = 12;
                      break;
                    }
                    return s = "".concat(_.A.H5_HOST_URL, "/middleh5/teenagerSetting?limitType=3&teenagerPayLimitFromPage=5"), window.location.href = s, t.abrupt("return", false);
                  case 12:
                    return t.abrupt("return", true);
                  case 13:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          placeOrder: function (e) {
            var t = this;
            return (0, y.A)(N().mark(function o() {
              return N().wrap(function (o) {
                for (;;) switch (o.prev = o.next) {
                  case 0:
                    if (window.sessionStorage.setItem("packageInfo", v()(e)), t.consent) {
                      o.next = 5;
                      break;
                    }
                    return F.A.popMessageNew("请阅读并同意《元宝订购服务协议》"), o.abrupt("return", false);
                  case 5:
                    return o.next = 7, t.queryPayLimit(e);
                  case 7:
                    if (o.sent) {
                      o.next = 9;
                      break;
                    }
                    return o.abrupt("return");
                  case 9:
                    3 == t.selType && t.generatePhonePayOrder(e), 1 != t.selType && 2 != t.selType || t.otherOrder(e), 4 == t.selType && t.integralOrder(e), 4 != t.selType && t.closePop();
                  case 13:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          generatePhonePayOrder: function (e) {
            var t = this,
              o = {
                data: {
                  cType: +this.$route.query.cType,
                  configId: e.id,
                  combinaActivityId: "HDMB_" + this.activityId
                }
              };
            T.A.generatePhonePayOrder(o).then(function (o) {
              if ("000000" === o.data.returnCode) {
                var a,
                  n,
                  r,
                  i,
                  s,
                  l,
                  c,
                  p,
                  d,
                  u,
                  y,
                  g,
                  I,
                  f = o.data.resultData,
                  h = f.cipherText.split("/");
                window.localStorage.setItem("payType", "3"), window.localStorage.setItem("payOrderid", f.orderId), window.localStorage.setItem("gotoPay", t.$route.name);
                var m = encodeURIComponent(MiguplayUtils.url.moveQueryInfo(["pay", "xml", "orderId"])),
                  w = _.A.payMsgDemand,
                  v = e.saleChargeId ? e.salePrice : e.price,
                  P = e.saleChargeId ? e.saleChargeId : e.chargeId,
                  S = "test" == _.A.envConfig ? "http://h5test.migufun.com:8008" : "https://www.migufun.com",
                  N = C()(a = C()(n = C()(r = C()(i = C()(s = C()(l = C()(c = C()(p = C()(d = C()(u = C()(y = C()(g = C()(I = "".concat(S, "/miguplay/html/miniPay/index.html?channelCode=")).call(I, h[0], "&spServCode=")).call(g, h[1], "&itemID=")).call(y, P, "&productID=&cxCode=")).call(u, w.contentId, "&contentID=")).call(d, h[1], "&cpID=")).call(p, h[3], "&spCode=")).call(c, h[4], "&payType=2&operCode=01&fee=")).call(l, v, "&description=")).call(s, e.packageName, "&orderId=")).call(i, f.orderId, "&jsID=")).call(r, w.jsID, "&netId=")).call(n, w.netid, "&backUrl=")).call(a, m);
                window.location.href = N;
              }
            }).catch(function (e) {});
          },
          otherOrder: function (e) {
            var t = this;
            window.localStorage.setItem("cloudBackUrl", window.location.href);
            var o = {
              data: {
                combinaActivityId: "HDMB_" + this.activityId,
                cType: +this.$route.query.cType,
                configId: e.id,
                payType: 1 == this.selType ? "WX" : "AP",
                channelId: _.A.payMsg.channelId,
                contentId: _.A.payMsg.contentId,
                pageUrl: encodeURIComponent(MiguplayUtils.url.moveQueryInfo(["pay", "xml", "orderId"]))
              }
            };
            T.A.voucherSubscribeH5(o).then(function (e) {
              if ("000000" === e.data.returnCode) {
                var o = e.data.resultData;
                window.localStorage.setItem("payType", t.selType), window.localStorage.setItem("payOrderid", o.orderId), window.localStorage.setItem("gotoPay", t.$route.name);
                var a = o.gwURL;
                1 == t.selType && window.location.replace(a), 2 == t.selType && (window.location.href = a);
              }
            }).catch(function (e) {});
          },
          integralOrder: function (e) {
            var t = this;
            this.$parent.showLoading = true, this.productCode = e.saleChargeId ? e.saleChargeId : e.chargeId, this.productPrice = e.saleChargeId ? e.salePrice : e.price;
            var o = {
              data: {
                cType: +this.$route.query.cType,
                configId: e.id,
                channelId: _.A.payMsg.channelId,
                contentId: _.A.payMsg.contentId,
                combinaActivityId: "HDMB_" + this.activityId
              }
            };
            T.A.voucherSubscribeH5Byjf(o).then(function (o) {
              if (o.data.returnCode && "000000" == o.data.returnCode) {
                var a = o.data.resultData;
                window.localStorage.setItem("payType", t.selType), window.localStorage.setItem("payOrderid", a.orderId), window.localStorage.setItem("gotoPay", t.$route.name);
                var n = new Date(o.data.serverTime || ""),
                  r = new Date(o.data.serverTime + 3e5 || ""),
                  i = "" + n.getFullYear() + (n.getMonth() + 1 > 9 ? n.getMonth() + 1 : "0" + (n.getMonth() + 1)) + (n.getDate() > 9 ? n.getDate() : "0" + n.getDate()),
                  s = "" + (n.getHours() > 9 ? n.getHours() : "0" + n.getHours()) + (n.getMinutes() > 9 ? n.getMinutes() : "0" + n.getMinutes()) + (n.getSeconds() > 9 ? n.getSeconds() : "0" + n.getSeconds()),
                  l = "" + r.getFullYear() + (r.getMonth() + 1 > 9 ? r.getMonth() + 1 : "0" + (r.getMonth() + 1)) + (r.getDate() > 9 ? r.getDate() : "0" + r.getDate()),
                  c = "" + (r.getHours() > 9 ? r.getHours() : "0" + r.getHours()) + (r.getMinutes() > 9 ? r.getMinutes() : "0" + r.getMinutes()) + (r.getSeconds() > 9 ? r.getSeconds() : "0" + r.getSeconds());
                t.transactionId = a.cmftOrderId || "", t.gwURL = a.cmftPayNotifyUrl || "", t.totalAmount = (t.productPrice / 100).toFixed(2) + "" || "", t.productPrice = t.productPrice / 1 || "", t.integralMercNo = _.A.payMsgIntegral.integralMercNo || "", t.tradeDate = i || "", t.tradeTime = s || "", t.integralFlag = "1", t.expireDateTime = "" + l + c || "", t.getUserItem();
              } else "060344" == o.data.returnCode ? (t.$parent.showLoading = false, F.A.popMessageNew("手机号不支持")) : (t.$parent.showLoading = false, t.closePop(), F.A.popMessageNew("下单失败")), t.reportCoreUserPayErrorEvent({
                errorMsg: "金科-".concat("060344" == o.data.returnCode ? "手机号不支持" : "服务端下单失败"),
                payBusinessCode: t.productCode,
                payPrice: t.productPrice,
                payPackageName: null == e ? undefined : e.packageName,
                voucherNum: null == e ? undefined : e.voucherNum,
                reason: o.data.message
              });
            });
          },
          sendPaySdk: function () {
            var e = JSON.parse(window.sessionStorage.getItem("packageInfo")),
              t = this;
            migupaysdk.prePay(this.paystr(), function (o, a, n, r, i, s, l) {
              t.$parent.showLoading = false, t.closePop(), o && "8000000000" === o.resultCode ? (l = l.replace(/\+/g, "%2B"), window.location.href = l) : (F.A.popMessageNew("收银台异常"), t.reportCoreUserPayErrorEvent({
                errorMsg: "金科-收银台异常",
                payBusinessCode: (null == e ? undefined : e.saleChargeId) || (null == e ? undefined : e.chargeId),
                payPrice: null != e && e.saleChargeId ? null == e ? undefined : e.salePrice : null == e ? undefined : e.price,
                payType: null == e ? undefined : e.selType,
                payPackageName: null == e ? undefined : e.packageName,
                voucherNum: null == e ? undefined : e.voucherNum,
                jinKePayResult: {
                  result: o,
                  upResultCode: a,
                  upResultMsg: n,
                  outTradeNo: r,
                  tradeNo: i,
                  tradeDate: s,
                  jumpUrl: l
                }
              }));
            });
          },
          paystr: function () {
            var e = {};
            return e.netId = _.A.NET_ID, e.channelCode = "hydaoju001", e.companyId = "14", e.productLine = "30", e.tradeNo = this.transactionId, e.totalAmount = this.totalAmount, e.subject = "云支付", e.tradeDate = this.tradeDate, e.tradeTime = this.tradeTime, e.expireMinutes = this.expireDateTime, e.notifyUrl = this.gwURL, e.pageNotifyUrl = window.location.href, e.paymentScene = "wap", e.integralFlag = this.integralFlag, e.provinceCode = "MG05", e.integralMercNo = this.integralMercNo, e.productList = this.productCode ? [{
              productCode: this.productCode,
              price: this.totalAmount
            }] : "", e.smsFlag = "0", e.mobileNo = this.userItem, v()(e);
          },
          getUserItem: function () {
            var e = this;
            return (0, y.A)(N().mark(function t() {
              var o, a, n, r;
              return N().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return JSON.parse(window.sessionStorage.getItem("packageInfo")), o = {
                      data: {},
                      headers: {}
                    }, t.next = 4, T.A.getUserItem(o);
                  case 4:
                    if (a = t.sent, !(n = a.data) || "000000" != n.returnCode) {
                      t.next = 22;
                      break;
                    }
                    if (r = MiguplayUtils.crypto.decryptPhone(n.resultData.item1, n.resultData.item2)) {
                      t.next = 17;
                      break;
                    }
                    return e.$parent.showLoading = false, e.closePop(), F.A.popMessageNew("网络异常"), t.abrupt("return", false);
                  case 17:
                    return e.userItem = r, e.sendPaySdk(), t.abrupt("return", true);
                  case 20:
                    t.next = 26;
                    break;
                  case 22:
                    return e.$parent.showLoading = false, e.closePop(), F.A.popMessageNew("网络异常"), t.abrupt("return", false);
                  case 26:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          changeType: function (e) {
            this.selType = e;
          },
          setconsent: function () {
            this.consent = !this.consent;
          },
          closePop: function () {
            this.consent = false, this.setShowPayPop(false);
          },
          gocloudPlayVoucherNew: function () {
            window.localStorage.setItem("goPayShop", 1), b.A.recordEventAction({
              pageName: "云分发活动模板页面",
              eventType: "clouddistribute_62",
              rese8: "点击 云分发活动模板页面-元宝支付弹窗-去充值",
              rese2: window.location.href,
              rese1: this.activityId,
              rese3: this.popupFloorInfo.activityName,
              rese4: this.activityInfo.pageId,
              labelName: this.popupFloorInfo.floorName,
              topicName: this.popupFloorInfo.floorId,
              indexno: this.popupFloorInfo.floorType,
              rese9: this.popupFloorInfo.floorName,
              rese10: window.localStorage.getItem("payBusinessCode") || "",
              rese16: window.localStorage.getItem("payprice") || ""
            }), b.A.newrecordEventAction({
              eventContent: "1-1-18-2",
              activityId: this.activityId,
              type: 2,
              opValue: 0,
              action: "1-1-18-2兑换支付弹窗-去充值（点击）",
              floorId: this.popupFloorInfo.floorId,
              rese2: window.localStorage.getItem("payBusinessCode") || "",
              rese4: window.localStorage.getItem("payprice") || ""
            });
            var e,
              t,
              o,
              a,
              n = MiguplayUtils.url.getQueryString("appChannel") || "";
            MiguplayUtils.appUtils.isMiguApp() ? window.location.href = "youplay://webview?url=" + _.A.H5_HOST_URL + C()(e = "/miguplay/html/cloudPlayVoucherNew/payForH5?appRese=10&chargeId=".concat(null === (t = this.onlyonePayInfo) || undefined === t ? undefined : t.chargeId)).call(e, n ? "&appChannel=" + n : "") : window.location.href = _.A.H5_HOST_URL + C()(o = "/miguplay/html/cloudPlayVoucherNew/payForH5?appRese=10&chargeId=".concat(null === (a = this.onlyonePayInfo) || undefined === a ? undefined : a.chargeId)).call(o, n ? "&appChannel=" + n : "");
          },
          jumpToQuestion: function (e) {
            "rule" == e ? MiguplayUtils.appUtils.isMiguApp() ? window.location.href = "youplay://webview?url=" + _.A.ruleUrl + _.A.pactId : window.location.href = _.A.ruleUrl + _.A.pactId : "question" == e && (MiguplayUtils.appUtils.isMiguApp() ? window.location.href = "youplay://webview?url=" + _.A.ruleUrl + _.A.questionId : window.location.href = _.A.ruleUrl + _.A.questionId);
          },
          reportCoreUserPayErrorEvent: function (e) {
            var t = JSON.parse(window.sessionStorage.getItem("packageInfo") || "{}");
            (0, M.U)(D({
              errorMsg: "订购失败",
              activityId: this.activityId || "",
              activityName: this.popupFloorInfo.activityName || "",
              pageId: this.activityInfo.pageId || "",
              floorName: this.popupFloorInfo.floorName || "",
              floorId: this.popupFloorInfo.floorId || "",
              floorType: this.popupFloorInfo.floorType || "",
              orderId: window.localStorage.getItem("payorderid") || this.$route.query.payorderid || "",
              payBusinessCode: (null == t ? undefined : t.saleChargeId) || (null == t ? undefined : t.chargeId) || "",
              payPackageName: null == t ? undefined : t.packageName,
              payType: window.localStorage.getItem("payType"),
              payPrice: null != t && t.saleChargeId ? null == t ? undefined : t.salePrice : null == t ? undefined : t.price
            }, e));
          }
        })
      },
      x = (0, o(14486).A)(U, function () {
        var e = this,
          t = e._self._c;
        return t("div", {
          staticClass: "PayForYuanbaoPopup"
        }, [t("div", {
          staticClass: "popup"
        }, [t("div", {
          staticClass: "closeBtn",
          on: {
            click: e.closePop
          }
        }), e._v(" "), e.onlyonePayInfo && e.onlyonePayInfo.notFinishDesc ? t("h2", [e._v(e._s(e.onlyonePayInfo.notFinishDesc ? e.onlyonePayInfo.notFinishDesc : ""))]) : e._e(), e._v(" "), t("div", {
          staticClass: "yuanbaoNumBox",
          on: {
            click: e.gocloudPlayVoucherNew
          }
        }, [t("div", {
          staticClass: "yuanbao"
        }, [e._v(e._s(e.onlyonePayInfo.voucherNum ? e.onlyonePayInfo.voucherNum : "") + "个元宝")]), e._v(" "), t("div", {
          staticClass: "money"
        }, [t("span", {
          staticClass: "dot"
        }, [e._v("¥")]), e._v(" "), t("span", [e._v(e._s(e.getPrice(e.onlyonePayInfo)))])])]), e._v(" "), t("div", {
          staticClass: "pay-type-box"
        }, e._l(e.onlyonePayInfo.payTypeList && e.onlyonePayInfo.payTypeList.length > 0 ? e.onlyonePayInfo.payTypeList : [], function (o) {
          return t("div", {
            staticClass: "type-item",
            on: {
              click: function (t) {
                return e.changeType(o.type);
              }
            }
          }, [t("div", {
            staticClass: "left-cont"
          }, [t("i", {
            staticClass: "type-icon",
            class: "icon_" + o.type
          }), e._v(" "), t("span", [e._v(e._s(o.name))])]), e._v(" "), t("div", {
            staticClass: "right-cont"
          }, [e.selType == o.type ? t("i", {
            staticClass: "seled"
          }) : t("i", {
            staticClass: "no-sel"
          })])]);
        }), 0), e._v(" "), t("div", {
          staticClass: "payBtn",
          on: {
            click: function (t) {
              return e.debounceSelAct();
            }
          }
        }, [t("span", [e._v("立即支付")]), e._v(" "), t("span", [e._v(e._s(e.getPrice(e.onlyonePayInfo)) + "元")])]), e._v(" "), t("div", {
          staticClass: "explain-content"
        }, [t("div", {
          staticClass: "userprotocol"
        }, [t("i", {
          class: {
            on: 1 == e.consent
          },
          on: {
            click: function (t) {
              return e.setconsent();
            }
          }
        }), e._v(" "), t("span", {
          on: {
            click: function (t) {
              return e.setconsent();
            }
          }
        }, [e._v("阅读并同意")]), e._v(" "), t("a", {
          staticClass: "unline",
          attrs: {
            href: ""
          },
          on: {
            click: function (t) {
              return t.preventDefault(), e.jumpToQuestion("rule");
            }
          }
        }, [e._v("\n            《元宝订购服务协议》\n          ")]), e._v(" "), t("a", {
          staticClass: "changjian",
          attrs: {
            href: ""
          },
          on: {
            click: function (t) {
              return t.preventDefault(), e.jumpToQuestion("question");
            }
          }
        }, [e._v("\n          常见问题\n          ")])])]), e._v(" "), e.onlyonePayInfo ? t("div", {
          staticClass: "ywq-explain"
        }, [t("h4", [e._v("元宝说明")]), e._v(" "), t("div", {
          staticClass: "explain-cont",
          domProps: {
            innerHTML: e._s(e.packageDescWord)
          }
        })]) : e._e()])]);
      }, [], false, null, "31bdc814", null).exports;
  }
}]);