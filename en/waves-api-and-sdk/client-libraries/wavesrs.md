# WavesRS

A [Rust interface](https://github.com/petermz/WavesRs) to the Waves blockchain which can be used to create accounts and sign transactions

# Usage

```rust
extern crate base58;
extern crate waves;

use base58::*;
use std::time::{SystemTime, UNIX_EPOCH};
use waves::account::{PrivateKeyAccount, TESTNET};
use waves::transaction::*;

fn main() {
    let account = PrivateKeyAccount::from_seed("seed");
    println!("my address: {}", account.public_key().to_address(TESTNET).to_string());

    let ts = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs() * 1000;
    let tx = Transaction::new_alias(&account.public_key(), "rhino", TESTNET, 100000, ts);
    println!("id is {}", tx.id().to_string());
    let ptx = account.sign_transaction(tx);
    println!("proofs are {:?}", ptx.proofs.iter().map(|p| p.to_base58()).collect::<Vec<String>>());
}
```



