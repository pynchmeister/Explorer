const messages = {
    'ChangeLang': 'English',
    'Title.staking': '质押',
    'Title.nodelist': '节点列表',
    'Title.explorer': '浏览器',
    'Title.nodedetail': '节点详情',
    'Title.myaccount': '我的账户',
    'Wallet.connected': '退出登陆',
    'Wallet.connectwallet': '登陆钱包',
    'Wallet.Title.NoWalletInstalled': '未安装钱包',
    'Wallet.Tips.InstallWallet': '您需要下载钱包软件来参与质押',
    'Node.active': '在线',
    'Node.inactive': '离线',
    'Events.Loading': '{type, select, approve {批准} withdraw {提取} claimreward {提取奖励} unregister {注销} update {更新} unbond {赎回} delegate {委托质押}} 交易哈希 {hash} 等待确认',
    'Events.Success': '{type, select, approve {批准} withdraw {提取} claimreward {提取奖励} unregister {注销} update {更新} unbond {赎回} delegate {委托质押}} 成功(确认区块 {blockNumber})',

    'Table.Column.NodeList.Name': '名称',
    'Table.Column.NodeList.Node': '地址',
    'Table.Column.NodeList.Status': '状态',
    'Table.Column.NodeList.SelfStaked': '节点质押数',
    'Table.Column.NodeList.Delegated': '受委托数',
    'Table.Column.NodeList.RewardCut': '佣金比例',
    'Table.Column.NodeList.Uptime': '在线时长',
    'Table.Column.NodeList.MyDelegation': '我的质押',
    'Table.Column.NodeList.MyRewards': '可提取奖励',

    'Tooltip.selfStaked': '节点自己质押的DOS代币数量',
    'Tooltip.delegate': '此节点受其他用户委托质押的总代币数量',
    'Tooltip.rewartcut': '节点从用户委托质押的代币所产生的奖励中抽取的百分比',
    'Tooltip.uptime': '节点总在线时间',
    'Tooltip.myDelegation': '您质押给此节点的DOS代币数量',
    'Tooltip.myRewards': '您从此节点处得到的奖励总数',
    'Tooltip.OnlyShowTheNodesRelatedToMe': '只显示与我相关的节点',
    'Tooltip.searchnodeaddress': '按节点地址搜索',
    'Tooltip.CreateANode': '创建新节点',
    'Form.Title.CreateNode': '创建新节点',
    'Form.Ok.Create': '创建',
    'Form.Cancel.Create': '取消',
    'Form.Error.tokenAmount': '请输入有效数字',
    'Form.Error.tokenAmount2': '请输入大等于800,000的数量',
    'Form.Error.cutRate': '请输入有效数字',
    'Form.Error.cutRate2': '请输入有效百分比数字',


    'Form.Lable.Name': '名字',
    'Form.Message.InputName': '请命名您的节点',
    'Form.Lable.Node': '节点地址',
    'Form.Message.InputNodeAddress': "请输入您的节点地址",
    'Form.Lable.StakingAmount': '质押数量',
    'Form.Message.InputStakeingAmount': "请输入您的质押数量",
    'Form.Placeholder.InputStakeingAmount': "最小800,000",
    'Form.Lable.dbAmount': 'DropBurn数量 (选填，如果您有DropBurn代币的话)',
    'Form.Message.InputdbAmount': "请输入您的DropBurn代币数量",
    'Form.Lable.cutRate': '佣金比例',
    'Form.Message.InputcutRate': "请输入您的节点佣金比例",

    /** NodeDetail**/

    'Form.Message.OwnerWithdraw': '没有足够的DOS代币可以提取',
    'Form.Message.DelegatorWithdraw': '没有足够的DOS代币可以提取',
    'Form.Message.OwnerClaimReward': '没有足够的奖励可以提取',
    'Form.Message.DelegatorClaimReward': '没有足够的DOS代币可以提取',
    'Tooltip.NodeDetail.MyDelegation': '我的委托',
    'Tooltip.NodeDetail.MyStaking': '我的质押',
    'Tooltip.NodeDetail.DropBurnToken': 'DropBurn 数量',
    'Tooltip.NodeDetail.WithdrawalFrozen': '可提取 / 赎回中',
    'Tooltip.NodeDetail.WithdrawalDropBurnFrozen': '可提取DropBurn / 赎回中',
    'Tooltip.NodeDetail.Withdraw': '提取',
    'Tooltip.NodeDetail.Claim': '提取奖励',
    'Tooltip.NodeDetail.MyRewards': '可提取奖励',
    'Tooltip.NodeDetail.NodeAddress': '节点地址',
    'Tooltip.NodeDetail.NodeDescription': '节点描述',
    'Tooltip.NodeDetail.NodeSelt-Staked': '节点质押',
    'Tooltip.NodeDetail.TotalDelegated': '总委托数',
    'Tooltip.NodeDetail.RewardCut': '佣金比例',
    'Tooltip.NodeDetail.Uptime': '在线时长',
    'Tooltip.NodeDetail.Days': '天',
    'Tooltip.NodeDetail.Unbond': '赎回',
    'Tooltip.NodeDetail.Delegate': '委托',
    'Tooltip.NodeDetail.Update': '更新节点',

    'Form.Button.Submit': '提交',
    'Form.Lable.DelegateAmount': '委托质押数量',
    'Form.Lable.UnbondAmount': '赎回7天后方可提取',
    'Form.Lable.DropBurnAmount': 'DropBurn数量',
    'Form.Lable.AddDelegateAmount': '增加委托质押数量',
    'Form.Lable.AddDropBurnAmount': '增加DropBurn数量',
    'Form.Lable.UpdateRewardCut': '更新佣金比例',
    'Form.Message.InputUnbondAmount': "请输入赎回数量",
    'Form.Message.InputDropBurnAmount': "请输入DropBurn代币数量",
    'Form.Message.InputDelegateAmount': "请输入委托质押数量",
    'Form.Message.InputRewardCut': "请输入新的佣金比例",


    /** Explorer**/

    'Tooltip.MarketInfo.InterestRate': '当前年利率',
    'Tooltip.MarketInfo.NumberOfStakedToken': '总质押数',
    "Tooltip.MarketInfo.PriceOfDOS": '当前价格',
    'Tooltip.Search.placeholder': '按事件、请求Id、分组号、节点地址等搜索',
    'Form.Button.Search': '搜索',
    'Table.Column.Explorer.TxHash': '交易哈希',
    'Table.Column.Explorer.Blocks': '区块',
    'Table.Column.Explorer.EventLog': '事件日志',
    'Table.Column.Explorer.Address': '地址',
    'Table.Column.Explorer.Balance': '余额',
    'Table.Column.Explorer.RegisterState': '注册状态',
    'Table.Column.Explorer.ActiveGroups': '活跃组',
    'Table.Column.Explorer.ExpiredGroups': '过期组',
    'Table.Column.Explorer.GroupInfo': '组信息',
    'Table.Column.Explorer.GroupId': '组Id',
    'Table.Column.Explorer.AcceptedBlockNumber': '接受的区块号',
    'Table.Column.Explorer.DissolvedBlockNumber': '组解散所在的区块号',
    'Table.Column.Explorer.UrlRequests': '链外数据源请求',
    'Table.Column.Explorer.RandomRequests': '链外随机数请求',
    'Table.Column.Explorer.GroupPublickKey': '组的公钥',
    'Table.Column.Explorer.GroupNodeIds': '分组的节点Id',

    'Table.Column.Explorer.RequestInfo': '预言机请求',
    'Table.Column.Explorer.RequestId': '请求Id',
    'Table.Column.Explorer.DispatchedGroupId': '处理预言机请求的组Id',
    'Table.Column.Explorer.Submitter': '提交节点',
    'Table.Column.Explorer.SubmittedBlockNumber': '提交数据上链的区块号',
    'Table.Column.Explorer.SubmittedTxHash': '提交数据上链的交易哈希',
    'Table.Column.Explorer.Message': '消息',
    'Table.Column.Explorer.Signature': '签名',
    'Table.Column.Explorer.PublicKey': '公钥',
    'Table.Column.Explorer.LastSystemRandomness': '最新系统随机数',
    'Table.Column.Explorer.UserSeed': '用户提供的随机种子(可选)',
    'Table.Column.Explorer.Pass': '通过',


    /**MyAccount */

    'Tooltip.MyAccount.AccountBalance': '账户余额',
    'Tooltip.MyAccount.TotalDelegated': '我的总质押',
    'Tooltip.MyAccount.MyRewards': '可提取奖励',
    'Tooltip.MyAccount.Unbondingtokens': '可提取 / 赎回中',
    'Table.Column.Activites.AccountActivity': '账户活动',
    'Table.Column.Activites.Time': '时间',
    'Table.Column.Activites.Action': '动作',
    'Table.Column.Activites.TxHash': '交易哈希',

    'Tooltip.Explorer.Pagnation': '最近 {pageSize} 个事件'
}
export default messages
