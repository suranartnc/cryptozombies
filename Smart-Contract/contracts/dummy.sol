pragma solidity ^0.4.23;

contract Dummy {
    function greet(string _message) external pure returns (string message) {
        return _message;
    }
}