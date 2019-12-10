const messages = {
    'ChangeLang': '切换中文站点',
    /**navgation */
    'Title.nodelist': 'Node List',
    'Title.explorer': 'Explorer',
    'Title.nodedetail': 'Node Detail',
    'Title.myaccount': 'My Account',
    /*metamask*/
    'MetaMask.connected': 'Connected',
    'MetaMask.connectwallet': 'Connect Wallet',
    /*common */
    'Node.active': 'Active',
    'Node.inactive': 'Inactive',
    'Events.Loading': '{type, select, withdraw {Withdraw} claimreward {ClaimReward} unregister {Unregister} upgrade {Upgrade} unbond{Unbond} delegate{Delegate}}:wait for confirmation:{hash}',
    'Events.Success': '{type, select, withdraw {Withdraw} claimreward {ClaimReward} unregister {Unregister} upgrade {Upgrade} unbond{Unbond} delegate{Delegate}}:success (confirmed block {blockNumber})',
    /* NodeList */
    'Table.Column.NodeList.Name': 'Name',
    'Table.Column.NodeList.Node': 'Node',
    'Table.Column.NodeList.Status': 'Status',
    'Table.Column.NodeList.SelfStaked': 'SelfStaked',
    'Table.Column.NodeList.Delegated': 'Delegated',
    'Table.Column.NodeList.RewardCut': 'Reward Cut',
    'Table.Column.NodeList.Uptime': 'Uptime',
    'Table.Column.NodeList.MyDelegation': 'My Delegation',
    'Table.Column.NodeList.MyRewards': 'My Rewards',

    'Tooltip.selfStaked': 'The Amount of DOS this node staked.',
    'Tooltip.delegate': 'Total Amount of DOS delegated towards this node.',
    'Tooltip.rewartcut': 'The percentage of DOS token this node will keep from user’s staking rewards.',
    'Tooltip.uptime': 'Total active time of this node.',
    'Tooltip.myDelegation': 'The amount of DOS you delegated towards this node.',
    'Tooltip.myRewards': 'The amount of rewards you get from this node.',
    'Tooltip.OnlyShowTheNodesRelatedToMe': 'Only Show The Nodes Related To Me',
    'Tooltip.searchnodeaddress': 'search node address',
    'Tooltip.CreateANode': 'Create a Node',

    'Form.Title.CreateNode': 'Staking a new node',
    'Form.Ok.Create': 'Create',
    'Form.Cancel.Create': 'Cancel',
    'Form.Error.tokenAmount': 'Please enter a valid number',
    'Form.Error.tokenAmount2': 'Please enter a amount bigger than 100,000',
    'Form.Error.cutRate': 'Please enter a valid number',
    'Form.Error.cutRate2': 'Please enter a valid percentage',

    'Form.Lable.Name': 'Name',
    'Form.Message.InputName': 'Please name your node',
    'Form.Lable.Node': 'Node Address',
    'Form.Message.InputNodeAddress': "Please enter your node address",
    'Form.Lable.StakeingAmount': 'Staking Amount',
    'Form.Message.InputStakeingAmount': "Please enter your staking amount",
    'Form.Placeholder.InputStakeingAmount': "minimum 10,000.00",
    'Form.Lable.dbAmount': 'Drop Burn Amount(Optional)',
    'Form.Message.InputdbAmount': "Please enter your burn token amount",
    'Form.Lable.cutRate': 'Reward Cut Rate',
    'Form.Message.InputcutRate': "Please enter your reward cut rate",


    /** NodeDetail**/

    'Form.Message.OwnerWithdraw': 'No enough DOS to withdraw',
    'Form.Message.DelegatorWithdraw': 'No enough DOS to withdraw',
    'Form.Message.OwnerClaimReward': 'No enough Rewards to claim',
    'Form.Message.DelegatorClaimReward': 'No enough DOS to withdraw',
    'Tooltip.NodeDetail.MyDelegation': 'My Delegation',
    'Tooltip.NodeDetail.MyStakingToken': 'My Staking Token',
    'Tooltip.NodeDetail.DropBurnToken': 'Drop Burn Token',
    'Tooltip.NodeDetail.WithdrawalFrozen': 'Withdrawal(Frozen)',
    'Tooltip.NodeDetail.WithdrawalDropBurnFrozen': 'Withdrawal Drop Burn(Frozen)',
    'Tooltip.NodeDetail.Withdraw': 'Withdraw',
    'Tooltip.NodeDetail.MyRewards': 'My Rewards',
    'Tooltip.NodeDetail.NodeAddress': 'Node Address',
    'Tooltip.NodeDetail.NodeDescription': 'Node Description',
    'Tooltip.NodeDetail.NodeSelt-Staked': 'Node Selt-Staked',
    'Tooltip.NodeDetail.TotalDelegated': 'Total Delegated',
    'Tooltip.NodeDetail.RewardCut': 'Reward Cut',
    'Tooltip.NodeDetail.Uptime': 'Uptime',
    'Tooltip.NodeDetail.Days': 'days',
    'Tooltip.NodeDetail.UnBond': 'UnBond',
    'Tooltip.NodeDetail.Delegate': 'Delegate',
    'Tooltip.NodeDetail.Upgrate': 'Upgrate',
    'Form.Button.Submit': 'Submit',

    'Form.Lable.DelegateAmount': 'Delegate Amount',
    'Form.Lable.UnbondAmount': 'Unbond Amount',
    'Form.Lable.DropBurnAmount': 'Drop Burn Amount',
    'Form.Lable.AddDelegateAmount': 'Add Delegate Amount',
    'Form.Lable.AddDropBurnAmount': 'Add Drop Burn Amount',
    'Form.Lable.UpdateRewardCut': 'Update Reward Cut',
    'Form.Message.InputUnbondAmount': "Please input the unbond token amount",
    'Form.Message.InputDropBurnAmount': "Please input drop burn token amount",
    'Form.Message.InputDelegateAmount': "Please input the delegate token amount!",
    'Form.Message.InputRewardCut': "Please input the new reward cut",

    'Tooltip.MarketInfo.InterestRate': 'Interest Rate',
    'Tooltip.MarketInfo.NumberOfStakedToken': 'Number of Staked Token',
    "Tooltip.MarketInfo.PriceOfDOS": 'Price of DOS',
    'Tooltip.Search.placeholder': 'Search by Event, RequestId, GroupId and Address',
    'Form.Button.Search': 'Search',
    'Table.Column.Explorer.TxHash': 'Tx Hash',
    'Table.Column.Explorer.Blocks': 'Blocks',
    'Table.Column.Explorer.EventLog': 'Event Log',
    'Table.Column.Explorer.Address': 'Address',
    'Table.Column.Explorer.Balance': 'Balance',
    'Table.Column.Explorer.RegisterState': 'Register State',
    'Table.Column.Explorer.ActiveGroups': 'Active Groups',
    'Table.Column.Explorer.ExpiredGroups': 'Expired Groups',
    'Table.Column.Explorer.GroupInfo': 'Group Info',
    'Table.Column.Explorer.GroupId': 'Group Id',
    'Table.Column.Explorer.AcceptedBlockNumber': 'Accepted Block Number',
    'Table.Column.Explorer.DisresolvedBlockNumber': 'Disresolved Block Number',
    'Table.Column.Explorer.UrlRequests': 'Url Requests',
    'Table.Column.Explorer.RandomRequests': 'Random Requests',
    'Table.Column.Explorer.GroupPublickKey': 'Group Publick Key',
    'Table.Column.Explorer.GroupNodeIds': 'Group NodeIds',

    'Table.Column.Explorer.RequestInfo': 'Request Info',
    'Table.Column.Explorer.RequestId': 'Request Id',
    'Table.Column.Explorer.DispatchedGroupId': 'Dispatched Group Id',
    'Table.Column.Explorer.Submitter': 'Submitter',
    'Table.Column.Explorer.SubmittedBlockNumber': 'Submitted Block Number',
    'Table.Column.Explorer.SubmittedTxHash': 'Submitted TxHash',
    'Table.Column.Explorer.Message': 'Message',
    'Table.Column.Explorer.Signature': 'Signature',
    'Table.Column.Explorer.PublickKey': 'Publick Key',
    'Table.Column.Explorer.LastSystemRandomness': 'Last System Randomness',
    'Table.Column.Explorer.UserSeed': 'User Seed',
    'Table.Column.Explorer.Pass': 'Pass',

    /**MyAccount */


    'Tooltip.MyAccount.AccountBalance': 'Account Balance',
    'Tooltip.MyAccount.TotalDelegated': 'Total Delegated',
    'Tooltip.MyAccount.MyRewards': 'My Rewards',
    'Tooltip.MyAccount.Unbondedtokens': 'Unbonded tokens',
    'Table.Column.Activites.AccountActivity': 'Account Activity',
    'Table.Column.Activites.Time': 'Time',
    'Table.Column.Activites.Action': 'Action',
    'Table.Column.Activites.TxHash': 'Tx Hash',

    'Tooltip.Activites.Pagnation': 'Latest {pageSize} events'
}
export default messages