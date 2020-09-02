import colors from "../config/colors";

import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const SCREEN_WIDTH = Dimensions.get("window").width;
import { withNavigation } from 'react-navigation';
import * as RootNavigation from '../navigation/NavigationService';
import  data from '../mock/tasks';
 class TaskScreen extends React.Component {
  static navigationOptions = {
    title: 'Task',
  };
  
  constructor(props) {
    super(props);
    this.state = {
      
      activeIndex: 0,
     carouselItems:data
    };
  }

  _renderItem({ item }) {
    return (
      <TouchableWithoutFeedback style={styles.container}
      onPress={() => RootNavigation.navigate('Content', { items: item })}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.heading}>{item.taskName}</Text>
        </View>
        <Image
          source={{
            uri:item.taskUrl
          }}
          style={styles.logo}
        />
      </TouchableWithoutFeedback>
    );
  }

  render() {

    return (
      <SafeAreaView style={styles.bg}>
        {/* <View style={{ flexDirection: "row" , justifyContent:"center"}}>
          <AntDesign name="dingding" size={34} color="#6951ae" />
          <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>BoreButton</Text>

        </View> */}
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={SCREEN_WIDTH}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
        <View style={styles.tabBar}>
          <Pagination
            containerStyle={{ backgroundColor: colors.primary }}
            dotStyle={styles.ww}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            dotsLength={5}
            activeDotIndex={this.state.activeIndex}
          />
        </View>
        <TouchableWithoutFeedback></TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    bottom: 10,
    right: 58,
  },

  bg: {
    backgroundColor: colors.primary,
    paddingTop: 75,
    flex: 1,
  },

  container: {
    margin: 40,
    marginBottom: 30,
    backgroundColor: colors.white,
    height: 500,
    borderRadius: 30,
    elevation: 8,
    alignItems: "center",
    padding: 15,
    overflow:"hidden"
  },
  heading: {
    fontSize: 18,
    padding: 5,
    color: colors.secondary,
    fontWeight: "bold",
  },

  next: {
    position: "absolute",
    bottom: 5,
    right: 8,
  },
  tabBar: {
    position: "absolute",
    right: 0,
    bottom: 70,
    left: 0,
    backgroundColor: colors.primary,
  },
  ww: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: colors.white,
  },
  logo: {
    width: "100%",
    height:"80%",
    margin:30,
  },
});

export default withNavigation(TaskScreen);
