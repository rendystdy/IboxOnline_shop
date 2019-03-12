import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Container, Header, Card, H3, CardItem, Thumbnail, Text, Button, Left, Body, Right, Toast, View } from 'native-base';
import { SearchBar } from 'react-native-elements';
import Slideshow from 'react-native-slideshow';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { getProducts } from '../src/publics/redux/actions/product';
import { createOrders } from '../src/publics/redux/actions/orders';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation'

class HomeScreen extends Component {

  getDataProducts = async () => {
    await this.props.dispatch(getProducts());
  }

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      position: 1,
      interval: null,
      showToast: true,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: require('../assets/slideShow-1.jpg'),
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: require('../assets/slideShow-2.jpg'),
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: require('../assets/slideShow-3.jpg'),
        }, {
          title: 'Title 4',
          caption: 'Caption 4',
          url: require('../assets/slideShow-4.jpg'),
        }, {
          title: 'Title 5',
          caption: 'Caption 5',
          url: require('../assets/slideShow-5.jpg'),
        },
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 3000)
    })
    updateSearch = search => {
      this.setState({ search });
    }
    this.getDataProducts();
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
    const { search } = this.state;

    return (
      <Container>
        <Header style={styles.headerHome}>
          <Left style={styles.sectionLogo}>
            <Image style={styles.logoApple} source={require('../assets/logo-ibox.png')} />
          </Left>
          <Body>
            <SearchBar
              placeholder="Search Product"
              onChangeText={this.updateSearch}
              value={search}
              containerStyle={{ marginLeft: 10, width: 170, height: 40, backgroundColor: '#000' }}
              inputContainerStyle={{ width: 150, height: 10 }}
              inputStyle={{ fontSize: 13 }}
            />
          </Body>
          <Right>
            <Button transparent style={styles.buttonCart} primary full onPress={() => this.props.navigation.navigate('Cart')}>
              <Text><Icon name="cart-plus" size={30} color="#fff" /></Text>
            </Button>
          </Right>
        </Header>
        <Slideshow
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
        />
        <View style={{ flex: 1, width: wp('100%') }}>
          <FlatList
            data={this.props.products.data}
            numColumns={3}
            refreshing={this.props.products.isLoading}
            onRefresh={this.getData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                <Card style={{ width: wp('33%') }}>
                  <CardItem>
                    <View>
                      <Thumbnail square large source={{ uri: item.image_url }} />
                      <H3 style={styles.itemName}>{item.name}</H3>
                      <Text note style={styles.price}>Rp. {item.price}</Text>
                      <Button transparent style={styles.addCart} onPress={() => this.handleAddCart(item.id)}>
                        <Text style={styles.textAddCart}>Add to cart</Text>
                      </Button>
                    </View>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            }
          />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product
  }
}

export default connect(mapStateToProps)(withNavigation(HomeScreen))

const styles = StyleSheet.create({
  headerHome: {
    backgroundColor: '#000',
  },
  logoApple: {
    width: 80,
  },
  sectionLogo: {
    flex: 1,
    flexDirection: 'row',
  },
  iconCart: {
    color: '#fff',
  },
  buttonCart: {
    backgroundColor: '#000'
  },
  addCart: {
    width: 90,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  textAddCart: {
    fontSize: 10,
    color: '#000',
    fontWeight: '300'
  },
  price: {
    marginBottom: 10,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#000'
  },
  itemName: {
    color: '#636363',
    marginTop: 5,
    fontWeight: 'bold'
  },
})