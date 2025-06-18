//Wed Jun 18 2025 16:39:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

(self.webpackChunkcombination_template = self.webpackChunkcombination_template || []).push([[8981], {
  21658: function () {
    var UA = MiguplayUtils.ua.ua(),
      isMiguhuiSDK = UA.indexOf("miguhui") > -1;
    function sdkBrige(fun, parms) {
      var ua = window.navigator.userAgent.toLowerCase() || "",
        isAndroid = ua.indexOf("android") > -1 || ua.indexOf("linux") > -1;
      try {
        isAndroid ? parms ? eval("window.MiguUtilsToSDK." + fun + "(parms);") : eval("window.MiguUtilsToSDK." + fun + "();") : (parms = parms || "", eval("window.webkit.messageHandlers." + fun + ".postMessage(parms);")), isMiguhuiSDK = true;
      } catch (e) {
        isMiguhuiSDK = false;
      }
      sessionStorage.setItem("isMiguhuiSDK", isMiguhuiSDK);
    }
    var __WEBPACK_DEFAULT_EXPORT__ = {
      sdkBrige: sdkBrige
    };
  },
  78981: function (e, t, o) {
    o.r(t), o.d(t, {
      default: function () {
        return x;
      }
    });
    var a = o(3300),
      i = o(56255),
      n = o.n(i),
      r = o(14607),
      s = o.n(r),
      p = o(48079),
      u = o.n(p),
      l = o(50697),
      d = o.n(l),
      y = o(26100),
      c = o.n(y),
      f = o(96319),
      g = o.n(f),
      I = o(78928),
      m = o.n(I),
      w = o(36751),
      h = o.n(w),
      P = o(48590),
      v = o(93547),
      A = (o(21658), o(64346), o(57083)),
      S = o(87710),
      E = {
        name: "loadGif",
        methods: {}
      },
      N = o(14486),
      q = (0, N.A)(E, function () {
        this._self._c;
        return this._m(0);
      }, [function () {
        var e = this,
          t = e._self._c;
        return t("div", {
          staticClass: "page-glass"
        }, [t("div", {
          staticClass: "content-box load"
        }, [t("ul", {
          staticClass: "animatebox"
        }, [t("li"), e._v(" "), t("li"), e._v(" "), t("li")]), e._v(" "), t("h2", [e._v("订单结果查询中")])])]);
      }], false, null, "716cab8f", null).exports,
      b = o(93975);
    function C(e, t) {
      var o = d()(e);
      if (c()) {
        var a = c()(e);
        t && (a = g()(a).call(a, function (t) {
          return m()(e, t).enumerable;
        })), o.push.apply(o, a);
      }
      return o;
    }
    var T = {
        name: "payResult",
        components: {
          PayStatusDialog: S.A,
          LoadGif: q
        },
        data: function () {
          return {
            dialogInfo: {
              txt: "",
              whiteBtn: "",
              greenBtn: "",
              payStatus: 0
            },
            showLoadGif: false,
            loopFindOrder: null,
            loopFindNum: 3,
            loopFindTiem: "",
            loopFindStatus: false,
            appChannel: "",
            SWtimesRun: 0,
            outTimer: null,
            payProduct: localStorage.getItem("payproduct") ? JSON.parse(localStorage.getItem("payproduct")) : ""
          };
        },
        props: {
          PayEquityPopupInfo: {
            type: Object,
            default: {}
          },
          activityInfo: {
            type: Object,
            default: function () {}
          }
        },
        mounted: function () {
          var e = this;
          this.appChannel = MiguplayUtils.url.getQueryString("appChannel") ? MiguplayUtils.url.getQueryString("appChannel") : "zy-gw-mghy", document.addEventListener("visibilitychange", function () {
            document.hidden || e.findResult();
          }), this.findResult();
        },
        methods: {
          findResult: function () {
            var e = this;
            window.localStorage.getItem("gotopayofjiangxi") && this.$emit("refreshTime"), MiguplayUtils.url.getQueryString("pay") && "success" == MiguplayUtils.url.getQueryString("pay") && window.localStorage.getItem("gotopayofjiangxi") && (this.showLoadGif = true, n()(function () {
              e.saveCallsStatus({
                status: 1
              }), e.showLoadGif = false, P.A.popMessageNew("订购成功"), e.reloadPop(), window.localStorage.removeItem("gotopayofjiangxi");
              try {
                var t;
                v.A.recordEventAction((t = {
                  eventType: "clouddistribute_64",
                  pageName: "云分发活动模板页面",
                  rese8: "曝光 云分发活动模板页面-支付成功"
                }, (0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)(t, "pageName", "云分发活动模板页面"), "rese2", window.location.href || ""), "rese1", e.PayEquityPopupInfo.activityId || ""), "rese3", e.PayEquityPopupInfo.activityName || ""), "rese4", e.activityInfo.pageId || ""), "labelName", e.PayEquityPopupInfo.floorName || ""), "topicName", e.PayEquityPopupInfo.floorId || ""), "indexno", e.PayEquityPopupInfo.floorType || ""), "rese9", e.PayEquityPopupInfo.floorName || ""), "rese19", 2), (0, a.A)((0, a.A)((0, a.A)(t, "rese10", window.localStorage.getItem("payBusinessCode") || ""), "rese16", window.localStorage.getItem("payprice") || ""), "rese26", window.localStorage.getItem("choosePresentId") || "")));
              } catch (e) {}
            }, 1e3)), MiguplayUtils.url.getQueryString("pay") && "fail" == MiguplayUtils.url.getQueryString("pay") && window.localStorage.getItem("gotopayofjiangxi") && (this.showLoadGif = true, n()(function () {
              e.saveCallsStatus({
                status: 2
              }), e.showLoadGif = false, P.A.popMessageNew("订购失败"), e.reloadPop(), window.localStorage.removeItem("gotopayofjiangxi");
              try {
                var t;
                v.A.recordEventAction((t = {
                  eventType: "clouddistribute_65",
                  pageName: "云分发活动模板页面",
                  rese8: "曝光 云分发活动模板页面-支付失败"
                }, (0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)(t, "pageName", "云分发活动模板页面"), "rese2", window.location.href || ""), "rese1", e.PayEquityPopupInfo.activityId || ""), "rese3", e.PayEquityPopupInfo.activityName || ""), "rese4", e.activityInfo.pageId || ""), "labelName", e.PayEquityPopupInfo.floorName || ""), "topicName", e.PayEquityPopupInfo.floorId || ""), "indexno", e.PayEquityPopupInfo.floorType || ""), "rese9", e.PayEquityPopupInfo.floorName || ""), "rese19", 2), (0, a.A)((0, a.A)((0, a.A)(t, "rese10", window.localStorage.getItem("payBusinessCode") || ""), "rese16", window.localStorage.getItem("payprice") || ""), "rese26", window.localStorage.getItem("choosePresentId") || ""))), e.reportCoreUserPayErrorEvent();
              } catch (e) {}
            }, 1e3)), !window.localStorage.getItem("gotopayofjiangxi") || "" == window.localStorage.getItem("gotopayofjiangxi") || MiguplayUtils.url.getQueryString("pay") && "" != MiguplayUtils.url.getQueryString("pay") || (this.showLoadGif = true, this.outTimer = n()(function () {
              window.localStorage.removeItem("gotopayofjiangxi"), e.findPortaloneRights();
            }, 1500)), window.localStorage.getItem("gotopayofjiangxi") && "" != window.localStorage.getItem("gotopayofjiangxi") && this.$parent.$refs.Payforgaming && (this.$parent.$refs.Payforgaming.isShowPayType = false);
          },
          btnFun: function (e) {
            "toPay" == e && (this.$parent.showPay = true, this.$emit("refreshTime"), MiguplayUtils.url.removePayQuery("", ["payBackurl", "ssops", "payFromObject"], ["sign"]));
          },
          findPortaloneRights: function () {
            var e = this,
              t = {
                data: {},
                header: {
                  userId: localStorage.getItem("userId"),
                  appChannel: this.appChannel,
                  appType: 1
                }
              };
            A.A.findPortaloneRights(t).then(function (t) {
              if (t.data.returnCode && "000000" == t.data.returnCode) {
                var o = window.localStorage.getItem("payproduct");
                if (!(o = JSON.parse(o))) return;
                var i = 0;
                clearInterval(e.loopFindOrder), e.loopFindOrder = s()(function () {
                  window.localStorage.removeItem("gotopayofjiangxi"), e.queryAllRights(), e.loopFindStatus = true, i++, e.loopFindTiem = 2 * i;
                  var t = "jiaqian" == window.localStorage.getItem("paytype") ? 7 : e.loopFindNum;
                  if (i >= t) {
                    e.showLoadGif = false, P.A.popMessageNew("订购失败"), e.reloadPop(), e.loopFindStatus = false, window.clearInterval(e.loopFindOrder), window.localStorage.removeItem("payproducttype"), window.localStorage.removeItem("payproduct");
                    try {
                      var o;
                      v.A.recordEventAction((o = {
                        eventType: "clouddistribute_65",
                        pageName: "云分发活动模板页面",
                        rese8: "曝光 云分发活动模板页面-支付失败"
                      }, (0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)(o, "pageName", "云分发活动模板页面"), "rese2", window.location.href || ""), "rese1", e.PayEquityPopupInfo.activityId || ""), "rese3", e.PayEquityPopupInfo.activityName || ""), "rese4", e.activityInfo.pageId || ""), "labelName", e.PayEquityPopupInfo.floorName || ""), "topicName", e.PayEquityPopupInfo.floorId || ""), "indexno", e.PayEquityPopupInfo.floorType || ""), "rese9", e.PayEquityPopupInfo.floorName || ""), "rese19", 2), (0, a.A)((0, a.A)((0, a.A)(o, "rese10", window.localStorage.getItem("payBusinessCode") || ""), "rese16", window.localStorage.getItem("payprice") || ""), "rese26", window.localStorage.getItem("choosePresentId") || ""))), e.reportCoreUserPayErrorEvent();
                    } catch (e) {}
                  }
                }, 2e3);
              }
            });
          },
          queryAllRights: function () {
            var e = window.localStorage.getItem("payproduct");
            return !!(e = JSON.parse(e)) && (0 == e.monthlyContinuous && 2 == e.listType ? (this.querySubscribeStatus(), false) : 1 == e.listType ? (1 == e.monthlyContinuous ? this.queryAllRightsByUserId() : this.querySubscribeStatus(), false) : undefined);
          },
          querySubscribeStatus: function () {
            var e = this,
              t = {
                data: {
                  orderId: window.localStorage.getItem("payorderid") || this.$route.query.payorderid || "",
                  type: 1
                },
                header: {
                  userId: localStorage.getItem("userId"),
                  appChannel: this.appChannel,
                  appType: 1
                }
              };
            A.A.querySubscribeStatusEquity(t).then(function (t) {
              if (t.data.returnCode && "000000" == t.data.returnCode) {
                if (0 == e.loopFindStatus) return false;
                var o = t.data.resultData;
                if (1 == o.payStatus) {
                  e.showLoadGif = false, P.A.popMessageNew("订购成功"), e.reloadPop(), window.localStorage.removeItem("payproducttype"), window.localStorage.removeItem("payproduct"), window.clearInterval(e.loopFindOrder), e.loopFindStatus = false;
                  try {
                    var i;
                    v.A.recordEventAction((i = {
                      eventType: "clouddistribute_64",
                      pageName: "云分发活动模板页面",
                      rese8: "曝光 云分发活动模板页面-支付成功"
                    }, (0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)(i, "pageName", "云分发活动模板页面"), "rese2", window.location.href || ""), "rese1", e.PayEquityPopupInfo.activityId || ""), "rese3", e.PayEquityPopupInfo.activityName || ""), "rese4", e.activityInfo.pageId || ""), "labelName", e.PayEquityPopupInfo.floorName || ""), "topicName", e.PayEquityPopupInfo.floorId || ""), "indexno", e.PayEquityPopupInfo.floorType || ""), "rese9", e.PayEquityPopupInfo.floorName || ""), "rese19", 2), (0, a.A)((0, a.A)((0, a.A)(i, "rese10", window.localStorage.getItem("payBusinessCode") || ""), "rese16", window.localStorage.getItem("payprice") || ""), "rese26", window.localStorage.getItem("choosePresentId") || "")));
                  } catch (e) {}
                }
                if (2 == o.payStatus) {
                  e.showLoadGif = false, window.localStorage.removeItem("payproducttype"), window.localStorage.removeItem("payproduct"), window.clearInterval(e.loopFindOrder), e.loopFindStatus = false, e.showLoadGif = false, P.A.popMessageNew("订购失败"), e.reloadPop();
                  try {
                    var n;
                    v.A.recordEventAction((n = {
                      eventType: "clouddistribute_65",
                      pageName: "云分发活动模板页面",
                      rese8: "曝光 云分发活动模板页面-支付失败"
                    }, (0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)(n, "pageName", "云分发活动模板页面"), "rese2", window.location.href || ""), "rese1", e.PayEquityPopupInfo.activityId || ""), "rese3", e.PayEquityPopupInfo.activityName || ""), "rese4", e.activityInfo.pageId || ""), "labelName", e.PayEquityPopupInfo.floorName || ""), "topicName", e.PayEquityPopupInfo.floorId || ""), "indexno", e.PayEquityPopupInfo.floorType || ""), "rese9", e.PayEquityPopupInfo.floorName || ""), "rese19", 2), (0, a.A)((0, a.A)((0, a.A)(n, "rese10", window.localStorage.getItem("payBusinessCode") || ""), "rese16", window.localStorage.getItem("payprice") || ""), "rese26", window.localStorage.getItem("choosePresentId") || ""))), e.reportCoreUserPayErrorEvent();
                  } catch (e) {}
                }
                return false;
              }
            });
          },
          queryAllRightsByUserId: function () {
            var e = this,
              t = window.localStorage.getItem("payproduct");
            t = JSON.parse(t);
            var o = {
              data: {},
              header: {
                userId: localStorage.getItem("userId"),
                appChannel: this.appChannel,
                appType: 1
              }
            };
            A.A.queryAllRightsByUserId(o).then(function (o) {
              if (o.data.returnCode && "000000" == o.data.returnCode) {
                if (0 == e.loopFindStatus) return false;
                var i = o.data.resultData,
                  n = t.businessCode;
                2 != t.payType && 3 != t.payType || (n = t.businessCode), 4 == t.payType && (n = "sanfang" == window.localStorage.getItem("payproducttype") ? t.thirdBusinessCode : t.businessCode), u()(i).call(i, function (t) {
                  if (t.packageId == n && 0 == t.isUnsub && 1 == t.monthlyContinuous) {
                    e.showLoadGif = false, P.A.popMessageNew("订购成功"), e.reloadPop(), window.localStorage.removeItem("payproducttype"), window.localStorage.removeItem("payproduct"), window.clearInterval(e.loopFindOrder), e.loopFindStatus = false;
                    try {
                      var o;
                      v.A.recordEventAction((o = {
                        eventType: "clouddistribute_64",
                        pageName: "云分发活动模板页面",
                        rese8: "曝光 云分发活动模板页面-支付成功"
                      }, (0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)((0, a.A)(o, "pageName", "云分发活动模板页面"), "rese2", window.location.href || ""), "rese1", e.PayEquityPopupInfo.activityId || ""), "rese3", e.PayEquityPopupInfo.activityName || ""), "rese4", e.activityInfo.pageId || ""), "labelName", e.PayEquityPopupInfo.floorName || ""), "topicName", e.PayEquityPopupInfo.floorId || ""), "indexno", e.PayEquityPopupInfo.floorType || ""), "rese9", e.PayEquityPopupInfo.floorName || ""), "rese19", 2), (0, a.A)((0, a.A)((0, a.A)(o, "rese10", window.localStorage.getItem("payBusinessCode") || ""), "rese16", window.localStorage.getItem("payprice") || ""), "rese26", window.localStorage.getItem("choosePresentId") || "")));
                    } catch (e) {}
                  }
                });
              }
            });
          },
          saveCallsStatus: function () {
            var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {
                status: 1
              },
              t = {
                data: {
                  orderId: window.localStorage.getItem("huafeiorderid"),
                  type: 1,
                  status: e.status
                },
                header: {
                  userId: window.localStorage.getItem("userId"),
                  appChannel: this.appChannel,
                  appType: 1
                }
              };
            A.A.saveCallsStatus(t).then(function (e) {});
          },
          reloadPop: function () {
            this.$parent.$refs && this.$parent.$refs.PayEquityPopup && "function" == typeof this.$parent.$refs.PayEquityPopup.infoInit && (this.$parent.$refs.PayEquityPopup.productList = [], this.$parent.$refs.PayEquityPopup.infoInit());
          },
          reportCoreUserPayErrorEvent: function (e) {
            (0, b.U)(function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(o), true).forEach(function (t) {
                  (0, a.A)(e, t, o[t]);
                }) : h() ? Object.defineProperties(e, h()(o)) : C(Object(o)).forEach(function (t) {
                  Object.defineProperty(e, t, m()(o, t));
                });
              }
              return e;
            }({
              errorMsg: "订购失败",
              activityId: this.PayEquityPopupInfo.activityId || "",
              activityName: this.PayEquityPopupInfo.activityName || "",
              pageId: this.activityInfo.pageId || "",
              floorName: this.PayEquityPopupInfo.floorName || "",
              floorId: this.PayEquityPopupInfo.floorId || "",
              floorType: this.PayEquityPopupInfo.floorType || "",
              orderId: window.localStorage.getItem("payorderid") || this.$route.query.payorderid || "",
              payBusinessCode: window.localStorage.getItem("payBusinessCode") || "",
              payPackageName: window.localStorage.getItem("payPackageName") || "",
              payType: window.localStorage.getItem("paytype") || "",
              payPrice: window.localStorage.getItem("payprice") || ""
            }, e));
          }
        },
        beforeDestroy: function () {
          this.outTimer && window.clearTimeout(this.outTimer);
        }
      },
      _ = T,
      x = (0, N.A)(_, function () {
        var e = this,
          t = e._self._c;
        return t("div", {
          staticClass: "result-box"
        }, [t("PayStatusDialog", {
          attrs: {
            dialogInfo: e.dialogInfo
          },
          on: {
            btnFun: e.btnFun
          }
        }), e._v(" "), e.showLoadGif ? t("LoadGif") : e._e()], 1);
      }, [], false, null, "01db32b6", null).exports;
  },
  87710: function (e, t, o) {
    o.d(t, {
      A: function () {
        return w;
      }
    });
    var a = o(50697),
      i = o.n(a),
      n = o(26100),
      r = o.n(n),
      s = o(96319),
      p = o.n(s),
      u = o(78928),
      l = o.n(u),
      d = o(36751),
      y = o.n(d),
      c = o(3300),
      f = o(95353);
    o(57083);
    function g(e, t) {
      var o = i()(e);
      if (r()) {
        var a = r()(e);
        t && (a = p()(a).call(a, function (t) {
          return l()(e, t).enumerable;
        })), o.push.apply(o, a);
      }
      return o;
    }
    var I = {
        name: "payStatusDialog",
        components: {},
        props: {
          dialogInfo: {
            type: Object,
            default: function () {
              return {
                txt: "",
                whiteBtn: "",
                greenBtn: "",
                payStatus: 0
              };
            }
          }
        },
        computed: function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2 ? g(Object(o), true).forEach(function (t) {
              (0, c.A)(e, t, o[t]);
            }) : y() ? Object.defineProperties(e, y()(o)) : g(Object(o)).forEach(function (t) {
              Object.defineProperty(e, t, l()(o, t));
            });
          }
          return e;
        }({}, (0, f.aH)({
          gameStartInfo: function (e) {
            return e.gameInfo.gameStartInfo;
          }
        })),
        data: function () {
          return {
            payingTxt: ""
          };
        },
        mounted: function () {},
        methods: {
          whiteBtnFun: function () {
            this.close();
          },
          greenBtnFun: function () {
            "我知道了" == this.dialogInfo.greenBtn && this.$emit("btnFun", "toPay"), this.close(), this.dialogInfo.affirmAction && "function" == typeof this.dialogInfo.affirmAction && this.dialogInfo.affirmAction();
          },
          close: function () {
            this.$parent.paydialogInfo ? this.$parent.paydialogInfo = {
              txt: "",
              whiteBtn: "",
              greenBtn: "",
              payStatus: 0
            } : this.$parent.dialogInfo = {
              txt: "",
              whiteBtn: "",
              greenBtn: "",
              payStatus: 0
            };
          }
        }
      },
      m = I,
      w = (0, o(14486).A)(m, function () {
        var e = this,
          t = e._self._c;
        return e.dialogInfo.payStatus ? t("div", {
          staticClass: "c-pay-dailog"
        }, [t("div", {
          staticClass: "dialog-container"
        }, [t("div", {
          staticClass: "dialog-content",
          class: "订购失败" == e.dialogInfo.txt ? "center" : ""
        }, [e._v("\n      " + e._s(e.dialogInfo.txt) + "\n    ")]), e._v(" "), t("footer", [e.dialogInfo.whiteBtn ? t("button", {
          staticClass: "white",
          on: {
            click: function (t) {
              return e.whiteBtnFun();
            }
          }
        }, [e._v(e._s(e.dialogInfo.whiteBtn))]) : e._e(), e._v(" "), t("button", {
          staticClass: "green",
          on: {
            click: function (t) {
              return e.greenBtnFun();
            }
          }
        }, [e._v(e._s(e.dialogInfo.greenBtn))])])])]) : e._e();
      }, [], false, null, "3dac710b", null).exports;
  }
}]);