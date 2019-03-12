import React, { Component } from 'react';
import { Image, StyleSheet, FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Item, Input, View, H1, H2, Footer, FooterTab } from 'native-base';
import { connect } from 'react-redux';
import { getOrders, incrementQtyOrder, deleteOrder} from '../src/publics/redux/actions/orders';

class CartScreen extends Component {

    componentDidMount() {
        this.getDataOrders();

    }

    getDataOrders = async () => {
        await this.props.dispatch(getOrders());
    }

    // total_price() {
    //     var sum = 0;
    //     for (var i = 0; i < this.props.orders.length; i++) {
    //         const total = this.props.orders[i].price * this.props.orderss[i].quantity
    //         sum += total
    //     }
    //     return parseFloat(sum).toFixed(2);
    // }

    handleDelete = async (id) => {
        await this.props.dispatch(deleteOrder(id));
        alert('Data Berhasil Dihapus')
    }

    render() {
        return (
            <Container>
                <Header style={styles.headerCart}>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.navigate('Home') }}>
                            <Icon name="arrow-back" style={styles.arrowBack}></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.textCart}>Cart</Text>
                    </Body>
                    <Right />
                </Header>
                <FlatList
                    data={this.props.orders.data}
                    refreshing={this.props.orders.isLoading}
                    onRefresh={this.getDataOrders}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <Card>
                            <CardItem>
                                <View style={styles.sectionContent}>
                                    <View style={styles.contentOne}>
                                        <Thumbnail square large source={{ uri: item.image_url }} style={styles.contentOneImg}></Thumbnail>
                                    </View>
                                    <View style={styles.contentTwo}>
                                        <H1 style={styles.h1ContenTwo}>{item.name}</H1>
                                        <Button transparent style={styles.buttonIconTrash} onPress={() => this.handleDelete(item.id)}>
                                            <Icon name="trash" style={styles.iconTrash} />
                                        </Button>
                                        <Text style={styles.priceContentTwo}>Rp. {item.price}</Text>
                                        <View style={styles.sectionQuantity}>
                                            <Button transparent onPress={() => {
                                                const orders = {
                                                    quantity: item.quantity - 1,
                                                    price_order: (item.quantity - 1) * item.price
                                                }

                                                this.props.dispatch(incrementQtyOrder(orders, item.id));
                                            }}>
                                                <Icon name="ios-remove-circle-outline" style={styles.removeCircle}></Icon>
                                            </Button>
                                            <Item regular style={styles.inputQuantity}>
                                                <Text style={{ textAlign: 'center' }}>{item.quantity}</Text>
                                            </Item>
                                            <Button transparent onPress={() => {
                                                // alert(item.id)

                                                const orders = {
                                                    quantity: item.quantity + 1,
                                                    price_order: (item.quantity + 1) * item.price
                                                }

                                                this.props.dispatch(incrementQtyOrder(orders, item.id));
                                            }}>
                                                <Icon name="ios-add-circle-outline" style={styles.addCircle}></Icon>
                                            </Button>
                                        </View>
                                        <Text>Total {item.quantity * item.price}</Text>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>
                    }
                />
                <Footer transparent>
                    <FooterTab transparent style={styles.footerTab}>
                        <View style={styles.contentFooterOne}>
                            <Text style={styles.textFooter}>Total Harga</Text>
                            <Text style={styles.textPriceFooter}>Rp. {this.total_price} </Text>
                        </View>
                        <View style={styles.contentFooterTwo}>
                            <Button success style={styles.buttonCheckout} onPress={() => this.props.navigation.navigate('Checkout')}>
                                <Text>Checkout</Text>
                            </Button>
                        </View>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }

    static navigationOptions = {
        title: 'Cart',
        tabBarVisible: false
    };
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(CartScreen)

const styles = StyleSheet.create({
    headerCart: {
        backgroundColor: '#000',
    },
    arrowBack: {
        color: '#fff',
    },
    textCart: {
        color: '#fff',
        fontSize: 24,
    },
    sectionContent: {
        flex: 1,
        flexDirection: 'row',
    },
    contentOne: {
        width: 150,
        height: 150,
        marginRight: 10,
        padding: 20,
    },
    contentOneImg: {
        width: 100,
        height: 100,
    },
    contentTwo: {
        padding: 10,
    },
    h1ContenTwo: {
        fontWeight: 'bold',
        fontSize: 34,
        color: '#424242'
    },
    buttonIconTrash: {
        position: 'absolute',
        top: 0,
        right: -10,
    },
    iconTrash: {
        color: '#ff2828',
    },
    priceContentTwo: {
        fontSize: 24,
        color: '#ff581c',
        fontWeight: 'bold',
    },
    sectionQuantity: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
    },
    inputQuantity: {
        width: 50,
        height: 20,
        borderRadius: 4,
        borderWidth: 10,
        borderColor: '#000',
        textAlign: 'center',
        marginTop: 13,
    },
    input: {
        textAlign: 'center',
    },
    footerTab: {
        paddingTop: 3,
        paddingBottom: 5,
        paddingLeft: 10,
        backgroundColor: '#000'
    },
    textFooter: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#fff',
    },
    textPriceFooter: {
        color: '#ffbf49',
        fontWeight: 'bold',
        fontSize: 24,
    },
    buttonCheckout: {
        width: 100,
        height: 40,
        borderRadius: 10,
        marginTop: 5,
        marginRight: 10,
    },
    addCircle: {
        color: '#000',
        textAlign: 'center'
    },
    removeCircle: {
        color: '#000'
    }
})