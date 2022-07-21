
public class Main {
    public static void main(String[] args) {
        Cliente kleber = new Cliente();
        kleber.setNomeCliente("Kleber de Alencar Coelho");

        Conta cc = new ContaCorrente(kleber);
        Conta poupanca = new ContaPoupanca(kleber);


        cc.depositar(0);
        cc.transferir(100, poupanca);

        cc.imprimirExtrato();
        poupanca.imprimirExtrato();

    }
}
