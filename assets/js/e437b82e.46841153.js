(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[9369],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(a),p=o,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9759:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i={id:"JS-Tutorials",title:"Getting Started with JS SDK",sidebar_label:"Getting Started with JS SDK"},s=void 0,c={unversionedId:"JS-Tutorials",id:"JS-Tutorials",isDocsHomePage:!1,title:"Getting Started with JS SDK",description:"This tutorial starts with the installation of alya js sdk, and describes the steps involved in the connection to the Alaya network, basic query, transfer and signing, and interaction with smart contracts. This tutorial aims to show how to use Alaya Js Sdk in an informative and accurate way, so that developers can quickly get started with Alaya JS SDK.",source:"@site/docs/JS-SDK_Getting_Started_Guide.md",sourceDirName:".",slug:"/JS-Tutorials",permalink:"/alaya-devdocs/JS-Tutorials",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/docs/JS-SDK_Getting_Started_Guide.md",version:"current",frontMatter:{id:"JS-Tutorials",title:"Getting Started with JS SDK",sidebar_label:"Getting Started with JS SDK"},sidebar:"docs",previous:{title:"ARC721",permalink:"/alaya-devdocs/ARC721"},next:{title:"DApp Quick Migration Tutorial",permalink:"/alaya-devdocs/DApp_migrate"}},l=[{value:"Install Alaya js sdk in nodejs",id:"install-alaya-js-sdk-in-nodejs",children:[]},{value:"Connect to the Alaya Blockchain and Perform Basic Queries",id:"connect-to-the-alaya-blockchain-and-perform-basic-queries",children:[{value:"Connect to the Development Network",id:"connect-to-the-development-network",children:[]},{value:"Query Basic Network Information",id:"query-basic-network-information",children:[]}]},{value:"Transfer",id:"transfer",children:[{value:"Account",id:"account",children:[]},{value:"Transfer",id:"transfer-1",children:[]},{value:"Sign",id:"sign",children:[]}]},{value:"Smart Contract",id:"smart-contract",children:[{value:"Deploy Smart Contract",id:"deploy-smart-contract",children:[]},{value:"Interact with Smart Contract",id:"interact-with-smart-contract",children:[]}]},{value:"Summary",id:"summary",children:[]}],d={toc:l};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial starts with the installation of alya js sdk, and describes the steps involved in the connection to the Alaya network, basic query, transfer and signing, and interaction with smart contracts. This tutorial aims to show how to use Alaya Js Sdk in an informative and accurate way, so that developers can quickly get started with Alaya JS SDK."),(0,r.kt)("h2",{id:"install-alaya-js-sdk-in-nodejs"},"Install Alaya js sdk in nodejs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is recommended to install the LTS version of nodejs."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"lerna"),". Before installation, you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"lerna --version")," to verify whether it has been installed before. If not, use ",(0,r.kt)("inlineCode",{parentName:"li"},"npm i lerna -g")," for global installation."),(0,r.kt)("li",{parentName:"ul"},"Initialize the ",(0,r.kt)("inlineCode",{parentName:"li"},"nodejs")," project. Create a new project folder and enter this folder, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"mkdir alaya-js-sdk-examples & cd alaya-js-sdk-examples"),". Then use the command ",(0,r.kt)("inlineCode",{parentName:"li"},"npm init -y")," to initialize the project. This operation will create a new file ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," under ",(0,r.kt)("inlineCode",{parentName:"li"},"alaya-js-sdk-examples"),"."),(0,r.kt)("li",{parentName:"ul"},"Install Alaya's js sdk. Still in the previous folder, use the command ",(0,r.kt)("inlineCode",{parentName:"li"},"npm i AlayaNetwork/client-sdk-js#0.15.1-develop")," to install js sdk."),(0,r.kt)("li",{parentName:"ul"},"Create the ",(0,r.kt)("inlineCode",{parentName:"li"},"basic.js")," file for the subsequent development. This tutorial will introduce the code for basic RPC query in this file.")),(0,r.kt)("p",null,"In this part, we add two lines of code to basic.js:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var Web3a = require('web3');\nconsole.log(Web3a.version);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: In this tutorial, in order to distinguish them from the Web3 and web3 of Ethereum in most tutorials, Web3 in the original document is renamed to Web3a, and web3 is renamed to web3a. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run",(0,r.kt)("inlineCode",{parentName:"li"},"basic.js"),". Use the command ",(0,r.kt)("inlineCode",{parentName:"li"},"node basic.js")," in the command line to run this code. If it returns a version number similar to the following, it means that you have installed Alaya js sdk.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"0.15.1\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The following code can all be run on nodejs and web pages unless otherwise specified.")),(0,r.kt)("h2",{id:"connect-to-the-alaya-blockchain-and-perform-basic-queries"},"Connect to the Alaya Blockchain and Perform Basic Queries"),(0,r.kt)("p",null,"Alaya's network is divided into the mainnet, development network and private network. In order to reduce development costs, it is recommended to use the development network or the private network for development and testing. After testing, the project can be deployed on the mainnet. For more information about the network, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Run_a_fullnode"},"Join Alaya Network\xb7Alaya"),". For related information about the development network, please refer to: ","[Join Alaya Network\xb7Alaya]","(/alaya-devdocs /en/Join_the_dev_network)"),(0,r.kt)("p",null,"In order to lower the threshold for readers, this tutorial uses the development network as an example."),(0,r.kt)("h3",{id:"connect-to-the-development-network"},"Connect to the Development Network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var Web3a = require('web3');\nvar web3a = new Web3('http://47.241.91.2:6789');\nconsole.log(web3a.currentProvider)\n")),(0,r.kt)("p",null,"Of course, we can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"web3.setProvider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"web3.platon.setProvider")," to set the network."),(0,r.kt)("h3",{id:"query-basic-network-information"},"Query Basic Network Information"),(0,r.kt)("p",null,"There will be many examples of asynchronous calls in subsequent development. There are three most common in js syntax:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"callback, please refer to ",(0,r.kt)("a",{parentName:"li",href:"http://nodejs.cn/learn/javascript-asynchronous-programming-and-callbacks"},"JavaScript Asynchronous Programming and Callback (nodejs.cn)")),(0,r.kt)("li",{parentName:"ul"},"Promises, please refer to ",(0,r.kt)("a",{parentName:"li",href:"http://nodejs.cn/learn/understanding-javascript-promises"},"Understanding JavaScript Promise (nodejs.cn)")),(0,r.kt)("li",{parentName:"ul"},"async/await, please refer to ",(0,r.kt)("a",{parentName:"li",href:"http://nodejs.cn/learn/modern-asynchronous-javascript-with-async-and-await"},"Modern Asynchronous JavaScript with Async and Await (nodejs.cn)"))),(0,r.kt)("p",null,"In order to simplify the code, this tutorial uses async/await. The following code is the entire content of ",(0,r.kt)("inlineCode",{parentName:"p"},"basic.js"),", and the comments inside explain the usage of each snippet of code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function main() {\n    var Web3a = require(\'web3\');\n    var web3a = new Web3a(\'http://47.241.91.2:6789\');\n    // The protocol version of the node. The returned result is a hexadecimal string\n    var version = await web3a.platon.getProtocolVersion();\n    console.log("The protocol version of the node:" + web3a.utils.hexToNumber(version));\n    // true/false   Whether the Alaya node is synchronizing, true/false\n    var syncing = await web3a.platon.isSyncing();\n    console.log("Whether the Alaya node is synchronizing" + syncing);\n    // The current gas price, which is determined by the median gas price of several recent blocks. The unit is VON\n    var gasPrice = await web3a.platon.getGasPrice();\n    console.log("Gas Price: " + gasPrice);\n    // It returns the current block number\n    var blockNumber = await web3a.platon.getBlockNumber();\n    console.log("Block Number: " + blockNumber);\n    // It returns the balance of a specific account address in the specified block, in the unit of VON\n    var address = "atp1td535z2n3c7rjmsxuxdafd9gu8waz5lfx2a3c9";\n    var balance = await web3a.platon.getBalance(address);\n    console.log("Address Balance: " + balance);\n    // It returns the block corresponding to the specified block number or block hash\n    var blockHash = "0x577e9777f0ee1cf1b4d2d45a959ee57a59ebd0927740df4cd483c99eb5c58e83";\n    blockNumber = 10418171;\n    var blockByHash = await web3a.platon.getBlock(blockHash);\n    console.log("Get Block by Hash: " + JSON.stringify(blockByHash));\n    var blockByNumber = await web3a.platon.getBlock(blockNumber);\n    console.log("Get Block by Number: " + JSON.stringify(blockByNumber));\n    // It returns the number of transactions in the specified block, and, like in the previous function, the parameters can be blockHash or blockNumber\n    var transCount = await web3a.platon.getBlockTransactionCount(blockHash);\n    console.log("Transaction Number in Block: " + transCount);\n    // It returns the transaction object with the specified hash value\n    var transHash = "0xa4414b82479af4dbdf4bab822f46f2414c200152553758678e506195b0fa9cfb";\n    var trans = await web3a.platon.getTransaction(transHash);\n    console.log("Transaction: " + JSON.stringify(trans));\n    // The number of transactions issued by the specified address. This function is very useful and can be used to determine the nonce of the transaction\n    var accountTransCount =  await web3a.platon.getTransactionCount(address);\n    console.log("Account Transaction Count: " + accountTransCount);\n}\nmain();\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The above code only exemplifies some of the commonly used query functions. You can find that the use of query functions is very simple, which seems clear in the above example.")),(0,r.kt)("h2",{id:"transfer"},"Transfer"),(0,r.kt)("p",null,"Connecting to the Alaya network and obtaining relevant information are the first step, but in fact, account-related operations are important to development. After all, you cannot participate in Alaya without an account. Below we start from creating an account to explain how to use the account and how to acquire related information."),(0,r.kt)("h3",{id:"account"},"Account"),(0,r.kt)("p",null,"Before we start, let\u2019s briefly introduce what is an account:"),(0,r.kt)("img",{src:"/alaya-devdocs/img/en/JS-SDK_Getting_Started_Guide.assets/account.png",alt:"account",style:{zoom:"50%"}}),(0,r.kt)("p",null,"Alaya uses an account system similar to that of Ethereum. For details, please refer to: ","[Alaya Overall Plan \xb7 Alaya]","(/alaya-devdocs/en/Architecture#account model)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Account:")," It's like a safe which stores the state of each account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Private key: "),"The private key can completely control the account, so it should be stored properly. There are two forms of private keys: the mnemonic and master key. The mnemonic contains 12 words, and its main function is to help you remember the key. Please note that if your mnemonic phrase is leaked, your key has been leaked. The master key is a 64-bit hexadecimal number. This key is generally used in programs, which is difficult to use or remember manually."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Public key:")," It can be regarded as your account address or bank card number. The public key generates an address after a hash operation. Others can use the address (or public key) to transfer money to you, and of course you can also check your operation history."),(0,r.kt)("h3",{id:"transfer-1"},"Transfer"),(0,r.kt)("p",null,"Whether it is a transfer or other operation, the general process is as follows:"),(0,r.kt)("img",{src:"/alaya-devdocs/img/en/JS-SDK_Getting_Started_Guide.assets/transaction.png",alt:"transaction",style:{zoom:"50%"}}),(0,r.kt)("p",null,"Transfer and signing described in the next section are the most commonly used operations for accounts. But in fact, transfer also involves data signing, but it will not be detailed in this section."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: ",(0,r.kt)("strong",{parentName:"p"},"!!!! It is very dangerous to write the private key of the mainnet in the code and share it with others!!!!"))),(0,r.kt)("p",null,"Let's take a look at the specific code of the transfer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var Web3a = require("web3");\nvar AlayaAccounts = require("web3/packages/web3-eth-accounts");\nasync function main() {\n\n    let web3a = new Web3a(\'http://47.241.91.2:6789\');\n\n    // !!!!It is very dangerous to write the private key of the mainnet in the code and share it with others!!!! \n    // address for the privatekey below: atp1sznvsju6gjy3kmgnfgm526jf6e8x83twuctefh\n    var privateKey="0x5ae02064df442340f861136acbfc4bd62b3d48393903bd6aac77ce0e7aaa9e5e";\n    \n    var chainId = 201030; //201018 for mainnet\n    // // privatekey for the address below: 0x0727b77a246f2c01c1b7b068c26bd71b81700f7ea003dd1ba68a38885a69a1a5\n    var toAddress = "atp1jqtmpjme9gvg6wnuyphzqzgphslfmjtxcy8mt2";\n    var act = new AlayaAccounts(web3a.currentProvider, "atp");\n    act = act.privateKeyToAccount(privateKey);\n    \n    let from = act.address;\n    let nonce = web3a.utils.numberToHex(await web3a.platon.getTransactionCount(from));\n    let gasPrice = await web3a.platon.getGasPrice();\n    let tx = {\n        from: from,\n        to: toAddress,\n        value: "1000000000000000000",\n        chainId: chainId,\n        gasPrice: gasPrice, \n        gas: "21000", \n        nonce: nonce,\n    };\n    // Sign the transaction\n    let signTx = await act.signTransaction(tx);\n    // Send the transaction\n    let receipt = await web3a.platon.sendSignedTransaction(signTx.rawTransaction);\n    console.log("The receipt of the transaction is: " + JSON.stringify(receipt));\n    console.log("sign tx data:\\n", signTx.rawTransaction)\n}\nmain();\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please pay attention to the process of generating the account act. Since the hrp of the Alaya network is atp, the setting process involves two steps:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specifying hrp;")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setting PrivateKey."))),(0,r.kt)("p",{parentName:"blockquote"},"Corresponding to lines 14 and 15 in the above code respectively.")),(0,r.kt)("p",null,"It is important to know how to create and fill in transaction information. In JavaScript, the dictionary type can be directly used in a transaction, and there are many fields that need to be queried from the Alaya network. For example, for ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice"),", the recommended value can be found from the network, or you can set it yourself."),(0,r.kt)("p",null,"The following signature is also an asynchronous operation, but all of its signature operations are executed locally, which is an ",(0,r.kt)("strong",{parentName:"p"},"offline signature"),"."),(0,r.kt)("p",null,"The transaction will be sent after being signed. After the transaction is sent successfully, the transaction receipt containing a lot of transaction information will be returned. For details, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/JS_SDK/#web3platongettransactionreceipt"},"JS SDK \xb7 Alaya")),(0,r.kt)("h3",{id:"sign"},"Sign"),(0,r.kt)("p",null,"As mentioned in the previous documents, signing is one of the most commonly used operations in the Alaya application. All transactions must be signed before being packaged on the blockchain. The essence of signature is to show your identity to the blockchain, and you are willing to guarantee the correctness and pay gas for the transaction you signed. Therefore, Web3 has also designed a variety of signature methods. Below are details of the two most commonly used signing methods."),(0,r.kt)("h4",{id:"signature-of-an-unlocked-account"},"Signature of an Unlocked Account"),(0,r.kt)("p",null,"As you may find in the document, ",(0,r.kt)("inlineCode",{parentName:"p"},"web3a.platon.signTransaction")," means:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To sign the transaction, the account must be unlocked first.")),(0,r.kt)("p",null,"But how?"),(0,r.kt)("p",null,"Here is an explanation of what is an unlocked account and how to generate it. An unlocked account generally occurs in the following two situations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use some convenience tools of the testnet, such as Ganache in Ethereum (seemingly no similar tools in Alaya yet). Test accounts will be generated along with private test nodes, and these accounts are unlocked accounts, which can be signed with ",(0,r.kt)("inlineCode",{parentName:"p"},"web3a.platon.signTransaction"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Some wallets, such as some hardware wallets, PlatON's Samurai wallet, Ethereum's MetaMask, etc., can also generate unlocked wallets."))),(0,r.kt)("p",null,"In fact, the second situation is more common in actual development, but we will skip this part the content of this part because it will be included in the tutorial of ",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Samurai_user_manual"},"Samurai wallet"),". "),(0,r.kt)("h4",{id:"use-privatekey-or-keystore-to-sign"},"Use PrivateKey or KeyStore to Sign"),(0,r.kt)("p",null,"In the above code, we used PrivateKey for signing, that is, ",(0,r.kt)("inlineCode",{parentName:"p"},"web3a.platon.accounts.signTransaction"),". This method directly receives the transaction and privateKey parameters and returns a signedTransaction. It is actually a convenience tool that quickly generates a signed transaction. In order to make the code logic clearer, we recommend using a private key (PrivateKey) or KeyStore to generate an account (Account) for signing, as shown below:"),(0,r.kt)("img",{src:"/alaya-devdocs/img/en/JS-SDK_Getting_Started_Guide.assets/sign.png",alt:"sign",style:{zoom:"50%"}}),(0,r.kt)("p",null,"This snippet of code is exactly the same in function as the above one, except that some changes have been made to the transaction signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var Web3a = require("web3");\nvar AlayaAccounts = require("web3/packages/web3-eth-accounts");\nasync function main() {\n\n    let web3a = new Web3a(\'http://47.241.91.2:6789\');\n\n    // !!!!It is very dangerous to write the private key of the mainnet in the code and share it with others!!!! \n    // address for the privatekey below: atp1sznvsju6gjy3kmgnfgm526jf6e8x83twuctefh\n    var privateKey="0x5ae02064df442340f861136acbfc4bd62b3d48393903bd6aac77ce0e7aaa9e5e";\n    \n    var chainId = 201030; //201018 for mainnet\n    // // privatekey for the address below: 0x0727b77a246f2c01c1b7b068c26bd71b81700f7ea003dd1ba68a38885a69a1a5\n    var toAddress = "atp1jqtmpjme9gvg6wnuyphzqzgphslfmjtxcy8mt2";\n    var act = new AlayaAccounts(web3a.currentProvider, "atp");\n    \n    let from = act.address;\n    let nonce = web3a.utils.numberToHex(await web3a.platon.getTransactionCount(from));\n    let gasPrice = await web3a.platon.getGasPrice();\n    let tx = {\n        from: from,\n        to: toAddress,\n        value: "1000000000000000000",\n        chainId: chainId,\n        gasPrice: gasPrice, \n        gas: "21000", \n        nonce: nonce,\n    };\n    \n    // Conversion between PrivateKey and Account\n    act = act.privateKeyToAccount(privateKey);\n    // keystore  Conversion between keystroe and privateKey. Of course you can also read the keystore from the file\n    let keystore = web3a.platon.accounts.encrypt(privateKey, "platon12345678");\n    // Restore Account by keystore\n    act = act.decrypt(keystore, "platon12345678"); \n    // Sign a transaction\n    let signTx = await act.signTransaction(tx);\n    // Send a transaction\n    let receipt = await web3a.platon.sendSignedTransaction(signTx.rawTransaction);\n    console.log("The receipt of the transaction is: " + JSON.stringify(receipt));\n    console.log("sign tx data:\\n", signTx.rawTransaction)\n}\nmain();\n')),(0,r.kt)("p",null,"This code is logically easier to understand: first we use PrivateKey to generate an account, and then use this account to sign the transaction. Of course, the above code actually generates act twice, which aims to demonstrate the conversion between PrivateKey and Keystore and how to use PrivateKey and Keystore to generate accounts."),(0,r.kt)("h2",{id:"smart-contract"},"Smart Contract"),(0,r.kt)("p",null,"Having known how to sign, we can further learn how to use smart contracts."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: This document does not discuss how to write smart contracts, but only how to use js sdk to perform smart contract-related operations."),(0,r.kt)("p",{parentName:"blockquote"},"This tutorial takes solidity contract as an example.")),(0,r.kt)("p",null,"Before using alya sdk to interact with smart contracts, let us make one point clear, that is, what can alya sdk do?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can alaya sdk compile smart contracts? ",(0,r.kt)("strong",{parentName:"li"},"No"),", at this stage, Alaya\u2019s smart contract can be compiled by using ",(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Alaya-Truffle"},"alaya-truffle")," and ",(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/IDE"},"PlatONStudio"),". For details, please refer to: ","[EVM Smart Contract \xb7 Alaya]","(/alaya-devdocs/zh-CN/Solidity_Getting_started#Compile helloworld contract)"),(0,r.kt)("li",{parentName:"ul"},"Can Alaya sdk deploy smart contracts? ",(0,r.kt)("strong",{parentName:"li"},"Yes! "),"Later, we will talk about how to deploy smart contracts with alya sdk."),(0,r.kt)("li",{parentName:"ul"},"Can alaya sdk interact with smart contracts? ",(0,r.kt)("strong",{parentName:"li"},"Sure! "),"This is one of the main functions of alya sdk.")),(0,r.kt)("h3",{id:"deploy-smart-contract"},"Deploy Smart Contract"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before it is deployed, a smart contract needs to be compiled. For the specific compilation method, please refer to ","[EVM Smart Contract \xb7 Alaya]","(/alaya-devdocs/zh-CN/Solidity_Getting_started#compile the helloworld contract). After being tested and compiled using ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"https://remix.ethereum.org/"),", it can also run normally on the alya network. After compiling, you will get abi and bytecode, which will be used in the code subsequent. Due to the limitation of space, we will not introduce the compilation process in more detail. In this tutorial, we use ","[EVM smart contract\xb7Alaya]","(/alaya-devdocs/zh-CN/Solidity_Getting_started#Create helloworld contract) to create the HelloWorld contract. The two variables after compilation are as follows:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let bytecode = "0x608060405234801561001057600080fd5b5061036b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806317d7de7c1461003b578063c47f0027146100b8575b600080fd5b61004361015e565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561007d578181015183820152602001610065565b50505050905090810190601f1680156100aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610043600480360360208110156100ce57600080fd5b8101906020810181356401000000008111156100e957600080fd5b8201836020820111156100fb57600080fd5b8035906020019184600183028401116401000000008311171561011d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101f5945050505050565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156101ea5780601f106101bf576101008083540402835291602001916101ea565b820191906000526020600020905b8154815290600101906020018083116101cd57829003601f168201915b505050505090505b90565b805160609061020b90600090602085019061029e565b506000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156102925780601f1061026757610100808354040283529160200191610292565b820191906000526020600020905b81548152906001019060200180831161027557829003601f168201915b50505050509050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102df57805160ff191683800117855561030c565b8280016001018555821561030c579182015b8281111561030c5782518255916020019190600101906102f1565b5061031892915061031c565b5090565b6101f291905b80821115610318576000815560010161032256fea265627a7a72315820087868e5d428c0270af7145556516942e16a5db5ec467f7dcdca4cfa9ec099bc64736f6c63430005110032";\nlet abi = [\n{\n  "constant": false,\n   "inputs": [\n         {\n             "internalType": "string",\n             "name": "_name",\n             "type": "string"\n         }\n     ],\n     "name": "setName",\n     "outputs": [\n         {\n             "internalType": "string",\n             "name": "",\n             "type": "string"\n         }\n     ],\n     "payable": false,\n     "stateMutability": "nonpayable",\n     "type": "function"\n   },\n   {\n   "constant": true,\n   "inputs": [],\n     "name": "getName",\n     "outputs": [\n         {\n             "internalType": "string",\n             "name": "",\n             "type": "string"\n         }\n     ],\n     "payable": false,\n     "stateMutability": "view",\n     "type": "function"\n   }\n   ];\n')),(0,r.kt)("p",{parentName:"blockquote"},"In order to reduce the code length, these two variables may be used directly in the subsequent code without being assigned separately.")),(0,r.kt)("p",null,"The smart contract deployment is actually very simple and similar to the transfer previously mentioned, and it also follows the order of ",(0,r.kt)("strong",{parentName:"p"},"generating a transaction->signing a transaction->sending a transaction"),". Let's take a look at the code below!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var Web3a = require("web3");\nvar AlayaAccounts = require("web3/packages/web3-eth-accounts");\nasync function main() {\n    let web3a = new Web3a(\'http://47.241.91.2:6789\');\n    let bytecode = "";\n\n    // !!!!It is very dangerous to write the private key of the mainnet in the code and share it with others!!!! \n    // address for the privatekey below: atp1sznvsju6gjy3kmgnfgm526jf6e8x83twuctefh\n    var privateKey="0x5ae02064df442340f861136acbfc4bd62b3d48393903bd6aac77ce0e7aaa9e5e";    \n    var chainId = 201030; //201018 for mainnet\n    var act = new AlayaAccounts(web3a.currentProvider, "atp");\n    act = act.privateKeyToAccount(privateKey);\n    \n    let from = act.address;\n    let nonce = web3a.utils.numberToHex(await web3a.platon.getTransactionCount(from));\n    let gasPrice = await web3a.platon.getGasPrice();\n    let tx = {\n        from: from,\n        chainId: chainId,\n        gasPrice: gasPrice, \n        nonce: nonce,\n        data: bytecode\n    };\n    // Evaluate the transaction fees required for this transaction\n    let gas = await web3a.platon.estimateGas(tx);\n    tx.gas = gas;\n    // Sign a transaction\n    let signTx = await act.signTransaction(tx);\n    // Send a transaction\n    let receipt = await web3a.platon.sendSignedTransaction(signTx.rawTransaction);\n    console.log("The receipt of the transaction is: " + JSON.stringify(receipt));    \n}\nmain();\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: The above code cannot be run directly. The bytecode variable is used in the code but it is not assigned. You need to assign the bytecode variable before using it. ")),(0,r.kt)("p",null,"Doesn't it seem familiar? The two biggest differences between it and the previous transfer transactions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It has no to and value"),(0,r.kt)("li",{parentName:"ul"},"It has data that stores bytecode")),(0,r.kt)("h3",{id:"interact-with-smart-contract"},"Interact with Smart Contract"),(0,r.kt)("p",null,"We often need to interact with smart contracts, but unfortunately, few tutorials on the Internet have made it clear, especially interaction with smart contracts when using public nodes. So many of us may have a question: can I interact with smart contracts without a privatKey?"),(0,r.kt)("p",null,"It depends, because we usually interact with smart contracts in two ways: one is ",(0,r.kt)("strong",{parentName:"p"},"call"),", and the other is ",(0,r.kt)("strong",{parentName:"p"},"send"),"."),(0,r.kt)("h4",{id:"call"},"call"),(0,r.kt)("p",null,"Sometimes, we only need to query some data from the blockchain without changing the state of the blockchain. At this time, we can use call to interact with the blockchain. Since we haven't changed the blockchain, we don't need to pay gas or sign with a private key, which is quite convenient."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var Web3a = require("web3");\nasync function main() {\n    let web3a = new Web3a(\'http://47.241.91.2:6789\');\n    // The address of the smart contract that I have deployed\n    let contractAddress = "atp1pcvx85klajfw9mvy3tf07acmqxaek5nanuy5t6";\n    console.log("contract address: " + contractAddress);\n    let abi = [];\n    // Construct a contract object\n    let contract = new web3a.platon.Contract(abi, contractAddress);\n    let name = await contract.methods.getName().call();\n    console.log("name before change: " + name);    \n}\nmain();\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: The above code cannot be run directly. The bytecode variable is used in the code but it is not assigned. You need to assign the bytecode variable before using it. ")),(0,r.kt)("p",null,"As you can see, the form of call is very simple. You can query information directly from the blockchain even without a private key. If you use my contract address, you will find from the blockchain that the name is rileyge. If you use your newly deployed contract, the name is empty."),(0,r.kt)("h4",{id:"send"},"send"),(0,r.kt)("p",null,"Note that send is just a title. In fact, as you will see later, we do not use the send function in the following code. When should we use send to interact with the blockchain? Simply put, when the operation needs to change the state of the blockchain, we need the send method to interact with the blockchain. At this time, we need to sign the transaction and pay the gas."),(0,r.kt)("p",null,"If you have read similar tutorials elsewhere, you will find that they are using unlocked accounts. As mentioned earlier, unlocked accounts are only used when it comes to private nodes or related wallets, while the nodejs program does not use wallets (in some cases it does, of course). So how to use unlocked accounts to interact with smart contracts via send?"),(0,r.kt)("p",null,"Still the previous routine: ",(0,r.kt)("strong",{parentName:"p"},"Generating a transaction->Signing a transaction->Sending a transaction"),". The key lies in how to generate a transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var Web3a = require("web3");\nvar AlayaAccounts = require("web3/packages/web3-eth-accounts");\nasync function main() {\n    let web3a = new Web3a(\'http://47.241.91.2:6789\');\n\n    // !!!!It is very dangerous to write the private key of the mainnet in the code and share it with others!!!!  \n    // address for the privatekey below: atp1sznvsju6gjy3kmgnfgm526jf6e8x83twuctefh\n    var privateKey="0x5ae02064df442340f861136acbfc4bd62b3d48393903bd6aac77ce0e7aaa9e5e";    \n    var chainId = 201030; //201018 for mainnet  \n    var act = new AlayaAccounts(web3a.currentProvider, "atp");\n    act = act.privateKeyToAccount(privateKey);\n    let from = act.address;\n    let gasPrice = await web3a.platon.getGasPrice();\n    // The smart contract deployed\n    let contractAddress = "atp1pcvx85klajfw9mvy3tf07acmqxaek5nanuy5t6";\n    let abi = [];\n    let contract = new web3a.platon.Contract(abi, contractAddress);\n    let name = await contract.methods.getName().call();\n    console.log("name before change: " + name);\n    let trans = contract.methods.setName("rileyge");\n    let options ={\n        to      : trans._parent._address, // You can also use contractAddress\n        data    : trans.encodeABI(), // You can also refer to abi\n        gas     : await trans.estimateGas({from: from}),\n        gasPrice: gasPrice,\n        chainId : chainId\n    }\n    signTx = await act.signTransaction(options);\n    // Send a transaction\n    receipt = await web3a.platon.sendSignedTransaction(signTx.rawTransaction);\n    name = await contract.methods.getName().call();\n    console.log("name after change: " + name);\n}\nmain();\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: The above code cannot be run directly. The bytecode variable is used in the code but it is not assigned. You need to assign the bytecode variable before using it.")," "),(0,r.kt)("p",null,"If you use a deployed smart contract, you need to modify the variables in the setName function to see how it goes. There are something worth noting in the above code, all in the options variable."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The trans variable is the transaction about the setName method constructed by the Contract class. The specific uses of this transaction are explained in the following points."),(0,r.kt)("li",{parentName:"ul"},"to is set as the address of the smart contract, which is very easy to understand."),(0,r.kt)("li",{parentName:"ul"},"In data, function names and variables are abi-encoded, which is a complicated process. For the specific encoding method, refer to ",(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/RileyGe/d4baaf64a6872fce7d7f8d3ce2b04ac0"},"Function ABI encoding rules (github.com)")," . Fortunately, aaya sdk has handled this, so you just need to call the encodeABI() function."),(0,r.kt)("li",{parentName:"ul"},"The last issue involves a bug of alaya sdk. I have already explained in details in ","[Alaya Sdk cChainId and Prefix Conflict \xb7 Issue #61 \xb7 PlatONnetwork/client-sdk-js (github.com)]","(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/"},"https://github.com/")," The problem is explained in detail in AlayaNetwork/client-sdk-js/issues/2) and provided a temporary solution.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary of Transaction Construction"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The commonly used variables in transaction construction are: from, to, value, gas, gasPrice, data, chainId, etc. In fact, some variables have default values in many cases, such as gas and gasPrice. So don't be surprised if you find some variables unset in transactions."),(0,r.kt)("li",{parentName:"ul"},"Among these variables, chainId seems quite interesting. This variable must be set correctly because it aims to avoid replay attacks on different chains."),(0,r.kt)("li",{parentName:"ul"},"The construction of data is the key to constructing transactions. In some complex transactions, data is encoded into data in some way.")),(0,r.kt)("p",null,"Isn't the interaction between alaya sdk and smart contract easy? Now explore by yourself!"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"That is all for this tutorial. There are also two major parts about alya js sdk: usage in an explorer and interaction with a built-in contract. However, given the potential version update which may make a big difference to the above two operations, I will introduce these two parts after the upgrade."))}u.isMDXComponent=!0}}]);