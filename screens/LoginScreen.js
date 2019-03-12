import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Text, Button } from 'native-base';
import { connect } from 'react-redux';
import { getOrders } from '../src/publics/redux/actions/orders';

class LoginScreen extends Component {


    render() {
        return (
            <Container style={styles.Container}>
                <View style={styles.sectionLogoIbox}>
                    <Image style={styles.imgLogo} source={require('../assets/logoIbox.jpg')}></Image>
                </View>
                <View style={styles.sectionForm}>
                    <Form>
                        <Item floatingLabel>
                            <Label style={{ color: '#fff' }}>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label style={{ color: '#fff' }}>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button style={styles.buttonSignIn} transparent full primary onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{ color: '#fff' }}>Sign in</Text>
                    </Button>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableHighlight onPress={() => { this.props.navigation.navigate('Register') }}><Text style={{ color: '#9b9b9b' }}>Create Account</Text></TouchableHighlight>
                        <TouchableHighlight><Text style={{ color: '#9b9b9b' }}>Forgot Password?</Text></TouchableHighlight>
                    </View>
                </View>
            </Container>
        );

    }
}

export default LoginScreen


const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#000'
    },
    sectionLogoIbox: {
        width: null,
        height: 200,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgLogo: {
        // marginTop: 50,
        // width: null,
        // height: 100,
    },
    sectionForm: {
        // backgroundColor: '#595959',
        width: 300,
        alignSelf: 'center',
    },
    buttonSignIn: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5
    }
})