# electrothon
## Proposed System
- We plan to create a product authentication and consumer engagement website that helps in analyzing counterfeit medicines. 
- The main motto of our website is to ~ ensure safe and secure medication for all ~

- We plan to have separate views for Consumer, Manufacturer, and Supplier each. 
- When the manufacturer registers with us for the first time, we get their information like Manufacturing Company name, address, phone number, Government verified license, etc. 
- After verifying the credentials submitted by them we send them a verification mail and get the information related to the Total supply of medicines, Medicine name, the dosage of medicines supplied, Manufacturing Date of medicines, Expiry date of medicines in an excel format. 
- After which we generate QR Codes for the same and they can be downloaded from our website. Then these QR codes are attached with the medicines they distribute. 
- In the supplier login, supplier associated with these , manufacturer should register themselves in our website and provide the details like Supplier Name, Supplying Company name, -Address, Phone number, Government verified license. 
- So, when the supplier gets the medicines from the manufacturer, they can upload the QR Code present in the medicines and can check if the medicine is fake or not. 
- Similarly, the consumer can register in our website and can check the correctness of the medicine by uploading the QR Code image present in the medicine in our website and thus check if the medicine is fake or not. 
- We have use blockchain to store the data and record these transactions. 
- By using local blockchain ganache, we get the addresses of these data and import it to metamask and check the transaction. 
- By doing this we ensure traceability, security, and serializability.

## Tech Stack
### FrontEnd
- React
- Tailwind

### Backend
- Node.js
- Express
- Web3.js

### Database
- MongoDB

### Blockchain
- Ethereum
- Solidity
- Truffle
- Ganache
