export const DOS_ABI = [
  {
    constant: true,
    inputs: [],
    name: "inverseStakeRatio",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_tokenAmount", type: "uint256" },
      { name: "_nodeAddr", type: "address" }
    ],
    name: "delegate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "DOSTOKEN",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getNodeAddrs",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "nodes",
    outputs: [
      { name: "ownerAddr", type: "address" },
      { name: "rewardCut", type: "uint256" },
      { name: "stakedDB", type: "uint256" },
      { name: "selfStakedAmount", type: "uint256" },
      { name: "totalOtherDelegatedAmount", type: "uint256" },
      { name: "accumulatedReward", type: "uint256" },
      { name: "accumulatedRewardRate", type: "uint256" },
      { name: "pendingWithdrawToken", type: "uint256" },
      { name: "pendingWithdrawDB", type: "uint256" },
      { name: "lastStartTime", type: "uint256" },
      { name: "lastStopTime", type: "uint256" },
      { name: "running", type: "bool" },
      { name: "description", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "accumulatedRewardRate",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "ONEYEAR",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_nodeAddr", type: "address" }],
    name: "nodeTryDelete",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_nodeAddr", type: "address" }],
    name: "delegatorClaimReward",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_nodeAddr", type: "address" },
      { name: "_newTokenAmount", type: "uint256" },
      { name: "_newDropburnAmount", type: "uint256" },
      { name: "_newCut", type: "uint256" }
    ],
    name: "updateNodeStaking",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getCurrentAPR",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalStakedTokens",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_quota", type: "uint256" }],
    name: "setDropBurnMaxQuota",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_nodeAddr", type: "address" }],
    name: "nodeStart",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_nodeAddr", type: "address" }],
    name: "nodeWithdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_tokenAmount", type: "uint256" },
      { name: "_dropburnAmount", type: "uint256" },
      { name: "_nodeAddr", type: "address" }
    ],
    name: "nodeUnbond",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "nodeAddr", type: "address" }],
    name: "getNodeRewardTokens",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_maxStake", type: "uint256" }],
    name: "setMaxStakePerNode",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "addressBridge",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "rewardRateDelta",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "nodeAddr", type: "address" }],
    name: "getNodeUptime",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_nodeAddr", type: "address" },
      { name: "_tokenAmount", type: "uint256" },
      { name: "_dropburnAmount", type: "uint256" },
      { name: "_rewardCut", type: "uint256" },
      { name: "_desc", type: "string" }
    ],
    name: "newNode",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_nodeAddr", type: "address" }],
    name: "delegatorChekcReward",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_minStake", type: "uint256" }],
    name: "setMinStakePerNode",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "bridgeAddr",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "DBDECIMAL",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "circulatingSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_tokenAmount", type: "uint256" },
      { name: "_nodeAddr", type: "address" }
    ],
    name: "delegatorUnbond",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "maxStakePerNode",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "address" }
    ],
    name: "delegators",
    outputs: [
      { name: "delegatedNode", type: "address" },
      { name: "delegatedAmount", type: "uint256" },
      { name: "accumulatedReward", type: "uint256" },
      { name: "accumulatedRewardRate", type: "uint256" },
      { name: "pendingWithdraw", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_nodeAddr", type: "address" }],
    name: "nodeUnregister",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "updateGlobalRewardRate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "nodeAddr", type: "address" }],
    name: "isValidStakingNode",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_duration", type: "uint256" }],
    name: "setUnbondDuration",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_newSupply", type: "uint256" }],
    name: "setCirculatingSupply",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_nodeAddr", type: "address" }],
    name: "nodeClaimReward",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "nodeAddrs",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "address" }
    ],
    name: "nodeRunners",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "lastRateUpdatedTime",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_nodeAddr", type: "address" }],
    name: "delegatorWithdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "unbondDuration",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "DOSDECIMAL",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_nodeAddr", type: "address" }],
    name: "nodeStop",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "stakingRewardsVault",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "_delegator", type: "address" },
      { name: "_nodeAddr", type: "address" }
    ],
    name: "getDelegatorRewardTokens",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "DBTOKEN",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "minStakePerNode",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "dropburnMaxQuota",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { name: "_dostoken", type: "address" },
      { name: "_dbtoken", type: "address" },
      { name: "_vault", type: "address" },
      { name: "_bridgeAddr", type: "address" }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldQuota", type: "uint256" },
      { indexed: false, name: "newQuota", type: "uint256" }
    ],
    name: "UpdateDropBurnMaxQuota",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldDuration", type: "uint256" },
      { indexed: false, name: "newDuration", type: "uint256" }
    ],
    name: "UpdateUnbondDuration",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldCirculatingSupply", type: "uint256" },
      { indexed: false, name: "newCirculatingSupply", type: "uint256" }
    ],
    name: "UpdateCirculatingSupply",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldMinStakePerNode", type: "uint256" },
      { indexed: false, name: "newMinStakePerNode", type: "uint256" }
    ],
    name: "UpdateMinStakePerNode",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldMaxStakePerNode", type: "uint256" },
      { indexed: false, name: "newMaxStakePerNode", type: "uint256" }
    ],
    name: "UpdateMaxStakePerNode",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "owner", type: "address" },
      { indexed: false, name: "nodeAddress", type: "address" },
      { indexed: false, name: "selfStakedAmount", type: "uint256" },
      { indexed: false, name: "stakedDB", type: "uint256" },
      { indexed: false, name: "rewardCut", type: "uint256" }
    ],
    name: "LogNewNode",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "sender", type: "address" },
      { indexed: false, name: "total", type: "uint256" },
      { indexed: false, name: "nodeAddr", type: "address" }
    ],
    name: "DelegateTo",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "sender", type: "address" },
      { indexed: false, name: "total", type: "uint256" }
    ],
    name: "RewardWithdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "sender", type: "address" },
      { indexed: false, name: "tokenAmount", type: "uint256" },
      { indexed: false, name: "dropburnAmount", type: "uint256" },
      { indexed: false, name: "nodeAddr", type: "address" }
    ],
    name: "Unbond",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "previousOwner", type: "address" }],
    name: "OwnershipRenounced",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "previousOwner", type: "address" },
      { indexed: true, name: "newOwner", type: "address" }
    ],
    name: "OwnershipTransferred",
    type: "event"
  }
];
// export const DOS_CONTRACT_ADDRESS = "0x214e79c85744CD2eBBc64dDc0047131496871bEe"
export const DOS_CONTRACT_ADDRESS =
  "0x9f9a02B42F191C60c52c903a21E863F4BbC8E709";
