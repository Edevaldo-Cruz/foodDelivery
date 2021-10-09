import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: "15%",
    marginHorizontal: 30,
  },
  title: {
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    backgroundColor: "#CCC",
    borderRadius: 5,
  },
  rowText: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 2,
    alignItems: "center",
  },
  text1: {
    paddingLeft: 10,
  },

  text2: {
    paddingRight: 10,
  },
  btn: {
    alignItems: "center",
  },
});
