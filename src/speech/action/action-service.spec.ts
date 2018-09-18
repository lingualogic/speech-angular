/**
 * Unit-Test von ActionService
 *
 * Letzter Aenderung: 15.09.2018
 *
 * @module speech/action
 * @author SB
 */


// action

import { ActionServiceConfig } from './action-service-config';
import { ActionService } from './action-service';


// Testklasse

class TestActionService extends ActionService {

    constructor() {
        ActionService.setConstructorInitOff();
        super();
    }

    setOption( aOption: any): void {
        this._setOption( aOption );
    }

    mapOption( aOption: any): any {
        return this._mapOption( aOption );
    }

    error( aFuncName: string, aErrorText: string ): void {
        this._error( aFuncName, aErrorText );
    }

    exception( aFuncName: string, aException: any ): void {
        this._exception( aFuncName, aException );
    }

    addAllEvent(): number {
        return this._addAllEvent();
    }

    get errorOutputFlag() {
        return this.mErrorOutputFlag;
    }

}

// Tests

describe('ActionService', () => {

    let actionService: TestActionService;

    beforeAll(() => {
        console.log('ActionService Unit-Tests gestartet...');
    });

    beforeEach(() => {
        actionService = new TestActionService();
        actionService.setErrorOutputOff();
    });

    afterEach(() => {
        actionService.setErrorOutputOff();
        actionService.reset();
        actionService = null;
    });

    // setConstructorInitOn/Off

    describe('Funktion setConstructorInitOn/Off', () => {

        it('sollte constructorInitFlag ein/ausschalten', () => {
            ActionService.setConstructorInitOn();
            expect( ActionService.isConstructorInit()).toBe( true );
            ActionService.setConstructorInitOff();
            expect( ActionService.isConstructorInit()).toBe( false );
            ActionService.setConstructorInitOn();
            expect( ActionService.isConstructorInit()).toBe( true );
        });

    });

    // getConfig

    describe('Function getConfig', () => {

        it('sollte ServiceConfig zurueckgeben', () => {
            const config = ActionService.getConfig();
            expect( config ).toBe( ActionServiceConfig );
        });

    });

    // constructor

    describe('Funktion constructor', () => {

        it('sollte erzeugt sein, ohne init auszufuehren', () => {
            expect( actionService ).toBeTruthy();
            expect( actionService.isInit()).toBe( false );
        });

        it('sollte service vorhanden sein, wenn mit init erzeugt', () => {
            ActionService.setConstructorInitOn();
            const service = new ActionService();
            expect( service ).toBeTruthy();
            expect( service.isInit()).toBeTruthy();
            expect( service.active ).toBe( ActionServiceConfig.activeFlag );
            expect( service.errorOutput ).toEqual( ActionServiceConfig.errorOutputFlag );
            service.reset();
            service.setErrorOutputOff();
        });

        it('sollte service vorhanden sein, wenn mit init erzeugt und config angepasst', () => {
            const config = ActionService.getConfig();
            config.errorOutputFlag = true;
            ActionService.setConstructorInitOn();
            const service = new ActionService();
            expect( service ).toBeTruthy();
            expect( service.isInit()).toBeTruthy();
            expect( service.active ).toBe( true );
            expect( service.errorOutput ).toEqual( true );
            service.reset();
            service.setErrorOutputOff();
        });

    });

    // _setOption

    describe('Funktion _setOption', () => {

        it('sollte error output auf true setzen, wenn option error output true', () => {
            expect(actionService.init()).toBe(0);
            actionService.setOption({ errorOutputFlag: true });
            expect(actionService.errorOutputFlag).toBe(true);
            expect(actionService.isErrorOutput()).toBe(true);
        });

        it('sollte error output auf false setzen, wenn option error output false', () => {
            expect(actionService.init()).toBe(0);
            actionService.setOption({ errorOutputFlag: false });
            expect(actionService.errorOutputFlag).toBe(false);
            expect(actionService.isErrorOutput()).toBe(false);
        });

    });

    // _mapOption

    describe('Funktion _mapOption', () => {

        it('sollte error output auf true setzen, wenn option error output true', () => {
            const option = actionService.mapOption({ errorOutputFlag: true });
            expect(option).toEqual({ errorOutputFlag: true });
            expect(actionService.errorOutputFlag).toBe(true);
        });

        it('sollte error output auf false setzen, wenn option error output false', () => {
            const option = actionService.mapOption({ errorOutputFlag: false });
            expect(option).toEqual({ errorOutputFlag: false });
            expect(actionService.errorOutputFlag).toBe(false);
        });

    });

    // init

    describe('Funktion init', () => {

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.isActive()).toBe( true );
            expect(actionService.getActionName()).toBe('');
            expect(actionService.getElementType()).toBe('');
            expect(actionService.getElementName()).toBe('');
        });

        it('sollte 0 zurueckgeben, wenn init zweimal aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.init()).toBe(0);
        });

    });

    // reset

    describe('Funktion reset', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('ActionService.reset: Action nicht vorhanden');
                done();
            });
            expect(actionService.reset()).toBe( -1 );
            expect(actionService.isActive()).toBe( false );
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.reset()).toBe(0);
            expect(actionService.isActive()).toBe( true );
            expect(actionService.getActionName()).toBe('');
            expect(actionService.getElementType()).toBe('');
            expect(actionService.getElementName()).toBe('');
        });

    });

    // isInit

    describe('Funktion istInit', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            expect(actionService.isInit()).toBe(false);
        });

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde sondern nur reset', () => {
            expect(actionService.reset()).toBe(-1);
            expect(actionService.isInit()).toBe(false);
        });

        it('sollte true zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.isInit()).toBe(true);
        });

        it('sollte true zurueckgeben, wenn init und reset aufgerufen wurden', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.isInit()).toBe(true);
            expect(actionService.reset()).toBe(0);
            expect(actionService.isInit()).toBe(true);
        });

    });

    // isActive

    describe('Funktion istActive', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            expect(actionService.isActive()).toBe( false );
        });

        it('sollte true zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.isActive()).toBe( true );
        });

        it('sollte false zurueckgeben, wenn init aufgerufen wurde und active aus ist', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.setActiveOff()).toBe(0);
            expect(actionService.isActive()).toBe( false );
        });

        it('sollte true zurueckgeben, wenn init aufgerufen wurde und active an ist', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.setActiveOff()).toBe(0);
            expect(actionService.setActiveOn()).toBe(0);
            expect(actionService.isActive()).toBe( true );
        });

    });

    // setActiveOn

    describe('Funktion setActiveOn', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            expect(actionService.setActiveOn()).toBe(-1);
            expect(actionService.isActive()).toBe( false );
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.setActiveOn()).toBe(0);
            expect(actionService.isActive()).toBe( true );
        });

    });

    // setActiveOff

    describe('Funktion setActiveOff', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            expect(actionService.setActiveOff()).toBe(-1);
            expect(actionService.isActive()).toBe( false );
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.setActiveOff()).toBe(0);
            expect(actionService.isActive()).toBe( false );
        });

    });

    // active

    describe('Eigenschaft active', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen und auf true gesetzt wurde', () => {
            actionService.active = true;
            expect( actionService.active ).toBe( false );
        });

        it('sollte true zurueckgeben, wenn init aufgerufen und auf true gesetzt wurde', () => {
            expect( actionService.init()).toBe( 0 );
            actionService.active = true;
            expect( actionService.active ).toBe( true );
        });

        it('sollte false zurueckgeben, wenn init aufgerufen und auf false gesetzt wurde', () => {
            expect( actionService.init()).toBe( 0 );
            actionService.active = false;
            expect( actionService.active ).toBe( false );
        });

    });

    // isErrorOutput

    describe('Funktion isErrorOutput', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            expect(actionService.isErrorOutput()).toBe( false );
        });

        it('sollte false zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.isErrorOutput()).toBe( false );
        });

        it('sollte true zurueckgeben, wenn initaufgrufen wurde und error output an ist', () => {
            expect(actionService.init()).toBe(0);
            actionService.setErrorOutputOn();
            expect(actionService.isErrorOutput()).toBe( true );
        });

        it('sollte false zurueckgeben, wenn init aufgerufen wurde und error output aus ist', () => {
            expect(actionService.init()).toBe(0);
            actionService.setErrorOutputOn();
            actionService.setErrorOutputOff();
            expect(actionService.isErrorOutput()).toBe( false );
        });

    });

    // setErrorOutputOn

    describe('Funktion setErrorOutputOn', () => {

        it('sollte true zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            actionService.setErrorOutputOn();
            expect(actionService.isErrorOutput()).toBe( true );
        });

        it('sollte true zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            actionService.setErrorOutputOn();
            expect(actionService.isErrorOutput()).toBe( true );
        });

    });

    // setErrorOutputOff

    describe('Funktion setErrorOutputOff', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            actionService.setErrorOutputOff();
            expect(actionService.isErrorOutput()).toBe( false );
        });

        it('sollte false zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            actionService.setErrorOutputOff();
            expect(actionService.isErrorOutput()).toBe( false );
        });

    });

    // errorOutput

    describe('Eigenschaft errorOutput', () => {

        it('sollte true zurueckgeben, wenn init nicht aufgerufen und auf true gesetzt wurde', () => {
            actionService.errorOutput = true;
            expect( actionService.errorOutput ).toBe( true );
        });

        it('sollte false zurueckgeben, wenn init nicht aufgerufen und auf false gesetzt wurde', () => {
            actionService.errorOutput = false;
            expect( actionService.errorOutput ).toBe( false );
        });

        it('sollte true zurueckgeben, wenn init aufgerufen und auf true gesetzt wurde', () => {
            expect( actionService.init()).toBe( 0 );
            actionService.errorOutput = true;
            expect( actionService.errorOutput ).toBe( true );
        });

        it('sollte false zurueckgeben, wenn init aufgerufen und auf false gesetzt wurde', () => {
            expect( actionService.init()).toBe( 0 );
            actionService.errorOutput = false;
            expect( actionService.errorOutput ).toBe( false );
        });

    });

    // _error

    // _exception

    // _addAllEvent

    describe('Funktion _addAllEvent', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('ActionService._addAllEvent: keine Action-Komponente vorhanden');
                done();
            });
            expect(actionService.addAllEvent()).toBe(-1);
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.addAllEvent()).toBe(0);
        });

    });

    // xxxEvent

    describe('Eigenschaft xEvent', () => {

        it('sollte alle Eventfunktionen zurueckgeben', () => {
            expect(actionService.startEvent).toBeTruthy();
            expect(actionService.stopEvent).toBeTruthy();
            expect(actionService.errorEvent).toBeTruthy();
        });

    });

    // setActionName

    describe('Funktion setActionName', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('ActionService.setActionName: keine Action-Komponente vorhanden');
                done();
            });
            expect(actionService.setActionName( 'TestAction' )).toBe(-1);
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.setActionName( 'TestAction' )).toBe(0);
            expect(actionService.getActionName()).toEqual( 'TestAction' );
        });

    });

    // getActionName

    describe('Funktion getActionName', () => {


        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('ActionService.getActionName: keine Action-Komponente vorhanden');
                done();
            });
            expect(actionService.getActionName()).toBe('');
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.getActionName()).toEqual( '' );
        });

    });

    // action

    describe('Eigenschaft action', () => {

        it('sollte leere Aktion zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual( 'ActionService.getActionName: keine Action-Komponente vorhanden' );
                done();
            });
            expect( actionService.action ).toBe( '' );
        });

        it('sollte Aktion nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual( 'ActionService.setActionName: keine Action-Komponente vorhanden' );
                done();
            });
            actionService.action = '';
        });

        it('sollte Aktion setzen, wenn init aufgerufen wurde', () => {
            expect( actionService.init()).toBe( 0 );
            actionService.action = 'TestAction';
            expect( actionService.action ).toBe( 'TestAction' );
        });

    });

    // setElementType

    describe('Funktion setElementType', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('ActionService.setElementType: keine Action-Komponente vorhanden');
                done();
            });
            expect(actionService.setElementType( 'TestType' )).toBe(-1);
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.setElementType( 'TestType' )).toBe(0);
            expect(actionService.getElementType()).toEqual( 'TestType' );
        });

    });

    // getElementType

    describe('Funktion getElementType', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('ActionService.getElementType: keine Action-Komponente vorhanden');
                done();
            });
            expect(actionService.getElementType()).toBe('');
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.getElementType()).toEqual( '' );
        });

    });

    // type

    describe('Eigenschaft type', () => {

        it('sollte leeren ElementType zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual( 'ActionService.getElementType: keine Action-Komponente vorhanden' );
                done();
            });
            expect( actionService.type ).toBe( '' );
        });

        it('sollte ElementType nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual( 'ActionService.setElementType: keine Action-Komponente vorhanden' );
                done();
            });
            actionService.type = '';
        });

        it('sollte ElementType setzen, wenn init aufgerufen wurde', () => {
            expect( actionService.init()).toBe( 0 );
            actionService.type = 'TestType';
            expect( actionService.type ).toBe( 'TestType' );
        });

    });

    // setElementName

    describe('Funktion setElementName', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('ActionService.setElementName: keine Action-Komponente vorhanden');
                done();
            });
            expect(actionService.setElementName( 'TestElement' )).toBe(-1);
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.setElementName( 'TestElement' )).toBe(0);
            expect(actionService.getElementName()).toEqual( 'TestElement' );
        });

    });

    // getElementName

    describe('Funktion getElementName', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('ActionService.getElementName: keine Action-Komponente vorhanden');
                done();
            });
            expect(actionService.getElementName()).toBe('');
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.getElementName()).toEqual( '' );
        });

    });

    // element

    describe('Eigenschaft element', () => {

        it('sollte leeren ElementName zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual( 'ActionService.getElementName: keine Action-Komponente vorhanden' );
                done();
            });
            expect( actionService.element ).toBe( '' );
        });

        it('sollte ElementName nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual( 'ActionService.setElementName: keine Action-Komponente vorhanden' );
                done();
            });
            actionService.element = '';
        });

        it('sollte ElementName setzen, wenn init aufgerufen wurde', () => {
            expect( actionService.init()).toBe( 0 );
            actionService.element = 'TestElement';
            expect( actionService.element ).toBe( 'TestElement' );
        });

    });

    // isRunning

    describe('Funktion isRunning', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            expect(actionService.isRunning()).toBe(false);
        });

        it('sollte false zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.isRunning()).toBe(false);
        });

        it('sollte true zurueckgeben, wenn init und start aufgerufen wurden', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.isRunning()).toBe(false);
            expect(actionService.setActionName( 'TestAction' )).toBe(0);
            expect(actionService.setElementName( 'TestElement' )).toBe(0);
            expect(actionService.start()).toBe(0);
            expect(actionService.isRunning()).toBe(true);
            expect(actionService.stop()).toBe(0);
            expect(actionService.isRunning()).toBe(false);
        });

    });

    // start

    describe('Funktion start', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                // tslint:disable-next-line
                expect(aError.message).toEqual("EXCEPTION ActionService.start: Cannot read property 'startAction' of null");
                done();
            });
            expect(actionService.start()).toBe(-1);
        });

        it('sollte -1 zurueckgeben, wenn init aufgerufen wurde und kein action name', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.isRunning()).toBe(false);
            expect(actionService.start()).toBe(-1);
            expect(actionService.isRunning()).toBe(false);
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde und ein action name', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.isRunning()).toBe(false);
            expect(actionService.setActionName( 'TestAction' )).toBe(0);
            expect(actionService.setElementName( 'TestElement' )).toBe(0);
            expect(actionService.start()).toBe(0);
            expect(actionService.isRunning()).toBe(true);
            expect(actionService.stop()).toBe(0);
        });

    });

    // stop

    describe('Funktion stop', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                // tslint:disable-next-line
                expect(aError.message).toEqual("EXCEPTION ActionService.stop: Cannot read property 'stopAction' of null");
                done();
            });
            expect(actionService.stop()).toBe(-1);
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde und kein start', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.isRunning()).toBe(false);
            expect(actionService.stop()).toBe(0);
            expect(actionService.isRunning()).toBe(false);
        });

        it('sollte 0 zurueckgeben, wenn init und start aufgerufen wurden', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.isRunning()).toBe(false);
            expect(actionService.setActionName( 'TestAction' )).toBe(0);
            expect(actionService.setElementName( 'TestElement' )).toBe(0);
            expect(actionService.start()).toBe(0);
            expect(actionService.isRunning()).toBe(true);
            expect(actionService.stop()).toBe(0);
            expect(actionService.isRunning()).toBe(false);
        });

    });

    // addFunction

    describe('Funktion addFunction', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                // tslint:disable-next-line
                expect(aError.message).toEqual("EXCEPTION ActionService.addFunction: Cannot read property 'addFunction' of null");
                done();
            });
            expect(actionService.addFunction( '', null, null )).toBe(-1);
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.addFunction( 'TestFunction', () => 0, () => 0)).toBe(0);
        });

    });

    // removeFunction

    describe('Funktion removeFunction', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                // tslint:disable-next-line
                expect(aError.message).toEqual("EXCEPTION ActionService.removeFunction: Cannot read property 'removeFunction' of null");
                done();
            });
            expect(actionService.removeFunction( '' )).toBe(-1);
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.removeFunction( 'TestFunction')).toBe(0);
        });

    });

    // addElement

    describe('Funktion addElement', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                // tslint:disable-next-line
                expect(aError.message).toEqual("EXCEPTION ActionService.addElement: Cannot read property 'addElement' of null");
                done();
            });
            expect(actionService.addElement( '', null, null )).toBe(-1);
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.addElement( 'TestElement', () => 0, () => 0)).toBe(0);
        });

    });

    // removeElement

    describe('Funktion removeElement', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = actionService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                // tslint:disable-next-line
                expect(aError.message).toEqual("EXCEPTION ActionService.removeElement: Cannot read property 'removeElement' of null");
                done();
            });
            expect(actionService.removeElement( '' )).toBe(-1);
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(actionService.init()).toBe(0);
            expect(actionService.removeElement( 'TestElement')).toBe(0);
        });

    });

});
