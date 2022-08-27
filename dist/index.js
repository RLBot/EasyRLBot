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

// node_modules/flatbuffers/js/flatbuffers.js
var require_flatbuffers = __commonJS({
  "node_modules/flatbuffers/js/flatbuffers.js"(exports) {
    var flatbuffers7 = {};
    flatbuffers7.Offset;
    flatbuffers7.Table;
    flatbuffers7.SIZEOF_SHORT = 2;
    flatbuffers7.SIZEOF_INT = 4;
    flatbuffers7.FILE_IDENTIFIER_LENGTH = 4;
    flatbuffers7.SIZE_PREFIX_LENGTH = 4;
    flatbuffers7.Encoding = {
      UTF8_BYTES: 1,
      UTF16_STRING: 2
    };
    flatbuffers7.int32 = new Int32Array(2);
    flatbuffers7.float32 = new Float32Array(flatbuffers7.int32.buffer);
    flatbuffers7.float64 = new Float64Array(flatbuffers7.int32.buffer);
    flatbuffers7.isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
    flatbuffers7.Long = function(low, high) {
      this.low = low | 0;
      this.high = high | 0;
    };
    flatbuffers7.Long.create = function(low, high) {
      return low == 0 && high == 0 ? flatbuffers7.Long.ZERO : new flatbuffers7.Long(low, high);
    };
    flatbuffers7.Long.prototype.toFloat64 = function() {
      return (this.low >>> 0) + this.high * 4294967296;
    };
    flatbuffers7.Long.prototype.equals = function(other) {
      return this.low == other.low && this.high == other.high;
    };
    flatbuffers7.Long.ZERO = new flatbuffers7.Long(0, 0);
    flatbuffers7.Builder = function(opt_initial_size) {
      if (!opt_initial_size) {
        var initial_size = 1024;
      } else {
        var initial_size = opt_initial_size;
      }
      this.bb = flatbuffers7.ByteBuffer.allocate(initial_size);
      this.space = initial_size;
      this.minalign = 1;
      this.vtable = null;
      this.vtable_in_use = 0;
      this.isNested = false;
      this.object_start = 0;
      this.vtables = [];
      this.vector_num_elems = 0;
      this.force_defaults = false;
    };
    flatbuffers7.Builder.prototype.clear = function() {
      this.bb.clear();
      this.space = this.bb.capacity();
      this.minalign = 1;
      this.vtable = null;
      this.vtable_in_use = 0;
      this.isNested = false;
      this.object_start = 0;
      this.vtables = [];
      this.vector_num_elems = 0;
      this.force_defaults = false;
    };
    flatbuffers7.Builder.prototype.forceDefaults = function(forceDefaults) {
      this.force_defaults = forceDefaults;
    };
    flatbuffers7.Builder.prototype.dataBuffer = function() {
      return this.bb;
    };
    flatbuffers7.Builder.prototype.asUint8Array = function() {
      return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
    };
    flatbuffers7.Builder.prototype.prep = function(size, additional_bytes) {
      if (size > this.minalign) {
        this.minalign = size;
      }
      var align_size = ~(this.bb.capacity() - this.space + additional_bytes) + 1 & size - 1;
      while (this.space < align_size + size + additional_bytes) {
        var old_buf_size = this.bb.capacity();
        this.bb = flatbuffers7.Builder.growByteBuffer(this.bb);
        this.space += this.bb.capacity() - old_buf_size;
      }
      this.pad(align_size);
    };
    flatbuffers7.Builder.prototype.pad = function(byte_size) {
      for (var i = 0; i < byte_size; i++) {
        this.bb.writeInt8(--this.space, 0);
      }
    };
    flatbuffers7.Builder.prototype.writeInt8 = function(value) {
      this.bb.writeInt8(this.space -= 1, value);
    };
    flatbuffers7.Builder.prototype.writeInt16 = function(value) {
      this.bb.writeInt16(this.space -= 2, value);
    };
    flatbuffers7.Builder.prototype.writeInt32 = function(value) {
      this.bb.writeInt32(this.space -= 4, value);
    };
    flatbuffers7.Builder.prototype.writeInt64 = function(value) {
      this.bb.writeInt64(this.space -= 8, value);
    };
    flatbuffers7.Builder.prototype.writeFloat32 = function(value) {
      this.bb.writeFloat32(this.space -= 4, value);
    };
    flatbuffers7.Builder.prototype.writeFloat64 = function(value) {
      this.bb.writeFloat64(this.space -= 8, value);
    };
    flatbuffers7.Builder.prototype.addInt8 = function(value) {
      this.prep(1, 0);
      this.writeInt8(value);
    };
    flatbuffers7.Builder.prototype.addInt16 = function(value) {
      this.prep(2, 0);
      this.writeInt16(value);
    };
    flatbuffers7.Builder.prototype.addInt32 = function(value) {
      this.prep(4, 0);
      this.writeInt32(value);
    };
    flatbuffers7.Builder.prototype.addInt64 = function(value) {
      this.prep(8, 0);
      this.writeInt64(value);
    };
    flatbuffers7.Builder.prototype.addFloat32 = function(value) {
      this.prep(4, 0);
      this.writeFloat32(value);
    };
    flatbuffers7.Builder.prototype.addFloat64 = function(value) {
      this.prep(8, 0);
      this.writeFloat64(value);
    };
    flatbuffers7.Builder.prototype.addFieldInt8 = function(voffset, value, defaultValue) {
      if (this.force_defaults || value != defaultValue) {
        this.addInt8(value);
        this.slot(voffset);
      }
    };
    flatbuffers7.Builder.prototype.addFieldInt16 = function(voffset, value, defaultValue) {
      if (this.force_defaults || value != defaultValue) {
        this.addInt16(value);
        this.slot(voffset);
      }
    };
    flatbuffers7.Builder.prototype.addFieldInt32 = function(voffset, value, defaultValue) {
      if (this.force_defaults || value != defaultValue) {
        this.addInt32(value);
        this.slot(voffset);
      }
    };
    flatbuffers7.Builder.prototype.addFieldInt64 = function(voffset, value, defaultValue) {
      if (this.force_defaults || !value.equals(defaultValue)) {
        this.addInt64(value);
        this.slot(voffset);
      }
    };
    flatbuffers7.Builder.prototype.addFieldFloat32 = function(voffset, value, defaultValue) {
      if (this.force_defaults || value != defaultValue) {
        this.addFloat32(value);
        this.slot(voffset);
      }
    };
    flatbuffers7.Builder.prototype.addFieldFloat64 = function(voffset, value, defaultValue) {
      if (this.force_defaults || value != defaultValue) {
        this.addFloat64(value);
        this.slot(voffset);
      }
    };
    flatbuffers7.Builder.prototype.addFieldOffset = function(voffset, value, defaultValue) {
      if (this.force_defaults || value != defaultValue) {
        this.addOffset(value);
        this.slot(voffset);
      }
    };
    flatbuffers7.Builder.prototype.addFieldStruct = function(voffset, value, defaultValue) {
      if (value != defaultValue) {
        this.nested(value);
        this.slot(voffset);
      }
    };
    flatbuffers7.Builder.prototype.nested = function(obj) {
      if (obj != this.offset()) {
        throw new Error("FlatBuffers: struct must be serialized inline.");
      }
    };
    flatbuffers7.Builder.prototype.notNested = function() {
      if (this.isNested) {
        throw new Error("FlatBuffers: object serialization must not be nested.");
      }
    };
    flatbuffers7.Builder.prototype.slot = function(voffset) {
      this.vtable[voffset] = this.offset();
    };
    flatbuffers7.Builder.prototype.offset = function() {
      return this.bb.capacity() - this.space;
    };
    flatbuffers7.Builder.growByteBuffer = function(bb) {
      var old_buf_size = bb.capacity();
      if (old_buf_size & 3221225472) {
        throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
      }
      var new_buf_size = old_buf_size << 1;
      var nbb = flatbuffers7.ByteBuffer.allocate(new_buf_size);
      nbb.setPosition(new_buf_size - old_buf_size);
      nbb.bytes().set(bb.bytes(), new_buf_size - old_buf_size);
      return nbb;
    };
    flatbuffers7.Builder.prototype.addOffset = function(offset) {
      this.prep(flatbuffers7.SIZEOF_INT, 0);
      this.writeInt32(this.offset() - offset + flatbuffers7.SIZEOF_INT);
    };
    flatbuffers7.Builder.prototype.startObject = function(numfields) {
      this.notNested();
      if (this.vtable == null) {
        this.vtable = [];
      }
      this.vtable_in_use = numfields;
      for (var i = 0; i < numfields; i++) {
        this.vtable[i] = 0;
      }
      this.isNested = true;
      this.object_start = this.offset();
    };
    flatbuffers7.Builder.prototype.endObject = function() {
      if (this.vtable == null || !this.isNested) {
        throw new Error("FlatBuffers: endObject called without startObject");
      }
      this.addInt32(0);
      var vtableloc = this.offset();
      var i = this.vtable_in_use - 1;
      for (; i >= 0 && this.vtable[i] == 0; i--) {
      }
      var trimmed_size = i + 1;
      for (; i >= 0; i--) {
        this.addInt16(this.vtable[i] != 0 ? vtableloc - this.vtable[i] : 0);
      }
      var standard_fields = 2;
      this.addInt16(vtableloc - this.object_start);
      var len = (trimmed_size + standard_fields) * flatbuffers7.SIZEOF_SHORT;
      this.addInt16(len);
      var existing_vtable = 0;
      var vt1 = this.space;
      outer_loop:
        for (i = 0; i < this.vtables.length; i++) {
          var vt2 = this.bb.capacity() - this.vtables[i];
          if (len == this.bb.readInt16(vt2)) {
            for (var j = flatbuffers7.SIZEOF_SHORT; j < len; j += flatbuffers7.SIZEOF_SHORT) {
              if (this.bb.readInt16(vt1 + j) != this.bb.readInt16(vt2 + j)) {
                continue outer_loop;
              }
            }
            existing_vtable = this.vtables[i];
            break;
          }
        }
      if (existing_vtable) {
        this.space = this.bb.capacity() - vtableloc;
        this.bb.writeInt32(this.space, existing_vtable - vtableloc);
      } else {
        this.vtables.push(this.offset());
        this.bb.writeInt32(this.bb.capacity() - vtableloc, this.offset() - vtableloc);
      }
      this.isNested = false;
      return vtableloc;
    };
    flatbuffers7.Builder.prototype.finish = function(root_table, opt_file_identifier, opt_size_prefix) {
      var size_prefix = opt_size_prefix ? flatbuffers7.SIZE_PREFIX_LENGTH : 0;
      if (opt_file_identifier) {
        var file_identifier = opt_file_identifier;
        this.prep(this.minalign, flatbuffers7.SIZEOF_INT + flatbuffers7.FILE_IDENTIFIER_LENGTH + size_prefix);
        if (file_identifier.length != flatbuffers7.FILE_IDENTIFIER_LENGTH) {
          throw new Error("FlatBuffers: file identifier must be length " + flatbuffers7.FILE_IDENTIFIER_LENGTH);
        }
        for (var i = flatbuffers7.FILE_IDENTIFIER_LENGTH - 1; i >= 0; i--) {
          this.writeInt8(file_identifier.charCodeAt(i));
        }
      }
      this.prep(this.minalign, flatbuffers7.SIZEOF_INT + size_prefix);
      this.addOffset(root_table);
      if (size_prefix) {
        this.addInt32(this.bb.capacity() - this.space);
      }
      this.bb.setPosition(this.space);
    };
    flatbuffers7.Builder.prototype.finishSizePrefixed = function(root_table, opt_file_identifier) {
      this.finish(root_table, opt_file_identifier, true);
    };
    flatbuffers7.Builder.prototype.requiredField = function(table, field) {
      var table_start = this.bb.capacity() - table;
      var vtable_start = table_start - this.bb.readInt32(table_start);
      var ok = this.bb.readInt16(vtable_start + field) != 0;
      if (!ok) {
        throw new Error("FlatBuffers: field " + field + " must be set");
      }
    };
    flatbuffers7.Builder.prototype.startVector = function(elem_size, num_elems, alignment) {
      this.notNested();
      this.vector_num_elems = num_elems;
      this.prep(flatbuffers7.SIZEOF_INT, elem_size * num_elems);
      this.prep(alignment, elem_size * num_elems);
    };
    flatbuffers7.Builder.prototype.endVector = function() {
      this.writeInt32(this.vector_num_elems);
      return this.offset();
    };
    flatbuffers7.Builder.prototype.createString = function(s) {
      if (s instanceof Uint8Array) {
        var utf8 = s;
      } else {
        var utf8 = [];
        var i = 0;
        while (i < s.length) {
          var codePoint;
          var a = s.charCodeAt(i++);
          if (a < 55296 || a >= 56320) {
            codePoint = a;
          } else {
            var b = s.charCodeAt(i++);
            codePoint = (a << 10) + b + (65536 - (55296 << 10) - 56320);
          }
          if (codePoint < 128) {
            utf8.push(codePoint);
          } else {
            if (codePoint < 2048) {
              utf8.push(codePoint >> 6 & 31 | 192);
            } else {
              if (codePoint < 65536) {
                utf8.push(codePoint >> 12 & 15 | 224);
              } else {
                utf8.push(
                  codePoint >> 18 & 7 | 240,
                  codePoint >> 12 & 63 | 128
                );
              }
              utf8.push(codePoint >> 6 & 63 | 128);
            }
            utf8.push(codePoint & 63 | 128);
          }
        }
      }
      this.addInt8(0);
      this.startVector(1, utf8.length, 1);
      this.bb.setPosition(this.space -= utf8.length);
      for (var i = 0, offset = this.space, bytes = this.bb.bytes(); i < utf8.length; i++) {
        bytes[offset++] = utf8[i];
      }
      return this.endVector();
    };
    flatbuffers7.Builder.prototype.createLong = function(low, high) {
      return flatbuffers7.Long.create(low, high);
    };
    flatbuffers7.ByteBuffer = function(bytes) {
      this.bytes_ = bytes;
      this.position_ = 0;
    };
    flatbuffers7.ByteBuffer.allocate = function(byte_size) {
      return new flatbuffers7.ByteBuffer(new Uint8Array(byte_size));
    };
    flatbuffers7.ByteBuffer.prototype.clear = function() {
      this.position_ = 0;
    };
    flatbuffers7.ByteBuffer.prototype.bytes = function() {
      return this.bytes_;
    };
    flatbuffers7.ByteBuffer.prototype.position = function() {
      return this.position_;
    };
    flatbuffers7.ByteBuffer.prototype.setPosition = function(position) {
      this.position_ = position;
    };
    flatbuffers7.ByteBuffer.prototype.capacity = function() {
      return this.bytes_.length;
    };
    flatbuffers7.ByteBuffer.prototype.readInt8 = function(offset) {
      return this.readUint8(offset) << 24 >> 24;
    };
    flatbuffers7.ByteBuffer.prototype.readUint8 = function(offset) {
      return this.bytes_[offset];
    };
    flatbuffers7.ByteBuffer.prototype.readInt16 = function(offset) {
      return this.readUint16(offset) << 16 >> 16;
    };
    flatbuffers7.ByteBuffer.prototype.readUint16 = function(offset) {
      return this.bytes_[offset] | this.bytes_[offset + 1] << 8;
    };
    flatbuffers7.ByteBuffer.prototype.readInt32 = function(offset) {
      return this.bytes_[offset] | this.bytes_[offset + 1] << 8 | this.bytes_[offset + 2] << 16 | this.bytes_[offset + 3] << 24;
    };
    flatbuffers7.ByteBuffer.prototype.readUint32 = function(offset) {
      return this.readInt32(offset) >>> 0;
    };
    flatbuffers7.ByteBuffer.prototype.readInt64 = function(offset) {
      return new flatbuffers7.Long(this.readInt32(offset), this.readInt32(offset + 4));
    };
    flatbuffers7.ByteBuffer.prototype.readUint64 = function(offset) {
      return new flatbuffers7.Long(this.readUint32(offset), this.readUint32(offset + 4));
    };
    flatbuffers7.ByteBuffer.prototype.readFloat32 = function(offset) {
      flatbuffers7.int32[0] = this.readInt32(offset);
      return flatbuffers7.float32[0];
    };
    flatbuffers7.ByteBuffer.prototype.readFloat64 = function(offset) {
      flatbuffers7.int32[flatbuffers7.isLittleEndian ? 0 : 1] = this.readInt32(offset);
      flatbuffers7.int32[flatbuffers7.isLittleEndian ? 1 : 0] = this.readInt32(offset + 4);
      return flatbuffers7.float64[0];
    };
    flatbuffers7.ByteBuffer.prototype.writeInt8 = function(offset, value) {
      this.bytes_[offset] = value;
    };
    flatbuffers7.ByteBuffer.prototype.writeUint8 = function(offset, value) {
      this.bytes_[offset] = value;
    };
    flatbuffers7.ByteBuffer.prototype.writeInt16 = function(offset, value) {
      this.bytes_[offset] = value;
      this.bytes_[offset + 1] = value >> 8;
    };
    flatbuffers7.ByteBuffer.prototype.writeUint16 = function(offset, value) {
      this.bytes_[offset] = value;
      this.bytes_[offset + 1] = value >> 8;
    };
    flatbuffers7.ByteBuffer.prototype.writeInt32 = function(offset, value) {
      this.bytes_[offset] = value;
      this.bytes_[offset + 1] = value >> 8;
      this.bytes_[offset + 2] = value >> 16;
      this.bytes_[offset + 3] = value >> 24;
    };
    flatbuffers7.ByteBuffer.prototype.writeUint32 = function(offset, value) {
      this.bytes_[offset] = value;
      this.bytes_[offset + 1] = value >> 8;
      this.bytes_[offset + 2] = value >> 16;
      this.bytes_[offset + 3] = value >> 24;
    };
    flatbuffers7.ByteBuffer.prototype.writeInt64 = function(offset, value) {
      this.writeInt32(offset, value.low);
      this.writeInt32(offset + 4, value.high);
    };
    flatbuffers7.ByteBuffer.prototype.writeUint64 = function(offset, value) {
      this.writeUint32(offset, value.low);
      this.writeUint32(offset + 4, value.high);
    };
    flatbuffers7.ByteBuffer.prototype.writeFloat32 = function(offset, value) {
      flatbuffers7.float32[0] = value;
      this.writeInt32(offset, flatbuffers7.int32[0]);
    };
    flatbuffers7.ByteBuffer.prototype.writeFloat64 = function(offset, value) {
      flatbuffers7.float64[0] = value;
      this.writeInt32(offset, flatbuffers7.int32[flatbuffers7.isLittleEndian ? 0 : 1]);
      this.writeInt32(offset + 4, flatbuffers7.int32[flatbuffers7.isLittleEndian ? 1 : 0]);
    };
    flatbuffers7.ByteBuffer.prototype.getBufferIdentifier = function() {
      if (this.bytes_.length < this.position_ + flatbuffers7.SIZEOF_INT + flatbuffers7.FILE_IDENTIFIER_LENGTH) {
        throw new Error(
          "FlatBuffers: ByteBuffer is too short to contain an identifier."
        );
      }
      var result = "";
      for (var i = 0; i < flatbuffers7.FILE_IDENTIFIER_LENGTH; i++) {
        result += String.fromCharCode(
          this.readInt8(this.position_ + flatbuffers7.SIZEOF_INT + i)
        );
      }
      return result;
    };
    flatbuffers7.ByteBuffer.prototype.__offset = function(bb_pos, vtable_offset) {
      var vtable = bb_pos - this.readInt32(bb_pos);
      return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0;
    };
    flatbuffers7.ByteBuffer.prototype.__union = function(t, offset) {
      t.bb_pos = offset + this.readInt32(offset);
      t.bb = this;
      return t;
    };
    flatbuffers7.ByteBuffer.prototype.__string = function(offset, opt_encoding) {
      offset += this.readInt32(offset);
      var length = this.readInt32(offset);
      var result = "";
      var i = 0;
      offset += flatbuffers7.SIZEOF_INT;
      if (opt_encoding === flatbuffers7.Encoding.UTF8_BYTES) {
        return this.bytes_.subarray(offset, offset + length);
      }
      while (i < length) {
        var codePoint;
        var a = this.readUint8(offset + i++);
        if (a < 192) {
          codePoint = a;
        } else {
          var b = this.readUint8(offset + i++);
          if (a < 224) {
            codePoint = (a & 31) << 6 | b & 63;
          } else {
            var c = this.readUint8(offset + i++);
            if (a < 240) {
              codePoint = (a & 15) << 12 | (b & 63) << 6 | c & 63;
            } else {
              var d = this.readUint8(offset + i++);
              codePoint = (a & 7) << 18 | (b & 63) << 12 | (c & 63) << 6 | d & 63;
            }
          }
        }
        if (codePoint < 65536) {
          result += String.fromCharCode(codePoint);
        } else {
          codePoint -= 65536;
          result += String.fromCharCode(
            (codePoint >> 10) + 55296,
            (codePoint & (1 << 10) - 1) + 56320
          );
        }
      }
      return result;
    };
    flatbuffers7.ByteBuffer.prototype.__indirect = function(offset) {
      return offset + this.readInt32(offset);
    };
    flatbuffers7.ByteBuffer.prototype.__vector = function(offset) {
      return offset + this.readInt32(offset) + flatbuffers7.SIZEOF_INT;
    };
    flatbuffers7.ByteBuffer.prototype.__vector_len = function(offset) {
      return this.readInt32(offset + this.readInt32(offset));
    };
    flatbuffers7.ByteBuffer.prototype.__has_identifier = function(ident) {
      if (ident.length != flatbuffers7.FILE_IDENTIFIER_LENGTH) {
        throw new Error("FlatBuffers: file identifier must be length " + flatbuffers7.FILE_IDENTIFIER_LENGTH);
      }
      for (var i = 0; i < flatbuffers7.FILE_IDENTIFIER_LENGTH; i++) {
        if (ident.charCodeAt(i) != this.readInt8(this.position_ + flatbuffers7.SIZEOF_INT + i)) {
          return false;
        }
      }
      return true;
    };
    flatbuffers7.ByteBuffer.prototype.createLong = function(low, high) {
      return flatbuffers7.Long.create(low, high);
    };
    exports.flatbuffers = flatbuffers7;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BallBouncinessOption: () => BallBouncinessOption,
  BallInfo: () => BallInfo,
  BallMaxSpeedOption: () => BallMaxSpeedOption,
  BallPrediction: () => BallPrediction,
  BallSizeOption: () => BallSizeOption,
  BallState: () => BallState,
  BallTypeOption: () => BallTypeOption,
  BallWeightOption: () => BallWeightOption,
  BoostOption: () => BoostOption,
  BoostPad: () => BoostPad,
  BoostPadState: () => BoostPadState,
  BoostState: () => BoostState,
  BoostStrengthOption: () => BoostStrengthOption,
  CarState: () => CarState,
  Client: () => BotClient,
  Color: () => Color2,
  Controller: () => Controller,
  ControllerManager: () => ControllerManager,
  DemolishOption: () => DemolishOption,
  ExistingMatchBehavior: () => ExistingMatchBehavior,
  FieldInfo: () => FieldInfo,
  GameInfo: () => GameInfo,
  GameInfoState: () => GameInfoState,
  GameMap: () => GameMap,
  GameMode: () => GameMode,
  GameSpeedOption: () => GameSpeedOption,
  GameState: () => GameState,
  GameTickPacket: () => GameTickPacket,
  GoalInfo: () => GoalInfo,
  GravityOption: () => GravityOption,
  LoadoutPaint: () => LoadoutPaint,
  Manager: () => BotManager,
  MatchLength: () => MatchLength,
  MatchSettings: () => MatchSettings,
  MaxScore: () => MaxScore,
  MutatorSettings: () => MutatorSettings,
  OvertimeOption: () => OvertimeOption,
  Physics: () => Physics,
  PlayerClass: () => PlayerClass,
  PlayerConfiguration: () => PlayerConfiguration,
  PlayerInfo: () => PlayerInfo,
  PlayerLoadout: () => PlayerLoadout,
  QuickChat: () => QuickChat,
  QuickChatSelection: () => QuickChatSelection,
  RenderManager: () => RenderManager,
  RespawnTimeOption: () => RespawnTimeOption,
  Rotator: () => Rotator,
  RumbleOption: () => RumbleOption,
  SeriesLengthOption: () => SeriesLengthOption,
  TeamInfo: () => TeamInfo,
  Touch: () => Touch,
  Vector3: () => Vector3,
  quickChats: () => QuickChats_default
});
module.exports = __toCommonJS(src_exports);

// src/BotClient.ts
var import_colors2 = __toESM(require_lib());
var Net = __toESM(require("net"));
var import_flatbuffers6 = __toESM(require_flatbuffers());

// src/flat/rlbot_generated.ts
var import_flatbuffers = __toESM(require_flatbuffers());
var rlbot;
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let CollisionShape;
    ((CollisionShape2) => {
      CollisionShape2[CollisionShape2["NONE"] = 0] = "NONE";
      CollisionShape2[CollisionShape2["BoxShape"] = 1] = "BoxShape";
      CollisionShape2[CollisionShape2["SphereShape"] = 2] = "SphereShape";
      CollisionShape2[CollisionShape2["CylinderShape"] = 3] = "CylinderShape";
    })(CollisionShape = flat4.CollisionShape || (flat4.CollisionShape = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let TileState;
    ((TileState2) => {
      TileState2[TileState2["Unknown"] = 0] = "Unknown";
      TileState2[TileState2["Filled"] = 1] = "Filled";
      TileState2[TileState2["Damaged"] = 2] = "Damaged";
      TileState2[TileState2["Open"] = 3] = "Open";
    })(TileState = flat4.TileState || (flat4.TileState = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let RenderType2;
    ((RenderType3) => {
      RenderType3[RenderType3["DrawLine2D"] = 1] = "DrawLine2D";
      RenderType3[RenderType3["DrawLine3D"] = 2] = "DrawLine3D";
      RenderType3[RenderType3["DrawLine2D_3D"] = 3] = "DrawLine2D_3D";
      RenderType3[RenderType3["DrawRect2D"] = 4] = "DrawRect2D";
      RenderType3[RenderType3["DrawRect3D"] = 5] = "DrawRect3D";
      RenderType3[RenderType3["DrawString2D"] = 6] = "DrawString2D";
      RenderType3[RenderType3["DrawString3D"] = 7] = "DrawString3D";
      RenderType3[RenderType3["DrawCenteredRect3D"] = 8] = "DrawCenteredRect3D";
    })(RenderType2 = flat4.RenderType || (flat4.RenderType = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let QuickChatSelection2;
    ((QuickChatSelection3) => {
      QuickChatSelection3[QuickChatSelection3["Information_IGotIt"] = 0] = "Information_IGotIt";
      QuickChatSelection3[QuickChatSelection3["Information_NeedBoost"] = 1] = "Information_NeedBoost";
      QuickChatSelection3[QuickChatSelection3["Information_TakeTheShot"] = 2] = "Information_TakeTheShot";
      QuickChatSelection3[QuickChatSelection3["Information_Defending"] = 3] = "Information_Defending";
      QuickChatSelection3[QuickChatSelection3["Information_GoForIt"] = 4] = "Information_GoForIt";
      QuickChatSelection3[QuickChatSelection3["Information_Centering"] = 5] = "Information_Centering";
      QuickChatSelection3[QuickChatSelection3["Information_AllYours"] = 6] = "Information_AllYours";
      QuickChatSelection3[QuickChatSelection3["Information_InPosition"] = 7] = "Information_InPosition";
      QuickChatSelection3[QuickChatSelection3["Information_Incoming"] = 8] = "Information_Incoming";
      QuickChatSelection3[QuickChatSelection3["Compliments_NiceShot"] = 9] = "Compliments_NiceShot";
      QuickChatSelection3[QuickChatSelection3["Compliments_GreatPass"] = 10] = "Compliments_GreatPass";
      QuickChatSelection3[QuickChatSelection3["Compliments_Thanks"] = 11] = "Compliments_Thanks";
      QuickChatSelection3[QuickChatSelection3["Compliments_WhatASave"] = 12] = "Compliments_WhatASave";
      QuickChatSelection3[QuickChatSelection3["Compliments_NiceOne"] = 13] = "Compliments_NiceOne";
      QuickChatSelection3[QuickChatSelection3["Compliments_WhatAPlay"] = 14] = "Compliments_WhatAPlay";
      QuickChatSelection3[QuickChatSelection3["Compliments_GreatClear"] = 15] = "Compliments_GreatClear";
      QuickChatSelection3[QuickChatSelection3["Compliments_NiceBlock"] = 16] = "Compliments_NiceBlock";
      QuickChatSelection3[QuickChatSelection3["Reactions_OMG"] = 17] = "Reactions_OMG";
      QuickChatSelection3[QuickChatSelection3["Reactions_Noooo"] = 18] = "Reactions_Noooo";
      QuickChatSelection3[QuickChatSelection3["Reactions_Wow"] = 19] = "Reactions_Wow";
      QuickChatSelection3[QuickChatSelection3["Reactions_CloseOne"] = 20] = "Reactions_CloseOne";
      QuickChatSelection3[QuickChatSelection3["Reactions_NoWay"] = 21] = "Reactions_NoWay";
      QuickChatSelection3[QuickChatSelection3["Reactions_HolyCow"] = 22] = "Reactions_HolyCow";
      QuickChatSelection3[QuickChatSelection3["Reactions_Whew"] = 23] = "Reactions_Whew";
      QuickChatSelection3[QuickChatSelection3["Reactions_Siiiick"] = 24] = "Reactions_Siiiick";
      QuickChatSelection3[QuickChatSelection3["Reactions_Calculated"] = 25] = "Reactions_Calculated";
      QuickChatSelection3[QuickChatSelection3["Reactions_Savage"] = 26] = "Reactions_Savage";
      QuickChatSelection3[QuickChatSelection3["Reactions_Okay"] = 27] = "Reactions_Okay";
      QuickChatSelection3[QuickChatSelection3["Apologies_Cursing"] = 28] = "Apologies_Cursing";
      QuickChatSelection3[QuickChatSelection3["Apologies_NoProblem"] = 29] = "Apologies_NoProblem";
      QuickChatSelection3[QuickChatSelection3["Apologies_Whoops"] = 30] = "Apologies_Whoops";
      QuickChatSelection3[QuickChatSelection3["Apologies_Sorry"] = 31] = "Apologies_Sorry";
      QuickChatSelection3[QuickChatSelection3["Apologies_MyBad"] = 32] = "Apologies_MyBad";
      QuickChatSelection3[QuickChatSelection3["Apologies_Oops"] = 33] = "Apologies_Oops";
      QuickChatSelection3[QuickChatSelection3["Apologies_MyFault"] = 34] = "Apologies_MyFault";
      QuickChatSelection3[QuickChatSelection3["PostGame_Gg"] = 35] = "PostGame_Gg";
      QuickChatSelection3[QuickChatSelection3["PostGame_WellPlayed"] = 36] = "PostGame_WellPlayed";
      QuickChatSelection3[QuickChatSelection3["PostGame_ThatWasFun"] = 37] = "PostGame_ThatWasFun";
      QuickChatSelection3[QuickChatSelection3["PostGame_Rematch"] = 38] = "PostGame_Rematch";
      QuickChatSelection3[QuickChatSelection3["PostGame_OneMoreGame"] = 39] = "PostGame_OneMoreGame";
      QuickChatSelection3[QuickChatSelection3["PostGame_WhatAGame"] = 40] = "PostGame_WhatAGame";
      QuickChatSelection3[QuickChatSelection3["PostGame_NiceMoves"] = 41] = "PostGame_NiceMoves";
      QuickChatSelection3[QuickChatSelection3["PostGame_EverybodyDance"] = 42] = "PostGame_EverybodyDance";
      QuickChatSelection3[QuickChatSelection3["MaxPysonixQuickChatPresets"] = 43] = "MaxPysonixQuickChatPresets";
      QuickChatSelection3[QuickChatSelection3["Custom_Toxic_WasteCPU"] = 44] = "Custom_Toxic_WasteCPU";
      QuickChatSelection3[QuickChatSelection3["Custom_Toxic_GitGut"] = 45] = "Custom_Toxic_GitGut";
      QuickChatSelection3[QuickChatSelection3["Custom_Toxic_DeAlloc"] = 46] = "Custom_Toxic_DeAlloc";
      QuickChatSelection3[QuickChatSelection3["Custom_Toxic_404NoSkill"] = 47] = "Custom_Toxic_404NoSkill";
      QuickChatSelection3[QuickChatSelection3["Custom_Toxic_CatchVirus"] = 48] = "Custom_Toxic_CatchVirus";
      QuickChatSelection3[QuickChatSelection3["Custom_Useful_Passing"] = 49] = "Custom_Useful_Passing";
      QuickChatSelection3[QuickChatSelection3["Custom_Useful_Faking"] = 50] = "Custom_Useful_Faking";
      QuickChatSelection3[QuickChatSelection3["Custom_Useful_Demoing"] = 51] = "Custom_Useful_Demoing";
      QuickChatSelection3[QuickChatSelection3["Custom_Useful_Bumping"] = 52] = "Custom_Useful_Bumping";
      QuickChatSelection3[QuickChatSelection3["Custom_Compliments_TinyChances"] = 53] = "Custom_Compliments_TinyChances";
      QuickChatSelection3[QuickChatSelection3["Custom_Compliments_SkillLevel"] = 54] = "Custom_Compliments_SkillLevel";
      QuickChatSelection3[QuickChatSelection3["Custom_Compliments_proud"] = 55] = "Custom_Compliments_proud";
      QuickChatSelection3[QuickChatSelection3["Custom_Compliments_GC"] = 56] = "Custom_Compliments_GC";
      QuickChatSelection3[QuickChatSelection3["Custom_Compliments_Pro"] = 57] = "Custom_Compliments_Pro";
      QuickChatSelection3[QuickChatSelection3["Custom_Excuses_Lag"] = 58] = "Custom_Excuses_Lag";
      QuickChatSelection3[QuickChatSelection3["Custom_Excuses_GhostInputs"] = 59] = "Custom_Excuses_GhostInputs";
      QuickChatSelection3[QuickChatSelection3["Custom_Excuses_Rigged"] = 60] = "Custom_Excuses_Rigged";
      QuickChatSelection3[QuickChatSelection3["Custom_Toxic_MafiaPlays"] = 61] = "Custom_Toxic_MafiaPlays";
      QuickChatSelection3[QuickChatSelection3["Custom_Exclamation_Yeet"] = 62] = "Custom_Exclamation_Yeet";
    })(QuickChatSelection2 = flat4.QuickChatSelection || (flat4.QuickChatSelection = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let PlayerClass2;
    ((PlayerClass3) => {
      PlayerClass3[PlayerClass3["NONE"] = 0] = "NONE";
      PlayerClass3[PlayerClass3["RLBotPlayer"] = 1] = "RLBotPlayer";
      PlayerClass3[PlayerClass3["HumanPlayer"] = 2] = "HumanPlayer";
      PlayerClass3[PlayerClass3["PsyonixBotPlayer"] = 3] = "PsyonixBotPlayer";
      PlayerClass3[PlayerClass3["PartyMemberBotPlayer"] = 4] = "PartyMemberBotPlayer";
    })(PlayerClass2 = flat4.PlayerClass || (flat4.PlayerClass = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let GameMode2;
    ((GameMode3) => {
      GameMode3[GameMode3["Soccer"] = 0] = "Soccer";
      GameMode3[GameMode3["Hoops"] = 1] = "Hoops";
      GameMode3[GameMode3["Dropshot"] = 2] = "Dropshot";
      GameMode3[GameMode3["Hockey"] = 3] = "Hockey";
      GameMode3[GameMode3["Rumble"] = 4] = "Rumble";
      GameMode3[GameMode3["Heatseeker"] = 5] = "Heatseeker";
    })(GameMode2 = flat4.GameMode || (flat4.GameMode = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let GameMap2;
    ((GameMap3) => {
      GameMap3[GameMap3["DFHStadium"] = 0] = "DFHStadium";
      GameMap3[GameMap3["Mannfield"] = 1] = "Mannfield";
      GameMap3[GameMap3["ChampionsField"] = 2] = "ChampionsField";
      GameMap3[GameMap3["UrbanCentral"] = 3] = "UrbanCentral";
      GameMap3[GameMap3["BeckwithPark"] = 4] = "BeckwithPark";
      GameMap3[GameMap3["UtopiaColiseum"] = 5] = "UtopiaColiseum";
      GameMap3[GameMap3["Wasteland"] = 6] = "Wasteland";
      GameMap3[GameMap3["NeoTokyo"] = 7] = "NeoTokyo";
      GameMap3[GameMap3["AquaDome"] = 8] = "AquaDome";
      GameMap3[GameMap3["StarbaseArc"] = 9] = "StarbaseArc";
      GameMap3[GameMap3["Farmstead"] = 10] = "Farmstead";
      GameMap3[GameMap3["SaltyShores"] = 11] = "SaltyShores";
      GameMap3[GameMap3["DFHStadium_Stormy"] = 12] = "DFHStadium_Stormy";
      GameMap3[GameMap3["DFHStadium_Day"] = 13] = "DFHStadium_Day";
      GameMap3[GameMap3["Mannfield_Stormy"] = 14] = "Mannfield_Stormy";
      GameMap3[GameMap3["Mannfield_Night"] = 15] = "Mannfield_Night";
      GameMap3[GameMap3["ChampionsField_Day"] = 16] = "ChampionsField_Day";
      GameMap3[GameMap3["BeckwithPark_Stormy"] = 17] = "BeckwithPark_Stormy";
      GameMap3[GameMap3["BeckwithPark_Midnight"] = 18] = "BeckwithPark_Midnight";
      GameMap3[GameMap3["UrbanCentral_Night"] = 19] = "UrbanCentral_Night";
      GameMap3[GameMap3["UrbanCentral_Dawn"] = 20] = "UrbanCentral_Dawn";
      GameMap3[GameMap3["UtopiaColiseum_Dusk"] = 21] = "UtopiaColiseum_Dusk";
      GameMap3[GameMap3["DFHStadium_Snowy"] = 22] = "DFHStadium_Snowy";
      GameMap3[GameMap3["Mannfield_Snowy"] = 23] = "Mannfield_Snowy";
      GameMap3[GameMap3["UtopiaColiseum_Snowy"] = 24] = "UtopiaColiseum_Snowy";
      GameMap3[GameMap3["Badlands"] = 25] = "Badlands";
      GameMap3[GameMap3["Badlands_Night"] = 26] = "Badlands_Night";
      GameMap3[GameMap3["TokyoUnderpass"] = 27] = "TokyoUnderpass";
      GameMap3[GameMap3["Arctagon"] = 28] = "Arctagon";
      GameMap3[GameMap3["Pillars"] = 29] = "Pillars";
      GameMap3[GameMap3["Cosmic"] = 30] = "Cosmic";
      GameMap3[GameMap3["DoubleGoal"] = 31] = "DoubleGoal";
      GameMap3[GameMap3["Octagon"] = 32] = "Octagon";
      GameMap3[GameMap3["Underpass"] = 33] = "Underpass";
      GameMap3[GameMap3["UtopiaRetro"] = 34] = "UtopiaRetro";
      GameMap3[GameMap3["Hoops_DunkHouse"] = 35] = "Hoops_DunkHouse";
      GameMap3[GameMap3["DropShot_Core707"] = 36] = "DropShot_Core707";
      GameMap3[GameMap3["ThrowbackStadium"] = 37] = "ThrowbackStadium";
      GameMap3[GameMap3["ForbiddenTemple"] = 38] = "ForbiddenTemple";
      GameMap3[GameMap3["RivalsArena"] = 39] = "RivalsArena";
      GameMap3[GameMap3["Farmstead_Night"] = 40] = "Farmstead_Night";
      GameMap3[GameMap3["SaltyShores_Night"] = 41] = "SaltyShores_Night";
    })(GameMap2 = flat4.GameMap || (flat4.GameMap = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let MatchLength2;
    ((MatchLength3) => {
      MatchLength3[MatchLength3["Five_Minutes"] = 0] = "Five_Minutes";
      MatchLength3[MatchLength3["Ten_Minutes"] = 1] = "Ten_Minutes";
      MatchLength3[MatchLength3["Twenty_Minutes"] = 2] = "Twenty_Minutes";
      MatchLength3[MatchLength3["Unlimited"] = 3] = "Unlimited";
    })(MatchLength2 = flat4.MatchLength || (flat4.MatchLength = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let MaxScore2;
    ((MaxScore3) => {
      MaxScore3[MaxScore3["Unlimited"] = 0] = "Unlimited";
      MaxScore3[MaxScore3["One_Goal"] = 1] = "One_Goal";
      MaxScore3[MaxScore3["Three_Goals"] = 2] = "Three_Goals";
      MaxScore3[MaxScore3["Five_Goals"] = 3] = "Five_Goals";
    })(MaxScore2 = flat4.MaxScore || (flat4.MaxScore = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let OvertimeOption2;
    ((OvertimeOption3) => {
      OvertimeOption3[OvertimeOption3["Unlimited"] = 0] = "Unlimited";
      OvertimeOption3[OvertimeOption3["Five_Max_First_Score"] = 1] = "Five_Max_First_Score";
      OvertimeOption3[OvertimeOption3["Five_Max_Random_Team"] = 2] = "Five_Max_Random_Team";
    })(OvertimeOption2 = flat4.OvertimeOption || (flat4.OvertimeOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let SeriesLengthOption2;
    ((SeriesLengthOption3) => {
      SeriesLengthOption3[SeriesLengthOption3["Unlimited"] = 0] = "Unlimited";
      SeriesLengthOption3[SeriesLengthOption3["Three_Games"] = 1] = "Three_Games";
      SeriesLengthOption3[SeriesLengthOption3["Five_Games"] = 2] = "Five_Games";
      SeriesLengthOption3[SeriesLengthOption3["Seven_Games"] = 3] = "Seven_Games";
    })(SeriesLengthOption2 = flat4.SeriesLengthOption || (flat4.SeriesLengthOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let GameSpeedOption2;
    ((GameSpeedOption3) => {
      GameSpeedOption3[GameSpeedOption3["Default"] = 0] = "Default";
      GameSpeedOption3[GameSpeedOption3["Slo_Mo"] = 1] = "Slo_Mo";
      GameSpeedOption3[GameSpeedOption3["Time_Warp"] = 2] = "Time_Warp";
    })(GameSpeedOption2 = flat4.GameSpeedOption || (flat4.GameSpeedOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let BallMaxSpeedOption2;
    ((BallMaxSpeedOption3) => {
      BallMaxSpeedOption3[BallMaxSpeedOption3["Default"] = 0] = "Default";
      BallMaxSpeedOption3[BallMaxSpeedOption3["Slow"] = 1] = "Slow";
      BallMaxSpeedOption3[BallMaxSpeedOption3["Fast"] = 2] = "Fast";
      BallMaxSpeedOption3[BallMaxSpeedOption3["Super_Fast"] = 3] = "Super_Fast";
    })(BallMaxSpeedOption2 = flat4.BallMaxSpeedOption || (flat4.BallMaxSpeedOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let BallTypeOption2;
    ((BallTypeOption3) => {
      BallTypeOption3[BallTypeOption3["Default"] = 0] = "Default";
      BallTypeOption3[BallTypeOption3["Cube"] = 1] = "Cube";
      BallTypeOption3[BallTypeOption3["Puck"] = 2] = "Puck";
      BallTypeOption3[BallTypeOption3["Basketball"] = 3] = "Basketball";
    })(BallTypeOption2 = flat4.BallTypeOption || (flat4.BallTypeOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let BallWeightOption2;
    ((BallWeightOption3) => {
      BallWeightOption3[BallWeightOption3["Default"] = 0] = "Default";
      BallWeightOption3[BallWeightOption3["Light"] = 1] = "Light";
      BallWeightOption3[BallWeightOption3["Heavy"] = 2] = "Heavy";
      BallWeightOption3[BallWeightOption3["Super_Light"] = 3] = "Super_Light";
    })(BallWeightOption2 = flat4.BallWeightOption || (flat4.BallWeightOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let BallSizeOption2;
    ((BallSizeOption3) => {
      BallSizeOption3[BallSizeOption3["Default"] = 0] = "Default";
      BallSizeOption3[BallSizeOption3["Small"] = 1] = "Small";
      BallSizeOption3[BallSizeOption3["Large"] = 2] = "Large";
      BallSizeOption3[BallSizeOption3["Gigantic"] = 3] = "Gigantic";
    })(BallSizeOption2 = flat4.BallSizeOption || (flat4.BallSizeOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let BallBouncinessOption2;
    ((BallBouncinessOption3) => {
      BallBouncinessOption3[BallBouncinessOption3["Default"] = 0] = "Default";
      BallBouncinessOption3[BallBouncinessOption3["Low"] = 1] = "Low";
      BallBouncinessOption3[BallBouncinessOption3["High"] = 2] = "High";
      BallBouncinessOption3[BallBouncinessOption3["Super_High"] = 3] = "Super_High";
    })(BallBouncinessOption2 = flat4.BallBouncinessOption || (flat4.BallBouncinessOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let BoostOption2;
    ((BoostOption3) => {
      BoostOption3[BoostOption3["Normal_Boost"] = 0] = "Normal_Boost";
      BoostOption3[BoostOption3["Unlimited_Boost"] = 1] = "Unlimited_Boost";
      BoostOption3[BoostOption3["Slow_Recharge"] = 2] = "Slow_Recharge";
      BoostOption3[BoostOption3["Rapid_Recharge"] = 3] = "Rapid_Recharge";
      BoostOption3[BoostOption3["No_Boost"] = 4] = "No_Boost";
    })(BoostOption2 = flat4.BoostOption || (flat4.BoostOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let RumbleOption2;
    ((RumbleOption3) => {
      RumbleOption3[RumbleOption3["No_Rumble"] = 0] = "No_Rumble";
      RumbleOption3[RumbleOption3["Default"] = 1] = "Default";
      RumbleOption3[RumbleOption3["Slow"] = 2] = "Slow";
      RumbleOption3[RumbleOption3["Civilized"] = 3] = "Civilized";
      RumbleOption3[RumbleOption3["Destruction_Derby"] = 4] = "Destruction_Derby";
      RumbleOption3[RumbleOption3["Spring_Loaded"] = 5] = "Spring_Loaded";
      RumbleOption3[RumbleOption3["Spikes_Only"] = 6] = "Spikes_Only";
      RumbleOption3[RumbleOption3["Spike_Rush"] = 7] = "Spike_Rush";
    })(RumbleOption2 = flat4.RumbleOption || (flat4.RumbleOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let BoostStrengthOption2;
    ((BoostStrengthOption3) => {
      BoostStrengthOption3[BoostStrengthOption3["One"] = 0] = "One";
      BoostStrengthOption3[BoostStrengthOption3["OneAndAHalf"] = 1] = "OneAndAHalf";
      BoostStrengthOption3[BoostStrengthOption3["Two"] = 2] = "Two";
      BoostStrengthOption3[BoostStrengthOption3["Ten"] = 3] = "Ten";
    })(BoostStrengthOption2 = flat4.BoostStrengthOption || (flat4.BoostStrengthOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let GravityOption2;
    ((GravityOption3) => {
      GravityOption3[GravityOption3["Default"] = 0] = "Default";
      GravityOption3[GravityOption3["Low"] = 1] = "Low";
      GravityOption3[GravityOption3["High"] = 2] = "High";
      GravityOption3[GravityOption3["Super_High"] = 3] = "Super_High";
    })(GravityOption2 = flat4.GravityOption || (flat4.GravityOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let DemolishOption2;
    ((DemolishOption3) => {
      DemolishOption3[DemolishOption3["Default"] = 0] = "Default";
      DemolishOption3[DemolishOption3["Disabled"] = 1] = "Disabled";
      DemolishOption3[DemolishOption3["Friendly_Fire"] = 2] = "Friendly_Fire";
      DemolishOption3[DemolishOption3["On_Contact"] = 3] = "On_Contact";
      DemolishOption3[DemolishOption3["On_Contact_FF"] = 4] = "On_Contact_FF";
    })(DemolishOption2 = flat4.DemolishOption || (flat4.DemolishOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let RespawnTimeOption2;
    ((RespawnTimeOption3) => {
      RespawnTimeOption3[RespawnTimeOption3["Three_Seconds"] = 0] = "Three_Seconds";
      RespawnTimeOption3[RespawnTimeOption3["Two_Seconds"] = 1] = "Two_Seconds";
      RespawnTimeOption3[RespawnTimeOption3["One_Seconds"] = 2] = "One_Seconds";
      RespawnTimeOption3[RespawnTimeOption3["Disable_Goal_Reset"] = 3] = "Disable_Goal_Reset";
    })(RespawnTimeOption2 = flat4.RespawnTimeOption || (flat4.RespawnTimeOption = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let ExistingMatchBehavior2;
    ((ExistingMatchBehavior3) => {
      ExistingMatchBehavior3[ExistingMatchBehavior3["Restart_If_Different"] = 0] = "Restart_If_Different";
      ExistingMatchBehavior3[ExistingMatchBehavior3["Restart"] = 1] = "Restart";
      ExistingMatchBehavior3[ExistingMatchBehavior3["Continue_And_Spawn"] = 2] = "Continue_And_Spawn";
    })(ExistingMatchBehavior2 = flat4.ExistingMatchBehavior || (flat4.ExistingMatchBehavior = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    let GameMessage;
    ((GameMessage2) => {
      GameMessage2[GameMessage2["NONE"] = 0] = "NONE";
      GameMessage2[GameMessage2["PlayerStatEvent"] = 1] = "PlayerStatEvent";
      GameMessage2[GameMessage2["PlayerSpectate"] = 2] = "PlayerSpectate";
      GameMessage2[GameMessage2["PlayerInputChange"] = 3] = "PlayerInputChange";
    })(GameMessage = flat4.GameMessage || (flat4.GameMessage = {}));
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class ControllerState {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new ControllerState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      throttle() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      steer() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      pitch() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      yaw() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      roll() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      jump() {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      boost() {
        var offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      handbrake() {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      useItem() {
        var offset = this.bb.__offset(this.bb_pos, 20);
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
        var offset = builder.endObject();
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
    }
    flat4.ControllerState = ControllerState;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class PlayerInput {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PlayerInput()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      playerIndex() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      controllerState(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.ControllerState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createPlayerInput(builder, playerIndex, controllerStateOffset) {
        PlayerInput.startPlayerInput(builder);
        PlayerInput.addPlayerIndex(builder, playerIndex);
        PlayerInput.addControllerState(builder, controllerStateOffset);
        return PlayerInput.endPlayerInput(builder);
      }
    }
    flat4.PlayerInput = PlayerInput;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class Vector32 {
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
      static createVector3(builder, x, y, z) {
        builder.prep(4, 12);
        builder.writeFloat32(z);
        builder.writeFloat32(y);
        builder.writeFloat32(x);
        return builder.offset();
      }
    }
    flat4.Vector3 = Vector32;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class Rotator3 {
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
      static createRotator(builder, pitch, yaw, roll) {
        builder.prep(4, 12);
        builder.writeFloat32(roll);
        builder.writeFloat32(yaw);
        builder.writeFloat32(pitch);
        return builder.offset();
      }
    }
    flat4.Rotator = Rotator3;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class Quaternion {
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
      static createQuaternion(builder, x, y, z, w) {
        builder.prep(4, 16);
        builder.writeFloat32(w);
        builder.writeFloat32(z);
        builder.writeFloat32(y);
        builder.writeFloat32(x);
        return builder.offset();
      }
    }
    flat4.Quaternion = Quaternion;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class BoxShape {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new BoxShape()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      length() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      width() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      height() {
        var offset = this.bb.__offset(this.bb_pos, 8);
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
        var offset = builder.endObject();
        return offset;
      }
      static createBoxShape(builder, length, width, height) {
        BoxShape.startBoxShape(builder);
        BoxShape.addLength(builder, length);
        BoxShape.addWidth(builder, width);
        BoxShape.addHeight(builder, height);
        return BoxShape.endBoxShape(builder);
      }
    }
    flat4.BoxShape = BoxShape;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class SphereShape {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new SphereShape()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      diameter() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      static startSphereShape(builder) {
        builder.startObject(1);
      }
      static addDiameter(builder, diameter) {
        builder.addFieldFloat32(0, diameter, 0);
      }
      static endSphereShape(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createSphereShape(builder, diameter) {
        SphereShape.startSphereShape(builder);
        SphereShape.addDiameter(builder, diameter);
        return SphereShape.endSphereShape(builder);
      }
    }
    flat4.SphereShape = SphereShape;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class CylinderShape {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new CylinderShape()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      diameter() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      height() {
        var offset = this.bb.__offset(this.bb_pos, 6);
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
        var offset = builder.endObject();
        return offset;
      }
      static createCylinderShape(builder, diameter, height) {
        CylinderShape.startCylinderShape(builder);
        CylinderShape.addDiameter(builder, diameter);
        CylinderShape.addHeight(builder, height);
        return CylinderShape.endCylinderShape(builder);
      }
    }
    flat4.CylinderShape = CylinderShape;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class Touch2 {
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
        return (obj || new Touch2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsTouch(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Touch2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      playerName(optionalEncoding) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
      }
      gameSeconds() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      location(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      normal(obj) {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      team() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      playerIndex() {
        var offset = this.bb.__offset(this.bb_pos, 14);
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
        var offset = builder.endObject();
        return offset;
      }
      static createTouch(builder, playerNameOffset, gameSeconds, locationOffset, normalOffset, team, playerIndex) {
        Touch2.startTouch(builder);
        Touch2.addPlayerName(builder, playerNameOffset);
        Touch2.addGameSeconds(builder, gameSeconds);
        Touch2.addLocation(builder, locationOffset);
        Touch2.addNormal(builder, normalOffset);
        Touch2.addTeam(builder, team);
        Touch2.addPlayerIndex(builder, playerIndex);
        return Touch2.endTouch(builder);
      }
    }
    flat4.Touch = Touch2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class ScoreInfo2 {
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
        return (obj || new ScoreInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsScoreInfo(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new ScoreInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      score() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      goals() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      ownGoals() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      assists() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      saves() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      shots() {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      demolitions() {
        var offset = this.bb.__offset(this.bb_pos, 16);
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
        var offset = builder.endObject();
        return offset;
      }
      static createScoreInfo(builder, score, goals, ownGoals, assists, saves, shots, demolitions) {
        ScoreInfo2.startScoreInfo(builder);
        ScoreInfo2.addScore(builder, score);
        ScoreInfo2.addGoals(builder, goals);
        ScoreInfo2.addOwnGoals(builder, ownGoals);
        ScoreInfo2.addAssists(builder, assists);
        ScoreInfo2.addSaves(builder, saves);
        ScoreInfo2.addShots(builder, shots);
        ScoreInfo2.addDemolitions(builder, demolitions);
        return ScoreInfo2.endScoreInfo(builder);
      }
    }
    flat4.ScoreInfo = ScoreInfo2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class Physics2 {
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
        return (obj || new Physics2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsPhysics(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Physics2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      location(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      rotation(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Rotator()).__init(this.bb_pos + offset, this.bb) : null;
      }
      velocity(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      angularVelocity(obj) {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createPhysics(builder, locationOffset, rotationOffset, velocityOffset, angularVelocityOffset) {
        Physics2.startPhysics(builder);
        Physics2.addLocation(builder, locationOffset);
        Physics2.addRotation(builder, rotationOffset);
        Physics2.addVelocity(builder, velocityOffset);
        Physics2.addAngularVelocity(builder, angularVelocityOffset);
        return Physics2.endPhysics(builder);
      }
    }
    flat4.Physics = Physics2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class PlayerInfo2 {
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
        return (obj || new PlayerInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsPlayerInfo(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PlayerInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      physics(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.Physics()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      scoreInfo(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.ScoreInfo()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      isDemolished() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      hasWheelContact() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      isSupersonic() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      isBot() {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      jumped() {
        var offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      doubleJumped() {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      name(optionalEncoding) {
        var offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
      }
      team() {
        var offset = this.bb.__offset(this.bb_pos, 22);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      boost() {
        var offset = this.bb.__offset(this.bb_pos, 24);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      hitbox(obj) {
        var offset = this.bb.__offset(this.bb_pos, 26);
        return offset ? (obj || new rlbot2.flat.BoxShape()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      hitboxOffset(obj) {
        var offset = this.bb.__offset(this.bb_pos, 28);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      spawnId() {
        var offset = this.bb.__offset(this.bb_pos, 30);
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
        var offset = builder.endObject();
        return offset;
      }
      static createPlayerInfo(builder, physicsOffset, scoreInfoOffset, isDemolished, hasWheelContact, isSupersonic, isBot, jumped, doubleJumped, nameOffset, team, boost, hitboxOffset, hitboxOffsetOffset, spawnId) {
        PlayerInfo2.startPlayerInfo(builder);
        PlayerInfo2.addPhysics(builder, physicsOffset);
        PlayerInfo2.addScoreInfo(builder, scoreInfoOffset);
        PlayerInfo2.addIsDemolished(builder, isDemolished);
        PlayerInfo2.addHasWheelContact(builder, hasWheelContact);
        PlayerInfo2.addIsSupersonic(builder, isSupersonic);
        PlayerInfo2.addIsBot(builder, isBot);
        PlayerInfo2.addJumped(builder, jumped);
        PlayerInfo2.addDoubleJumped(builder, doubleJumped);
        PlayerInfo2.addName(builder, nameOffset);
        PlayerInfo2.addTeam(builder, team);
        PlayerInfo2.addBoost(builder, boost);
        PlayerInfo2.addHitbox(builder, hitboxOffset);
        PlayerInfo2.addHitboxOffset(builder, hitboxOffsetOffset);
        PlayerInfo2.addSpawnId(builder, spawnId);
        return PlayerInfo2.endPlayerInfo(builder);
      }
    }
    flat4.PlayerInfo = PlayerInfo2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class DropShotBallInfo2 {
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
        return (obj || new DropShotBallInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsDropShotBallInfo(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DropShotBallInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      absorbedForce() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      damageIndex() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      forceAccumRecent() {
        var offset = this.bb.__offset(this.bb_pos, 8);
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
        var offset = builder.endObject();
        return offset;
      }
      static createDropShotBallInfo(builder, absorbedForce, damageIndex, forceAccumRecent) {
        DropShotBallInfo2.startDropShotBallInfo(builder);
        DropShotBallInfo2.addAbsorbedForce(builder, absorbedForce);
        DropShotBallInfo2.addDamageIndex(builder, damageIndex);
        DropShotBallInfo2.addForceAccumRecent(builder, forceAccumRecent);
        return DropShotBallInfo2.endDropShotBallInfo(builder);
      }
    }
    flat4.DropShotBallInfo = DropShotBallInfo2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class BallInfo2 {
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
        return (obj || new BallInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsBallInfo(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new BallInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      physics(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.Physics()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      latestTouch(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Touch()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      dropShotInfo(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.DropShotBallInfo()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      shapeType() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* NONE */;
      }
      shape(obj) {
        var offset = this.bb.__offset(this.bb_pos, 12);
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
        var offset = builder.endObject();
        return offset;
      }
      static createBallInfo(builder, physicsOffset, latestTouchOffset, dropShotInfoOffset, shapeType, shapeOffset) {
        BallInfo2.startBallInfo(builder);
        BallInfo2.addPhysics(builder, physicsOffset);
        BallInfo2.addLatestTouch(builder, latestTouchOffset);
        BallInfo2.addDropShotInfo(builder, dropShotInfoOffset);
        BallInfo2.addShapeType(builder, shapeType);
        BallInfo2.addShape(builder, shapeOffset);
        return BallInfo2.endBallInfo(builder);
      }
    }
    flat4.BallInfo = BallInfo2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class BoostPadState2 {
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
        return (obj || new BoostPadState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsBoostPadState(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new BoostPadState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      isActive() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      timer() {
        var offset = this.bb.__offset(this.bb_pos, 6);
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
        var offset = builder.endObject();
        return offset;
      }
      static createBoostPadState(builder, isActive, timer) {
        BoostPadState2.startBoostPadState(builder);
        BoostPadState2.addIsActive(builder, isActive);
        BoostPadState2.addTimer(builder, timer);
        return BoostPadState2.endBoostPadState(builder);
      }
    }
    flat4.BoostPadState = BoostPadState2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class DropshotTile2 {
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
        return (obj || new DropshotTile2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsDropshotTile(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DropshotTile2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      tileState() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unknown */;
      }
      static startDropshotTile(builder) {
        builder.startObject(1);
      }
      static addTileState(builder, tileState) {
        builder.addFieldInt8(0, tileState, 0 /* Unknown */);
      }
      static endDropshotTile(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createDropshotTile(builder, tileState) {
        DropshotTile2.startDropshotTile(builder);
        DropshotTile2.addTileState(builder, tileState);
        return DropshotTile2.endDropshotTile(builder);
      }
    }
    flat4.DropshotTile = DropshotTile2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class GameInfo2 {
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
        return (obj || new GameInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsGameInfo(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new GameInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      secondsElapsed() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      gameTimeRemaining() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      isOvertime() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      isUnlimitedTime() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      isRoundActive() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      isKickoffPause() {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      isMatchEnded() {
        var offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      worldGravityZ() {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      gameSpeed() {
        var offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      frameNum() {
        var offset = this.bb.__offset(this.bb_pos, 22);
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
        var offset = builder.endObject();
        return offset;
      }
      static createGameInfo(builder, secondsElapsed, gameTimeRemaining, isOvertime, isUnlimitedTime, isRoundActive, isKickoffPause, isMatchEnded, worldGravityZ, gameSpeed, frameNum) {
        GameInfo2.startGameInfo(builder);
        GameInfo2.addSecondsElapsed(builder, secondsElapsed);
        GameInfo2.addGameTimeRemaining(builder, gameTimeRemaining);
        GameInfo2.addIsOvertime(builder, isOvertime);
        GameInfo2.addIsUnlimitedTime(builder, isUnlimitedTime);
        GameInfo2.addIsRoundActive(builder, isRoundActive);
        GameInfo2.addIsKickoffPause(builder, isKickoffPause);
        GameInfo2.addIsMatchEnded(builder, isMatchEnded);
        GameInfo2.addWorldGravityZ(builder, worldGravityZ);
        GameInfo2.addGameSpeed(builder, gameSpeed);
        GameInfo2.addFrameNum(builder, frameNum);
        return GameInfo2.endGameInfo(builder);
      }
    }
    flat4.GameInfo = GameInfo2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class TeamInfo2 {
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
        return (obj || new TeamInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsTeamInfo(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new TeamInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      teamIndex() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      score() {
        var offset = this.bb.__offset(this.bb_pos, 6);
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
        var offset = builder.endObject();
        return offset;
      }
      static createTeamInfo(builder, teamIndex, score) {
        TeamInfo2.startTeamInfo(builder);
        TeamInfo2.addTeamIndex(builder, teamIndex);
        TeamInfo2.addScore(builder, score);
        return TeamInfo2.endTeamInfo(builder);
      }
    }
    flat4.TeamInfo = TeamInfo2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class GameTickPacket2 {
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
        return (obj || new GameTickPacket2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsGameTickPacket(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new GameTickPacket2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      players(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.PlayerInfo()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      playersLength() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
      }
      boostPadStates(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.BoostPadState()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      boostPadStatesLength() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
      }
      ball(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.BallInfo()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      gameInfo(obj) {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? (obj || new rlbot2.flat.GameInfo()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      tileInformation(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? (obj || new rlbot2.flat.DropshotTile()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      tileInformationLength() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
      }
      teams(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? (obj || new rlbot2.flat.TeamInfo()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      teamsLength() {
        var offset = this.bb.__offset(this.bb_pos, 14);
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
        for (var i = data.length - 1; i >= 0; i--) {
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
        for (var i = data.length - 1; i >= 0; i--) {
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
        for (var i = data.length - 1; i >= 0; i--) {
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
        for (var i = data.length - 1; i >= 0; i--) {
          builder.addOffset(data[i]);
        }
        return builder.endVector();
      }
      static startTeamsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
      }
      static endGameTickPacket(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createGameTickPacket(builder, playersOffset, boostPadStatesOffset, ballOffset, gameInfoOffset, tileInformationOffset, teamsOffset) {
        GameTickPacket2.startGameTickPacket(builder);
        GameTickPacket2.addPlayers(builder, playersOffset);
        GameTickPacket2.addBoostPadStates(builder, boostPadStatesOffset);
        GameTickPacket2.addBall(builder, ballOffset);
        GameTickPacket2.addGameInfo(builder, gameInfoOffset);
        GameTickPacket2.addTileInformation(builder, tileInformationOffset);
        GameTickPacket2.addTeams(builder, teamsOffset);
        return GameTickPacket2.endGameTickPacket(builder);
      }
    }
    flat4.GameTickPacket = GameTickPacket2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class RigidBodyState {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new RigidBodyState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      frame() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      location(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      rotation(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.Quaternion()).__init(this.bb_pos + offset, this.bb) : null;
      }
      velocity(obj) {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      angularVelocity(obj) {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createRigidBodyState(builder, frame, locationOffset, rotationOffset, velocityOffset, angularVelocityOffset) {
        RigidBodyState.startRigidBodyState(builder);
        RigidBodyState.addFrame(builder, frame);
        RigidBodyState.addLocation(builder, locationOffset);
        RigidBodyState.addRotation(builder, rotationOffset);
        RigidBodyState.addVelocity(builder, velocityOffset);
        RigidBodyState.addAngularVelocity(builder, angularVelocityOffset);
        return RigidBodyState.endRigidBodyState(builder);
      }
    }
    flat4.RigidBodyState = RigidBodyState;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class PlayerRigidBodyState {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PlayerRigidBodyState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      state(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.RigidBodyState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      input(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.ControllerState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createPlayerRigidBodyState(builder, stateOffset, inputOffset) {
        PlayerRigidBodyState.startPlayerRigidBodyState(builder);
        PlayerRigidBodyState.addState(builder, stateOffset);
        PlayerRigidBodyState.addInput(builder, inputOffset);
        return PlayerRigidBodyState.endPlayerRigidBodyState(builder);
      }
    }
    flat4.PlayerRigidBodyState = PlayerRigidBodyState;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class BallRigidBodyState {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new BallRigidBodyState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      state(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.RigidBodyState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      static startBallRigidBodyState(builder) {
        builder.startObject(1);
      }
      static addState(builder, stateOffset) {
        builder.addFieldOffset(0, stateOffset, 0);
      }
      static endBallRigidBodyState(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createBallRigidBodyState(builder, stateOffset) {
        BallRigidBodyState.startBallRigidBodyState(builder);
        BallRigidBodyState.addState(builder, stateOffset);
        return BallRigidBodyState.endBallRigidBodyState(builder);
      }
    }
    flat4.BallRigidBodyState = BallRigidBodyState;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class RigidBodyTick {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new RigidBodyTick()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      ball(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.BallRigidBodyState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      players(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.PlayerRigidBodyState()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      playersLength() {
        var offset = this.bb.__offset(this.bb_pos, 6);
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
        for (var i = data.length - 1; i >= 0; i--) {
          builder.addOffset(data[i]);
        }
        return builder.endVector();
      }
      static startPlayersVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
      }
      static endRigidBodyTick(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createRigidBodyTick(builder, ballOffset, playersOffset) {
        RigidBodyTick.startRigidBodyTick(builder);
        RigidBodyTick.addBall(builder, ballOffset);
        RigidBodyTick.addPlayers(builder, playersOffset);
        return RigidBodyTick.endRigidBodyTick(builder);
      }
    }
    flat4.RigidBodyTick = RigidBodyTick;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class GoalInfo2 {
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
        return (obj || new GoalInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsGoalInfo(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new GoalInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      teamNum() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      location(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      direction(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      width() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      height() {
        var offset = this.bb.__offset(this.bb_pos, 12);
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
        var offset = builder.endObject();
        return offset;
      }
      static createGoalInfo(builder, teamNum, locationOffset, directionOffset, width, height) {
        GoalInfo2.startGoalInfo(builder);
        GoalInfo2.addTeamNum(builder, teamNum);
        GoalInfo2.addLocation(builder, locationOffset);
        GoalInfo2.addDirection(builder, directionOffset);
        GoalInfo2.addWidth(builder, width);
        GoalInfo2.addHeight(builder, height);
        return GoalInfo2.endGoalInfo(builder);
      }
    }
    flat4.GoalInfo = GoalInfo2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class BoostPad2 {
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
        return (obj || new BoostPad2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsBoostPad(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new BoostPad2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      location(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      isFullBoost() {
        var offset = this.bb.__offset(this.bb_pos, 6);
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
        var offset = builder.endObject();
        return offset;
      }
      static createBoostPad(builder, locationOffset, isFullBoost) {
        BoostPad2.startBoostPad(builder);
        BoostPad2.addLocation(builder, locationOffset);
        BoostPad2.addIsFullBoost(builder, isFullBoost);
        return BoostPad2.endBoostPad(builder);
      }
    }
    flat4.BoostPad = BoostPad2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class FieldInfo2 {
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
        return (obj || new FieldInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsFieldInfo(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new FieldInfo2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      boostPads(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.BoostPad()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      boostPadsLength() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
      }
      goals(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.GoalInfo()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      goalsLength() {
        var offset = this.bb.__offset(this.bb_pos, 6);
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
        for (var i = data.length - 1; i >= 0; i--) {
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
        for (var i = data.length - 1; i >= 0; i--) {
          builder.addOffset(data[i]);
        }
        return builder.endVector();
      }
      static startGoalsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
      }
      static endFieldInfo(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createFieldInfo(builder, boostPadsOffset, goalsOffset) {
        FieldInfo2.startFieldInfo(builder);
        FieldInfo2.addBoostPads(builder, boostPadsOffset);
        FieldInfo2.addGoals(builder, goalsOffset);
        return FieldInfo2.endFieldInfo(builder);
      }
    }
    flat4.FieldInfo = FieldInfo2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class Float2 {
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
      static createFloat(builder, val) {
        builder.prep(4, 4);
        builder.writeFloat32(val);
        return builder.offset();
      }
    }
    flat4.Float = Float2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class Bool {
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
      static createBool(builder, val) {
        builder.prep(1, 1);
        builder.writeInt8(+val);
        return builder.offset();
      }
    }
    flat4.Bool = Bool;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class Vector3Partial2 {
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
        return (obj || new Vector3Partial2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsVector3Partial(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Vector3Partial2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      x(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.Float()).__init(this.bb_pos + offset, this.bb) : null;
      }
      y(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Float()).__init(this.bb_pos + offset, this.bb) : null;
      }
      z(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.Float()).__init(this.bb_pos + offset, this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createVector3Partial(builder, xOffset, yOffset, zOffset) {
        Vector3Partial2.startVector3Partial(builder);
        Vector3Partial2.addX(builder, xOffset);
        Vector3Partial2.addY(builder, yOffset);
        Vector3Partial2.addZ(builder, zOffset);
        return Vector3Partial2.endVector3Partial(builder);
      }
    }
    flat4.Vector3Partial = Vector3Partial2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class RotatorPartial2 {
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
        return (obj || new RotatorPartial2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsRotatorPartial(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new RotatorPartial2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      pitch(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.Float()).__init(this.bb_pos + offset, this.bb) : null;
      }
      yaw(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Float()).__init(this.bb_pos + offset, this.bb) : null;
      }
      roll(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.Float()).__init(this.bb_pos + offset, this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createRotatorPartial(builder, pitchOffset, yawOffset, rollOffset) {
        RotatorPartial2.startRotatorPartial(builder);
        RotatorPartial2.addPitch(builder, pitchOffset);
        RotatorPartial2.addYaw(builder, yawOffset);
        RotatorPartial2.addRoll(builder, rollOffset);
        return RotatorPartial2.endRotatorPartial(builder);
      }
    }
    flat4.RotatorPartial = RotatorPartial2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class DesiredPhysics2 {
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
        return (obj || new DesiredPhysics2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsDesiredPhysics(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DesiredPhysics2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      location(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.Vector3Partial()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      rotation(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.RotatorPartial()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      velocity(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.Vector3Partial()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      angularVelocity(obj) {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? (obj || new rlbot2.flat.Vector3Partial()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createDesiredPhysics(builder, locationOffset, rotationOffset, velocityOffset, angularVelocityOffset) {
        DesiredPhysics2.startDesiredPhysics(builder);
        DesiredPhysics2.addLocation(builder, locationOffset);
        DesiredPhysics2.addRotation(builder, rotationOffset);
        DesiredPhysics2.addVelocity(builder, velocityOffset);
        DesiredPhysics2.addAngularVelocity(builder, angularVelocityOffset);
        return DesiredPhysics2.endDesiredPhysics(builder);
      }
    }
    flat4.DesiredPhysics = DesiredPhysics2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class DesiredBallState2 {
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
        return (obj || new DesiredBallState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsDesiredBallState(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DesiredBallState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      physics(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.DesiredPhysics()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      static startDesiredBallState(builder) {
        builder.startObject(1);
      }
      static addPhysics(builder, physicsOffset) {
        builder.addFieldOffset(0, physicsOffset, 0);
      }
      static endDesiredBallState(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createDesiredBallState(builder, physicsOffset) {
        DesiredBallState2.startDesiredBallState(builder);
        DesiredBallState2.addPhysics(builder, physicsOffset);
        return DesiredBallState2.endDesiredBallState(builder);
      }
    }
    flat4.DesiredBallState = DesiredBallState2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class DesiredCarState2 {
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
        return (obj || new DesiredCarState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsDesiredCarState(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DesiredCarState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      physics(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.DesiredPhysics()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      boostAmount(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Float()).__init(this.bb_pos + offset, this.bb) : null;
      }
      jumped(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.Bool()).__init(this.bb_pos + offset, this.bb) : null;
      }
      doubleJumped(obj) {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? (obj || new rlbot2.flat.Bool()).__init(this.bb_pos + offset, this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createDesiredCarState(builder, physicsOffset, boostAmountOffset, jumpedOffset, doubleJumpedOffset) {
        DesiredCarState2.startDesiredCarState(builder);
        DesiredCarState2.addPhysics(builder, physicsOffset);
        DesiredCarState2.addBoostAmount(builder, boostAmountOffset);
        DesiredCarState2.addJumped(builder, jumpedOffset);
        DesiredCarState2.addDoubleJumped(builder, doubleJumpedOffset);
        return DesiredCarState2.endDesiredCarState(builder);
      }
    }
    flat4.DesiredCarState = DesiredCarState2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class DesiredBoostState2 {
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
        return (obj || new DesiredBoostState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsDesiredBoostState(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DesiredBoostState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      respawnTime(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.Float()).__init(this.bb_pos + offset, this.bb) : null;
      }
      static startDesiredBoostState(builder) {
        builder.startObject(1);
      }
      static addRespawnTime(builder, respawnTimeOffset) {
        builder.addFieldStruct(0, respawnTimeOffset, 0);
      }
      static endDesiredBoostState(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createDesiredBoostState(builder, respawnTimeOffset) {
        DesiredBoostState2.startDesiredBoostState(builder);
        DesiredBoostState2.addRespawnTime(builder, respawnTimeOffset);
        return DesiredBoostState2.endDesiredBoostState(builder);
      }
    }
    flat4.DesiredBoostState = DesiredBoostState2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class DesiredGameInfoState2 {
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
        return (obj || new DesiredGameInfoState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsDesiredGameInfoState(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DesiredGameInfoState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      worldGravityZ(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.Float()).__init(this.bb_pos + offset, this.bb) : null;
      }
      gameSpeed(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Float()).__init(this.bb_pos + offset, this.bb) : null;
      }
      paused(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.Bool()).__init(this.bb_pos + offset, this.bb) : null;
      }
      endMatch(obj) {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? (obj || new rlbot2.flat.Bool()).__init(this.bb_pos + offset, this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createDesiredGameInfoState(builder, worldGravityZOffset, gameSpeedOffset, pausedOffset, endMatchOffset) {
        DesiredGameInfoState2.startDesiredGameInfoState(builder);
        DesiredGameInfoState2.addWorldGravityZ(builder, worldGravityZOffset);
        DesiredGameInfoState2.addGameSpeed(builder, gameSpeedOffset);
        DesiredGameInfoState2.addPaused(builder, pausedOffset);
        DesiredGameInfoState2.addEndMatch(builder, endMatchOffset);
        return DesiredGameInfoState2.endDesiredGameInfoState(builder);
      }
    }
    flat4.DesiredGameInfoState = DesiredGameInfoState2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class ConsoleCommand {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new ConsoleCommand()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      command(optionalEncoding) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
      }
      static startConsoleCommand(builder) {
        builder.startObject(1);
      }
      static addCommand(builder, commandOffset) {
        builder.addFieldOffset(0, commandOffset, 0);
      }
      static endConsoleCommand(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createConsoleCommand(builder, commandOffset) {
        ConsoleCommand.startConsoleCommand(builder);
        ConsoleCommand.addCommand(builder, commandOffset);
        return ConsoleCommand.endConsoleCommand(builder);
      }
    }
    flat4.ConsoleCommand = ConsoleCommand;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class DesiredGameState2 {
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
        return (obj || new DesiredGameState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsDesiredGameState(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DesiredGameState2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      ballState(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.DesiredBallState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      carStates(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.DesiredCarState()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      carStatesLength() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
      }
      boostStates(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.DesiredBoostState()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      boostStatesLength() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
      }
      gameInfoState(obj) {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? (obj || new rlbot2.flat.DesiredGameInfoState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      consoleCommands(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? (obj || new rlbot2.flat.ConsoleCommand()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      consoleCommandsLength() {
        var offset = this.bb.__offset(this.bb_pos, 12);
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
        for (var i = data.length - 1; i >= 0; i--) {
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
        for (var i = data.length - 1; i >= 0; i--) {
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
        for (var i = data.length - 1; i >= 0; i--) {
          builder.addOffset(data[i]);
        }
        return builder.endVector();
      }
      static startConsoleCommandsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
      }
      static endDesiredGameState(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createDesiredGameState(builder, ballStateOffset, carStatesOffset, boostStatesOffset, gameInfoStateOffset, consoleCommandsOffset) {
        DesiredGameState2.startDesiredGameState(builder);
        DesiredGameState2.addBallState(builder, ballStateOffset);
        DesiredGameState2.addCarStates(builder, carStatesOffset);
        DesiredGameState2.addBoostStates(builder, boostStatesOffset);
        DesiredGameState2.addGameInfoState(builder, gameInfoStateOffset);
        DesiredGameState2.addConsoleCommands(builder, consoleCommandsOffset);
        return DesiredGameState2.endDesiredGameState(builder);
      }
    }
    flat4.DesiredGameState = DesiredGameState2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class Color3 {
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
        return (obj || new Color3()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsColor(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Color3()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      a() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
      }
      r() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
      }
      g() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
      }
      b() {
        var offset = this.bb.__offset(this.bb_pos, 10);
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
        var offset = builder.endObject();
        return offset;
      }
      static createColor(builder, a, r, g, b) {
        Color3.startColor(builder);
        Color3.addA(builder, a);
        Color3.addR(builder, r);
        Color3.addG(builder, g);
        Color3.addB(builder, b);
        return Color3.endColor(builder);
      }
    }
    flat4.Color = Color3;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class RenderMessage2 {
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
        return (obj || new RenderMessage2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsRenderMessage(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new RenderMessage2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      renderType() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 1 /* DrawLine2D */;
      }
      color(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Color()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      start(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      end(obj) {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      scaleX() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 1;
      }
      scaleY() {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 1;
      }
      text(optionalEncoding) {
        var offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
      }
      isFilled() {
        var offset = this.bb.__offset(this.bb_pos, 18);
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
        var offset = builder.endObject();
        return offset;
      }
      static createRenderMessage(builder, renderType, colorOffset, startOffset, endOffset, scaleX, scaleY, textOffset, isFilled) {
        RenderMessage2.startRenderMessage(builder);
        RenderMessage2.addRenderType(builder, renderType);
        RenderMessage2.addColor(builder, colorOffset);
        RenderMessage2.addStart(builder, startOffset);
        RenderMessage2.addEnd(builder, endOffset);
        RenderMessage2.addScaleX(builder, scaleX);
        RenderMessage2.addScaleY(builder, scaleY);
        RenderMessage2.addText(builder, textOffset);
        RenderMessage2.addIsFilled(builder, isFilled);
        return RenderMessage2.endRenderMessage(builder);
      }
    }
    flat4.RenderMessage = RenderMessage2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class RenderGroup2 {
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
        return (obj || new RenderGroup2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsRenderGroup(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new RenderGroup2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      renderMessages(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.RenderMessage()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      renderMessagesLength() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
      }
      id() {
        var offset = this.bb.__offset(this.bb_pos, 6);
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
        for (var i = data.length - 1; i >= 0; i--) {
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
        var offset = builder.endObject();
        return offset;
      }
      static createRenderGroup(builder, renderMessagesOffset, id) {
        RenderGroup2.startRenderGroup(builder);
        RenderGroup2.addRenderMessages(builder, renderMessagesOffset);
        RenderGroup2.addId(builder, id);
        return RenderGroup2.endRenderGroup(builder);
      }
    }
    flat4.RenderGroup = RenderGroup2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class QuickChat2 {
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
        return (obj || new QuickChat2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsQuickChat(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new QuickChat2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      quickChatSelection() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Information_IGotIt */;
      }
      playerIndex() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      teamOnly() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      messageIndex() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      timeStamp() {
        var offset = this.bb.__offset(this.bb_pos, 12);
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
        var offset = builder.endObject();
        return offset;
      }
      static finishQuickChatBuffer(builder, offset) {
        builder.finish(offset);
      }
      static finishSizePrefixedQuickChatBuffer(builder, offset) {
        builder.finish(offset, void 0, true);
      }
      static createQuickChat(builder, quickChatSelection, playerIndex, teamOnly, messageIndex, timeStamp) {
        QuickChat2.startQuickChat(builder);
        QuickChat2.addQuickChatSelection(builder, quickChatSelection);
        QuickChat2.addPlayerIndex(builder, playerIndex);
        QuickChat2.addTeamOnly(builder, teamOnly);
        QuickChat2.addMessageIndex(builder, messageIndex);
        QuickChat2.addTimeStamp(builder, timeStamp);
        return QuickChat2.endQuickChat(builder);
      }
    }
    flat4.QuickChat = QuickChat2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class TinyPlayer {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new TinyPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      location(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      rotation(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Rotator()).__init(this.bb_pos + offset, this.bb) : null;
      }
      velocity(obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      hasWheelContact() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      isSupersonic() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      team() {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      boost() {
        var offset = this.bb.__offset(this.bb_pos, 16);
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
        var offset = builder.endObject();
        return offset;
      }
      static createTinyPlayer(builder, locationOffset, rotationOffset, velocityOffset, hasWheelContact, isSupersonic, team, boost) {
        TinyPlayer.startTinyPlayer(builder);
        TinyPlayer.addLocation(builder, locationOffset);
        TinyPlayer.addRotation(builder, rotationOffset);
        TinyPlayer.addVelocity(builder, velocityOffset);
        TinyPlayer.addHasWheelContact(builder, hasWheelContact);
        TinyPlayer.addIsSupersonic(builder, isSupersonic);
        TinyPlayer.addTeam(builder, team);
        TinyPlayer.addBoost(builder, boost);
        return TinyPlayer.endTinyPlayer(builder);
      }
    }
    flat4.TinyPlayer = TinyPlayer;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class TinyBall {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new TinyBall()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      location(obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
      }
      velocity(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Vector3()).__init(this.bb_pos + offset, this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createTinyBall(builder, locationOffset, velocityOffset) {
        TinyBall.startTinyBall(builder);
        TinyBall.addLocation(builder, locationOffset);
        TinyBall.addVelocity(builder, velocityOffset);
        return TinyBall.endTinyBall(builder);
      }
    }
    flat4.TinyBall = TinyBall;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class TinyPacket {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new TinyPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      players(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.TinyPlayer()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      playersLength() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
      }
      ball(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.TinyBall()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      static startTinyPacket(builder) {
        builder.startObject(2);
      }
      static addPlayers(builder, playersOffset) {
        builder.addFieldOffset(0, playersOffset, 0);
      }
      static createPlayersVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (var i = data.length - 1; i >= 0; i--) {
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
        var offset = builder.endObject();
        return offset;
      }
      static createTinyPacket(builder, playersOffset, ballOffset) {
        TinyPacket.startTinyPacket(builder);
        TinyPacket.addPlayers(builder, playersOffset);
        TinyPacket.addBall(builder, ballOffset);
        return TinyPacket.endTinyPacket(builder);
      }
    }
    flat4.TinyPacket = TinyPacket;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class PredictionSlice2 {
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
        return (obj || new PredictionSlice2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsPredictionSlice(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PredictionSlice2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      gameSeconds() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      physics(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.Physics()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createPredictionSlice(builder, gameSeconds, physicsOffset) {
        PredictionSlice2.startPredictionSlice(builder);
        PredictionSlice2.addGameSeconds(builder, gameSeconds);
        PredictionSlice2.addPhysics(builder, physicsOffset);
        return PredictionSlice2.endPredictionSlice(builder);
      }
    }
    flat4.PredictionSlice = PredictionSlice2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class BallPrediction2 {
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
        return (obj || new BallPrediction2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsBallPrediction(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new BallPrediction2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      slices(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.PredictionSlice()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      slicesLength() {
        var offset = this.bb.__offset(this.bb_pos, 4);
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
        for (var i = data.length - 1; i >= 0; i--) {
          builder.addOffset(data[i]);
        }
        return builder.endVector();
      }
      static startSlicesVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
      }
      static endBallPrediction(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createBallPrediction(builder, slicesOffset) {
        BallPrediction2.startBallPrediction(builder);
        BallPrediction2.addSlices(builder, slicesOffset);
        return BallPrediction2.endBallPrediction(builder);
      }
    }
    flat4.BallPrediction = BallPrediction2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class RLBotPlayer {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new RLBotPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static startRLBotPlayer(builder) {
        builder.startObject(0);
      }
      static endRLBotPlayer(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createRLBotPlayer(builder) {
        RLBotPlayer.startRLBotPlayer(builder);
        return RLBotPlayer.endRLBotPlayer(builder);
      }
    }
    flat4.RLBotPlayer = RLBotPlayer;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class HumanPlayer {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new HumanPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static startHumanPlayer(builder) {
        builder.startObject(0);
      }
      static endHumanPlayer(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createHumanPlayer(builder) {
        HumanPlayer.startHumanPlayer(builder);
        return HumanPlayer.endHumanPlayer(builder);
      }
    }
    flat4.HumanPlayer = HumanPlayer;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class PsyonixBotPlayer2 {
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
        return (obj || new PsyonixBotPlayer2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsPsyonixBotPlayer(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PsyonixBotPlayer2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      botSkill() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      static startPsyonixBotPlayer(builder) {
        builder.startObject(1);
      }
      static addBotSkill(builder, botSkill) {
        builder.addFieldFloat32(0, botSkill, 0);
      }
      static endPsyonixBotPlayer(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createPsyonixBotPlayer(builder, botSkill) {
        PsyonixBotPlayer2.startPsyonixBotPlayer(builder);
        PsyonixBotPlayer2.addBotSkill(builder, botSkill);
        return PsyonixBotPlayer2.endPsyonixBotPlayer(builder);
      }
    }
    flat4.PsyonixBotPlayer = PsyonixBotPlayer2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class PartyMemberBotPlayer {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PartyMemberBotPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static startPartyMemberBotPlayer(builder) {
        builder.startObject(0);
      }
      static endPartyMemberBotPlayer(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createPartyMemberBotPlayer(builder) {
        PartyMemberBotPlayer.startPartyMemberBotPlayer(builder);
        return PartyMemberBotPlayer.endPartyMemberBotPlayer(builder);
      }
    }
    flat4.PartyMemberBotPlayer = PartyMemberBotPlayer;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class PlayerLoadout2 {
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
        return (obj || new PlayerLoadout2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsPlayerLoadout(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PlayerLoadout2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      teamColorId() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      customColorId() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      carId() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      decalId() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      wheelsId() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      boostId() {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      antennaId() {
        var offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      hatId() {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      paintFinishId() {
        var offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      customFinishId() {
        var offset = this.bb.__offset(this.bb_pos, 22);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      engineAudioId() {
        var offset = this.bb.__offset(this.bb_pos, 24);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      trailsId() {
        var offset = this.bb.__offset(this.bb_pos, 26);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      goalExplosionId() {
        var offset = this.bb.__offset(this.bb_pos, 28);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      loadoutPaint(obj) {
        var offset = this.bb.__offset(this.bb_pos, 30);
        return offset ? (obj || new rlbot2.flat.LoadoutPaint()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      primaryColorLookup(obj) {
        var offset = this.bb.__offset(this.bb_pos, 32);
        return offset ? (obj || new rlbot2.flat.Color()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      secondaryColorLookup(obj) {
        var offset = this.bb.__offset(this.bb_pos, 34);
        return offset ? (obj || new rlbot2.flat.Color()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
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
        var offset = builder.endObject();
        return offset;
      }
      static createPlayerLoadout(builder, teamColorId, customColorId, carId, decalId, wheelsId, boostId, antennaId, hatId, paintFinishId, customFinishId, engineAudioId, trailsId, goalExplosionId, loadoutPaintOffset, primaryColorLookupOffset, secondaryColorLookupOffset) {
        PlayerLoadout2.startPlayerLoadout(builder);
        PlayerLoadout2.addTeamColorId(builder, teamColorId);
        PlayerLoadout2.addCustomColorId(builder, customColorId);
        PlayerLoadout2.addCarId(builder, carId);
        PlayerLoadout2.addDecalId(builder, decalId);
        PlayerLoadout2.addWheelsId(builder, wheelsId);
        PlayerLoadout2.addBoostId(builder, boostId);
        PlayerLoadout2.addAntennaId(builder, antennaId);
        PlayerLoadout2.addHatId(builder, hatId);
        PlayerLoadout2.addPaintFinishId(builder, paintFinishId);
        PlayerLoadout2.addCustomFinishId(builder, customFinishId);
        PlayerLoadout2.addEngineAudioId(builder, engineAudioId);
        PlayerLoadout2.addTrailsId(builder, trailsId);
        PlayerLoadout2.addGoalExplosionId(builder, goalExplosionId);
        PlayerLoadout2.addLoadoutPaint(builder, loadoutPaintOffset);
        PlayerLoadout2.addPrimaryColorLookup(builder, primaryColorLookupOffset);
        PlayerLoadout2.addSecondaryColorLookup(builder, secondaryColorLookupOffset);
        return PlayerLoadout2.endPlayerLoadout(builder);
      }
    }
    flat4.PlayerLoadout = PlayerLoadout2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class LoadoutPaint2 {
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
        return (obj || new LoadoutPaint2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsLoadoutPaint(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new LoadoutPaint2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      carPaintId() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      decalPaintId() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      wheelsPaintId() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      boostPaintId() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      antennaPaintId() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      hatPaintId() {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      trailsPaintId() {
        var offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      goalExplosionPaintId() {
        var offset = this.bb.__offset(this.bb_pos, 18);
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
        var offset = builder.endObject();
        return offset;
      }
      static createLoadoutPaint(builder, carPaintId, decalPaintId, wheelsPaintId, boostPaintId, antennaPaintId, hatPaintId, trailsPaintId, goalExplosionPaintId) {
        LoadoutPaint2.startLoadoutPaint(builder);
        LoadoutPaint2.addCarPaintId(builder, carPaintId);
        LoadoutPaint2.addDecalPaintId(builder, decalPaintId);
        LoadoutPaint2.addWheelsPaintId(builder, wheelsPaintId);
        LoadoutPaint2.addBoostPaintId(builder, boostPaintId);
        LoadoutPaint2.addAntennaPaintId(builder, antennaPaintId);
        LoadoutPaint2.addHatPaintId(builder, hatPaintId);
        LoadoutPaint2.addTrailsPaintId(builder, trailsPaintId);
        LoadoutPaint2.addGoalExplosionPaintId(builder, goalExplosionPaintId);
        return LoadoutPaint2.endLoadoutPaint(builder);
      }
    }
    flat4.LoadoutPaint = LoadoutPaint2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class PlayerConfiguration2 {
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
        return (obj || new PlayerConfiguration2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsPlayerConfiguration(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PlayerConfiguration2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      varietyType() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* NONE */;
      }
      variety(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
      }
      name(optionalEncoding) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
      }
      team() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      loadout(obj) {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? (obj || new rlbot2.flat.PlayerLoadout()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      spawnId() {
        var offset = this.bb.__offset(this.bb_pos, 14);
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
        var offset = builder.endObject();
        return offset;
      }
      static createPlayerConfiguration(builder, varietyType, varietyOffset, nameOffset, team, loadoutOffset, spawnId) {
        PlayerConfiguration2.startPlayerConfiguration(builder);
        PlayerConfiguration2.addVarietyType(builder, varietyType);
        PlayerConfiguration2.addVariety(builder, varietyOffset);
        PlayerConfiguration2.addName(builder, nameOffset);
        PlayerConfiguration2.addTeam(builder, team);
        PlayerConfiguration2.addLoadout(builder, loadoutOffset);
        PlayerConfiguration2.addSpawnId(builder, spawnId);
        return PlayerConfiguration2.endPlayerConfiguration(builder);
      }
    }
    flat4.PlayerConfiguration = PlayerConfiguration2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class MutatorSettings2 {
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
        return (obj || new MutatorSettings2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsMutatorSettings(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new MutatorSettings2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      matchLength() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Five_Minutes */;
      }
      maxScore() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unlimited */;
      }
      overtimeOption() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unlimited */;
      }
      seriesLengthOption() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unlimited */;
      }
      gameSpeedOption() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
      }
      ballMaxSpeedOption() {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
      }
      ballTypeOption() {
        var offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
      }
      ballWeightOption() {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
      }
      ballSizeOption() {
        var offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
      }
      ballBouncinessOption() {
        var offset = this.bb.__offset(this.bb_pos, 22);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
      }
      boostOption() {
        var offset = this.bb.__offset(this.bb_pos, 24);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Normal_Boost */;
      }
      rumbleOption() {
        var offset = this.bb.__offset(this.bb_pos, 26);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* No_Rumble */;
      }
      boostStrengthOption() {
        var offset = this.bb.__offset(this.bb_pos, 28);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* One */;
      }
      gravityOption() {
        var offset = this.bb.__offset(this.bb_pos, 30);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
      }
      demolishOption() {
        var offset = this.bb.__offset(this.bb_pos, 32);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Default */;
      }
      respawnTimeOption() {
        var offset = this.bb.__offset(this.bb_pos, 34);
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
        var offset = builder.endObject();
        return offset;
      }
      static createMutatorSettings(builder, matchLength, maxScore, overtimeOption, seriesLengthOption, gameSpeedOption, ballMaxSpeedOption, ballTypeOption, ballWeightOption, ballSizeOption, ballBouncinessOption, boostOption, rumbleOption, boostStrengthOption, gravityOption, demolishOption, respawnTimeOption) {
        MutatorSettings2.startMutatorSettings(builder);
        MutatorSettings2.addMatchLength(builder, matchLength);
        MutatorSettings2.addMaxScore(builder, maxScore);
        MutatorSettings2.addOvertimeOption(builder, overtimeOption);
        MutatorSettings2.addSeriesLengthOption(builder, seriesLengthOption);
        MutatorSettings2.addGameSpeedOption(builder, gameSpeedOption);
        MutatorSettings2.addBallMaxSpeedOption(builder, ballMaxSpeedOption);
        MutatorSettings2.addBallTypeOption(builder, ballTypeOption);
        MutatorSettings2.addBallWeightOption(builder, ballWeightOption);
        MutatorSettings2.addBallSizeOption(builder, ballSizeOption);
        MutatorSettings2.addBallBouncinessOption(builder, ballBouncinessOption);
        MutatorSettings2.addBoostOption(builder, boostOption);
        MutatorSettings2.addRumbleOption(builder, rumbleOption);
        MutatorSettings2.addBoostStrengthOption(builder, boostStrengthOption);
        MutatorSettings2.addGravityOption(builder, gravityOption);
        MutatorSettings2.addDemolishOption(builder, demolishOption);
        MutatorSettings2.addRespawnTimeOption(builder, respawnTimeOption);
        return MutatorSettings2.endMutatorSettings(builder);
      }
    }
    flat4.MutatorSettings = MutatorSettings2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class MatchSettings2 {
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
        return (obj || new MatchSettings2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsMatchSettings(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new MatchSettings2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      playerConfigurations(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.PlayerConfiguration()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      playerConfigurationsLength() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
      }
      gameMode() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Soccer */;
      }
      gameMap() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* DFHStadium */;
      }
      skipReplays() {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      instantStart() {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      mutatorSettings(obj) {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? (obj || new rlbot2.flat.MutatorSettings()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      existingMatchBehavior() {
        var offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Restart_If_Different */;
      }
      enableLockstep() {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      enableRendering() {
        var offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      enableStateSetting() {
        var offset = this.bb.__offset(this.bb_pos, 22);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      autoSaveReplay() {
        var offset = this.bb.__offset(this.bb_pos, 24);
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
        for (var i = data.length - 1; i >= 0; i--) {
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
        var offset = builder.endObject();
        return offset;
      }
      static createMatchSettings(builder, playerConfigurationsOffset, gameMode, gameMap, skipReplays, instantStart, mutatorSettingsOffset, existingMatchBehavior, enableLockstep, enableRendering, enableStateSetting, autoSaveReplay) {
        MatchSettings2.startMatchSettings(builder);
        MatchSettings2.addPlayerConfigurations(builder, playerConfigurationsOffset);
        MatchSettings2.addGameMode(builder, gameMode);
        MatchSettings2.addGameMap(builder, gameMap);
        MatchSettings2.addSkipReplays(builder, skipReplays);
        MatchSettings2.addInstantStart(builder, instantStart);
        MatchSettings2.addMutatorSettings(builder, mutatorSettingsOffset);
        MatchSettings2.addExistingMatchBehavior(builder, existingMatchBehavior);
        MatchSettings2.addEnableLockstep(builder, enableLockstep);
        MatchSettings2.addEnableRendering(builder, enableRendering);
        MatchSettings2.addEnableStateSetting(builder, enableStateSetting);
        MatchSettings2.addAutoSaveReplay(builder, autoSaveReplay);
        return MatchSettings2.endMatchSettings(builder);
      }
    }
    flat4.MatchSettings = MatchSettings2;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class QuickChatMessages {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new QuickChatMessages()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      messages(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.QuickChat()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      messagesLength() {
        var offset = this.bb.__offset(this.bb_pos, 4);
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
        for (var i = data.length - 1; i >= 0; i--) {
          builder.addOffset(data[i]);
        }
        return builder.endVector();
      }
      static startMessagesVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
      }
      static endQuickChatMessages(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createQuickChatMessages(builder, messagesOffset) {
        QuickChatMessages.startQuickChatMessages(builder);
        QuickChatMessages.addMessages(builder, messagesOffset);
        return QuickChatMessages.endQuickChatMessages(builder);
      }
    }
    flat4.QuickChatMessages = QuickChatMessages;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class ReadyMessage {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new ReadyMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      wantsBallPredictions() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      wantsQuickChat() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
      }
      wantsGameMessages() {
        var offset = this.bb.__offset(this.bb_pos, 8);
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
        var offset = builder.endObject();
        return offset;
      }
      static createReadyMessage(builder, wantsBallPredictions, wantsQuickChat, wantsGameMessages) {
        ReadyMessage.startReadyMessage(builder);
        ReadyMessage.addWantsBallPredictions(builder, wantsBallPredictions);
        ReadyMessage.addWantsQuickChat(builder, wantsQuickChat);
        ReadyMessage.addWantsGameMessages(builder, wantsGameMessages);
        return ReadyMessage.endReadyMessage(builder);
      }
    }
    flat4.ReadyMessage = ReadyMessage;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class PlayerStatEvent {
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
        return (obj || new PlayerStatEvent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      static getSizePrefixedRootAsPlayerStatEvent(bb, obj) {
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PlayerStatEvent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      playerIndex() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      statType(optionalEncoding) {
        var offset = this.bb.__offset(this.bb_pos, 6);
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
        var offset = builder.endObject();
        return offset;
      }
      static createPlayerStatEvent(builder, playerIndex, statTypeOffset) {
        PlayerStatEvent.startPlayerStatEvent(builder);
        PlayerStatEvent.addPlayerIndex(builder, playerIndex);
        PlayerStatEvent.addStatType(builder, statTypeOffset);
        return PlayerStatEvent.endPlayerStatEvent(builder);
      }
    }
    flat4.PlayerStatEvent = PlayerStatEvent;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class PlayerSpectate {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PlayerSpectate()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      playerIndex() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      static startPlayerSpectate(builder) {
        builder.startObject(1);
      }
      static addPlayerIndex(builder, playerIndex) {
        builder.addFieldInt32(0, playerIndex, 0);
      }
      static endPlayerSpectate(builder) {
        var offset = builder.endObject();
        return offset;
      }
      static createPlayerSpectate(builder, playerIndex) {
        PlayerSpectate.startPlayerSpectate(builder);
        PlayerSpectate.addPlayerIndex(builder, playerIndex);
        return PlayerSpectate.endPlayerSpectate(builder);
      }
    }
    flat4.PlayerSpectate = PlayerSpectate;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class PlayerInputChange {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PlayerInputChange()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      playerIndex() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
      }
      controllerState(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new rlbot2.flat.ControllerState()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
      }
      dodgeForward() {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      dodgeRight() {
        var offset = this.bb.__offset(this.bb_pos, 10);
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
        var offset = builder.endObject();
        return offset;
      }
      static createPlayerInputChange(builder, playerIndex, controllerStateOffset, dodgeForward, dodgeRight) {
        PlayerInputChange.startPlayerInputChange(builder);
        PlayerInputChange.addPlayerIndex(builder, playerIndex);
        PlayerInputChange.addControllerState(builder, controllerStateOffset);
        PlayerInputChange.addDodgeForward(builder, dodgeForward);
        PlayerInputChange.addDodgeRight(builder, dodgeRight);
        return PlayerInputChange.endPlayerInputChange(builder);
      }
    }
    flat4.PlayerInputChange = PlayerInputChange;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class GameMessageWrapper {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new GameMessageWrapper()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      MessageType() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* NONE */;
      }
      Message(obj) {
        var offset = this.bb.__offset(this.bb_pos, 6);
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
        var offset = builder.endObject();
        return offset;
      }
      static createGameMessageWrapper(builder, MessageType, MessageOffset) {
        GameMessageWrapper.startGameMessageWrapper(builder);
        GameMessageWrapper.addMessageType(builder, MessageType);
        GameMessageWrapper.addMessage(builder, MessageOffset);
        return GameMessageWrapper.endGameMessageWrapper(builder);
      }
    }
    flat4.GameMessageWrapper = GameMessageWrapper;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));
((rlbot2) => {
  let flat3;
  ((flat4) => {
    class MessagePacket {
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
        bb.setPosition(bb.position() + import_flatbuffers.flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new MessagePacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
      }
      messages(index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new rlbot2.flat.GameMessageWrapper()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
      }
      messagesLength() {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
      }
      gameSeconds() {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0;
      }
      frameNum() {
        var offset = this.bb.__offset(this.bb_pos, 8);
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
        for (var i = data.length - 1; i >= 0; i--) {
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
        var offset = builder.endObject();
        return offset;
      }
      static createMessagePacket(builder, messagesOffset, gameSeconds, frameNum) {
        MessagePacket.startMessagePacket(builder);
        MessagePacket.addMessages(builder, messagesOffset);
        MessagePacket.addGameSeconds(builder, gameSeconds);
        MessagePacket.addFrameNum(builder, frameNum);
        return MessagePacket.endMessagePacket(builder);
      }
    }
    flat4.MessagePacket = MessagePacket;
  })(flat3 = rlbot2.flat || (rlbot2.flat = {}));
})(rlbot || (rlbot = {}));

// src/ControllerManager.ts
var import_flatbuffers4 = __toESM(require_flatbuffers());

// src/utils.ts
var import_colors = __toESM(require_lib());
var import_flatbuffers3 = __toESM(require_flatbuffers());

// src/flat/flatstructs.ts
var flatstructs_exports = {};
__export(flatstructs_exports, {
  BallBouncinessOption: () => BallBouncinessOption,
  BallInfo: () => BallInfo,
  BallMaxSpeedOption: () => BallMaxSpeedOption,
  BallPrediction: () => BallPrediction,
  BallSizeOption: () => BallSizeOption,
  BallState: () => BallState,
  BallTypeOption: () => BallTypeOption,
  BallWeightOption: () => BallWeightOption,
  BoostOption: () => BoostOption,
  BoostPad: () => BoostPad,
  BoostPadState: () => BoostPadState,
  BoostState: () => BoostState,
  BoostStrengthOption: () => BoostStrengthOption,
  CarState: () => CarState,
  DemolishOption: () => DemolishOption,
  ExistingMatchBehavior: () => ExistingMatchBehavior,
  FieldInfo: () => FieldInfo,
  GameInfo: () => GameInfo,
  GameInfoState: () => GameInfoState,
  GameMap: () => GameMap,
  GameMode: () => GameMode,
  GameSpeedOption: () => GameSpeedOption,
  GameState: () => GameState,
  GameTickPacket: () => GameTickPacket,
  GoalInfo: () => GoalInfo,
  GravityOption: () => GravityOption,
  LoadoutPaint: () => LoadoutPaint,
  MatchLength: () => MatchLength,
  MatchSettings: () => MatchSettings,
  MaxScore: () => MaxScore,
  MutatorSettings: () => MutatorSettings,
  OvertimeOption: () => OvertimeOption,
  Physics: () => Physics,
  PlayerClass: () => PlayerClass,
  PlayerConfiguration: () => PlayerConfiguration,
  PlayerInfo: () => PlayerInfo,
  PlayerLoadout: () => PlayerLoadout,
  QuickChat: () => QuickChat,
  QuickChatSelection: () => QuickChatSelection,
  RespawnTimeOption: () => RespawnTimeOption,
  Rotator: () => Rotator,
  RumbleOption: () => RumbleOption,
  SeriesLengthOption: () => SeriesLengthOption,
  TeamInfo: () => TeamInfo,
  Touch: () => Touch,
  Vector3: () => Vector3
});

// src/GameState.ts
var import_flatbuffers2 = __toESM(require_flatbuffers());
var flat = rlbot.flat;
var {
  RotatorPartial,
  DesiredPhysics,
  DesiredBallState,
  DesiredCarState,
  DesiredBoostState,
  DesiredGameInfoState,
  DesiredGameState,
  Float,
  Vector3Partial
} = flat;
var Vector3 = class {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  fromFlat(flat3) {
    this.x = flat3.x();
    this.y = flat3.y();
    this.z = flat3.z();
    return this;
  }
  convertToFlat(builder) {
    if (this.x == null && this.y == null && this.z == null)
      return null;
    return flat.Vector3.createVector3(builder, this.x, this.y, this.z);
  }
  convertToFlatPartial(builder) {
    if (this.x == null && this.y == null && this.z == null)
      return null;
    Vector3Partial.startVector3Partial(builder);
    if (this.x != null)
      Vector3Partial.addX(builder, Float.createFloat(builder, this.x));
    if (this.y != null)
      Vector3Partial.addY(builder, Float.createFloat(builder, this.y));
    if (this.z != null)
      Vector3Partial.addZ(builder, Float.createFloat(builder, this.z));
    return Vector3Partial.endVector3Partial(builder);
  }
};
var Rotator = class {
  constructor(pitch = 0, yaw = 0, roll = 0) {
    this.pitch = pitch;
    this.yaw = yaw;
    this.roll = roll;
  }
  fromFlat(flat3) {
    if (flat3 == null)
      return this;
    this.pitch = flat3.pitch();
    this.yaw = flat3.yaw();
    this.roll = flat3.roll();
    return this;
  }
  convertToFlat(builder) {
    if (this.pitch == null && this.yaw == null && this.roll == null)
      return null;
    RotatorPartial.startRotatorPartial(builder);
    if (this.pitch != null)
      RotatorPartial.addPitch(builder, Float.createFloat(builder, this.pitch));
    if (this.yaw != null)
      RotatorPartial.addYaw(builder, Float.createFloat(builder, this.yaw));
    if (this.roll != null)
      RotatorPartial.addRoll(builder, Float.createFloat(builder, this.roll));
    return RotatorPartial.endRotatorPartial(builder);
  }
};
var Physics = class {
  constructor(location = new Vector3(), rotation = new Rotator(), velocity = new Vector3(), angularVelocity = new Vector3()) {
    this.location = location;
    this.rotation = rotation;
    this.velocity = velocity;
    this.angularVelocity = angularVelocity;
  }
  fromFlat(flat3) {
    this.location = new Vector3().fromFlat(flat3.location());
    this.rotation = new Rotator().fromFlat(flat3.rotation());
    this.velocity = new Vector3().fromFlat(flat3.velocity());
    this.angularVelocity = new Vector3().fromFlat(flat3.angularVelocity());
    return this;
  }
  convertToFlat(builder) {
    let locationFlat = this.location ? this.location.convertToFlatPartial(builder) : null;
    let rotationFlat = this.rotation ? this.rotation.convertToFlat(builder) : null;
    let velocityFlat = this.velocity ? this.velocity.convertToFlatPartial(builder) : null;
    let angularVelocityFlat = this.angularVelocity ? this.angularVelocity.convertToFlatPartial(builder) : null;
    if (locationFlat == null && rotationFlat == null && velocityFlat == null && angularVelocityFlat == null)
      return null;
    DesiredPhysics.startDesiredPhysics(builder);
    if (locationFlat != null)
      DesiredPhysics.addLocation(builder, locationFlat);
    if (rotationFlat != null)
      DesiredPhysics.addRotation(builder, rotationFlat);
    if (velocityFlat != null)
      DesiredPhysics.addVelocity(builder, velocityFlat);
    if (angularVelocityFlat != null)
      DesiredPhysics.addAngularVelocity(builder, angularVelocityFlat);
    return DesiredPhysics.endDesiredPhysics(builder);
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
      DesiredBallState.startDesiredBallState(builder);
      DesiredBallState.addPhysics(builder, physicsFlat);
      return DesiredBallState.endDesiredBallState(builder);
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
    DesiredCarState.startDesiredCarState(builder);
    if (physicsFlat != null)
      DesiredCarState.addPhysics(builder, physicsFlat);
    if (this.boostAmount != null)
      DesiredCarState.addBoostAmount(builder, this.boostAmount);
    if (this.jumped != null)
      DesiredCarState.addJumped(builder, Number(this.jumped));
    if (this.doubleJumped != null)
      DesiredCarState.addDoubleJumped(builder, Number(this.doubleJumped));
    return DesiredCarState.endDesiredCarState(builder);
  }
};
var BoostState = class {
  constructor(respawnTime) {
    this.respawnTime = respawnTime;
  }
  convertToFlat(builder) {
    DesiredBoostState.startDesiredBoostState(builder);
    if (this.respawnTime != null)
      DesiredBoostState.addRespawnTime(builder, this.respawnTime);
    return DesiredBoostState.endDesiredBoostState(builder);
  }
};
var GameInfoState = class {
  constructor(worldGravityZ, gameSpeed) {
    this.worldGravityZ = worldGravityZ;
    this.gameSpeed = gameSpeed;
  }
  convertToFlat(builder) {
    DesiredGameInfoState.startDesiredGameInfoState(builder);
    if (this.worldGravityZ != null)
      DesiredGameInfoState.addWorldGravityZ(builder, this.worldGravityZ);
    if (this.gameSpeed != null)
      DesiredGameInfoState.addGameSpeed(builder, this.gameSpeed);
    return DesiredGameInfoState.endDesiredGameInfoState(builder);
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
      builder = new import_flatbuffers2.flatbuffers.Builder(0);
    let ballStateFlat = this.ballState ? this.ballState.convertToFlat(builder) : null;
    let carStates = this.carStates ? [] : null;
    if (carStates != null) {
      for (let carState of this.carStates) {
        carStates.push(carState ? carState.convertToFlat(builder) : null);
      }
    }
    let carStatesFlat = carStates ? DesiredGameState.createCarStatesVector(builder, carStates) : null;
    let boostStates = this.boostStates ? [] : null;
    if (boostStates != null) {
      for (let boostState of this.boostStates) {
        boostStates.push(boostState ? boostState.convertToFlat(builder) : null);
      }
    }
    let boostStatesFlat = boostStates ? DesiredGameState.createBoostStatesVector(builder, boostStates) : null;
    let gameInfoStateFlat = this.gameInfoState ? this.gameInfoState.convertToFlat(builder) : null;
    DesiredGameState.startDesiredGameState(builder);
    if (ballStateFlat != null)
      DesiredGameState.addBallState(builder, ballStateFlat);
    if (carStatesFlat != null)
      DesiredGameState.addCarStates(builder, carStatesFlat);
    if (boostStatesFlat != null)
      DesiredGameState.addBoostStates(builder, boostStatesFlat);
    if (gameInfoStateFlat != null)
      DesiredGameState.addGameInfoState(builder, gameInfoStateFlat);
    return DesiredGameState.endDesiredGameState(builder);
  }
};

// src/flat/flatstructs.ts
var Touch = class {
  constructor(flat3) {
    this.playerName = flat3.playerName();
    this.gameSeconds = flat3.gameSeconds();
    this.location = new Vector3().fromFlat(flat3.location());
    this.normal = new Vector3().fromFlat(flat3.normal());
    this.team = flat3.team();
    this.playerIndex = flat3.playerIndex();
  }
};
var DropShotBallInfo = class {
  constructor(flat3) {
    this.absorbedForce = flat3.absorbedForce();
    this.damageIndex = flat3.damageIndex();
    this.forceAccumRecent = flat3.forceAccumRecent();
  }
};
var BallInfo = class {
  constructor(flat3) {
    this.physics = new Physics().fromFlat(flat3.physics());
    this.latestTouch = flat3.latestTouch() ? new Touch(flat3.latestTouch()) : null;
    this.dropShotInfo = new DropShotBallInfo(flat3.dropShotInfo());
  }
};
var GameInfo = class {
  constructor(flat3) {
    this.secondsElapsed = flat3.secondsElapsed();
    this.gameTimeRemaining = flat3.gameTimeRemaining();
    this.isOvertime = flat3.isOvertime();
    this.isRoundActive = flat3.isRoundActive();
    this.isKickoffPause = flat3.isKickoffPause();
    this.isMatchEnded = flat3.isMatchEnded();
    this.worldGravityZ = flat3.worldGravityZ();
    this.gameSpeed = flat3.gameSpeed();
    this.frameNum = flat3.frameNum();
  }
};
var ScoreInfo = class {
  constructor(flat3) {
    this.score = flat3.score();
    this.goals = flat3.goals();
    this.ownGoals = flat3.ownGoals();
    this.assists = flat3.assists();
    this.saves = flat3.saves();
    this.shots = flat3.shots();
    this.demolitions = flat3.demolitions();
  }
};
var PlayerInfo = class {
  constructor(flat3) {
    this.physics = new Physics().fromFlat(flat3.physics());
    this.scoreInfo = new ScoreInfo(flat3.scoreInfo());
    this.isDemolished = flat3.isDemolished();
    this.hasWheelContact = flat3.hasWheelContact();
    this.isSupersonic = flat3.isSupersonic();
    this.isBot = flat3.isBot();
    this.jumped = flat3.jumped();
    this.doubleJumped = flat3.doubleJumped();
    this.name = flat3.name();
    this.boost = flat3.boost();
    this.team = flat3.team();
  }
};
var BoostPadState = class {
  constructor(flat3) {
    this.isActive = flat3.isActive();
    this.timer = flat3.timer();
  }
};
var TeamInfo = class {
  constructor(flat3) {
    this.teamIndex = flat3.teamIndex();
    this.score = flat3.score();
  }
};
var DropshotTile = class {
  constructor(flat3) {
    this.tileState = flat3.tileState();
  }
};
var GameTickPacket = class {
  constructor(flat3) {
    this.players = [];
    for (let p = 0; p < flat3.playersLength(); p++) {
      this.players.push(new PlayerInfo(flat3.players(p)));
    }
    this.boostPadStates = [];
    for (let b = 0; b < flat3.boostPadStatesLength(); b++) {
      this.boostPadStates.push(new BoostPadState(flat3.boostPadStates(b)));
    }
    this.ball = flat3.ball() ? new BallInfo(flat3.ball()) : null;
    this.gameInfo = flat3.gameInfo() ? new GameInfo(flat3.gameInfo(flat3.gameInfo())) : null;
    this.tileInformation = [];
    for (let t = 0; t < flat3.tileInformationLength(); t++) {
      this.tileInformation.push(new DropshotTile(flat3.tileInformation(t)));
    }
    this.teams = [];
    for (let t = 0; t < flat3.teamsLength(); t++) {
      this.teams.push(new TeamInfo(flat3.teams(t)));
    }
  }
};
var PredictionSlice = class {
  constructor(flat3) {
    this.gameSeconds = flat3.gameSeconds();
    this.physics = new Physics().fromFlat(flat3.physics());
  }
};
var BallPrediction = class {
  constructor(flat3) {
    this.slices = [];
    for (let s = 0; s < flat3.slicesLength(); s++) {
      this.slices.push(new PredictionSlice(flat3.slices(s)));
    }
  }
};
var BoostPad = class {
  constructor(flat3) {
    this.location = new Vector3().fromFlat(flat3.location());
    this.isFullBoost = flat3.isFullBoost();
  }
};
var GoalInfo = class {
  constructor(flat3) {
    this.teamNum = flat3.teamNum();
    this.location = new Vector3().fromFlat(flat3.location());
    this.direction = new Vector3().fromFlat(flat3.direction());
  }
};
var FieldInfo = class {
  constructor(flat3) {
    this.boostPads = [];
    for (let b = 0; b < flat3.boostPadsLength(); b++) {
      this.boostPads.push(new BoostPad(flat3.boostPads(b)));
    }
    this.goals = [];
    for (let g = 0; g < flat3.goalsLength(); g++) {
      this.goals.push(new GoalInfo(flat3.goals(g)));
    }
  }
};
var PsyonixBotPlayer = class {
  constructor(flat3) {
    this.botSkill = flat3.botSkill();
  }
};
var PlayerClass = class extends PsyonixBotPlayer {
  constructor(flat3) {
    super(flat3);
  }
};
var LoadoutPaint = class {
  constructor(flat3) {
    this.carPaintId = flat3.carPaintId();
    this.decalPaintId = flat3.decalPaintId();
    this.wheelsPaintId = flat3.wheelsPaintId();
    this.boostPaintId = flat3.boostPaintId();
    this.antennaPaintId = flat3.antennaPaintId();
    this.hatPaintId = flat3.hatPaintId();
    this.trailsPaintId = flat3.trailsPaintId();
    this.goalExplosionPaintId = flat3.goalExplosionPaintId();
  }
};
var Color = class {
  constructor(flat3) {
    this.a = flat3.a();
    this.r = flat3.b();
    this.g = flat3.g(), this.b = flat3.b();
  }
};
var PlayerLoadout = class {
  constructor(flat3) {
    this.teamColorId = flat3.teamColorId();
    this.customColorId = flat3.customColorId();
    this.carId = flat3.carId();
    this.decalId = flat3.decalId();
    this.wheelsId = flat3.wheelsId();
    this.boostId = flat3.boostId();
    this.antennaId = flat3.antennaId();
    this.hatId = flat3.hatId();
    this.paintFinishId = flat3.paintFinishedId();
    this.customFinishId = flat3.customFinishId();
    this.engineAudioId = flat3.engineAudioId();
    this.trailsId = flat3.trailsId();
    this.goalExplosionId = flat3.goalExplosionId();
    this.loadoutPaint = new LoadoutPaint(flat3.loadoutPaint());
    this.primaryColorLookup = new Color(flat3.primaryColorLookup());
    this.secondaryColorLookup = new Color(flat3.secondaryColorLookup());
  }
};
var PlayerConfiguration = class {
  constructor(flat3) {
    this.variety = new PlayerClass(flat3.variety());
    this.name = flat3.name();
    this.team = flat3.team();
    this.loadout = new PlayerLoadout(flat3.loadout());
    this.spawnId = flat3.spawnId();
  }
};
var GameMode = /* @__PURE__ */ ((GameMode2) => {
  GameMode2[GameMode2["Soccer"] = 0] = "Soccer";
  GameMode2[GameMode2["Hoops"] = 1] = "Hoops";
  GameMode2[GameMode2["Dropshot"] = 2] = "Dropshot";
  GameMode2[GameMode2["Hockey"] = 3] = "Hockey";
  GameMode2[GameMode2["Rumble"] = 4] = "Rumble";
  GameMode2[GameMode2["Heatseeker"] = 5] = "Heatseeker";
  return GameMode2;
})(GameMode || {});
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
var MatchLength = /* @__PURE__ */ ((MatchLength2) => {
  MatchLength2[MatchLength2["Five_Minutes"] = 0] = "Five_Minutes";
  MatchLength2[MatchLength2["Ten_Minutes"] = 1] = "Ten_Minutes";
  MatchLength2[MatchLength2["Twenty_Minutes"] = 2] = "Twenty_Minutes";
  MatchLength2[MatchLength2["Unlimited"] = 3] = "Unlimited";
  return MatchLength2;
})(MatchLength || {});
var MaxScore = /* @__PURE__ */ ((MaxScore2) => {
  MaxScore2[MaxScore2["Unlimited"] = 0] = "Unlimited";
  MaxScore2[MaxScore2["One_Goal"] = 1] = "One_Goal";
  MaxScore2[MaxScore2["Three_Goals"] = 2] = "Three_Goals";
  MaxScore2[MaxScore2["Five_Goals"] = 3] = "Five_Goals";
  return MaxScore2;
})(MaxScore || {});
var OvertimeOption = /* @__PURE__ */ ((OvertimeOption2) => {
  OvertimeOption2[OvertimeOption2["Unlimited"] = 0] = "Unlimited";
  OvertimeOption2[OvertimeOption2["Five_Max_First_Score"] = 1] = "Five_Max_First_Score";
  OvertimeOption2[OvertimeOption2["Five_Max_Random_Team"] = 2] = "Five_Max_Random_Team";
  return OvertimeOption2;
})(OvertimeOption || {});
var SeriesLengthOption = /* @__PURE__ */ ((SeriesLengthOption2) => {
  SeriesLengthOption2[SeriesLengthOption2["Unlimited"] = 0] = "Unlimited";
  SeriesLengthOption2[SeriesLengthOption2["Three_Games"] = 1] = "Three_Games";
  SeriesLengthOption2[SeriesLengthOption2["Five_Games"] = 2] = "Five_Games";
  SeriesLengthOption2[SeriesLengthOption2["Seven_Games"] = 3] = "Seven_Games";
  return SeriesLengthOption2;
})(SeriesLengthOption || {});
var GameSpeedOption = /* @__PURE__ */ ((GameSpeedOption2) => {
  GameSpeedOption2[GameSpeedOption2["Default"] = 0] = "Default";
  GameSpeedOption2[GameSpeedOption2["Slo_Mo"] = 1] = "Slo_Mo";
  GameSpeedOption2[GameSpeedOption2["Time_Warp"] = 2] = "Time_Warp";
  return GameSpeedOption2;
})(GameSpeedOption || {});
var BallMaxSpeedOption = /* @__PURE__ */ ((BallMaxSpeedOption2) => {
  BallMaxSpeedOption2[BallMaxSpeedOption2["Default"] = 0] = "Default";
  BallMaxSpeedOption2[BallMaxSpeedOption2["Slow"] = 1] = "Slow";
  BallMaxSpeedOption2[BallMaxSpeedOption2["Fast"] = 2] = "Fast";
  BallMaxSpeedOption2[BallMaxSpeedOption2["Super_Fast"] = 3] = "Super_Fast";
  return BallMaxSpeedOption2;
})(BallMaxSpeedOption || {});
var BallTypeOption = /* @__PURE__ */ ((BallTypeOption2) => {
  BallTypeOption2[BallTypeOption2["Default"] = 0] = "Default";
  BallTypeOption2[BallTypeOption2["Cube"] = 1] = "Cube";
  BallTypeOption2[BallTypeOption2["Puck"] = 2] = "Puck";
  BallTypeOption2[BallTypeOption2["Basketball"] = 3] = "Basketball";
  return BallTypeOption2;
})(BallTypeOption || {});
var BallWeightOption = /* @__PURE__ */ ((BallWeightOption2) => {
  BallWeightOption2[BallWeightOption2["Default"] = 0] = "Default";
  BallWeightOption2[BallWeightOption2["Light"] = 1] = "Light";
  BallWeightOption2[BallWeightOption2["Heavy"] = 2] = "Heavy";
  BallWeightOption2[BallWeightOption2["Super_Light"] = 3] = "Super_Light";
  return BallWeightOption2;
})(BallWeightOption || {});
var BallSizeOption = /* @__PURE__ */ ((BallSizeOption2) => {
  BallSizeOption2[BallSizeOption2["Default"] = 0] = "Default";
  BallSizeOption2[BallSizeOption2["Small"] = 1] = "Small";
  BallSizeOption2[BallSizeOption2["Large"] = 2] = "Large";
  BallSizeOption2[BallSizeOption2["Gigantic"] = 3] = "Gigantic";
  return BallSizeOption2;
})(BallSizeOption || {});
var BallBouncinessOption = /* @__PURE__ */ ((BallBouncinessOption2) => {
  BallBouncinessOption2[BallBouncinessOption2["Default"] = 0] = "Default";
  BallBouncinessOption2[BallBouncinessOption2["Low"] = 1] = "Low";
  BallBouncinessOption2[BallBouncinessOption2["High"] = 2] = "High";
  BallBouncinessOption2[BallBouncinessOption2["Super_High"] = 3] = "Super_High";
  return BallBouncinessOption2;
})(BallBouncinessOption || {});
var BoostOption = /* @__PURE__ */ ((BoostOption2) => {
  BoostOption2[BoostOption2["Normal_Boost"] = 0] = "Normal_Boost";
  BoostOption2[BoostOption2["Unlimited_Boost"] = 1] = "Unlimited_Boost";
  BoostOption2[BoostOption2["Slow_Recharge"] = 2] = "Slow_Recharge";
  BoostOption2[BoostOption2["Rapid_Recharge"] = 3] = "Rapid_Recharge";
  BoostOption2[BoostOption2["No_Boost"] = 4] = "No_Boost";
  return BoostOption2;
})(BoostOption || {});
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
var BoostStrengthOption = /* @__PURE__ */ ((BoostStrengthOption2) => {
  BoostStrengthOption2[BoostStrengthOption2["One"] = 0] = "One";
  BoostStrengthOption2[BoostStrengthOption2["OneAndAHalf"] = 1] = "OneAndAHalf";
  BoostStrengthOption2[BoostStrengthOption2["Two"] = 2] = "Two";
  BoostStrengthOption2[BoostStrengthOption2["Ten"] = 3] = "Ten";
  return BoostStrengthOption2;
})(BoostStrengthOption || {});
var GravityOption = /* @__PURE__ */ ((GravityOption2) => {
  GravityOption2[GravityOption2["Default"] = 0] = "Default";
  GravityOption2[GravityOption2["Low"] = 1] = "Low";
  GravityOption2[GravityOption2["High"] = 2] = "High";
  GravityOption2[GravityOption2["Super_High"] = 3] = "Super_High";
  return GravityOption2;
})(GravityOption || {});
var DemolishOption = /* @__PURE__ */ ((DemolishOption2) => {
  DemolishOption2[DemolishOption2["Default"] = 0] = "Default";
  DemolishOption2[DemolishOption2["Disabled"] = 1] = "Disabled";
  DemolishOption2[DemolishOption2["Friendly_Fire"] = 2] = "Friendly_Fire";
  DemolishOption2[DemolishOption2["On_Contact"] = 3] = "On_Contact";
  DemolishOption2[DemolishOption2["On_Contact_FF"] = 4] = "On_Contact_FF";
  return DemolishOption2;
})(DemolishOption || {});
var RespawnTimeOption = /* @__PURE__ */ ((RespawnTimeOption2) => {
  RespawnTimeOption2[RespawnTimeOption2["Three_Seconds"] = 0] = "Three_Seconds";
  RespawnTimeOption2[RespawnTimeOption2["Two_Seconds"] = 1] = "Two_Seconds";
  RespawnTimeOption2[RespawnTimeOption2["One_Seconds"] = 2] = "One_Seconds";
  RespawnTimeOption2[RespawnTimeOption2["Disable_Goal_Reset"] = 3] = "Disable_Goal_Reset";
  return RespawnTimeOption2;
})(RespawnTimeOption || {});
var MutatorSettings = class {
  constructor(flat3) {
    this.matchLength = flat3.matchLength();
    this.maxScore = flat3.maxScore();
    this.overtimeOption = flat3.overtimeOption();
    this.seriesLengthOption = flat3.seriesLengthOption();
    this.gameSpeedOption = flat3.gameSpeedOption();
    this.ballMaxSpeedOption = flat3.ballMaxSpeedOption();
    this.ballTypeOption = flat3.ballTypeOption();
    this.ballWeightOption = flat3.ballWeightOption();
    this.ballSizeOption = flat3.ballSizeOption();
    this.ballBouncinessOption = flat3.ballBouncinessOption();
    this.boostOption = flat3.boostOption();
    this.rumbleOption = flat3.rumbleOption();
    this.boostStrengthOption = flat3.boostStrengthOption();
    this.gravityOption = flat3.gravityOption();
    this.demolishOption = flat3.demolishOption();
    this.respawnTimeOption = flat3.respawnTimeOption();
  }
};
var ExistingMatchBehavior = /* @__PURE__ */ ((ExistingMatchBehavior2) => {
  ExistingMatchBehavior2[ExistingMatchBehavior2["Restart_If_Different"] = 0] = "Restart_If_Different";
  ExistingMatchBehavior2[ExistingMatchBehavior2["Restart"] = 1] = "Restart";
  ExistingMatchBehavior2[ExistingMatchBehavior2["Continue_And_Spawn"] = 2] = "Continue_And_Spawn";
  return ExistingMatchBehavior2;
})(ExistingMatchBehavior || {});
var MatchSettings = class {
  constructor(flat3) {
    this.playerConfigurations = [];
    for (let pc of flat3.playerConfigurations()) {
      this.playerConfigurations.push(new PlayerConfiguration(pc));
    }
    this.gameMode = flat3.gameMode();
    this.gameMap = flat3.gameMap();
    this.skipReplays = flat3.skipReplays();
    this.instantStart = flat3.instantStart();
    this.mutatorSettings = new MutatorSettings(flat3.mutatorSettings());
    this.existingMatchBehavior = flat3.existingMatchBehavior();
    this.enableLockstep = flat3.enableLockstep();
    this.enableRendering = flat3.enableRendering();
    this.enableStateSetting = flat3.enableStateSetting();
    this.autoSaveReplay = flat3.autoSaveReplay();
  }
};
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
var QuickChat = class {
  constructor(flat3) {
    this.quickChatSelection = flat3.quickChatSelection();
    this.playerIndex = flat3.playerIndex();
    this.teamOnly = flat3.teamOnly();
    this.messageIndex = flat3.messageIndex();
    this.timeStamp = flat3.timeStamp();
  }
};

// src/utils.ts
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
  let buf = new import_flatbuffers3.flatbuffers.ByteBuffer(rawBytes);
  let root;
  try {
    switch (dataType) {
      case 1:
        root = rlbot.flat.GameTickPacket.getRootAsGameTickPacket(buf);
        break;
      case 2:
        root = rlbot.flat.FieldInfo.getRootAsFieldInfo(buf);
        break;
      case 3:
        root = rlbot.flat.MatchSettings.getRootAsMatchSettings(buf);
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
        root = rlbot.flat.QuickChat.getRootAsQuickChat(buf);
        break;
      case 10:
        root = rlbot.flat.BallPrediction.getRootAsBallPrediction(buf);
        break;
      case 11:
        throw "Invalid type for decoding '11'";
        break;
      case 12:
        root = rlbot.flat.MessagePacket.getRootAsMessagePacket(buf);
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
    let controllerState = rlbot.flat.ControllerState;
    let playerInput = rlbot.flat.PlayerInput;
    let builder = new import_flatbuffers4.flatbuffers.Builder(1024);
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
var import_flatbuffers5 = __toESM(require_flatbuffers());
var flat2 = rlbot.flat;
var { RenderMessage, RenderType, RenderGroup } = flat2;
var maxInt = 1337;
var Color2 = class {
  constructor(alpha, red, green, blue) {
    this.alpha = alpha;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  convertToFlat(builder) {
    flat2.Color.startColor(builder);
    flat2.Color.addA(builder, this.alpha);
    flat2.Color.addR(builder, this.red);
    flat2.Color.addG(builder, this.green);
    flat2.Color.addB(builder, this.blue);
    return flat2.Color.endColor(builder);
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
    this.builder = new import_flatbuffers5.flatbuffers.Builder(0);
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
    let messages = RenderGroup.createRenderMessagesVector(
      this.builder,
      this.renderList
    );
    RenderGroup.startRenderGroup(this.builder);
    RenderGroup.addId(this.builder, groupIDHashed);
    RenderGroup.addRenderMessages(this.builder, messages);
    let result = RenderGroup.endRenderGroup(this.builder);
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
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawString2D);
    RenderMessage.addColor(this.builder, colorFlat);
    RenderMessage.addStart(
      this.builder,
      flat2.Vector3.createVector3(this.builder, x, y, 0)
    );
    RenderMessage.addScaleX(this.builder, scaleX);
    RenderMessage.addScaleY(this.builder, scaleY);
    RenderMessage.addText(this.builder, textFlat);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawString3D(vector, scaleX, scaleY, text, color) {
    if (this.builder == null)
      return;
    let textFlat = this.builder.createString(text);
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawString3D);
    RenderMessage.addColor(this.builder, colorFlat);
    RenderMessage.addStart(
      this.builder,
      vector.convertToFlat(this.builder) ?? 0
    );
    RenderMessage.addScaleX(this.builder, scaleX);
    RenderMessage.addScaleY(this.builder, scaleY);
    RenderMessage.addText(this.builder, textFlat);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawLine2D_3D(x, y, end, color) {
    if (this.builder == null)
      return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawLine2D_3D);
    RenderMessage.addStart(
      this.builder,
      flat2.Vector3.createVector3(this.builder, x, y, 0)
    );
    RenderMessage.addEnd(this.builder, end.convertToFlat(this.builder) ?? 0);
    RenderMessage.addColor(this.builder, colorFlat ?? 0);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawLine2D(startX, startY, endX, endY, color) {
    if (this.builder == null)
      return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawLine2D);
    RenderMessage.addStart(
      this.builder,
      new Vector3(startX, startY, 0).convertToFlat(this.builder) ?? 0
    );
    RenderMessage.addEnd(
      this.builder,
      new Vector3(endX, endY, 0).convertToFlat(this.builder) ?? 0
    );
    RenderMessage.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawLine3D(start, end, color) {
    if (this.builder == null)
      return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawLine3D);
    RenderMessage.addStart(
      this.builder,
      start.convertToFlat(this.builder) ?? 0
    );
    RenderMessage.addEnd(this.builder, end.convertToFlat(this.builder) ?? 0);
    RenderMessage.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawRect2D(x, y, width, height, color) {
    if (this.builder == null)
      return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawRect2D);
    RenderMessage.addStart(
      this.builder,
      flat2.Vector3.createVector3(this.builder, x, y, 0)
    );
    RenderMessage.addScaleX(this.builder, width);
    RenderMessage.addScaleY(this.builder, height);
    RenderMessage.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawRect3D(vector, width, height, color, centered) {
    if (this.builder == null)
      return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(
      this.builder,
      centered ? RenderType.DrawCenteredRect3D : RenderType.DrawRect3D
    );
    RenderMessage.addStart(
      this.builder,
      vector.convertToFlat(this.builder) ?? 0
    );
    RenderMessage.addScaleX(this.builder, width);
    RenderMessage.addScaleY(this.builder, height);
    RenderMessage.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
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
    let cleanLoad;
    switch (parsedLoad.type) {
      case 1:
        this.GameTickPacketRate++;
        setTimeout(
          (() => {
            this.GameTickPacketRate--;
          }).bind(this),
          1e3
        );
        cleanLoad = new flatstructs_exports.GameTickPacket(parsedLoad.root);
        this.onGameTickPacket(cleanLoad);
        this.getOutput(
          cleanLoad,
          this.latestFieldInfo,
          this.latestBallPrediction,
          this.latestMatchSettings
        );
        break;
      case 2:
        cleanLoad = new flatstructs_exports.FieldInfo(parsedLoad.root);
        this.onFieldInfo(cleanLoad);
        this.latestFieldInfo = cleanLoad;
        break;
      case 3:
        cleanLoad = new flatstructs_exports.MatchSettings(parsedLoad.root);
        this.onMatchSettings(cleanLoad);
        this.latestMatchSettings = cleanLoad;
        break;
      case 9:
        cleanLoad = new flatstructs_exports.QuickChat(parsedLoad.root);
        this.onQuickChat(cleanLoad);
        break;
      case 10:
        cleanLoad = new flatstructs_exports.BallPrediction(parsedLoad.root);
        this.onBallPrediction(cleanLoad);
        this.latestBallPrediction = cleanLoad;
        break;
    }
  }
  setGameState(newGameState) {
    let builder = new import_flatbuffers6.flatbuffers.Builder(1024);
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
    let quickChat = rlbot.flat.QuickChat;
    let builder = new import_flatbuffers6.flatbuffers.Builder(1024);
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
    let builder = new import_flatbuffers6.flatbuffers.Builder(1024);
    rlbot.flat.ReadyMessage.startReadyMessage(builder);
    rlbot.flat.ReadyMessage.addWantsBallPredictions(builder, true);
    rlbot.flat.ReadyMessage.addWantsGameMessages(builder, true);
    rlbot.flat.ReadyMessage.addWantsQuickChat(builder, true);
    let readyMessage = rlbot.flat.ReadyMessage.endReadyMessage(builder);
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
  BallBouncinessOption,
  BallInfo,
  BallMaxSpeedOption,
  BallPrediction,
  BallSizeOption,
  BallState,
  BallTypeOption,
  BallWeightOption,
  BoostOption,
  BoostPad,
  BoostPadState,
  BoostState,
  BoostStrengthOption,
  CarState,
  Client,
  Color,
  Controller,
  ControllerManager,
  DemolishOption,
  ExistingMatchBehavior,
  FieldInfo,
  GameInfo,
  GameInfoState,
  GameMap,
  GameMode,
  GameSpeedOption,
  GameState,
  GameTickPacket,
  GoalInfo,
  GravityOption,
  LoadoutPaint,
  Manager,
  MatchLength,
  MatchSettings,
  MaxScore,
  MutatorSettings,
  OvertimeOption,
  Physics,
  PlayerClass,
  PlayerConfiguration,
  PlayerInfo,
  PlayerLoadout,
  QuickChat,
  QuickChatSelection,
  RenderManager,
  RespawnTimeOption,
  Rotator,
  RumbleOption,
  SeriesLengthOption,
  TeamInfo,
  Touch,
  Vector3,
  quickChats
});
//# sourceMappingURL=index.js.map
