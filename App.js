
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Header from './src/components/header';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      sonuc: ''
    }

    this.topla = this.topla.bind(this);
    this.cikar = this.cikar.bind(this);
    this.carp = this.carp.bind(this);
    this.bolme = this.bolme.bind(this);
  }

  topla() {
    const sayi1 = parseFloat(this.state.input1);
    const sayi2 = parseFloat(this.state.input2);

    const sonuc = sayi1 + sayi2;

    this.setState({
      sonuc: sonuc
    })
  }

  cikar() {
    const sayi1 = parseFloat(this.state.input1);
    const sayi2 = parseFloat(this.state.input2);

    const sonuc = sayi1 - sayi2;

    this.setState({
      sonuc: sonuc
    })
  }

  carp() {
    const sayi1 = parseFloat(this.state.input1);
    const sayi2 = parseFloat(this.state.input2);

    const sonuc = sayi1 * sayi2;

    this.setState({
      sonuc: sonuc
    })
  }

  bolme() {
    const sayi1 = parseFloat(this.state.input1);
    const sayi2 = parseFloat(this.state.input2);

    const sonuc = sayi1 / sayi2;

    this.setState({
      sonuc: sonuc
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText='Basit Hesap Makinesi'/>

        <View style={styles.contentWrapper}>
          <TextInput style={styles.input}
                     placeholder='ilk Sayıyı Giriniz..'
                     onChangeText={(text) => {
                       this.setState({
                         input1: text
                       })
                     }}
                     value={this.state.input1}
            />

            <View style={styles.buttonWrapper}>
              <Button onPress={this.topla}
                      color="#841584"
                      title= '+'
                  />
              <Button onPress={this.cikar}
                      color="#4CAF50"
                      title= '-'
                  />
              <Button onPress={this.carp}
                      color="#f44336"
                      title= '*'
                  />
              <Button onPress={this.bolme}
                      color="#555555"
                      title= '/'
                  />

            </View>

            <TextInput style={styles.input}
                       placeholder='ikinci Sayiyi Giriniz..'
                       onChangeText={(text) => {
                         this.setState({
                           input2: text
                         })
                       }}
                       value={this.state.input2}
              />

            <Text style={styles.sampleText}>sonuc: {this.state.sonuc}</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  contentWrapper: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40
  },
  sampleText: {
    height: 30,
    fontSize: 20,
  },
});
