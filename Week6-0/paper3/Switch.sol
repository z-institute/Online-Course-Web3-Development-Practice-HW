// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.2;

contract Switch {
    bool v = false;
    string name;
    
    constructor() {
        v = false;
        name = "kevin";
    }

    function store(bool _v) public {
        v = _v;
    }

    function retrieve() public view returns (bool){
        return v;
    }

    function setName(string memory _name) public {
        name = _name;
    }

    function getName() public view returns(string memory) {
        return name;
    }
}