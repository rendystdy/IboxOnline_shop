import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Text, Body, List, ListItem, Left, Thumbnail, Right, Form, Item, Label, Input, DatePicker, Picker, Icon, Button } from 'native-base';


class ProfilScreen extends Component {


    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
        this.state = {
            selected: "key1"
        };
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }
    render() {
        return (
            <Container style={styles.Container}>
                <Header style={{ backgroundColor: '#000' }} />
                <Content>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/05/avatar-profil-png-3.png' }} />
                            </Left>
                            <Body>
                                <Text>Rendy Setiadi</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <TouchableHighlight>
                                    <Text note>Edit Foto</Text>
                                </TouchableHighlight>
                            </Right>
                        </ListItem>
                    </List>
                    <Form>
                        <Item fixedLabel>
                            <Label>Username</Label>
                            <Input value="rendy_18" />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Name</Label>
                            <Input value="Rendy Setiadi" />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Tanggal Lahir</Label>
                            <DatePicker
                                defaultDate={new Date(2019, 2, 29)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                disabled={false}
                            />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Jenis Kelamin</Label>
                            <Picker
                                mode="dropdown"
                                iosHeader="Jenis Kelamin"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Laki-laki" value="key0" />
                                <Picker.Item label="Perempuan" value="key1" />
                            </Picker>
                        </Item>
                    </Form>
                    <Button full success style={{ marginTop: 10 }} onPress={() => { this.props.navigation.navigate('Home') }} >
                        <Text>Go Back</Text>
                    </Button>
                    <Button full primary style={{ marginTop: 20, borderRadius: 5 }} onPress={() => { this.props.navigation.navigate('Login') }}>
                        <Text style={{ color: '#000' }}>Login</Text>
                    </Button>
                </Content>
            </Container>
        );

    }
}

export default ProfilScreen


const styles = StyleSheet.create({
    Container: {
        // backgroundColor: '#494949'
    }
})