
public abstract class Conta implements IConta {

    private static final int AGENCIA_PADRAO = 1 ;
    private static int SEQUENCIAL = 1;
    protected int numAgencia;
    protected int numConta;
    protected double saldo;

    protected Cliente cliente;



    public Conta(Cliente cliente) {
        this.numAgencia = Conta.AGENCIA_PADRAO;
        this.numConta = SEQUENCIAL++;
        this.cliente = cliente;


    }

    @Override
    public void sacar(double valor) {
        saldo -= valor;

    }

    @Override
    public void depositar(double valor) {
        saldo += valor;

    }

    @Override
    public void transferir(double valor, Conta contaDestino) {
        this.sacar(valor);
        contaDestino.depositar(valor);

    }


    public int getNumAgencia() {
        return numAgencia;
    }

    public int getNumConta() {
        return numConta;
    }

    public double getSaldo() {
        return saldo;
    }



    protected void imprimirInformacoesComuns() {
        System.out.printf("Titular: %s%n",this.cliente.getNomeCliente());
        System.out.printf("Agencia: %d%n",this.numAgencia);
        System.out.printf("Numero Conta: %d%n",this.numConta);
        System.out.printf("Saldo: %.2f%n",this.saldo);
    }


}
