import { ethers } from 'ethers';
import ArtifactABI from '../blockchain/artifacts/contracts/Artifact.sol/Artifact.json';

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

export const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS!,
  ArtifactABI,
  wallet
);