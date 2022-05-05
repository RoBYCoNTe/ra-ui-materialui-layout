'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@material-ui/core');
var reactAdmin = require('react-admin');
var React = require('react');
var MenuIcon = require('@material-ui/icons/Menu');
var PropTypes = require('prop-types');
var Typography = require('@material-ui/core/Typography');
var AccountCircle = require('@material-ui/icons/AccountCircle');
var IconButton = require('@material-ui/core/IconButton');
var Menu$2 = require('@material-ui/core/Menu');
var classnames = require('classnames');
var styles$1 = require('@material-ui/core/styles');
var raCore = require('ra-core');
var reactRedux = require('react-redux');
var CssBaseline = require('@material-ui/core/CssBaseline');
var reactRouterDom = require('react-router-dom');
var DashboardIcon = require('@material-ui/icons/Dashboard');
var get$1 = require('lodash/get');
var ChevronLeftIcon = require('@material-ui/icons/ChevronLeft');
var styles$2 = require('@material-ui/styles');
var ExitIcon = require('@material-ui/icons/PowerSettingsNew');
var BackIcon = require('@material-ui/icons/ArrowBack');
var ContentCreate = require('@material-ui/icons/Create');
var ContentView = require('@material-ui/icons/Visibility');
var lodash = require('lodash');
var GetAppIcon = require('@material-ui/icons/GetApp');
var reactFinalForm = require('react-final-form');
var ArrowForwardIosIcon = require('@material-ui/icons/ArrowForwardIos');
var Button = require('@material-ui/core/Button');
var DoubleArrowIcon = require('@material-ui/icons/DoubleArrow');
var MenuItem$1 = require('@material-ui/core/MenuItem');
var raUiMaterialui = require('ra-ui-materialui');
var TextField = require('@material-ui/core/TextField');
var ArrowDropDownIcon = require('@material-ui/icons/ArrowDropDown');
var TableChart = require('@material-ui/icons/TableChart');
var friendsofbabbaRa = require('friendsofbabba-ra');
var jsonExport = require('jsonexport/dist');
var moment = require('moment');
var polyglotI18nProvider = require('ra-i18n-polyglot');
var queryString = require('query-string');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var MenuIcon__default = /*#__PURE__*/_interopDefaultLegacy(MenuIcon);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var AccountCircle__default = /*#__PURE__*/_interopDefaultLegacy(AccountCircle);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var Menu__default = /*#__PURE__*/_interopDefaultLegacy(Menu$2);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
var CssBaseline__default = /*#__PURE__*/_interopDefaultLegacy(CssBaseline);
var DashboardIcon__default = /*#__PURE__*/_interopDefaultLegacy(DashboardIcon);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get$1);
var ChevronLeftIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronLeftIcon);
var ExitIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExitIcon);
var BackIcon__default = /*#__PURE__*/_interopDefaultLegacy(BackIcon);
var ContentCreate__default = /*#__PURE__*/_interopDefaultLegacy(ContentCreate);
var ContentView__default = /*#__PURE__*/_interopDefaultLegacy(ContentView);
var GetAppIcon__default = /*#__PURE__*/_interopDefaultLegacy(GetAppIcon);
var ArrowForwardIosIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowForwardIosIcon);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var DoubleArrowIcon__default = /*#__PURE__*/_interopDefaultLegacy(DoubleArrowIcon);
var MenuItem__default = /*#__PURE__*/_interopDefaultLegacy(MenuItem$1);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);
var ArrowDropDownIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowDropDownIcon);
var TableChart__default = /*#__PURE__*/_interopDefaultLegacy(TableChart);
var jsonExport__default = /*#__PURE__*/_interopDefaultLegacy(jsonExport);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var polyglotI18nProvider__default = /*#__PURE__*/_interopDefaultLegacy(polyglotI18nProvider);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var UserMenu = function UserMenu(_ref) {
  var logout = _ref.logout,
      children = _ref.children;

  var _React$useState = React__default["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var open = Boolean(anchorEl);

  var handleMenu = function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(IconButton__default["default"], {
    onClick: handleMenu,
    color: "inherit"
  }, /*#__PURE__*/React__default["default"].createElement(AccountCircle__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(Menu__default["default"], {
    id: "menu-appbar",
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: open,
    onClose: handleClose
  }, !children && logout, React__default["default"].Children.map(children, function (child) {
    return child !== logout ? /*#__PURE__*/React__default["default"].cloneElement(child, {
      onClick: handleClose
    }) : logout;
  })));
};

UserMenu.propTypes = {
  logout: PropTypes__default["default"].element.isRequired
};

var useStyles$d = styles$1.makeStyles(function (theme) {
  return {
    title: {
      flexGrow: 1
    },
    titleSidebarClose: {
      marginLeft: theme.spacing(2)
    },
    appBar: {
      flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: function appBarShift(_ref) {
      var drawerWidth = _ref.drawerWidth;
      return {
        marginLeft: drawerWidth,
        width: "calc(100% - ".concat(drawerWidth - 2, "px)"),
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      };
    },
    menuButton: _defineProperty({
      marginRight: theme.spacing(2),
      marginLeft: -20
    }, theme.breakpoints.down("sm"), {
      marginRight: theme.spacing(0)
    }),
    hide: {
      display: "none"
    },
    spacer: {
      flex: 1,
      flexGrow: 1
    }
  };
});

var AppBar = function AppBar(_ref2) {
  var open = _ref2.open,
      logout = _ref2.logout,
      drawerWidth = _ref2.drawerWidth,
      location = _ref2.location,
      _ref2$userMenu = _ref2.userMenu,
      userMenu = _ref2$userMenu === void 0 ? UserMenu : _ref2$userMenu;
  var classes = useStyles$d({
    drawerWidth: drawerWidth
  });
  var dispatch = reactRedux.useDispatch();
  var translate = reactAdmin.useTranslate();
  var isXSmall = core.useMediaQuery(function (theme) {
    return theme.breakpoints.down("xs");
  });

  var _useGetIdentity = reactAdmin.useGetIdentity(),
      identity = _useGetIdentity.identity;

  var handleToggleSidebar = React.useCallback(function () {
    return dispatch(raCore.toggleSidebar());
  }, [dispatch]);
  return /*#__PURE__*/React__default["default"].createElement(core.AppBar, {
    position: "fixed",
    color: "secondary",
    className: classnames__default["default"](classes.appBar, _defineProperty({}, classes.appBarShift, open && !isXSmall))
  }, /*#__PURE__*/React__default["default"].createElement(core.Toolbar, null, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleToggleSidebar,
    edge: "start",
    className: classnames__default["default"](classes.menuButton, _defineProperty({}, classes.hide, open && !isXSmall))
  }, /*#__PURE__*/React__default["default"].createElement(MenuIcon__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
    className: classnames__default["default"](classes.title, _defineProperty({}, classes.titleSidebarClose, !open)),
    variant: "h6",
    id: "react-admin-title",
    noWrap: true
  }), !isXSmall && /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.spacer
  }), !isXSmall && /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
    variant: "body1"
  }, translate("app.welcome", identity)), /*#__PURE__*/React__default["default"].createElement(reactAdmin.LoadingIndicator, null), /*#__PURE__*/React__default["default"].createElement(userMenu, {
    logout: logout,
    location: location
  })));
};

AppBar.propTypes = {
  open: PropTypes__default["default"].bool.isRequired,
  logout: PropTypes__default["default"].element.isRequired,
  drawerWidth: PropTypes__default["default"].number.isRequired,
  userMenu: PropTypes__default["default"].elementType
};

var _excluded$B = ["titleAccess", "children"];

var Badge = function Badge(_ref) {
  _ref.titleAccess;
      var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$B);

  return /*#__PURE__*/React__default["default"].createElement(core.Badge, props, children);
};

var _excluded$A = ["children", "open", "label"];
var useStyles$c = core.makeStyles(function (theme) {
  return {
    subHeader: {
      backgroundColor: theme.palette.background.paper,
      zIndex: theme.zIndex.appBar,
      fontWeight: "bold",
      color: theme.palette.text.primary
    }
  };
});

var MenuGroup = function MenuGroup(_ref) {
  var children = _ref.children,
      open = _ref.open,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded$A);

  var classes = useStyles$c();
  return /*#__PURE__*/React__default["default"].createElement(core.List, {
    subheader: open ? /*#__PURE__*/React__default["default"].createElement(core.ListSubheader, {
      className: classes.subHeader
    }, label) : null
  }, React__default["default"].Children.map(children, function (child) {
    return /*#__PURE__*/React__default["default"].isValidElement(child) && /*#__PURE__*/React__default["default"].cloneElement(child, _objectSpread2({
      open: open
    }, props));
  }), /*#__PURE__*/React__default["default"].createElement(core.Divider, null));
};

MenuGroup.propTypes = {
  /** Children to render inside the MenuGroup */
  children: PropTypes__default["default"].node,

  /** Indicates if sidebar is open or not. */
  open: PropTypes__default["default"].bool,

  /** Label to use for this group. */
  label: PropTypes__default["default"].string.isRequired,

  /** Name of the groups to merge. */
  group: PropTypes__default["default"].string
};

var _excluded$z = ["location", "badge", "to", "icon", "label", "sub", "onMenuClick", "permissions", "open"];

var isSelected = function isSelected(location, to) {
  var selected = location.pathname === to || location.pathname.indexOf("".concat(to, "?")) === 0 || location.pathname.indexOf("".concat(to, "/")) === 0;
  return selected;
};

var MenuItem = function MenuItem(_ref) {
  var location = _ref.location,
      badge = _ref.badge,
      to = _ref.to,
      icon = _ref.icon,
      label = _ref.label,
      sub = _ref.sub,
      onMenuClick = _ref.onMenuClick;
      _ref.permissions;
      var open = _ref.open,
      props = _objectWithoutProperties(_ref, _excluded$z);

  return /*#__PURE__*/React__default["default"].createElement(core.ListItem, _extends({}, props, {
    button: true,
    component: props.href ? "a" : reactRouterDom.Link,
    to: to,
    onClick: onMenuClick,
    selected: isSelected(location, to)
  }), /*#__PURE__*/React__default["default"].createElement(core.ListItemIcon, null, badge && badge.show !== false ? /*#__PURE__*/React__default["default"].createElement(Badge, {
    color: badge.color,
    variant: badge.variant,
    badgeContent: badge.value,
    overlap: "rectangular"
  }, /*#__PURE__*/React.createElement(icon)) : /*#__PURE__*/React.createElement(icon)), open && /*#__PURE__*/React__default["default"].createElement(core.ListItemText, {
    primary: label,
    secondary: sub,
    primaryTypographyProps: {
      style: {
        whiteSpace: "normal"
      }
    },
    secondaryTypographyProps: {
      style: {
        whiteSpace: "normal"
      }
    }
  }));
};

MenuItem.propTypes = {
  label: PropTypes__default["default"].string.isRequired,
  icon: PropTypes__default["default"].elementType.isRequired,
  to: PropTypes__default["default"].string,
  href: PropTypes__default["default"].string,
  badge: PropTypes__default["default"].shape({
    show: PropTypes__default["default"].bool,
    value: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
    variant: PropTypes__default["default"].oneOf(["standard", "dot", "dot-small"]),
    color: PropTypes__default["default"].oneOf(["default", "primary", "secondary", "error"])
  }),
  location: PropTypes__default["default"].shape({
    pathname: PropTypes__default["default"].string.isRequired
  }),
  onMenuClick: PropTypes__default["default"].func
};

var compose = function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (Comp) {
    return funcs.reduceRight(function (prev, curr) {
      return curr(prev);
    }, Comp);
  };
};

var createMenuItem = function createMenuItem(item, badges, translate) {
  var _item$options;

  return {
    localize: item.options.localize,
    badge: get__default["default"](badges, "".concat(item.name), null),
    order: get__default["default"](item, "options.order", 0),
    label: translate("menu.items.".concat(item.name)),
    icon: item.icon,
    sub: ((_item$options = item.options) === null || _item$options === void 0 ? void 0 : _item$options.sub) || item.sub,
    to: item.path || "/".concat(item.name)
  };
};

var createGroups = function createGroups(_ref) {
  var order = _ref.order,
      resources = _ref.resources,
      permissions = _ref.permissions,
      badges = _ref.badges,
      hasDashboard = _ref.hasDashboard,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      translate = _ref.translate;
  var groups = (hasDashboard ? [{
    path: "/",
    name: "dashboard",
    icon: DashboardIcon__default["default"],
    options: {
      group: translate("menu.groups.dashboard")
    }
  }] : []).concat(resources.filter(function (r) {
    return r.hasList && r.options && r.icon;
  })).concat(items.map(function (i) {
    return _objectSpread2(_objectSpread2({}, i), {}, {
      options: {
        roles: i.roles,
        group: i.group,
        localize: i.localize
      }
    });
  })).filter(function (item) {
    return permissions && (item.options.roles === undefined || item.options.roles.filter(function (role) {
      return permissions(role);
    }).length > 0);
  }).reduce(function (groups, resource) {
    var groupName = resource.options ? resource.options.group : "";
    var group = groups.find(function (g) {
      return g.label === groupName;
    });

    if (group) {
      group.items.push(createMenuItem(resource, badges, translate));
      group.items.sort(function (a, b) {
        return a.order > b.order ? 1 : a.order < b.order ? -1 : 0;
      });
    } else {
      group = {
        label: groupName,
        items: [createMenuItem(resource, badges, translate)],
        order: get__default["default"](order, groupName, 1000)
      };
      groups.push(group);
    }

    return groups;
  }, []);
  groups.sort(function (a, b) {
    return a.order > b.order ? 1 : a.order < b.order ? -1 : 0;
  });
  return groups;
};

var _require$1 = require("ra-core"),
    usePermissions = _require$1.usePermissions,
    getResources$1 = _require$1.getResources,
    useTranslate = _require$1.useTranslate;

var _require2$1 = require("react"),
    useMemo = _require2$1.useMemo;

var _require3$1 = require("react-redux"),
    shallowEqual$1 = _require3$1.shallowEqual;

var useMenu = function useMenu(_ref) {
  var order = _ref.order,
      hasDashboard = _ref.hasDashboard,
      badges = _ref.badges,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items;
  var translate = useTranslate();

  var _usePermissions = usePermissions(),
      loaded = _usePermissions.loaded,
      permissions = _usePermissions.permissions;

  var resources = reactRedux.useSelector(getResources$1, shallowEqual$1);
  var menu = useMemo(function () {
    return loaded ? createGroups({
      order: order,
      resources: resources,
      permissions: permissions,
      badges: badges,
      hasDashboard: hasDashboard,
      items: items,
      translate: translate
    }) : [];
  }, [order, resources, permissions, badges, loaded, hasDashboard, items, translate]);
  return menu;
};

var Menu = function Menu(_ref) {
  var hasDashboard = _ref.hasDashboard,
      open = _ref.open,
      location = _ref.location,
      onMenuClick = _ref.onMenuClick,
      badges = _ref.badges,
      items = _ref.items,
      children = _ref.children,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? "build" : _ref$mode,
      order = _ref.order;

  var _useGetIdentity = reactAdmin.useGetIdentity(),
      loading = _useGetIdentity.loading,
      loaded = _useGetIdentity.loaded,
      identity = _useGetIdentity.identity;

  var _usePermissions = raCore.usePermissions(),
      permissions = _usePermissions.permissions;

  var menu = useMenu({
    order: order,
    hasDashboard: hasDashboard,
    badges: badges,
    items: items
  });
  var translate = reactAdmin.useTranslate();

  if (loading || !loaded || !identity || identity === null || identity.id <= 0) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement(core.List, {
    component: "nav"
  }, mode === "build" && menu.map(function (group, idx) {
    return /*#__PURE__*/React__default["default"].createElement(MenuGroup, {
      key: idx,
      open: open,
      label: translate("menu.groups.".concat(group.label))
    }, group.items.map(function (item, index) {
      return /*#__PURE__*/React__default["default"].createElement(MenuItem, _extends({}, item, {
        key: index,
        open: open,
        location: location,
        onMenuClick: onMenuClick
      }));
    }));
  }), React__default["default"].Children.map(children, function (child) {
    return /*#__PURE__*/React__default["default"].isValidElement(child) && /*#__PURE__*/React__default["default"].cloneElement(child, {
      open: open,
      menu: menu,
      location: location,
      permissions: permissions,
      onMenuClick: onMenuClick
    });
  }));
};

Menu.propTypes = {
  hasDashboard: PropTypes__default["default"].bool.isRequired,
  open: PropTypes__default["default"].bool.isRequired,
  location: PropTypes__default["default"].object.isRequired,
  onMenuClick: PropTypes__default["default"].func,

  /** List of custom menu items that will be merged with existing menu. */
  items: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    /** Name of the menu item. */
    name: PropTypes__default["default"].string.isRequired,

    /** Icon used for this menu item. */
    icon: PropTypes__default["default"].elementType.isRequired,

    /** Path connected to the routing system (ex. /posts). */
    path: PropTypes__default["default"].string,

    /** List of roles allowed. */
    roles: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)
  })),

  /**
   * Indicates generation mode for menu. If you want to compose it use custom
   * and create your own menu using MenuGroup and MenuItems.
   **/
  mode: PropTypes__default["default"].oneOf(["build", "custom"]),

  /** Allows configuration of groups */
  order: PropTypes__default["default"].object,

  /** Badges config. */
  badges: PropTypes__default["default"].objectOf(PropTypes__default["default"].shape({
    show: PropTypes__default["default"].bool,
    label: PropTypes__default["default"].string,
    value: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
    color: PropTypes__default["default"].oneOf(["primary", "secondary", "default", "error"])
  }))
};
var Menu$1 = compose(reactRouterDom.withRouter, reactRedux.connect(function (state) {
  return {
    open: state.admin.ui.sidebarOpen,
    resources: reactAdmin.getResources(state)
  };
}))(Menu);

var useStyles$b = core.makeStyles(function (theme) {
  return {
    brand: {
      paddingLeft: theme.spacing(1),
      display: "flex",
      flexGrow: 1,
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center"
    },
    title: {
      fontWeight: "bold",
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(-0.5),
      "&:hover": {
        color: theme.palette.primary.main
      }
    },
    drawer: {
      zIndex: 10,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: function drawerOpen(_ref) {
      var drawerWidth = _ref.drawerWidth;
      return {
        width: drawerWidth - 1,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      };
    },
    drawerClose: _defineProperty({
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1
    }, theme.breakpoints.up("sm"), {
      width: theme.spacing(7) + 1
    }),
    toolbar: _objectSpread2({
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar)
  };
});

var Sidebar = function Sidebar(_ref2) {
  var _classnames, _classnames2;

  var children = _ref2.children,
      open = _ref2.open,
      drawerWidth = _ref2.drawerWidth,
      appTitle = _ref2.appTitle,
      appSubTitle = _ref2.appSubTitle,
      appVersion = _ref2.appVersion;
  var classes = useStyles$b({
    drawerWidth: drawerWidth
  });
  var dispatch = reactRedux.useDispatch();
  var handleToggleSidebar = React.useCallback(function () {
    return dispatch(raCore.toggleSidebar());
  }, [dispatch]);
  var isXSmall = core.useMediaQuery(function (theme) {
    return theme.breakpoints.down("xs");
  });
  return /*#__PURE__*/React__default["default"].createElement(core.Drawer, {
    open: open,
    onClose: handleToggleSidebar,
    variant: isXSmall ? "temporary" : "permanent",
    className: classnames__default["default"](classes.drawer, (_classnames = {}, _defineProperty(_classnames, classes.drawerOpen, open), _defineProperty(_classnames, classes.drawerClose, !open), _classnames)),
    classes: {
      paper: classnames__default["default"]((_classnames2 = {}, _defineProperty(_classnames2, classes.drawerOpen, open), _defineProperty(_classnames2, classes.drawerClose, !open), _classnames2))
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.brand
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    className: classes.title,
    href: "/",
    variant: "h6",
    color: "inherit"
  }, appTitle), /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    color: "textSecondary",
    variant: "caption"
  }, appSubTitle, " (", appVersion, ")")), /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    onClick: handleToggleSidebar
  }, /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon__default["default"], null))), React__default["default"].Children.map(children, function (child) {
    return /*#__PURE__*/React__default["default"].cloneElement(child, {
      onMenuClick: isXSmall ? handleToggleSidebar : undefined
    });
  }));
};

Sidebar.propTypes = {
  children: PropTypes__default["default"].node,
  open: PropTypes__default["default"].bool.isRequired,
  config: PropTypes__default["default"].object,
  drawerWidth: PropTypes__default["default"].number.isRequired,
  appName: PropTypes__default["default"].string,
  appSubTitle: PropTypes__default["default"].string,
  appVersion: PropTypes__default["default"].string
};

var _excluded$y = ["theme"];
var LayoutContext = /*#__PURE__*/React__default["default"].createContext({
  drawerWidth: 0
});

var LayoutProvider = function LayoutProvider(_ref) {
  var children = _ref.children,
      drawerWidth = _ref.drawerWidth;
  return /*#__PURE__*/React__default["default"].createElement(LayoutContext.Provider, {
    value: {
      drawerWidth: drawerWidth
    }
  }, children);
};

var styles = function styles(theme) {
  return styles$1.createStyles({
    root: {
      display: "flex"
    },
    toolbar: _objectSpread2({
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar),
    content: _defineProperty({
      flexGrow: 1,
      padding: theme.spacing(3)
    }, theme.breakpoints.down("xs"), {
      padding: theme.spacing(0)
    })
  });
};

var LayoutWithoutTheme = /*#__PURE__*/function (_React$Component) {
  _inherits(LayoutWithoutTheme, _React$Component);

  var _super = _createSuper(LayoutWithoutTheme);

  function LayoutWithoutTheme(props) {
    var _this;

    _classCallCheck(this, LayoutWithoutTheme);

    _this = _super.call(this, props);
    /**
     * Reset the error state upon navigation
     *
     * @see https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
     */

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false,
      errorMessage: null,
      errorInfo: null
    });

    props.history.listen(function () {
      if (_this.state.hasError) {
        _this.setState({
          hasError: false
        });
      }
    });
    return _this;
  }

  _createClass(LayoutWithoutTheme, [{
    key: "componentDidCatch",
    value: function componentDidCatch(errorMessage, errorInfo) {
      this.setState({
        hasError: true,
        errorMessage: errorMessage,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$appBar = _this$props.appBar,
          appBar = _this$props$appBar === void 0 ? AppBar : _this$props$appBar,
          children = _this$props.children,
          classes = _this$props.classes,
          error = _this$props.error,
          dashboard = _this$props.dashboard,
          logout = _this$props.logout,
          _this$props$menu = _this$props.menu,
          menu = _this$props$menu === void 0 ? Menu$1 : _this$props$menu,
          _this$props$notificat = _this$props.notification,
          notification = _this$props$notificat === void 0 ? reactAdmin.Notification : _this$props$notificat,
          open = _this$props.open,
          _this$props$sidebar = _this$props.sidebar,
          sidebar = _this$props$sidebar === void 0 ? Sidebar : _this$props$sidebar,
          title = _this$props.title,
          appTitle = _this$props.appTitle,
          appSubTitle = _this$props.appSubTitle,
          appVersion = _this$props.appVersion,
          drawerWidth = _this$props.drawerWidth,
          location = _this$props.location;
      var _this$state = this.state,
          hasError = _this$state.hasError,
          errorMessage = _this$state.errorMessage,
          errorInfo = _this$state.errorInfo;
      return /*#__PURE__*/React__default["default"].createElement(LayoutProvider, {
        drawerWidth: drawerWidth
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/React__default["default"].createElement(CssBaseline__default["default"], null), /*#__PURE__*/React.createElement(sidebar, {
        open: open,
        appTitle: appTitle,
        appSubTitle: appSubTitle,
        appVersion: appVersion,
        drawerWidth: drawerWidth,
        children: /*#__PURE__*/React.createElement(menu, {
          open: open,
          logout: logout,
          hasDashboard: !!dashboard,
          menuConfig: this.props.menu
        })
      }), /*#__PURE__*/React__default["default"].createElement("main", {
        id: "main-content",
        className: classes.content
      }, /*#__PURE__*/React.createElement(appBar, {
        title: title,
        open: open,
        logout: logout,
        location: location,
        drawerWidth: drawerWidth
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.toolbar
      }), hasError ? /*#__PURE__*/React.createElement(error, {
        error: errorMessage,
        errorInfo: errorInfo,
        title: title
      }) : children), /*#__PURE__*/React.createElement(notification)));
    }
  }]);

  return LayoutWithoutTheme;
}(React__default["default"].Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    open: state.admin.ui.sidebarOpen
  };
};

var EnhancedLayout = compose(reactRedux.connect(mapStateToProps, {} // Avoid connect passing dispatch in props
), reactRouterDom.withRouter, styles$1.withStyles(styles, {
  name: "RaLayout"
}))(LayoutWithoutTheme);

var Layout = function Layout(_ref2) {
  var themeOverride = _ref2.theme,
      props = _objectWithoutProperties(_ref2, _excluded$y);

  var themeProp = React.useRef(themeOverride);

  var _useState = React.useState(function () {
    return styles$1.createTheme(themeOverride);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  React.useEffect(function () {
    if (themeProp.current !== themeOverride) {
      themeProp.current = themeOverride;
      setTheme(styles$1.createTheme(themeOverride));
    }
  }, [themeOverride, themeProp, theme, setTheme]);
  return /*#__PURE__*/React__default["default"].createElement(styles$2.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default["default"].createElement(EnhancedLayout, props));
};

Layout.propTypes = {
  theme: PropTypes__default["default"].object,
  appTitle: PropTypes__default["default"].string.isRequired,
  appSubTitle: PropTypes__default["default"].string,
  appVersion: PropTypes__default["default"].string,
  drawerWidth: PropTypes__default["default"].number
};
Layout.defaultProps = {
  theme: reactAdmin.defaultTheme,
  appTitle: "React Admin",
  appSubTitle: "Material-UI",
  appVersion: "1.0.0",
  drawerWidth: 240
};

var _excluded$x = ["className", "classes", "redirectTo", "icon", "label"];
var useStyles$a = styles$1.makeStyles(function (theme) {
  return {
    menuItem: {
      color: theme.palette.text.secondary
    },
    icon: {
      minWidth: theme.spacing(5)
    }
  };
}, {
  name: "RaUserMenuItem"
});
var UserMenuItem = /*#__PURE__*/React__namespace.forwardRef(function UserMenuItem(props, ref) {
  var className = props.className;
      props.classes;
      props.redirectTo;
      var icon = props.icon,
      label = props.label,
      rest = _objectWithoutProperties(props, _excluded$x);

  var classes = useStyles$a(props);
  return /*#__PURE__*/React__namespace.createElement(core.MenuItem, _extends({
    className: classnames__default["default"]("user-menu-item", classes.menuItem, className),
    ref: ref,
    component: props.to ? reactRouterDom.Link : "a"
  }, rest), /*#__PURE__*/React__namespace.createElement(core.ListItemIcon, {
    className: classes.icon
  }, icon ? icon : /*#__PURE__*/React__namespace.createElement(ExitIcon__default["default"], null)), label);
});
UserMenuItem.propTypes = {
  className: PropTypes__default["default"].string,
  to: PropTypes__default["default"].string,
  icon: PropTypes__default["default"].element,
  onClick: PropTypes__default["default"].func
};

var _excluded$w = ["resource", "baseRecord"];

var BackButton = function BackButton(_ref) {
  var resource = _ref.resource;
      _ref.baseRecord;
      var props = _objectWithoutProperties(_ref, _excluded$w);

  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.Button, _extends({}, props, {
    component: reactRouterDom.Link,
    to: {
      pathname: "/".concat(resource)
    },
    label: "ra.action.back"
  }), /*#__PURE__*/React__default["default"].createElement(BackIcon__default["default"], null));
};

var useWorkflow = function useWorkflow(_ref) {
  var apiUrl = _ref.apiUrl;

  var _useState = React.useState({
    loading: false,
    loaded: false,
    data: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      loaded = _useState2$.loaded,
      loading = _useState2$.loading,
      data = _useState2$.data,
      setData = _useState2[1];

  var loadAll = function loadAll(_ref2) {
    var apiUrl = _ref2.apiUrl;

    if (loaded || loading) {
      return;
    }

    setData({
      loading: true
    });
    var headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    fetch("".concat(apiUrl, "/workflow/load"), {
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (_ref3) {
      var data = _ref3.data;
      return setData({
        loaded: true,
        loading: false,
        data: data
      });
    });
  };

  React.useEffect(function () {
    return loadAll({
      apiUrl: apiUrl
    });
  });
  return {
    loaded: loaded,
    loading: loading,
    data: data
  };
};

var Workflow = /*#__PURE__*/function () {
  function Workflow(data) {
    _classCallCheck(this, Workflow);

    this.states = data.states;
  }
  /**
   * Controlla se l'utente ha il permesso di creazione sullo stato iniziale
   * @param {*} roles Ruoli dell'utente
   */


  _createClass(Workflow, [{
    key: "canCreate",
    value: function canCreate(roles) {
      return this.check("create", roles);
    }
    /**
     * Controlla se l'utente ha il permesso di scrittura sullo stato in cui
     * si trova il record
     * @param {*} roles Ruoli dell'utente
     * @param {*} record
     */

  }, {
    key: "canEdit",
    value: function canEdit(roles, record) {
      return this.check("edit", roles, record);
    }
    /**
     * Controlla se l'utente ha il permesso di lettura sullo stato in cui
     * si trova il record
     * @param {*} roles Ruoli dell'utente
     * @param {*} record
     */

  }, {
    key: "canRead",
    value: function canRead(roles, record) {
      return this.check("read", roles, record);
    }
    /**
     * Controlla se l'utente ha il permesso specificato nella stato in cui
     * si trova il record
     * @param {String} permission
     * @param {*} roles Ruoli dell'utente
     * @param {*} record
     */

  }, {
    key: "check",
    value: function check(permission, roles, record) {
      var perm = "".concat(permission.charAt(0).toUpperCase()).concat(permission.slice(1));
      var can = "can".concat(perm);
      var state = record && record.id > 0 && record.transaction ? this.states.find(function (s) {
        return s.code === record.transaction.state;
      }) : this.states.find(function (s) {
        return s.isInitial;
      });
      var permissions = state.permissions.filter(function (p) {
        return p[can];
      });
      return permissions.some(function (permission) {
        return roles.some(function (role) {
          return permission.role === role.code;
        });
      });
    }
    /**
     * Controlla se l'utente ha il permesso di scrittura per il campo specificato,
     * nello stato in cui si trova il record
     * @param {String} fieldName
     * @param {Array} roles Ruoli dell'utente
     * @param {Object} record
     */

  }, {
    key: "canEditField",
    value: function canEditField(fieldName, roles, record) {
      return this.checkField("edit", roles, fieldName, record);
    }
    /**
     * Controlla se l'utente ha il permesso di lettura per il campo specificato,
     * nello stato in cui si trova il record
     * @param {String} fieldName
     * @param {Array} roles Ruoli dell'utente
     * @param {Object} record
     */

  }, {
    key: "canReadField",
    value: function canReadField(fieldName, roles, record) {
      return this.checkField("read", roles, fieldName, record);
    }
    /**
     * @description
     *  Controlla se l'utente ha i permessi necessari per leggere uno o più campi tra quelli
     *  specificati nell'array fields.
     *
     * @param {Array} fields
     *  Elenco dei campi di cui verificare il permesso.
     * @param {Array} roles
     *  Elenco dei ruoli associati all'utente
     * @param {Object} record
     *  Record principale su cui verificare i permessi di workflow.
     */

  }, {
    key: "canReadFields",
    value: function canReadFields(fields, roles, record) {
      var _this = this;

      return fields.some(function (field) {
        return _this.canReadField(field, roles, record);
      });
    }
    /**
     * Controlla se l'utente ha il permesso per il campo specificato,
     * per lo stato in cui si trova il record
     * @param {String} permission
     * @param {array} roles Ruoli dell'utente
     * @param {String} fieldName
     * @param {Object} record
     */

  }, {
    key: "checkField",
    value: function checkField(permission, roles, fieldName, record) {
      var perm = "".concat(permission.charAt(0).toUpperCase()).concat(permission.slice(1));
      var can = "can".concat(perm);
      var state = record && record.transaction ? this.states.find(function (s) {
        return s.code === record.transaction.state;
      }) : this.states.find(function (s) {
        return s.isInitial;
      });
      var field = state.fields.find(function (f) {
        return f.name === fieldName;
      });

      if (!field) {
        return false;
      }

      var permissions = field.permissions.filter(function (p) {
        return p[can];
      });
      return permissions.some(function (permission) {
        return roles.some(function (role) {
          return permission.role === role.code;
        });
      });
    }
    /**
     * Ottiene gli stati successivi disponibili dell'entità sottoposta a WF.
     * Se si tratta di una creazione (record.id undefined) viene ritornato lo stato
     * iniziale (sempre se si hanno i permessi)
     * @param {*} roles Ruoli dell'utente
     * @param {*} record
     */

  }, {
    key: "getNextStates",
    value: function getNextStates(roles, record) {
      var _this2 = this;

      if (!record) {
        return [];
      }

      var possibleStates = [];

      if (record.transaction) {
        var state = this.states.find(function (state) {
          return state.code === record.transaction.state;
        });
        possibleStates = Object.keys(state.transitions).map(function (code) {
          return _this2.states.find(function (s) {
            return s.code === code;
          });
        });
      } else {
        var initial = this.states.find(function (state) {
          return state.isInitial;
        });
        possibleStates = [initial];
      }

      var nextStates = possibleStates.filter(function (state) {
        return state.permissions.some(function (p) {
          return roles.some(function (r) {
            return r.code === p.role && (p.canCreate || p.canMove);
          });
        });
      });
      return nextStates;
    }
    /**
     * Indica se per il passaggio nello stato specificato è necessario compilare il campo note obbligatoriamente.
     * @param {Object} record
     *  Record per il quale si richiede la verifica.
     * @param {Object} state
     */

  }, {
    key: "needsNotes",
    value: function needsNotes(record, state) {
      if (!record || !state) {
        return false;
      }

      if (record.transaction) {
        var currentState = this.states.find(function (state) {
          return state.code === record.transaction.state;
        });

        if (currentState && currentState.transitions[state.code]) {
          return currentState.transitions[state.code].notesRequired;
        }
      }

      return false;
    }
  }, {
    key: "getState",
    value: function getState(record) {
      var transaction = record.transaction;

      if (!transaction) {
        return null;
      }

      return this.states.find(function (s) {
        return s.code === transaction.state;
      });
    }
  }, {
    key: "getStateByCode",
    value: function getStateByCode(code) {
      return this.states.find(function (s) {
        return s.code === code;
      });
    }
  }]);

  return Workflow;
}();

var WorkflowContext = /*#__PURE__*/React.createContext({});
var WorkflowProvider = function WorkflowProvider(_ref) {
  var children = _ref.children,
      apiUrl = _ref.apiUrl;

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      workflow = _useState2[0],
      setWorkflow = _useState2[1];

  var _useWorkflow = useWorkflow({
    apiUrl: apiUrl
  }),
      data = _useWorkflow.data;

  var getWorkflow = React.useCallback(function (resource) {
    return lodash.get(workflow, resource);
  }, [workflow]);
  React.useEffect(function () {
    if (!data) {
      return;
    }

    var resources = Object.keys(data).reduce(function (workflows, name) {
      return _objectSpread2(_objectSpread2({}, workflows), {}, _defineProperty({}, name, new Workflow(data[name])));
    }, {});
    setWorkflow(resources);
  }, [data]);
  return /*#__PURE__*/React__default["default"].createElement(WorkflowContext.Provider, {
    value: {
      apiUrl: apiUrl,
      workflows: data,
      getWorkflow: getWorkflow
    }
  }, children);
};

var _excluded$v = ["record", "resource"];

var EditButton = function EditButton(_ref) {
  var record = _ref.record,
      resource = _ref.resource,
      props = _objectWithoutProperties(_ref, _excluded$v);

  var _useContext = React.useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var _useGetIdentity = reactAdmin.useGetIdentity(),
      loaded = _useGetIdentity.loaded,
      loading = _useGetIdentity.loading,
      identity = _useGetIdentity.identity;

  var roles = React.useMemo(function () {
    return !loading && loaded ? identity === null || identity === void 0 ? void 0 : identity.roles : [];
  }, [loaded, identity, loading]);
  var workflow = React.useMemo(function () {
    return getWorkflow(resource);
  }, [getWorkflow, resource]);

  if (!workflow) {
    return /*#__PURE__*/React__default["default"].createElement(reactAdmin.EditButton, {
      disabled: true
    });
  }

  var canEdit = workflow.canEdit(roles, record);
  var label = canEdit ? "ra.action.edit" : "ra.action.view";
  var icon = canEdit ? /*#__PURE__*/React__default["default"].createElement(ContentCreate__default["default"], null) : /*#__PURE__*/React__default["default"].createElement(ContentView__default["default"], null);
  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.EditButton, _extends({
    icon: icon,
    label: label,
    record: record
  }, props));
};

function getHeaders() {
  var token = localStorage.getItem("token");
  var headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer ".concat(token)
  });
  return headers;
}
function getToken() {
  return localStorage.getItem("token");
}
function useToken() {
  var token = getToken();
  var headers = getHeaders();
  var headersMemo = React.useMemo(function () {
    return headers;
  }, [headers]);
  return {
    token: token,
    headers: headersMemo
  };
}

var load = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var apiUrl, token, headers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apiUrl = _ref.apiUrl, token = _ref.token;
            headers = new Headers();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer ".concat(token));
            return _context.abrupt("return", fetch("".concat(apiUrl, "/crud/load"), {
              headers: headers
            }).then(function (response) {
              return response.json();
            }).then(function (_ref3) {
              var data = _ref3.data;
              return data;
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function load(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var useCrud = function useCrud(_ref) {
  var apiUrl = _ref.apiUrl;

  var _useSafeSetState = raCore.useSafeSetState({
    loading: false,
    loaded: false,
    data: [],
    token: getToken()
  }),
      _useSafeSetState2 = _slicedToArray(_useSafeSetState, 2),
      _useSafeSetState2$ = _useSafeSetState2[0],
      loaded = _useSafeSetState2$.loaded,
      loading = _useSafeSetState2$.loading,
      data = _useSafeSetState2$.data,
      token = _useSafeSetState2$.token,
      setData = _useSafeSetState2[1];

  var handleLogin = React.useCallback(function (e) {
    if (token !== e.value) {
      setData(function (d) {
        return _objectSpread2(_objectSpread2({}, d), {}, {
          token: e.value,
          loaded: false
        });
      });
    }
  }, [setData, token]);
  React.useEffect(function () {
    return document.addEventListener("login", handleLogin);
  }, [handleLogin]);
  React.useEffect(function () {
    var loadAll = function loadAll(_ref2) {
      var apiUrl = _ref2.apiUrl,
          token = _ref2.token;

      if (loaded || loading || token === null) {
        return;
      }

      setData({
        loading: true
      });
      load({
        apiUrl: apiUrl,
        token: token
      }).then(function (data) {
        return setData({
          loaded: true,
          loading: false,
          data: data
        });
      });
    };

    var token = getToken();
    loadAll({
      apiUrl: apiUrl,
      token: token
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl, token]);
  return {
    loaded: loaded,
    loading: loading,
    data: data
  };
};

var CrudContext = /*#__PURE__*/React.createContext({});
var CrudProvider = function CrudProvider(_ref) {
  var children = _ref.children,
      apiUrl = _ref.apiUrl;

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      entities = _useState2[0],
      setEntities = _useState2[1];

  var _useCrud = useCrud({
    apiUrl: apiUrl
  }),
      loading = _useCrud.loading,
      data = _useCrud.data;

  var getGrid = function getGrid(entity) {
    return lodash.get(entities, "".concat(entity, ".grid"), false);
  };

  var getForm = function getForm(entity) {
    return lodash.get(entities, "".concat(entity, ".form"), false);
  };

  React.useEffect(function () {
    return setEntities(data);
  }, [data]);
  return /*#__PURE__*/React__default["default"].createElement(CrudContext.Provider, {
    value: {
      apiUrl: apiUrl,
      loading: loading,
      data: data,
      getGrid: getGrid,
      getForm: getForm
    }
  }, children);
};

var ExportToXlsxButton = function ExportToXlsxButton(_ref, ref) {
  var currentSort = _ref.currentSort,
      filterValues = _ref.filterValues,
      baseUrl = _ref.baseUrl,
      onClick = _ref.onClick,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "ra.action.export" : _ref$label,
      _ref$menu = _ref.menu,
      menu = _ref$menu === void 0 ? false : _ref$menu,
      resource = _ref.resource,
      _ref$extension = _ref.extension,
      extension = _ref$extension === void 0 ? "xlsx" : _ref$extension,
      sort = _ref.sort;

  var _useContext = React.useContext(CrudContext),
      apiUrl = _useContext.apiUrl;

  var url = React.useMemo(function () {
    return baseUrl == null ? "".concat(apiUrl, "/crud/").concat(resource, "/export.").concat(extension) : baseUrl;
  }, [baseUrl, apiUrl, resource, extension]);
  var href = React.useMemo(function () {
    var filters = Object.keys(filterValues).filter(function (name) {
      return filterValues[name] !== undefined && filterValues[name] !== null;
    }).map(function (name) {
      return "".concat(name, "=").concat(filterValues[name]);
    }).join("&");
    var order = currentSort ? "&sort=".concat(currentSort.field, "&direction=").concat(currentSort.order) : "&sort=".concat(sort === null || sort === void 0 ? void 0 : sort.field, "&direction=").concat(sort === null || sort === void 0 ? void 0 : sort.order);
    return "".concat(url, "?token=").concat(getToken(), "&").concat(filters).concat(order);
  }, [filterValues, currentSort, url, sort]);
  return menu ? /*#__PURE__*/React__default["default"].createElement(core.MenuItem, {
    ref: ref,
    component: core.Link,
    onClick: onClick,
    href: href
  }, extension === null || extension === void 0 ? void 0 : extension.toUpperCase()) : /*#__PURE__*/React__default["default"].createElement(reactAdmin.Button, {
    component: core.Link,
    href: href,
    label: label
  });
};

var ExportButton = /*#__PURE__*/React__default["default"].forwardRef(ExportToXlsxButton);

var _excluded$u = ["exportTo", "label"];

var ExportToButton = function ExportToButton(_ref) {
  var _ref$exportTo = _ref.exportTo,
      exportTo = _ref$exportTo === void 0 ? ["csv", "xlsx"] : _ref$exportTo,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "ra.action.export" : _ref$label,
      props = _objectWithoutProperties(_ref, _excluded$u);

  var _React$useState = React__default["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  if (exportTo.length === 0) {
    return null;
  }

  return (exportTo === null || exportTo === void 0 ? void 0 : exportTo.length) > 1 ? /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(reactAdmin.Button, {
    label: label,
    onClick: handleClick,
    startIcon: /*#__PURE__*/React__default["default"].createElement(GetAppIcon__default["default"], null)
  }), /*#__PURE__*/React__default["default"].createElement(Menu__default["default"], {
    id: "export-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, exportTo.map(function (extension) {
    return /*#__PURE__*/React__default["default"].createElement(ExportButton, _extends({
      key: extension
    }, props, {
      extension: extension,
      menu: true
    }));
  }))) : /*#__PURE__*/React__default["default"].createElement(ExportButton, _extends({}, props, {
    extension: exportTo[0]
  }));
};

var _excluded$t = ["handleSubmitWithRedirect", "small", "state", "pristine"];
var useStyles$9 = styles$1.makeStyles(function (theme) {
  var _theme$props, _theme$props$MuiButto;

  return {
    button: {
      disableElevation: ((_theme$props = theme.props) === null || _theme$props === void 0 ? void 0 : (_theme$props$MuiButto = _theme$props.MuiButton) === null || _theme$props$MuiButto === void 0 ? void 0 : _theme$props$MuiButto.disableElevation) === true
    }
  };
});

var StateButton = function StateButton(_ref, ref) {
  var handleSubmitWithRedirect = _ref.handleSubmitWithRedirect;
      _ref.small;
      var state = _ref.state;
      _ref.pristine;
      var props = _objectWithoutProperties(_ref, _excluded$t);

  var classes = useStyles$9();
  var form = reactFinalForm.useForm();
  var handleClick = React.useCallback(function () {
    form.change("state", state.code);
    handleSubmitWithRedirect("list");
  }, [state, form, handleSubmitWithRedirect]);
  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.SaveButton, _extends({}, props, {
    className: classes.button,
    redirect: "list",
    color: "primary",
    handleSubmitWithRedirect: handleClick,
    label: lodash.get(state, "label")
  }));
};

var StateButton$1 = /*#__PURE__*/React__default["default"].forwardRef(StateButton);

var _excluded$s = ["states"];
var useStyles$8 = styles$1.makeStyles(function (theme) {
  var _theme$props, _theme$props$MuiButto;

  return {
    button: {
      disableElevation: ((_theme$props = theme.props) === null || _theme$props === void 0 ? void 0 : (_theme$props$MuiButto = _theme$props.MuiButton) === null || _theme$props$MuiButto === void 0 ? void 0 : _theme$props$MuiButto.disableElevation) === true
    }
  };
});

var StateButtonMenu = function StateButtonMenu(_ref) {
  var states = _ref.states,
      props = _objectWithoutProperties(_ref, _excluded$s);

  var classes = useStyles$8();
  var translate = reactAdmin.useTranslate();

  var _React$useState = React__default["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = React__default["default"].useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var handleState = React.useCallback(function (state) {
    return function (e) {
      setState(state.label);
      setAnchorEl(null);
    };
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
    "aria-controls": "workflow-menu",
    "aria-haspopup": "true",
    variant: "contained",
    color: "primary",
    className: classes.button,
    onClick: handleClick
  }, /*#__PURE__*/React__default["default"].createElement(DoubleArrowIcon__default["default"], null), props.saving ? "".concat(state, "...") : translate("ra.workflow.do_action")), /*#__PURE__*/React__default["default"].createElement(Menu__default["default"], {
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, states.map(function (state) {
    return /*#__PURE__*/React__default["default"].createElement(StateButton$1, _extends({}, props, {
      key: state.code,
      component: MenuItem__default["default"],
      state: state,
      color: "default",
      variant: "text",
      icon: /*#__PURE__*/React__default["default"].createElement(ArrowForwardIosIcon__default["default"], null),
      onClick: handleState(state)
    }));
  })));
};

var buttons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  RaEditButton: reactAdmin.EditButton,
  RaDeleteButton: reactAdmin.DeleteButton,
  EditButton: EditButton,
  ExportToButton: ExportToButton,
  BackButton: BackButton,
  StateButton: StateButton$1,
  StateButtonMenu: StateButtonMenu
});

var _excluded$r = ["chipSource"];

var ChipArrayField = function ChipArrayField(_ref) {
  var chipSource = _ref.chipSource,
      props = _objectWithoutProperties(_ref, _excluded$r);

  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.ArrayField, props, /*#__PURE__*/React__default["default"].createElement(reactAdmin.SingleFieldList, null, /*#__PURE__*/React__default["default"].createElement(reactAdmin.ChipField, {
    source: chipSource
  })));
};

var _excluded$q = ["record", "source", "width", "minWidth", "maxWidth", "maxRows", "sortable", "basePath", "sortBy"];
var useStyles$7 = core.makeStyles(function (theme) {
  return {
    root: {
      overflow: "hidden",
      "text-overflow": "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      whiteSpace: "break-spaces"
    }
  };
});

var LongTextField = function LongTextField(_ref) {
  var record = _ref.record,
      source = _ref.source,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? undefined : _ref$width,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? undefined : _ref$minWidth,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? undefined : _ref$maxWidth,
      _ref$maxRows = _ref.maxRows,
      maxRows = _ref$maxRows === void 0 ? 3 : _ref$maxRows;
      _ref.sortable;
      _ref.basePath;
      _ref.sortBy;
      var props = _objectWithoutProperties(_ref, _excluded$q);

  var classes = useStyles$7();
  return /*#__PURE__*/React__default["default"].createElement(core.Typography, _extends({}, props, {
    variant: "body2",
    title: lodash.get(record, source),
    className: classes.root,
    style: {
      width: width,
      minWidth: minWidth,
      maxWidth: maxWidth,
      WebkitLineClamp: maxRows
    }
  }), lodash.get(record, source));
};

LongTextField.propTypes = {
  minWidth: PropTypes__default["default"].number,
  maxWidth: PropTypes__default["default"].number,
  width: PropTypes__default["default"].number,
  maxRows: PropTypes__default["default"].number
};

var MediaField = function MediaField(_ref) {
  var props = _extends({}, _ref);

  var id = lodash.get(props, "record.id", 0);
  var source = id > 0 ? "file.path" : "filepath";
  return /*#__PURE__*/React__default["default"].createElement(raUiMaterialui.FileField, _extends({}, props, {
    source: source
  }));
};

var _excluded$p = ["label", "record", "resource"];

var StateField = function StateField(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "app.label.workflow.state" : _ref$label,
      record = _ref.record,
      toResolve = _ref.resource,
      props = _objectWithoutProperties(_ref, _excluded$p);

  var _useContext = React.useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var resource = React.useMemo(function () {
    return toResolve.replace("workflow/transactions/", "");
  }, [toResolve]);
  var workflow = React.useMemo(function () {
    return getWorkflow(resource);
  }, [resource, getWorkflow]);
  var state = React.useMemo(function () {
    return workflow && workflow.getState(_objectSpread2(_objectSpread2({}, record), {}, {
      transaction: lodash.get(record, "transaction", record)
    })) || undefined;
  }, [record, workflow]);
  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.ChipField, _extends({}, props, {
    label: label,
    source: "name",
    record: state,
    color: "primary"
  }));
};

var useFieldLabel = function useFieldLabel(_ref) {
  var resource = _ref.resource;
  var t = reactAdmin.useTranslate();
  return function (field) {
    var translate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var label = "resources.".concat(resource, ".fields.").concat(field);
    return translate ? t(label) : label;
  };
};

var useStyles$6 = core.makeStyles(function (theme) {
  return {
    root: {
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      whiteSpace: "break-spaces"
    },
    link: {
      cursor: "pointer",
      fontWeight: "bold"
    },
    visibility: {
      display: "block",
      clear: "both"
    }
  };
});

var TransactionNotesField = function TransactionNotesField(_ref) {
  var _ref$admin = _ref.admin,
      admin = _ref$admin === void 0 ? false : _ref$admin,
      record = _ref.record,
      source = _ref.source,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? 150 : _ref$minWidth,
      _ref$maxRows = _ref.maxRows,
      maxRows = _ref$maxRows === void 0 ? 3 : _ref$maxRows,
      component = _ref.component;
  var classes = useStyles$6();
  var fieldLabel = useFieldLabel({
    resource: "transactions"
  });

  var _useMemo = React.useMemo(function () {
    var isPrivate = lodash.get(record, "is_private", true);
    var value = isPrivate && !admin ? null : lodash.get(record, source, "");
    var tooLong = value !== null && value.length > 200;
    return {
      isPrivate: isPrivate,
      value: value,
      tooLong: tooLong
    };
  }, [record, admin, source]),
      isPrivate = _useMemo.isPrivate,
      value = _useMemo.value,
      tooLong = _useMemo.tooLong;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMore = _useState2[0],
      setShowMore = _useState2[1];

  var handleToggle = function handleToggle() {
    return setShowMore(!showMore);
  };

  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    component: component,
    className: classes.root,
    style: {
      minWidth: minWidth,
      WebkitLineClamp: showMore ? null : maxRows
    },
    variant: "body2",
    color: value === null || value.length === 0 ? "textSecondary" : "textPrimary",
    display: "inline"
  }, tooLong === false ? value !== null && value.length > 0 ? value : fieldLabel("notes.empty") : null, tooLong && (showMore ? value : value.substring(0, 200) + "...")), admin && value !== null && value.length > 0 && /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    component: component,
    color: isPrivate ? "error" : "textSecondary",
    className: classes.visibility,
    variant: "caption"
  }, fieldLabel("notes.".concat(isPrivate ? "private" : "public"))), tooLong && /*#__PURE__*/React__default["default"].createElement(core.Link, {
    underline: "hover",
    className: classes.link,
    onClick: handleToggle
  }, fieldLabel("notes.".concat(showMore ? "show_less" : "show_more"))));
};

TransactionNotesField.propTypes = {
  minWidth: PropTypes__default["default"].number,
  maxRows: PropTypes__default["default"].number
};

var _excluded$o = ["fullWidth", "addLabel"],
    _excluded2$4 = ["admin", "label"];

var PaginationWrapper = function PaginationWrapper(_ref) {
  _ref.fullWidth;
      _ref.addLabel;
      var props = _objectWithoutProperties(_ref, _excluded$o);

  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.Pagination, props);
};

var TransactionLogsField = function TransactionLogsField(_ref2) {
  var _ref2$admin = _ref2.admin,
      admin = _ref2$admin === void 0 ? false : _ref2$admin,
      label = _ref2.label,
      props = _objectWithoutProperties(_ref2, _excluded2$4);

  var _useContext = React.useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var mobileBreakpoint = React.useMemo(function () {
    return lodash.get(props, "mobileBreakpoint", "sm");
  }, [props]);
  var isMobile = core.useMediaQuery(function (theme) {
    return theme.breakpoints.down(mobileBreakpoint !== null && mobileBreakpoint !== void 0 ? mobileBreakpoint : "sm");
  });
  var fieldLabel = useFieldLabel({
    resource: "transactions"
  });
  var workflow = React.useMemo(function () {
    return getWorkflow(props.resource);
  }, [getWorkflow, props.resource]);

  if (!workflow || !props.record) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement("br", null), label && /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "subtitle1",
    gutterBottom: true
  }, label), label && /*#__PURE__*/React__default["default"].createElement(core.Divider, null), /*#__PURE__*/React__default["default"].createElement(reactAdmin.ReferenceManyField, _extends({
    perPage: 5,
    pagination: /*#__PURE__*/React__default["default"].createElement(PaginationWrapper, null),
    reference: "workflow/transactions/".concat(props.resource),
    sort: {
      field: "Transactions.created",
      order: "desc"
    }
  }, props, {
    source: "id",
    target: "id"
  }), isMobile ? /*#__PURE__*/React__default["default"].createElement(reactAdmin.SimpleList, {
    primaryText: function primaryText(record) {
      return /*#__PURE__*/React__default["default"].createElement(reactAdmin.DateField, {
        label: fieldLabel("created"),
        record: record,
        source: "created",
        showTime: true
      });
    },
    secondaryText: function secondaryText(record) {
      return /*#__PURE__*/React__default["default"].createElement(TransactionNotesField, {
        record: record,
        component: "span",
        label: fieldLabel("notes"),
        source: "notes",
        admin: admin,
        sortable: false,
        maxRows: 6
      });
    },
    linkType: false
  }) : /*#__PURE__*/React__default["default"].createElement(reactAdmin.Datagrid, null, admin && /*#__PURE__*/React__default["default"].createElement(reactAdmin.TextField, {
    label: fieldLabel("id"),
    source: "id"
  }), /*#__PURE__*/React__default["default"].createElement(reactAdmin.DateField, {
    label: fieldLabel("created"),
    source: "created",
    showTime: true,
    sortBy: "Transactions.created"
  }), /*#__PURE__*/React__default["default"].createElement(reactAdmin.TextField, {
    label: fieldLabel("user"),
    source: "user.name",
    sortBy: "Users.username"
  }), /*#__PURE__*/React__default["default"].createElement(TransactionNotesField, {
    label: fieldLabel("notes"),
    source: "notes",
    admin: admin,
    sortable: false,
    maxRows: 6
  }), /*#__PURE__*/React__default["default"].createElement(StateField, {
    label: fieldLabel("state"),
    sortBy: "Transactions.state"
  }))), /*#__PURE__*/React__default["default"].createElement("br", null));
};

var fields = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TextField: reactAdmin.TextField,
  DateField: reactAdmin.DateField,
  ChipField: reactAdmin.ChipField,
  BooleanField: reactAdmin.BooleanField,
  ChipArrayField: ChipArrayField,
  LongTextField: LongTextField,
  MediaField: MediaField,
  StateField: StateField,
  TransactionLogsField: TransactionLogsField
});

var useFormStyles = core.makeStyles(function (theme) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, theme.breakpoints.up("md"), {
    main: {
      width: "70%",
      minWidth: "960px",
      margin: "1em auto"
    }
  }), _defineProperty(_ref, theme.breakpoints.down("md"), {
    main: {
      minWidth: "100%"
    }
  }), _ref;
});

var _excluded$n = ["children"];

var Create$3 = function Create(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$n);

  var classes = useFormStyles();
  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.Create, _extends({}, props, {
    classes: classes
  }), children);
};

var _excluded$m = ["children"];

var Create$2 = function Create(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$m);

  var classes = useFormStyles();
  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.Edit, _extends({}, props, {
    classes: classes
  }), children);
};

function useDebounce(value, delay) {
  // State and setters for debounced value
  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  React.useEffect(function () {
    // Update debounced value after delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return function () {
      clearTimeout(handler);
    };
  }, [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

var _excluded$l = ["margin", "variant", "fullWidth", "maxLength", "multiline", "format", "rows", "disabled", "InputProps", "InputLabelProps"],
    _excluded2$3 = ["name", "onChange"];

var DebouncedTextInput = function DebouncedTextInput(_ref) {
  var _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? "dense" : _ref$margin,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "filled" : _ref$variant,
      fullWidth = _ref.fullWidth,
      maxLength = _ref.maxLength,
      multiline = _ref.multiline,
      format = _ref.format,
      rows = _ref.rows,
      disabled = _ref.disabled,
      InputProps = _ref.InputProps,
      InputLabelProps = _ref.InputLabelProps,
      props = _objectWithoutProperties(_ref, _excluded$l);

  var className = props.className,
      source = props.source,
      resource = props.resource,
      label = props.label;
  var validationFn = raCore.maxLength(maxLength);
  var helperText = props.helperText;
  var validate = props.validate;

  if (!validate) {
    validate = [validationFn];
  } else if (Array.isArray(validate)) {
    if (validate.indexOf(validationFn) === -1) {
      validate.push(validationFn);
    }
  }

  var _useInput = reactAdmin.useInput(_objectSpread2({
    validate: validate
  }, props)),
      _useInput$input = _useInput.input,
      name = _useInput$input.name,
      onChange = _useInput$input.onChange,
      rest = _objectWithoutProperties(_useInput$input, _excluded2$3),
      _useInput$meta = _useInput.meta,
      touched = _useInput$meta.touched,
      error = _useInput$meta.error,
      submitError = _useInput$meta.submitError,
      isRequired = _useInput.isRequired;

  var translate = raCore.useTranslate();
  var defaultValue = props.type === "number" ? 0 : "";

  var _React$useState = React__default["default"].useState(rest.value !== undefined ? rest.value : defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var formState = reactFinalForm.useFormState();
  var formValue = lodash.get(formState.values, source, defaultValue);
  var didMountEffect = React.useRef(false);
  var didUpdateValue = React.useRef(false);
  React.useEffect(function () {
    if (didMountEffect.current === false) {
      didMountEffect.current = true;
      return;
    }

    if (formValue && formValue !== null) {
      didUpdateValue.current = true;
      setValue(formValue);
    }
  }, [formValue]);
  var handleChange = React.useCallback(function (evt) {
    return setValue(evt.target.value);
  }, []);
  var debouncedValue = useDebounce(value, 500);
  var didMountChange = React.useRef(false);
  React.useEffect(function () {
    if (didMountChange.current === false) {
      didMountChange.current = true;
      return;
    }

    if (didUpdateValue.current === true) {
      didUpdateValue.current = false;
      return;
    }

    var compareToValue = formValue !== null ? formValue : defaultValue;

    if (debouncedValue !== compareToValue) {
      onChange(debouncedValue);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [debouncedValue, onChange]);
  var usedCharsInfo = translate("app.input.max_length_info", {
    count: lodash.get(value, "length", 0),
    max: maxLength
  });

  if (maxLength) {
    helperText = helperText && helperText.length > 0 ? "".concat(usedCharsInfo, " - ").concat(translate(helperText)) : usedCharsInfo;
  }

  return /*#__PURE__*/React__default["default"].createElement(TextField__default["default"], _extends({}, rest, {
    disabled: disabled,
    name: name,
    className: className,
    fullWidth: fullWidth,
    multiline: multiline,
    rows: rows,
    variant: variant,
    margin: margin,
    value: format ? format(value) : value,
    label: label !== "" && label !== false && /*#__PURE__*/React__default["default"].createElement(raCore.FieldTitle, {
      label: label,
      source: source,
      resource: resource
    }),
    onChange: handleChange,
    error: !!(touched && (error || submitError)),
    helperText: /*#__PURE__*/React__default["default"].createElement(raUiMaterialui.InputHelperText, {
      touched: touched,
      error: error || submitError,
      helperText: helperText
    }),
    InputLabelProps: InputLabelProps,
    InputProps: InputProps,
    required: isRequired
  }));
};

/**
 * Convert Date object to String
 *
 * @param {Date} value value to convert
 * @returns {String} A standardized date (yyyy-MM-dd), to be passed to an <input type="date" />
 */

var convertDateToString = function convertDateToString(value) {
  if (!(value instanceof Date) || isNaN(value.getDate())) return "";
  var pad = "00";
  var yyyy = value.getFullYear().toString();
  var MM = (value.getMonth() + 1).toString();
  var dd = value.getDate().toString();
  return "".concat(yyyy, "-").concat((pad + MM).slice(-2), "-").concat((pad + dd).slice(-2));
};

var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
var defaultInputLabelProps = {
  shrink: true
};

var getStringFromDate = function getStringFromDate(value) {
  // null, undefined and empty string values should not go through dateFormatter
  // otherwise, it returns undefined and will make the input an uncontrolled one.
  if (value == null || value === "") {
    return "";
  }

  if (value instanceof Date) {
    return convertDateToString(value);
  } // valid dates should not be converted


  if (dateRegex.test(value)) {
    return value;
  }

  return convertDateToString(new Date(value));
};

var DebouncedDateInput = function DebouncedDateInput(props) {
  return /*#__PURE__*/React__default["default"].createElement(DebouncedTextInput, _extends({}, props, {
    type: "date",
    format: getStringFromDate,
    InputLabelProps: defaultInputLabelProps
  }));
};

var convertStringToNumber = function convertStringToNumber(value) {
  var float = parseFloat(value);
  return isNaN(float) ? null : float;
};

var DebouncedNumberInput = function DebouncedNumberInput(props) {
  return /*#__PURE__*/React__default["default"].createElement(DebouncedTextInput, _extends({}, props, {
    type: "number",
    parse: convertStringToNumber
  }));
};

var _excluded$k = ["title"];

var MediaInput = function MediaInput(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$k);

  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.FileInput, props, /*#__PURE__*/React__default["default"].createElement(MediaField, {
    source: "filepath",
    title: title
  }));
};

var _excluded$j = ["optionText"];

var ReferenceAutocompleteInput$1 = function ReferenceAutocompleteInput(_ref) {
  var optionText = _ref.optionText,
      props = _objectWithoutProperties(_ref, _excluded$j);

  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.ReferenceInput, props, /*#__PURE__*/React__default["default"].createElement(reactAdmin.AutocompleteInput, {
    optionText: optionText
  }));
};

var createManyFormatter = function createManyFormatter() {
  return function (many) {
    var array = many ? many.map(function (p) {
      return p.id;
    }) : [];
    return array;
  };
};

var useManyFormatter = function useManyFormatter() {
  var memoizedFn = React.useMemo(function () {
    return createManyFormatter();
  }, []);
  return memoizedFn;
};

var createManyParser = function createManyParser() {
  return function (many) {
    var objects = many ? many.map(function (id) {
      return {
        id: id
      };
    }) : [];
    return objects;
  };
};

var useManyParser = function useManyParser() {
  var memoizedFn = React.useMemo(function () {
    return createManyParser();
  }, []);
  return memoizedFn;
};

var _excluded$i = ["optionText"];

var ReferenceCheckboxGroupInput = function ReferenceCheckboxGroupInput(_ref) {
  var optionText = _ref.optionText,
      props = _objectWithoutProperties(_ref, _excluded$i);

  var parse = useManyParser();
  var format = useManyFormatter();
  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.ReferenceArrayInput, _extends({}, props, {
    parse: parse,
    format: format
  }), /*#__PURE__*/React__default["default"].createElement(reactAdmin.CheckboxGroupInput, {
    optionText: optionText
  }));
};

var _excluded$h = ["optionText"];

var ReferenceAutocompleteInput = function ReferenceAutocompleteInput(_ref) {
  var optionText = _ref.optionText,
      props = _objectWithoutProperties(_ref, _excluded$h);

  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.ReferenceInput, props, /*#__PURE__*/React__default["default"].createElement(reactAdmin.SelectInput, {
    optionText: optionText
  }));
};

var useStyles$5 = core.makeStyles(function (theme) {
  return {
    required: {}
  };
});

var ConfirmMove = function ConfirmMove(_ref) {
  var _ref$admin = _ref.admin,
      admin = _ref$admin === void 0 ? false : _ref$admin,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      resource = _ref.resource,
      record = _ref.record,
      state = _ref.state,
      onCancel = _ref.onCancel;
  var classes = useStyles$5();
  var refresh = reactAdmin.useRefresh();
  var notify = reactAdmin.useNotify();

  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      notes = _useState2[0],
      setNotes = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPrivate = _useState4[0],
      setPrivate = _useState4[1];

  var _useContext = React.useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var workflow = React.useMemo(function () {
    return getWorkflow(resource);
  }, [getWorkflow, resource]);
  var translate = reactAdmin.useTranslate();
  var handleChange = React.useCallback(function (e) {
    return setNotes(e.target.value);
  }, [setNotes]);
  var handlePrivate = React.useCallback(function (e) {
    return setPrivate(e.target.checked);
  }, [setPrivate]);
  var needsNotes = React.useMemo(function () {
    return workflow && workflow.needsNotes(record, state);
  }, [workflow, record, state]);

  var _useUpdate = reactAdmin.useUpdate(resource, record.id, _objectSpread2(_objectSpread2({}, record), {}, {
    user: null,
    state: lodash.get(state, "code"),
    notes: notes,
    is_private: isPrivate
  }), record, {
    onSuccess: function onSuccess() {
      notify("resources.workflow.move.success");
      refresh();
    },
    onFailure: function onFailure(_ref2) {
      var message = _ref2.message,
          body = _ref2.body,
          status = _ref2.status;
      onCancel();
      notify("resources.workflow.move.error", "error", {
        reason: message,
        message: message,
        body: body,
        status: status
      });
    }
  }),
      _useUpdate2 = _slicedToArray(_useUpdate, 2),
      handleUpdate = _useUpdate2[0],
      loading = _useUpdate2[1].loading;

  return /*#__PURE__*/React__default["default"].createElement(core.Dialog, {
    open: open
  }, /*#__PURE__*/React__default["default"].createElement(core.DialogTitle, null, translate("resources.workflow.move.title")), /*#__PURE__*/React__default["default"].createElement(core.DialogContent, null, /*#__PURE__*/React__default["default"].createElement(core.DialogContentText, {
    className: classnames__default["default"](needsNotes && classes.required)
  }, translate("resources.workflow.move.message" + (needsNotes ? ".required" : ""))), /*#__PURE__*/React__default["default"].createElement(core.TextField, {
    autoFocus: true,
    onChange: handleChange,
    margin: "dense",
    id: "notes",
    label: translate("resources.workflow.fields.notes"),
    type: "text",
    multiline: true,
    fullWidth: true
  }), admin && /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.FormControlLabel, {
    control: /*#__PURE__*/React__default["default"].createElement(core.Switch, {
      checked: isPrivate,
      onChange: handlePrivate,
      name: "is_private",
      color: "primary"
    }),
    label: translate("resources.workflow.fields.is_private")
  }), /*#__PURE__*/React__default["default"].createElement(core.FormHelperText, null, translate("resources.workflow.fields.is_private.help")))), /*#__PURE__*/React__default["default"].createElement(core.DialogActions, null, /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: onCancel
  }, translate("ra.action.cancel")), /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: handleUpdate,
    color: "primary",
    disabled: needsNotes && notes.length === 0 || loading
  }, translate("ra.action.confirm"))));
};

ConfirmMove.propTypes = {
  state: PropTypes__default["default"].shape({
    code: PropTypes__default["default"].string,
    name: PropTypes__default["default"].string,
    label: PropTypes__default["default"].string
  }),
  resource: PropTypes__default["default"].string.isRequired,
  record: PropTypes__default["default"].object.isRequired,
  open: PropTypes__default["default"].bool.isRequired,
  onCancel: PropTypes__default["default"].func.isRequired
};

var StateCollectionInput = function StateCollectionInput(_ref) {
  var _ref$readonly = _ref.readonly,
      readonly = _ref$readonly === void 0 ? false : _ref$readonly,
      _ref$admin = _ref.admin,
      admin = _ref$admin === void 0 ? false : _ref$admin,
      record = _ref.record,
      toResolve = _ref.resource;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useGetIdentity = raCore.useGetIdentity(),
      loading = _useGetIdentity.loading,
      loaded = _useGetIdentity.loaded,
      identity = _useGetIdentity.identity;

  var roles = React.useMemo(function () {
    return !loading && loaded ? identity === null || identity === void 0 ? void 0 : identity.roles : [];
  }, [loading, loaded, identity]);
  var resource = React.useMemo(function () {
    return toResolve.replace("workflow/transactions/", "");
  }, [toResolve]);

  var _useContext = React.useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var workflow = React.useMemo(function () {
    return getWorkflow(resource);
  }, [getWorkflow, resource]);

  var _useMemo = React.useMemo(function () {
    var currentState = workflow && workflow.getState(_objectSpread2(_objectSpread2({}, record), {}, {
      // If component is used inside TransactionLogsField the transaction is referencing
      // current record. I have to get it to make workflow work.
      transaction: lodash.get(record, "transaction", record)
    })) || undefined;
    var nextStates = workflow.getNextStates(roles, record);
    return {
      currentState: currentState,
      nextStates: nextStates
    };
  }, [roles, record, workflow]),
      currentState = _useMemo.currentState,
      nextStates = _useMemo.nextStates;

  var _React$useState = React__default["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
    setState(null);
  };

  var handleChange = React.useCallback(function (state) {
    return function (e) {
      setAnchorEl(null);
      setState(state);
    };
  }, []);

  if (readonly || nextStates.length === 0) {
    // If user is not admin and there are no next states, show current state
    return /*#__PURE__*/React__default["default"].createElement(StateField, {
      record: record,
      resource: toResolve
    });
  }

  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(core.Button, {
    disableElevation: true,
    endIcon: /*#__PURE__*/React__default["default"].createElement(ArrowDropDownIcon__default["default"], null),
    color: "primary",
    variant: "contained",
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    style: {
      textAlign: "left"
    },
    size: "small",
    onClick: handleClick
  }, /*#__PURE__*/React__default["default"].createElement(LongTextField, {
    record: currentState,
    source: "name",
    variant: "body2"
  })), /*#__PURE__*/React__default["default"].createElement(core.Menu, {
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, nextStates.map(function (state) {
    return /*#__PURE__*/React__default["default"].createElement(core.MenuItem, {
      key: lodash.get(state, "code"),
      onClick: handleChange(state)
    }, lodash.get(state, "label"));
  })), /*#__PURE__*/React__default["default"].createElement(ConfirmMove, {
    admin: admin,
    open: state !== null,
    resource: resource,
    record: record,
    state: state,
    onCancel: handleClose
  }));
};

var _excluded$g = ["filter"];

var StateInput = function StateInput(_ref) {
  var _ref$filter = _ref.filter,
      filter = _ref$filter === void 0 ? undefined : _ref$filter,
      props = _objectWithoutProperties(_ref, _excluded$g);

  var _useContext = React.useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var workflow = React.useMemo(function () {
    return getWorkflow(props.resource);
  }, [props.resource, getWorkflow]);
  var states = React.useMemo(function () {
    return workflow ? workflow.states.filter(function (s) {
      return !s.isLoop && (filter === undefined || filter(s));
    }) : [];
  }, [workflow, filter]);
  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.SelectInput, _extends({}, props, {
    choices: states,
    optionText: "name",
    optionValue: "code",
    allowEmpty: true,
    emptyText: "ra.action.all"
  }));
};

var TransactionNotesInput = function TransactionNotesInput(props) {
  var translate = reactAdmin.useTranslate();
  var fieldLabel = useFieldLabel({
    resource: "transactions"
  });
  var label = React.useMemo(function () {
    return props.label || fieldLabel("notes");
  }, [props.label, fieldLabel]);
  var helperText = React.useMemo(function () {
    return translate(props.helperText);
  }, [props.helperText, translate]);
  return /*#__PURE__*/React__default["default"].createElement(DebouncedTextInput, _extends({}, props, {
    label: label,
    helperText: helperText,
    maxLength: 1500,
    multiline: true
  }));
};

var _excluded$f = ["label", "helperText", "admin"];

var TransactionNotesIsPrivateInput = function TransactionNotesIsPrivateInput(_ref) {
  var label = _ref.label,
      helperText = _ref.helperText,
      _ref$admin = _ref.admin,
      admin = _ref$admin === void 0 ? false : _ref$admin,
      props = _objectWithoutProperties(_ref, _excluded$f);

  var fieldLabel = useFieldLabel({
    resource: "transactions"
  });

  if (!admin) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.BooleanInput, _extends({
    label: label || fieldLabel("is_private", false),
    helperText: helperText || fieldLabel("is_private.helper_text"),
    source: "is_private"
  }, props));
};

var inputs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ReferenceCheckboxGroupInput: ReferenceCheckboxGroupInput,
  ReferenceAutocompleteInput: ReferenceAutocompleteInput$1,
  ReferenceSelectInput: ReferenceAutocompleteInput,
  SearchInput: reactAdmin.SearchInput,
  TextInput: reactAdmin.TextInput,
  SelectInput: reactAdmin.SelectInput,
  BooleanInput: reactAdmin.BooleanInput,
  DateInput: reactAdmin.DateInput,
  DateTimeInput: reactAdmin.DateTimeInput,
  NumberInput: reactAdmin.NumberInput,
  MediaInput: MediaInput,
  StateInput: StateInput,
  StateCollectionInput: StateCollectionInput,
  TransactionNotesIsPrivateInput: TransactionNotesIsPrivateInput,
  TransactionNotesInput: TransactionNotesInput,
  DebouncedDateInput: DebouncedDateInput,
  DebouncedNumberInput: DebouncedNumberInput,
  DebouncedTextInput: DebouncedTextInput
});

var _excluded$e = ["children"];

var getWidthToSubtract = function getWidthToSubtract(w) {
  return w + (window.innerWidth - document.documentElement.clientWidth);
};

var useStyles$4 = core.makeStyles(function (theme) {
  return {
    container: function container(_ref) {
      var sidebarOpen = _ref.sidebarOpen,
          drawerWidth = _ref.drawerWidth;
      return _defineProperty({
        maxWidth: "calc(100vw - ".concat(sidebarOpen ? getWidthToSubtract(drawerWidth + theme.spacing(6) - 1) : getWidthToSubtract(58 + theme.spacing(6) - 1), "px)"),
        borderRadius: theme.shape.borderRadius,
        overflowX: "auto",
        overflowY: "hidden"
      }, theme.breakpoints.down("xs"), {
        width: "100vw",
        maxWidth: "100vw"
      });
    },
    rowEven: {
      backgroundColor: theme.palette.background.default
    }
  };
});

var Datagrid = function Datagrid(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, _excluded$e);

  var _useContext = React.useContext(LayoutContext),
      drawerWidth = _useContext.drawerWidth;

  var sidebarOpen = reactRedux.useSelector(function (state) {
    return state.admin.ui.sidebarOpen;
  });
  var classes = useStyles$4({
    sidebarOpen: sidebarOpen,
    drawerWidth: drawerWidth
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React__default["default"].createElement(reactAdmin.Datagrid, _extends({
    classes: {
      rowEven: classes.rowEven
    }
  }, props), children));
};

var _excluded$d = ["component", "componentProps", "components", "addLabel", "sortBy"];

var Component = function Component(_ref) {
  var component = _ref.component,
      componentProps = _ref.componentProps,
      components = _ref.components,
      _ref$addLabel = _ref.addLabel,
      addLabel = _ref$addLabel === void 0 ? true : _ref$addLabel;
      _ref.sortBy;
      var props = _objectWithoutProperties(_ref, _excluded$d);

  var Component = lodash.get(components, component);

  if (!Component) {
    return addLabel ? /*#__PURE__*/React__default["default"].createElement(reactAdmin.Labeled, {
      label: props.label,
      source: props.source,
      fullWidth: true
    }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
      variant: "body2"
    }, "No component found for ", /*#__PURE__*/React__default["default"].createElement("code", null, component), ".")) : /*#__PURE__*/React__default["default"].createElement(core.Typography, {
      variant: "body2"
    }, "No component found for ", /*#__PURE__*/React__default["default"].createElement("code", null, component), ".");
  }

  return /*#__PURE__*/React__default["default"].createElement(Component, _extends({}, props, componentProps));
};

var _excluded$c = ["component", "disabled"];

var Input = function Input(_ref) {
  var component = _ref.component,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded$c);

  var _useGetIdentity = raCore.useGetIdentity(),
      loaded = _useGetIdentity.loaded,
      loading = _useGetIdentity.loading,
      identity = _useGetIdentity.identity;

  var roles = React.useMemo(function () {
    return !loading && loaded ? identity === null || identity === void 0 ? void 0 : identity.roles : [];
  }, [identity, loading, loaded]);

  var _useMemo = React.useMemo(function () {
    var resource = lodash.get(props, "resource", component.props.resource);
    var source = lodash.get(props, "source", component.props.source);
    var record = lodash.get(props, "record", component.props.record);
    return {
      resource: resource,
      source: source,
      record: record
    };
  }, [props, component]),
      resource = _useMemo.resource,
      source = _useMemo.source,
      record = _useMemo.record;

  var _useContext = React.useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var workflow = React.useMemo(function () {
    return getWorkflow(resource);
  }, [resource, getWorkflow]);

  var _useMemo2 = React.useMemo(function () {
    var visible = workflow && workflow.canReadField(source, roles, record);
    var disable = disabled || workflow && !workflow.canEditField(source, roles, record);
    return {
      visible: visible,
      disable: disable
    };
  }, [workflow, source, record, roles, disabled]),
      visible = _useMemo2.visible,
      disable = _useMemo2.disable;

  if (!visible) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].cloneElement(component, _objectSpread2(_objectSpread2(_objectSpread2({}, component.props), props), {}, {
    disabled: disable,
    resource: resource,
    source: source,
    record: record
  }));
};

var _require = require("ra-core"),
    getResources = _require.getResources;

var _require2 = require("react-redux"),
    shallowEqual = _require2.shallowEqual,
    useSelector = _require2.useSelector;

var _require3 = require("lodash"),
    get = _require3.get;

var useCustomComponents = function useCustomComponents(resource) {
  var resources = useSelector(getResources, shallowEqual);
  return React.useMemo(function () {
    var r = resources.find(function (r) {
      return r.name === resource;
    });
    return get(r, "options.components");
  }, [resources, resource]);
};

var _excluded$b = ["tabs"],
    _excluded2$2 = ["componentProps"],
    _excluded3 = ["fullWidth"];

var TabbedForm = function TabbedForm(_ref) {
  var tabs = _ref.tabs,
      props = _objectWithoutProperties(_ref, _excluded$b);

  var _useContext = React.useContext(CrudContext),
      getForm = _useContext.getForm;

  var _useContext2 = React.useContext(WorkflowContext),
      getWorkflow = _useContext2.getWorkflow;

  var form = React.useMemo(function () {
    return getForm(props.resource);
  }, [props.resource, getForm]);
  var workflow = React.useMemo(function () {
    return form !== null && form !== void 0 && form.useWorkflow ? getWorkflow(props.resource) : null;
  }, [props.resource, getWorkflow, form]);
  var customComponents = useCustomComponents(props.resource);
  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.TabbedForm, props, tabs.map(function (_ref2, index) {
    var _tab$inputs;

    var label = _ref2.componentProps.label,
        tab = _objectWithoutProperties(_ref2, _excluded2$2);

    return /*#__PURE__*/React__default["default"].createElement(reactAdmin.FormTab, {
      key: index,
      label: label
    }, tab === null || tab === void 0 ? void 0 : (_tab$inputs = tab.inputs) === null || _tab$inputs === void 0 ? void 0 : _tab$inputs.map(function (_ref3) {
      var source = _ref3.source,
          label = _ref3.label,
          component = _ref3.component,
          useWorkflow = _ref3.useWorkflow,
          _ref3$componentProps = _ref3.componentProps,
          fullWidth = _ref3$componentProps.fullWidth,
          restComponentProps = _objectWithoutProperties(_ref3$componentProps, _excluded3);

      return form !== null && form !== void 0 && form.useWorkflow && workflow !== null && useWorkflow === true ? /*#__PURE__*/React__default["default"].createElement(Input, {
        key: source,
        source: source,
        fullWidth: true,
        component: /*#__PURE__*/React__default["default"].createElement(Component, {
          key: source,
          source: source,
          label: label,
          fullWidth: fullWidth,
          component: component,
          componentProps: _objectSpread2({
            fullWidth: fullWidth
          }, restComponentProps),
          components: _objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), customComponents)
        })
      }) : /*#__PURE__*/React__default["default"].createElement(Component, {
        key: source,
        source: source,
        label: label,
        fullWidth: fullWidth,
        component: component,
        componentProps: _objectSpread2({
          fullWidth: fullWidth
        }, restComponentProps),
        components: _objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), customComponents)
      });
    }));
  }));
};

var _excluded$a = ["children", "mutationMode", "validating", "maxButtonsToDisplay"];
var useStyles$3 = styles$1.makeStyles(function (theme) {
  return {
    toolbar: {
      "& .MuiButton-root": {
        marginRight: theme.spacing(1)
      }
    }
  };
});

var Toolbar = function Toolbar(_ref) {
  var children = _ref.children;
      _ref.mutationMode;
      _ref.validating;
      var _ref$maxButtonsToDisp = _ref.maxButtonsToDisplay,
      maxButtonsToDisplay = _ref$maxButtonsToDisp === void 0 ? 1 : _ref$maxButtonsToDisp,
      props = _objectWithoutProperties(_ref, _excluded$a);

  var form = reactFinalForm.useForm();
  var classes = useStyles$3();
  var handleSubmitWithRedirect = props.handleSubmitWithRedirect,
      record = props.record;

  var _useGetIdentity = reactAdmin.useGetIdentity(),
      loading = _useGetIdentity.loading,
      loaded = _useGetIdentity.loaded,
      identity = _useGetIdentity.identity;

  var roles = React.useMemo(function () {
    return !loading && loaded ? identity === null || identity === void 0 ? void 0 : identity.roles : [];
  }, [loading, loaded, identity]);

  var _useContext = React.useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var workflow = React.useMemo(function () {
    return getWorkflow(props.resource);
  }, [getWorkflow, props.resource]);

  var _useMemo = React.useMemo(function () {
    var save = workflow && workflow.canEdit(roles, record) && lodash.get(record, "id", 0) > 0;
    var states = workflow && workflow.getNextStates(roles, record) || [];
    return {
      states: states,
      save: save
    };
  }, [workflow, record, roles]),
      states = _useMemo.states,
      save = _useMemo.save;

  var handleClick = React.useCallback(function () {
    form.change("state", lodash.get(record, "transaction.state", lodash.get(record, "state")));
    handleSubmitWithRedirect("list");
  }, [form, record, handleSubmitWithRedirect]);

  if (!record) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.Toolbar, _extends({}, props, {
    classes: classes
  }), save && /*#__PURE__*/React__default["default"].createElement(reactAdmin.SaveButton, _extends({}, props, {
    color: "primary",
    handleSubmitWithRedirect: handleClick,
    disabled: props.saving
  })), states.length > maxButtonsToDisplay && /*#__PURE__*/React__default["default"].createElement(StateButtonMenu, _extends({
    states: states
  }, props, {
    disabled: props.saving
  })), states.length <= maxButtonsToDisplay && states.map(function (state) {
    return /*#__PURE__*/React__default["default"].createElement(StateButton$1, _extends({
      key: lodash.get(state, "code"),
      state: state
    }, props, {
      disabled: props.saving
    }));
  }), React__default["default"].Children.count(children) > 0 && React__default["default"].Children.map(children, function (child, key) {
    return /*#__PURE__*/React__default["default"].cloneElement(child, _objectSpread2(_objectSpread2({}, props), {}, {
      key: key
    }));
  }), /*#__PURE__*/React__default["default"].createElement(BackButton, null));
};

var mapFieldErrors = function mapFieldErrors(field, errors) {
  var keys = Object.keys(errors);
  var messages = keys.filter(function (k) {
    return typeof errors[k] === "string";
  });

  if (messages.length > 0) {
    return _defineProperty({}, field, messages.map(function (m) {
      return errors[m];
    }).join("\n"));
  } else {
    var out = keys.reduce(function (errorMap, key) {
      return _objectSpread2(_objectSpread2({}, errorMap), mapFieldErrors(key, errors[key]));
    }, {});
    return _defineProperty({}, field, out);
  }
};

var cakephpErrorMapper = function cakephpErrorMapper(errors) {
  var fields = Object.keys(errors);
  var validationErrors = fields.reduce(function (errorsMap, field) {
    return _objectSpread2(_objectSpread2({}, errorsMap), mapFieldErrors(field, errors[field]));
  }, {});
  return validationErrors;
};

var createErrorMapper = function createErrorMapper() {
  return function (error, notify) {
    var errors = lodash.get(error, "body.data.errors", null);
    var message = lodash.get(error, "body.data.message", null);

    if (message) {
      notify(message, {
        type: "error"
      });
    }

    if (errors) {
      var mappedErrors = cakephpErrorMapper(errors);
      return mappedErrors;
    } else {
      return false;
    }
  };
};

var useSaveMutation = function useSaveMutation(_ref) {
  var basePath = _ref.basePath,
      _ref$errorMapper = _ref.errorMapper,
      errorMapper = _ref$errorMapper === void 0 ? createErrorMapper() : _ref$errorMapper,
      _ref$onSuccess = _ref.onSuccess,
      onSuccess = _ref$onSuccess === void 0 ? undefined : _ref$onSuccess,
      _ref$redir = _ref.redir,
      redir = _ref$redir === void 0 ? null : _ref$redir,
      redirect = _ref.redirect,
      refresh = _ref.refresh,
      resource = _ref.resource,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? undefined : _ref$transform,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? null : _ref$type;

  var _useMutation = raCore.useMutation(),
      _useMutation2 = _slicedToArray(_useMutation, 1),
      mutate = _useMutation2[0];

  var doRedirect = raCore.useRedirect();
  var doRefresh = raCore.useRefresh();
  var notify = raCore.useNotify();
  var save = React.useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return mutate({
                type: type === null ? values.id && values.id > 0 ? "update" : "create" : type,
                resource: resource,
                payload: {
                  id: values.id,
                  data: transform ? transform(values) : values
                }
              }, {
                returnPromise: true
              });

            case 3:
              response = _context.sent;
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", errorMapper(_context.t0, notify));

            case 9:
              if (!onSuccess) {
                if (redir) {
                  redirect(redir);
                } else if (refresh === true) {
                  if (values.id > 0) {
                    doRefresh();
                  } else {
                    doRedirect("edit", basePath, response.data.id);
                  }
                } else {
                  doRedirect(redirect, basePath, response.data.id);
                }

                notify("ra.notification." + (values.id > 0 ? "updated" : "created"), {
                  type: "info",
                  messageArgs: {
                    smart_count: 1
                  }
                });
              } else onSuccess(response, values);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [basePath, doRedirect, doRefresh, errorMapper, mutate, notify, onSuccess, redir, redirect, refresh, resource, transform, type]);
  return save;
};

var _excluded$9 = ["fullWidth"];

var Form = function Form(_ref) {
  var _form$inputs;

  var props = _extends({}, _ref);

  var _useContext = React.useContext(CrudContext),
      getForm = _useContext.getForm,
      loading = _useContext.loading;

  var _useContext2 = React.useContext(WorkflowContext),
      getWorkflow = _useContext2.getWorkflow;

  var form = React.useMemo(function () {
    return getForm(props.resource);
  }, [props.resource, getForm]);
  var workflow = React.useMemo(function () {
    return form !== null && form !== void 0 && form.useWorkflow ? getWorkflow(props.resource) : null;
  }, [props.resource, getWorkflow, form]);
  var customComponents = useCustomComponents(props.resource);
  var save = useSaveMutation(_objectSpread2({}, props));

  if (loading) {
    return /*#__PURE__*/React__default["default"].createElement(reactAdmin.Loading, null);
  }

  if (form === false || form === null) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement(Component, _extends({}, props, {
    save: save,
    toolbar: form !== null && form !== void 0 && form.useWorkflow ? /*#__PURE__*/React__default["default"].createElement(Toolbar, null) : undefined,
    initialValues: form === null || form === void 0 ? void 0 : form.initialValues,
    sanitizeEmptyValues: form === null || form === void 0 ? void 0 : form.sanitizeEmptyValues,
    warnWhenUnsavedChanges: form === null || form === void 0 ? void 0 : form.warnWhenUnsavedChanges,
    redirect: form === null || form === void 0 ? void 0 : form.redirect,
    component: form === null || form === void 0 ? void 0 : form.component,
    componentProps: form === null || form === void 0 ? void 0 : form.componentProps,
    components: {
      SimpleForm: reactAdmin.SimpleForm,
      TabbedForm: TabbedForm
    }
  }), form === null || form === void 0 ? void 0 : (_form$inputs = form.inputs) === null || _form$inputs === void 0 ? void 0 : _form$inputs.map(function (_ref2) {
    var source = _ref2.source,
        label = _ref2.label,
        component = _ref2.component,
        useWorkflow = _ref2.useWorkflow,
        _ref2$componentProps = _ref2.componentProps,
        fullWidth = _ref2$componentProps.fullWidth,
        restComponentProps = _objectWithoutProperties(_ref2$componentProps, _excluded$9);

    return form !== null && form !== void 0 && form.useWorkflow && workflow !== null && useWorkflow === true ? /*#__PURE__*/React__default["default"].createElement(Input, {
      key: source,
      source: source,
      fullWidth: true,
      component: /*#__PURE__*/React__default["default"].createElement(Component, {
        key: source,
        source: source,
        label: label,
        fullWidth: fullWidth,
        component: component,
        componentProps: _objectSpread2({
          fullWidth: fullWidth
        }, restComponentProps),
        components: _objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), customComponents)
      })
    }) : /*#__PURE__*/React__default["default"].createElement(Component, {
      key: source,
      source: source,
      label: label,
      fullWidth: fullWidth,
      component: component,
      componentProps: _objectSpread2({
        fullWidth: fullWidth
      }, restComponentProps),
      components: _objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), customComponents)
    });
  }));
};

var Create$1 = function Create(props) {
  return /*#__PURE__*/React__default["default"].createElement(Create$3, props, /*#__PURE__*/React__default["default"].createElement(Form, null));
};

var Create = function Create(props) {
  return /*#__PURE__*/React__default["default"].createElement(Create$2, props, /*#__PURE__*/React__default["default"].createElement(Form, null));
};

var useFiltersStyles = core.makeStyles(function (theme) {
  return _defineProperty({
    form: {
      flexWrap: "nowrap",
      "& .filter-field > div:last-child": {
        width: theme.spacing(1)
      }
    }
  }, theme.breakpoints.down("md"), {
    button: {
      display: "none"
    }
  });
}, {
  name: "RaFilters"
});

var _excluded$8 = ["children"];

var Filters = function Filters(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$8);

  var classes = useFiltersStyles();
  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.Filter, _extends({
    classes: classes
  }, props), React__default["default"].Children.map(children, function (child, i) {
    return /*#__PURE__*/React__default["default"].cloneElement(child ? child : /*#__PURE__*/React__default["default"].createElement(React.Fragment, null), {
      key: i,
      fullWidth: true
    });
  }));
};

var _excluded$7 = ["grid"],
    _excluded2$1 = ["className", "exporter", "filters"];

var ListActions = function ListActions(_ref) {
  var grid = _ref.grid,
      props = _objectWithoutProperties(_ref, _excluded$7);

  var className = props.className,
      exporter = props.exporter,
      filtersProp = props.filters,
      rest = _objectWithoutProperties(props, _excluded2$1);

  var _useListContext = raCore.useListContext(props),
      currentSort = _useListContext.currentSort,
      displayedFilters = _useListContext.displayedFilters,
      filterValues = _useListContext.filterValues,
      basePath = _useListContext.basePath,
      showFilter = _useListContext.showFilter,
      total = _useListContext.total;

  var resource = raCore.useResourceContext(rest);

  var _useResourceDefinitio = raCore.useResourceDefinition(rest),
      hasCreate = _useResourceDefinitio.hasCreate;

  var filters = React.useContext(reactAdmin.FilterContext) || filtersProp;
  return React.useMemo(function () {
    var _grid$exportTo;

    return /*#__PURE__*/React__namespace.createElement(reactAdmin.TopToolbar, _extends({
      className: className
    }, raCore.sanitizeListRestProps(rest)), filtersProp ? /*#__PURE__*/React.cloneElement(filtersProp, {
      resource: resource,
      showFilter: showFilter,
      displayedFilters: displayedFilters,
      filterValues: filterValues,
      context: "button"
    }) : filters && /*#__PURE__*/React__namespace.createElement(reactAdmin.FilterButton, null), hasCreate && /*#__PURE__*/React__namespace.createElement(reactAdmin.CreateButton, {
      basePath: basePath
    }), (grid === null || grid === void 0 ? void 0 : (_grid$exportTo = grid.exportTo) === null || _grid$exportTo === void 0 ? void 0 : _grid$exportTo.length) > 0 ? /*#__PURE__*/React__namespace.createElement(ExportToButton, {
      exportTo: grid === null || grid === void 0 ? void 0 : grid.exportTo,
      disabled: total === 0,
      resource: resource,
      sort: currentSort,
      filterValues: filterValues
    }) : exporter !== false && /*#__PURE__*/React__namespace.createElement(reactAdmin.ExportButton, {
      disabled: total === 0,
      resource: resource,
      sort: currentSort,
      filterValues: filterValues
    }));
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [resource, displayedFilters, filterValues, showFilter, filters, total, basePath, className, currentSort, exporter, hasCreate]);
};

ListActions.propTypes = {
  basePath: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  currentSort: PropTypes__default["default"].any,
  displayedFilters: PropTypes__default["default"].object,
  exporter: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].bool]),
  filters: PropTypes__default["default"].element,
  filterValues: PropTypes__default["default"].object,
  hasCreate: PropTypes__default["default"].bool,
  resource: PropTypes__default["default"].string,
  onUnselectItems: PropTypes__default["default"].func.isRequired,
  selectedIds: PropTypes__default["default"].arrayOf(PropTypes__default["default"].any),
  showFilter: PropTypes__default["default"].func,
  total: PropTypes__default["default"].number
};
ListActions.defaultProps = {
  selectedIds: [],
  onUnselectItems: function onUnselectItems() {
    return null;
  }
};

var exporter = function exporter(grid, data, translate) {
  var columns = ((grid === null || grid === void 0 ? void 0 : grid.columns) || []).filter(function (c) {
    return c.exportable === true;
  });
  var headers = columns.map(function (c) {
    return lodash.get(c, "label", c.source);
  });
  var csvData = data.map(function (record) {
    var row = {};
    columns.forEach(function (column) {
      var value = lodash.get(record, column.source);
      row[column.label] = value;
    });
    return row;
  });
  jsonExport__default["default"](csvData, {
    rowDelimiter: ";",
    headers: headers
  }, function (err, csv) {
    return reactAdmin.downloadCSV("\uFEFF" + csv, translate(grid === null || grid === void 0 ? void 0 : grid.title));
  });
};

var useListStyles = styles$1.makeStyles(function (theme) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, theme.breakpoints.up("lg"), {
    main: {
      "& table td, table th": {
        whiteSpace: "nowrap"
      }
    }
  }), _defineProperty(_ref, theme.breakpoints.down("md"), {//   main: {
    //     background: theme.palette.background.default,
    //     marginTop: theme.spacing(2),
    //     display: "block",
    //   },
    //   content: {
    //     boxShadow: "none",
    //   },
    //   root: {
    //     padding: theme.spacing(2),
    //   },
  }), _defineProperty(_ref, theme.breakpoints.down("sm"), {
    bulkActionsDisplayed: {
      "& .MuiToolbar-regular:first-child": {
        display: "flex",
        flexDirection: "column",
        flexBasis: "auto",
        height: "auto",
        "& .MuiToolbar-root": {
          background: "inherit",
          padding: 0,
          flexWrap: "wrap",
          justifyContent: "flex-start",
          paddingBottom: theme.spacing(1),
          width: "100%"
        },
        "& div:nth-child(1)": {
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1)
        }
      }
    }
  }), _defineProperty(_ref, "bulkActionsDisplayed", {
    "& .MuiToolbar-regular:first-child": {
      "& .MuiToolbar-root": {
        flexWrap: "wrap"
      }
    }
  }), _ref;
}, {
  name: "RaMobileList"
});

var _excluded$6 = ["source", "label", "component", "componentProps"];

var List = function List(props) {
  var _grid$filters, _grid$columns;

  var classes = useListStyles();
  var translate = reactAdmin.useTranslate();

  var _React$useContext = React__namespace.useContext(friendsofbabbaRa.CrudContext),
      getGrid = _React$useContext.getGrid,
      loading = _React$useContext.loading;

  var grid = getGrid(props.resource);
  var customComponents = useCustomComponents(props.resource);
  var isMobile = core.useMediaQuery(function (theme) {
    var _grid$mobileBreakpoin;

    return theme.breakpoints.down((_grid$mobileBreakpoin = grid === null || grid === void 0 ? void 0 : grid.mobileBreakpoint) !== null && _grid$mobileBreakpoin !== void 0 ? _grid$mobileBreakpoin : "sm");
  }) && grid.mobilePrimaryText != null;

  if (loading) {
    return /*#__PURE__*/React__namespace.createElement(reactAdmin.Loading, null);
  }

  if (grid === false || grid === null) {
    return null;
  }

  return /*#__PURE__*/React__namespace.createElement(reactAdmin.List, _extends({}, props, {
    classes: classes,
    title: grid.title,
    filter: grid.filter || {},
    actions: /*#__PURE__*/React__namespace.createElement(ListActions, {
      grid: grid
    }),
    pagination: grid === null || grid === void 0 ? void 0 : grid.pagination,
    exporter: function exporter$1(data) {
      return exporter(grid, data, translate);
    },
    filterDefaultValues: grid.filterDefaultValues || {},
    sort: grid === null || grid === void 0 ? void 0 : grid.sort,
    perPage: grid === null || grid === void 0 ? void 0 : grid.perPage,
    filters: grid !== null && grid !== void 0 && grid.filters ? /*#__PURE__*/React__namespace.createElement(Filters, null, grid === null || grid === void 0 ? void 0 : (_grid$filters = grid.filters) === null || _grid$filters === void 0 ? void 0 : _grid$filters.map(function (_ref) {
      var source = _ref.source;
          _ref.label;
          var component = _ref.component,
          componentProps = _ref.componentProps,
          props = _objectWithoutProperties(_ref, _excluded$6);

      return /*#__PURE__*/React__namespace.createElement(Component, _extends({}, props, {
        key: source,
        source: source,
        component: component,
        componentProps: componentProps,
        components: _objectSpread2(_objectSpread2({}, inputs), customComponents),
        alwaysOn: componentProps === null || componentProps === void 0 ? void 0 : componentProps.alwaysOn
      }));
    })) : null
  }), grid !== null && grid !== void 0 && grid.component && (grid === null || grid === void 0 ? void 0 : grid.component) !== "Datagrid" ? /*#__PURE__*/React__namespace.createElement(Component, {
    component: grid.component,
    componentProps: grid.componentProps,
    components: _objectSpread2({
      Datagrid: Datagrid,
      SimpleList: reactAdmin.SimpleList
    }, customComponents)
  }) : isMobile ? /*#__PURE__*/React__namespace.createElement(reactAdmin.SimpleList, {
    primaryText: function primaryText(record) {
      return grid !== null && grid !== void 0 && grid.mobilePrimaryComponent ? /*#__PURE__*/React__namespace.createElement(Component, _extends({}, grid.mobilePrimaryComponent, {
        record: record,
        source: grid === null || grid === void 0 ? void 0 : grid.mobilePrimaryText,
        components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), buttons), customComponents)
      })) : lodash.get(record, grid === null || grid === void 0 ? void 0 : grid.mobilePrimaryText);
    },
    secondaryText: function secondaryText(record) {
      return grid !== null && grid !== void 0 && grid.mobileSecondaryComponent ? /*#__PURE__*/React__namespace.createElement(Component, _extends({}, grid.mobileSecondaryComponent, {
        record: record,
        source: grid === null || grid === void 0 ? void 0 : grid.mobileSecondaryText,
        components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), buttons), customComponents)
      })) : lodash.get(record, grid === null || grid === void 0 ? void 0 : grid.mobileSecondaryText);
    },
    tertiaryText: function tertiaryText(record) {
      return grid !== null && grid !== void 0 && grid.mobileTertiaryComponent ? /*#__PURE__*/React__namespace.createElement(Component, _extends({}, grid.mobileTertiaryComponent, {
        record: record,
        source: grid === null || grid === void 0 ? void 0 : grid.mobileTertiaryText,
        components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), buttons), customComponents)
      })) : lodash.get(record, grid === null || grid === void 0 ? void 0 : grid.mobileTertiaryText);
    },
    linkType: grid === null || grid === void 0 ? void 0 : grid.mobileLinkType
  }) : /*#__PURE__*/React__namespace.createElement(Datagrid, null, grid === null || grid === void 0 ? void 0 : (_grid$columns = grid.columns) === null || _grid$columns === void 0 ? void 0 : _grid$columns.map(function (_ref2) {
    var source = _ref2.source,
        label = _ref2.label,
        sortable = _ref2.sortable,
        component = _ref2.component,
        sortBy = _ref2.sortBy,
        componentProps = _ref2.componentProps;
    return /*#__PURE__*/React__namespace.createElement(Component, _extends({
      key: source
    }, component.indexOf("Button") === -1 ? {
      source: source,
      label: label,
      sortable: sortable,
      sortBy: sortBy,
      addLabel: false
    } : {}, {
      component: component,
      componentProps: componentProps,
      components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), buttons), customComponents)
    }));
  })));
};

var createCrud = function createCrud(_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      _ref$list = _ref.list,
      list = _ref$list === void 0 ? List : _ref$list,
      _ref$create = _ref.create,
      create = _ref$create === void 0 ? Create$1 : _ref$create,
      _ref$edit = _ref.edit,
      edit = _ref$edit === void 0 ? Create : _ref$edit,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {
    group: "admin",
    roles: ["admin"]
  } : _ref$options,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components;
  return {
    icon: icon,
    options: _objectSpread2(_objectSpread2({}, options), {}, {
      components: components
    }),
    list: list,
    edit: edit,
    create: create
  };
};

var _excluded$5 = ["icon", "roles", "group", "options", "workflow", "components"];
var defaultIcon = TableChart__default["default"];
var defaultGroup = "dashboard";

var CrudResource = function CrudResource(_ref) {
  var icon = _ref.icon,
      roles = _ref.roles,
      group = _ref.group,
      options = _ref.options;
      _ref.workflow;
      var components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded$5);

  var additionalProps = React.useMemo(function () {
    return createCrud({
      icon: icon,
      options: _objectSpread2(_objectSpread2({}, options), {}, {
        roles: roles,
        group: group
      }),
      components: components
    });
  }, [icon, roles, group, options, components]);
  return [/*#__PURE__*/React__default["default"].createElement(reactAdmin.Resource, _extends({
    key: props.name
  }, props, additionalProps)), /*#__PURE__*/React__default["default"].createElement(reactAdmin.Resource, {
    intent: "registration",
    name: "workflow/transactions/".concat(props.name),
    key: "".concat(props.name, "-transactions")
  })];
};

CrudResource.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  roles: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
  group: PropTypes__default["default"].string.isRequired,
  icon: PropTypes__default["default"].elementType.isRequired,
  list: PropTypes__default["default"].elementType,
  edit: PropTypes__default["default"].elementType,
  create: PropTypes__default["default"].elementType,
  options: PropTypes__default["default"].object,
  components: PropTypes__default["default"].object
};
CrudResource.defaultProps = {
  icon: defaultIcon,
  group: defaultGroup,
  components: {},
  workflow: true
};

var LocalLoginForm = function LocalLoginForm(props) {
  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.LoginForm, props);
};

var useStyles$2 = styles$1.makeStyles(function (theme) {
  return {
    root: {
      margin: theme.spacing(1),
      textAlign: "center"
    }
  };
});
var setLoggedIn = function setLoggedIn(_ref) {
  var data = _ref.data;
  localStorage.setItem("token", data.token);
  localStorage.setItem("roles", JSON.stringify(data.roles));
  localStorage.setItem("username", data.username);
  localStorage.setItem("profile", JSON.stringify(data.profile));
};
var setSignResponse = function setSignResponse(r) {
  return localStorage.setItem("r", r);
};
var getSignResponse = function getSignResponse() {
  return localStorage.getItem("r");
};
var clearSignResponse = function clearSignResponse() {
  return localStorage.removeItem("r");
};

var doAuthentication = function doAuthentication(_ref2) {
  var authenticationUrl = _ref2.authenticationUrl,
      search = _ref2.search;
  return fetch("".concat(authenticationUrl).concat(search), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).catch(function (error) {
    return error;
  });
};

var SpidLoginForm = function SpidLoginForm(_ref3) {
  var apiUrl = _ref3.apiUrl,
      search = _ref3.location.search,
      loginUrl = _ref3.loginUrl,
      authenticationUrl = _ref3.authenticationUrl,
      redirectUrl = _ref3.redirectUrl,
      signup = _ref3.signup,
      action = _ref3.action;
  var notify = reactAdmin.useNotify();
  var classes = useStyles$2();
  var redirect = reactAdmin.useRedirect();
  var translate = reactAdmin.useTranslate();

  var _useMemo = React.useMemo(function () {
    return {
      login: loginUrl || "".concat(apiUrl, "/spid/auth?b=client"),
      authenticate: authenticationUrl || "".concat(apiUrl, "/spid/authenticate")
    };
  }, [apiUrl, loginUrl, authenticationUrl]),
      login = _useMemo.login,
      authenticate = _useMemo.authenticate;

  React.useEffect(function () {
    if (action !== "callback") {
      return;
    }

    var doAuth = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$doAuthenticati, success, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return doAuthentication({
                  authenticationUrl: authenticate,
                  search: search
                });

              case 2:
                _yield$doAuthenticati = _context.sent;
                success = _yield$doAuthenticati.success;
                data = _yield$doAuthenticati.data;

                if (!success) {
                  if (signup !== false) {
                    setSignResponse(search);
                    document.location = signup;
                  } else {
                    notify((data === null || data === void 0 ? void 0 : data.message) || "error.login.failed", "error");
                    document.location = "#/login";
                  }
                } else {
                  clearSignResponse();
                  setLoggedIn({
                    data: data
                  });
                  redirect(typeof redirectUrl === "function" ? redirectUrl(data) : redirectUrl);
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function doAuth() {
        return _ref4.apply(this, arguments);
      };
    }();

    doAuth();
  }, [action, redirectUrl, search, signup, authenticate, redirect, notify]);

  var stopPropagation = function stopPropagation(e) {
    return e.stopPropagation();
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.root
  }, action === "callback" ? /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, null) : /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: stopPropagation,
    component: "a",
    color: "primary",
    variant: "contained",
    href: login,
    fullWidth: true
  }, translate("ra.auth.login.spid")));
};

SpidLoginForm.propTypes = {
  apiUrl: PropTypes__default["default"].string,
  location: PropTypes__default["default"].object,
  loginUrl: PropTypes__default["default"].string,
  authenticationUrl: PropTypes__default["default"].string,
  redirectUrl: PropTypes__default["default"].string,
  signup: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].bool]),
  action: PropTypes__default["default"].string
};
SpidLoginForm.defaultProps = {
  signup: false,
  redirectUrl: "/"
};

var _excluded$4 = ["logo", "children"];
var useStyles$1 = styles$1.makeStyles(function (theme) {
  return {
    main: {
      overflow: "hidden",
      minHeight: "98vh",
      backgroundImage: "none",
      backgroundColor: theme.palette.background.default,
      "& [class*=MuiAvatar-root]": {
        display: "none",
        visibility: "hidden"
      }
    }
  };
});

var LoginPage = function LoginPage(_ref) {
  var logo = _ref.logo,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$4);

  var location = props.location;
  var search = location.search;
  var classes = useStyles$1();
  var theme = styles$1.useTheme();
  var action = React.useMemo(function () {
    if (search) {
      var params = new URLSearchParams(search);
      return params.get("action");
    }

    return null;
  }, [search]);
  return /*#__PURE__*/React__default["default"].createElement(core.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default["default"].createElement(reactAdmin.Login, {
    backgroundImage: "",
    classes: classes
  }, logo, React__default["default"].Children.map(children, function (child) {
    return /*#__PURE__*/React__default["default"].isValidElement(child) ? /*#__PURE__*/React__default["default"].cloneElement(child, _objectSpread2({
      action: action
    }, props)) : child;
  })));
};

LoginPage.propTypes = {
  action: PropTypes__default["default"].string,
  logo: PropTypes__default["default"].element
};

var _excluded$3 = ["staticContext", "children"];

var SignupPage = function SignupPage(_ref) {
  _ref.staticContext;
      var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$3);

  var theme = styles$1.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(core.ThemeProvider, {
    theme: theme
  }, React__default["default"].Children.map(children, function (child) {
    return /*#__PURE__*/React__default["default"].isValidElement(child) ? /*#__PURE__*/React__default["default"].cloneElement(child, _objectSpread2({}, props)) : child;
  }), /*#__PURE__*/React__default["default"].createElement(raUiMaterialui.Notification, null));
};

var _excluded$2 = ["children"];
var SignupStepperContext = /*#__PURE__*/React__default["default"].createContext({
  activeStep: 0,
  isLastStep: false
});
var SignupStepperProvider = function SignupStepperProvider(_ref) {
  var children = _ref.children;

  var _React$useState = React__default["default"].useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var _React$useState3 = React__default["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isLastStep = _React$useState4[0],
      setIsLastStep = _React$useState4[1];

  return /*#__PURE__*/React__default["default"].createElement(SignupStepperContext.Provider, {
    value: {
      activeStep: activeStep,
      isLastStep: isLastStep,
      setActiveStep: setActiveStep,
      setIsLastStep: setIsLastStep
    }
  }, children);
};

var SignupStepper = function SignupStepper(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded$2);

  var form = reactFinalForm.useForm();

  var _React$useContext = React__default["default"].useContext(SignupStepperContext),
      activeStep = _React$useContext.activeStep,
      setActiveStep = _React$useContext.setActiveStep,
      setIsLastStep = _React$useContext.setIsLastStep;

  var handleNext = React.useCallback(function () {
    form.batch(function () {
      var formState = form.getState();
      var fields = Object.keys(formState.visited);
      fields.forEach(function (field) {
        return form.blur(field);
      });
      var stepErrors = fields.map(function (field) {
        return lodash.get(formState.errors, field, undefined);
      }).filter(function (fieldError) {
        return fieldError !== undefined;
      });

      if (stepErrors.length === 0) {
        setActiveStep(function (prevActiveStep) {
          return prevActiveStep + 1;
        });
        setIsLastStep(activeStep + 1 === children.length - 1);
      }
    });
  }, [form, activeStep, children.length, setActiveStep, setIsLastStep]);
  var handleBack = React.useCallback(function () {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
    setIsLastStep(false);
  }, [setActiveStep, setIsLastStep]);
  var translate = raCore.useTranslate();
  return /*#__PURE__*/React__default["default"].createElement(core.Stepper, {
    activeStep: activeStep,
    orientation: "vertical"
  }, React__default["default"].Children.map(children, function (field, index) {
    return /*#__PURE__*/React__default["default"].createElement(core.Step, {
      key: index
    }, /*#__PURE__*/React__default["default"].createElement(core.StepLabel, null, field.props.title || field.props.source), /*#__PURE__*/React__default["default"].createElement(core.StepContent, {
      TransitionProps: {
        unmountOnExit: true
      }
    }, /*#__PURE__*/React__default["default"].cloneElement(field, _objectSpread2({}, props)), activeStep > 0 && /*#__PURE__*/React__default["default"].createElement(core.Button, {
      disabled: activeStep === 0,
      onClick: handleBack
    }, "\u2190 ", translate("ra.action.back")), activeStep < children.length - 1 && /*#__PURE__*/React__default["default"].createElement(core.Button, {
      onClick: handleNext
    }, translate("ra.action.next"), " \u2192")));
  }));
};

var _excluded$1 = ["record", "initialValues"];

var SpidSignupAccountStep = function SpidSignupAccountStep(_ref) {
  _ref.record;
      var initialValues = _ref.initialValues,
      props = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(raUiMaterialui.TextInput, _extends({}, props, {
    source: "profile.name",
    validate: raCore.required(),
    fullWidth: true,
    maxLength: 50,
    disabled: lodash.get(initialValues, "profile.name") !== null
  })), /*#__PURE__*/React__default["default"].createElement(raUiMaterialui.TextInput, _extends({}, props, {
    source: "profile.surname",
    validate: raCore.required(),
    fullWidth: true,
    maxLength: 50,
    disabled: lodash.get(initialValues, "profile.surname") !== null
  })), /*#__PURE__*/React__default["default"].createElement(raUiMaterialui.TextInput, _extends({}, props, {
    source: "profile.fiscal_code",
    validate: raCore.required(),
    fullWidth: true,
    maxLength: 16,
    disabled: true
  })), /*#__PURE__*/React__default["default"].createElement(raUiMaterialui.TextInput, _extends({}, props, {
    source: "email",
    maxLength: 255,
    validate: [raCore.required(), raCore.email()],
    fullWidth: true
  })), /*#__PURE__*/React__default["default"].createElement(DebouncedTextInput, _extends({}, props, {
    source: "profile.birth_place",
    validate: raCore.required(),
    fullWidth: true,
    maxLength: 50
  })), /*#__PURE__*/React__default["default"].createElement(raUiMaterialui.DateInput, _extends({}, props, {
    source: "profile.birth_date",
    validate: raCore.required(),
    disabled: true,
    fullWidth: true
  })), /*#__PURE__*/React__default["default"].createElement(raUiMaterialui.TextInput, _extends({}, props, {
    source: "profile.phone",
    maxLength: 30
  })));
};

var SpidSignupRolesStep = function SpidSignupRolesStep(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(ReferenceCheckboxGroupInput, _extends({}, props, {
    source: "roles",
    reference: "roles",
    optionText: "name",
    validate: raCore.required()
  })));
};

var _excluded = ["basePath"],
    _excluded2 = ["apiUrl", "loadUrl", "staticContext", "children", "logo", "title", "subTitle", "resource"];

var getProfile = function getProfile(_ref) {
  var loadUrl = _ref.loadUrl,
      search = _ref.search;
  return fetch("".concat(loadUrl).concat(search), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).catch(function (error) {
    return error;
  });
};

var useStyles = styles$1.makeStyles(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.background.default,
      height: "98vh"
    }
  };
});

var SignupToolbar = function SignupToolbar(_ref2) {
  _ref2.basePath;
      var props = _objectWithoutProperties(_ref2, _excluded);

  var _useContext = React.useContext(SignupStepperContext),
      isLastStep = _useContext.isLastStep;

  return /*#__PURE__*/React__default["default"].createElement(reactAdmin.Toolbar, props, /*#__PURE__*/React__default["default"].createElement(reactAdmin.SaveButton, {
    label: "ra.auth.signup",
    disabled: !isLastStep
  }));
};

var SpidSignupForm = function SpidSignupForm(_ref3) {
  var apiUrl = _ref3.apiUrl,
      loadUrl = _ref3.loadUrl;
      _ref3.staticContext;
      _ref3.children;
      var logo = _ref3.logo,
      title = _ref3.title,
      subTitle = _ref3.subTitle,
      resource = _ref3.resource,
      props = _objectWithoutProperties(_ref3, _excluded2);

  var classes = useStyles();

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      initialValues = _useState2[0],
      setInitialValues = _useState2[1];

  var redirect = reactAdmin.useRedirect();
  var search = getSignResponse();
  var save = useSaveMutation({
    resource: resource,
    onSuccess: function onSuccess() {
      setTimeout(function () {
        document.location.href = "#/login".concat(search);
        document.location.reload();
      }, 100);
    }
  });

  var _useMemo = React.useMemo(function () {
    return {
      load: loadUrl || "".concat(apiUrl, "/spid/load")
    };
  }, [apiUrl, loadUrl]),
      load = _useMemo.load;

  React.useEffect(function () {
    var doLoad = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$getProfile, success, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!search) {
                  redirect("/login");
                }

                _context.next = 3;
                return getProfile({
                  loadUrl: load,
                  search: search
                });

              case 3:
                _yield$getProfile = _context.sent;
                success = _yield$getProfile.success;
                data = _yield$getProfile.data;

                if (success) {
                  setInitialValues(data);
                } else {
                  redirect("/login");
                  clearSignResponse();
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function doLoad() {
        return _ref4.apply(this, arguments);
      };
    }();

    doLoad();
  }, [search, load, redirect]);
  return /*#__PURE__*/React__default["default"].createElement(SignupStepperProvider, null, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    justifyContent: "center",
    className: classes.root
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    lg: 5
  }, logo, /*#__PURE__*/React__default["default"].isValidElement(title) ? title : /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "h3",
    gutterBottom: true,
    display: "block",
    color: "textPrimary"
  }, title), subTitle, initialValues == null && /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, null), initialValues != null && /*#__PURE__*/React__default["default"].createElement(reactAdmin.Create, _extends({
    basePath: resource,
    resource: resource
  }, props), /*#__PURE__*/React__default["default"].createElement(reactAdmin.SimpleForm, {
    save: save,
    initialValues: initialValues,
    toolbar: /*#__PURE__*/React__default["default"].createElement(SignupToolbar, null)
  }, /*#__PURE__*/React__default["default"].createElement(SignupStepper, {
    fullWidth: true
  }, /*#__PURE__*/React__default["default"].createElement(SpidSignupAccountStep, {
    title: "General Infoes",
    fullWidth: true
  }), /*#__PURE__*/React__default["default"].createElement(SpidSignupRolesStep, {
    title: "Roles",
    fullWidth: true
  })))))));
};

SpidSignupForm.propTypes = {
  title: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]),
  subTitle: PropTypes__default["default"].element,
  logo: PropTypes__default["default"].element,
  apiUrl: PropTypes__default["default"].string,
  loadUrl: PropTypes__default["default"].string,
  staticContext: PropTypes__default["default"].object
};
SpidSignupForm.defaultProps = {
  resource: "spid"
};

var createI18nProvider = function createI18nProvider(_ref) {
  var _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? "en" : _ref$locale,
      languages = _ref.languages;
  return polyglotI18nProvider__default["default"](function () {
    if (process.env.NODE_ENV !== "production") {
      localStorage.setItem("locale", locale);
    }

    moment__default["default"].locale(locale);
    return lodash.get(languages, locale, {});
  }, reactAdmin.resolveBrowserLocale());
};

var queued = [];

var putMessage = function putMessage(apiUrl, locale, message) {
  return message.indexOf("[") === -1 && message.indexOf("]") === -1 && queued.indexOf("".concat(locale, "-").concat(message)) === -1 && queued.push("".concat(locale, "-").concat(message)) && fetch("".concat(apiUrl, "/languages/put-message"), {
    method: "PUT",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      code: locale,
      message: {
        code: message,
        text: message
      }
    })
  });
};

var useI18nCatcher = function useI18nCatcher(_ref) {
  var apiUrl = _ref.apiUrl,
      loading = _ref.loading;
  var locale = reactAdmin.useLocale();
  React__namespace.useMemo(function () {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    if (loading) {
      return;
    }

    var consoleError = console.error;

    console.error = function (message) {
      if (typeof message === "string" && message.indexOf("Missing translation for key: ") >= 0) {
        message = message.replace("Warning: Missing translation for key: ", "");
        message = message.split('"').join("").trim();

        if (message.indexOf(" ") !== -1) {
          return;
        }

        var lc = localStorage.getItem("locale") || locale;
        putMessage(apiUrl, lc, message);
        return;
      }

      consoleError.apply(console, arguments);
    };
  }, [apiUrl, locale, loading]);
  return true;
};

var useI18nLanguages = function useI18nLanguages(_ref) {
  var apiUrl = _ref.apiUrl;

  var _useState = React.useState({
    loading: true,
    languages: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  React.useEffect(function () {
    var headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    fetch("".concat(apiUrl, "/languages/load"), {
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (_ref2) {
      var data = _ref2.data;
      return setData({
        loading: false,
        data: data
      });
    });
  }, [apiUrl]);
  return data;
};

var useI18nProvider = function useI18nProvider(_ref) {
  var apiUrl = _ref.apiUrl,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? "en" : _ref$locale,
      _ref$languages = _ref.languages,
      languages = _ref$languages === void 0 ? {} : _ref$languages;
  var memoizedFn = React.useMemo(function () {
    return createI18nProvider({
      apiUrl: apiUrl,
      locale: locale,
      languages: languages
    });
  }, [apiUrl, locale, languages]);
  return memoizedFn;
};

var convertFileToBase64 = function convertFileToBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = reject;
  });
};

var convertFile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", file.rawFile ? convertFileToBase64(file).then(function (convertedFile) {
              return {
                data: convertedFile,
                name: file.rawFile.name,
                size: file.rawFile.size,
                type: file.rawFile.type
              };
            }) : Promise.resolve(file));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function convertFile(_x) {
    return _ref.apply(this, arguments);
  };
}();

var createAuthProvider = function createAuthProvider(_ref) {
  var apiUrl = _ref.apiUrl;
  return {
    login: function login(params) {
      var username = params.username,
          password = params.password;
      var requestURL = "".concat(apiUrl, "/users/login");
      var request = new Request(requestURL, {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json"
        })
      });
      return fetch(request).then(function (response) {
        return response.json();
      }).then(function (_ref2) {
        var data = _ref2.data,
            success = _ref2.success;

        if (!success) {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("roles", JSON.stringify(data.roles));
        localStorage.setItem("profile", JSON.stringify(data.profile));
        var event = new Event("login");
        event.key = "token";
        event.value = data.token;
        document.dispatchEvent(event);
      });
    },
    logout: function logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("roles");
      localStorage.removeItem("profile");
      return Promise.resolve();
    },
    checkAuth: function checkAuth() {
      return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
    },
    checkError: function checkError(error) {
      if (error.status === 401 || error.status === 500) {
        return Promise.reject();
      }

      return Promise.resolve();
    },
    getPermissions: function getPermissions() {
      var roles = JSON.parse(localStorage.getItem("roles"));
      return Promise.resolve(function (v) {
        return roles && roles.some(function (r) {
          return v.includes(r.code);
        });
      });
    },
    getIdentity: function getIdentity() {
      var profile = JSON.parse(localStorage.getItem("profile"));
      var roles = JSON.parse(localStorage.getItem("roles"));
      return Promise.resolve(_objectSpread2(_objectSpread2({}, profile), {}, {
        roles: roles
      }));
    },
    impersonate: function impersonate(id) {
      var requestURL = "".concat(apiUrl, "/users/impersonate/?id=").concat(id);
      var request = new Request(requestURL, {
        method: "POST",
        headers: getHeaders()
      });
      return fetch(request).then(function (response) {
        return response.json();
      }).then(function (_ref3) {
        var success = _ref3.success,
            data = _ref3.data;

        if (!success) {
          throw new Error(data.message);
        }

        ["token", "roles", "username", "profile"].forEach(function (param) {
          var toSaveParam = "admin_".concat(param);
          localStorage.setItem(toSaveParam, localStorage.getItem(param));
          localStorage.setItem(param, ["profile", "roles"].indexOf(param) !== -1 ? JSON.stringify(data[param]) : data[param]);
        });
        localStorage.setItem("impersonate", true);
      });
    },
    stopImpersonate: function stopImpersonate() {
      ["token", "roles", "username", "profile"].forEach(function (param) {
        var savedParam = "admin_".concat(param);
        localStorage.setItem(param, localStorage.getItem(savedParam));
        localStorage.removeItem(savedParam);
      });
      localStorage.setItem("impersonate", false);
      return Promise.resolve();
    }
  };
};

var fetchJson = function fetchJson(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(url, _objectSpread2({}, options)).then(function (response) {
    return response.text().then(function (text) {
      return {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        body: text
      };
    });
  }).then(function (_ref) {
    var status = _ref.status,
        statusText = _ref.statusText,
        headers = _ref.headers,
        body = _ref.body;
    var json;

    try {
      json = JSON.parse(body);
    } catch (e) {// not json, no big deal
    }

    if (status < 200 || status >= 300) {
      return Promise.reject(new reactAdmin.HttpError((json && json.data && json.data.message ? json.data.message : json.message) || statusText, status, json));
    }

    return Promise.resolve({
      status: status,
      headers: headers,
      body: body,
      json: json
    });
  });
};

// Remove unwanted _joinData props from JSON object before submission to the rest service.
var createDataFormatter = function createDataFormatter(data) {
  return Object.keys(data).reduce(function (r, key) {
    return _objectSpread2(_objectSpread2({}, r), {}, _defineProperty({}, key, Array.isArray(data[key]) ? data[key].map(function (item) {
      if (item._joinData === null) {
        return {
          id: item.id
        };
      }

      return item;
    }) : data[key]));
  }, {});
};

var createFilesParser = function createFilesParser() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data, fileFields) {
      var i, field, value, files, file;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < fileFields.length)) {
                _context.next = 19;
                break;
              }

              field = fileFields[i];
              value = lodash.get(data, field);

              if (!(value && Array.isArray(value))) {
                _context.next = 11;
                break;
              }

              _context.next = 7;
              return Promise.all(value.map(function (file) {
                return convertFile(file);
              }));

            case 7:
              files = _context.sent;
              data = lodash.set(data, field, files);
              _context.next = 16;
              break;

            case 11:
              if (!value) {
                _context.next = 16;
                break;
              }

              _context.next = 14;
              return convertFile(value);

            case 14:
              file = _context.sent;
              data = lodash.set(data, field, file);

            case 16:
              i++;
              _context.next = 1;
              break;

            case 19:
              return _context.abrupt("return", Promise.resolve(data));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var createDataProvider = function createDataProvider(_ref) {
  var apiUrl = _ref.apiUrl,
      _ref$fileFields = _ref.fileFields,
      fileFields = _ref$fileFields === void 0 ? [] : _ref$fileFields,
      _ref$filesParser = _ref.filesParser,
      filesParser = _ref$filesParser === void 0 ? createFilesParser() : _ref$filesParser,
      _ref$prepareData = _ref.prepareData,
      prepareData = _ref$prepareData === void 0 ? function (data) {
    return createDataFormatter(data);
  } : _ref$prepareData;
  return {
    getInfo: function getInfo(resource, params) {
      var url = "".concat(apiUrl, "/").concat(resource, "/info?").concat(queryString.stringify(params));
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref2) {
        var json = _ref2.json;
        return {
          data: json.data
        };
      });
    },
    getBadges: function getBadges() {
      var url = "".concat(apiUrl, "/stats/badges");
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref3) {
        var json = _ref3.json;
        return {
          data: json
        };
      });
    },
    getList: function getList(resource, params) {
      var _params$pagination = params.pagination,
          page = _params$pagination.page,
          perPage = _params$pagination.perPage;
      var _params$sort = params.sort,
          field = _params$sort.field,
          order = _params$sort.order;
      var filter = Object.keys(params.filter || {}).reduce(function (f, filterName) {
        return _objectSpread2(_objectSpread2({}, f), {}, _defineProperty({}, filterName, params.filter[filterName] instanceof Array ? params.filter[filterName].join(",") : params.filter[filterName]));
      }, {});

      var query = _objectSpread2({
        sort: field,
        direction: order,
        page: page,
        limit: perPage
      }, filter);

      var url = "".concat(apiUrl, "/").concat(resource, "?").concat(queryString.stringify(query));
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref4) {
        var json = _ref4.json;
        return {
          data: json.data,
          total: parseInt(json.pagination.count, 10)
        };
      });
    },
    getOne: function getOne(resource, params) {
      var url = "".concat(apiUrl, "/").concat(resource) + (params.id ? "/".concat(params.id) : "");
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref5) {
        var json = _ref5.json;
        return {
          data: json.data
        };
      });
    },
    getMany: function getMany(resource, params) {
      var query = {
        ids: params.ids.map(function (id) {
          return id.id ? id.id : id;
        }).join(",")
      };
      var url = "".concat(apiUrl, "/").concat(resource, "?").concat(queryString.stringify(query));
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref6) {
        var json = _ref6.json;
        return {
          data: json.data,
          total: parseInt(json.pagination.count, 10)
        };
      });
    },
    getManyReference: function getManyReference(resource, params) {
      var _params$pagination2 = params.pagination,
          page = _params$pagination2.page,
          perPage = _params$pagination2.perPage;
      var _params$sort2 = params.sort,
          field = _params$sort2.field,
          order = _params$sort2.order;
      var filter = Object.keys(params.filter || {}).reduce(function (f, filterName) {
        return _objectSpread2(_objectSpread2({}, f), {}, _defineProperty({}, filterName, params.filter[filterName] instanceof Array ? params.filter[filterName].join(",") : params.filter[filterName]));
      }, {});

      var query = _objectSpread2(_defineProperty({
        sort: field,
        direction: order,
        page: page,
        limit: perPage
      }, params.target, params.id), filter);

      var url = "".concat(apiUrl, "/").concat(resource, "?").concat(queryString.stringify(query));
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref7) {
        var json = _ref7.json;
        return {
          data: json.data,
          total: parseInt(json.pagination.count, 10)
        };
      });
    },
    create: function create(resource, params) {
      return filesParser(params.data, fileFields).then(function (data) {
        var url = "".concat(apiUrl, "/").concat(resource);
        var options = {
          method: "POST",
          body: JSON.stringify(prepareData(data, resource, params)),
          headers: getHeaders()
        };
        return fetchJson(url, options).then(function (_ref8) {
          var json = _ref8.json;
          return {
            data: _objectSpread2(_objectSpread2({}, json.data || params.data), {}, {
              id: json.data.id
            })
          };
        });
      });
    },
    update: function update(resource, params) {
      return filesParser(params.data, fileFields).then(function (data) {
        var id = data && data.pk ? data.pk : params.id;
        var url = "".concat(apiUrl, "/").concat(resource) + (id ? "/".concat(id) : "");
        var options = {
          method: "PUT",
          body: JSON.stringify(prepareData(data)),
          headers: getHeaders()
        };
        return fetchJson(url, options).then(function (_ref9) {
          var json = _ref9.json;
          return {
            data: _objectSpread2({
              id: data.pk
            }, json.data)
          };
        });
      });
    },
    updateMany: function updateMany(resource, params) {
      return Promise.all(params.ids.map(function (id) {
        return fetchJson("".concat(apiUrl, "/").concat(resource, "/").concat(id), {
          method: "PUT",
          body: JSON.stringify(params.data),
          headers: getHeaders()
        });
      })).then(function (responses) {
        return {
          data: responses.map(function (response) {
            return response.json;
          })
        };
      });
    },
    delete: function _delete(resource, params) {
      var url = "".concat(apiUrl, "/").concat(resource, "/").concat(params.id);
      var options = {
        method: "DELETE",
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref10) {
        var json = _ref10.json;
        return {
          data: json
        };
      });
    },
    deleteMany: function deleteMany(resource, params) {
      return Promise.all(params.ids.map(function (id) {
        return fetch("".concat(apiUrl, "/").concat(resource, "/").concat(id), {
          method: "DELETE",
          headers: getHeaders()
        }).then(function (response) {
          return response.json();
        });
      })).then(function (responses) {
        var errors = responses.filter(function (r) {
          return r.data && r.data.code && (r.data.code === 409 || r.data.code === 403);
        });

        if (errors.length > 0) {
          return Promise.reject(errors.map(function (e) {
            return e.data.message;
          }).join("\n"));
        }

        return {
          data: responses.map(function (_ref11) {
            var json = _ref11.json;
            return {
              data: json
            };
          })
        };
      });
    },
    post: function post(resource, params) {
      var url = "".concat(apiUrl, "/").concat(resource);
      var body = params.body;
      var options = {
        body: JSON.stringify(body),
        method: "POST",
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref12) {
        var json = _ref12.json;
        return {
          data: json
        };
      });
    },
    get: function get(resource, params) {
      var query = params.query;
      var queryString$1 = queryString.stringify(query);
      var url = "".concat(apiUrl, "/").concat(resource, "?").concat(queryString$1);
      var options = {
        method: "GET",
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref13) {
        var json = _ref13.json;
        return {
          data: json
        };
      });
    },
    getTransactions: function getTransactions(resource, params) {
      var url = "".concat(apiUrl, "/workflow/transactions/").concat(resource, "/").concat(params.id);
      return fetchJson(url, {
        headers: getHeaders()
      }).then(function (_ref14) {
        var json = _ref14.json;
        return {
          data: json.data
        };
      });
    }
  };
};

var useAuthProvider = function useAuthProvider(_ref) {
  var apiUrl = _ref.apiUrl;
  var memoizedFn = React.useMemo(function () {
    return createAuthProvider({
      apiUrl: apiUrl
    });
  }, [apiUrl]);
  return memoizedFn;
};

var useDataProvider = function useDataProvider(_ref) {
  var apiUrl = _ref.apiUrl,
      fileFields = _ref.fileFields;
  var memoizedFn = React.useMemo(function () {
    return createDataProvider({
      apiUrl: apiUrl,
      fileFields: fileFields
    });
  }, [apiUrl, fileFields]);
  return memoizedFn;
};

var useDataFormatter = function useDataFormatter() {
  var memoizedFn = React.useMemo(function () {
    return createDataFormatter();
  }, []);
  return memoizedFn;
};

Object.defineProperty(exports, 'BooleanField', {
  enumerable: true,
  get: function () { return reactAdmin.BooleanField; }
});
Object.defineProperty(exports, 'BooleanInput', {
  enumerable: true,
  get: function () { return reactAdmin.BooleanInput; }
});
Object.defineProperty(exports, 'ChipField', {
  enumerable: true,
  get: function () { return reactAdmin.ChipField; }
});
Object.defineProperty(exports, 'DateField', {
  enumerable: true,
  get: function () { return reactAdmin.DateField; }
});
Object.defineProperty(exports, 'DateInput', {
  enumerable: true,
  get: function () { return reactAdmin.DateInput; }
});
Object.defineProperty(exports, 'DateTimeInput', {
  enumerable: true,
  get: function () { return reactAdmin.DateTimeInput; }
});
Object.defineProperty(exports, 'NumberInput', {
  enumerable: true,
  get: function () { return reactAdmin.NumberInput; }
});
Object.defineProperty(exports, 'RaDeleteButton', {
  enumerable: true,
  get: function () { return reactAdmin.DeleteButton; }
});
Object.defineProperty(exports, 'RaEditButton', {
  enumerable: true,
  get: function () { return reactAdmin.EditButton; }
});
Object.defineProperty(exports, 'SearchInput', {
  enumerable: true,
  get: function () { return reactAdmin.SearchInput; }
});
Object.defineProperty(exports, 'SelectInput', {
  enumerable: true,
  get: function () { return reactAdmin.SelectInput; }
});
Object.defineProperty(exports, 'TextField', {
  enumerable: true,
  get: function () { return reactAdmin.TextField; }
});
Object.defineProperty(exports, 'TextInput', {
  enumerable: true,
  get: function () { return reactAdmin.TextInput; }
});
exports.AppBar = AppBar;
exports.BackButton = BackButton;
exports.Badge = Badge;
exports.ChipArrayField = ChipArrayField;
exports.CrudContext = CrudContext;
exports.CrudProvider = CrudProvider;
exports.CrudResource = CrudResource;
exports.DebouncedDateInput = DebouncedDateInput;
exports.DebouncedNumberInput = DebouncedNumberInput;
exports.DebouncedTextInput = DebouncedTextInput;
exports.EditButton = EditButton;
exports.ExportToButton = ExportToButton;
exports.Layout = Layout;
exports.LocalLoginForm = LocalLoginForm;
exports.LoginPage = LoginPage;
exports.LongTextField = LongTextField;
exports.MediaField = MediaField;
exports.MediaInput = MediaInput;
exports.Menu = Menu$1;
exports.MenuGroup = MenuGroup;
exports.MenuItem = MenuItem;
exports.ReferenceAutocompleteInput = ReferenceAutocompleteInput$1;
exports.ReferenceCheckboxGroupInput = ReferenceCheckboxGroupInput;
exports.ReferenceSelectInput = ReferenceAutocompleteInput;
exports.Sidebar = Sidebar;
exports.SignupPage = SignupPage;
exports.SignupStepper = SignupStepper;
exports.SpidLoginForm = SpidLoginForm;
exports.SpidSignupForm = SpidSignupForm;
exports.StateButton = StateButton$1;
exports.StateButtonMenu = StateButtonMenu;
exports.StateCollectionInput = StateCollectionInput;
exports.StateField = StateField;
exports.StateInput = StateInput;
exports.TransactionLogsField = TransactionLogsField;
exports.TransactionNotesInput = TransactionNotesInput;
exports.TransactionNotesIsPrivateInput = TransactionNotesIsPrivateInput;
exports.UserMenu = UserMenu;
exports.UserMenuItem = UserMenuItem;
exports.WorkflowContext = WorkflowContext;
exports.WorkflowProvider = WorkflowProvider;
exports.convertFile = convertFile;
exports.createAuthProvider = createAuthProvider;
exports.createDataFormatter = createDataFormatter;
exports.createDataProvider = createDataProvider;
exports.createErrorMapper = createErrorMapper;
exports.createFilesParser = createFilesParser;
exports.createI18nProvider = createI18nProvider;
exports.createManyFormatter = createManyFormatter;
exports.createManyParser = createManyParser;
exports.getHeaders = getHeaders;
exports.getToken = getToken;
exports.useAuthProvider = useAuthProvider;
exports.useCrud = useCrud;
exports.useDataFormatter = useDataFormatter;
exports.useDataProvider = useDataProvider;
exports.useI18nCatcher = useI18nCatcher;
exports.useI18nLanguages = useI18nLanguages;
exports.useI18nProvider = useI18nProvider;
exports.useManyFormatter = useManyFormatter;
exports.useManyParser = useManyParser;
exports.useSaveMutation = useSaveMutation;
exports.useToken = useToken;
exports.useWorkflow = useWorkflow;
