import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { BAKCEND_URL } from "../constants/BackendUrl";

import Colors from "../constants/Colors";
import VerficationStatus from "./UI/VerficationStatus";

const ItemCard = (props) => {
  const post = props.item;
  let status = null;
  if (post.vote == 10 && !post.isSolved) {
    status = (
      <VerficationStatus text="To be verified ..." color={Colors.accent400} />
    );
  } else if (post.vote == 10 && post.isSolved && !post.isVerified) {
    status = <VerficationStatus text="Rejected" color={Colors.accent800} />;
  } else if (post.vote == 10 && post.isSolved && post.isVerified) {
    status = <VerficationStatus text="Verified" color={Colors.primary800} />;
  }

  return (
    <Card style={styles.container}>
      <View style={styles.imageInnerContainer}>
        <Pressable
          onPress={
            props.onShowDetail && props.onShowDetail.bind(this, props.item.id)
          }
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        >
          <Image
            style={styles.image}
            source={{ uri: BAKCEND_URL + "/" + post.imageUrl }}
          />
        </Pressable>
      </View>
      <Card.Content>
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Paragraph style={styles.textColor}>{props.item.title}</Paragraph>
              <Text style={styles.textColor}>
                (Vote: {props.item.vote}/10){" "}
              </Text>
            </View>
            {status}
            {/* {!props.item.isVerified ? (
              <VerficationStatus
                text="To be verified ..."
                status={props.item.isVerified}
              />
            ) : (
              <VerficationStatus
                text="Verified"
                status={props.item.isVerified}
              />
            )} */}
          </View>
        </View>
        <Text style={styles.textColor}>{props.item.description}</Text>
      </Card.Content>
    </Card>
  );
};
export default ItemCard;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    marginTop: 15,
    marginHorizontal: 12,
    elevation: 4,
    borderRadius: 8,
    shadowColor: "gray",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: 1,
    backgroundColor: Colors.accent100,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
    paddingVertical: 10,
  },
  textColor: { color: Colors.primary900, marginRight: 10 },
  buttonPressed: {
    opacity: 0.5,
  },
  imageInnerContainer: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
