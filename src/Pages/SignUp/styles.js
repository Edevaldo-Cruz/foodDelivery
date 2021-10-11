import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    alignSelf: "flex-start",
    paddingLeft: 30,
  },
  title: {
    fontFamily: "Bangers_400Regular",
    fontStyle: "italic",
    fontSize: 24,
    color: "#000",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#CCC",
    width: 354,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    marginBottom: 20,
    paddingLeft: 25,
  },
  disabled: {
    alignItems: "center",
    backgroundColor: "#CCC",
    width: 354,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    marginBottom: 20,
  },

  entrarbtn: {
    alignItems: "center",
    backgroundColor: "#D35400",
    width: 354,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    marginBottom: 20,
  },
  text: {
    alignSelf: "flex-end",
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  warningAlert: {
    paddingLeft: 10,
    color: "#FF6347",
    fontSize: 16,
  },
});
