import React, {MutableRefObject, useState, createRef } from 'react';
import {Modal, View, Text, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Web3 from 'web3';
import { hdkey } from 'ethereumjs-wallet';
import styles from './RecoverySeedForm.style';

const bip39 = require('bip39')

const RecoverySeedForm = () => {
  const [mnemonic, setMnemonic] = useState('');
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const inputs: MutableRefObject<TextInput>[] = Array(12).fill(createRef<TextInput>());

  const handleSubmit = () => {
    // const mnemonic = 'brother have tongue velvet inner rebel night breeze call smoke hole other';
    const infuraUrl = 'https://mainnet.infura.io/v3/a4025246c2ec474ea87e68c56b578084';

    // calculate address by mnenmonic words
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const web3 = new Web3(infuraUrl);
    const hdNode = hdkey.fromMasterSeed(seed);
    const accountNode = hdNode.derivePath("m/44'/60'/0'/0/0");
    const wallet = accountNode.getWallet();
    const address = wallet.getAddressString();
    console.log('Account address:', address);

    // get balance
    web3.eth.getBalance(address, (error, balance) => {
      
      if (error) {
        console.error('Error:', error);
      } else {
        console.log('Balance:', web3.utils.fromWei(balance, 'ether'));
        setAddress(address)
        setBalance(web3.utils.fromWei(balance, 'ether'))
        setModalVisible(true);
      }
    });
    
  };

  const handleInput = (index: number, value: string) => {
    if (/[^a-zA-Z]/.test(value)) {
      // Only allow alphabetical characters
      // console.log("illegal input at index:", index)
      return;
    }
    const newMnemonic = mnemonic.slice(0, index) + value + mnemonic.slice(index + 1);
    setMnemonic(newMnemonic);
  };

  const handleClear = () => {
    setMnemonic('');
    setAddress('');
    setBalance('');
    inputs[0].current.focus();
  };


  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      
      <Text style={styles.instructionText}>
        Enter your 12-word mnemonic phrase below :
      </Text>
      <View style={styles.inputContainer}>
        
        {[...Array(12)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.inputField}
              maxLength={20}
              returnKeyType="next"
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={(value) => handleInput(index, value)}
              onSubmitEditing={() => {
                // console.log("submit editing:", index)
                if (index < 11) {
                  // Focus the next input field
                  const nextInput = inputs[index + 1];
                  nextInput.current.focus();
                } else {
                  // Submit the mnemonic
                  // handleSubmit();
                }
              }}
              ref={(input) => {
                if (input) {
                  inputs[index].current = input;
                }
              }}
            />
          ))}
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Wallet Information</Text>
            <View style={styles.modalRow}>
              <Text style={styles.modalLabel}>Address:</Text>
              <Text style={styles.modalValue}>{address}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modalLabel}>Balance:</Text>
              <Text style={styles.modalValue}>{balance} ETH</Text>
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};


export default RecoverySeedForm; 