// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract GameItems is ERC1155 {
  uint public constant CHARIZARD = 0;
  uint public constant IVYSAUR = 1;
  uint public constant VENUSAUR = 2;
  uint public constant CHARMANDER = 3;

  constructor() ERC1155
    ("https://bafybeihul6zsmbzyrgmjth3ynkmchepyvyhcwecn2yxc57ppqgpvr35zsq.ipfs.dweb.link/{id}.json")
  {
    // 0xB078A6F648C8369b3c8187a7A43edaB7EfAB317D
      _mint(msg.sender, CHARIZARD, 100, "");
      _mint(msg.sender, IVYSAUR, 100, "");
      _mint(msg.sender, VENUSAUR, 100, "");
      _mint(msg.sender, CHARMANDER, 100, "");
  }

  function uri(uint _tokenId) public pure override returns (string memory) {
    return string(
      abi.encodePacked(
        "https://bafybeihul6zsmbzyrgmjth3ynkmchepyvyhcwecn2yxc57ppqgpvr35zsq.ipfs.dweb.link/",
        Strings.toString(_tokenId),
        ".json"
      )
    );
  }
}