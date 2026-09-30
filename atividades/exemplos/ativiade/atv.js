const livro = {
    titulo: "A hípotese do amor",
    autor: "Ali hazelwood",
    paginas: 468,

    resumo () {
        return `${this.titulo} foi escrito por ${this.autor} e possui ${this.paginas} páginas.`;
    }
}
