export default {
    'rinkeby': {
        DOS_CONTRACT_ADDRESS: process.env.REACT_APP_DOS_CONTRACT_ADDRESS_RINKEBY,
        DB_CONTRACT_ADDRESS: process.env.REACT_APP_DB_CONTRACT_ADDRESS_RINKEBY,
        DOSTOKEN_CONTRACT_ADDRESS: process.env.REACT_APP_DOSTOKEN_CONTRACT_ADDRESS_RINKEBY,
        BLOCK_NUMBER: process.env.REACT_APP_BLOCK_NUMBER_RINKEBY,
        NETWORK: process.env.REACT_APP_NETWORK_RINKEBY,
        PROVIDER: process.env.REACT_APP_PROVIDER_RINKEBY
    },
    'mainnet': {
        DOS_CONTRACT_ADDRESS: process.env.REACT_APP_DOS_CONTRACT_ADDRESS_MAINNET,
        DB_CONTRACT_ADDRESS: process.env.REACT_APP_DB_CONTRACT_ADDRESS_MAINNET,
        DOSTOKEN_CONTRACT_ADDRESS: process.env.REACT_APP_DOSTOKEN_CONTRACT_ADDRESS_MAINNET,
        BLOCK_NUMBER: process.env.REACT_APP_BLOCK_NUMBER_MAINNET,
        NETWORK: process.env.REACT_APP_NETWORK_MAINNET,
        PROVIDER: process.env.REACT_APP_PROVIDER_MAINNET
    }
}