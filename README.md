# Altura-ETH-ReactNative
## Requirements

1. The app should allow users to input a twelve-word recovery seed, and use it to
derive their private key.

Use bip39 to calculate address. 

<img width="433" alt="image" src="https://user-images.githubusercontent.com/41985804/224506076-c28cbbad-ba8b-48d0-bff4-6b46ab170ac5.png">

Use wallet to get private key 

    const wallet = accountNode.getWallet();  
    
    const privateKey = wallet.getPrivateKey();


2. The app should securely store the user's private key. You can assume that the device
itself is secure, but you should take appropriate measures to protect the key from
potential attackers.

Use react-native-keychain to store private key

<img width="594" alt="image" src="https://user-images.githubusercontent.com/41985804/224506194-e47509dd-facc-4a23-89a9-ad9cf5ba526e.png">


3. The app should display the user's ETH balance and address.

<img src="https://user-images.githubusercontent.com/41985804/224506218-9440ae43-b208-41ae-98c9-abdaac989307.png" width="300">


4. The app should have a clean and intuitive user interface, with clear instructions and
feedback.

<img src="https://user-images.githubusercontent.com/41985804/224506326-36ed31cb-18c3-43d7-95fc-76acce3e23ba.png" width="300">


5. The app should be designed with scalability and future updates in mind.

Design as a single component, which can be reuse in other page.  

<img width="223" alt="image" src="https://user-images.githubusercontent.com/41985804/224506346-e0bbac10-f038-42a0-b999-3f8b4a9f6eaa.png">


6. You don't have to do this, but you should, in an accompanying document, explain
how you would securely retrieve, store and handle any sensitive API keys / secrets.

Document：https://github.com/linxiaoyuan/Altura-ETH-ReactNative#readme

## Implement
git：https://github.com/linxiaoyuan/Altura-ETH-ReactNative.git  
Document：https://github.com/linxiaoyuan/Altura-ETH-ReactNative#readme

## Presentation：


https://user-images.githubusercontent.com/41985804/224505935-9014fa10-9e37-424c-8ce7-1829444fbbed.mov



## Issue：
### 1. Compatibility with js lib
Although web3.js is primarily intended for use in a browser environment, it is possible to use it in a React Native project. However, there may be some compatibility issues since React Native does not provide the same environment as a browser. To overcome this, I use a shim.js file that can help bridge the gap between web3.js and React Native.
### 2. iOS ATS
iOS imposes network constraints through its App Transport Security (ATS) feature, which enforces secure connections between an app and its servers. In this project, I just simply disable it in the Info.plist file of Xcode project by adding the following code:
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>




