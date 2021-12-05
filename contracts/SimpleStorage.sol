//SPDX-LICENSE-IDENTIFIER: MIT
pragma solidity ^0.6.0;

contract SimpleStorage {
    uint256 favoriteNumber;

    function ChangeState(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function ViewState() public view returns (uint256) {
        return favoriteNumber;
    }
}
