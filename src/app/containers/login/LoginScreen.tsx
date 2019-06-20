import styles from "./styles";
import React, { Component } from "react";
import { Text, View, TextInput, Platform, Dimensions, StatusBar,TouchableOpacity,Image,Alert,AsyncStorage } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Container, Content } from "native-base"
import { Button } from 'react-native-elements';

// import Auth from '@aws-amplify/auth';
import amplify,{Auth} from 'aws-amplify';

import awsconfig from '../../../aws-exports';
Auth.configure(awsconfig);

const { width, height } = Dimensions.get('window');
class LoginScreen extends Component<NavigationScreenProps> {


    constructor(props: any) {
        super(props);
        this.retrieveData();
    }

    state = {
        progress: 30,
        progressWithOnComplete: 0,
        progressCustomized: 0,
        facebookAccesstoken: undefined,
        facebookapplicationID: undefined,
        facebookuserID: undefined,
        facebookLogin: false,
        error: null,
        username: '',
        password: '',
        loading:false,
        user: null,
        login:null
    };


      

    retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('IsLogin');
          if (value !== null) {
            this.props.navigation.navigate('Home');
          }
        } catch (error) {
          // Error retrieving data
        }
      };



    async signin() {
        const { username, password } = this.state
        console.log("username", username, " ", password);

        this.setState({loading : true});

        await Auth.signIn({ "username": username, "password": password })
            .then(user => {
                console.log('Signin in: ', user  );
                this.setState({loading : false});

                this.setState({ user })
                AsyncStorage.setItem('IsLogin','1');
                this.props.navigation.navigate('OBTabScreen')

            })
            .catch(err => {
                this.setState({loading : false});

                console.log("err", err);
                if (!err.message) {
                    Alert.alert('Error when signing in: ', err);
                } else {
                    Alert.alert('Error when signing in: ', err.message);
                }
            })
    }

    render() {

        return (
            <Container style={{ width: width, height: height }}>
                <View style={{
                    width: width,
                    ...Platform.select({
                        ios: {
                            height: 20,
                        },
                        android: {
                            height: 0,
                        },
                    }),
                }}>
                    <StatusBar />
                </View>
                <Content>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            style={{ width: 35 }}
                            onPress={() => {
                                this.props.navigation.navigate("Landing")
                                // Landing Register
                            }}>
                            <Image source={require('../../../assets/arrow_back.png')} style={styles.backButton} />
                        </TouchableOpacity>
                        <Text style={styles.headerTitile}>{'LOGIN WITH PHONE'}</Text>

                    </View>
                    <View style={styles.items}>

                      
                        <Text style={styles.label}>{'Mobile Number'}</Text>
                        <TextInput style={styles.text}
                            placeholder={'Add Mobile Number'}
                            keyboardType={'phone-pad'}
                            placeholderTextColor={'#000'}
                            onChangeText={(text) => { this.state.username = text }}

                        >{}</TextInput>

                        <Text style={styles.label}>{'Password'}</Text>
                        <TextInput
                            style={styles.text}
                            placeholder={'Enter Password'}
                            secureTextEntry={true}
                            placeholderTextColor={'#000'}
                            onChangeText={(text) => { this.state.password = text }}

                        ></TextInput>

                        <View style={{ flex: 1, alignSelf: "center", marginTop: '7%' }}>
                            <Button
                                title="Login"
                                 disabled={this.state.loading}
                                onPress={() => { this.signin() }}
                                loading={this.state.loading}
                                type="outline"
                                // containerStyle={{ marginTop: 30, padding: '5%' }}
                                buttonStyle={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, width: 200 }}
                            />
                        </View>
                    </View>
                </Content>
                <Image source={require('../../../assets/bottom_image.png')}
                    style={styles.bottmimage} />


            </Container >

        );
    }
}

export default LoginScreen;
