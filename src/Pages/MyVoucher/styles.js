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

  voucher: {
    backgroundColor: "#CCC",
    width: 80,
    height: 80,
    borderRadius: 20,
  },

  text: {
    fontWeight: "bold",
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  warning: {
    color: "red",
  },
  check: {
    backgroundColor: "#D35400",
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    backgroundColor: "#CCC",
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    alignItems: "center",
  },
});
