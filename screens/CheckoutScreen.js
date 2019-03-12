import React, { Component } from 'react';
import { Image, StyleSheet} from 'react-native';
import { Container, Header, Content, Textarea, Item, Input, Label, Card, CardItem, Icon, Picker, Form, View, Text, H2, Button } from 'native-base';

import axios from 'axios';

export default class CheckoutScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        selected: undefined
        };
    }
    onValueChange(value: string) {
        this.setState({
        selected: value
        });
    }
  render() {
    return (
        <Container>
            <Content>
            <Card>
                <CardItem>
                    <Item floatingLabel>
                    <Label>Name</Label>
                        <Input />
                    </Item>
                </CardItem>
                <View style={styles.contentTextArea}>
                    <Label>Alamat Pengiriman</Label>
                    <Textarea rowSpan={5} bordered placeholder="Alamat Pengiriman" />
                </View>
                <CardItem>
                    <Item floatingLabel last>
                    <Label>Hanphone</Label>
                        <Input />
                    </Item>
                </CardItem>
            </Card>
            <Label style={styles.textKurir}>Pilih Kurir</Label>
            <Form>
                <Picker
                mode="dropdown"
                placeholder="Select One"
                placeholderStyle={{ color: "#2874F0" }}
                note={false}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
                >
                <Picker.Item label="JNE" value="key0" />
                <Picker.Item label="J&T" value="key1" />
                <Picker.Item label="TIKI" value="key2" />
                </Picker>
            </Form>
            <View style={styles.totalBelanja}>
                <H2>Ringkasan Belanja</H2>
                <Text>Ringkasan Belanja</Text>
                <Text>Iphone (1 Barang) <Text> Rp. 6000</Text></Text>
            </View>
            <Button>
                <Text>Bayar</Text>
            </Button>
            </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    textName: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    contentTextArea: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    totalBelanja: {
        flex: 1,
        margin: 10,
        padding: 5,
    },
    textKurir: {
        color: '#000',
        marginLeft: 10,
    }
})