'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">game-rentalpl documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-066f596972991406a34f8b72b1adfab773e16b2aa0bd9d4dfb21ca4b6a3ddaa9449988cfaed3596e2b3bc5f9fe1f8063a1765d955cf7d42fc695f835cbc84ef2"' : 'data-target="#xs-components-links-module-AppModule-066f596972991406a34f8b72b1adfab773e16b2aa0bd9d4dfb21ca4b6a3ddaa9449988cfaed3596e2b3bc5f9fe1f8063a1765d955cf7d42fc695f835cbc84ef2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-066f596972991406a34f8b72b1adfab773e16b2aa0bd9d4dfb21ca4b6a3ddaa9449988cfaed3596e2b3bc5f9fe1f8063a1765d955cf7d42fc695f835cbc84ef2"' :
                                            'id="xs-components-links-module-AppModule-066f596972991406a34f8b72b1adfab773e16b2aa0bd9d4dfb21ca4b6a3ddaa9449988cfaed3596e2b3bc5f9fe1f8063a1765d955cf7d42fc695f835cbc84ef2"' }>
                                            <li class="link">
                                                <a href="components/AddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientDetailViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientDetailViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewAfterPaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewAfterPaymentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-066f596972991406a34f8b72b1adfab773e16b2aa0bd9d4dfb21ca4b6a3ddaa9449988cfaed3596e2b3bc5f9fe1f8063a1765d955cf7d42fc695f835cbc84ef2"' : 'data-target="#xs-injectables-links-module-AppModule-066f596972991406a34f8b72b1adfab773e16b2aa0bd9d4dfb21ca4b6a3ddaa9449988cfaed3596e2b3bc5f9fe1f8063a1765d955cf7d42fc695f835cbc84ef2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-066f596972991406a34f8b72b1adfab773e16b2aa0bd9d4dfb21ca4b6a3ddaa9449988cfaed3596e2b3bc5f9fe1f8063a1765d955cf7d42fc695f835cbc84ef2"' :
                                        'id="xs-injectables-links-module-AppModule-066f596972991406a34f8b72b1adfab773e16b2aa0bd9d4dfb21ca4b6a3ddaa9449988cfaed3596e2b3bc5f9fe1f8063a1765d955cf7d42fc695f835cbc84ef2"' }>
                                        <li class="link">
                                            <a href="injectables/ClientsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GameService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Account.html" data-type="entity-link" >Account</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountToAdd.html" data-type="entity-link" >AccountToAdd</a>
                            </li>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link" >Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClientRentals.html" data-type="entity-link" >ClientRentals</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClientToAdd.html" data-type="entity-link" >ClientToAdd</a>
                            </li>
                            <li class="link">
                                <a href="classes/Game.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="classes/Payment.html" data-type="entity-link" >Payment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Platform.html" data-type="entity-link" >Platform</a>
                            </li>
                            <li class="link">
                                <a href="classes/Receipt.html" data-type="entity-link" >Receipt</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rental.html" data-type="entity-link" >Rental</a>
                            </li>
                            <li class="link">
                                <a href="classes/Reservation.html" data-type="entity-link" >Reservation</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});