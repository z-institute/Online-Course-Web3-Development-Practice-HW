// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.2;

contract Switch {
    bool v = false;
    string public name;
    
    function store(bool _v) public {
        v = _v;
    }

    function retrieve() public view returns (bool){
        return v;
    }

    function viewName() public view returns (string memory) {
        return name;
    }

    function setName(string memory newName) public {
        name = newName;
    }
}