// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.2;

contract toggleTrueFalse {
    bool public nowStatus;
    string public viewName;
    event changeStatus(address user, bool nowStatus);
    event newName(address user, string viewName);

    function toggle() public {
        nowStatus = nowStatus == true ? false : true;
        emit changeStatus(msg.sender, nowStatus);
    }

    function setName(string memory name) public {
        viewName = name;
        emit newName(msg.sender, viewName);
    }
}