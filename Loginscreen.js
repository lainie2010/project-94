import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    KeyboardAvoidingView,
    TextInput
} from "react-native";

import firebase from "../config";

const bgImage = require('../assets/bgimage.jpg');

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				this.props.navigation.navigate('Home');
			})
			.catch((error) => {
				Alert.alert(error.message);
			});
	};

	render() {
		const { email, password } = this.state;
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<ImageBackground source={bgImage} style={styles.bgImage}>
					<View style={styles.upperContainer}>
					<View style={styles.titleBar}>
                        <Text style={styles.titleText}>Login</Text>
                    </View>
					</View>
					<View style={styles.lowerContainer}>
						<TextInput
							style={styles.textinput}
							onChangeText={(text) => this.setState({ email: text })}
							placeholder={'Enter Email'}
							placeholderTextColor={'#FFFFFF'}
							autoFocus
						/>
						<TextInput
							style={[styles.textinput, { marginTop: 20 }]}
							onChangeText={(text) => this.setState({ password: text })}
							placeholder={'Enter Password'}
							placeholderTextColor={'#FFFFFF'}
							secureTextEntry
						/>
						<TouchableOpacity
							style={[styles.button, { marginTop: 20 }]}
							onPress={() => this.handleLogin(email, password)}>
							<Text style={styles.buttonText}>Login</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
  titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
	bgImage: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	upperContainer: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	lowerContainer: {
		flex: 0.5,
		alignItems: 'center',
	},
	textinput: {
		width: '75%',
		height: 55,
		padding: 10,
		borderColor: '#FFFFFF',
		borderWidth: 4,
		borderRadius: 10,
		fontSize: 18,
		color: '#FFFFFF',
		fontFamily: 'Rajdhani_600SemiBold',
		backgroundColor: '#B1Bca0',
	},
	button: {
		width: '43%',
		height: 55,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#B6977D',
		borderRadius: 15,
	},
	buttonText: {
		fontSize: 24,
		color: '#FFFFFF',
		fontFamily: 'Rajdhani_600SemiBold',
	},
});
