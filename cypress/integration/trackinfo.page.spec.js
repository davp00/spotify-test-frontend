describe('Track/[id] Page', () => {
  context('Test', () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
    });

    describe('When you visit track info page', () => {
      it('should visit home page', () => {
        cy.visit('/track/0oEweHsuQagFuqXct9UvBm');
      });
    });

    describe('Head information', () => {
      it('should render album cover', function () {
        cy.get('[data-cy=album-cover-picture]');
      });

      it('should render track name and artists', () => {
        cy.get('[data-cy=head-track-name]').contains('What You Know');
        cy.get('[data-cy=head-track-artists]');
      });

      it('should go to spotify artist profile', function () {
        cy.get('[data-cy=btn-artist-spotify-link')
          .should('have.attr', 'target', '_blank')
          .should('have.attr', 'rel', 'noreferrer')
          .should('have.attr', 'href')
          .then((href) => {
            expect(href).contains('artist');
          });
      });
    });

    describe('Track Details', () => {
      it('should render album name', function () {
        cy.get('[data-cy=track-details-album]').contains('Tourist History');
      });

      it('should render track preview', function () {
        cy.get('[data-cy=track-details-preview]');
      });
    });
  });
});
