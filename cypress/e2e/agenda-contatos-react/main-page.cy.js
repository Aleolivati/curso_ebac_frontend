/// <reference types="cypress" />

describe('Testes para o formulário e enviar os dados', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    });

    it('Deve renderizar o formulário ', () => {
        cy.get('.sc-gLDzan.ckeKmo > input').should('have.length', 3)
        cy.get('button.adicionar').should('have.length', 1)
    });

    it('Deve preencher o formulário de cadastro', () => {
        cy.get('input[placeholder="Nome"]').type('Alexandre').should('have.value', 'Alexandre')
        cy.get('input[placeholder="E-mail"]').type('ale@teste.com').should('have.value', 'ale@teste.com')
        cy.get('input[placeholder="Telefone"]').type('11 12345678').should('have.value', '11 12345678')

        cy.get('.adicionar').click()
    })

    it('Deve verificar envio dos dados', () => {

        cy.contains('li', 'Alexandre').should('exist')
        cy.contains('li', 'ale@teste.com').should('exist')
        cy.contains('li', '11 12345678').should('exist')

        // cy.request({
        //     method: 'GET',
        //     url: 'https://fake-api-tau.vercel.app/api/contatos'
        // }).then((response) => {
        //     expect(response.body.data[3].name).to.equal('Alexandre')
        //     expect(response.body.data[3].email).to.equal('ale@teste.com')
        //     expect(response.body.data[3].phone).to.equal('11 12345678')
        // })
    })

    it('Deve editar campos e cancelar ação', () => {
        cy.get('.edit').last().click()

        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="E-mail"]').clear().type('teste@teste.com')
        cy.get('input[placeholder="Telefone"]').clear().type('11 11111111')

        cy.get('.cancelar').click()

        cy.get('input[placeholder="Nome"]').should('have.value', '')
        cy.get('input[placeholder="E-mail"]').should('have.value', '')
        cy.get('input[placeholder="Telefone"]').should('have.value', '')
    })

    it('Deve editar campos e salvar ação', () => {
        cy.get('.edit').last().click()

        cy.get('input[placeholder="Nome"]').clear().type('Teste')
        cy.get('input[placeholder="E-mail"]').clear().type('teste@teste.com')
        cy.get('input[placeholder="Telefone"]').clear().type('11 11111111')

        cy.get('.alterar').click()

        cy.get('input[placeholder="Nome"]').should('have.value', '')
        cy.get('input[placeholder="E-mail"]').should('have.value', '')
        cy.get('input[placeholder="Telefone"]').should('have.value', '')

        cy.contains('li', 'Teste').should('be.visible')
        cy.contains('li', 'teste@teste.com').should('be.visible')
        cy.contains('li', '11 11111111').should('be.visible')
    })

    it('Deve deletar contato teste', () => {
        cy.get('.delete').last().click()

        cy.contains('li', 'Teste').should('not.exist')
        cy.contains('li', 'teste@teste.com').should('not.exist')
        cy.contains('li', '11 11111111').should('not.exist')
    })
})
