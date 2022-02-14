(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[3466],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=p(a),c=l,m=k["".concat(d,".").concat(c)]||k[c]||u[c]||r;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3210:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),o={id:"Run_a_fullnode",title:"Run a fullnode",sidebar_label:"Run a fullnode"},i=void 0,d={unversionedId:"Run_a_fullnode",id:"Run_a_fullnode",isDocsHomePage:!1,title:"Run a fullnode",description:"Overview",source:"@site/docs/Run_a_fullnode.md",sourceDirName:".",slug:"/Run_a_fullnode",permalink:"/alaya-devdocs/en/Run_a_fullnode",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/docs/Run_a_fullnode.md",version:"current",frontMatter:{id:"Run_a_fullnode",title:"Run a fullnode",sidebar_label:"Run a fullnode"},sidebar:"docs",previous:{title:"Intro to validator",permalink:"/alaya-devdocs/en/Intro_to_validator"},next:{title:"Staking",permalink:"/alaya-devdocs/en/Become_Validator"}},p=[{value:"Overview",id:"overview",children:[]},{value:"System Requirements",id:"system-requirements",children:[]},{value:"Installation Overview",id:"installation-overview",children:[]},{value:"Installing on Ubuntu (18.04)",id:"installing-on-ubuntu-1804",children:[{value:"Install and run NTP service",id:"install-and-run-ntp-service",children:[]},{value:"Install Alaya",id:"install-alaya",children:[]}]},{value:"Generate keys",id:"generate-keys",children:[{value:"Public and private keys",id:"public-and-private-keys",children:[]},{value:"BLS public and private key",id:"bls-public-and-private-key",children:[]}]},{value:"Run Full Node",id:"run-full-node",children:[{value:"Join the Alaya Mainnet",id:"join-the-alaya-mainnet",children:[]},{value:"View Node State",id:"view-node-state",children:[]},{value:"Join the Alaya Development Network",id:"join-the-alaya-development-network",children:[]}]}],s={toc:p};function u(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This guide demonstrates how to install the Alaya Node software on Linux."),(0,r.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU: 4 Cores"),(0,r.kt)("li",{parentName:"ul"},"Memory: 8G"),(0,r.kt)("li",{parentName:"ul"},"Disk: > 100G")),(0,r.kt)("h2",{id:"installation-overview"},"Installation Overview"),(0,r.kt)("p",null,"It takes three or four steps to install a new node, which depends on the operating system used. The detailed procedures are list below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installing on Ubuntu (18.04)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note: Use the normal user to execute the following command."))),(0,r.kt)("h2",{id:"installing-on-ubuntu-1804"},"Installing on Ubuntu (18.04)"),(0,r.kt)("h3",{id:"install-and-run-ntp-service"},"Install and run NTP service"),(0,r.kt)("h4",{id:"open-a-terminal-and-run-the-following-commands"},"Open a terminal and run the following commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update &&\nsudo apt-get install -y gnupg2 curl software-properties-common ntp &&\nsudo systemctl enable ntp && sudo systemctl start ntp\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notes:"),(0,r.kt)("p",{parentName:"blockquote"},"NTP service is used for time synchronization, incorrect system time will affect the normal operation of Alaya")),(0,r.kt)("h4",{id:"validate-the-ntp-time-synchronization"},"Validate the NTP time synchronization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ntpq -4c rv | grep leap_none\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notes:"),(0,r.kt)("p",{parentName:"blockquote"},"Display ",(0,r.kt)("strong",{parentName:"p"},"associd=0 status=0615 ",(0,r.kt)("font",{color:"red"},"leap_none"),", sync_ntp, 1 event, clock_sync,")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"leap_none")," is red, indicating that the NTP time synchronization is normal.")),(0,r.kt)("h3",{id:"install-alaya"},"Install Alaya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backup binaries"),(0,r.kt)("p",{parentName:"li"},"Tip: You can skip this step if you do not need to back up the old version binaries."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[[ -x /usr/bin/alaya ]] && sudo mv /usr/bin/alaya /usr/bin/alaya_`alaya version | grep '^Version:' | awk -F \"[ ,:,-]\" '{print $3}'`\n[[ -x /usr/bin/alayakey ]] && sudo mv /usr/bin/alayakey /usr/bin/alayakey_`alayakey --version | awk -F \"[ ,-]\" '{print $3}'`\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install binary"),(0,r.kt)("font",{color:"red"},"The binary version number of the main network is 0.16.3, and that of the development network is 0.16.3. If you need to join the development network, please change the version number in the download link to 0.16.3."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://download.alaya.network/alaya/platon/0.16.3/alaya -P /usr/bin\nsudo wget https://download.alaya.network/alaya/platon/0.16.3/alayakey -P /usr/bin\nsudo chmod +x /usr/bin/alaya  /usr/bin/alayakey\nalaya version\n")),(0,r.kt)("p",{parentName:"li"},"After executing the commands above, ",(0,r.kt)("inlineCode",{parentName:"p"},"alaya")," and ",(0,r.kt)("inlineCode",{parentName:"p"}," alayakey")," binary should be successfully installed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/bin")," directory on your system. You can execute corresponding commands in any directory."))),(0,r.kt)("h2",{id:"generate-keys"},"Generate keys"),(0,r.kt)("h3",{id:"public-and-private-keys"},"Public and private keys"),(0,r.kt)("p",null,"Each node in the network has an unique identity to distinguish it from others. This identity is a public and private key pair, generated in the node's working directory ( ",(0,r.kt)("inlineCode",{parentName:"p"},"~/alaya-node"),") by the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/alaya-node/data && alayakey genkeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ~/alaya-node/data/nodekey) >(grep \"PublicKey\" | awk '{print $3}' > ~/alaya-node/data/nodeid)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Remark:"),(0,r.kt)("p",{parentName:"blockquote"},"Displays the following, indicating that the key pair has been successfully generated (x stands for number or letter) :"),(0,r.kt)("p",{parentName:"blockquote"},"PrivateKey: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),(0,r.kt)("p",{parentName:"blockquote"},"PublicKey: : xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PrivateKey")," is the private key of the node, and",(0,r.kt)("inlineCode",{parentName:"p"}," PublicKey")," is the public key of the node. The public key is used to identify the identity of the node and can be made public."),(0,r.kt)("p",null,"Two files will be generated in the subdirectory ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," under the working directory of the node\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nodeid: node public key (ID) file, which holds the node's public key"),(0,r.kt)("li",{parentName:"ul"},"nodekey: node private key file, which holds the node's private key")),(0,r.kt)("h3",{id:"bls-public-and-private-key"},"BLS public and private key"),(0,r.kt)("p",null,"In addition to the public and private keys of the node, the Alaya node also needs a key pair called the BLS public and private key. This key pair will be used in the consensus protocol. The key pair can be generated in the node's working directory (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"~/alaya-node"),") by the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/alaya-node/data && alayakey genblskeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ~/alaya-node/data/blskey) >(grep \"PublicKey\" | awk '{print $3}' > ~/alaya-node/data/blspub)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PrivateKey: f22a785c80bd1095beff1f356811268eae6c94abf0b2b4e2d64918957b74783e\nPublicKey : 4bf873a66df92ada50a8c6bacb132ffd63437bcde7fd338d2d8696170034a6332e404ac3abb50326ee517ec5f63caf12891ce794ed14f8528fa7c54bc0ded7c5291f708116bb8ee8adadf1e88588866325d764230f4a45929d267a9e8f264402")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PrivateKey")," is the BLS private key of the node, and",(0,r.kt)("inlineCode",{parentName:"p"}," PublicKey")," is the BLS public key of the node. The BLS public key is used to quickly verify the signature in the consensus protocol and can be published. The BLS private key cannot be made public and needs to be backed up."),(0,r.kt)("p",null,"Two files will be generated in the subdirectory ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," under the working directory of the node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"blspub: Node BLS public key file, which holds the node's BLS public key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"blskey: Node BLS private key file, which holds the node's BLS private key"))),(0,r.kt)("h2",{id:"run-full-node"},"Run Full Node"),(0,r.kt)("p",null,"The Alaya mainnet was officially launched on October 24, 2020, Beijing time, and the ChainID is 201018; the other is the Alaya development network that is open to developers, and the ChainID is 201030."),(0,r.kt)("p",null,"If you need to join the Alaya mainnet, please refer to ",(0,r.kt)("a",{parentName:"p",href:"#join-the-alaya-mainnet"},"Join the Alaya mainnet"),"."),(0,r.kt)("p",null,"If you need to join the Alaya development network, please refer to ",(0,r.kt)("a",{parentName:"p",href:"#join-the-alaya-development-network"},"Join the Alaya development network"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scan.alaya.network/"},"Alaya Mainnet Blockchain Explorer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devnetscan.alaya.network"},"Alaya Development Network Blockchain Explorer"))),(0,r.kt)("h3",{id:"join-the-alaya-mainnet"},"Join the Alaya Mainnet"),(0,r.kt)("p",null,"Run the following command to join the network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/alaya-node/ && nohup alaya --identity alaya-node --datadir ./data --port 16789 --http.port 6789 --http.api "platon,net,web3,admin,personal" --http --nodekey ./data/nodekey --cbft.blskey ./data/blskey --verbosity 1 --http.addr 127.0.0.1 --syncmode "fast" > ./data/alaya.log 2>&1 &\n')),(0,r.kt)("p",null,"Or you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"service unit")," to manage your ",(0,r.kt)("inlineCode",{parentName:"p"},"alaya")," process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo tee <<EOF >/dev/null /etc/systemd/system/alaya.service\n[Unit]\nDescription=Alaya node service\nAfter=network.target\n\n[Service]\nType=simple\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=alaya\nExecStart=/usr/bin/alaya \\\\\n    --identity alaya-node \\\\\n    --datadir ${HOME}/alaya-node/data \\\\\n    --port 16789 \\\\\n    --http.addr 127.0.0.1 \\\\\n    --http.port 6789 \\\\\n    --http \\\\\n    --http.api "platon,net,web3,admin,personal" \\\\\n    --nodekey ${HOME}/alaya-node/data/nodekey \\\\\n    --cbft.blskey ${HOME}/alaya-node/data/blskey \\\\\n    --verbosity 1 \\\\\n    --syncmode "fast" \nUser=${USER}\nRestart=on-failure\nStartLimitInterval=5\nRestartSec=3\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsudo systemctl daemon-reload\nsudo systemctl enable alaya.service\nsudo systemctl start alaya.service\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--identity"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify network name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--datadir"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify data directory path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--port"),(0,r.kt)("td",{parentName:"tr",align:null},"p2p port number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--http.addr"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify rpc server address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--http.port"),(0,r.kt)("td",{parentName:"tr",align:null},"pecify rpc protocol communication port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--http.api"),(0,r.kt)("td",{parentName:"tr",align:null},"API's offered over the HTTP-RPC interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--http"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable the HTTP-RPC server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--nodekey"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the private key file of the node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--cbft.blskey"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the bls private key file of the node (a non-validator is a full node. This parameter is optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--verbosity"),(0,r.kt)("td",{parentName:"tr",align:null},"Log level, 0: CRIT; 1: ERROR;  2: WARN; 3: INFO; 4: DEBUG; 5: TRACE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--syncmode"),(0,r.kt)("td",{parentName:"tr",align:null},"fast: fast synchronization mode; full: full synchronization mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2013-db.nogc"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable the archive mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--allow-insecure-unlock"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable unlockAccount function")))),(0,r.kt)("p",null,"More parameter meanings can be viewed through the ",(0,r.kt)("inlineCode",{parentName:"p"},"alaya --help")," command."),(0,r.kt)("h4",{id:"mainnet-related-resources"},"Mainnet-related Resources"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Documents or Resources"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alaya binary file"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://download.alaya.network/alaya/platon/0.16.3/alaya"},"https://download.alaya.network/alaya/platon/0.16.3/alaya")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alayakey"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://download.alaya.network/alaya/platon/0.16.3/alayakey"},"https://download.alaya.network/alaya/platon/0.16.3/alayakey")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mtool windows"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://download.alaya.network/alaya/mtool/windows/0.16.2/alaya_mtool.exe"},"https://download.alaya.network/alaya/mtool/windows/0.16.2/alaya_mtool.exe")),(0,r.kt)("td",{parentName:"tr",align:null},"You need to modify the chain ID in the configuration file config.properties to the development network chain ID: 201030")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mtool linux"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://download.alaya.network/alaya/mtool/linux/0.16.2/alaya_mtool.zip"},"https://download.alaya.network/alaya/mtool/linux/0.16.2/alaya_mtool.zip")),(0,r.kt)("td",{parentName:"tr",align:null},"You need to modify the chain ID in the configuration file config.properties to the development network chain ID: 201030")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samurai"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AlayaNetwork/Samurai/releases/download/v8.1.0/samurai-chrome-8.1.0.zip"},"https://github.com/AlayaNetwork/Samurai/releases/download/v8.1.0/samurai-chrome-8.1.0.zip")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"explorer address"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://scan.alaya.network/"},"https://scan.alaya.network/")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"view-node-state"},"View Node State"),(0,r.kt)("p",null,"When Alaya is successfully started, it will automatically establish a connection with the nearest node through the node discovery protocol under normal circumstances. After the connection is successful, block synchronization will be started, so you can check the peers of the node and the increase in the current node block height to determine if you have joined the network."),(0,r.kt)("p",null,"If the key is not generated in advance, the node is automatically generated in the data directory of the node when it is started. If it is generated automatically, only the private key and the BLS private key of the node will be generated, not any other related public key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Enter the Alaya console\nalaya attach http://localhost:6789\n\n## The following commands are executed in the Alaya console\n# View peers of the node\nadmin.peers\n\n# View the current block height\nplaton.blockNumber\n\n# View synchronization state\nplaton.syncing\n\n# Exit the console\nexit\n")),(0,r.kt)("p",null,"If a series of Alaya network nodes appear in the node list and the block height is increasing, then the connection succeeds! (As the new node needs to be synchronized, there may be a delay)."),(0,r.kt)("p",null,"The fast synchronization makes it impossible to query the current block height. When it is synchronized to the latest height, the full synchronization mode will be automatically enabled, and at that time you can view the latest height."),(0,r.kt)("h3",{id:"join-the-alaya-development-network"},"Join the Alaya Development Network"),(0,r.kt)("p",null,"If you are deploying a mainnet node, you can skip the following content."),(0,r.kt)("p",null,"The development network provides a development and test environment for developers or nodes. There may be instability and network reset. The current version of the development network is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.16.2"),"."),(0,r.kt)("h4",{id:"initialize-the-genesis-block"},"Initialize the Genesis Block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the genesis block file genesis.json\ncd ~/alaya-node && wget https://download.alaya.network/alaya/platon/0.16.1/genesis.json\n\n# Initialize the genesis block file\ncd ~/alaya-node && alaya --datadir ./data init genesis.json\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note:"),(0,r.kt)("p",{parentName:"blockquote"},"The prompt of ",(0,r.kt)("inlineCode",{parentName:"p"},"Successfully wrote genesis state")," indicates that the genesis information is synchronized.")),(0,r.kt)("h4",{id:"start-the-validator"},"Start the Validator"),(0,r.kt)("p",null,"Execute the following command to make the validator to join the Alaya development network; if you need to become a validator, please apply for a large amount of test ATP through the follow-up instructions (the development network will be reset from time to time according to the test needs, and the test ATP has no actual value)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd ~/alaya-node/ && nohup alaya --identity alaya-node --datadir ./data --port 16789 --http.port 6789 --http.api "platon,net,web3,admin,personal" --http --nodekey ./data/nodekey --cbft.blskey ./data/blskey --verbosity 1 --rpcaddr 127.0.0.1 --bootnodes enode://48f9ebd7559b7849f80e00d89d87fb92604c74a541a7d76fcef9f2bcc67043042dfab0cfbaeb5386f921208ed9192c403f438934a0a39f4cad53c55d8272e5fb@devnetnode1.alaya.network:16789 --syncmode "fast" > ./data/alaya.log 2>&1 &\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You can also refer to the mainnet configuration ",(0,r.kt)("inlineCode",{parentName:"strong"},"service unit")," file to manage the Alaya process.")),(0,r.kt)("h4",{id:"resources-related-to-the-development-network"},"Resources Related to the Development Network"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Documents or Resources"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alaya binary files"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://download.alaya.network/alaya/platon/0.16.3/alaya"},"https://download.alaya.network/alaya/platon/0.16.3/alaya")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alayakey"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://download.alaya.network/alaya/platon/0.16.2/alayakey"},"https://download.alaya.network/alaya/platon/0.16.2/alayakey")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mtool windows"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://download.alaya.network/alaya/mtool/windows/0.16.2/alaya_mtool.exe"},"https://download.alaya.network/alaya/mtool/windows/0.16.2/alaya_mtool.exe")),(0,r.kt)("td",{parentName:"tr",align:null},"You need to modify the chain ID in the configuration file config.properties to the development network chain ID: 201030")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mtool linux"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://download.alaya.network/alaya/mtool/linux/0.16.2/alaya_mtool.zip"},"https://download.alaya.network/alaya/mtool/linux/0.16.2/alaya_mtool.zip")),(0,r.kt)("td",{parentName:"tr",align:null},"You need to modify the chain ID in the configuration file config.properties to the development network chain ID: 201030")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Samurai"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AlayaNetwork/Samurai/releases/download/v8.1.0/samurai-chrome-8.1.0.zip"},"https://github.com/AlayaNetwork/Samurai/releases/download/v8.1.0/samurai-chrome-8.1.0.zip")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Open RPC URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://47.241.91.2:6789"},"http://47.241.91.2:6789")," and ws://47.241.91.2:6790"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"explorer address"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://devnetscan.alaya.network"},"https://devnetscan.alaya.network")),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);