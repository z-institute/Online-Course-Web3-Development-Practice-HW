// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ChatRoomV2 {
    string public announcement;
    uint256 public announcementLastPaidVal;
    uint256 public announcementLastPaidValInPoToken;
    ERC20 public poToken;

    mapping(address => string[]) public userToMsgs;

    event newMessage(address user, string message);

    constructor (address poTokenAddr){
        poToken = ERC20(poTokenAddr);
    }

    function newMsg(string memory str) public {
        userToMsgs[msg.sender].push(str);
        emit newMessage(msg.sender, str);
    }
    function showLastestMsg(uint256 len, address user) public view returns (string[] memory) {
        require(len != 0 && user != address(0), "Input not valid");

        uint256 totalLen = userToMsgs[user].length;
        uint256 finalLen = totalLen > len ? len : totalLen;
        string[] memory retMsgs = new string[](finalLen); 
        if(finalLen == 0) return retMsgs;

        uint256 index = totalLen - 1;
        uint256 k = 0;
        while(index >= 0){
            retMsgs[k] = userToMsgs[user][index];
            if(index > 0) index--;
            k++;
            if(k == finalLen) break;
        }
        return retMsgs;
    }
    function newAnnouncement(string memory str) public payable {
        require(msg.value > announcementLastPaidVal, "Not enough fund");
        announcementLastPaidVal = msg.value;
        announcement = str;
    }
    function newAnnouncementPoToken(string memory str, uint256 amount) public {
        require(amount > announcementLastPaidValInPoToken, "Not enough fund");
        poToken.transferFrom(msg.sender, address(this), amount);
        announcementLastPaidValInPoToken = amount;
        announcement = str;
    }
}