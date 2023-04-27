"HealthData's Blockchain Solution: A Secure Haven for Your Health Records"

Are you tired of struggling to keep your medical records organized and accessible when you need them? Do you worry about the security of your health data and the hassle of insurance claims? Introducing HealthData Management App, a revolutionary solution for securely storing and managing your medical records using blockchain technology.

With our app, you can easily store all your medical records in one convenient location, accessible from your computer. Our cutting-edge blockchain technology ensures that your data is tamper-proof and always accessible when you need it. Say goodbye to carrying physical copies of your prescriptions, x-rays, and blood reports. Our app allows you to access all of your medical information with ease, whenever and wherever you need it.

But that's not all. The HealthData Management App also makes it easy to book appointments with healthcare providers and process payments safely and securely. With just a few clicks, you can schedule an appointment with your desired doctor and pay for their services directly through the app.

Our technology stack includes Solidity, Hardhat, Remix IDE, React.js, Pinata, Ipfs, Axios, and React routing. The logic behind every function, such as adding medical records, allowing access, displaying records, updating, canceling, and displaying appointments, is done with the help of Solidity, compiled and tested on Remix IDE.

Moving further, we have developed our frontend completely using React.js, in which we have a library called ether.js that helps in interacting with our Smartcontract. To deploy our Smartcontract on the blockchain, we used Google Cloud and AMD Instance to create a Geth node on the virtual machine that created a private blockchain and local RPC server. After linking our accounts to Metamask and transferring some ETH to our account, we uploaded our image from the frontend and uploaded it on the blockchain.

Here, we used the add function, where the contract accepts a string URL and not the whole image, so we uploaded the image on IPFS using Pinata, a decentralized storage. To interact with Pinata, we used a React.js library called Axios, which helped us to upload and display our medical records.

After adding our image on the private blockchain, it becomes immutable and cannot be tampered with. If your medical provider wants to look at your medical records, you, as the owner of the records, can share the access with the medical provider. We have also added more functions for storing the data of appointments into an array, which is mapped to the address of the patient and eventually called by the doctor when required. Furthermore, our app also includes a pay function, where you can pay for medical services with a click of a button.

In conclusion, HealthData Management App is the solution to your medical record organization and security woes. With our use of blockchain technology and our efficient technology stack, we provide a seamless and secure experience for managing your medical records, booking appointments, and processing payments.


