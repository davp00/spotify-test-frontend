describe('Index Page', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  Cypress.config('responseTimeout', 65000);

  const value = 'What you know';

  context('1280x800 resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
    });

    describe('When you visit home page', () => {
      it('should visit home page', () => {
        cy.visit('/');
      });

      describe('search', () => {
        it('should has limit default value', () => {
          cy.get('[data-cy=limit-input]').should('have.value', '10');
        });

        it('should search tracks with limit 20', () => {
          const limit = '20';

          cy.get('[data-cy=query-input]')
            .type(value)
            .should('have.value', value);

          cy.get('[data-cy=limit-input]').clear();

          cy.get('[data-cy=limit-input]')
            .type(limit)
            .should('have.value', limit);

          cy.get('[data-cy=search-button]').click();

          cy.wait(500);

          cy.get('[data-cy=artist-row-links]').should('have.length', limit);
        });
      });

      describe('pagination', () => {
        it('should render pagination', () => {
          cy.get('[data-cy=ant-pagination]').should('have.length', 1);
          cy.get('[data-cy=ant-pagination]')
            .find('li')
            .its('length')
            .should('be.gt', 3);
        });

        it('should go next page', () => {
          cy.get('[data-cy=ant-pagination]')
            .find('li.ant-pagination-next')
            .click();

          cy.get('[data-cy=ant-pagination]').should(
            'have.attr',
            'data-page',
            2
          );
        });
      });

      describe('Item Actions', () => {
        function testHrefLink(dataCy, type) {
          cy.get(`[data-cy=${dataCy}`)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'rel', 'noreferrer')
            .should('have.attr', 'href')
            .then((href) => {
              expect(href).contains(type);
            });
        }

        it('should has spotify track link', () => {
          testHrefLink('btn-track-spotify-link', 'track');
        });

        it('should has spotify album link', () => {
          testHrefLink('btn-album-spotify-link', 'album');
        });

        it('should has spotify artist link', () => {
          testHrefLink('btn-artist-spotify-link', 'artist');
        });

        it('should go to app track info', () => {
          cy.get('[data-cy=btn-app-track-info]').then(($links) => {
            $links[5].click();
            cy.url().should('include', '/track/');
          });
        });
      });
    });
  });

  context('Iphone 5', () => {
    beforeEach(() => {
      cy.viewport(320, 568);
    });

    describe('When you visit home page', () => {
      it('should visit home page', () => {
        cy.visit('/');
      });

      it('should scroll to right', () => {
        cy.get('[data-cy=query-input]').type(value).should('have.value', value);
        cy.get('[data-cy=search-button]').click();

        cy.wait(500);

        cy.get('[data-cy=track-list-table]')
          .find('div.ant-table-content')
          .scrollTo('right');
      });
    });
  });
});
