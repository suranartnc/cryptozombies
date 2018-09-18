# CryptoZombies

## Installations

```bash
npm install -g truffle
npm install -g ganache-cli
```

## Initialize project with Truffle

```bash
truffle init
```

## Run Ganache

```bash
ganache-cli -p 8545
```

## Compile code

```bash
truffle compile
```

## Deploy code to network created with Ganache

```bash
truffle migrate --network development --reset
```

## Access console of network (Truffle use Web3 to connect to Ganache)

```bash
truffle console --network development
```
