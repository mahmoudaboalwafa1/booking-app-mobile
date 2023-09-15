import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  mainHome: { flex: 1, alignItems: "center", justifyContent: "center" },
  formHome: {
    margin: 10,
    gap: 10,
    borderColor: "#ffc72c",
    borderRadius: 6,
  },
  inputDestination: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "#ffc72c",
    borderWidth: 3,
    padding: 10,
  },
});

export default HomeStyle;
