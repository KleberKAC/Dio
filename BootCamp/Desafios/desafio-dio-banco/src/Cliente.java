
public class Cliente {

    private String nomeCliente;
    private long documentoIdentidade;
    private String endereco;


    public String getNomeCliente() {
        return nomeCliente;
    }

    public void setNomeCliente(String nomeCliente) {
        this.nomeCliente = nomeCliente;
    }

    public long getDocumentoIdentidade() {
        return documentoIdentidade;
    }

    public void setDocumentoIdentidade(long documentoIdentidade) {
        this.documentoIdentidade = documentoIdentidade;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
}
