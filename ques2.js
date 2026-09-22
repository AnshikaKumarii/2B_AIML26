 class Bankaccount{
            constructor(accountno,holdername,balance){
                this.accountno=accountno;
                this.holdername=holdername;
                this.balance=balance;
            }
            deposit(amount){
                this.balance+=amount;
                console.log(this.balance);

            }
            withdraw(amount){
                if(amount<=this.balance){
                    this.balance-=amount;
                    console.log(this.balance)
                }else{
                    console.log("insufficent balance");
                }
            }
            displaybalance(){
                console.log(this.balance);
                console.log(this.holdername);
                console.log(this.accountno);
            }
            static bankinfo(){
               console.log("bank name :HDFC")
            }
        };
        let s1=new Bankaccount(10192,"vikas",102090);
        let s2=new Bankaccount(10203,"vivek",2739073);
        s1.deposit(28);
        s2.deposit(273873);
        s1.withdraw(2730933);
        s2.withdraw(287367);
        s1.displaybalance();
        s2.displaybalance();
        // s1.bankinfo();
        // s2.bankinfo();

        Bankaccount.bankinfo();