import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, H1, Form, Item, Input, Label, Button } from 'native-base';


class RegisterScreen extends Component {
    render() {
        return (
            <Container style={styles.Container}>
                <Header style={{ backgroundColor: '#000' }} />
                <Content>
                    <Card>
                        <CardItem header>
                            <H1 style={{ fontWeight: 'bold' }}>Register</H1>
                        </CardItem>
                        <View style={{ width: 300, alignSelf: 'center' }}>
                            <Form>
                                <Item floatingLabel>
                                    <Label>Name</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel last>
                                    <Label>Email</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel last>
                                    <Label>Handphone</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel last>
                                    <Label>Password</Label>
                                    <Input />
                                </Item>
                            </Form>
                        </View>
                        <Button full style={{marginTop: 20, backgroundColor: '#4284ff', borderRadius:5}} onPress={() => {this.props.navigation.navigate('Home')}}>
                            <Text style={{color: '#fff'}}>Sign Up</Text>
                        </Button>
                    </Card>
                </Content>
            </Container>
        );

    }
}

export default RegisterScreen


const styles = StyleSheet.create({
    Container: {
        // backgroundColor: '#494949'
    }
})