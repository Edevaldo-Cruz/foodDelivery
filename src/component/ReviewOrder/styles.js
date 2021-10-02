import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    marginTop: "6%",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    fontSize: 14,
    color: "#2ECC71",
    fontWeight: "500",
  },
  containerLike: {
    flexDirection: "row",
    marginRight: 30,
  },
  deslike: {
    marginRight: 10,
    backgroundColor: "#CCC",
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  like: {
    marginRight: 10,
    backgroundColor: "#CCC",
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
