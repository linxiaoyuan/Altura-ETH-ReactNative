# Altura-ETH-ReactNative
## Requirements

1. The app should allow users to input a twelve-word recovery seed, and use it to
derive their private key.

2. The app should securely store the user's private key. You can assume that the device
itself is secure, but you should take appropriate measures to protect the key from
potential attackers.

3. The app should display the user's ETH balance and address.

4. The app should have a clean and intuitive user interface, with clear instructions and
feedback.

5. The app should be designed with scalability and future updates in mind.

6. You don't have to do this, but you should, in an accompanying document, explain
how you would securely retrieve, store and handle any sensitive API keys / secrets.



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




