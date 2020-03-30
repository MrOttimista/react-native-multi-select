# Multi Select React Native
A customizable  react native component that lets you select multiple items.

<p align="center">
<img src="https://user-images.githubusercontent.com/40366999/77948831-48e0bb00-72c6-11ea-9d30-59a9420998ff.gif" width="390" height="825">
</p>


## Installation

Run `npm i multi-select-react-native` in your project directory.
## Usage

This snippet would produce the output shown in the above gif

```
import * as React from "react";
import { View, StyleSheet } from "react-native";
import MultiSelect from "multi-select-react-native";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: 1,
    title: "Second Item"
  },
  {
    id: "1a",
    title: "Third Item"
  }
];

export default function App() {
  const [selectedItems, setSelectedItems] = React.useState([]);

  return (
    <View style={styles.container}>
      <MultiSelect
        data={DATA}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        componentStyle={styles.centeredView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    fontSize: 20
  }
});


```

## Props

|        Props        |                                Explanation                                 | default value |
|:-------------------:|:--------------------------------------------------------------------------:|:-------------:|
|         data        | the data is an array of objects of id and title ex. [{id:1,title:'first'}] |       []      |
|    selectedItems    |    The selected ids of items: must be a state to re-render every select    |       []      |
|   setSelectedItems  |                    function that set the selected items                    |               |
|      tintColor      |                       The color of the selected items                      |     yellow    |
|    componentStyle   |                      The style of the whole component                      |               |
|     buttonStyle     |                       The style of the select button                       |               |
| containerItemsStyle |             The style of the container of the item in the menu             |               |
|    hasResetButton   |                       If it has a reset button or not                      |      true     |

## Contributing
This component mean to be very customizable so feel free to add any issue