"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/colors/lib/styles.js
var require_styles = __commonJS({
  "node_modules/colors/lib/styles.js"(exports, module2) {
    var styles = {};
    module2["exports"] = styles;
    var codes = {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29],
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      gray: [90, 39],
      grey: [90, 39],
      brightRed: [91, 39],
      brightGreen: [92, 39],
      brightYellow: [93, 39],
      brightBlue: [94, 39],
      brightMagenta: [95, 39],
      brightCyan: [96, 39],
      brightWhite: [97, 39],
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgGray: [100, 49],
      bgGrey: [100, 49],
      bgBrightRed: [101, 49],
      bgBrightGreen: [102, 49],
      bgBrightYellow: [103, 49],
      bgBrightBlue: [104, 49],
      bgBrightMagenta: [105, 49],
      bgBrightCyan: [106, 49],
      bgBrightWhite: [107, 49],
      blackBG: [40, 49],
      redBG: [41, 49],
      greenBG: [42, 49],
      yellowBG: [43, 49],
      blueBG: [44, 49],
      magentaBG: [45, 49],
      cyanBG: [46, 49],
      whiteBG: [47, 49]
    };
    Object.keys(codes).forEach(function(key) {
      var val = codes[key];
      var style = styles[key] = [];
      style.open = "\x1B[" + val[0] + "m";
      style.close = "\x1B[" + val[1] + "m";
    });
  }
});

// node_modules/colors/lib/system/has-flag.js
var require_has_flag = __commonJS({
  "node_modules/colors/lib/system/has-flag.js"(exports, module2) {
    "use strict";
    module2.exports = function(flag, argv) {
      argv = argv || process.argv;
      var terminatorPos = argv.indexOf("--");
      var prefix = /^-{1,2}/.test(flag) ? "" : "--";
      var pos = argv.indexOf(prefix + flag);
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// node_modules/colors/lib/system/supports-colors.js
var require_supports_colors = __commonJS({
  "node_modules/colors/lib/system/supports-colors.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var hasFlag = require_has_flag();
    var env = process.env;
    var forceColor = void 0;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
      forceColor = false;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env) {
      forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      var min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        var osRelease = os.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(sign) {
          return sign in env;
        }) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if ("TERM_PROGRAM" in env) {
        var version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Hyper":
            return 3;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      if (env.TERM === "dumb") {
        return min;
      }
      return min;
    }
    function getSupportLevel(stream) {
      var level = supportsColor(stream);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// node_modules/colors/lib/custom/trap.js
var require_trap = __commonJS({
  "node_modules/colors/lib/custom/trap.js"(exports, module2) {
    module2["exports"] = function runTheTrap(text, options) {
      var result = "";
      text = text || "Run the trap, drop the bass";
      text = text.split("");
      var trap = {
        a: ["@", "\u0104", "\u023A", "\u0245", "\u0394", "\u039B", "\u0414"],
        b: ["\xDF", "\u0181", "\u0243", "\u026E", "\u03B2", "\u0E3F"],
        c: ["\xA9", "\u023B", "\u03FE"],
        d: ["\xD0", "\u018A", "\u0500", "\u0501", "\u0502", "\u0503"],
        e: [
          "\xCB",
          "\u0115",
          "\u018E",
          "\u0258",
          "\u03A3",
          "\u03BE",
          "\u04BC",
          "\u0A6C"
        ],
        f: ["\u04FA"],
        g: ["\u0262"],
        h: ["\u0126", "\u0195", "\u04A2", "\u04BA", "\u04C7", "\u050A"],
        i: ["\u0F0F"],
        j: ["\u0134"],
        k: ["\u0138", "\u04A0", "\u04C3", "\u051E"],
        l: ["\u0139"],
        m: ["\u028D", "\u04CD", "\u04CE", "\u0520", "\u0521", "\u0D69"],
        n: ["\xD1", "\u014B", "\u019D", "\u0376", "\u03A0", "\u048A"],
        o: [
          "\xD8",
          "\xF5",
          "\xF8",
          "\u01FE",
          "\u0298",
          "\u047A",
          "\u05DD",
          "\u06DD",
          "\u0E4F"
        ],
        p: ["\u01F7", "\u048E"],
        q: ["\u09CD"],
        r: ["\xAE", "\u01A6", "\u0210", "\u024C", "\u0280", "\u042F"],
        s: ["\xA7", "\u03DE", "\u03DF", "\u03E8"],
        t: ["\u0141", "\u0166", "\u0373"],
        u: ["\u01B1", "\u054D"],
        v: ["\u05D8"],
        w: ["\u0428", "\u0460", "\u047C", "\u0D70"],
        x: ["\u04B2", "\u04FE", "\u04FC", "\u04FD"],
        y: ["\xA5", "\u04B0", "\u04CB"],
        z: ["\u01B5", "\u0240"]
      };
      text.forEach(function(c) {
        c = c.toLowerCase();
        var chars = trap[c] || [" "];
        var rand = Math.floor(Math.random() * chars.length);
        if (typeof trap[c] !== "undefined") {
          result += trap[c][rand];
        } else {
          result += c;
        }
      });
      return result;
    };
  }
});

// node_modules/colors/lib/custom/zalgo.js
var require_zalgo = __commonJS({
  "node_modules/colors/lib/custom/zalgo.js"(exports, module2) {
    module2["exports"] = function zalgo(text, options) {
      text = text || "   he is here   ";
      var soul = {
        "up": [
          "\u030D",
          "\u030E",
          "\u0304",
          "\u0305",
          "\u033F",
          "\u0311",
          "\u0306",
          "\u0310",
          "\u0352",
          "\u0357",
          "\u0351",
          "\u0307",
          "\u0308",
          "\u030A",
          "\u0342",
          "\u0313",
          "\u0308",
          "\u034A",
          "\u034B",
          "\u034C",
          "\u0303",
          "\u0302",
          "\u030C",
          "\u0350",
          "\u0300",
          "\u0301",
          "\u030B",
          "\u030F",
          "\u0312",
          "\u0313",
          "\u0314",
          "\u033D",
          "\u0309",
          "\u0363",
          "\u0364",
          "\u0365",
          "\u0366",
          "\u0367",
          "\u0368",
          "\u0369",
          "\u036A",
          "\u036B",
          "\u036C",
          "\u036D",
          "\u036E",
          "\u036F",
          "\u033E",
          "\u035B",
          "\u0346",
          "\u031A"
        ],
        "down": [
          "\u0316",
          "\u0317",
          "\u0318",
          "\u0319",
          "\u031C",
          "\u031D",
          "\u031E",
          "\u031F",
          "\u0320",
          "\u0324",
          "\u0325",
          "\u0326",
          "\u0329",
          "\u032A",
          "\u032B",
          "\u032C",
          "\u032D",
          "\u032E",
          "\u032F",
          "\u0330",
          "\u0331",
          "\u0332",
          "\u0333",
          "\u0339",
          "\u033A",
          "\u033B",
          "\u033C",
          "\u0345",
          "\u0347",
          "\u0348",
          "\u0349",
          "\u034D",
          "\u034E",
          "\u0353",
          "\u0354",
          "\u0355",
          "\u0356",
          "\u0359",
          "\u035A",
          "\u0323"
        ],
        "mid": [
          "\u0315",
          "\u031B",
          "\u0300",
          "\u0301",
          "\u0358",
          "\u0321",
          "\u0322",
          "\u0327",
          "\u0328",
          "\u0334",
          "\u0335",
          "\u0336",
          "\u035C",
          "\u035D",
          "\u035E",
          "\u035F",
          "\u0360",
          "\u0362",
          "\u0338",
          "\u0337",
          "\u0361",
          " \u0489"
        ]
      };
      var all = [].concat(soul.up, soul.down, soul.mid);
      function randomNumber(range) {
        var r = Math.floor(Math.random() * range);
        return r;
      }
      function isChar(character) {
        var bool = false;
        all.filter(function(i) {
          bool = i === character;
        });
        return bool;
      }
      function heComes(text2, options2) {
        var result = "";
        var counts;
        var l;
        options2 = options2 || {};
        options2["up"] = typeof options2["up"] !== "undefined" ? options2["up"] : true;
        options2["mid"] = typeof options2["mid"] !== "undefined" ? options2["mid"] : true;
        options2["down"] = typeof options2["down"] !== "undefined" ? options2["down"] : true;
        options2["size"] = typeof options2["size"] !== "undefined" ? options2["size"] : "maxi";
        text2 = text2.split("");
        for (l in text2) {
          if (isChar(l)) {
            continue;
          }
          result = result + text2[l];
          counts = { "up": 0, "down": 0, "mid": 0 };
          switch (options2.size) {
            case "mini":
              counts.up = randomNumber(8);
              counts.mid = randomNumber(2);
              counts.down = randomNumber(8);
              break;
            case "maxi":
              counts.up = randomNumber(16) + 3;
              counts.mid = randomNumber(4) + 1;
              counts.down = randomNumber(64) + 3;
              break;
            default:
              counts.up = randomNumber(8) + 1;
              counts.mid = randomNumber(6) / 2;
              counts.down = randomNumber(8) + 1;
              break;
          }
          var arr = ["up", "mid", "down"];
          for (var d in arr) {
            var index = arr[d];
            for (var i = 0; i <= counts[index]; i++) {
              if (options2[index]) {
                result = result + soul[index][randomNumber(soul[index].length)];
              }
            }
          }
        }
        return result;
      }
      return heComes(text, options);
    };
  }
});

// node_modules/colors/lib/maps/america.js
var require_america = __commonJS({
  "node_modules/colors/lib/maps/america.js"(exports, module2) {
    module2["exports"] = function(colors) {
      return function(letter, i, exploded) {
        if (letter === " ")
          return letter;
        switch (i % 3) {
          case 0:
            return colors.red(letter);
          case 1:
            return colors.white(letter);
          case 2:
            return colors.blue(letter);
        }
      };
    };
  }
});

// node_modules/colors/lib/maps/zebra.js
var require_zebra = __commonJS({
  "node_modules/colors/lib/maps/zebra.js"(exports, module2) {
    module2["exports"] = function(colors) {
      return function(letter, i, exploded) {
        return i % 2 === 0 ? letter : colors.inverse(letter);
      };
    };
  }
});

// node_modules/colors/lib/maps/rainbow.js
var require_rainbow = __commonJS({
  "node_modules/colors/lib/maps/rainbow.js"(exports, module2) {
    module2["exports"] = function(colors) {
      var rainbowColors = ["red", "yellow", "green", "blue", "magenta"];
      return function(letter, i, exploded) {
        if (letter === " ") {
          return letter;
        } else {
          return colors[rainbowColors[i++ % rainbowColors.length]](letter);
        }
      };
    };
  }
});

// node_modules/colors/lib/maps/random.js
var require_random = __commonJS({
  "node_modules/colors/lib/maps/random.js"(exports, module2) {
    module2["exports"] = function(colors) {
      var available = [
        "underline",
        "inverse",
        "grey",
        "yellow",
        "red",
        "green",
        "blue",
        "white",
        "cyan",
        "magenta",
        "brightYellow",
        "brightRed",
        "brightGreen",
        "brightBlue",
        "brightWhite",
        "brightCyan",
        "brightMagenta"
      ];
      return function(letter, i, exploded) {
        return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 2))]](letter);
      };
    };
  }
});

// node_modules/colors/lib/colors.js
var require_colors = __commonJS({
  "node_modules/colors/lib/colors.js"(exports, module2) {
    var colors = {};
    module2["exports"] = colors;
    colors.themes = {};
    var util = require("util");
    var ansiStyles = colors.styles = require_styles();
    var defineProps = Object.defineProperties;
    var newLineRegex = new RegExp(/[\r\n]+/g);
    colors.supportsColor = require_supports_colors().supportsColor;
    if (typeof colors.enabled === "undefined") {
      colors.enabled = colors.supportsColor() !== false;
    }
    colors.enable = function() {
      colors.enabled = true;
    };
    colors.disable = function() {
      colors.enabled = false;
    };
    colors.stripColors = colors.strip = function(str) {
      return ("" + str).replace(/\x1B\[\d+m/g, "");
    };
    var stylize = colors.stylize = function stylize2(str, style) {
      if (!colors.enabled) {
        return str + "";
      }
      var styleMap = ansiStyles[style];
      if (!styleMap && style in colors) {
        return colors[style](str);
      }
      return styleMap.open + str + styleMap.close;
    };
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    var escapeStringRegexp = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
    function build(_styles) {
      var builder = function builder2() {
        return applyStyle.apply(builder2, arguments);
      };
      builder._styles = _styles;
      builder.__proto__ = proto;
      return builder;
    }
    var styles = function() {
      var ret = {};
      ansiStyles.grey = ansiStyles.gray;
      Object.keys(ansiStyles).forEach(function(key) {
        ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
        ret[key] = {
          get: function() {
            return build(this._styles.concat(key));
          }
        };
      });
      return ret;
    }();
    var proto = defineProps(function colors2() {
    }, styles);
    function applyStyle() {
      var args = Array.prototype.slice.call(arguments);
      var str = args.map(function(arg) {
        if (arg != null && arg.constructor === String) {
          return arg;
        } else {
          return util.inspect(arg);
        }
      }).join(" ");
      if (!colors.enabled || !str) {
        return str;
      }
      var newLinesPresent = str.indexOf("\n") != -1;
      var nestedStyles = this._styles;
      var i = nestedStyles.length;
      while (i--) {
        var code = ansiStyles[nestedStyles[i]];
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        if (newLinesPresent) {
          str = str.replace(newLineRegex, function(match) {
            return code.close + match + code.open;
          });
        }
      }
      return str;
    }
    colors.setTheme = function(theme) {
      if (typeof theme === "string") {
        console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
        return;
      }
      for (var style in theme) {
        (function(style2) {
          colors[style2] = function(str) {
            if (typeof theme[style2] === "object") {
              var out = str;
              for (var i in theme[style2]) {
                out = colors[theme[style2][i]](out);
              }
              return out;
            }
            return colors[theme[style2]](str);
          };
        })(style);
      }
    };
    function init() {
      var ret = {};
      Object.keys(styles).forEach(function(name) {
        ret[name] = {
          get: function() {
            return build([name]);
          }
        };
      });
      return ret;
    }
    var sequencer = function sequencer2(map2, str) {
      var exploded = str.split("");
      exploded = exploded.map(map2);
      return exploded.join("");
    };
    colors.trap = require_trap();
    colors.zalgo = require_zalgo();
    colors.maps = {};
    colors.maps.america = require_america()(colors);
    colors.maps.zebra = require_zebra()(colors);
    colors.maps.rainbow = require_rainbow()(colors);
    colors.maps.random = require_random()(colors);
    for (map in colors.maps) {
      (function(map2) {
        colors[map2] = function(str) {
          return sequencer(colors.maps[map2], str);
        };
      })(map);
    }
    var map;
    defineProps(colors, init());
  }
});

// node_modules/colors/lib/extendStringPrototype.js
var require_extendStringPrototype = __commonJS({
  "node_modules/colors/lib/extendStringPrototype.js"(exports, module2) {
    var colors = require_colors();
    module2["exports"] = function() {
      var addProperty = function(color, func) {
        String.prototype.__defineGetter__(color, func);
      };
      addProperty("strip", function() {
        return colors.strip(this);
      });
      addProperty("stripColors", function() {
        return colors.strip(this);
      });
      addProperty("trap", function() {
        return colors.trap(this);
      });
      addProperty("zalgo", function() {
        return colors.zalgo(this);
      });
      addProperty("zebra", function() {
        return colors.zebra(this);
      });
      addProperty("rainbow", function() {
        return colors.rainbow(this);
      });
      addProperty("random", function() {
        return colors.random(this);
      });
      addProperty("america", function() {
        return colors.america(this);
      });
      var x = Object.keys(colors.styles);
      x.forEach(function(style) {
        addProperty(style, function() {
          return colors.stylize(this, style);
        });
      });
      function applyTheme(theme) {
        var stringPrototypeBlacklist = [
          "__defineGetter__",
          "__defineSetter__",
          "__lookupGetter__",
          "__lookupSetter__",
          "charAt",
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
          "charCodeAt",
          "indexOf",
          "lastIndexOf",
          "length",
          "localeCompare",
          "match",
          "repeat",
          "replace",
          "search",
          "slice",
          "split",
          "substring",
          "toLocaleLowerCase",
          "toLocaleUpperCase",
          "toLowerCase",
          "toUpperCase",
          "trim",
          "trimLeft",
          "trimRight"
        ];
        Object.keys(theme).forEach(function(prop) {
          if (stringPrototypeBlacklist.indexOf(prop) !== -1) {
            console.log("warn: ".red + ("String.prototype" + prop).magenta + " is probably something you don't want to override.  Ignoring style name");
          } else {
            if (typeof theme[prop] === "string") {
              colors[prop] = colors[theme[prop]];
              addProperty(prop, function() {
                return colors[prop](this);
              });
            } else {
              var themePropApplicator = function(str) {
                var ret = str || this;
                for (var t = 0; t < theme[prop].length; t++) {
                  ret = colors[theme[prop][t]](ret);
                }
                return ret;
              };
              addProperty(prop, themePropApplicator);
              colors[prop] = function(str) {
                return themePropApplicator(str);
              };
            }
          }
        });
      }
      colors.setTheme = function(theme) {
        if (typeof theme === "string") {
          console.log("colors.setTheme now only accepts an object, not a string. If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
          return;
        } else {
          applyTheme(theme);
        }
      };
    };
  }
});

// node_modules/colors/lib/index.js
var require_lib = __commonJS({
  "node_modules/colors/lib/index.js"(exports, module2) {
    var colors = require_colors();
    module2["exports"] = colors;
    require_extendStringPrototype()();
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BallInfoT: () => BallInfoT,
  BallPredictionT: () => BallPredictionT,
  BallRigidBodyStateT: () => BallRigidBodyStateT,
  BallState: () => BallState,
  BoolT: () => BoolT,
  BoostPadStateT: () => BoostPadStateT,
  BoostPadT: () => BoostPadT,
  BoostState: () => BoostState,
  BoxShapeT: () => BoxShapeT,
  CarState: () => CarState,
  Client: () => BotClient,
  Color: () => Color2,
  ColorT: () => ColorT,
  ConsoleCommandT: () => ConsoleCommandT,
  Controller: () => Controller,
  ControllerManager: () => ControllerManager,
  ControllerStateT: () => ControllerStateT,
  CylinderShapeT: () => CylinderShapeT,
  DesiredBallStateT: () => DesiredBallStateT,
  DesiredBoostStateT: () => DesiredBoostStateT,
  DesiredCarStateT: () => DesiredCarStateT,
  DesiredGameInfoStateT: () => DesiredGameInfoStateT,
  DesiredGameStateT: () => DesiredGameStateT,
  DesiredPhysicsT: () => DesiredPhysicsT,
  DropShotBallInfoT: () => DropShotBallInfoT,
  DropshotTileT: () => DropshotTileT,
  FieldInfoT: () => FieldInfoT,
  FloatT: () => FloatT,
  GameInfoState: () => GameInfoState,
  GameInfoT: () => GameInfoT,
  GameMessageWrapperT: () => GameMessageWrapperT,
  GameState: () => GameState,
  GameTickPacketT: () => GameTickPacketT,
  GoalInfoT: () => GoalInfoT,
  HumanPlayerT: () => HumanPlayerT,
  LoadoutPaintT: () => LoadoutPaintT,
  Manager: () => BotManager,
  MatchSettingsT: () => MatchSettingsT,
  MessagePacketT: () => MessagePacketT,
  MutatorSettingsT: () => MutatorSettingsT,
  PartyMemberBotPlayerT: () => PartyMemberBotPlayerT,
  Physics: () => Physics2,
  PhysicsT: () => PhysicsT,
  PlayerConfigurationT: () => PlayerConfigurationT,
  PlayerInfoT: () => PlayerInfoT,
  PlayerInputChangeT: () => PlayerInputChangeT,
  PlayerInputT: () => PlayerInputT,
  PlayerLoadoutT: () => PlayerLoadoutT,
  PlayerRigidBodyStateT: () => PlayerRigidBodyStateT,
  PlayerSpectateT: () => PlayerSpectateT,
  PlayerStatEventT: () => PlayerStatEventT,
  PredictionSliceT: () => PredictionSliceT,
  PsyonixBotPlayerT: () => PsyonixBotPlayerT,
  QuaternionT: () => QuaternionT,
  QuickChatMessagesT: () => QuickChatMessagesT,
  QuickChatT: () => QuickChatT,
  RLBotPlayerT: () => RLBotPlayerT,
  ReadyMessageT: () => ReadyMessageT,
  RenderGroupT: () => RenderGroupT,
  RenderManager: () => RenderManager,
  RenderMessageT: () => RenderMessageT,
  RigidBodyStateT: () => RigidBodyStateT,
  RigidBodyTickT: () => RigidBodyTickT,
  Rotator: () => Rotator2,
  RotatorPartialT: () => RotatorPartialT,
  RotatorT: () => RotatorT,
  ScoreInfoT: () => ScoreInfoT,
  SphereShapeT: () => SphereShapeT,
  TeamInfoT: () => TeamInfoT,
  TinyBallT: () => TinyBallT,
  TinyPacketT: () => TinyPacketT,
  TinyPlayerT: () => TinyPlayerT,
  TouchT: () => TouchT,
  Vector3: () => Vector32,
  quickChats: () => QuickChats_default
});
module.exports = __toCommonJS(src_exports);

// src/BotClient.ts
var import_colors2 = __toESM(require_lib());
var Net = __toESM(require("net"));
var flatbuffers62 = __toESM(require("flatbuffers"));

// src/flat/rlbot_generated.ts
var rlbot_generated_exports = {};
__export(rlbot_generated_exports, {
  BallBouncinessOption: () => BallBouncinessOption,
  BallInfo: () => BallInfo,
  BallInfoT: () => BallInfoT,
  BallMaxSpeedOption: () => BallMaxSpeedOption,
  BallPrediction: () => BallPrediction,
  BallPredictionT: () => BallPredictionT,
  BallRigidBodyState: () => BallRigidBodyState,
  BallRigidBodyStateT: () => BallRigidBodyStateT,
  BallSizeOption: () => BallSizeOption,
  BallTypeOption: () => BallTypeOption,
  BallWeightOption: () => BallWeightOption,
  Bool: () => Bool,
  BoolT: () => BoolT,
  BoostOption: () => BoostOption,
  BoostPad: () => BoostPad,
  BoostPadState: () => BoostPadState,
  BoostPadStateT: () => BoostPadStateT,
  BoostPadT: () => BoostPadT,
  BoostStrengthOption: () => BoostStrengthOption,
  BoxShape: () => BoxShape,
  BoxShapeT: () => BoxShapeT,
  CollisionShape: () => CollisionShape,
  Color: () => Color,
  ColorT: () => ColorT,
  ConsoleCommand: () => ConsoleCommand,
  ConsoleCommandT: () => ConsoleCommandT,
  ControllerState: () => ControllerState,
  ControllerStateT: () => ControllerStateT,
  CylinderShape: () => CylinderShape,
  CylinderShapeT: () => CylinderShapeT,
  DemolishOption: () => DemolishOption,
  DesiredBallState: () => DesiredBallState,
  DesiredBallStateT: () => DesiredBallStateT,
  DesiredBoostState: () => DesiredBoostState,
  DesiredBoostStateT: () => DesiredBoostStateT,
  DesiredCarState: () => DesiredCarState,
  DesiredCarStateT: () => DesiredCarStateT,
  DesiredGameInfoState: () => DesiredGameInfoState,
  DesiredGameInfoStateT: () => DesiredGameInfoStateT,
  DesiredGameState: () => DesiredGameState,
  DesiredGameStateT: () => DesiredGameStateT,
  DesiredPhysics: () => DesiredPhysics,
  DesiredPhysicsT: () => DesiredPhysicsT,
  DropShotBallInfo: () => DropShotBallInfo,
  DropShotBallInfoT: () => DropShotBallInfoT,
  DropshotTile: () => DropshotTile,
  DropshotTileT: () => DropshotTileT,
  ExistingMatchBehavior: () => ExistingMatchBehavior,
  FieldInfo: () => FieldInfo,
  FieldInfoT: () => FieldInfoT,
  Float: () => Float,
  FloatT: () => FloatT,
  GameInfo: () => GameInfo,
  GameInfoT: () => GameInfoT,
  GameMap: () => GameMap,
  GameMessage: () => GameMessage,
  GameMessageWrapper: () => GameMessageWrapper,
  GameMessageWrapperT: () => GameMessageWrapperT,
  GameMode: () => GameMode,
  GameSpeedOption: () => GameSpeedOption,
  GameTickPacket: () => GameTickPacket,
  GameTickPacketT: () => GameTickPacketT,
  GoalInfo: () => GoalInfo,
  GoalInfoT: () => GoalInfoT,
  GravityOption: () => GravityOption,
  HumanPlayer: () => HumanPlayer,
  HumanPlayerT: () => HumanPlayerT,
  LoadoutPaint: () => LoadoutPaint,
  LoadoutPaintT: () => LoadoutPaintT,
  MatchLength: () => MatchLength,
  MatchSettings: () => MatchSettings,
  MatchSettingsT: () => MatchSettingsT,
  MaxScore: () => MaxScore,
  MessagePacket: () => MessagePacket,
  MessagePacketT: () => MessagePacketT,
  MutatorSettings: () => MutatorSettings,
  MutatorSettingsT: () => MutatorSettingsT,
  OvertimeOption: () => OvertimeOption,
  PartyMemberBotPlayer: () => PartyMemberBotPlayer,
  PartyMemberBotPlayerT: () => PartyMemberBotPlayerT,
  Physics: () => Physics,
  PhysicsT: () => PhysicsT,
  PlayerClass: () => PlayerClass,
  PlayerConfiguration: () => PlayerConfiguration,
  PlayerConfigurationT: () => PlayerConfigurationT,
  PlayerInfo: () => PlayerInfo,
  PlayerInfoT: () => PlayerInfoT,
  PlayerInput: () => PlayerInput,
  PlayerInputChange: () => PlayerInputChange,
  PlayerInputChangeT: () => PlayerInputChangeT,
  PlayerInputT: () => PlayerInputT,
  PlayerLoadout: () => PlayerLoadout,
  PlayerLoadoutT: () => PlayerLoadoutT,
  PlayerRigidBodyState: () => PlayerRigidBodyState,
  PlayerRigidBodyStateT: () => PlayerRigidBodyStateT,
  PlayerSpectate: () => PlayerSpectate,
  PlayerSpectateT: () => PlayerSpectateT,
  PlayerStatEvent: () => PlayerStatEvent,
  PlayerStatEventT: () => PlayerStatEventT,
  PredictionSlice: () => PredictionSlice,
  PredictionSliceT: () => PredictionSliceT,
  PsyonixBotPlayer: () => PsyonixBotPlayer,
  PsyonixBotPlayerT: () => PsyonixBotPlayerT,
  Quaternion: () => Quaternion,
  QuaternionT: () => QuaternionT,
  QuickChat: () => QuickChat,
  QuickChatMessages: () => QuickChatMessages,
  QuickChatMessagesT: () => QuickChatMessagesT,
  QuickChatSelection: () => QuickChatSelection,
  QuickChatT: () => QuickChatT,
  RLBotPlayer: () => RLBotPlayer,
  RLBotPlayerT: () => RLBotPlayerT,
  ReadyMessage: () => ReadyMessage,
  ReadyMessageT: () => ReadyMessageT,
  RenderGroup: () => RenderGroup,
  RenderGroupT: () => RenderGroupT,
  RenderMessage: () => RenderMessage,
  RenderMessageT: () => RenderMessageT,
  RenderType: () => RenderType,
  RespawnTimeOption: () => RespawnTimeOption,
  RigidBodyState: () => RigidBodyState,
  RigidBodyStateT: () => RigidBodyStateT,
  RigidBodyTick: () => RigidBodyTick,
  RigidBodyTickT: () => RigidBodyTickT,
  Rotator: () => Rotator,
  RotatorPartial: () => RotatorPartial,
  RotatorPartialT: () => RotatorPartialT,
  RotatorT: () => RotatorT,
  RumbleOption: () => RumbleOption,
  ScoreInfo: () => ScoreInfo,
  ScoreInfoT: () => ScoreInfoT,
  SeriesLengthOption: () => SeriesLengthOption,
  SphereShape: () => SphereShape,
  SphereShapeT: () => SphereShapeT,
  TeamInfo: () => TeamInfo,
  TeamInfoT: () => TeamInfoT,
  TileState: () => TileState,
  TinyBall: () => TinyBall,
  TinyBallT: () => TinyBallT,
  TinyPacket: () => TinyPacket,
  TinyPacketT: () => TinyPacketT,
  TinyPlayer: () => TinyPlayer,
  TinyPlayerT: () => TinyPlayerT,
  Touch: () => Touch,
  TouchT: () => TouchT,
  Vector3: () => Vector3,
  Vector3Partial: () => Vector3Partial,
  Vector3PartialT: () => Vector3PartialT,
  Vector3T: () => Vector3T,
  unionListToCollisionShape: () => unionListToCollisionShape,
  unionListToGameMessage: () => unionListToGameMessage,
  unionListToPlayerClass: () => unionListToPlayerClass,
  unionToCollisionShape: () => unionToCollisionShape,
  unionToGameMessage: () => unionToGameMessage,
  unionToPlayerClass: () => unionToPlayerClass
});

// src/flat/rlbot/flat/ball-bounciness-option.ts
var BallBouncinessOption = /* @__PURE__ */ ((BallBouncinessOption2) => {
  BallBouncinessOption2[BallBouncinessOption2["Default"] = 0] = "Default";
  BallBouncinessOption2[BallBouncinessOption2["Low"] = 1] = "Low";
  BallBouncinessOption2[BallBouncinessOption2["High"] = 2] = "High";
  BallBouncinessOption2[BallBouncinessOption2["Super_High"] = 3] = "Super_High";
  return BallBouncinessOption2;
})(BallBouncinessOption || {});

// src/flat/rlbot/flat/ball-info.ts
var flatbuffers7 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/box-shape.ts
var flatbuffers = __toESM(require("flatbuffers"));
var BoxShape = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBoxShape(bb, obj) {
    return (obj || new BoxShape()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBoxShape(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new BoxShape()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  length() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  width() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  height() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  static startBoxShape(builder) {
    builder.startObject(3);
  }
  static addLength(builder, length) {
    builder.addFieldFloat32(0, length, 0);
  }
  static addWidth(builder, width) {
    builder.addFieldFloat32(1, width, 0);
  }
  static addHeight(builder, height) {
    builder.addFieldFloat32(2, height, 0);
  }
  static endBoxShape(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createBoxShape(builder, length, width, height) {
    BoxShape.startBoxShape(builder);
    BoxShape.addLength(builder, length);
    BoxShape.addWidth(builder, width);
    BoxShape.addHeight(builder, height);
    return BoxShape.endBoxShape(builder);
  }
  unpack() {
    return new BoxShapeT(
      this.length(),
      this.width(),
      this.height()
    );
  }
  unpackTo(_o) {
    _o.length = this.length();
    _o.width = this.width();
    _o.height = this.height();
  }
};
var BoxShapeT = class {
  constructor(length = 0, width = 0, height = 0) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  pack(builder) {
    return BoxShape.createBoxShape(
      builder,
      this.length,
      this.width,
      this.height
    );
  }
};

// src/flat/rlbot/flat/cylinder-shape.ts
var flatbuffers2 = __toESM(require("flatbuffers"));
var CylinderShape = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsCylinderShape(bb, obj) {
    return (obj || new CylinderShape()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsCylinderShape(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers2.SIZE_PREFIX_LENGTH);
    return (obj || new CylinderShape()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  diameter() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  height() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  static startCylinderShape(builder) {
    builder.startObject(2);
  }
  static addDiameter(builder, diameter) {
    builder.addFieldFloat32(0, diameter, 0);
  }
  static addHeight(builder, height) {
    builder.addFieldFloat32(1, height, 0);
  }
  static endCylinderShape(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createCylinderShape(builder, diameter, height) {
    CylinderShape.startCylinderShape(builder);
    CylinderShape.addDiameter(builder, diameter);
    CylinderShape.addHeight(builder, height);
    return CylinderShape.endCylinderShape(builder);
  }
  unpack() {
    return new CylinderShapeT(
      this.diameter(),
      this.height()
    );
  }
  unpackTo(_o) {
    _o.diameter = this.diameter();
    _o.height = this.height();
  }
};
var CylinderShapeT = class {
  constructor(diameter = 0, height = 0) {
    this.diameter = diameter;
    this.height = height;
  }
  pack(builder) {
    return CylinderShape.createCylinderShape(
      builder,
      this.diameter,
      this.height
    );
  }
};

// src/flat/rlbot/flat/sphere-shape.ts
var flatbuffers3 = __toESM(require("flatbuffers"));
var SphereShape = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsSphereShape(bb, obj) {
    return (obj || new SphereShape()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsSphereShape(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers3.SIZE_PREFIX_LENGTH);
    return (obj || new SphereShape()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  diameter() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  static startSphereShape(builder) {
    builder.startObject(1);
  }
  static addDiameter(builder, diameter) {
    builder.addFieldFloat32(0, diameter, 0);
  }
  static endSphereShape(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createSphereShape(builder, diameter) {
    SphereShape.startSphereShape(builder);
    SphereShape.addDiameter(builder, diameter);
    return SphereShape.endSphereShape(builder);
  }
  unpack() {
    return new SphereShapeT(
      this.diameter()
    );
  }
  unpackTo(_o) {
    _o.diameter = this.diameter();
  }
};
var SphereShapeT = class {
  constructor(diameter = 0) {
    this.diameter = diameter;
  }
  pack(builder) {
    return SphereShape.createSphereShape(
      builder,
      this.diameter
    );
  }
};

// src/flat/rlbot/flat/collision-shape.ts
var CollisionShape = /* @__PURE__ */ ((CollisionShape2) => {
  CollisionShape2[CollisionShape2["NONE"] = 0] = "NONE";
  CollisionShape2[CollisionShape2["BoxShape"] = 1] = "BoxShape";
  CollisionShape2[CollisionShape2["SphereShape"] = 2] = "SphereShape";
  CollisionShape2[CollisionShape2["CylinderShape"] = 3] = "CylinderShape";
  return CollisionShape2;
})(CollisionShape || {});
function unionToCollisionShape(type, accessor) {
  switch (CollisionShape[type]) {
    case "NONE":
      return null;
    case "BoxShape":
      return accessor(new BoxShape());
    case "SphereShape":
      return accessor(new SphereShape());
    case "CylinderShape":
      return accessor(new CylinderShape());
    default:
      return null;
  }
}
function unionListToCollisionShape(type, accessor, index) {
  switch (CollisionShape[type]) {
    case "NONE":
      return null;
    case "BoxShape":
      return accessor(index, new BoxShape());
    case "SphereShape":
      return accessor(index, new SphereShape());
    case "CylinderShape":
      return accessor(index, new CylinderShape());
    default:
      return null;
  }
}

// src/flat/rlbot/flat/drop-shot-ball-info.ts
var flatbuffers4 = __toESM(require("flatbuffers"));
var DropShotBallInfo = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDropShotBallInfo(bb, obj) {
    return (obj || new DropShotBallInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDropShotBallInfo(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers4.SIZE_PREFIX_LENGTH);
    return (obj || new DropShotBallInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  absorbedForce() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  damageIndex() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  forceAccumRecent() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  static startDropShotBallInfo(builder) {
    builder.startObject(3);
  }
  static addAbsorbedForce(builder, absorbedForce) {
    builder.addFieldFloat32(0, absorbedForce, 0);
  }
  static addDamageIndex(builder, damageIndex) {
    builder.addFieldInt32(1, damageIndex, 0);
  }
  static addForceAccumRecent(builder, forceAccumRecent) {
    builder.addFieldFloat32(2, forceAccumRecent, 0);
  }
  static endDropShotBallInfo(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDropShotBallInfo(builder, absorbedForce, damageIndex, forceAccumRecent) {
    DropShotBallInfo.startDropShotBallInfo(builder);
    DropShotBallInfo.addAbsorbedForce(builder, absorbedForce);
    DropShotBallInfo.addDamageIndex(builder, damageIndex);
    DropShotBallInfo.addForceAccumRecent(builder, forceAccumRecent);
    return DropShotBallInfo.endDropShotBallInfo(builder);
  }
  unpack() {
    return new DropShotBallInfoT(
      this.absorbedForce(),
      this.damageIndex(),
      this.forceAccumRecent()
    );
  }
  unpackTo(_o) {
    _o.absorbedForce = this.absorbedForce();
    _o.damageIndex = this.damageIndex();
    _o.forceAccumRecent = this.forceAccumRecent();
  }
};
var DropShotBallInfoT = class {
  constructor(absorbedForce = 0, damageIndex = 0, forceAccumRecent = 0) {
    this.absorbedForce = absorbedForce;
    this.damageIndex = damageIndex;
    this.forceAccumRecent = forceAccumRecent;
  }
  pack(builder) {
    return DropShotBallInfo.createDropShotBallInfo(
      builder,
      this.absorbedForce,
      this.damageIndex,
      this.forceAccumRecent
    );
  }
};

// src/flat/rlbot/flat/physics.ts
var flatbuffers5 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/rotator.ts
var Rotator = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  pitch() {
    return this.bb.readFloat32(this.bb_pos);
  }
  yaw() {
    return this.bb.readFloat32(this.bb_pos + 4);
  }
  roll() {
    return this.bb.readFloat32(this.bb_pos + 8);
  }
  static sizeOf() {
    return 12;
  }
  static createRotator(builder, pitch, yaw, roll) {
    builder.prep(4, 12);
    builder.writeFloat32(roll);
    builder.writeFloat32(yaw);
    builder.writeFloat32(pitch);
    return builder.offset();
  }
  unpack() {
    return new RotatorT(
      this.pitch(),
      this.yaw(),
      this.roll()
    );
  }
  unpackTo(_o) {
    _o.pitch = this.pitch();
    _o.yaw = this.yaw();
    _o.roll = this.roll();
  }
};
var RotatorT = class {
  constructor(pitch = 0, yaw = 0, roll = 0) {
    this.pitch = pitch;
    this.yaw = yaw;
    this.roll = roll;
  }
  pack(builder) {
    return Rotator.createRotator(
      builder,
      this.pitch,
      this.yaw,
      this.roll
    );
  }
};

// src/flat/rlbot/flat/vector3.ts
var Vector3 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  x() {
    return this.bb.readFloat32(this.bb_pos);
  }
  y() {
    return this.bb.readFloat32(this.bb_pos + 4);
  }
  z() {
    return this.bb.readFloat32(this.bb_pos + 8);
  }
  static sizeOf() {
    return 12;
  }
  static createVector3(builder, x, y, z) {
    builder.prep(4, 12);
    builder.writeFloat32(z);
    builder.writeFloat32(y);
    builder.writeFloat32(x);
    return builder.offset();
  }
  unpack() {
    return new Vector3T(
      this.x(),
      this.y(),
      this.z()
    );
  }
  unpackTo(_o) {
    _o.x = this.x();
    _o.y = this.y();
    _o.z = this.z();
  }
};
var Vector3T = class {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  pack(builder) {
    return Vector3.createVector3(
      builder,
      this.x,
      this.y,
      this.z
    );
  }
};

// src/flat/rlbot/flat/physics.ts
var Physics = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPhysics(bb, obj) {
    return (obj || new Physics()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPhysics(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers5.SIZE_PREFIX_LENGTH);
    return (obj || new Physics()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  location(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  rotation(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Rotator()).__init(this.bb_pos + offset, this.bb) : null;
  }
  velocity(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  angularVelocity(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  static startPhysics(builder) {
    builder.startObject(4);
  }
  static addLocation(builder, locationOffset) {
    builder.addFieldStruct(0, locationOffset, 0);
  }
  static addRotation(builder, rotationOffset) {
    builder.addFieldStruct(1, rotationOffset, 0);
  }
  static addVelocity(builder, velocityOffset) {
    builder.addFieldStruct(2, velocityOffset, 0);
  }
  static addAngularVelocity(builder, angularVelocityOffset) {
    builder.addFieldStruct(3, angularVelocityOffset, 0);
  }
  static endPhysics(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new PhysicsT(
      this.location() !== null ? this.location().unpack() : null,
      this.rotation() !== null ? this.rotation().unpack() : null,
      this.velocity() !== null ? this.velocity().unpack() : null,
      this.angularVelocity() !== null ? this.angularVelocity().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.location = this.location() !== null ? this.location().unpack() : null;
    _o.rotation = this.rotation() !== null ? this.rotation().unpack() : null;
    _o.velocity = this.velocity() !== null ? this.velocity().unpack() : null;
    _o.angularVelocity = this.angularVelocity() !== null ? this.angularVelocity().unpack() : null;
  }
};
var PhysicsT = class {
  constructor(location = null, rotation = null, velocity = null, angularVelocity = null) {
    this.location = location;
    this.rotation = rotation;
    this.velocity = velocity;
    this.angularVelocity = angularVelocity;
  }
  pack(builder) {
    Physics.startPhysics(builder);
    Physics.addLocation(builder, this.location !== null ? this.location.pack(builder) : 0);
    Physics.addRotation(builder, this.rotation !== null ? this.rotation.pack(builder) : 0);
    Physics.addVelocity(builder, this.velocity !== null ? this.velocity.pack(builder) : 0);
    Physics.addAngularVelocity(builder, this.angularVelocity !== null ? this.angularVelocity.pack(builder) : 0);
    return Physics.endPhysics(builder);
  }
};

// src/flat/rlbot/flat/touch.ts
var flatbuffers6 = __toESM(require("flatbuffers"));
var Touch = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsTouch(bb, obj) {
    return (obj || new Touch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsTouch(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers6.SIZE_PREFIX_LENGTH);
    return (obj || new Touch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  playerName(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  gameSeconds() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  location(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  normal(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  team() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  playerIndex() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startTouch(builder) {
    builder.startObject(6);
  }
  static addPlayerName(builder, playerNameOffset) {
    builder.addFieldOffset(0, playerNameOffset, 0);
  }
  static addGameSeconds(builder, gameSeconds) {
    builder.addFieldFloat32(1, gameSeconds, 0);
  }
  static addLocation(builder, locationOffset) {
    builder.addFieldStruct(2, locationOffset, 0);
  }
  static addNormal(builder, normalOffset) {
    builder.addFieldStruct(3, normalOffset, 0);
  }
  static addTeam(builder, team) {
    builder.addFieldInt32(4, team, 0);
  }
  static addPlayerIndex(builder, playerIndex) {
    builder.addFieldInt32(5, playerIndex, 0);
  }
  static endTouch(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new TouchT(
      this.playerName(),
      this.gameSeconds(),
      this.location() !== null ? this.location().unpack() : null,
      this.normal() !== null ? this.normal().unpack() : null,
      this.team(),
      this.playerIndex()
    );
  }
  unpackTo(_o) {
    _o.playerName = this.playerName();
    _o.gameSeconds = this.gameSeconds();
    _o.location = this.location() !== null ? this.location().unpack() : null;
    _o.normal = this.normal() !== null ? this.normal().unpack() : null;
    _o.team = this.team();
    _o.playerIndex = this.playerIndex();
  }
};
var TouchT = class {
  constructor(playerName = null, gameSeconds = 0, location = null, normal = null, team = 0, playerIndex = 0) {
    this.playerName = playerName;
    this.gameSeconds = gameSeconds;
    this.location = location;
    this.normal = normal;
    this.team = team;
    this.playerIndex = playerIndex;
  }
  pack(builder) {
    const playerName = this.playerName !== null ? builder.createString(this.playerName) : 0;
    Touch.startTouch(builder);
    Touch.addPlayerName(builder, playerName);
    Touch.addGameSeconds(builder, this.gameSeconds);
    Touch.addLocation(builder, this.location !== null ? this.location.pack(builder) : 0);
    Touch.addNormal(builder, this.normal !== null ? this.normal.pack(builder) : 0);
    Touch.addTeam(builder, this.team);
    Touch.addPlayerIndex(builder, this.playerIndex);
    return Touch.endTouch(builder);
  }
};

// src/flat/rlbot/flat/ball-info.ts
var BallInfo = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBallInfo(bb, obj) {
    return (obj || new BallInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBallInfo(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers7.SIZE_PREFIX_LENGTH);
    return (obj || new BallInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  physics(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Physics()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  latestTouch(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Touch()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  dropShotInfo(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new DropShotBallInfo()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  shapeType() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* NONE */;
  }
  shape(obj) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
  }
  static startBallInfo(builder) {
    builder.startObject(5);
  }
  static addPhysics(builder, physicsOffset) {
    builder.addFieldOffset(0, physicsOffset, 0);
  }
  static addLatestTouch(builder, latestTouchOffset) {
    builder.addFieldOffset(1, latestTouchOffset, 0);
  }
  static addDropShotInfo(builder, dropShotInfoOffset) {
    builder.addFieldOffset(2, dropShotInfoOffset, 0);
  }
  static addShapeType(builder, shapeType) {
    builder.addFieldInt8(3, shapeType, 0 /* NONE */);
  }
  static addShape(builder, shapeOffset) {
    builder.addFieldOffset(4, shapeOffset, 0);
  }
  static endBallInfo(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new BallInfoT(
      this.physics() !== null ? this.physics().unpack() : null,
      this.latestTouch() !== null ? this.latestTouch().unpack() : null,
      this.dropShotInfo() !== null ? this.dropShotInfo().unpack() : null,
      this.shapeType(),
      (() => {
        let temp = unionToCollisionShape(this.shapeType(), this.shape.bind(this));
        if (temp === null) {
          return null;
        }
        return temp.unpack();
      })()
    );
  }
  unpackTo(_o) {
    _o.physics = this.physics() !== null ? this.physics().unpack() : null;
    _o.latestTouch = this.latestTouch() !== null ? this.latestTouch().unpack() : null;
    _o.dropShotInfo = this.dropShotInfo() !== null ? this.dropShotInfo().unpack() : null;
    _o.shapeType = this.shapeType();
    _o.shape = (() => {
      let temp = unionToCollisionShape(this.shapeType(), this.shape.bind(this));
      if (temp === null) {
        return null;
      }
      return temp.unpack();
    })();
  }
};
var BallInfoT = class {
  constructor(physics = null, latestTouch = null, dropShotInfo = null, shapeType = 0 /* NONE */, shape = null) {
    this.physics = physics;
    this.latestTouch = latestTouch;
    this.dropShotInfo = dropShotInfo;
    this.shapeType = shapeType;
    this.shape = shape;
  }
  pack(builder) {
    const physics = this.physics !== null ? this.physics.pack(builder) : 0;
    const latestTouch = this.latestTouch !== null ? this.latestTouch.pack(builder) : 0;
    const dropShotInfo = this.dropShotInfo !== null ? this.dropShotInfo.pack(builder) : 0;
    const shape = builder.createObjectOffset(this.shape);
    BallInfo.startBallInfo(builder);
    BallInfo.addPhysics(builder, physics);
    BallInfo.addLatestTouch(builder, latestTouch);
    BallInfo.addDropShotInfo(builder, dropShotInfo);
    BallInfo.addShapeType(builder, this.shapeType);
    BallInfo.addShape(builder, shape);
    return BallInfo.endBallInfo(builder);
  }
};

// src/flat/rlbot/flat/ball-max-speed-option.ts
var BallMaxSpeedOption = /* @__PURE__ */ ((BallMaxSpeedOption2) => {
  BallMaxSpeedOption2[BallMaxSpeedOption2["Default"] = 0] = "Default";
  BallMaxSpeedOption2[BallMaxSpeedOption2["Slow"] = 1] = "Slow";
  BallMaxSpeedOption2[BallMaxSpeedOption2["Fast"] = 2] = "Fast";
  BallMaxSpeedOption2[BallMaxSpeedOption2["Super_Fast"] = 3] = "Super_Fast";
  return BallMaxSpeedOption2;
})(BallMaxSpeedOption || {});

// src/flat/rlbot/flat/ball-prediction.ts
var flatbuffers9 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/prediction-slice.ts
var flatbuffers8 = __toESM(require("flatbuffers"));
var PredictionSlice = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPredictionSlice(bb, obj) {
    return (obj || new PredictionSlice()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPredictionSlice(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers8.SIZE_PREFIX_LENGTH);
    return (obj || new PredictionSlice()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  gameSeconds() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  physics(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Physics()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  static startPredictionSlice(builder) {
    builder.startObject(2);
  }
  static addGameSeconds(builder, gameSeconds) {
    builder.addFieldFloat32(0, gameSeconds, 0);
  }
  static addPhysics(builder, physicsOffset) {
    builder.addFieldOffset(1, physicsOffset, 0);
  }
  static endPredictionSlice(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new PredictionSliceT(
      this.gameSeconds(),
      this.physics() !== null ? this.physics().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.gameSeconds = this.gameSeconds();
    _o.physics = this.physics() !== null ? this.physics().unpack() : null;
  }
};
var PredictionSliceT = class {
  constructor(gameSeconds = 0, physics = null) {
    this.gameSeconds = gameSeconds;
    this.physics = physics;
  }
  pack(builder) {
    const physics = this.physics !== null ? this.physics.pack(builder) : 0;
    PredictionSlice.startPredictionSlice(builder);
    PredictionSlice.addGameSeconds(builder, this.gameSeconds);
    PredictionSlice.addPhysics(builder, physics);
    return PredictionSlice.endPredictionSlice(builder);
  }
};

// src/flat/rlbot/flat/ball-prediction.ts
var BallPrediction = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBallPrediction(bb, obj) {
    return (obj || new BallPrediction()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBallPrediction(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers9.SIZE_PREFIX_LENGTH);
    return (obj || new BallPrediction()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  slices(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new PredictionSlice()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  slicesLength() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startBallPrediction(builder) {
    builder.startObject(1);
  }
  static addSlices(builder, slicesOffset) {
    builder.addFieldOffset(0, slicesOffset, 0);
  }
  static createSlicesVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startSlicesVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endBallPrediction(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createBallPrediction(builder, slicesOffset) {
    BallPrediction.startBallPrediction(builder);
    BallPrediction.addSlices(builder, slicesOffset);
    return BallPrediction.endBallPrediction(builder);
  }
  unpack() {
    return new BallPredictionT(
      this.bb.createObjList(this.slices.bind(this), this.slicesLength())
    );
  }
  unpackTo(_o) {
    _o.slices = this.bb.createObjList(this.slices.bind(this), this.slicesLength());
  }
};
var BallPredictionT = class {
  constructor(slices = []) {
    this.slices = slices;
  }
  pack(builder) {
    const slices = BallPrediction.createSlicesVector(builder, builder.createObjectOffsetList(this.slices));
    return BallPrediction.createBallPrediction(
      builder,
      slices
    );
  }
};

// src/flat/rlbot/flat/ball-rigid-body-state.ts
var flatbuffers11 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/rigid-body-state.ts
var flatbuffers10 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/quaternion.ts
var Quaternion = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  x() {
    return this.bb.readFloat32(this.bb_pos);
  }
  y() {
    return this.bb.readFloat32(this.bb_pos + 4);
  }
  z() {
    return this.bb.readFloat32(this.bb_pos + 8);
  }
  w() {
    return this.bb.readFloat32(this.bb_pos + 12);
  }
  static sizeOf() {
    return 16;
  }
  static createQuaternion(builder, x, y, z, w) {
    builder.prep(4, 16);
    builder.writeFloat32(w);
    builder.writeFloat32(z);
    builder.writeFloat32(y);
    builder.writeFloat32(x);
    return builder.offset();
  }
  unpack() {
    return new QuaternionT(
      this.x(),
      this.y(),
      this.z(),
      this.w()
    );
  }
  unpackTo(_o) {
    _o.x = this.x();
    _o.y = this.y();
    _o.z = this.z();
    _o.w = this.w();
  }
};
var QuaternionT = class {
  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  pack(builder) {
    return Quaternion.createQuaternion(
      builder,
      this.x,
      this.y,
      this.z,
      this.w
    );
  }
};

// src/flat/rlbot/flat/rigid-body-state.ts
var RigidBodyState = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsRigidBodyState(bb, obj) {
    return (obj || new RigidBodyState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsRigidBodyState(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers10.SIZE_PREFIX_LENGTH);
    return (obj || new RigidBodyState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  frame() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  location(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  rotation(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Quaternion()).__init(this.bb_pos + offset, this.bb) : null;
  }
  velocity(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  angularVelocity(obj) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  static startRigidBodyState(builder) {
    builder.startObject(5);
  }
  static addFrame(builder, frame) {
    builder.addFieldInt32(0, frame, 0);
  }
  static addLocation(builder, locationOffset) {
    builder.addFieldStruct(1, locationOffset, 0);
  }
  static addRotation(builder, rotationOffset) {
    builder.addFieldStruct(2, rotationOffset, 0);
  }
  static addVelocity(builder, velocityOffset) {
    builder.addFieldStruct(3, velocityOffset, 0);
  }
  static addAngularVelocity(builder, angularVelocityOffset) {
    builder.addFieldStruct(4, angularVelocityOffset, 0);
  }
  static endRigidBodyState(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new RigidBodyStateT(
      this.frame(),
      this.location() !== null ? this.location().unpack() : null,
      this.rotation() !== null ? this.rotation().unpack() : null,
      this.velocity() !== null ? this.velocity().unpack() : null,
      this.angularVelocity() !== null ? this.angularVelocity().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.frame = this.frame();
    _o.location = this.location() !== null ? this.location().unpack() : null;
    _o.rotation = this.rotation() !== null ? this.rotation().unpack() : null;
    _o.velocity = this.velocity() !== null ? this.velocity().unpack() : null;
    _o.angularVelocity = this.angularVelocity() !== null ? this.angularVelocity().unpack() : null;
  }
};
var RigidBodyStateT = class {
  constructor(frame = 0, location = null, rotation = null, velocity = null, angularVelocity = null) {
    this.frame = frame;
    this.location = location;
    this.rotation = rotation;
    this.velocity = velocity;
    this.angularVelocity = angularVelocity;
  }
  pack(builder) {
    RigidBodyState.startRigidBodyState(builder);
    RigidBodyState.addFrame(builder, this.frame);
    RigidBodyState.addLocation(builder, this.location !== null ? this.location.pack(builder) : 0);
    RigidBodyState.addRotation(builder, this.rotation !== null ? this.rotation.pack(builder) : 0);
    RigidBodyState.addVelocity(builder, this.velocity !== null ? this.velocity.pack(builder) : 0);
    RigidBodyState.addAngularVelocity(builder, this.angularVelocity !== null ? this.angularVelocity.pack(builder) : 0);
    return RigidBodyState.endRigidBodyState(builder);
  }
};

// src/flat/rlbot/flat/ball-rigid-body-state.ts
var BallRigidBodyState = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBallRigidBodyState(bb, obj) {
    return (obj || new BallRigidBodyState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBallRigidBodyState(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers11.SIZE_PREFIX_LENGTH);
    return (obj || new BallRigidBodyState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  state(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new RigidBodyState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  static startBallRigidBodyState(builder) {
    builder.startObject(1);
  }
  static addState(builder, stateOffset) {
    builder.addFieldOffset(0, stateOffset, 0);
  }
  static endBallRigidBodyState(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createBallRigidBodyState(builder, stateOffset) {
    BallRigidBodyState.startBallRigidBodyState(builder);
    BallRigidBodyState.addState(builder, stateOffset);
    return BallRigidBodyState.endBallRigidBodyState(builder);
  }
  unpack() {
    return new BallRigidBodyStateT(
      this.state() !== null ? this.state().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.state = this.state() !== null ? this.state().unpack() : null;
  }
};
var BallRigidBodyStateT = class {
  constructor(state = null) {
    this.state = state;
  }
  pack(builder) {
    const state = this.state !== null ? this.state.pack(builder) : 0;
    return BallRigidBodyState.createBallRigidBodyState(
      builder,
      state
    );
  }
};

// src/flat/rlbot/flat/ball-size-option.ts
var BallSizeOption = /* @__PURE__ */ ((BallSizeOption2) => {
  BallSizeOption2[BallSizeOption2["Default"] = 0] = "Default";
  BallSizeOption2[BallSizeOption2["Small"] = 1] = "Small";
  BallSizeOption2[BallSizeOption2["Large"] = 2] = "Large";
  BallSizeOption2[BallSizeOption2["Gigantic"] = 3] = "Gigantic";
  return BallSizeOption2;
})(BallSizeOption || {});

// src/flat/rlbot/flat/ball-type-option.ts
var BallTypeOption = /* @__PURE__ */ ((BallTypeOption2) => {
  BallTypeOption2[BallTypeOption2["Default"] = 0] = "Default";
  BallTypeOption2[BallTypeOption2["Cube"] = 1] = "Cube";
  BallTypeOption2[BallTypeOption2["Puck"] = 2] = "Puck";
  BallTypeOption2[BallTypeOption2["Basketball"] = 3] = "Basketball";
  return BallTypeOption2;
})(BallTypeOption || {});

// src/flat/rlbot/flat/ball-weight-option.ts
var BallWeightOption = /* @__PURE__ */ ((BallWeightOption2) => {
  BallWeightOption2[BallWeightOption2["Default"] = 0] = "Default";
  BallWeightOption2[BallWeightOption2["Light"] = 1] = "Light";
  BallWeightOption2[BallWeightOption2["Heavy"] = 2] = "Heavy";
  BallWeightOption2[BallWeightOption2["Super_Light"] = 3] = "Super_Light";
  return BallWeightOption2;
})(BallWeightOption || {});

// src/flat/rlbot/flat/bool.ts
var Bool = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  val() {
    return !!this.bb.readInt8(this.bb_pos);
  }
  static sizeOf() {
    return 1;
  }
  static createBool(builder, val) {
    builder.prep(1, 1);
    builder.writeInt8(+val);
    return builder.offset();
  }
  unpack() {
    return new BoolT(
      this.val()
    );
  }
  unpackTo(_o) {
    _o.val = this.val();
  }
};
var BoolT = class {
  constructor(val = false) {
    this.val = val;
  }
  pack(builder) {
    return Bool.createBool(
      builder,
      this.val
    );
  }
};

// src/flat/rlbot/flat/boost-option.ts
var BoostOption = /* @__PURE__ */ ((BoostOption2) => {
  BoostOption2[BoostOption2["Normal_Boost"] = 0] = "Normal_Boost";
  BoostOption2[BoostOption2["Unlimited_Boost"] = 1] = "Unlimited_Boost";
  BoostOption2[BoostOption2["Slow_Recharge"] = 2] = "Slow_Recharge";
  BoostOption2[BoostOption2["Rapid_Recharge"] = 3] = "Rapid_Recharge";
  BoostOption2[BoostOption2["No_Boost"] = 4] = "No_Boost";
  return BoostOption2;
})(BoostOption || {});

// src/flat/rlbot/flat/boost-pad.ts
var flatbuffers12 = __toESM(require("flatbuffers"));
var BoostPad = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBoostPad(bb, obj) {
    return (obj || new BoostPad()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBoostPad(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers12.SIZE_PREFIX_LENGTH);
    return (obj || new BoostPad()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  location(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  isFullBoost() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startBoostPad(builder) {
    builder.startObject(2);
  }
  static addLocation(builder, locationOffset) {
    builder.addFieldStruct(0, locationOffset, 0);
  }
  static addIsFullBoost(builder, isFullBoost) {
    builder.addFieldInt8(1, +isFullBoost, 0);
  }
  static endBoostPad(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createBoostPad(builder, locationOffset, isFullBoost) {
    BoostPad.startBoostPad(builder);
    BoostPad.addLocation(builder, locationOffset);
    BoostPad.addIsFullBoost(builder, isFullBoost);
    return BoostPad.endBoostPad(builder);
  }
  unpack() {
    return new BoostPadT(
      this.location() !== null ? this.location().unpack() : null,
      this.isFullBoost()
    );
  }
  unpackTo(_o) {
    _o.location = this.location() !== null ? this.location().unpack() : null;
    _o.isFullBoost = this.isFullBoost();
  }
};
var BoostPadT = class {
  constructor(location = null, isFullBoost = false) {
    this.location = location;
    this.isFullBoost = isFullBoost;
  }
  pack(builder) {
    return BoostPad.createBoostPad(
      builder,
      this.location !== null ? this.location.pack(builder) : 0,
      this.isFullBoost
    );
  }
};

// src/flat/rlbot/flat/boost-pad-state.ts
var flatbuffers13 = __toESM(require("flatbuffers"));
var BoostPadState = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBoostPadState(bb, obj) {
    return (obj || new BoostPadState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBoostPadState(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers13.SIZE_PREFIX_LENGTH);
    return (obj || new BoostPadState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  isActive() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  timer() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  static startBoostPadState(builder) {
    builder.startObject(2);
  }
  static addIsActive(builder, isActive) {
    builder.addFieldInt8(0, +isActive, 0);
  }
  static addTimer(builder, timer) {
    builder.addFieldFloat32(1, timer, 0);
  }
  static endBoostPadState(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createBoostPadState(builder, isActive, timer) {
    BoostPadState.startBoostPadState(builder);
    BoostPadState.addIsActive(builder, isActive);
    BoostPadState.addTimer(builder, timer);
    return BoostPadState.endBoostPadState(builder);
  }
  unpack() {
    return new BoostPadStateT(
      this.isActive(),
      this.timer()
    );
  }
  unpackTo(_o) {
    _o.isActive = this.isActive();
    _o.timer = this.timer();
  }
};
var BoostPadStateT = class {
  constructor(isActive = false, timer = 0) {
    this.isActive = isActive;
    this.timer = timer;
  }
  pack(builder) {
    return BoostPadState.createBoostPadState(
      builder,
      this.isActive,
      this.timer
    );
  }
};

// src/flat/rlbot/flat/boost-strength-option.ts
var BoostStrengthOption = /* @__PURE__ */ ((BoostStrengthOption2) => {
  BoostStrengthOption2[BoostStrengthOption2["One"] = 0] = "One";
  BoostStrengthOption2[BoostStrengthOption2["OneAndAHalf"] = 1] = "OneAndAHalf";
  BoostStrengthOption2[BoostStrengthOption2["Two"] = 2] = "Two";
  BoostStrengthOption2[BoostStrengthOption2["Ten"] = 3] = "Ten";
  return BoostStrengthOption2;
})(BoostStrengthOption || {});

// src/flat/rlbot/flat/color.ts
var flatbuffers14 = __toESM(require("flatbuffers"));
var Color = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsColor(bb, obj) {
    return (obj || new Color()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsColor(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers14.SIZE_PREFIX_LENGTH);
    return (obj || new Color()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  a() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
  }
  r() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
  }
  g() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
  }
  b() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
  }
  static startColor(builder) {
    builder.startObject(4);
  }
  static addA(builder, a) {
    builder.addFieldInt8(0, a, 0);
  }
  static addR(builder, r) {
    builder.addFieldInt8(1, r, 0);
  }
  static addG(builder, g) {
    builder.addFieldInt8(2, g, 0);
  }
  static addB(builder, b) {
    builder.addFieldInt8(3, b, 0);
  }
  static endColor(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createColor(builder, a, r, g, b) {
    Color.startColor(builder);
    Color.addA(builder, a);
    Color.addR(builder, r);
    Color.addG(builder, g);
    Color.addB(builder, b);
    return Color.endColor(builder);
  }
  unpack() {
    return new ColorT(
      this.a(),
      this.r(),
      this.g(),
      this.b()
    );
  }
  unpackTo(_o) {
    _o.a = this.a();
    _o.r = this.r();
    _o.g = this.g();
    _o.b = this.b();
  }
};
var ColorT = class {
  constructor(a = 0, r = 0, g = 0, b = 0) {
    this.a = a;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  pack(builder) {
    return Color.createColor(
      builder,
      this.a,
      this.r,
      this.g,
      this.b
    );
  }
};

// src/flat/rlbot/flat/console-command.ts
var flatbuffers15 = __toESM(require("flatbuffers"));
var ConsoleCommand = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsConsoleCommand(bb, obj) {
    return (obj || new ConsoleCommand()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsConsoleCommand(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers15.SIZE_PREFIX_LENGTH);
    return (obj || new ConsoleCommand()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  command(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startConsoleCommand(builder) {
    builder.startObject(1);
  }
  static addCommand(builder, commandOffset) {
    builder.addFieldOffset(0, commandOffset, 0);
  }
  static endConsoleCommand(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createConsoleCommand(builder, commandOffset) {
    ConsoleCommand.startConsoleCommand(builder);
    ConsoleCommand.addCommand(builder, commandOffset);
    return ConsoleCommand.endConsoleCommand(builder);
  }
  unpack() {
    return new ConsoleCommandT(
      this.command()
    );
  }
  unpackTo(_o) {
    _o.command = this.command();
  }
};
var ConsoleCommandT = class {
  constructor(command = null) {
    this.command = command;
  }
  pack(builder) {
    const command = this.command !== null ? builder.createString(this.command) : 0;
    return ConsoleCommand.createConsoleCommand(
      builder,
      command
    );
  }
};

// src/flat/rlbot/flat/controller-state.ts
var flatbuffers16 = __toESM(require("flatbuffers"));
var ControllerState = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsControllerState(bb, obj) {
    return (obj || new ControllerState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsControllerState(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers16.SIZE_PREFIX_LENGTH);
    return (obj || new ControllerState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  throttle() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  steer() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  pitch() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  yaw() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  roll() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  jump() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  boost() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  handbrake() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  useItem() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startControllerState(builder) {
    builder.startObject(9);
  }
  static addThrottle(builder, throttle) {
    builder.addFieldFloat32(0, throttle, 0);
  }
  static addSteer(builder, steer) {
    builder.addFieldFloat32(1, steer, 0);
  }
  static addPitch(builder, pitch) {
    builder.addFieldFloat32(2, pitch, 0);
  }
  static addYaw(builder, yaw) {
    builder.addFieldFloat32(3, yaw, 0);
  }
  static addRoll(builder, roll) {
    builder.addFieldFloat32(4, roll, 0);
  }
  static addJump(builder, jump) {
    builder.addFieldInt8(5, +jump, 0);
  }
  static addBoost(builder, boost) {
    builder.addFieldInt8(6, +boost, 0);
  }
  static addHandbrake(builder, handbrake) {
    builder.addFieldInt8(7, +handbrake, 0);
  }
  static addUseItem(builder, useItem) {
    builder.addFieldInt8(8, +useItem, 0);
  }
  static endControllerState(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createControllerState(builder, throttle, steer, pitch, yaw, roll, jump, boost, handbrake, useItem) {
    ControllerState.startControllerState(builder);
    ControllerState.addThrottle(builder, throttle);
    ControllerState.addSteer(builder, steer);
    ControllerState.addPitch(builder, pitch);
    ControllerState.addYaw(builder, yaw);
    ControllerState.addRoll(builder, roll);
    ControllerState.addJump(builder, jump);
    ControllerState.addBoost(builder, boost);
    ControllerState.addHandbrake(builder, handbrake);
    ControllerState.addUseItem(builder, useItem);
    return ControllerState.endControllerState(builder);
  }
  unpack() {
    return new ControllerStateT(
      this.throttle(),
      this.steer(),
      this.pitch(),
      this.yaw(),
      this.roll(),
      this.jump(),
      this.boost(),
      this.handbrake(),
      this.useItem()
    );
  }
  unpackTo(_o) {
    _o.throttle = this.throttle();
    _o.steer = this.steer();
    _o.pitch = this.pitch();
    _o.yaw = this.yaw();
    _o.roll = this.roll();
    _o.jump = this.jump();
    _o.boost = this.boost();
    _o.handbrake = this.handbrake();
    _o.useItem = this.useItem();
  }
};
var ControllerStateT = class {
  constructor(throttle = 0, steer = 0, pitch = 0, yaw = 0, roll = 0, jump = false, boost = false, handbrake = false, useItem = false) {
    this.throttle = throttle;
    this.steer = steer;
    this.pitch = pitch;
    this.yaw = yaw;
    this.roll = roll;
    this.jump = jump;
    this.boost = boost;
    this.handbrake = handbrake;
    this.useItem = useItem;
  }
  pack(builder) {
    return ControllerState.createControllerState(
      builder,
      this.throttle,
      this.steer,
      this.pitch,
      this.yaw,
      this.roll,
      this.jump,
      this.boost,
      this.handbrake,
      this.useItem
    );
  }
};

// src/flat/rlbot/flat/demolish-option.ts
var DemolishOption = /* @__PURE__ */ ((DemolishOption2) => {
  DemolishOption2[DemolishOption2["Default"] = 0] = "Default";
  DemolishOption2[DemolishOption2["Disabled"] = 1] = "Disabled";
  DemolishOption2[DemolishOption2["Friendly_Fire"] = 2] = "Friendly_Fire";
  DemolishOption2[DemolishOption2["On_Contact"] = 3] = "On_Contact";
  DemolishOption2[DemolishOption2["On_Contact_FF"] = 4] = "On_Contact_FF";
  return DemolishOption2;
})(DemolishOption || {});

// src/flat/rlbot/flat/desired-ball-state.ts
var flatbuffers20 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/desired-physics.ts
var flatbuffers19 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/rotator-partial.ts
var flatbuffers17 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/float.ts
var Float = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  val() {
    return this.bb.readFloat32(this.bb_pos);
  }
  static sizeOf() {
    return 4;
  }
  static createFloat(builder, val) {
    builder.prep(4, 4);
    builder.writeFloat32(val);
    return builder.offset();
  }
  unpack() {
    return new FloatT(
      this.val()
    );
  }
  unpackTo(_o) {
    _o.val = this.val();
  }
};
var FloatT = class {
  constructor(val = 0) {
    this.val = val;
  }
  pack(builder) {
    return Float.createFloat(
      builder,
      this.val
    );
  }
};

// src/flat/rlbot/flat/rotator-partial.ts
var RotatorPartial = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsRotatorPartial(bb, obj) {
    return (obj || new RotatorPartial()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsRotatorPartial(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers17.SIZE_PREFIX_LENGTH);
    return (obj || new RotatorPartial()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  pitch(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb) : null;
  }
  yaw(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb) : null;
  }
  roll(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb) : null;
  }
  static startRotatorPartial(builder) {
    builder.startObject(3);
  }
  static addPitch(builder, pitchOffset) {
    builder.addFieldStruct(0, pitchOffset, 0);
  }
  static addYaw(builder, yawOffset) {
    builder.addFieldStruct(1, yawOffset, 0);
  }
  static addRoll(builder, rollOffset) {
    builder.addFieldStruct(2, rollOffset, 0);
  }
  static endRotatorPartial(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new RotatorPartialT(
      this.pitch() !== null ? this.pitch().unpack() : null,
      this.yaw() !== null ? this.yaw().unpack() : null,
      this.roll() !== null ? this.roll().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.pitch = this.pitch() !== null ? this.pitch().unpack() : null;
    _o.yaw = this.yaw() !== null ? this.yaw().unpack() : null;
    _o.roll = this.roll() !== null ? this.roll().unpack() : null;
  }
};
var RotatorPartialT = class {
  constructor(pitch = null, yaw = null, roll = null) {
    this.pitch = pitch;
    this.yaw = yaw;
    this.roll = roll;
  }
  pack(builder) {
    RotatorPartial.startRotatorPartial(builder);
    RotatorPartial.addPitch(builder, this.pitch !== null ? this.pitch.pack(builder) : 0);
    RotatorPartial.addYaw(builder, this.yaw !== null ? this.yaw.pack(builder) : 0);
    RotatorPartial.addRoll(builder, this.roll !== null ? this.roll.pack(builder) : 0);
    return RotatorPartial.endRotatorPartial(builder);
  }
};

// src/flat/rlbot/flat/vector3partial.ts
var flatbuffers18 = __toESM(require("flatbuffers"));
var Vector3Partial = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsVector3Partial(bb, obj) {
    return (obj || new Vector3Partial()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsVector3Partial(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers18.SIZE_PREFIX_LENGTH);
    return (obj || new Vector3Partial()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  x(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb) : null;
  }
  y(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb) : null;
  }
  z(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb) : null;
  }
  static startVector3Partial(builder) {
    builder.startObject(3);
  }
  static addX(builder, xOffset) {
    builder.addFieldStruct(0, xOffset, 0);
  }
  static addY(builder, yOffset) {
    builder.addFieldStruct(1, yOffset, 0);
  }
  static addZ(builder, zOffset) {
    builder.addFieldStruct(2, zOffset, 0);
  }
  static endVector3Partial(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new Vector3PartialT(
      this.x() !== null ? this.x().unpack() : null,
      this.y() !== null ? this.y().unpack() : null,
      this.z() !== null ? this.z().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.x = this.x() !== null ? this.x().unpack() : null;
    _o.y = this.y() !== null ? this.y().unpack() : null;
    _o.z = this.z() !== null ? this.z().unpack() : null;
  }
};
var Vector3PartialT = class {
  constructor(x = null, y = null, z = null) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  pack(builder) {
    Vector3Partial.startVector3Partial(builder);
    Vector3Partial.addX(builder, this.x !== null ? this.x.pack(builder) : 0);
    Vector3Partial.addY(builder, this.y !== null ? this.y.pack(builder) : 0);
    Vector3Partial.addZ(builder, this.z !== null ? this.z.pack(builder) : 0);
    return Vector3Partial.endVector3Partial(builder);
  }
};

// src/flat/rlbot/flat/desired-physics.ts
var DesiredPhysics = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDesiredPhysics(bb, obj) {
    return (obj || new DesiredPhysics()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDesiredPhysics(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers19.SIZE_PREFIX_LENGTH);
    return (obj || new DesiredPhysics()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  location(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Vector3Partial()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  rotation(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new RotatorPartial()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  velocity(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Vector3Partial()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  angularVelocity(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new Vector3Partial()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  static startDesiredPhysics(builder) {
    builder.startObject(4);
  }
  static addLocation(builder, locationOffset) {
    builder.addFieldOffset(0, locationOffset, 0);
  }
  static addRotation(builder, rotationOffset) {
    builder.addFieldOffset(1, rotationOffset, 0);
  }
  static addVelocity(builder, velocityOffset) {
    builder.addFieldOffset(2, velocityOffset, 0);
  }
  static addAngularVelocity(builder, angularVelocityOffset) {
    builder.addFieldOffset(3, angularVelocityOffset, 0);
  }
  static endDesiredPhysics(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new DesiredPhysicsT(
      this.location() !== null ? this.location().unpack() : null,
      this.rotation() !== null ? this.rotation().unpack() : null,
      this.velocity() !== null ? this.velocity().unpack() : null,
      this.angularVelocity() !== null ? this.angularVelocity().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.location = this.location() !== null ? this.location().unpack() : null;
    _o.rotation = this.rotation() !== null ? this.rotation().unpack() : null;
    _o.velocity = this.velocity() !== null ? this.velocity().unpack() : null;
    _o.angularVelocity = this.angularVelocity() !== null ? this.angularVelocity().unpack() : null;
  }
};
var DesiredPhysicsT = class {
  constructor(location = null, rotation = null, velocity = null, angularVelocity = null) {
    this.location = location;
    this.rotation = rotation;
    this.velocity = velocity;
    this.angularVelocity = angularVelocity;
  }
  pack(builder) {
    const location = this.location !== null ? this.location.pack(builder) : 0;
    const rotation = this.rotation !== null ? this.rotation.pack(builder) : 0;
    const velocity = this.velocity !== null ? this.velocity.pack(builder) : 0;
    const angularVelocity = this.angularVelocity !== null ? this.angularVelocity.pack(builder) : 0;
    DesiredPhysics.startDesiredPhysics(builder);
    DesiredPhysics.addLocation(builder, location);
    DesiredPhysics.addRotation(builder, rotation);
    DesiredPhysics.addVelocity(builder, velocity);
    DesiredPhysics.addAngularVelocity(builder, angularVelocity);
    return DesiredPhysics.endDesiredPhysics(builder);
  }
};

// src/flat/rlbot/flat/desired-ball-state.ts
var DesiredBallState = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDesiredBallState(bb, obj) {
    return (obj || new DesiredBallState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDesiredBallState(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers20.SIZE_PREFIX_LENGTH);
    return (obj || new DesiredBallState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  physics(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new DesiredPhysics()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  static startDesiredBallState(builder) {
    builder.startObject(1);
  }
  static addPhysics(builder, physicsOffset) {
    builder.addFieldOffset(0, physicsOffset, 0);
  }
  static endDesiredBallState(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDesiredBallState(builder, physicsOffset) {
    DesiredBallState.startDesiredBallState(builder);
    DesiredBallState.addPhysics(builder, physicsOffset);
    return DesiredBallState.endDesiredBallState(builder);
  }
  unpack() {
    return new DesiredBallStateT(
      this.physics() !== null ? this.physics().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.physics = this.physics() !== null ? this.physics().unpack() : null;
  }
};
var DesiredBallStateT = class {
  constructor(physics = null) {
    this.physics = physics;
  }
  pack(builder) {
    const physics = this.physics !== null ? this.physics.pack(builder) : 0;
    return DesiredBallState.createDesiredBallState(
      builder,
      physics
    );
  }
};

// src/flat/rlbot/flat/desired-boost-state.ts
var flatbuffers21 = __toESM(require("flatbuffers"));
var DesiredBoostState = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDesiredBoostState(bb, obj) {
    return (obj || new DesiredBoostState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDesiredBoostState(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers21.SIZE_PREFIX_LENGTH);
    return (obj || new DesiredBoostState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  respawnTime(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb) : null;
  }
  static startDesiredBoostState(builder) {
    builder.startObject(1);
  }
  static addRespawnTime(builder, respawnTimeOffset) {
    builder.addFieldStruct(0, respawnTimeOffset, 0);
  }
  static endDesiredBoostState(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDesiredBoostState(builder, respawnTimeOffset) {
    DesiredBoostState.startDesiredBoostState(builder);
    DesiredBoostState.addRespawnTime(builder, respawnTimeOffset);
    return DesiredBoostState.endDesiredBoostState(builder);
  }
  unpack() {
    return new DesiredBoostStateT(
      this.respawnTime() !== null ? this.respawnTime().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.respawnTime = this.respawnTime() !== null ? this.respawnTime().unpack() : null;
  }
};
var DesiredBoostStateT = class {
  constructor(respawnTime = null) {
    this.respawnTime = respawnTime;
  }
  pack(builder) {
    return DesiredBoostState.createDesiredBoostState(
      builder,
      this.respawnTime !== null ? this.respawnTime.pack(builder) : 0
    );
  }
};

// src/flat/rlbot/flat/desired-car-state.ts
var flatbuffers22 = __toESM(require("flatbuffers"));
var DesiredCarState = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDesiredCarState(bb, obj) {
    return (obj || new DesiredCarState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDesiredCarState(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers22.SIZE_PREFIX_LENGTH);
    return (obj || new DesiredCarState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  physics(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new DesiredPhysics()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  boostAmount(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb) : null;
  }
  jumped(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Bool()).__init(this.bb_pos + offset, this.bb) : null;
  }
  doubleJumped(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new Bool()).__init(this.bb_pos + offset, this.bb) : null;
  }
  static startDesiredCarState(builder) {
    builder.startObject(4);
  }
  static addPhysics(builder, physicsOffset) {
    builder.addFieldOffset(0, physicsOffset, 0);
  }
  static addBoostAmount(builder, boostAmountOffset) {
    builder.addFieldStruct(1, boostAmountOffset, 0);
  }
  static addJumped(builder, jumpedOffset) {
    builder.addFieldStruct(2, jumpedOffset, 0);
  }
  static addDoubleJumped(builder, doubleJumpedOffset) {
    builder.addFieldStruct(3, doubleJumpedOffset, 0);
  }
  static endDesiredCarState(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new DesiredCarStateT(
      this.physics() !== null ? this.physics().unpack() : null,
      this.boostAmount() !== null ? this.boostAmount().unpack() : null,
      this.jumped() !== null ? this.jumped().unpack() : null,
      this.doubleJumped() !== null ? this.doubleJumped().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.physics = this.physics() !== null ? this.physics().unpack() : null;
    _o.boostAmount = this.boostAmount() !== null ? this.boostAmount().unpack() : null;
    _o.jumped = this.jumped() !== null ? this.jumped().unpack() : null;
    _o.doubleJumped = this.doubleJumped() !== null ? this.doubleJumped().unpack() : null;
  }
};
var DesiredCarStateT = class {
  constructor(physics = null, boostAmount = null, jumped = null, doubleJumped = null) {
    this.physics = physics;
    this.boostAmount = boostAmount;
    this.jumped = jumped;
    this.doubleJumped = doubleJumped;
  }
  pack(builder) {
    const physics = this.physics !== null ? this.physics.pack(builder) : 0;
    DesiredCarState.startDesiredCarState(builder);
    DesiredCarState.addPhysics(builder, physics);
    DesiredCarState.addBoostAmount(builder, this.boostAmount !== null ? this.boostAmount.pack(builder) : 0);
    DesiredCarState.addJumped(builder, this.jumped !== null ? this.jumped.pack(builder) : 0);
    DesiredCarState.addDoubleJumped(builder, this.doubleJumped !== null ? this.doubleJumped.pack(builder) : 0);
    return DesiredCarState.endDesiredCarState(builder);
  }
};

// src/flat/rlbot/flat/desired-game-info-state.ts
var flatbuffers23 = __toESM(require("flatbuffers"));
var DesiredGameInfoState = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDesiredGameInfoState(bb, obj) {
    return (obj || new DesiredGameInfoState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDesiredGameInfoState(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers23.SIZE_PREFIX_LENGTH);
    return (obj || new DesiredGameInfoState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  worldGravityZ(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb) : null;
  }
  gameSpeed(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb) : null;
  }
  paused(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Bool()).__init(this.bb_pos + offset, this.bb) : null;
  }
  endMatch(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new Bool()).__init(this.bb_pos + offset, this.bb) : null;
  }
  static startDesiredGameInfoState(builder) {
    builder.startObject(4);
  }
  static addWorldGravityZ(builder, worldGravityZOffset) {
    builder.addFieldStruct(0, worldGravityZOffset, 0);
  }
  static addGameSpeed(builder, gameSpeedOffset) {
    builder.addFieldStruct(1, gameSpeedOffset, 0);
  }
  static addPaused(builder, pausedOffset) {
    builder.addFieldStruct(2, pausedOffset, 0);
  }
  static addEndMatch(builder, endMatchOffset) {
    builder.addFieldStruct(3, endMatchOffset, 0);
  }
  static endDesiredGameInfoState(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new DesiredGameInfoStateT(
      this.worldGravityZ() !== null ? this.worldGravityZ().unpack() : null,
      this.gameSpeed() !== null ? this.gameSpeed().unpack() : null,
      this.paused() !== null ? this.paused().unpack() : null,
      this.endMatch() !== null ? this.endMatch().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.worldGravityZ = this.worldGravityZ() !== null ? this.worldGravityZ().unpack() : null;
    _o.gameSpeed = this.gameSpeed() !== null ? this.gameSpeed().unpack() : null;
    _o.paused = this.paused() !== null ? this.paused().unpack() : null;
    _o.endMatch = this.endMatch() !== null ? this.endMatch().unpack() : null;
  }
};
var DesiredGameInfoStateT = class {
  constructor(worldGravityZ = null, gameSpeed = null, paused = null, endMatch = null) {
    this.worldGravityZ = worldGravityZ;
    this.gameSpeed = gameSpeed;
    this.paused = paused;
    this.endMatch = endMatch;
  }
  pack(builder) {
    DesiredGameInfoState.startDesiredGameInfoState(builder);
    DesiredGameInfoState.addWorldGravityZ(builder, this.worldGravityZ !== null ? this.worldGravityZ.pack(builder) : 0);
    DesiredGameInfoState.addGameSpeed(builder, this.gameSpeed !== null ? this.gameSpeed.pack(builder) : 0);
    DesiredGameInfoState.addPaused(builder, this.paused !== null ? this.paused.pack(builder) : 0);
    DesiredGameInfoState.addEndMatch(builder, this.endMatch !== null ? this.endMatch.pack(builder) : 0);
    return DesiredGameInfoState.endDesiredGameInfoState(builder);
  }
};

// src/flat/rlbot/flat/desired-game-state.ts
var flatbuffers24 = __toESM(require("flatbuffers"));
var DesiredGameState = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDesiredGameState(bb, obj) {
    return (obj || new DesiredGameState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDesiredGameState(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers24.SIZE_PREFIX_LENGTH);
    return (obj || new DesiredGameState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  ballState(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new DesiredBallState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  carStates(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new DesiredCarState()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  carStatesLength() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  boostStates(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new DesiredBoostState()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  boostStatesLength() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  gameInfoState(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new DesiredGameInfoState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  consoleCommands(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? (obj || new ConsoleCommand()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  consoleCommandsLength() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startDesiredGameState(builder) {
    builder.startObject(5);
  }
  static addBallState(builder, ballStateOffset) {
    builder.addFieldOffset(0, ballStateOffset, 0);
  }
  static addCarStates(builder, carStatesOffset) {
    builder.addFieldOffset(1, carStatesOffset, 0);
  }
  static createCarStatesVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startCarStatesVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addBoostStates(builder, boostStatesOffset) {
    builder.addFieldOffset(2, boostStatesOffset, 0);
  }
  static createBoostStatesVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startBoostStatesVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addGameInfoState(builder, gameInfoStateOffset) {
    builder.addFieldOffset(3, gameInfoStateOffset, 0);
  }
  static addConsoleCommands(builder, consoleCommandsOffset) {
    builder.addFieldOffset(4, consoleCommandsOffset, 0);
  }
  static createConsoleCommandsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startConsoleCommandsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endDesiredGameState(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new DesiredGameStateT(
      this.ballState() !== null ? this.ballState().unpack() : null,
      this.bb.createObjList(this.carStates.bind(this), this.carStatesLength()),
      this.bb.createObjList(this.boostStates.bind(this), this.boostStatesLength()),
      this.gameInfoState() !== null ? this.gameInfoState().unpack() : null,
      this.bb.createObjList(this.consoleCommands.bind(this), this.consoleCommandsLength())
    );
  }
  unpackTo(_o) {
    _o.ballState = this.ballState() !== null ? this.ballState().unpack() : null;
    _o.carStates = this.bb.createObjList(this.carStates.bind(this), this.carStatesLength());
    _o.boostStates = this.bb.createObjList(this.boostStates.bind(this), this.boostStatesLength());
    _o.gameInfoState = this.gameInfoState() !== null ? this.gameInfoState().unpack() : null;
    _o.consoleCommands = this.bb.createObjList(this.consoleCommands.bind(this), this.consoleCommandsLength());
  }
};
var DesiredGameStateT = class {
  constructor(ballState = null, carStates = [], boostStates = [], gameInfoState = null, consoleCommands = []) {
    this.ballState = ballState;
    this.carStates = carStates;
    this.boostStates = boostStates;
    this.gameInfoState = gameInfoState;
    this.consoleCommands = consoleCommands;
  }
  pack(builder) {
    const ballState = this.ballState !== null ? this.ballState.pack(builder) : 0;
    const carStates = DesiredGameState.createCarStatesVector(builder, builder.createObjectOffsetList(this.carStates));
    const boostStates = DesiredGameState.createBoostStatesVector(builder, builder.createObjectOffsetList(this.boostStates));
    const gameInfoState = this.gameInfoState !== null ? this.gameInfoState.pack(builder) : 0;
    const consoleCommands = DesiredGameState.createConsoleCommandsVector(builder, builder.createObjectOffsetList(this.consoleCommands));
    DesiredGameState.startDesiredGameState(builder);
    DesiredGameState.addBallState(builder, ballState);
    DesiredGameState.addCarStates(builder, carStates);
    DesiredGameState.addBoostStates(builder, boostStates);
    DesiredGameState.addGameInfoState(builder, gameInfoState);
    DesiredGameState.addConsoleCommands(builder, consoleCommands);
    return DesiredGameState.endDesiredGameState(builder);
  }
};

// src/flat/rlbot/flat/dropshot-tile.ts
var flatbuffers25 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/tile-state.ts
var TileState = /* @__PURE__ */ ((TileState2) => {
  TileState2[TileState2["Unknown"] = 0] = "Unknown";
  TileState2[TileState2["Filled"] = 1] = "Filled";
  TileState2[TileState2["Damaged"] = 2] = "Damaged";
  TileState2[TileState2["Open"] = 3] = "Open";
  return TileState2;
})(TileState || {});

// src/flat/rlbot/flat/dropshot-tile.ts
var DropshotTile = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDropshotTile(bb, obj) {
    return (obj || new DropshotTile()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDropshotTile(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers25.SIZE_PREFIX_LENGTH);
    return (obj || new DropshotTile()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  tileState() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unknown */;
  }
  static startDropshotTile(builder) {
    builder.startObject(1);
  }
  static addTileState(builder, tileState) {
    builder.addFieldInt8(0, tileState, 0 /* Unknown */);
  }
  static endDropshotTile(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDropshotTile(builder, tileState) {
    DropshotTile.startDropshotTile(builder);
    DropshotTile.addTileState(builder, tileState);
    return DropshotTile.endDropshotTile(builder);
  }
  unpack() {
    return new DropshotTileT(
      this.tileState()
    );
  }
  unpackTo(_o) {
    _o.tileState = this.tileState();
  }
};
var DropshotTileT = class {
  constructor(tileState = 0 /* Unknown */) {
    this.tileState = tileState;
  }
  pack(builder) {
    return DropshotTile.createDropshotTile(
      builder,
      this.tileState
    );
  }
};

// src/flat/rlbot/flat/existing-match-behavior.ts
var ExistingMatchBehavior = /* @__PURE__ */ ((ExistingMatchBehavior2) => {
  ExistingMatchBehavior2[ExistingMatchBehavior2["Restart_If_Different"] = 0] = "Restart_If_Different";
  ExistingMatchBehavior2[ExistingMatchBehavior2["Restart"] = 1] = "Restart";
  ExistingMatchBehavior2[ExistingMatchBehavior2["Continue_And_Spawn"] = 2] = "Continue_And_Spawn";
  return ExistingMatchBehavior2;
})(ExistingMatchBehavior || {});

// src/flat/rlbot/flat/field-info.ts
var flatbuffers27 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/goal-info.ts
var flatbuffers26 = __toESM(require("flatbuffers"));
var GoalInfo = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsGoalInfo(bb, obj) {
    return (obj || new GoalInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsGoalInfo(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers26.SIZE_PREFIX_LENGTH);
    return (obj || new GoalInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  teamNum() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  location(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  direction(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  width() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  height() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  static startGoalInfo(builder) {
    builder.startObject(5);
  }
  static addTeamNum(builder, teamNum) {
    builder.addFieldInt32(0, teamNum, 0);
  }
  static addLocation(builder, locationOffset) {
    builder.addFieldStruct(1, locationOffset, 0);
  }
  static addDirection(builder, directionOffset) {
    builder.addFieldStruct(2, directionOffset, 0);
  }
  static addWidth(builder, width) {
    builder.addFieldFloat32(3, width, 0);
  }
  static addHeight(builder, height) {
    builder.addFieldFloat32(4, height, 0);
  }
  static endGoalInfo(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new GoalInfoT(
      this.teamNum(),
      this.location() !== null ? this.location().unpack() : null,
      this.direction() !== null ? this.direction().unpack() : null,
      this.width(),
      this.height()
    );
  }
  unpackTo(_o) {
    _o.teamNum = this.teamNum();
    _o.location = this.location() !== null ? this.location().unpack() : null;
    _o.direction = this.direction() !== null ? this.direction().unpack() : null;
    _o.width = this.width();
    _o.height = this.height();
  }
};
var GoalInfoT = class {
  constructor(teamNum = 0, location = null, direction = null, width = 0, height = 0) {
    this.teamNum = teamNum;
    this.location = location;
    this.direction = direction;
    this.width = width;
    this.height = height;
  }
  pack(builder) {
    GoalInfo.startGoalInfo(builder);
    GoalInfo.addTeamNum(builder, this.teamNum);
    GoalInfo.addLocation(builder, this.location !== null ? this.location.pack(builder) : 0);
    GoalInfo.addDirection(builder, this.direction !== null ? this.direction.pack(builder) : 0);
    GoalInfo.addWidth(builder, this.width);
    GoalInfo.addHeight(builder, this.height);
    return GoalInfo.endGoalInfo(builder);
  }
};

// src/flat/rlbot/flat/field-info.ts
var FieldInfo = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsFieldInfo(bb, obj) {
    return (obj || new FieldInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsFieldInfo(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers27.SIZE_PREFIX_LENGTH);
    return (obj || new FieldInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  boostPads(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new BoostPad()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  boostPadsLength() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  goals(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new GoalInfo()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  goalsLength() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startFieldInfo(builder) {
    builder.startObject(2);
  }
  static addBoostPads(builder, boostPadsOffset) {
    builder.addFieldOffset(0, boostPadsOffset, 0);
  }
  static createBoostPadsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startBoostPadsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addGoals(builder, goalsOffset) {
    builder.addFieldOffset(1, goalsOffset, 0);
  }
  static createGoalsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startGoalsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endFieldInfo(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createFieldInfo(builder, boostPadsOffset, goalsOffset) {
    FieldInfo.startFieldInfo(builder);
    FieldInfo.addBoostPads(builder, boostPadsOffset);
    FieldInfo.addGoals(builder, goalsOffset);
    return FieldInfo.endFieldInfo(builder);
  }
  unpack() {
    return new FieldInfoT(
      this.bb.createObjList(this.boostPads.bind(this), this.boostPadsLength()),
      this.bb.createObjList(this.goals.bind(this), this.goalsLength())
    );
  }
  unpackTo(_o) {
    _o.boostPads = this.bb.createObjList(this.boostPads.bind(this), this.boostPadsLength());
    _o.goals = this.bb.createObjList(this.goals.bind(this), this.goalsLength());
  }
};
var FieldInfoT = class {
  constructor(boostPads = [], goals = []) {
    this.boostPads = boostPads;
    this.goals = goals;
  }
  pack(builder) {
    const boostPads = FieldInfo.createBoostPadsVector(builder, builder.createObjectOffsetList(this.boostPads));
    const goals = FieldInfo.createGoalsVector(builder, builder.createObjectOffsetList(this.goals));
    return FieldInfo.createFieldInfo(
      builder,
      boostPads,
      goals
    );
  }
};

// src/flat/rlbot/flat/game-info.ts
var flatbuffers28 = __toESM(require("flatbuffers"));
var GameInfo = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsGameInfo(bb, obj) {
    return (obj || new GameInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsGameInfo(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers28.SIZE_PREFIX_LENGTH);
    return (obj || new GameInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  secondsElapsed() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  gameTimeRemaining() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  isOvertime() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  isUnlimitedTime() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  isRoundActive() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  isKickoffPause() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  isMatchEnded() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  worldGravityZ() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  gameSpeed() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  frameNum() {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startGameInfo(builder) {
    builder.startObject(10);
  }
  static addSecondsElapsed(builder, secondsElapsed) {
    builder.addFieldFloat32(0, secondsElapsed, 0);
  }
  static addGameTimeRemaining(builder, gameTimeRemaining) {
    builder.addFieldFloat32(1, gameTimeRemaining, 0);
  }
  static addIsOvertime(builder, isOvertime) {
    builder.addFieldInt8(2, +isOvertime, 0);
  }
  static addIsUnlimitedTime(builder, isUnlimitedTime) {
    builder.addFieldInt8(3, +isUnlimitedTime, 0);
  }
  static addIsRoundActive(builder, isRoundActive) {
    builder.addFieldInt8(4, +isRoundActive, 0);
  }
  static addIsKickoffPause(builder, isKickoffPause) {
    builder.addFieldInt8(5, +isKickoffPause, 0);
  }
  static addIsMatchEnded(builder, isMatchEnded) {
    builder.addFieldInt8(6, +isMatchEnded, 0);
  }
  static addWorldGravityZ(builder, worldGravityZ) {
    builder.addFieldFloat32(7, worldGravityZ, 0);
  }
  static addGameSpeed(builder, gameSpeed) {
    builder.addFieldFloat32(8, gameSpeed, 0);
  }
  static addFrameNum(builder, frameNum) {
    builder.addFieldInt32(9, frameNum, 0);
  }
  static endGameInfo(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createGameInfo(builder, secondsElapsed, gameTimeRemaining, isOvertime, isUnlimitedTime, isRoundActive, isKickoffPause, isMatchEnded, worldGravityZ, gameSpeed, frameNum) {
    GameInfo.startGameInfo(builder);
    GameInfo.addSecondsElapsed(builder, secondsElapsed);
    GameInfo.addGameTimeRemaining(builder, gameTimeRemaining);
    GameInfo.addIsOvertime(builder, isOvertime);
    GameInfo.addIsUnlimitedTime(builder, isUnlimitedTime);
    GameInfo.addIsRoundActive(builder, isRoundActive);
    GameInfo.addIsKickoffPause(builder, isKickoffPause);
    GameInfo.addIsMatchEnded(builder, isMatchEnded);
    GameInfo.addWorldGravityZ(builder, worldGravityZ);
    GameInfo.addGameSpeed(builder, gameSpeed);
    GameInfo.addFrameNum(builder, frameNum);
    return GameInfo.endGameInfo(builder);
  }
  unpack() {
    return new GameInfoT(
      this.secondsElapsed(),
      this.gameTimeRemaining(),
      this.isOvertime(),
      this.isUnlimitedTime(),
      this.isRoundActive(),
      this.isKickoffPause(),
      this.isMatchEnded(),
      this.worldGravityZ(),
      this.gameSpeed(),
      this.frameNum()
    );
  }
  unpackTo(_o) {
    _o.secondsElapsed = this.secondsElapsed();
    _o.gameTimeRemaining = this.gameTimeRemaining();
    _o.isOvertime = this.isOvertime();
    _o.isUnlimitedTime = this.isUnlimitedTime();
    _o.isRoundActive = this.isRoundActive();
    _o.isKickoffPause = this.isKickoffPause();
    _o.isMatchEnded = this.isMatchEnded();
    _o.worldGravityZ = this.worldGravityZ();
    _o.gameSpeed = this.gameSpeed();
    _o.frameNum = this.frameNum();
  }
};
var GameInfoT = class {
  constructor(secondsElapsed = 0, gameTimeRemaining = 0, isOvertime = false, isUnlimitedTime = false, isRoundActive = false, isKickoffPause = false, isMatchEnded = false, worldGravityZ = 0, gameSpeed = 0, frameNum = 0) {
    this.secondsElapsed = secondsElapsed;
    this.gameTimeRemaining = gameTimeRemaining;
    this.isOvertime = isOvertime;
    this.isUnlimitedTime = isUnlimitedTime;
    this.isRoundActive = isRoundActive;
    this.isKickoffPause = isKickoffPause;
    this.isMatchEnded = isMatchEnded;
    this.worldGravityZ = worldGravityZ;
    this.gameSpeed = gameSpeed;
    this.frameNum = frameNum;
  }
  pack(builder) {
    return GameInfo.createGameInfo(
      builder,
      this.secondsElapsed,
      this.gameTimeRemaining,
      this.isOvertime,
      this.isUnlimitedTime,
      this.isRoundActive,
      this.isKickoffPause,
      this.isMatchEnded,
      this.worldGravityZ,
      this.gameSpeed,
      this.frameNum
    );
  }
};

// src/flat/rlbot/flat/game-map.ts
var GameMap = /* @__PURE__ */ ((GameMap2) => {
  GameMap2[GameMap2["DFHStadium"] = 0] = "DFHStadium";
  GameMap2[GameMap2["Mannfield"] = 1] = "Mannfield";
  GameMap2[GameMap2["ChampionsField"] = 2] = "ChampionsField";
  GameMap2[GameMap2["UrbanCentral"] = 3] = "UrbanCentral";
  GameMap2[GameMap2["BeckwithPark"] = 4] = "BeckwithPark";
  GameMap2[GameMap2["UtopiaColiseum"] = 5] = "UtopiaColiseum";
  GameMap2[GameMap2["Wasteland"] = 6] = "Wasteland";
  GameMap2[GameMap2["NeoTokyo"] = 7] = "NeoTokyo";
  GameMap2[GameMap2["AquaDome"] = 8] = "AquaDome";
  GameMap2[GameMap2["StarbaseArc"] = 9] = "StarbaseArc";
  GameMap2[GameMap2["Farmstead"] = 10] = "Farmstead";
  GameMap2[GameMap2["SaltyShores"] = 11] = "SaltyShores";
  GameMap2[GameMap2["DFHStadium_Stormy"] = 12] = "DFHStadium_Stormy";
  GameMap2[GameMap2["DFHStadium_Day"] = 13] = "DFHStadium_Day";
  GameMap2[GameMap2["Mannfield_Stormy"] = 14] = "Mannfield_Stormy";
  GameMap2[GameMap2["Mannfield_Night"] = 15] = "Mannfield_Night";
  GameMap2[GameMap2["ChampionsField_Day"] = 16] = "ChampionsField_Day";
  GameMap2[GameMap2["BeckwithPark_Stormy"] = 17] = "BeckwithPark_Stormy";
  GameMap2[GameMap2["BeckwithPark_Midnight"] = 18] = "BeckwithPark_Midnight";
  GameMap2[GameMap2["UrbanCentral_Night"] = 19] = "UrbanCentral_Night";
  GameMap2[GameMap2["UrbanCentral_Dawn"] = 20] = "UrbanCentral_Dawn";
  GameMap2[GameMap2["UtopiaColiseum_Dusk"] = 21] = "UtopiaColiseum_Dusk";
  GameMap2[GameMap2["DFHStadium_Snowy"] = 22] = "DFHStadium_Snowy";
  GameMap2[GameMap2["Mannfield_Snowy"] = 23] = "Mannfield_Snowy";
  GameMap2[GameMap2["UtopiaColiseum_Snowy"] = 24] = "UtopiaColiseum_Snowy";
  GameMap2[GameMap2["Badlands"] = 25] = "Badlands";
  GameMap2[GameMap2["Badlands_Night"] = 26] = "Badlands_Night";
  GameMap2[GameMap2["TokyoUnderpass"] = 27] = "TokyoUnderpass";
  GameMap2[GameMap2["Arctagon"] = 28] = "Arctagon";
  GameMap2[GameMap2["Pillars"] = 29] = "Pillars";
  GameMap2[GameMap2["Cosmic"] = 30] = "Cosmic";
  GameMap2[GameMap2["DoubleGoal"] = 31] = "DoubleGoal";
  GameMap2[GameMap2["Octagon"] = 32] = "Octagon";
  GameMap2[GameMap2["Underpass"] = 33] = "Underpass";
  GameMap2[GameMap2["UtopiaRetro"] = 34] = "UtopiaRetro";
  GameMap2[GameMap2["Hoops_DunkHouse"] = 35] = "Hoops_DunkHouse";
  GameMap2[GameMap2["DropShot_Core707"] = 36] = "DropShot_Core707";
  GameMap2[GameMap2["ThrowbackStadium"] = 37] = "ThrowbackStadium";
  GameMap2[GameMap2["ForbiddenTemple"] = 38] = "ForbiddenTemple";
  GameMap2[GameMap2["RivalsArena"] = 39] = "RivalsArena";
  GameMap2[GameMap2["Farmstead_Night"] = 40] = "Farmstead_Night";
  GameMap2[GameMap2["SaltyShores_Night"] = 41] = "SaltyShores_Night";
  return GameMap2;
})(GameMap || {});

// src/flat/rlbot/flat/player-input-change.ts
var flatbuffers29 = __toESM(require("flatbuffers"));
var PlayerInputChange = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPlayerInputChange(bb, obj) {
    return (obj || new PlayerInputChange()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPlayerInputChange(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers29.SIZE_PREFIX_LENGTH);
    return (obj || new PlayerInputChange()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  playerIndex() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  controllerState(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new ControllerState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  dodgeForward() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  dodgeRight() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  static startPlayerInputChange(builder) {
    builder.startObject(4);
  }
  static addPlayerIndex(builder, playerIndex) {
    builder.addFieldInt32(0, playerIndex, 0);
  }
  static addControllerState(builder, controllerStateOffset) {
    builder.addFieldOffset(1, controllerStateOffset, 0);
  }
  static addDodgeForward(builder, dodgeForward) {
    builder.addFieldFloat32(2, dodgeForward, 0);
  }
  static addDodgeRight(builder, dodgeRight) {
    builder.addFieldFloat32(3, dodgeRight, 0);
  }
  static endPlayerInputChange(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new PlayerInputChangeT(
      this.playerIndex(),
      this.controllerState() !== null ? this.controllerState().unpack() : null,
      this.dodgeForward(),
      this.dodgeRight()
    );
  }
  unpackTo(_o) {
    _o.playerIndex = this.playerIndex();
    _o.controllerState = this.controllerState() !== null ? this.controllerState().unpack() : null;
    _o.dodgeForward = this.dodgeForward();
    _o.dodgeRight = this.dodgeRight();
  }
};
var PlayerInputChangeT = class {
  constructor(playerIndex = 0, controllerState = null, dodgeForward = 0, dodgeRight = 0) {
    this.playerIndex = playerIndex;
    this.controllerState = controllerState;
    this.dodgeForward = dodgeForward;
    this.dodgeRight = dodgeRight;
  }
  pack(builder) {
    const controllerState = this.controllerState !== null ? this.controllerState.pack(builder) : 0;
    PlayerInputChange.startPlayerInputChange(builder);
    PlayerInputChange.addPlayerIndex(builder, this.playerIndex);
    PlayerInputChange.addControllerState(builder, controllerState);
    PlayerInputChange.addDodgeForward(builder, this.dodgeForward);
    PlayerInputChange.addDodgeRight(builder, this.dodgeRight);
    return PlayerInputChange.endPlayerInputChange(builder);
  }
};

// src/flat/rlbot/flat/player-spectate.ts
var flatbuffers30 = __toESM(require("flatbuffers"));
var PlayerSpectate = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPlayerSpectate(bb, obj) {
    return (obj || new PlayerSpectate()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPlayerSpectate(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers30.SIZE_PREFIX_LENGTH);
    return (obj || new PlayerSpectate()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  playerIndex() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startPlayerSpectate(builder) {
    builder.startObject(1);
  }
  static addPlayerIndex(builder, playerIndex) {
    builder.addFieldInt32(0, playerIndex, 0);
  }
  static endPlayerSpectate(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createPlayerSpectate(builder, playerIndex) {
    PlayerSpectate.startPlayerSpectate(builder);
    PlayerSpectate.addPlayerIndex(builder, playerIndex);
    return PlayerSpectate.endPlayerSpectate(builder);
  }
  unpack() {
    return new PlayerSpectateT(
      this.playerIndex()
    );
  }
  unpackTo(_o) {
    _o.playerIndex = this.playerIndex();
  }
};
var PlayerSpectateT = class {
  constructor(playerIndex = 0) {
    this.playerIndex = playerIndex;
  }
  pack(builder) {
    return PlayerSpectate.createPlayerSpectate(
      builder,
      this.playerIndex
    );
  }
};

// src/flat/rlbot/flat/player-stat-event.ts
var flatbuffers31 = __toESM(require("flatbuffers"));
var PlayerStatEvent = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPlayerStatEvent(bb, obj) {
    return (obj || new PlayerStatEvent()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb
    );
  }
  static getSizePrefixedRootAsPlayerStatEvent(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers31.SIZE_PREFIX_LENGTH);
    return (obj || new PlayerStatEvent()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb
    );
  }
  playerIndex() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  statType(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startPlayerStatEvent(builder) {
    builder.startObject(2);
  }
  static addPlayerIndex(builder, playerIndex) {
    builder.addFieldInt32(0, playerIndex, 0);
  }
  static addStatType(builder, statTypeOffset) {
    builder.addFieldOffset(1, statTypeOffset, 0);
  }
  static endPlayerStatEvent(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createPlayerStatEvent(builder, playerIndex, statTypeOffset) {
    PlayerStatEvent.startPlayerStatEvent(builder);
    PlayerStatEvent.addPlayerIndex(builder, playerIndex);
    PlayerStatEvent.addStatType(builder, statTypeOffset);
    return PlayerStatEvent.endPlayerStatEvent(builder);
  }
  unpack() {
    return new PlayerStatEventT(this.playerIndex(), this.statType());
  }
  unpackTo(_o) {
    _o.playerIndex = this.playerIndex();
    _o.statType = this.statType();
  }
};
var PlayerStatEventT = class {
  constructor(playerIndex = 0, statType = null) {
    this.playerIndex = playerIndex;
    this.statType = statType;
  }
  pack(builder) {
    const statType = this.statType !== null ? builder.createString(this.statType) : 0;
    return PlayerStatEvent.createPlayerStatEvent(
      builder,
      this.playerIndex,
      statType
    );
  }
};

// src/flat/rlbot/flat/game-message.ts
var GameMessage = /* @__PURE__ */ ((GameMessage2) => {
  GameMessage2[GameMessage2["NONE"] = 0] = "NONE";
  GameMessage2[GameMessage2["PlayerStatEvent"] = 1] = "PlayerStatEvent";
  GameMessage2[GameMessage2["PlayerSpectate"] = 2] = "PlayerSpectate";
  GameMessage2[GameMessage2["PlayerInputChange"] = 3] = "PlayerInputChange";
  return GameMessage2;
})(GameMessage || {});
function unionToGameMessage(type, accessor) {
  switch (GameMessage[type]) {
    case "NONE":
      return null;
    case "PlayerStatEvent":
      return accessor(new PlayerStatEvent());
    case "PlayerSpectate":
      return accessor(new PlayerSpectate());
    case "PlayerInputChange":
      return accessor(new PlayerInputChange());
    default:
      return null;
  }
}
function unionListToGameMessage(type, accessor, index) {
  switch (GameMessage[type]) {
    case "NONE":
      return null;
    case "PlayerStatEvent":
      return accessor(index, new PlayerStatEvent());
    case "PlayerSpectate":
      return accessor(index, new PlayerSpectate());
    case "PlayerInputChange":
      return accessor(index, new PlayerInputChange());
    default:
      return null;
  }
}

// src/flat/rlbot/flat/game-message-wrapper.ts
var flatbuffers32 = __toESM(require("flatbuffers"));
var GameMessageWrapper = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsGameMessageWrapper(bb, obj) {
    return (obj || new GameMessageWrapper()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsGameMessageWrapper(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers32.SIZE_PREFIX_LENGTH);
    return (obj || new GameMessageWrapper()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  MessageType() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* NONE */;
  }
  Message(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
  }
  static startGameMessageWrapper(builder) {
    builder.startObject(2);
  }
  static addMessageType(builder, MessageType) {
    builder.addFieldInt8(0, MessageType, 0 /* NONE */);
  }
  static addMessage(builder, MessageOffset) {
    builder.addFieldOffset(1, MessageOffset, 0);
  }
  static endGameMessageWrapper(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createGameMessageWrapper(builder, MessageType, MessageOffset) {
    GameMessageWrapper.startGameMessageWrapper(builder);
    GameMessageWrapper.addMessageType(builder, MessageType);
    GameMessageWrapper.addMessage(builder, MessageOffset);
    return GameMessageWrapper.endGameMessageWrapper(builder);
  }
  unpack() {
    return new GameMessageWrapperT(
      this.MessageType(),
      (() => {
        let temp = unionToGameMessage(this.MessageType(), this.Message.bind(this));
        if (temp === null) {
          return null;
        }
        return temp.unpack();
      })()
    );
  }
  unpackTo(_o) {
    _o.MessageType = this.MessageType();
    _o.Message = (() => {
      let temp = unionToGameMessage(this.MessageType(), this.Message.bind(this));
      if (temp === null) {
        return null;
      }
      return temp.unpack();
    })();
  }
};
var GameMessageWrapperT = class {
  constructor(MessageType = 0 /* NONE */, Message = null) {
    this.MessageType = MessageType;
    this.Message = Message;
  }
  pack(builder) {
    const Message = builder.createObjectOffset(this.Message);
    return GameMessageWrapper.createGameMessageWrapper(
      builder,
      this.MessageType,
      Message
    );
  }
};

// src/flat/rlbot/flat/game-mode.ts
var GameMode = /* @__PURE__ */ ((GameMode2) => {
  GameMode2[GameMode2["Soccer"] = 0] = "Soccer";
  GameMode2[GameMode2["Hoops"] = 1] = "Hoops";
  GameMode2[GameMode2["Dropshot"] = 2] = "Dropshot";
  GameMode2[GameMode2["Hockey"] = 3] = "Hockey";
  GameMode2[GameMode2["Rumble"] = 4] = "Rumble";
  GameMode2[GameMode2["Heatseeker"] = 5] = "Heatseeker";
  return GameMode2;
})(GameMode || {});

// src/flat/rlbot/flat/game-speed-option.ts
var GameSpeedOption = /* @__PURE__ */ ((GameSpeedOption2) => {
  GameSpeedOption2[GameSpeedOption2["Default"] = 0] = "Default";
  GameSpeedOption2[GameSpeedOption2["Slo_Mo"] = 1] = "Slo_Mo";
  GameSpeedOption2[GameSpeedOption2["Time_Warp"] = 2] = "Time_Warp";
  return GameSpeedOption2;
})(GameSpeedOption || {});

// src/flat/rlbot/flat/game-tick-packet.ts
var flatbuffers36 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/player-info.ts
var flatbuffers34 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/score-info.ts
var flatbuffers33 = __toESM(require("flatbuffers"));
var ScoreInfo = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsScoreInfo(bb, obj) {
    return (obj || new ScoreInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsScoreInfo(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers33.SIZE_PREFIX_LENGTH);
    return (obj || new ScoreInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  score() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  goals() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  ownGoals() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  assists() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  saves() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  shots() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  demolitions() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startScoreInfo(builder) {
    builder.startObject(7);
  }
  static addScore(builder, score) {
    builder.addFieldInt32(0, score, 0);
  }
  static addGoals(builder, goals) {
    builder.addFieldInt32(1, goals, 0);
  }
  static addOwnGoals(builder, ownGoals) {
    builder.addFieldInt32(2, ownGoals, 0);
  }
  static addAssists(builder, assists) {
    builder.addFieldInt32(3, assists, 0);
  }
  static addSaves(builder, saves) {
    builder.addFieldInt32(4, saves, 0);
  }
  static addShots(builder, shots) {
    builder.addFieldInt32(5, shots, 0);
  }
  static addDemolitions(builder, demolitions) {
    builder.addFieldInt32(6, demolitions, 0);
  }
  static endScoreInfo(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createScoreInfo(builder, score, goals, ownGoals, assists, saves, shots, demolitions) {
    ScoreInfo.startScoreInfo(builder);
    ScoreInfo.addScore(builder, score);
    ScoreInfo.addGoals(builder, goals);
    ScoreInfo.addOwnGoals(builder, ownGoals);
    ScoreInfo.addAssists(builder, assists);
    ScoreInfo.addSaves(builder, saves);
    ScoreInfo.addShots(builder, shots);
    ScoreInfo.addDemolitions(builder, demolitions);
    return ScoreInfo.endScoreInfo(builder);
  }
  unpack() {
    return new ScoreInfoT(
      this.score(),
      this.goals(),
      this.ownGoals(),
      this.assists(),
      this.saves(),
      this.shots(),
      this.demolitions()
    );
  }
  unpackTo(_o) {
    _o.score = this.score();
    _o.goals = this.goals();
    _o.ownGoals = this.ownGoals();
    _o.assists = this.assists();
    _o.saves = this.saves();
    _o.shots = this.shots();
    _o.demolitions = this.demolitions();
  }
};
var ScoreInfoT = class {
  constructor(score = 0, goals = 0, ownGoals = 0, assists = 0, saves = 0, shots = 0, demolitions = 0) {
    this.score = score;
    this.goals = goals;
    this.ownGoals = ownGoals;
    this.assists = assists;
    this.saves = saves;
    this.shots = shots;
    this.demolitions = demolitions;
  }
  pack(builder) {
    return ScoreInfo.createScoreInfo(
      builder,
      this.score,
      this.goals,
      this.ownGoals,
      this.assists,
      this.saves,
      this.shots,
      this.demolitions
    );
  }
};

// src/flat/rlbot/flat/player-info.ts
var PlayerInfo = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPlayerInfo(bb, obj) {
    return (obj || new PlayerInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPlayerInfo(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers34.SIZE_PREFIX_LENGTH);
    return (obj || new PlayerInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  physics(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Physics()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  scoreInfo(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new ScoreInfo()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  isDemolished() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  hasWheelContact() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  isSupersonic() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  isBot() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  jumped() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  doubleJumped() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  name(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  team() {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  boost() {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  hitbox(obj) {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? (obj || new BoxShape()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  hitboxOffset(obj) {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  spawnId() {
    const offset = this.bb.__offset(this.bb_pos, 30);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startPlayerInfo(builder) {
    builder.startObject(14);
  }
  static addPhysics(builder, physicsOffset) {
    builder.addFieldOffset(0, physicsOffset, 0);
  }
  static addScoreInfo(builder, scoreInfoOffset) {
    builder.addFieldOffset(1, scoreInfoOffset, 0);
  }
  static addIsDemolished(builder, isDemolished) {
    builder.addFieldInt8(2, +isDemolished, 0);
  }
  static addHasWheelContact(builder, hasWheelContact) {
    builder.addFieldInt8(3, +hasWheelContact, 0);
  }
  static addIsSupersonic(builder, isSupersonic) {
    builder.addFieldInt8(4, +isSupersonic, 0);
  }
  static addIsBot(builder, isBot) {
    builder.addFieldInt8(5, +isBot, 0);
  }
  static addJumped(builder, jumped) {
    builder.addFieldInt8(6, +jumped, 0);
  }
  static addDoubleJumped(builder, doubleJumped) {
    builder.addFieldInt8(7, +doubleJumped, 0);
  }
  static addName(builder, nameOffset) {
    builder.addFieldOffset(8, nameOffset, 0);
  }
  static addTeam(builder, team) {
    builder.addFieldInt32(9, team, 0);
  }
  static addBoost(builder, boost) {
    builder.addFieldInt32(10, boost, 0);
  }
  static addHitbox(builder, hitboxOffset) {
    builder.addFieldOffset(11, hitboxOffset, 0);
  }
  static addHitboxOffset(builder, hitboxOffsetOffset) {
    builder.addFieldStruct(12, hitboxOffsetOffset, 0);
  }
  static addSpawnId(builder, spawnId) {
    builder.addFieldInt32(13, spawnId, 0);
  }
  static endPlayerInfo(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new PlayerInfoT(
      this.physics() !== null ? this.physics().unpack() : null,
      this.scoreInfo() !== null ? this.scoreInfo().unpack() : null,
      this.isDemolished(),
      this.hasWheelContact(),
      this.isSupersonic(),
      this.isBot(),
      this.jumped(),
      this.doubleJumped(),
      this.name(),
      this.team(),
      this.boost(),
      this.hitbox() !== null ? this.hitbox().unpack() : null,
      this.hitboxOffset() !== null ? this.hitboxOffset().unpack() : null,
      this.spawnId()
    );
  }
  unpackTo(_o) {
    _o.physics = this.physics() !== null ? this.physics().unpack() : null;
    _o.scoreInfo = this.scoreInfo() !== null ? this.scoreInfo().unpack() : null;
    _o.isDemolished = this.isDemolished();
    _o.hasWheelContact = this.hasWheelContact();
    _o.isSupersonic = this.isSupersonic();
    _o.isBot = this.isBot();
    _o.jumped = this.jumped();
    _o.doubleJumped = this.doubleJumped();
    _o.name = this.name();
    _o.team = this.team();
    _o.boost = this.boost();
    _o.hitbox = this.hitbox() !== null ? this.hitbox().unpack() : null;
    _o.hitboxOffset = this.hitboxOffset() !== null ? this.hitboxOffset().unpack() : null;
    _o.spawnId = this.spawnId();
  }
};
var PlayerInfoT = class {
  constructor(physics = null, scoreInfo = null, isDemolished = false, hasWheelContact = false, isSupersonic = false, isBot = false, jumped = false, doubleJumped = false, name = null, team = 0, boost = 0, hitbox = null, hitboxOffset = null, spawnId = 0) {
    this.physics = physics;
    this.scoreInfo = scoreInfo;
    this.isDemolished = isDemolished;
    this.hasWheelContact = hasWheelContact;
    this.isSupersonic = isSupersonic;
    this.isBot = isBot;
    this.jumped = jumped;
    this.doubleJumped = doubleJumped;
    this.name = name;
    this.team = team;
    this.boost = boost;
    this.hitbox = hitbox;
    this.hitboxOffset = hitboxOffset;
    this.spawnId = spawnId;
  }
  pack(builder) {
    const physics = this.physics !== null ? this.physics.pack(builder) : 0;
    const scoreInfo = this.scoreInfo !== null ? this.scoreInfo.pack(builder) : 0;
    const name = this.name !== null ? builder.createString(this.name) : 0;
    const hitbox = this.hitbox !== null ? this.hitbox.pack(builder) : 0;
    PlayerInfo.startPlayerInfo(builder);
    PlayerInfo.addPhysics(builder, physics);
    PlayerInfo.addScoreInfo(builder, scoreInfo);
    PlayerInfo.addIsDemolished(builder, this.isDemolished);
    PlayerInfo.addHasWheelContact(builder, this.hasWheelContact);
    PlayerInfo.addIsSupersonic(builder, this.isSupersonic);
    PlayerInfo.addIsBot(builder, this.isBot);
    PlayerInfo.addJumped(builder, this.jumped);
    PlayerInfo.addDoubleJumped(builder, this.doubleJumped);
    PlayerInfo.addName(builder, name);
    PlayerInfo.addTeam(builder, this.team);
    PlayerInfo.addBoost(builder, this.boost);
    PlayerInfo.addHitbox(builder, hitbox);
    PlayerInfo.addHitboxOffset(builder, this.hitboxOffset !== null ? this.hitboxOffset.pack(builder) : 0);
    PlayerInfo.addSpawnId(builder, this.spawnId);
    return PlayerInfo.endPlayerInfo(builder);
  }
};

// src/flat/rlbot/flat/team-info.ts
var flatbuffers35 = __toESM(require("flatbuffers"));
var TeamInfo = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsTeamInfo(bb, obj) {
    return (obj || new TeamInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsTeamInfo(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers35.SIZE_PREFIX_LENGTH);
    return (obj || new TeamInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  teamIndex() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  score() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startTeamInfo(builder) {
    builder.startObject(2);
  }
  static addTeamIndex(builder, teamIndex) {
    builder.addFieldInt32(0, teamIndex, 0);
  }
  static addScore(builder, score) {
    builder.addFieldInt32(1, score, 0);
  }
  static endTeamInfo(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createTeamInfo(builder, teamIndex, score) {
    TeamInfo.startTeamInfo(builder);
    TeamInfo.addTeamIndex(builder, teamIndex);
    TeamInfo.addScore(builder, score);
    return TeamInfo.endTeamInfo(builder);
  }
  unpack() {
    return new TeamInfoT(
      this.teamIndex(),
      this.score()
    );
  }
  unpackTo(_o) {
    _o.teamIndex = this.teamIndex();
    _o.score = this.score();
  }
};
var TeamInfoT = class {
  constructor(teamIndex = 0, score = 0) {
    this.teamIndex = teamIndex;
    this.score = score;
  }
  pack(builder) {
    return TeamInfo.createTeamInfo(
      builder,
      this.teamIndex,
      this.score
    );
  }
};

// src/flat/rlbot/flat/game-tick-packet.ts
var GameTickPacket = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsGameTickPacket(bb, obj) {
    return (obj || new GameTickPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsGameTickPacket(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers36.SIZE_PREFIX_LENGTH);
    return (obj || new GameTickPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  players(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new PlayerInfo()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  playersLength() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  boostPadStates(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new BoostPadState()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  boostPadStatesLength() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  ball(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new BallInfo()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  gameInfo(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new GameInfo()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  tileInformation(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? (obj || new DropshotTile()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  tileInformationLength() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  teams(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? (obj || new TeamInfo()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  teamsLength() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startGameTickPacket(builder) {
    builder.startObject(6);
  }
  static addPlayers(builder, playersOffset) {
    builder.addFieldOffset(0, playersOffset, 0);
  }
  static createPlayersVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startPlayersVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addBoostPadStates(builder, boostPadStatesOffset) {
    builder.addFieldOffset(1, boostPadStatesOffset, 0);
  }
  static createBoostPadStatesVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startBoostPadStatesVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addBall(builder, ballOffset) {
    builder.addFieldOffset(2, ballOffset, 0);
  }
  static addGameInfo(builder, gameInfoOffset) {
    builder.addFieldOffset(3, gameInfoOffset, 0);
  }
  static addTileInformation(builder, tileInformationOffset) {
    builder.addFieldOffset(4, tileInformationOffset, 0);
  }
  static createTileInformationVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startTileInformationVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addTeams(builder, teamsOffset) {
    builder.addFieldOffset(5, teamsOffset, 0);
  }
  static createTeamsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startTeamsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endGameTickPacket(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new GameTickPacketT(
      this.bb.createObjList(this.players.bind(this), this.playersLength()),
      this.bb.createObjList(this.boostPadStates.bind(this), this.boostPadStatesLength()),
      this.ball() !== null ? this.ball().unpack() : null,
      this.gameInfo() !== null ? this.gameInfo().unpack() : null,
      this.bb.createObjList(this.tileInformation.bind(this), this.tileInformationLength()),
      this.bb.createObjList(this.teams.bind(this), this.teamsLength())
    );
  }
  unpackTo(_o) {
    _o.players = this.bb.createObjList(this.players.bind(this), this.playersLength());
    _o.boostPadStates = this.bb.createObjList(this.boostPadStates.bind(this), this.boostPadStatesLength());
    _o.ball = this.ball() !== null ? this.ball().unpack() : null;
    _o.gameInfo = this.gameInfo() !== null ? this.gameInfo().unpack() : null;
    _o.tileInformation = this.bb.createObjList(this.tileInformation.bind(this), this.tileInformationLength());
    _o.teams = this.bb.createObjList(this.teams.bind(this), this.teamsLength());
  }
};
var GameTickPacketT = class {
  constructor(players = [], boostPadStates = [], ball = null, gameInfo = null, tileInformation = [], teams = []) {
    this.players = players;
    this.boostPadStates = boostPadStates;
    this.ball = ball;
    this.gameInfo = gameInfo;
    this.tileInformation = tileInformation;
    this.teams = teams;
  }
  pack(builder) {
    const players = GameTickPacket.createPlayersVector(builder, builder.createObjectOffsetList(this.players));
    const boostPadStates = GameTickPacket.createBoostPadStatesVector(builder, builder.createObjectOffsetList(this.boostPadStates));
    const ball = this.ball !== null ? this.ball.pack(builder) : 0;
    const gameInfo = this.gameInfo !== null ? this.gameInfo.pack(builder) : 0;
    const tileInformation = GameTickPacket.createTileInformationVector(builder, builder.createObjectOffsetList(this.tileInformation));
    const teams = GameTickPacket.createTeamsVector(builder, builder.createObjectOffsetList(this.teams));
    GameTickPacket.startGameTickPacket(builder);
    GameTickPacket.addPlayers(builder, players);
    GameTickPacket.addBoostPadStates(builder, boostPadStates);
    GameTickPacket.addBall(builder, ball);
    GameTickPacket.addGameInfo(builder, gameInfo);
    GameTickPacket.addTileInformation(builder, tileInformation);
    GameTickPacket.addTeams(builder, teams);
    return GameTickPacket.endGameTickPacket(builder);
  }
};

// src/flat/rlbot/flat/gravity-option.ts
var GravityOption = /* @__PURE__ */ ((GravityOption2) => {
  GravityOption2[GravityOption2["Default"] = 0] = "Default";
  GravityOption2[GravityOption2["Low"] = 1] = "Low";
  GravityOption2[GravityOption2["High"] = 2] = "High";
  GravityOption2[GravityOption2["Super_High"] = 3] = "Super_High";
  return GravityOption2;
})(GravityOption || {});

// src/flat/rlbot/flat/human-player.ts
var flatbuffers37 = __toESM(require("flatbuffers"));
var HumanPlayer = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsHumanPlayer(bb, obj) {
    return (obj || new HumanPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsHumanPlayer(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers37.SIZE_PREFIX_LENGTH);
    return (obj || new HumanPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startHumanPlayer(builder) {
    builder.startObject(0);
  }
  static endHumanPlayer(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createHumanPlayer(builder) {
    HumanPlayer.startHumanPlayer(builder);
    return HumanPlayer.endHumanPlayer(builder);
  }
  unpack() {
    return new HumanPlayerT();
  }
  unpackTo(_o) {
  }
};
var HumanPlayerT = class {
  constructor() {
  }
  pack(builder) {
    return HumanPlayer.createHumanPlayer(builder);
  }
};

// src/flat/rlbot/flat/loadout-paint.ts
var flatbuffers38 = __toESM(require("flatbuffers"));
var LoadoutPaint = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsLoadoutPaint(bb, obj) {
    return (obj || new LoadoutPaint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsLoadoutPaint(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers38.SIZE_PREFIX_LENGTH);
    return (obj || new LoadoutPaint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  carPaintId() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  decalPaintId() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  wheelsPaintId() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  boostPaintId() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  antennaPaintId() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  hatPaintId() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  trailsPaintId() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  goalExplosionPaintId() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startLoadoutPaint(builder) {
    builder.startObject(8);
  }
  static addCarPaintId(builder, carPaintId) {
    builder.addFieldInt32(0, carPaintId, 0);
  }
  static addDecalPaintId(builder, decalPaintId) {
    builder.addFieldInt32(1, decalPaintId, 0);
  }
  static addWheelsPaintId(builder, wheelsPaintId) {
    builder.addFieldInt32(2, wheelsPaintId, 0);
  }
  static addBoostPaintId(builder, boostPaintId) {
    builder.addFieldInt32(3, boostPaintId, 0);
  }
  static addAntennaPaintId(builder, antennaPaintId) {
    builder.addFieldInt32(4, antennaPaintId, 0);
  }
  static addHatPaintId(builder, hatPaintId) {
    builder.addFieldInt32(5, hatPaintId, 0);
  }
  static addTrailsPaintId(builder, trailsPaintId) {
    builder.addFieldInt32(6, trailsPaintId, 0);
  }
  static addGoalExplosionPaintId(builder, goalExplosionPaintId) {
    builder.addFieldInt32(7, goalExplosionPaintId, 0);
  }
  static endLoadoutPaint(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createLoadoutPaint(builder, carPaintId, decalPaintId, wheelsPaintId, boostPaintId, antennaPaintId, hatPaintId, trailsPaintId, goalExplosionPaintId) {
    LoadoutPaint.startLoadoutPaint(builder);
    LoadoutPaint.addCarPaintId(builder, carPaintId);
    LoadoutPaint.addDecalPaintId(builder, decalPaintId);
    LoadoutPaint.addWheelsPaintId(builder, wheelsPaintId);
    LoadoutPaint.addBoostPaintId(builder, boostPaintId);
    LoadoutPaint.addAntennaPaintId(builder, antennaPaintId);
    LoadoutPaint.addHatPaintId(builder, hatPaintId);
    LoadoutPaint.addTrailsPaintId(builder, trailsPaintId);
    LoadoutPaint.addGoalExplosionPaintId(builder, goalExplosionPaintId);
    return LoadoutPaint.endLoadoutPaint(builder);
  }
  unpack() {
    return new LoadoutPaintT(
      this.carPaintId(),
      this.decalPaintId(),
      this.wheelsPaintId(),
      this.boostPaintId(),
      this.antennaPaintId(),
      this.hatPaintId(),
      this.trailsPaintId(),
      this.goalExplosionPaintId()
    );
  }
  unpackTo(_o) {
    _o.carPaintId = this.carPaintId();
    _o.decalPaintId = this.decalPaintId();
    _o.wheelsPaintId = this.wheelsPaintId();
    _o.boostPaintId = this.boostPaintId();
    _o.antennaPaintId = this.antennaPaintId();
    _o.hatPaintId = this.hatPaintId();
    _o.trailsPaintId = this.trailsPaintId();
    _o.goalExplosionPaintId = this.goalExplosionPaintId();
  }
};
var LoadoutPaintT = class {
  constructor(carPaintId = 0, decalPaintId = 0, wheelsPaintId = 0, boostPaintId = 0, antennaPaintId = 0, hatPaintId = 0, trailsPaintId = 0, goalExplosionPaintId = 0) {
    this.carPaintId = carPaintId;
    this.decalPaintId = decalPaintId;
    this.wheelsPaintId = wheelsPaintId;
    this.boostPaintId = boostPaintId;
    this.antennaPaintId = antennaPaintId;
    this.hatPaintId = hatPaintId;
    this.trailsPaintId = trailsPaintId;
    this.goalExplosionPaintId = goalExplosionPaintId;
  }
  pack(builder) {
    return LoadoutPaint.createLoadoutPaint(
      builder,
      this.carPaintId,
      this.decalPaintId,
      this.wheelsPaintId,
      this.boostPaintId,
      this.antennaPaintId,
      this.hatPaintId,
      this.trailsPaintId,
      this.goalExplosionPaintId
    );
  }
};

// src/flat/rlbot/flat/match-length.ts
var MatchLength = /* @__PURE__ */ ((MatchLength2) => {
  MatchLength2[MatchLength2["Five_Minutes"] = 0] = "Five_Minutes";
  MatchLength2[MatchLength2["Ten_Minutes"] = 1] = "Ten_Minutes";
  MatchLength2[MatchLength2["Twenty_Minutes"] = 2] = "Twenty_Minutes";
  MatchLength2[MatchLength2["Unlimited"] = 3] = "Unlimited";
  return MatchLength2;
})(MatchLength || {});

// src/flat/rlbot/flat/match-settings.ts
var flatbuffers45 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/mutator-settings.ts
var flatbuffers39 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/max-score.ts
var MaxScore = /* @__PURE__ */ ((MaxScore2) => {
  MaxScore2[MaxScore2["Unlimited"] = 0] = "Unlimited";
  MaxScore2[MaxScore2["One_Goal"] = 1] = "One_Goal";
  MaxScore2[MaxScore2["Three_Goals"] = 2] = "Three_Goals";
  MaxScore2[MaxScore2["Five_Goals"] = 3] = "Five_Goals";
  return MaxScore2;
})(MaxScore || {});

// src/flat/rlbot/flat/overtime-option.ts
var OvertimeOption = /* @__PURE__ */ ((OvertimeOption2) => {
  OvertimeOption2[OvertimeOption2["Unlimited"] = 0] = "Unlimited";
  OvertimeOption2[OvertimeOption2["Five_Max_First_Score"] = 1] = "Five_Max_First_Score";
  OvertimeOption2[OvertimeOption2["Five_Max_Random_Team"] = 2] = "Five_Max_Random_Team";
  return OvertimeOption2;
})(OvertimeOption || {});

// src/flat/rlbot/flat/respawn-time-option.ts
var RespawnTimeOption = /* @__PURE__ */ ((RespawnTimeOption2) => {
  RespawnTimeOption2[RespawnTimeOption2["Three_Seconds"] = 0] = "Three_Seconds";
  RespawnTimeOption2[RespawnTimeOption2["Two_Seconds"] = 1] = "Two_Seconds";
  RespawnTimeOption2[RespawnTimeOption2["One_Seconds"] = 2] = "One_Seconds";
  RespawnTimeOption2[RespawnTimeOption2["Disable_Goal_Reset"] = 3] = "Disable_Goal_Reset";
  return RespawnTimeOption2;
})(RespawnTimeOption || {});

// src/flat/rlbot/flat/rumble-option.ts
var RumbleOption = /* @__PURE__ */ ((RumbleOption2) => {
  RumbleOption2[RumbleOption2["No_Rumble"] = 0] = "No_Rumble";
  RumbleOption2[RumbleOption2["Default"] = 1] = "Default";
  RumbleOption2[RumbleOption2["Slow"] = 2] = "Slow";
  RumbleOption2[RumbleOption2["Civilized"] = 3] = "Civilized";
  RumbleOption2[RumbleOption2["Destruction_Derby"] = 4] = "Destruction_Derby";
  RumbleOption2[RumbleOption2["Spring_Loaded"] = 5] = "Spring_Loaded";
  RumbleOption2[RumbleOption2["Spikes_Only"] = 6] = "Spikes_Only";
  RumbleOption2[RumbleOption2["Spike_Rush"] = 7] = "Spike_Rush";
  return RumbleOption2;
})(RumbleOption || {});

// src/flat/rlbot/flat/series-length-option.ts
var SeriesLengthOption = /* @__PURE__ */ ((SeriesLengthOption2) => {
  SeriesLengthOption2[SeriesLengthOption2["Unlimited"] = 0] = "Unlimited";
  SeriesLengthOption2[SeriesLengthOption2["Three_Games"] = 1] = "Three_Games";
  SeriesLengthOption2[SeriesLengthOption2["Five_Games"] = 2] = "Five_Games";
  SeriesLengthOption2[SeriesLengthOption2["Seven_Games"] = 3] = "Seven_Games";
  return SeriesLengthOption2;
})(SeriesLengthOption || {});

// src/flat/rlbot/flat/mutator-settings.ts
var MutatorSettings = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMutatorSettings(bb, obj) {
    return (obj || new MutatorSettings()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMutatorSettings(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers39.SIZE_PREFIX_LENGTH);
    return (obj || new MutatorSettings()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  matchLength() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Five_Minutes */;
  }
  maxScore() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unlimited */;
  }
  overtimeOption() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unlimited */;
  }
  seriesLengthOption() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unlimited */;
  }
  gameSpeedOption() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
  }
  ballMaxSpeedOption() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
  }
  ballTypeOption() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
  }
  ballWeightOption() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
  }
  ballSizeOption() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
  }
  ballBouncinessOption() {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
  }
  boostOption() {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Normal_Boost */;
  }
  rumbleOption() {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* No_Rumble */;
  }
  boostStrengthOption() {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* One */;
  }
  gravityOption() {
    const offset = this.bb.__offset(this.bb_pos, 30);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
  }
  demolishOption() {
    const offset = this.bb.__offset(this.bb_pos, 32);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
  }
  respawnTimeOption() {
    const offset = this.bb.__offset(this.bb_pos, 34);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Three_Seconds */;
  }
  static startMutatorSettings(builder) {
    builder.startObject(16);
  }
  static addMatchLength(builder, matchLength) {
    builder.addFieldInt8(0, matchLength, 0 /* Five_Minutes */);
  }
  static addMaxScore(builder, maxScore) {
    builder.addFieldInt8(1, maxScore, 0 /* Unlimited */);
  }
  static addOvertimeOption(builder, overtimeOption) {
    builder.addFieldInt8(2, overtimeOption, 0 /* Unlimited */);
  }
  static addSeriesLengthOption(builder, seriesLengthOption) {
    builder.addFieldInt8(3, seriesLengthOption, 0 /* Unlimited */);
  }
  static addGameSpeedOption(builder, gameSpeedOption) {
    builder.addFieldInt8(4, gameSpeedOption, 0 /* Default */);
  }
  static addBallMaxSpeedOption(builder, ballMaxSpeedOption) {
    builder.addFieldInt8(5, ballMaxSpeedOption, 0 /* Default */);
  }
  static addBallTypeOption(builder, ballTypeOption) {
    builder.addFieldInt8(6, ballTypeOption, 0 /* Default */);
  }
  static addBallWeightOption(builder, ballWeightOption) {
    builder.addFieldInt8(7, ballWeightOption, 0 /* Default */);
  }
  static addBallSizeOption(builder, ballSizeOption) {
    builder.addFieldInt8(8, ballSizeOption, 0 /* Default */);
  }
  static addBallBouncinessOption(builder, ballBouncinessOption) {
    builder.addFieldInt8(9, ballBouncinessOption, 0 /* Default */);
  }
  static addBoostOption(builder, boostOption) {
    builder.addFieldInt8(10, boostOption, 0 /* Normal_Boost */);
  }
  static addRumbleOption(builder, rumbleOption) {
    builder.addFieldInt8(11, rumbleOption, 0 /* No_Rumble */);
  }
  static addBoostStrengthOption(builder, boostStrengthOption) {
    builder.addFieldInt8(12, boostStrengthOption, 0 /* One */);
  }
  static addGravityOption(builder, gravityOption) {
    builder.addFieldInt8(13, gravityOption, 0 /* Default */);
  }
  static addDemolishOption(builder, demolishOption) {
    builder.addFieldInt8(14, demolishOption, 0 /* Default */);
  }
  static addRespawnTimeOption(builder, respawnTimeOption) {
    builder.addFieldInt8(15, respawnTimeOption, 0 /* Three_Seconds */);
  }
  static endMutatorSettings(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createMutatorSettings(builder, matchLength, maxScore, overtimeOption, seriesLengthOption, gameSpeedOption, ballMaxSpeedOption, ballTypeOption, ballWeightOption, ballSizeOption, ballBouncinessOption, boostOption, rumbleOption, boostStrengthOption, gravityOption, demolishOption, respawnTimeOption) {
    MutatorSettings.startMutatorSettings(builder);
    MutatorSettings.addMatchLength(builder, matchLength);
    MutatorSettings.addMaxScore(builder, maxScore);
    MutatorSettings.addOvertimeOption(builder, overtimeOption);
    MutatorSettings.addSeriesLengthOption(builder, seriesLengthOption);
    MutatorSettings.addGameSpeedOption(builder, gameSpeedOption);
    MutatorSettings.addBallMaxSpeedOption(builder, ballMaxSpeedOption);
    MutatorSettings.addBallTypeOption(builder, ballTypeOption);
    MutatorSettings.addBallWeightOption(builder, ballWeightOption);
    MutatorSettings.addBallSizeOption(builder, ballSizeOption);
    MutatorSettings.addBallBouncinessOption(builder, ballBouncinessOption);
    MutatorSettings.addBoostOption(builder, boostOption);
    MutatorSettings.addRumbleOption(builder, rumbleOption);
    MutatorSettings.addBoostStrengthOption(builder, boostStrengthOption);
    MutatorSettings.addGravityOption(builder, gravityOption);
    MutatorSettings.addDemolishOption(builder, demolishOption);
    MutatorSettings.addRespawnTimeOption(builder, respawnTimeOption);
    return MutatorSettings.endMutatorSettings(builder);
  }
  unpack() {
    return new MutatorSettingsT(
      this.matchLength(),
      this.maxScore(),
      this.overtimeOption(),
      this.seriesLengthOption(),
      this.gameSpeedOption(),
      this.ballMaxSpeedOption(),
      this.ballTypeOption(),
      this.ballWeightOption(),
      this.ballSizeOption(),
      this.ballBouncinessOption(),
      this.boostOption(),
      this.rumbleOption(),
      this.boostStrengthOption(),
      this.gravityOption(),
      this.demolishOption(),
      this.respawnTimeOption()
    );
  }
  unpackTo(_o) {
    _o.matchLength = this.matchLength();
    _o.maxScore = this.maxScore();
    _o.overtimeOption = this.overtimeOption();
    _o.seriesLengthOption = this.seriesLengthOption();
    _o.gameSpeedOption = this.gameSpeedOption();
    _o.ballMaxSpeedOption = this.ballMaxSpeedOption();
    _o.ballTypeOption = this.ballTypeOption();
    _o.ballWeightOption = this.ballWeightOption();
    _o.ballSizeOption = this.ballSizeOption();
    _o.ballBouncinessOption = this.ballBouncinessOption();
    _o.boostOption = this.boostOption();
    _o.rumbleOption = this.rumbleOption();
    _o.boostStrengthOption = this.boostStrengthOption();
    _o.gravityOption = this.gravityOption();
    _o.demolishOption = this.demolishOption();
    _o.respawnTimeOption = this.respawnTimeOption();
  }
};
var MutatorSettingsT = class {
  constructor(matchLength = 0 /* Five_Minutes */, maxScore = 0 /* Unlimited */, overtimeOption = 0 /* Unlimited */, seriesLengthOption = 0 /* Unlimited */, gameSpeedOption = 0 /* Default */, ballMaxSpeedOption = 0 /* Default */, ballTypeOption = 0 /* Default */, ballWeightOption = 0 /* Default */, ballSizeOption = 0 /* Default */, ballBouncinessOption = 0 /* Default */, boostOption = 0 /* Normal_Boost */, rumbleOption = 0 /* No_Rumble */, boostStrengthOption = 0 /* One */, gravityOption = 0 /* Default */, demolishOption = 0 /* Default */, respawnTimeOption = 0 /* Three_Seconds */) {
    this.matchLength = matchLength;
    this.maxScore = maxScore;
    this.overtimeOption = overtimeOption;
    this.seriesLengthOption = seriesLengthOption;
    this.gameSpeedOption = gameSpeedOption;
    this.ballMaxSpeedOption = ballMaxSpeedOption;
    this.ballTypeOption = ballTypeOption;
    this.ballWeightOption = ballWeightOption;
    this.ballSizeOption = ballSizeOption;
    this.ballBouncinessOption = ballBouncinessOption;
    this.boostOption = boostOption;
    this.rumbleOption = rumbleOption;
    this.boostStrengthOption = boostStrengthOption;
    this.gravityOption = gravityOption;
    this.demolishOption = demolishOption;
    this.respawnTimeOption = respawnTimeOption;
  }
  pack(builder) {
    return MutatorSettings.createMutatorSettings(
      builder,
      this.matchLength,
      this.maxScore,
      this.overtimeOption,
      this.seriesLengthOption,
      this.gameSpeedOption,
      this.ballMaxSpeedOption,
      this.ballTypeOption,
      this.ballWeightOption,
      this.ballSizeOption,
      this.ballBouncinessOption,
      this.boostOption,
      this.rumbleOption,
      this.boostStrengthOption,
      this.gravityOption,
      this.demolishOption,
      this.respawnTimeOption
    );
  }
};

// src/flat/rlbot/flat/player-configuration.ts
var flatbuffers44 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/party-member-bot-player.ts
var flatbuffers40 = __toESM(require("flatbuffers"));
var PartyMemberBotPlayer = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPartyMemberBotPlayer(bb, obj) {
    return (obj || new PartyMemberBotPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPartyMemberBotPlayer(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers40.SIZE_PREFIX_LENGTH);
    return (obj || new PartyMemberBotPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startPartyMemberBotPlayer(builder) {
    builder.startObject(0);
  }
  static endPartyMemberBotPlayer(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createPartyMemberBotPlayer(builder) {
    PartyMemberBotPlayer.startPartyMemberBotPlayer(builder);
    return PartyMemberBotPlayer.endPartyMemberBotPlayer(builder);
  }
  unpack() {
    return new PartyMemberBotPlayerT();
  }
  unpackTo(_o) {
  }
};
var PartyMemberBotPlayerT = class {
  constructor() {
  }
  pack(builder) {
    return PartyMemberBotPlayer.createPartyMemberBotPlayer(builder);
  }
};

// src/flat/rlbot/flat/psyonix-bot-player.ts
var flatbuffers41 = __toESM(require("flatbuffers"));
var PsyonixBotPlayer = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPsyonixBotPlayer(bb, obj) {
    return (obj || new PsyonixBotPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPsyonixBotPlayer(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers41.SIZE_PREFIX_LENGTH);
    return (obj || new PsyonixBotPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  botSkill() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  static startPsyonixBotPlayer(builder) {
    builder.startObject(1);
  }
  static addBotSkill(builder, botSkill) {
    builder.addFieldFloat32(0, botSkill, 0);
  }
  static endPsyonixBotPlayer(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createPsyonixBotPlayer(builder, botSkill) {
    PsyonixBotPlayer.startPsyonixBotPlayer(builder);
    PsyonixBotPlayer.addBotSkill(builder, botSkill);
    return PsyonixBotPlayer.endPsyonixBotPlayer(builder);
  }
  unpack() {
    return new PsyonixBotPlayerT(
      this.botSkill()
    );
  }
  unpackTo(_o) {
    _o.botSkill = this.botSkill();
  }
};
var PsyonixBotPlayerT = class {
  constructor(botSkill = 0) {
    this.botSkill = botSkill;
  }
  pack(builder) {
    return PsyonixBotPlayer.createPsyonixBotPlayer(
      builder,
      this.botSkill
    );
  }
};

// src/flat/rlbot/flat/rlbot-player.ts
var flatbuffers42 = __toESM(require("flatbuffers"));
var RLBotPlayer = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsRLBotPlayer(bb, obj) {
    return (obj || new RLBotPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsRLBotPlayer(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers42.SIZE_PREFIX_LENGTH);
    return (obj || new RLBotPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startRLBotPlayer(builder) {
    builder.startObject(0);
  }
  static endRLBotPlayer(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createRLBotPlayer(builder) {
    RLBotPlayer.startRLBotPlayer(builder);
    return RLBotPlayer.endRLBotPlayer(builder);
  }
  unpack() {
    return new RLBotPlayerT();
  }
  unpackTo(_o) {
  }
};
var RLBotPlayerT = class {
  constructor() {
  }
  pack(builder) {
    return RLBotPlayer.createRLBotPlayer(builder);
  }
};

// src/flat/rlbot/flat/player-class.ts
var PlayerClass = /* @__PURE__ */ ((PlayerClass2) => {
  PlayerClass2[PlayerClass2["NONE"] = 0] = "NONE";
  PlayerClass2[PlayerClass2["RLBotPlayer"] = 1] = "RLBotPlayer";
  PlayerClass2[PlayerClass2["HumanPlayer"] = 2] = "HumanPlayer";
  PlayerClass2[PlayerClass2["PsyonixBotPlayer"] = 3] = "PsyonixBotPlayer";
  PlayerClass2[PlayerClass2["PartyMemberBotPlayer"] = 4] = "PartyMemberBotPlayer";
  return PlayerClass2;
})(PlayerClass || {});
function unionToPlayerClass(type, accessor) {
  switch (PlayerClass[type]) {
    case "NONE":
      return null;
    case "RLBotPlayer":
      return accessor(new RLBotPlayer());
    case "HumanPlayer":
      return accessor(new HumanPlayer());
    case "PsyonixBotPlayer":
      return accessor(new PsyonixBotPlayer());
    case "PartyMemberBotPlayer":
      return accessor(new PartyMemberBotPlayer());
    default:
      return null;
  }
}
function unionListToPlayerClass(type, accessor, index) {
  switch (PlayerClass[type]) {
    case "NONE":
      return null;
    case "RLBotPlayer":
      return accessor(index, new RLBotPlayer());
    case "HumanPlayer":
      return accessor(index, new HumanPlayer());
    case "PsyonixBotPlayer":
      return accessor(index, new PsyonixBotPlayer());
    case "PartyMemberBotPlayer":
      return accessor(index, new PartyMemberBotPlayer());
    default:
      return null;
  }
}

// src/flat/rlbot/flat/player-loadout.ts
var flatbuffers43 = __toESM(require("flatbuffers"));
var PlayerLoadout = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPlayerLoadout(bb, obj) {
    return (obj || new PlayerLoadout()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPlayerLoadout(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers43.SIZE_PREFIX_LENGTH);
    return (obj || new PlayerLoadout()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  teamColorId() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  customColorId() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  carId() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  decalId() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  wheelsId() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  boostId() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  antennaId() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  hatId() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  paintFinishId() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  customFinishId() {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  engineAudioId() {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  trailsId() {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  goalExplosionId() {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  loadoutPaint(obj) {
    const offset = this.bb.__offset(this.bb_pos, 30);
    return offset ? (obj || new LoadoutPaint()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  primaryColorLookup(obj) {
    const offset = this.bb.__offset(this.bb_pos, 32);
    return offset ? (obj || new Color()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  secondaryColorLookup(obj) {
    const offset = this.bb.__offset(this.bb_pos, 34);
    return offset ? (obj || new Color()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  static startPlayerLoadout(builder) {
    builder.startObject(16);
  }
  static addTeamColorId(builder, teamColorId) {
    builder.addFieldInt32(0, teamColorId, 0);
  }
  static addCustomColorId(builder, customColorId) {
    builder.addFieldInt32(1, customColorId, 0);
  }
  static addCarId(builder, carId) {
    builder.addFieldInt32(2, carId, 0);
  }
  static addDecalId(builder, decalId) {
    builder.addFieldInt32(3, decalId, 0);
  }
  static addWheelsId(builder, wheelsId) {
    builder.addFieldInt32(4, wheelsId, 0);
  }
  static addBoostId(builder, boostId) {
    builder.addFieldInt32(5, boostId, 0);
  }
  static addAntennaId(builder, antennaId) {
    builder.addFieldInt32(6, antennaId, 0);
  }
  static addHatId(builder, hatId) {
    builder.addFieldInt32(7, hatId, 0);
  }
  static addPaintFinishId(builder, paintFinishId) {
    builder.addFieldInt32(8, paintFinishId, 0);
  }
  static addCustomFinishId(builder, customFinishId) {
    builder.addFieldInt32(9, customFinishId, 0);
  }
  static addEngineAudioId(builder, engineAudioId) {
    builder.addFieldInt32(10, engineAudioId, 0);
  }
  static addTrailsId(builder, trailsId) {
    builder.addFieldInt32(11, trailsId, 0);
  }
  static addGoalExplosionId(builder, goalExplosionId) {
    builder.addFieldInt32(12, goalExplosionId, 0);
  }
  static addLoadoutPaint(builder, loadoutPaintOffset) {
    builder.addFieldOffset(13, loadoutPaintOffset, 0);
  }
  static addPrimaryColorLookup(builder, primaryColorLookupOffset) {
    builder.addFieldOffset(14, primaryColorLookupOffset, 0);
  }
  static addSecondaryColorLookup(builder, secondaryColorLookupOffset) {
    builder.addFieldOffset(15, secondaryColorLookupOffset, 0);
  }
  static endPlayerLoadout(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new PlayerLoadoutT(
      this.teamColorId(),
      this.customColorId(),
      this.carId(),
      this.decalId(),
      this.wheelsId(),
      this.boostId(),
      this.antennaId(),
      this.hatId(),
      this.paintFinishId(),
      this.customFinishId(),
      this.engineAudioId(),
      this.trailsId(),
      this.goalExplosionId(),
      this.loadoutPaint() !== null ? this.loadoutPaint().unpack() : null,
      this.primaryColorLookup() !== null ? this.primaryColorLookup().unpack() : null,
      this.secondaryColorLookup() !== null ? this.secondaryColorLookup().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.teamColorId = this.teamColorId();
    _o.customColorId = this.customColorId();
    _o.carId = this.carId();
    _o.decalId = this.decalId();
    _o.wheelsId = this.wheelsId();
    _o.boostId = this.boostId();
    _o.antennaId = this.antennaId();
    _o.hatId = this.hatId();
    _o.paintFinishId = this.paintFinishId();
    _o.customFinishId = this.customFinishId();
    _o.engineAudioId = this.engineAudioId();
    _o.trailsId = this.trailsId();
    _o.goalExplosionId = this.goalExplosionId();
    _o.loadoutPaint = this.loadoutPaint() !== null ? this.loadoutPaint().unpack() : null;
    _o.primaryColorLookup = this.primaryColorLookup() !== null ? this.primaryColorLookup().unpack() : null;
    _o.secondaryColorLookup = this.secondaryColorLookup() !== null ? this.secondaryColorLookup().unpack() : null;
  }
};
var PlayerLoadoutT = class {
  constructor(teamColorId = 0, customColorId = 0, carId = 0, decalId = 0, wheelsId = 0, boostId = 0, antennaId = 0, hatId = 0, paintFinishId = 0, customFinishId = 0, engineAudioId = 0, trailsId = 0, goalExplosionId = 0, loadoutPaint = null, primaryColorLookup = null, secondaryColorLookup = null) {
    this.teamColorId = teamColorId;
    this.customColorId = customColorId;
    this.carId = carId;
    this.decalId = decalId;
    this.wheelsId = wheelsId;
    this.boostId = boostId;
    this.antennaId = antennaId;
    this.hatId = hatId;
    this.paintFinishId = paintFinishId;
    this.customFinishId = customFinishId;
    this.engineAudioId = engineAudioId;
    this.trailsId = trailsId;
    this.goalExplosionId = goalExplosionId;
    this.loadoutPaint = loadoutPaint;
    this.primaryColorLookup = primaryColorLookup;
    this.secondaryColorLookup = secondaryColorLookup;
  }
  pack(builder) {
    const loadoutPaint = this.loadoutPaint !== null ? this.loadoutPaint.pack(builder) : 0;
    const primaryColorLookup = this.primaryColorLookup !== null ? this.primaryColorLookup.pack(builder) : 0;
    const secondaryColorLookup = this.secondaryColorLookup !== null ? this.secondaryColorLookup.pack(builder) : 0;
    PlayerLoadout.startPlayerLoadout(builder);
    PlayerLoadout.addTeamColorId(builder, this.teamColorId);
    PlayerLoadout.addCustomColorId(builder, this.customColorId);
    PlayerLoadout.addCarId(builder, this.carId);
    PlayerLoadout.addDecalId(builder, this.decalId);
    PlayerLoadout.addWheelsId(builder, this.wheelsId);
    PlayerLoadout.addBoostId(builder, this.boostId);
    PlayerLoadout.addAntennaId(builder, this.antennaId);
    PlayerLoadout.addHatId(builder, this.hatId);
    PlayerLoadout.addPaintFinishId(builder, this.paintFinishId);
    PlayerLoadout.addCustomFinishId(builder, this.customFinishId);
    PlayerLoadout.addEngineAudioId(builder, this.engineAudioId);
    PlayerLoadout.addTrailsId(builder, this.trailsId);
    PlayerLoadout.addGoalExplosionId(builder, this.goalExplosionId);
    PlayerLoadout.addLoadoutPaint(builder, loadoutPaint);
    PlayerLoadout.addPrimaryColorLookup(builder, primaryColorLookup);
    PlayerLoadout.addSecondaryColorLookup(builder, secondaryColorLookup);
    return PlayerLoadout.endPlayerLoadout(builder);
  }
};

// src/flat/rlbot/flat/player-configuration.ts
var PlayerConfiguration = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPlayerConfiguration(bb, obj) {
    return (obj || new PlayerConfiguration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPlayerConfiguration(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers44.SIZE_PREFIX_LENGTH);
    return (obj || new PlayerConfiguration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  varietyType() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* NONE */;
  }
  variety(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
  }
  name(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  team() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  loadout(obj) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? (obj || new PlayerLoadout()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  spawnId() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startPlayerConfiguration(builder) {
    builder.startObject(6);
  }
  static addVarietyType(builder, varietyType) {
    builder.addFieldInt8(0, varietyType, 0 /* NONE */);
  }
  static addVariety(builder, varietyOffset) {
    builder.addFieldOffset(1, varietyOffset, 0);
  }
  static addName(builder, nameOffset) {
    builder.addFieldOffset(2, nameOffset, 0);
  }
  static addTeam(builder, team) {
    builder.addFieldInt32(3, team, 0);
  }
  static addLoadout(builder, loadoutOffset) {
    builder.addFieldOffset(4, loadoutOffset, 0);
  }
  static addSpawnId(builder, spawnId) {
    builder.addFieldInt32(5, spawnId, 0);
  }
  static endPlayerConfiguration(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new PlayerConfigurationT(
      this.varietyType(),
      (() => {
        let temp = unionToPlayerClass(this.varietyType(), this.variety.bind(this));
        if (temp === null) {
          return null;
        }
        return temp.unpack();
      })(),
      this.name(),
      this.team(),
      this.loadout() !== null ? this.loadout().unpack() : null,
      this.spawnId()
    );
  }
  unpackTo(_o) {
    _o.varietyType = this.varietyType();
    _o.variety = (() => {
      let temp = unionToPlayerClass(this.varietyType(), this.variety.bind(this));
      if (temp === null) {
        return null;
      }
      return temp.unpack();
    })();
    _o.name = this.name();
    _o.team = this.team();
    _o.loadout = this.loadout() !== null ? this.loadout().unpack() : null;
    _o.spawnId = this.spawnId();
  }
};
var PlayerConfigurationT = class {
  constructor(varietyType = 0 /* NONE */, variety = null, name = null, team = 0, loadout = null, spawnId = 0) {
    this.varietyType = varietyType;
    this.variety = variety;
    this.name = name;
    this.team = team;
    this.loadout = loadout;
    this.spawnId = spawnId;
  }
  pack(builder) {
    const variety = builder.createObjectOffset(this.variety);
    const name = this.name !== null ? builder.createString(this.name) : 0;
    const loadout = this.loadout !== null ? this.loadout.pack(builder) : 0;
    PlayerConfiguration.startPlayerConfiguration(builder);
    PlayerConfiguration.addVarietyType(builder, this.varietyType);
    PlayerConfiguration.addVariety(builder, variety);
    PlayerConfiguration.addName(builder, name);
    PlayerConfiguration.addTeam(builder, this.team);
    PlayerConfiguration.addLoadout(builder, loadout);
    PlayerConfiguration.addSpawnId(builder, this.spawnId);
    return PlayerConfiguration.endPlayerConfiguration(builder);
  }
};

// src/flat/rlbot/flat/match-settings.ts
var MatchSettings = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMatchSettings(bb, obj) {
    return (obj || new MatchSettings()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMatchSettings(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers45.SIZE_PREFIX_LENGTH);
    return (obj || new MatchSettings()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  playerConfigurations(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new PlayerConfiguration()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  playerConfigurationsLength() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  gameMode() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Soccer */;
  }
  gameMap() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* DFHStadium */;
  }
  skipReplays() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  instantStart() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  mutatorSettings(obj) {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? (obj || new MutatorSettings()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  existingMatchBehavior() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Restart_If_Different */;
  }
  enableLockstep() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  enableRendering() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  enableStateSetting() {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  autoSaveReplay() {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startMatchSettings(builder) {
    builder.startObject(11);
  }
  static addPlayerConfigurations(builder, playerConfigurationsOffset) {
    builder.addFieldOffset(0, playerConfigurationsOffset, 0);
  }
  static createPlayerConfigurationsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startPlayerConfigurationsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addGameMode(builder, gameMode) {
    builder.addFieldInt8(1, gameMode, 0 /* Soccer */);
  }
  static addGameMap(builder, gameMap) {
    builder.addFieldInt8(2, gameMap, 0 /* DFHStadium */);
  }
  static addSkipReplays(builder, skipReplays) {
    builder.addFieldInt8(3, +skipReplays, 0);
  }
  static addInstantStart(builder, instantStart) {
    builder.addFieldInt8(4, +instantStart, 0);
  }
  static addMutatorSettings(builder, mutatorSettingsOffset) {
    builder.addFieldOffset(5, mutatorSettingsOffset, 0);
  }
  static addExistingMatchBehavior(builder, existingMatchBehavior) {
    builder.addFieldInt8(6, existingMatchBehavior, 0 /* Restart_If_Different */);
  }
  static addEnableLockstep(builder, enableLockstep) {
    builder.addFieldInt8(7, +enableLockstep, 0);
  }
  static addEnableRendering(builder, enableRendering) {
    builder.addFieldInt8(8, +enableRendering, 0);
  }
  static addEnableStateSetting(builder, enableStateSetting) {
    builder.addFieldInt8(9, +enableStateSetting, 0);
  }
  static addAutoSaveReplay(builder, autoSaveReplay) {
    builder.addFieldInt8(10, +autoSaveReplay, 0);
  }
  static endMatchSettings(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new MatchSettingsT(
      this.bb.createObjList(this.playerConfigurations.bind(this), this.playerConfigurationsLength()),
      this.gameMode(),
      this.gameMap(),
      this.skipReplays(),
      this.instantStart(),
      this.mutatorSettings() !== null ? this.mutatorSettings().unpack() : null,
      this.existingMatchBehavior(),
      this.enableLockstep(),
      this.enableRendering(),
      this.enableStateSetting(),
      this.autoSaveReplay()
    );
  }
  unpackTo(_o) {
    _o.playerConfigurations = this.bb.createObjList(this.playerConfigurations.bind(this), this.playerConfigurationsLength());
    _o.gameMode = this.gameMode();
    _o.gameMap = this.gameMap();
    _o.skipReplays = this.skipReplays();
    _o.instantStart = this.instantStart();
    _o.mutatorSettings = this.mutatorSettings() !== null ? this.mutatorSettings().unpack() : null;
    _o.existingMatchBehavior = this.existingMatchBehavior();
    _o.enableLockstep = this.enableLockstep();
    _o.enableRendering = this.enableRendering();
    _o.enableStateSetting = this.enableStateSetting();
    _o.autoSaveReplay = this.autoSaveReplay();
  }
};
var MatchSettingsT = class {
  constructor(playerConfigurations = [], gameMode = 0 /* Soccer */, gameMap = 0 /* DFHStadium */, skipReplays = false, instantStart = false, mutatorSettings = null, existingMatchBehavior = 0 /* Restart_If_Different */, enableLockstep = false, enableRendering = false, enableStateSetting = false, autoSaveReplay = false) {
    this.playerConfigurations = playerConfigurations;
    this.gameMode = gameMode;
    this.gameMap = gameMap;
    this.skipReplays = skipReplays;
    this.instantStart = instantStart;
    this.mutatorSettings = mutatorSettings;
    this.existingMatchBehavior = existingMatchBehavior;
    this.enableLockstep = enableLockstep;
    this.enableRendering = enableRendering;
    this.enableStateSetting = enableStateSetting;
    this.autoSaveReplay = autoSaveReplay;
  }
  pack(builder) {
    const playerConfigurations = MatchSettings.createPlayerConfigurationsVector(builder, builder.createObjectOffsetList(this.playerConfigurations));
    const mutatorSettings = this.mutatorSettings !== null ? this.mutatorSettings.pack(builder) : 0;
    MatchSettings.startMatchSettings(builder);
    MatchSettings.addPlayerConfigurations(builder, playerConfigurations);
    MatchSettings.addGameMode(builder, this.gameMode);
    MatchSettings.addGameMap(builder, this.gameMap);
    MatchSettings.addSkipReplays(builder, this.skipReplays);
    MatchSettings.addInstantStart(builder, this.instantStart);
    MatchSettings.addMutatorSettings(builder, mutatorSettings);
    MatchSettings.addExistingMatchBehavior(builder, this.existingMatchBehavior);
    MatchSettings.addEnableLockstep(builder, this.enableLockstep);
    MatchSettings.addEnableRendering(builder, this.enableRendering);
    MatchSettings.addEnableStateSetting(builder, this.enableStateSetting);
    MatchSettings.addAutoSaveReplay(builder, this.autoSaveReplay);
    return MatchSettings.endMatchSettings(builder);
  }
};

// src/flat/rlbot/flat/message-packet.ts
var flatbuffers46 = __toESM(require("flatbuffers"));
var MessagePacket = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMessagePacket(bb, obj) {
    return (obj || new MessagePacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMessagePacket(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers46.SIZE_PREFIX_LENGTH);
    return (obj || new MessagePacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  messages(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new GameMessageWrapper()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  messagesLength() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  gameSeconds() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  frameNum() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startMessagePacket(builder) {
    builder.startObject(3);
  }
  static addMessages(builder, messagesOffset) {
    builder.addFieldOffset(0, messagesOffset, 0);
  }
  static createMessagesVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startMessagesVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addGameSeconds(builder, gameSeconds) {
    builder.addFieldFloat32(1, gameSeconds, 0);
  }
  static addFrameNum(builder, frameNum) {
    builder.addFieldInt32(2, frameNum, 0);
  }
  static endMessagePacket(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createMessagePacket(builder, messagesOffset, gameSeconds, frameNum) {
    MessagePacket.startMessagePacket(builder);
    MessagePacket.addMessages(builder, messagesOffset);
    MessagePacket.addGameSeconds(builder, gameSeconds);
    MessagePacket.addFrameNum(builder, frameNum);
    return MessagePacket.endMessagePacket(builder);
  }
  unpack() {
    return new MessagePacketT(
      this.bb.createObjList(this.messages.bind(this), this.messagesLength()),
      this.gameSeconds(),
      this.frameNum()
    );
  }
  unpackTo(_o) {
    _o.messages = this.bb.createObjList(this.messages.bind(this), this.messagesLength());
    _o.gameSeconds = this.gameSeconds();
    _o.frameNum = this.frameNum();
  }
};
var MessagePacketT = class {
  constructor(messages = [], gameSeconds = 0, frameNum = 0) {
    this.messages = messages;
    this.gameSeconds = gameSeconds;
    this.frameNum = frameNum;
  }
  pack(builder) {
    const messages = MessagePacket.createMessagesVector(builder, builder.createObjectOffsetList(this.messages));
    return MessagePacket.createMessagePacket(
      builder,
      messages,
      this.gameSeconds,
      this.frameNum
    );
  }
};

// src/flat/rlbot/flat/player-input.ts
var flatbuffers47 = __toESM(require("flatbuffers"));
var PlayerInput = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPlayerInput(bb, obj) {
    return (obj || new PlayerInput()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPlayerInput(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers47.SIZE_PREFIX_LENGTH);
    return (obj || new PlayerInput()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  playerIndex() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  controllerState(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new ControllerState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  static startPlayerInput(builder) {
    builder.startObject(2);
  }
  static addPlayerIndex(builder, playerIndex) {
    builder.addFieldInt32(0, playerIndex, 0);
  }
  static addControllerState(builder, controllerStateOffset) {
    builder.addFieldOffset(1, controllerStateOffset, 0);
  }
  static endPlayerInput(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new PlayerInputT(
      this.playerIndex(),
      this.controllerState() !== null ? this.controllerState().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.playerIndex = this.playerIndex();
    _o.controllerState = this.controllerState() !== null ? this.controllerState().unpack() : null;
  }
};
var PlayerInputT = class {
  constructor(playerIndex = 0, controllerState = null) {
    this.playerIndex = playerIndex;
    this.controllerState = controllerState;
  }
  pack(builder) {
    const controllerState = this.controllerState !== null ? this.controllerState.pack(builder) : 0;
    PlayerInput.startPlayerInput(builder);
    PlayerInput.addPlayerIndex(builder, this.playerIndex);
    PlayerInput.addControllerState(builder, controllerState);
    return PlayerInput.endPlayerInput(builder);
  }
};

// src/flat/rlbot/flat/player-rigid-body-state.ts
var flatbuffers48 = __toESM(require("flatbuffers"));
var PlayerRigidBodyState = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPlayerRigidBodyState(bb, obj) {
    return (obj || new PlayerRigidBodyState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPlayerRigidBodyState(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers48.SIZE_PREFIX_LENGTH);
    return (obj || new PlayerRigidBodyState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  state(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new RigidBodyState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  input(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new ControllerState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  static startPlayerRigidBodyState(builder) {
    builder.startObject(2);
  }
  static addState(builder, stateOffset) {
    builder.addFieldOffset(0, stateOffset, 0);
  }
  static addInput(builder, inputOffset) {
    builder.addFieldOffset(1, inputOffset, 0);
  }
  static endPlayerRigidBodyState(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new PlayerRigidBodyStateT(
      this.state() !== null ? this.state().unpack() : null,
      this.input() !== null ? this.input().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.state = this.state() !== null ? this.state().unpack() : null;
    _o.input = this.input() !== null ? this.input().unpack() : null;
  }
};
var PlayerRigidBodyStateT = class {
  constructor(state = null, input = null) {
    this.state = state;
    this.input = input;
  }
  pack(builder) {
    const state = this.state !== null ? this.state.pack(builder) : 0;
    const input = this.input !== null ? this.input.pack(builder) : 0;
    PlayerRigidBodyState.startPlayerRigidBodyState(builder);
    PlayerRigidBodyState.addState(builder, state);
    PlayerRigidBodyState.addInput(builder, input);
    return PlayerRigidBodyState.endPlayerRigidBodyState(builder);
  }
};

// src/flat/rlbot/flat/quick-chat.ts
var flatbuffers49 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/quick-chat-selection.ts
var QuickChatSelection = /* @__PURE__ */ ((QuickChatSelection2) => {
  QuickChatSelection2[QuickChatSelection2["Information_IGotIt"] = 0] = "Information_IGotIt";
  QuickChatSelection2[QuickChatSelection2["Information_NeedBoost"] = 1] = "Information_NeedBoost";
  QuickChatSelection2[QuickChatSelection2["Information_TakeTheShot"] = 2] = "Information_TakeTheShot";
  QuickChatSelection2[QuickChatSelection2["Information_Defending"] = 3] = "Information_Defending";
  QuickChatSelection2[QuickChatSelection2["Information_GoForIt"] = 4] = "Information_GoForIt";
  QuickChatSelection2[QuickChatSelection2["Information_Centering"] = 5] = "Information_Centering";
  QuickChatSelection2[QuickChatSelection2["Information_AllYours"] = 6] = "Information_AllYours";
  QuickChatSelection2[QuickChatSelection2["Information_InPosition"] = 7] = "Information_InPosition";
  QuickChatSelection2[QuickChatSelection2["Information_Incoming"] = 8] = "Information_Incoming";
  QuickChatSelection2[QuickChatSelection2["Compliments_NiceShot"] = 9] = "Compliments_NiceShot";
  QuickChatSelection2[QuickChatSelection2["Compliments_GreatPass"] = 10] = "Compliments_GreatPass";
  QuickChatSelection2[QuickChatSelection2["Compliments_Thanks"] = 11] = "Compliments_Thanks";
  QuickChatSelection2[QuickChatSelection2["Compliments_WhatASave"] = 12] = "Compliments_WhatASave";
  QuickChatSelection2[QuickChatSelection2["Compliments_NiceOne"] = 13] = "Compliments_NiceOne";
  QuickChatSelection2[QuickChatSelection2["Compliments_WhatAPlay"] = 14] = "Compliments_WhatAPlay";
  QuickChatSelection2[QuickChatSelection2["Compliments_GreatClear"] = 15] = "Compliments_GreatClear";
  QuickChatSelection2[QuickChatSelection2["Compliments_NiceBlock"] = 16] = "Compliments_NiceBlock";
  QuickChatSelection2[QuickChatSelection2["Reactions_OMG"] = 17] = "Reactions_OMG";
  QuickChatSelection2[QuickChatSelection2["Reactions_Noooo"] = 18] = "Reactions_Noooo";
  QuickChatSelection2[QuickChatSelection2["Reactions_Wow"] = 19] = "Reactions_Wow";
  QuickChatSelection2[QuickChatSelection2["Reactions_CloseOne"] = 20] = "Reactions_CloseOne";
  QuickChatSelection2[QuickChatSelection2["Reactions_NoWay"] = 21] = "Reactions_NoWay";
  QuickChatSelection2[QuickChatSelection2["Reactions_HolyCow"] = 22] = "Reactions_HolyCow";
  QuickChatSelection2[QuickChatSelection2["Reactions_Whew"] = 23] = "Reactions_Whew";
  QuickChatSelection2[QuickChatSelection2["Reactions_Siiiick"] = 24] = "Reactions_Siiiick";
  QuickChatSelection2[QuickChatSelection2["Reactions_Calculated"] = 25] = "Reactions_Calculated";
  QuickChatSelection2[QuickChatSelection2["Reactions_Savage"] = 26] = "Reactions_Savage";
  QuickChatSelection2[QuickChatSelection2["Reactions_Okay"] = 27] = "Reactions_Okay";
  QuickChatSelection2[QuickChatSelection2["Apologies_Cursing"] = 28] = "Apologies_Cursing";
  QuickChatSelection2[QuickChatSelection2["Apologies_NoProblem"] = 29] = "Apologies_NoProblem";
  QuickChatSelection2[QuickChatSelection2["Apologies_Whoops"] = 30] = "Apologies_Whoops";
  QuickChatSelection2[QuickChatSelection2["Apologies_Sorry"] = 31] = "Apologies_Sorry";
  QuickChatSelection2[QuickChatSelection2["Apologies_MyBad"] = 32] = "Apologies_MyBad";
  QuickChatSelection2[QuickChatSelection2["Apologies_Oops"] = 33] = "Apologies_Oops";
  QuickChatSelection2[QuickChatSelection2["Apologies_MyFault"] = 34] = "Apologies_MyFault";
  QuickChatSelection2[QuickChatSelection2["PostGame_Gg"] = 35] = "PostGame_Gg";
  QuickChatSelection2[QuickChatSelection2["PostGame_WellPlayed"] = 36] = "PostGame_WellPlayed";
  QuickChatSelection2[QuickChatSelection2["PostGame_ThatWasFun"] = 37] = "PostGame_ThatWasFun";
  QuickChatSelection2[QuickChatSelection2["PostGame_Rematch"] = 38] = "PostGame_Rematch";
  QuickChatSelection2[QuickChatSelection2["PostGame_OneMoreGame"] = 39] = "PostGame_OneMoreGame";
  QuickChatSelection2[QuickChatSelection2["PostGame_WhatAGame"] = 40] = "PostGame_WhatAGame";
  QuickChatSelection2[QuickChatSelection2["PostGame_NiceMoves"] = 41] = "PostGame_NiceMoves";
  QuickChatSelection2[QuickChatSelection2["PostGame_EverybodyDance"] = 42] = "PostGame_EverybodyDance";
  QuickChatSelection2[QuickChatSelection2["MaxPysonixQuickChatPresets"] = 43] = "MaxPysonixQuickChatPresets";
  QuickChatSelection2[QuickChatSelection2["Custom_Toxic_WasteCPU"] = 44] = "Custom_Toxic_WasteCPU";
  QuickChatSelection2[QuickChatSelection2["Custom_Toxic_GitGut"] = 45] = "Custom_Toxic_GitGut";
  QuickChatSelection2[QuickChatSelection2["Custom_Toxic_DeAlloc"] = 46] = "Custom_Toxic_DeAlloc";
  QuickChatSelection2[QuickChatSelection2["Custom_Toxic_404NoSkill"] = 47] = "Custom_Toxic_404NoSkill";
  QuickChatSelection2[QuickChatSelection2["Custom_Toxic_CatchVirus"] = 48] = "Custom_Toxic_CatchVirus";
  QuickChatSelection2[QuickChatSelection2["Custom_Useful_Passing"] = 49] = "Custom_Useful_Passing";
  QuickChatSelection2[QuickChatSelection2["Custom_Useful_Faking"] = 50] = "Custom_Useful_Faking";
  QuickChatSelection2[QuickChatSelection2["Custom_Useful_Demoing"] = 51] = "Custom_Useful_Demoing";
  QuickChatSelection2[QuickChatSelection2["Custom_Useful_Bumping"] = 52] = "Custom_Useful_Bumping";
  QuickChatSelection2[QuickChatSelection2["Custom_Compliments_TinyChances"] = 53] = "Custom_Compliments_TinyChances";
  QuickChatSelection2[QuickChatSelection2["Custom_Compliments_SkillLevel"] = 54] = "Custom_Compliments_SkillLevel";
  QuickChatSelection2[QuickChatSelection2["Custom_Compliments_proud"] = 55] = "Custom_Compliments_proud";
  QuickChatSelection2[QuickChatSelection2["Custom_Compliments_GC"] = 56] = "Custom_Compliments_GC";
  QuickChatSelection2[QuickChatSelection2["Custom_Compliments_Pro"] = 57] = "Custom_Compliments_Pro";
  QuickChatSelection2[QuickChatSelection2["Custom_Excuses_Lag"] = 58] = "Custom_Excuses_Lag";
  QuickChatSelection2[QuickChatSelection2["Custom_Excuses_GhostInputs"] = 59] = "Custom_Excuses_GhostInputs";
  QuickChatSelection2[QuickChatSelection2["Custom_Excuses_Rigged"] = 60] = "Custom_Excuses_Rigged";
  QuickChatSelection2[QuickChatSelection2["Custom_Toxic_MafiaPlays"] = 61] = "Custom_Toxic_MafiaPlays";
  QuickChatSelection2[QuickChatSelection2["Custom_Exclamation_Yeet"] = 62] = "Custom_Exclamation_Yeet";
  return QuickChatSelection2;
})(QuickChatSelection || {});

// src/flat/rlbot/flat/quick-chat.ts
var QuickChat = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsQuickChat(bb, obj) {
    return (obj || new QuickChat()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsQuickChat(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers49.SIZE_PREFIX_LENGTH);
    return (obj || new QuickChat()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  quickChatSelection() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Information_IGotIt */;
  }
  playerIndex() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  teamOnly() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  messageIndex() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  timeStamp() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
  }
  static startQuickChat(builder) {
    builder.startObject(5);
  }
  static addQuickChatSelection(builder, quickChatSelection) {
    builder.addFieldInt8(0, quickChatSelection, 0 /* Information_IGotIt */);
  }
  static addPlayerIndex(builder, playerIndex) {
    builder.addFieldInt32(1, playerIndex, 0);
  }
  static addTeamOnly(builder, teamOnly) {
    builder.addFieldInt8(2, +teamOnly, 0);
  }
  static addMessageIndex(builder, messageIndex) {
    builder.addFieldInt32(3, messageIndex, 0);
  }
  static addTimeStamp(builder, timeStamp) {
    builder.addFieldFloat32(4, timeStamp, 0);
  }
  static endQuickChat(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishQuickChatBuffer(builder, offset) {
    builder.finish(offset);
  }
  static finishSizePrefixedQuickChatBuffer(builder, offset) {
    builder.finish(offset, void 0, true);
  }
  static createQuickChat(builder, quickChatSelection, playerIndex, teamOnly, messageIndex, timeStamp) {
    QuickChat.startQuickChat(builder);
    QuickChat.addQuickChatSelection(builder, quickChatSelection);
    QuickChat.addPlayerIndex(builder, playerIndex);
    QuickChat.addTeamOnly(builder, teamOnly);
    QuickChat.addMessageIndex(builder, messageIndex);
    QuickChat.addTimeStamp(builder, timeStamp);
    return QuickChat.endQuickChat(builder);
  }
  unpack() {
    return new QuickChatT(
      this.quickChatSelection(),
      this.playerIndex(),
      this.teamOnly(),
      this.messageIndex(),
      this.timeStamp()
    );
  }
  unpackTo(_o) {
    _o.quickChatSelection = this.quickChatSelection();
    _o.playerIndex = this.playerIndex();
    _o.teamOnly = this.teamOnly();
    _o.messageIndex = this.messageIndex();
    _o.timeStamp = this.timeStamp();
  }
};
var QuickChatT = class {
  constructor(quickChatSelection = 0 /* Information_IGotIt */, playerIndex = 0, teamOnly = false, messageIndex = 0, timeStamp = 0) {
    this.quickChatSelection = quickChatSelection;
    this.playerIndex = playerIndex;
    this.teamOnly = teamOnly;
    this.messageIndex = messageIndex;
    this.timeStamp = timeStamp;
  }
  pack(builder) {
    return QuickChat.createQuickChat(
      builder,
      this.quickChatSelection,
      this.playerIndex,
      this.teamOnly,
      this.messageIndex,
      this.timeStamp
    );
  }
};

// src/flat/rlbot/flat/quick-chat-messages.ts
var flatbuffers50 = __toESM(require("flatbuffers"));
var QuickChatMessages = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsQuickChatMessages(bb, obj) {
    return (obj || new QuickChatMessages()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsQuickChatMessages(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers50.SIZE_PREFIX_LENGTH);
    return (obj || new QuickChatMessages()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  messages(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new QuickChat()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  messagesLength() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startQuickChatMessages(builder) {
    builder.startObject(1);
  }
  static addMessages(builder, messagesOffset) {
    builder.addFieldOffset(0, messagesOffset, 0);
  }
  static createMessagesVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startMessagesVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endQuickChatMessages(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createQuickChatMessages(builder, messagesOffset) {
    QuickChatMessages.startQuickChatMessages(builder);
    QuickChatMessages.addMessages(builder, messagesOffset);
    return QuickChatMessages.endQuickChatMessages(builder);
  }
  unpack() {
    return new QuickChatMessagesT(
      this.bb.createObjList(this.messages.bind(this), this.messagesLength())
    );
  }
  unpackTo(_o) {
    _o.messages = this.bb.createObjList(this.messages.bind(this), this.messagesLength());
  }
};
var QuickChatMessagesT = class {
  constructor(messages = []) {
    this.messages = messages;
  }
  pack(builder) {
    const messages = QuickChatMessages.createMessagesVector(builder, builder.createObjectOffsetList(this.messages));
    return QuickChatMessages.createQuickChatMessages(
      builder,
      messages
    );
  }
};

// src/flat/rlbot/flat/ready-message.ts
var flatbuffers51 = __toESM(require("flatbuffers"));
var ReadyMessage = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsReadyMessage(bb, obj) {
    return (obj || new ReadyMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsReadyMessage(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers51.SIZE_PREFIX_LENGTH);
    return (obj || new ReadyMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  wantsBallPredictions() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  wantsQuickChat() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  wantsGameMessages() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startReadyMessage(builder) {
    builder.startObject(3);
  }
  static addWantsBallPredictions(builder, wantsBallPredictions) {
    builder.addFieldInt8(0, +wantsBallPredictions, 0);
  }
  static addWantsQuickChat(builder, wantsQuickChat) {
    builder.addFieldInt8(1, +wantsQuickChat, 0);
  }
  static addWantsGameMessages(builder, wantsGameMessages) {
    builder.addFieldInt8(2, +wantsGameMessages, 0);
  }
  static endReadyMessage(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createReadyMessage(builder, wantsBallPredictions, wantsQuickChat, wantsGameMessages) {
    ReadyMessage.startReadyMessage(builder);
    ReadyMessage.addWantsBallPredictions(builder, wantsBallPredictions);
    ReadyMessage.addWantsQuickChat(builder, wantsQuickChat);
    ReadyMessage.addWantsGameMessages(builder, wantsGameMessages);
    return ReadyMessage.endReadyMessage(builder);
  }
  unpack() {
    return new ReadyMessageT(
      this.wantsBallPredictions(),
      this.wantsQuickChat(),
      this.wantsGameMessages()
    );
  }
  unpackTo(_o) {
    _o.wantsBallPredictions = this.wantsBallPredictions();
    _o.wantsQuickChat = this.wantsQuickChat();
    _o.wantsGameMessages = this.wantsGameMessages();
  }
};
var ReadyMessageT = class {
  constructor(wantsBallPredictions = false, wantsQuickChat = false, wantsGameMessages = false) {
    this.wantsBallPredictions = wantsBallPredictions;
    this.wantsQuickChat = wantsQuickChat;
    this.wantsGameMessages = wantsGameMessages;
  }
  pack(builder) {
    return ReadyMessage.createReadyMessage(
      builder,
      this.wantsBallPredictions,
      this.wantsQuickChat,
      this.wantsGameMessages
    );
  }
};

// src/flat/rlbot/flat/render-group.ts
var flatbuffers53 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/render-message.ts
var flatbuffers52 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/render-type.ts
var RenderType = /* @__PURE__ */ ((RenderType3) => {
  RenderType3[RenderType3["DrawLine2D"] = 1] = "DrawLine2D";
  RenderType3[RenderType3["DrawLine3D"] = 2] = "DrawLine3D";
  RenderType3[RenderType3["DrawLine2D_3D"] = 3] = "DrawLine2D_3D";
  RenderType3[RenderType3["DrawRect2D"] = 4] = "DrawRect2D";
  RenderType3[RenderType3["DrawRect3D"] = 5] = "DrawRect3D";
  RenderType3[RenderType3["DrawString2D"] = 6] = "DrawString2D";
  RenderType3[RenderType3["DrawString3D"] = 7] = "DrawString3D";
  RenderType3[RenderType3["DrawCenteredRect3D"] = 8] = "DrawCenteredRect3D";
  return RenderType3;
})(RenderType || {});

// src/flat/rlbot/flat/render-message.ts
var RenderMessage = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsRenderMessage(bb, obj) {
    return (obj || new RenderMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsRenderMessage(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers52.SIZE_PREFIX_LENGTH);
    return (obj || new RenderMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  renderType() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 1 /* DrawLine2D */;
  }
  color(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Color()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  start(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  end(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  scaleX() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 1;
  }
  scaleY() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 1;
  }
  text(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  isFilled() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startRenderMessage(builder) {
    builder.startObject(8);
  }
  static addRenderType(builder, renderType) {
    builder.addFieldInt8(0, renderType, 1 /* DrawLine2D */);
  }
  static addColor(builder, colorOffset) {
    builder.addFieldOffset(1, colorOffset, 0);
  }
  static addStart(builder, startOffset) {
    builder.addFieldStruct(2, startOffset, 0);
  }
  static addEnd(builder, endOffset) {
    builder.addFieldStruct(3, endOffset, 0);
  }
  static addScaleX(builder, scaleX) {
    builder.addFieldInt32(4, scaleX, 1);
  }
  static addScaleY(builder, scaleY) {
    builder.addFieldInt32(5, scaleY, 1);
  }
  static addText(builder, textOffset) {
    builder.addFieldOffset(6, textOffset, 0);
  }
  static addIsFilled(builder, isFilled) {
    builder.addFieldInt8(7, +isFilled, 0);
  }
  static endRenderMessage(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new RenderMessageT(
      this.renderType(),
      this.color() !== null ? this.color().unpack() : null,
      this.start() !== null ? this.start().unpack() : null,
      this.end() !== null ? this.end().unpack() : null,
      this.scaleX(),
      this.scaleY(),
      this.text(),
      this.isFilled()
    );
  }
  unpackTo(_o) {
    _o.renderType = this.renderType();
    _o.color = this.color() !== null ? this.color().unpack() : null;
    _o.start = this.start() !== null ? this.start().unpack() : null;
    _o.end = this.end() !== null ? this.end().unpack() : null;
    _o.scaleX = this.scaleX();
    _o.scaleY = this.scaleY();
    _o.text = this.text();
    _o.isFilled = this.isFilled();
  }
};
var RenderMessageT = class {
  constructor(renderType = 1 /* DrawLine2D */, color = null, start = null, end = null, scaleX = 1, scaleY = 1, text = null, isFilled = false) {
    this.renderType = renderType;
    this.color = color;
    this.start = start;
    this.end = end;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.text = text;
    this.isFilled = isFilled;
  }
  pack(builder) {
    const color = this.color !== null ? this.color.pack(builder) : 0;
    const text = this.text !== null ? builder.createString(this.text) : 0;
    RenderMessage.startRenderMessage(builder);
    RenderMessage.addRenderType(builder, this.renderType);
    RenderMessage.addColor(builder, color);
    RenderMessage.addStart(builder, this.start !== null ? this.start.pack(builder) : 0);
    RenderMessage.addEnd(builder, this.end !== null ? this.end.pack(builder) : 0);
    RenderMessage.addScaleX(builder, this.scaleX);
    RenderMessage.addScaleY(builder, this.scaleY);
    RenderMessage.addText(builder, text);
    RenderMessage.addIsFilled(builder, this.isFilled);
    return RenderMessage.endRenderMessage(builder);
  }
};

// src/flat/rlbot/flat/render-group.ts
var RenderGroup = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsRenderGroup(bb, obj) {
    return (obj || new RenderGroup()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsRenderGroup(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers53.SIZE_PREFIX_LENGTH);
    return (obj || new RenderGroup()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  renderMessages(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new RenderMessage()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  renderMessagesLength() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  id() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startRenderGroup(builder) {
    builder.startObject(2);
  }
  static addRenderMessages(builder, renderMessagesOffset) {
    builder.addFieldOffset(0, renderMessagesOffset, 0);
  }
  static createRenderMessagesVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startRenderMessagesVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addId(builder, id) {
    builder.addFieldInt32(1, id, 0);
  }
  static endRenderGroup(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createRenderGroup(builder, renderMessagesOffset, id) {
    RenderGroup.startRenderGroup(builder);
    RenderGroup.addRenderMessages(builder, renderMessagesOffset);
    RenderGroup.addId(builder, id);
    return RenderGroup.endRenderGroup(builder);
  }
  unpack() {
    return new RenderGroupT(
      this.bb.createObjList(this.renderMessages.bind(this), this.renderMessagesLength()),
      this.id()
    );
  }
  unpackTo(_o) {
    _o.renderMessages = this.bb.createObjList(this.renderMessages.bind(this), this.renderMessagesLength());
    _o.id = this.id();
  }
};
var RenderGroupT = class {
  constructor(renderMessages = [], id = 0) {
    this.renderMessages = renderMessages;
    this.id = id;
  }
  pack(builder) {
    const renderMessages = RenderGroup.createRenderMessagesVector(builder, builder.createObjectOffsetList(this.renderMessages));
    return RenderGroup.createRenderGroup(
      builder,
      renderMessages,
      this.id
    );
  }
};

// src/flat/rlbot/flat/rigid-body-tick.ts
var flatbuffers54 = __toESM(require("flatbuffers"));
var RigidBodyTick = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsRigidBodyTick(bb, obj) {
    return (obj || new RigidBodyTick()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsRigidBodyTick(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers54.SIZE_PREFIX_LENGTH);
    return (obj || new RigidBodyTick()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  ball(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new BallRigidBodyState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  players(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new PlayerRigidBodyState()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  playersLength() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startRigidBodyTick(builder) {
    builder.startObject(2);
  }
  static addBall(builder, ballOffset) {
    builder.addFieldOffset(0, ballOffset, 0);
  }
  static addPlayers(builder, playersOffset) {
    builder.addFieldOffset(1, playersOffset, 0);
  }
  static createPlayersVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startPlayersVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endRigidBodyTick(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createRigidBodyTick(builder, ballOffset, playersOffset) {
    RigidBodyTick.startRigidBodyTick(builder);
    RigidBodyTick.addBall(builder, ballOffset);
    RigidBodyTick.addPlayers(builder, playersOffset);
    return RigidBodyTick.endRigidBodyTick(builder);
  }
  unpack() {
    return new RigidBodyTickT(
      this.ball() !== null ? this.ball().unpack() : null,
      this.bb.createObjList(this.players.bind(this), this.playersLength())
    );
  }
  unpackTo(_o) {
    _o.ball = this.ball() !== null ? this.ball().unpack() : null;
    _o.players = this.bb.createObjList(this.players.bind(this), this.playersLength());
  }
};
var RigidBodyTickT = class {
  constructor(ball = null, players = []) {
    this.ball = ball;
    this.players = players;
  }
  pack(builder) {
    const ball = this.ball !== null ? this.ball.pack(builder) : 0;
    const players = RigidBodyTick.createPlayersVector(builder, builder.createObjectOffsetList(this.players));
    return RigidBodyTick.createRigidBodyTick(
      builder,
      ball,
      players
    );
  }
};

// src/flat/rlbot/flat/tiny-ball.ts
var flatbuffers55 = __toESM(require("flatbuffers"));
var TinyBall = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsTinyBall(bb, obj) {
    return (obj || new TinyBall()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsTinyBall(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers55.SIZE_PREFIX_LENGTH);
    return (obj || new TinyBall()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  location(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  velocity(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  static startTinyBall(builder) {
    builder.startObject(2);
  }
  static addLocation(builder, locationOffset) {
    builder.addFieldStruct(0, locationOffset, 0);
  }
  static addVelocity(builder, velocityOffset) {
    builder.addFieldStruct(1, velocityOffset, 0);
  }
  static endTinyBall(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new TinyBallT(
      this.location() !== null ? this.location().unpack() : null,
      this.velocity() !== null ? this.velocity().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.location = this.location() !== null ? this.location().unpack() : null;
    _o.velocity = this.velocity() !== null ? this.velocity().unpack() : null;
  }
};
var TinyBallT = class {
  constructor(location = null, velocity = null) {
    this.location = location;
    this.velocity = velocity;
  }
  pack(builder) {
    TinyBall.startTinyBall(builder);
    TinyBall.addLocation(builder, this.location !== null ? this.location.pack(builder) : 0);
    TinyBall.addVelocity(builder, this.velocity !== null ? this.velocity.pack(builder) : 0);
    return TinyBall.endTinyBall(builder);
  }
};

// src/flat/rlbot/flat/tiny-packet.ts
var flatbuffers57 = __toESM(require("flatbuffers"));

// src/flat/rlbot/flat/tiny-player.ts
var flatbuffers56 = __toESM(require("flatbuffers"));
var TinyPlayer = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsTinyPlayer(bb, obj) {
    return (obj || new TinyPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsTinyPlayer(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers56.SIZE_PREFIX_LENGTH);
    return (obj || new TinyPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  location(obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  rotation(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Rotator()).__init(this.bb_pos + offset, this.bb) : null;
  }
  velocity(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb) : null;
  }
  hasWheelContact() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  isSupersonic() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  team() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  boost() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startTinyPlayer(builder) {
    builder.startObject(7);
  }
  static addLocation(builder, locationOffset) {
    builder.addFieldStruct(0, locationOffset, 0);
  }
  static addRotation(builder, rotationOffset) {
    builder.addFieldStruct(1, rotationOffset, 0);
  }
  static addVelocity(builder, velocityOffset) {
    builder.addFieldStruct(2, velocityOffset, 0);
  }
  static addHasWheelContact(builder, hasWheelContact) {
    builder.addFieldInt8(3, +hasWheelContact, 0);
  }
  static addIsSupersonic(builder, isSupersonic) {
    builder.addFieldInt8(4, +isSupersonic, 0);
  }
  static addTeam(builder, team) {
    builder.addFieldInt32(5, team, 0);
  }
  static addBoost(builder, boost) {
    builder.addFieldInt32(6, boost, 0);
  }
  static endTinyPlayer(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new TinyPlayerT(
      this.location() !== null ? this.location().unpack() : null,
      this.rotation() !== null ? this.rotation().unpack() : null,
      this.velocity() !== null ? this.velocity().unpack() : null,
      this.hasWheelContact(),
      this.isSupersonic(),
      this.team(),
      this.boost()
    );
  }
  unpackTo(_o) {
    _o.location = this.location() !== null ? this.location().unpack() : null;
    _o.rotation = this.rotation() !== null ? this.rotation().unpack() : null;
    _o.velocity = this.velocity() !== null ? this.velocity().unpack() : null;
    _o.hasWheelContact = this.hasWheelContact();
    _o.isSupersonic = this.isSupersonic();
    _o.team = this.team();
    _o.boost = this.boost();
  }
};
var TinyPlayerT = class {
  constructor(location = null, rotation = null, velocity = null, hasWheelContact = false, isSupersonic = false, team = 0, boost = 0) {
    this.location = location;
    this.rotation = rotation;
    this.velocity = velocity;
    this.hasWheelContact = hasWheelContact;
    this.isSupersonic = isSupersonic;
    this.team = team;
    this.boost = boost;
  }
  pack(builder) {
    TinyPlayer.startTinyPlayer(builder);
    TinyPlayer.addLocation(builder, this.location !== null ? this.location.pack(builder) : 0);
    TinyPlayer.addRotation(builder, this.rotation !== null ? this.rotation.pack(builder) : 0);
    TinyPlayer.addVelocity(builder, this.velocity !== null ? this.velocity.pack(builder) : 0);
    TinyPlayer.addHasWheelContact(builder, this.hasWheelContact);
    TinyPlayer.addIsSupersonic(builder, this.isSupersonic);
    TinyPlayer.addTeam(builder, this.team);
    TinyPlayer.addBoost(builder, this.boost);
    return TinyPlayer.endTinyPlayer(builder);
  }
};

// src/flat/rlbot/flat/tiny-packet.ts
var TinyPacket = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsTinyPacket(bb, obj) {
    return (obj || new TinyPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsTinyPacket(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers57.SIZE_PREFIX_LENGTH);
    return (obj || new TinyPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  players(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new TinyPlayer()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  playersLength() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  ball(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new TinyBall()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  static startTinyPacket(builder) {
    builder.startObject(2);
  }
  static addPlayers(builder, playersOffset) {
    builder.addFieldOffset(0, playersOffset, 0);
  }
  static createPlayersVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startPlayersVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addBall(builder, ballOffset) {
    builder.addFieldOffset(1, ballOffset, 0);
  }
  static endTinyPacket(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new TinyPacketT(
      this.bb.createObjList(this.players.bind(this), this.playersLength()),
      this.ball() !== null ? this.ball().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.players = this.bb.createObjList(this.players.bind(this), this.playersLength());
    _o.ball = this.ball() !== null ? this.ball().unpack() : null;
  }
};
var TinyPacketT = class {
  constructor(players = [], ball = null) {
    this.players = players;
    this.ball = ball;
  }
  pack(builder) {
    const players = TinyPacket.createPlayersVector(builder, builder.createObjectOffsetList(this.players));
    const ball = this.ball !== null ? this.ball.pack(builder) : 0;
    TinyPacket.startTinyPacket(builder);
    TinyPacket.addPlayers(builder, players);
    TinyPacket.addBall(builder, ball);
    return TinyPacket.endTinyPacket(builder);
  }
};

// src/ControllerManager.ts
var flatbuffers59 = __toESM(require("flatbuffers"));

// src/utils.ts
var import_colors = __toESM(require_lib());
var flatbuffers58 = __toESM(require("flatbuffers"));
var Logger = class {
  constructor(name) {
    this.enabled = true;
    this.name = name;
  }
  log(...args) {
    if (!this.enabled)
      return;
    let cats = args.splice(0, args.length - 1);
    let message = args[0];
    cats.unshift("");
    let catstring = cats.reduce((total, next) => {
      return total + "[" + next.cyan + "] ";
    });
    console.log(
      `[${("Easy".green + "RLBot".blue).bold}] [${this.name.magenta}] ${catstring}${message.white}`
    );
  }
};
function Uint16to8Array(array16) {
  let result = new Uint8Array(
    array16.buffer,
    array16.byteOffset,
    array16.byteLength
  );
  return result;
}
function encodeFlat(messageTypeInt, flatArray) {
  let messageType = new Uint16Array(1);
  messageType.set([messageTypeInt]);
  let messageLen = new Uint16Array(1);
  messageLen.set([flatArray.length]);
  var mergedArray = new Uint8Array(4 + flatArray.length);
  mergedArray.set(Uint16to8Array(messageType).reverse(), 0);
  mergedArray.set(Uint16to8Array(messageLen).reverse(), 2);
  mergedArray.set(flatArray, 4);
  return mergedArray;
}
function decodeFlat(bytes) {
  let rawBytes = bytes.subarray(4);
  let rawDataType = Uint8Array.from(bytes).subarray(0, 2);
  let dataType = (rawDataType[0] & 255) << 8 | rawDataType[1] & 255;
  let buf = new flatbuffers58.ByteBuffer(rawBytes);
  let root;
  try {
    switch (dataType) {
      case 1:
        root = GameTickPacket.getRootAsGameTickPacket(buf);
        break;
      case 2:
        root = FieldInfo.getRootAsFieldInfo(buf);
        break;
      case 3:
        root = MatchSettings.getRootAsMatchSettings(buf);
        break;
      case 4:
        throw "Invalid type for decoding '4'";
        break;
      case 5:
        throw "Invalid type for decoding '5'";
        break;
      case 6:
        throw "Invalid type for decoding '6'";
        break;
      case 7:
        throw "Invalid type for decoding '7'";
        break;
      case 8:
        throw "Invalid type for decoding '8'";
        break;
      case 9:
        root = QuickChat.getRootAsQuickChat(buf);
        break;
      case 10:
        root = BallPrediction.getRootAsBallPrediction(buf);
        break;
      case 11:
        throw "Invalid type for decoding '11'";
        break;
      case 12:
        root = MessagePacket.getRootAsMessagePacket(buf);
        break;
      default:
        throw "Unknown type";
        break;
    }
  } catch (e) {
    throw "";
  }
  return { root, type: dataType };
}
function chunkSplitter(bigChunk) {
  let chunks = [];
  for (let i = 0; i < bigChunk.length; ) {
    let chunkLeft = bigChunk.subarray(i);
    let rawDataSize = Uint8Array.from(chunkLeft).subarray(2, 4);
    let dataSize = (rawDataSize[0] & 255) << 8 | rawDataSize[1] & 255;
    chunks.push(chunkLeft.subarray(0, 4 + dataSize));
    i += 4 + dataSize;
  }
  return chunks;
}

// src/ControllerManager.ts
var Controller = class {
  constructor() {
    this.throttle = 0;
    this.steer = 0;
    this.pitch = 0;
    this.roll = 0;
    this.yaw = 0;
    this.boost = false;
    this.jump = false;
    this.handbrake = false;
    this.useItem = false;
  }
};
var ControllerManager = class {
  constructor(client) {
    this.client = client;
  }
  sendInput(controller) {
    let controllerState = ControllerState;
    let playerInput = PlayerInput;
    let builder = new flatbuffers59.Builder(1024);
    controllerState.startControllerState(builder);
    controllerState.addThrottle(builder, controller.throttle);
    controllerState.addSteer(builder, controller.steer);
    controllerState.addPitch(builder, controller.pitch);
    controllerState.addYaw(builder, controller.yaw);
    controllerState.addRoll(builder, controller.roll);
    controllerState.addBoost(builder, controller.boost);
    controllerState.addJump(builder, controller.jump);
    controllerState.addHandbrake(builder, controller.handbrake);
    controllerState.addUseItem(builder, controller.useItem);
    let finishedControllerState = controllerState.endControllerState(builder);
    playerInput.startPlayerInput(builder);
    playerInput.addPlayerIndex(builder, this.client.botIndex);
    playerInput.addControllerState(builder, finishedControllerState);
    let finishedPlayerInput = controllerState.endControllerState(builder);
    builder.finish(finishedPlayerInput);
    let buf = builder.asUint8Array();
    if (this.client.ws == null)
      return;
    this.client.ws.write(encodeFlat(4, buf));
  }
};

// src/RenderManager.ts
var crypto = __toESM(require("crypto"));
var flatbuffers61 = __toESM(require("flatbuffers"));

// src/GameState.ts
var flatbuffers60 = __toESM(require("flatbuffers"));
var {
  RotatorPartial: RotatorPartial2,
  DesiredPhysics: DesiredPhysics2,
  DesiredBallState: DesiredBallState2,
  DesiredCarState: DesiredCarState2,
  DesiredBoostState: DesiredBoostState2,
  DesiredGameInfoState: DesiredGameInfoState2,
  DesiredGameState: DesiredGameState2,
  Float: Float2,
  Vector3Partial: Vector3Partial2
} = rlbot_generated_exports;
var Vector32 = class {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  fromFlat(flat) {
    this.x = flat.x();
    this.y = flat.y();
    this.z = flat.z();
    return this;
  }
  convertToFlat(builder) {
    if (this.x == null && this.y == null && this.z == null)
      return null;
    return Vector3.createVector3(builder, this.x, this.y, this.z);
  }
  convertToFlatPartial(builder) {
    if (this.x == null && this.y == null && this.z == null)
      return null;
    Vector3Partial2.startVector3Partial(builder);
    if (this.x != null)
      Vector3Partial2.addX(builder, Float2.createFloat(builder, this.x));
    if (this.y != null)
      Vector3Partial2.addY(builder, Float2.createFloat(builder, this.y));
    if (this.z != null)
      Vector3Partial2.addZ(builder, Float2.createFloat(builder, this.z));
    return Vector3Partial2.endVector3Partial(builder);
  }
};
var Rotator2 = class {
  constructor(pitch = 0, yaw = 0, roll = 0) {
    this.pitch = pitch;
    this.yaw = yaw;
    this.roll = roll;
  }
  fromFlat(flat) {
    if (flat == null)
      return this;
    this.pitch = flat.pitch();
    this.yaw = flat.yaw();
    this.roll = flat.roll();
    return this;
  }
  convertToFlat(builder) {
    if (this.pitch == null && this.yaw == null && this.roll == null)
      return null;
    RotatorPartial2.startRotatorPartial(builder);
    if (this.pitch != null)
      RotatorPartial2.addPitch(builder, Float2.createFloat(builder, this.pitch));
    if (this.yaw != null)
      RotatorPartial2.addYaw(builder, Float2.createFloat(builder, this.yaw));
    if (this.roll != null)
      RotatorPartial2.addRoll(builder, Float2.createFloat(builder, this.roll));
    return RotatorPartial2.endRotatorPartial(builder);
  }
};
var Physics2 = class {
  constructor(location = new Vector32(), rotation = new Rotator2(), velocity = new Vector32(), angularVelocity = new Vector32()) {
    this.location = location;
    this.rotation = rotation;
    this.velocity = velocity;
    this.angularVelocity = angularVelocity;
  }
  fromFlat(flat) {
    this.location = new Vector32().fromFlat(flat.location());
    this.rotation = new Rotator2().fromFlat(flat.rotation());
    this.velocity = new Vector32().fromFlat(flat.velocity());
    this.angularVelocity = new Vector32().fromFlat(flat.angularVelocity());
    return this;
  }
  convertToFlat(builder) {
    let locationFlat = this.location ? this.location.convertToFlatPartial(builder) : null;
    let rotationFlat = this.rotation ? this.rotation.convertToFlat(builder) : null;
    let velocityFlat = this.velocity ? this.velocity.convertToFlatPartial(builder) : null;
    let angularVelocityFlat = this.angularVelocity ? this.angularVelocity.convertToFlatPartial(builder) : null;
    if (locationFlat == null && rotationFlat == null && velocityFlat == null && angularVelocityFlat == null)
      return null;
    DesiredPhysics2.startDesiredPhysics(builder);
    if (locationFlat != null)
      DesiredPhysics2.addLocation(builder, locationFlat);
    if (rotationFlat != null)
      DesiredPhysics2.addRotation(builder, rotationFlat);
    if (velocityFlat != null)
      DesiredPhysics2.addVelocity(builder, velocityFlat);
    if (angularVelocityFlat != null)
      DesiredPhysics2.addAngularVelocity(builder, angularVelocityFlat);
    return DesiredPhysics2.endDesiredPhysics(builder);
  }
};
var BallState = class {
  constructor(physics) {
    this.physics = physics;
  }
  convertToFlat(builder) {
    let physicsFlat = this.physics ? this.physics.convertToFlat(builder) : null;
    if (physicsFlat == null)
      return null;
    else {
      DesiredBallState2.startDesiredBallState(builder);
      DesiredBallState2.addPhysics(builder, physicsFlat);
      return DesiredBallState2.endDesiredBallState(builder);
    }
  }
};
var CarState = class {
  constructor(physics, boostAmount, jumped, doubleJumped) {
    this.physics = physics;
    this.boostAmount = boostAmount;
    this.jumped = jumped;
    this.doubleJumped = doubleJumped;
  }
  convertToFlat(builder) {
    let physicsFlat = this.physics ? this.physics.convertToFlat(builder) : null;
    DesiredCarState2.startDesiredCarState(builder);
    if (physicsFlat != null)
      DesiredCarState2.addPhysics(builder, physicsFlat);
    if (this.boostAmount != null)
      DesiredCarState2.addBoostAmount(builder, this.boostAmount);
    if (this.jumped != null)
      DesiredCarState2.addJumped(builder, Number(this.jumped));
    if (this.doubleJumped != null)
      DesiredCarState2.addDoubleJumped(builder, Number(this.doubleJumped));
    return DesiredCarState2.endDesiredCarState(builder);
  }
};
var BoostState = class {
  constructor(respawnTime) {
    this.respawnTime = respawnTime;
  }
  convertToFlat(builder) {
    DesiredBoostState2.startDesiredBoostState(builder);
    if (this.respawnTime != null)
      DesiredBoostState2.addRespawnTime(builder, this.respawnTime);
    return DesiredBoostState2.endDesiredBoostState(builder);
  }
};
var GameInfoState = class {
  constructor(worldGravityZ, gameSpeed) {
    this.worldGravityZ = worldGravityZ;
    this.gameSpeed = gameSpeed;
  }
  convertToFlat(builder) {
    DesiredGameInfoState2.startDesiredGameInfoState(builder);
    if (this.worldGravityZ != null)
      DesiredGameInfoState2.addWorldGravityZ(builder, this.worldGravityZ);
    if (this.gameSpeed != null)
      DesiredGameInfoState2.addGameSpeed(builder, this.gameSpeed);
    return DesiredGameInfoState2.endDesiredGameInfoState(builder);
  }
};
var GameState = class {
  constructor(ballState, carStates, boostStates, gameInfoState) {
    this.ballState = ballState;
    this.carStates = carStates;
    this.boostStates = boostStates;
    this.gameInfoState = gameInfoState;
  }
  convertToFlat(builder) {
    if (builder == null)
      builder = new flatbuffers60.Builder(0);
    let ballStateFlat = this.ballState ? this.ballState.convertToFlat(builder) : null;
    let carStates = this.carStates ? [] : null;
    if (carStates != null) {
      for (let carState of this.carStates) {
        carStates.push(carState ? carState.convertToFlat(builder) : null);
      }
    }
    let carStatesFlat = carStates ? DesiredGameState2.createCarStatesVector(builder, carStates) : null;
    let boostStates = this.boostStates ? [] : null;
    if (boostStates != null) {
      for (let boostState of this.boostStates) {
        boostStates.push(boostState ? boostState.convertToFlat(builder) : null);
      }
    }
    let boostStatesFlat = boostStates ? DesiredGameState2.createBoostStatesVector(builder, boostStates) : null;
    let gameInfoStateFlat = this.gameInfoState ? this.gameInfoState.convertToFlat(builder) : null;
    DesiredGameState2.startDesiredGameState(builder);
    if (ballStateFlat != null)
      DesiredGameState2.addBallState(builder, ballStateFlat);
    if (carStatesFlat != null)
      DesiredGameState2.addCarStates(builder, carStatesFlat);
    if (boostStatesFlat != null)
      DesiredGameState2.addBoostStates(builder, boostStatesFlat);
    if (gameInfoStateFlat != null)
      DesiredGameState2.addGameInfoState(builder, gameInfoStateFlat);
    return DesiredGameState2.endDesiredGameState(builder);
  }
};

// src/RenderManager.ts
var { RenderMessage: RenderMessage2, RenderType: RenderType2, RenderGroup: RenderGroup2 } = rlbot_generated_exports;
var maxInt = 1337;
var Color2 = class {
  constructor(alpha, red, green, blue) {
    this.alpha = alpha;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  convertToFlat(builder) {
    Color.startColor(builder);
    Color.addA(builder, this.alpha);
    Color.addR(builder, this.red);
    Color.addG(builder, this.green);
    Color.addB(builder, this.blue);
    return Color.endColor(builder);
  }
};
var RenderManager = class {
  constructor(botClient) {
    this.client = botClient;
    this.builder = null;
    this.index = this.client.botIndex;
    this.Color = Color2;
    this.renderList = [];
    this.groupID = "";
  }
  beginRendering(groupID) {
    this.builder = new flatbuffers61.Builder(0);
    this.renderList = [];
    if (groupID)
      this.groupID = groupID;
  }
  endRendering() {
    if (this.groupID == void 0)
      this.groupID = "default";
    const hash = crypto.createHash("sha256");
    hash.update(this.groupID + this.client.botIndex);
    let groupIDHashed = parseInt(hash.digest("hex"), 16) % maxInt;
    if (this.builder == null)
      return;
    let messages = RenderGroup2.createRenderMessagesVector(
      this.builder,
      this.renderList
    );
    RenderGroup2.startRenderGroup(this.builder);
    RenderGroup2.addId(this.builder, groupIDHashed);
    RenderGroup2.addRenderMessages(this.builder, messages);
    let result = RenderGroup2.endRenderGroup(this.builder);
    this.builder.finish(result);
    let buf = this.builder.asUint8Array();
    if (this.client.ws == null)
      return;
    this.client.ws.write(encodeFlat(8, buf));
  }
  drawString2D(x, y, scaleX, scaleY, text, color) {
    if (this.builder == null)
      return;
    let textFlat = this.builder.createString(text);
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage2.startRenderMessage(this.builder);
    RenderMessage2.addRenderType(this.builder, RenderType2.DrawString2D);
    RenderMessage2.addColor(this.builder, colorFlat);
    RenderMessage2.addStart(
      this.builder,
      Vector3.createVector3(this.builder, x, y, 0)
    );
    RenderMessage2.addScaleX(this.builder, scaleX);
    RenderMessage2.addScaleY(this.builder, scaleY);
    RenderMessage2.addText(this.builder, textFlat);
    this.renderList.push(RenderMessage2.endRenderMessage(this.builder));
  }
  drawString3D(vector, scaleX, scaleY, text, color) {
    if (this.builder == null)
      return;
    let textFlat = this.builder.createString(text);
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage2.startRenderMessage(this.builder);
    RenderMessage2.addRenderType(this.builder, RenderType2.DrawString3D);
    RenderMessage2.addColor(this.builder, colorFlat);
    RenderMessage2.addStart(
      this.builder,
      vector.convertToFlat(this.builder) ?? 0
    );
    RenderMessage2.addScaleX(this.builder, scaleX);
    RenderMessage2.addScaleY(this.builder, scaleY);
    RenderMessage2.addText(this.builder, textFlat);
    this.renderList.push(RenderMessage2.endRenderMessage(this.builder));
  }
  drawLine2D_3D(x, y, end, color) {
    if (this.builder == null)
      return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage2.startRenderMessage(this.builder);
    RenderMessage2.addRenderType(this.builder, RenderType2.DrawLine2D_3D);
    RenderMessage2.addStart(
      this.builder,
      Vector3.createVector3(this.builder, x, y, 0)
    );
    RenderMessage2.addEnd(this.builder, end.convertToFlat(this.builder) ?? 0);
    RenderMessage2.addColor(this.builder, colorFlat ?? 0);
    this.renderList.push(RenderMessage2.endRenderMessage(this.builder));
  }
  drawLine2D(startX, startY, endX, endY, color) {
    if (this.builder == null)
      return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage2.startRenderMessage(this.builder);
    RenderMessage2.addRenderType(this.builder, RenderType2.DrawLine2D);
    RenderMessage2.addStart(
      this.builder,
      new Vector32(startX, startY, 0).convertToFlat(this.builder) ?? 0
    );
    RenderMessage2.addEnd(
      this.builder,
      new Vector32(endX, endY, 0).convertToFlat(this.builder) ?? 0
    );
    RenderMessage2.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage2.endRenderMessage(this.builder));
  }
  drawLine3D(start, end, color) {
    if (this.builder == null)
      return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage2.startRenderMessage(this.builder);
    RenderMessage2.addRenderType(this.builder, RenderType2.DrawLine3D);
    RenderMessage2.addStart(
      this.builder,
      start.convertToFlat(this.builder) ?? 0
    );
    RenderMessage2.addEnd(this.builder, end.convertToFlat(this.builder) ?? 0);
    RenderMessage2.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage2.endRenderMessage(this.builder));
  }
  drawRect2D(x, y, width, height, color) {
    if (this.builder == null)
      return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage2.startRenderMessage(this.builder);
    RenderMessage2.addRenderType(this.builder, RenderType2.DrawRect2D);
    RenderMessage2.addStart(
      this.builder,
      Vector3.createVector3(this.builder, x, y, 0)
    );
    RenderMessage2.addScaleX(this.builder, width);
    RenderMessage2.addScaleY(this.builder, height);
    RenderMessage2.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage2.endRenderMessage(this.builder));
  }
  drawRect3D(vector, width, height, color, centered) {
    if (this.builder == null)
      return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage2.startRenderMessage(this.builder);
    RenderMessage2.addRenderType(
      this.builder,
      centered ? RenderType2.DrawCenteredRect3D : RenderType2.DrawRect3D
    );
    RenderMessage2.addStart(
      this.builder,
      vector.convertToFlat(this.builder) ?? 0
    );
    RenderMessage2.addScaleX(this.builder, width);
    RenderMessage2.addScaleY(this.builder, height);
    RenderMessage2.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage2.endRenderMessage(this.builder));
  }
  black() {
    return new this.Color(255, 0, 0, 0);
  }
  white() {
    return new this.Color(255, 255, 255, 255);
  }
  gray() {
    return new this.Color(255, 128, 128, 128);
  }
  blue() {
    return new this.Color(255, 0, 0, 255);
  }
  red() {
    return new this.Color(255, 255, 0, 0);
  }
  green() {
    return new this.Color(255, 0, 128, 0);
  }
  lime() {
    return new this.Color(255, 0, 255, 0);
  }
  yellow() {
    return new this.Color(255, 255, 255, 0);
  }
  orange() {
    return new this.Color(255, 225, 128, 0);
  }
  cyan() {
    return new this.Color(255, 0, 255, 255);
  }
  pink() {
    return new this.Color(255, 255, 0, 255);
  }
  purple() {
    return new this.Color(255, 128, 0, 128);
  }
  teal() {
    return new this.Color(255, 0, 128, 128);
  }
};

// src/BotClient.ts
var BotClient = class {
  constructor(botIndex, ws = null) {
    this.renderer = new RenderManager(this);
    this.controller = new ControllerManager(this);
    this.GameTickPacketRate = 0;
    if (botIndex == null)
      throw new Error("Give bot index");
    this.botIndex = botIndex;
    this.internalName = `BOT-${this.botIndex}`;
    this.logger = new Logger(this.internalName);
    this.standalone = ws == null;
    if (this.standalone) {
      const port = 23234;
      const host = "localhost";
      this.ws = new Net.Socket();
      this.logger.log("Socket", "Connecting...".yellow);
      this.ws.connect({ port, host }, () => {
        this.start();
      });
    } else {
      this.ws = ws || new Net.Socket();
      this.start();
    }
    this.readyMessageAccepted = false;
    this.latestFieldInfo = null;
    this.latestBallPrediction = null;
    this.latestMatchSettings = null;
    this.ws.on("data", (f) => {
      let chunks = chunkSplitter(f);
      for (let chunk of chunks) {
        this.messageHandler(chunk);
      }
    });
  }
  onReady() {
  }
  getOutput(gameTickPacket, fieldInfo, ballPrediction, matchSettings) {
  }
  onGameTickPacket(gameTickPacket) {
  }
  onFieldInfo(fieldInfo) {
  }
  onMatchSettings(matchSettings) {
  }
  onQuickChat(quickChat) {
  }
  onBallPrediction(ballPrediction) {
  }
  messageHandler(raw) {
    if (!this.readyMessageAccepted) {
      this.readyMessageAccepted = true;
      this.logger.log(
        "Socket",
        "Server accepted ready message and is now sending GameTickPackets".green
      );
      this.onReady();
    }
    if (this.ws === null)
      return;
    let parsedLoad;
    try {
      parsedLoad = decodeFlat(raw);
    } catch {
      return this.logger.log(
        "Socket",
        "Recived incorrect data, socket is unstable."
      );
    }
    let cleanLoad = parsedLoad.root.unpack();
    if (cleanLoad instanceof GameTickPacketT) {
      this.GameTickPacketRate++;
      setTimeout(
        (() => {
          this.GameTickPacketRate--;
        }).bind(this),
        1e3
      );
      this.onGameTickPacket(cleanLoad);
      this.getOutput(
        cleanLoad,
        this.latestFieldInfo,
        this.latestBallPrediction,
        this.latestMatchSettings
      );
    }
    if (cleanLoad instanceof FieldInfoT) {
      this.latestFieldInfo = cleanLoad;
      this.onFieldInfo(cleanLoad);
    }
    if (cleanLoad instanceof MatchSettingsT) {
      this.latestMatchSettings = cleanLoad;
      this.onMatchSettings(cleanLoad);
    }
    if (cleanLoad instanceof QuickChatT) {
      this.onQuickChat(cleanLoad);
    }
    if (cleanLoad instanceof BallPredictionT) {
      this.latestBallPrediction = cleanLoad;
      this.onBallPrediction(cleanLoad);
    }
  }
  setGameState(newGameState) {
    let builder = new flatbuffers62.Builder(1024);
    let finishedGameState = newGameState.convertToFlat(builder);
    builder.finish(finishedGameState);
    let buf = builder.asUint8Array();
    if (this.ws == null)
      return;
    this.ws.write(encodeFlat(7, buf));
  }
  setMatchSettings(newMatchSettings) {
    this.logger.log(
      "MatchSettings",
      "This feature is not supported yet. Support is comming when json support is comming to RLBot."
    );
  }
  sendQuickChat(QuickChatSelection2, teamOnly = false) {
    let quickChat = QuickChat;
    let builder = new flatbuffers62.Builder(1024);
    quickChat.startQuickChat(builder);
    quickChat.addQuickChatSelection(builder, QuickChatSelection2);
    quickChat.addPlayerIndex(builder, this.botIndex);
    quickChat.addTeamOnly(builder, teamOnly);
    let quickchatOffset = quickChat.endQuickChat(builder);
    builder.finish(quickchatOffset);
    let buf = builder.asUint8Array();
    if (this.ws == null)
      return;
    this.ws.write(encodeFlat(9, buf));
  }
  kill() {
    this.ws = null;
  }
  async start() {
    if (this.standalone)
      this.logger.log("Socket", "Connected".green);
    let builder = new flatbuffers62.Builder(1024);
    ReadyMessage.startReadyMessage(builder);
    ReadyMessage.addWantsBallPredictions(builder, true);
    ReadyMessage.addWantsGameMessages(builder, true);
    ReadyMessage.addWantsQuickChat(builder, true);
    let readyMessage = ReadyMessage.endReadyMessage(builder);
    builder.finish(readyMessage);
    let readyMsgBuf = builder.asUint8Array();
    if (this.ws == null)
      return;
    this.ws.write(encodeFlat(11, readyMsgBuf));
  }
};

// src/BotManager.ts
var import_colors3 = __toESM(require_lib());
var Net2 = __toESM(require("net"));
var BotManager = class {
  constructor(BotClass, agentPort) {
    this.logger = new Logger("Manager");
    this.Bot = BotClass;
    this.bots = {};
    this.agentPort = agentPort;
    this.agentIP = "localhost";
    const port = 23234;
    const host = "localhost";
    this.ws = new Net2.Socket();
    this.logger.log("Socket", "Connecting...".yellow);
    this.ws.connect({ port, host }, () => {
      this.logger.log("Socket", "Connected".green);
      this.start();
    });
    this.ws.on("error", () => {
      this.logger.log(
        "Socket",
        "Error when connecting to RLBot, make sure RLBot is running.".red
      );
      process.exit(0);
    });
  }
  async start() {
    let server = Net2.createServer((socket) => {
      socket.setEncoding("ascii");
      socket.on("data", (data) => {
        let message = data.toString().split("\n");
        let type = message[0];
        let index = message[1];
        switch (type) {
          case "add":
            if (this.bots[index] != void 0)
              return;
            this.bots[index] = new this.Bot(Number(index), this.ws);
            this.bots[index].logger.enabled = false;
            this.logger.log(
              "AgentConnection",
              ("Added bot with index " + index).green
            );
            break;
          case "remove":
            if (!this.bots[index])
              return;
            this.bots[index].kill();
            delete this.bots[index];
            this.logger.log(
              "AgentConnection",
              ("Removed bot with index " + index).red
            );
            break;
          default:
            break;
        }
      });
    });
    let logger = this.logger;
    server.listen(this.agentPort, this.agentIP, function() {
      logger.log("AgentConnection", "Listening to data from Agent");
      server.on("close", function() {
        logger.log("AgentConnection", "Connection closed");
      });
      server.on("error", function(error) {
        logger.log("AgentConnection", "Error: " + error);
      });
    });
    server.on("error", (e) => {
      if (e.code == "EADDRINUSE") {
        this.logger.log(
          "AgentConnection",
          "Connection closed, port already in use"
        );
        throw new Error(`Port is already in use: ${this.agentIP}`);
      }
    });
  }
};

// src/QuickChats.ts
var QuickChats_default = {
  information: {
    IGotIt: 0,
    NeedBoost: 1,
    TakeTheShot: 2,
    Defending: 3,
    GoForIt: 4,
    Centering: 5,
    AllYours: 6,
    InPosition: 7,
    Incoming: 8,
    NiceShot: 9,
    GreatPass: 10,
    Thanks: 11,
    WhatASave: 12,
    NiceOne: 13,
    WhatAPlay: 14,
    GreatClear: 15,
    NiceBlock: 16
  },
  compliments: {
    NiceShot: 9,
    GreatPass: 10,
    Thanks: 11,
    WhatASave: 12,
    NiceOne: 13,
    WhatAPlay: 14,
    GreatClear: 15,
    NiceBlock: 16
  },
  reactions: {
    OMG: 17,
    Noooo: 18,
    Wow: 19,
    CloseOne: 20,
    NoWay: 21,
    HolyCow: 22,
    Whew: 23,
    Siiiick: 24,
    Calculated: 25,
    Savage: 26,
    Okay: 27
  },
  apologies: {
    Cursing: 28,
    NoProblem: 29,
    Whoops: 30,
    Sorry: 31,
    MyBad: 32,
    Oops: 33,
    MyFault: 34
  },
  postGame: {
    Gg: 35,
    WellPlayed: 36,
    ThatWasFun: 37,
    Rematch: 38,
    OneMoreGame: 39,
    WhatAGame: 40,
    NiceMoves: 41,
    EverybodyDance: 42
  },
  custom: {
    Toxic_WasteCPU: 44,
    Toxic_GitGut: 45,
    Toxic_DeAlloc: 46,
    Toxic_404NoSkill: 47,
    Toxic_CatchVirus: 48,
    Useful_Passing: 49,
    Useful_Faking: 50,
    Useful_Demoing: 51,
    Useful_Bumping: 52,
    Compliments_TinyChances: 53,
    Compliments_SkillLevel: 54,
    Compliments_proud: 55,
    Compliments_GC: 56,
    Compliments_Pro: 57,
    Custom_Excuses_Lag: 58,
    Custom_Excuses_GhostInputs: 59,
    Custom_Excuses_Rigged: 60,
    Custom_Toxic_MafiaPlays: 61,
    Custom_Exclamation_Yeet: 62
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BallInfoT,
  BallPredictionT,
  BallRigidBodyStateT,
  BallState,
  BoolT,
  BoostPadStateT,
  BoostPadT,
  BoostState,
  BoxShapeT,
  CarState,
  Client,
  Color,
  ColorT,
  ConsoleCommandT,
  Controller,
  ControllerManager,
  ControllerStateT,
  CylinderShapeT,
  DesiredBallStateT,
  DesiredBoostStateT,
  DesiredCarStateT,
  DesiredGameInfoStateT,
  DesiredGameStateT,
  DesiredPhysicsT,
  DropShotBallInfoT,
  DropshotTileT,
  FieldInfoT,
  FloatT,
  GameInfoState,
  GameInfoT,
  GameMessageWrapperT,
  GameState,
  GameTickPacketT,
  GoalInfoT,
  HumanPlayerT,
  LoadoutPaintT,
  Manager,
  MatchSettingsT,
  MessagePacketT,
  MutatorSettingsT,
  PartyMemberBotPlayerT,
  Physics,
  PhysicsT,
  PlayerConfigurationT,
  PlayerInfoT,
  PlayerInputChangeT,
  PlayerInputT,
  PlayerLoadoutT,
  PlayerRigidBodyStateT,
  PlayerSpectateT,
  PlayerStatEventT,
  PredictionSliceT,
  PsyonixBotPlayerT,
  QuaternionT,
  QuickChatMessagesT,
  QuickChatT,
  RLBotPlayerT,
  ReadyMessageT,
  RenderGroupT,
  RenderManager,
  RenderMessageT,
  RigidBodyStateT,
  RigidBodyTickT,
  Rotator,
  RotatorPartialT,
  RotatorT,
  ScoreInfoT,
  SphereShapeT,
  TeamInfoT,
  TinyBallT,
  TinyPacketT,
  TinyPlayerT,
  TouchT,
  Vector3,
  quickChats
});
//# sourceMappingURL=index.js.map
