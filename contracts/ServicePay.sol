// SPDX-License-Identifier:MIT

contract ServicePay{

    uint amount;
    address owner;
    mapping(address => uint) balance;

    constructor(){

    }

    function addAmount(uint _amount) public{
        amount = _amount;
    }

    function receiveBalance(address _balance) public onlySender view {
        balance[_balance];
    }

    modifier onlySender{
        require(owner == msg.sender, 'only sender can receive balance');
        _;
    }

}
