import React from 'react';
import { View, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont()

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home ;D</Text>
            <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={this.loginWithFacebook}
            >
                Login with Facebook
            </Icon.Button>
            <Button 
            title="Ir para About"
            onPress={() => navigation.navigate('About') }
            />
        </View>
        );

  }
  
}

Home.navigationOptions = {
  title: 'Home',
}

export default Home;