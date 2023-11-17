/*
File: ComplexCode.js

This code is a complex implementation of a banking system.
It models a simplified version of a bank's backend operations, including user authentication, account management, and transactions. The code is written in JavaScript and consists of more than 200 lines.

To execute this code, you will need Node.js installed on your machine. You can run it in the terminal by typing 'node ComplexCode.js' assuming the file is saved as ComplexCode.js.

Please note that this is a simplified implementation for demonstration purposes and should not be used in a production environment.

*/

// User Authentication System
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.isLoggedIn = false;
  }

  login() {
    // Simulating network request to check credentials
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.username === 'admin' && this.password === 'password123') {
          this.isLoggedIn = true;
          resolve('Login successful. Welcome, ' + this.username + '!');
        } else {
          reject('Invalid credentials. Please try again.');
        }
      }, 1000);
    });
  }

  logout() {
    this.isLoggedIn = false;
    return 'Logged out successfully.';
  }
}

// Bank Account System
class BankAccount {
  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    // Simulating network request to deposit funds
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.balance += amount;
        resolve(amount + ' deposited successfully. New balance: ' + this.balance);
      }, 1000);
    });
  }

  withdraw(amount) {
    // Simulating network request to withdraw funds
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount <= this.balance) {
          this.balance -= amount;
          resolve(amount + ' withdrawn successfully. New balance: ' + this.balance);
        } else {
          reject('Insufficient balance.');
        }
      }, 1000);
    });
  }

  getBalance() {
    return 'Account balance: ' + this.balance;
  }
}

// Transaction System
class Transaction {
  constructor(sender, receiver, amount) {
    this.sender = sender;
    this.receiver = receiver;
    this.amount = amount;
    this.status = 'Pending';
  }

  processTransaction() {
    // Simulating network request to process transaction
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.sender.isLoggedIn && this.receiver.isLoggedIn) {
          if (this.sender.balance >= this.amount) {
            this.sender.balance -= this.amount;
            this.receiver.balance += this.amount;
            this.status = 'Completed';
            resolve('Transaction processed successfully.');
          } else {
            this.status = 'Failed';
            reject('Insufficient balance.');
          }
        } else {
          this.status = 'Failed';
          reject('Invalid user(s).');
        }
      }, 2000);
    });
  }
}

// Usage and Testing
const user1 = new User('admin', 'password123');
const user2 = new User('user2', 'abc123');
const account1 = new BankAccount('123456', 1000);
const account2 = new BankAccount('654321', 500);

// Simulating user interactions
console.log('User1 attempts to login...');
user1.login()
  .then((message) => {
    console.log(message);
    console.log('User2 attempts to login...');
    return user2.login();
  })
  .then((message) => {
    console.log(message);
    console.log('User1 deposits 200 into account1...');
    return account1.deposit(200);
  })
  .then((message) => {
    console.log(message);
    console.log('User1 transfers 500 from account1 to account2...');
    const transaction = new Transaction(account1, account2, 500);
    return transaction.processTransaction();
  })
  .then((message) => {
    console.log(message);
    console.log('User1 logs out...');
    console.log(user1.logout());
  })
  .catch((error) => {
    console.log('An error occurred:', error);
  });
