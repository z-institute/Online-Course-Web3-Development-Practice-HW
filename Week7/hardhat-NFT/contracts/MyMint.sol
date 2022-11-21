// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Strings.sol";
// Import Ownable from the OpenZeppelin Contracts library
import "@openzeppelin/contracts/access/Ownable.sol";

// ERC-721A
import "./ERC721A.sol";

contract MyMint is ERC721A, Ownable {
    using Strings for uint256;

    string public baseUri = "";
    string public uriSuffix = ".json";

    bool public enableMint = false;

    event SetBaseURI(address _from);

    constructor(
        string memory name_, // Name of the token
        string memory symbol_ // Symbol of the token
    ) ERC721A(name_, symbol_) {}

    function mint(uint256 quantity) external payable {
        require(enableMint, "Cannot mint");
        _mint(msg.sender, quantity);
    }

    // override
    function _baseURI() internal view virtual override returns (string memory) {
        return baseUri;
    }

    // override start token id from 0 to 1
    function _startTokenId() internal view virtual override returns (uint256) {
        return 1;
    }

    function airdrop(uint256 quantity, address _receiver) public onlyOwner {
        _safeMint(_receiver, quantity);
    }

    function setMint(bool value) public onlyOwner {
        enableMint = value;
    }

    function setBaseUri(string memory uri) public onlyOwner {
        baseUri = uri;
        emit SetBaseURI(msg.sender);
    }

    function setUriSuffix(string memory _uriSuffix) public onlyOwner {
        uriSuffix = _uriSuffix;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(_exists(_tokenId), "URI query for nonexistent token");

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        _tokenId.toString(),
                        uriSuffix
                    )
                )
                : "";
    }
}