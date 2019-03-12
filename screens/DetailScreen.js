import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, ListItem, List, View } from 'native-base';
import { connect } from 'react-redux';
import { getProductDetail } from '../src/publics/redux/actions/product';
import { createOrders } from '../src/publics/redux/actions/orders';


class DetailScreen extends Component {

    getDataDetail = async (id) => {
        await this.props.dispatch(getProductDetail(id));
    }

    static navigationOptions = {
        title: 'Details',
    };

    async componentDidMount() {
        await this.fetchData()
        // alert(JSON.stringify(this.props.product.data))
    }

    async fetchData() {
        const { navigation } = this.props
        const id = await navigation.getParam('id', 'no-id')
        await this.getDataDetail(id)
    }

    handleAddCart = async (id) => {

        const order = {
          quantity: 1,
          id_product: id
        }
    
        await this.props.dispatch(createOrders(order));
    
        alert('Data Berhasil Ditambahkan')
      }

    render() {
        return (
            <Container>
                <Header style={styles.headerDetail}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Home')}><Icon name="arrow-round-back"></Icon></Button>
                    </Left>
                    <Body />
                    <Right />
                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            <Left />
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: this.props.product.data[0].image_url }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <List>
                            <ListItem noIndent>
                                <View>
                                    <Text style={styles.textName}>{this.props.product.data[0].name}</Text>
                                    <Text style={styles.textPrice}>Rp. {this.props.product.data[0].price}</Text>
                                    <Text style={styles.description}>INFORMASI BARANG :</Text>
                                    <Text style={styles.isiDescription}>{this.props.product.data[0].description}</Text>
                                </View>
                            </ListItem>
                        </List>
                    </Card>
                </Content>
                <Button transparent style={styles.buttonAddCart} onPress={() => this.handleAddCart(this.props.product.data[0].id)}>
                    <Text style={styles.textAddcart}>Add to cart</Text>
                </Button>
            </Container>
        );
    }

    static navigationOptions = {
        title: 'Details',
        tabBarVisible: false
    };
}

const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}

export default connect(mapStateToProps)(DetailScreen)

const styles = StyleSheet.create({
    headerDetail: {
        backgroundColor: '#000'
    },
    textName: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#636363'
    },
    textPrice: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        paddingTop: 5,
    },
    description: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#494949'
    },
    isiDescription: {
        paddingTop: 5,
        color: '#7a7979',
    },
    buttonAddCart: {
        width: 100,
        height: 30,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#000',
        marginLeft: 10,
        marginBottom: 10,
    },
    textAddcart: {
        fontSize: 12,
        color: '#fff'
    },
})