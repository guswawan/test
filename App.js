/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* STARTS Search and notif */}
          <View style={styles.conHeader}>
            <View style={styles.conSearch}>
              <TextInput
                style={styles.formSearch}
                placeholder="What do you want to find?"
              />
              <Image
                source={require('./src/assets/icons/search.png')}
                style={styles.iconSearch}
              />
            </View>
            <View style={styles.conNotification}>
              <Image
                source={require('./src/assets/icons/notification.png')}
                style={styles.iconNotification}
              />
            </View>
          </View>
          {/* END Search and notif, */}

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* START banner */}
            <View style={styles.conBanner}>
              <Image
                source={require('./src/assets/images/banner.png')}
                style={styles.imgBanner}
              />
              <Text style={styles.txtAllPromo}>Lihat Semua Promo</Text>
            </View>
            {/* END banner */}

            {/* START BOX */}
            <View style={styles.conBox}>
              <View style={styles.conWallet}>
                <Image
                  source={require('./src/assets/icons/wallet.png')}
                  style={styles.imgWallet}
                />
                <View>
                  <Text style={styles.txtNominal}>Rp 66.700</Text>
                  <Text style={styles.txtPoint}>Points 6.803</Text>
                </View>
              </View>
              <View style={styles.conVoucher}>
                <Image
                  source={require('./src/assets/icons/voucher.png')}
                  style={styles.imgVoucher}
                />
                <View>
                  <Text style={styles.conPromo}>Promo</Text>
                  <Text style={styles.txtPromo}>9 Kupon Baru!</Text>
                </View>
              </View>
            </View>
            {/* END BOX */}

            {/* START category-top*/}
            <ScrollView>
              <View style={styles.conCategory}>
                <View style={{flex: 1}}>
                  <View style={styles.menuCategory}>
                    <Image
                      source={require('./src/assets/icons/all-menu.png')}
                      style={styles.imgMenuCategory}
                    />
                  </View>
                  <Text style={styles.txtMenuCategory}>Semua Kategori</Text>
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.menuCategory}>
                    <Image
                      source={require('./src/assets/icons/mobile-payment.png')}
                      style={styles.imgMenuCategory}
                    />
                  </View>
                  <Text style={styles.txtMenuCategory}>Payment</Text>
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.menuCategory}>
                    <Image
                      source={require('./src/assets/icons/topup-payment.png')}
                      style={styles.imgMenuCategory}
                    />
                  </View>
                  <Text style={styles.txtMenuCategory}>Top-Up</Text>
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.menuCategory}>
                    <Image
                      source={require('./src/assets/icons/travel.png')}
                      style={styles.imgMenuCategory}
                    />
                  </View>
                  <Text style={styles.txtMenuCategory}>Travel</Text>
                </View>
              </View>
            </ScrollView>
            {/* END category-top */}

            {/* START category-bottom*/}
            <ScrollView>
              <View style={styles.conCategory}>
                <View style={{flex: 1}}>
                  <View style={styles.menuCategory}>
                    <Image
                      source={require('./src/assets/icons/cinema.png')}
                      style={styles.imgMenuCategory}
                    />
                  </View>
                  <Text style={styles.txtMenuCategory}>Entertainment</Text>
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.menuCategory}>
                    <Image
                      source={require('./src/assets/icons/mobile-pulse.png')}
                      style={styles.imgMenuCategory}
                    />
                  </View>
                  <Text style={styles.txtMenuCategory}>Pulsa</Text>
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.menuCategory}>
                    <Image
                      source={require('./src/assets/icons/internet.png')}
                      style={styles.imgMenuCategory}
                    />
                  </View>
                  <Text style={styles.txtMenuCategory}>Internet</Text>
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.menuCategory}>
                    <Image
                      source={require('./src/assets/icons/change.png')}
                      style={styles.imgMenuCategory}
                    />
                  </View>
                  <Text style={styles.txtMenuCategory}>Tukar Tambah</Text>
                </View>
              </View>
            </ScrollView>
            {/* END category-bottom */}
          </ScrollView>
        </View>

        {/* START bottom nav */}
        <View style={styles.conBottomNav}>
          <View style={styles.menuBottomNav}>
            <View style={styles.iconBottomNav}>
              <Image
                source={require('./src/assets/icons/home.png')}
                style={{width: 26, height: 26}}
              />
            </View>
            <Text style={styles.txtBottomNav}>Home</Text>
          </View>
          <View style={styles.menuBottomNav}>
            <View style={styles.iconBottomNav}>
              <Image
                source={require('./src/assets/icons/order.png')}
                style={{width: 26, height: 26}}
              />
            </View>
            <Text style={styles.txtBottomNav}>Order</Text>
          </View>
          <View style={styles.menuBottomNav}>
            <View style={styles.iconBottomNav}>
              <Image
                source={require('./src/assets/icons/help.png')}
                style={{width: 26, height: 26}}
              />
            </View>
            <Text style={styles.txtBottomNav}>Help</Text>
          </View>
          <View style={styles.menuBottomNav}>
            <View style={styles.iconBottomNav}>
              <Image
                source={require('./src/assets/icons/iaccount.png')}
                style={{width: 26, height: 26}}
              />
            </View>
            <Text style={styles.txtBottomNav}>Account</Text>
          </View>
        </View>
        {/* END bottom nav */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  conHeader: {
    // backgroundColor: '#66C14F',
    flexDirection: 'row',
    paddingTop: 15,
  },
  conSearch: {
    marginHorizontal: 11,
    width: '85%',
    position: 'relative',
  },
  formSearch: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 25,
    height: 48,
    fontSize: 14,
    paddingLeft: 48,
    paddingRight: 25,
  },
  iconSearch: {
    position: 'absolute',
    top: 11,
    left: 10,
    width: 25,
    height: 25,
  },
  conNotification: {
    justifyContent: 'center',
  },
  iconNotification: {
    width: 25,
    height: 25,
  },
  conBanner: {
    flex: 1,
    width: '100%',
    height: 320,
    top: 15,
    // backgroundColor: 'orange',
  },
  imgBanner: {
    width: '100%',
    height: '80%',
  },
  txtAllPromo: {
    fontWeight: 'bold',
    color: '#545454',
    alignSelf: 'flex-end',
    paddingEnd: 23,
    paddingTop: 12,
  },
  conBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 62,
    borderColor: '#545454',
    elevation: 4,
    borderRadius: 10,
    width: '90%',
    marginBottom: 20,
  },
  conWallet: {
    // backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imgWallet: {
    width: 26,
    height: 26,
    right: 8,
    alignSelf: 'center',
  },
  txtNominal: {
    fontWeight: 'bold',
  },
  txtPoint: {
    color: 'gray',
    fontSize: 12,
  },
  conVoucher: {
    // backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imgVoucher: {
    width: 26,
    height: 26,
    alignSelf: 'center',
    right: 8,
  },
  conPromo: {
    fontWeight: 'bold',
    paddingHorizontal: 7,
    paddingVertical: 1,
    backgroundColor: '#ff7675',
    color: '#fff',
    borderRadius: 5,
    fontSize: 10,
    alignSelf: 'flex-start',
  },
  txtPromo: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  conCategory: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    top: 10,
    height: 120,
    // backgroundColor: 'green',
  },
  menuCategory: {
    backgroundColor: '#f39c12',
    // width: '65%',
    height: 65,
    borderRadius: 20,
    elevation: 2,
    marginHorizontal: 10,
  },
  imgMenuCategory: {
    width: 45,
    height: 45,
    alignSelf: 'center',
    top: 10,
    elevation: 2,
  },
  txtMenuCategory: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  conBottomNav: {
    backgroundColor: 'white',
    height: 55,
    flexDirection: 'row',
    elevation: 5,
  },
  menuBottomNav: {
    // backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBottomNav: {
    width: 26,
    height: 26,
    backgroundColor: 'white',
  },
  txtBottomNav: {
    fontSize: 10,
    color: '#545454',
    marginTop: 4,
  },
});
