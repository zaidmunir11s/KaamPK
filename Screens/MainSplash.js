import AnimatedSplash from "react-native-animated-splash-screen";
import React from 'react';
export default class MainSplash extends React.Component {
  render() {
    return (
      <AnimatedSplash
        translucent={true}
        isLoaded={true}
        logoImage={require("../Images/kaam1.png")}
        backgroundColor={"white"}
        logoHeight={800}
        logoWidth={400}
      >
      </AnimatedSplash>
    );
  }
}