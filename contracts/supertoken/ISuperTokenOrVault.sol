pragma solidity 0.8.13;

interface ISuperTokenOrVault {
    function inbound(
        uint32 siblingChainSlug_,
        bytes memory payload_
    ) external payable;
}
