/**
 * SPDX-License-Identifier: UNLICENSED
 */
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PoToken is ERC20 {
    constructor() ERC20("PoToken", "POT") {
        // todo
    }

    function freeMint(address account, uint256 amount) public {
        _mint(account, amount);
    }

    function paidMint(address account, uint256 amount) public payable  {
        require(msg.value == 0.1 ether * amount);
        _mint(account, amount);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function withdraw() public {
        payable(msg.sender).transfer(address(this).balance);
    }

}