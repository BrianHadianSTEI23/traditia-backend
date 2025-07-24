import { ethers } from 'ethers';
import ArtifactRegistry from '../../../blockchain/artifacts/contracts/ArtifactsRegistry.sol/ArtifactRegistry.json';

const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/...");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
const contract = new ethers.Contract("deployed_contract_address", ArtifactRegistry.abi, signer);

export { contract };
