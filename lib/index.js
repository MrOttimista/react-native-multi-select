"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MultiSelect;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MultiSelect(_ref) {
  var _ref$selectedItems = _ref.selectedItems,
      selectedItems = _ref$selectedItems === void 0 ? [] : _ref$selectedItems,
      setSelectedItems = _ref.setSelectedItems,
      text = _ref.text,
      data = _ref.data,
      componentStyle = _ref.componentStyle,
      buttonStyle = _ref.buttonStyle,
      containerItemsStyle = _ref.containerItemsStyle,
      itemStyle = _ref.itemStyle,
      _ref$tintColor = _ref.tintColor,
      tintColor = _ref$tintColor === void 0 ? "yellow" : _ref$tintColor,
      _ref$hasResetButton = _ref.hasResetButton,
      hasResetButton = _ref$hasResetButton === void 0 ? true : _ref$hasResetButton;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpened = _React$useState2[0],
      setIsOpened = _React$useState2[1];

  componentStyle;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: componentStyle
  }, /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
    style: buttonStyle,
    onPress: function onPress() {
      return setIsOpened(true);
    }
  }, /*#__PURE__*/React.createElement(_reactNative.Text, null, " ", text ? "".concat(text, " (").concat(selectedItems.length, ")") : "Select Item (".concat(selectedItems.length, ")"))), /*#__PURE__*/React.createElement(_reactNative.Modal, {
    animationType: "fade",
    transparent: true,
    visible: isOpened
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.centeredView
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: containerItemsStyle || styles.modalView
  }, /*#__PURE__*/React.createElement(_reactNative.FlatList, {
    data: data,
    renderItem: function renderItem(_ref2) {
      var item = _ref2.item;
      return /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
        style: [selectedItems.includes("".concat(item.id)) && {
          backgroundColor: tintColor
        }, styles.item],
        onPress: function onPress() {
          !selectedItems.includes("".concat(item.id)) ? setSelectedItems([].concat(_toConsumableArray(selectedItems), ["".concat(item.id)])) : setSelectedItems(selectedItems.filter(function (listItem) {
            return listItem !== "".concat(item.id);
          }));
        },
        ListEmptyComponent: /*#__PURE__*/React.createElement(_reactNative.Text, null, "No Item")
      }, /*#__PURE__*/React.createElement(_reactNative.Text, {
        style: itemStyle
      }, item.title));
    },
    keyExtractor: function keyExtractor(item) {
      return "".concat(item.id);
    }
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.bottomModal
  }, hasResetButton && /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
    onPress: function onPress() {
      setSelectedItems([]);
      setIsOpened(false);
    }
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: styles.resetText
  }, "Reset")), /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
    onPress: function onPress() {
      return setIsOpened(false);
    }
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: styles.doneText
  }, "Done")))))));
}

var styles = _reactNative.StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  bottomModal: {
    borderTopColor: "black",
    borderTopWidth: 1,
    marginTop: 10,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  item: {
    flexDirection: "row"
  },
  doneText: {
    color: "blue",
    fontSize: 18
  },
  resetText: {
    color: "red",
    fontSize: 18
  }
});