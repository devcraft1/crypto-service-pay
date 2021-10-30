// SPDX-License-Identifier:MIT

pragma solidity >=0.4.22 <0.9.0;

contract ServicePay{

    uint amount;
    address owner;
    mapping(address => uint) balance;

    constructor(){

    }

    function addAmount(uint _amount) public{
        amount = _amount;
    }

    function payForService()public{

    }

    function receiveBalance(address _balance) public onlySender view {
        balance[_balance];
    }

    modifier onlySender{
        require(owner == msg.sender, 'only sender can receive balance');
        _;
    }

}
