// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ArtifactRegistry {
    struct Artifact {
        string email;
        string imageHash;
        string metadata;
    }

    mapping(uint256 => Artifact) public artifacts;
    uint256 public artifactCount;

    function registerArtifact(string memory email, string memory imageHash, string memory metadata) public {
        artifacts[artifactCount] = Artifact(email, imageHash, metadata);
        artifactCount++;
    }

    function getArtifact(uint256 id) public view returns (Artifact memory) {
        return artifacts[id];
    }
}
