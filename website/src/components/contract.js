import Healthdata from "../artifacts/contracts/Healthdata.sol/Healthdata.json";
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contractAddress = "0xE0b31d025fcE916650926c9F3FeeD97053163AF2";
const contract = new ethers.Contract(contractAddress, Healthdata.abi, signer);

export default contract;
