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
  entrar: {
    textAlign: "center",
    justifyContent: "center",
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
  text: {
    alignSelf: "flex-end",
  },
});
