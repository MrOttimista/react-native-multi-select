import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function MultiSelect({
  selectedItems = [], // must be an empty array
  setSelectedItems,
  text,
  data,
  componentStyle,
  buttonStyle,
  containerItemsStyle,
  itemStyle,
  tintColor = "yellow",
  hasResetButton = true,
  highlight = false,
}) {
  const [isOpened, setIsOpened] = React.useState(false);
  componentStyle;
  return (
    <View style={componentStyle}>
      <TouchableOpacity style={buttonStyle} onPress={() => setIsOpened(true)}>
        <Text>
          {" "}
          {text
            ? `${text} (${selectedItems.length})`
            : `Select Item (${selectedItems.length})`}
        </Text>

      </TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={isOpened}>
        <View style={styles.centeredView}>
          <View style={containerItemsStyle || styles.modalView}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    selectedItems.includes(`${item.id}`) &&
                      highlight && {
                        backgroundColor: tintColor,
                      },
                    styles.item,

                  ]}
                  onPress={() => {
                    !selectedItems.includes(`${item.id}`)
                      ? setSelectedItems([...selectedItems, `${item.id}`])
                      : setSelectedItems(
                          selectedItems.filter(
                            (listItem) => listItem !== `${item.id}`
                          )

                        );
                  }}
                  ListEmptyComponent={<Text>No Item</Text>}
                >
                  <Text
                    style={[
                      itemStyle,
                      selectedItems.includes(`${item.id}`) &&
                        !highlight && {
                          color: tintColor,
                        },
                    ]}
                  >
                    {item.title}
                  </Text>{" "}
                </TouchableOpacity>
              )}
              keyExtractor={(item) => `${item.id}`}

            />
            <View style={styles.bottomModal}>
              {hasResetButton && (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedItems([]);
                    setIsOpened(false);
                  }}
                >
                  <Text style={styles.resetText}>Reset</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity onPress={() => setIsOpened(false)}>
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomModal: {
    borderTopColor: "black",
    borderTopWidth: 1,
    marginTop: 10,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    flexDirection: "row",
  },
  doneText: {
    color: "blue",
    fontSize: 18,
  },
  resetText: {
    color: "red",
    fontSize: 18,
  },
});
