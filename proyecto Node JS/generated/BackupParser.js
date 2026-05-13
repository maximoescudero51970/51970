// Generated from c:/Users/maxim/OneDrive/Documentos/proyecto Node JS/Backup.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BackupListener from './BackupListener.js';
import BackupVisitor from './BackupVisitor.js';

const serializedATN = [4,1,10,68,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,1,1,
1,1,3,1,28,8,1,1,1,4,1,31,8,1,11,1,12,1,32,1,1,1,1,1,2,1,2,1,3,1,3,3,3,41,
8,3,1,3,1,3,3,3,45,8,3,1,3,1,3,3,3,49,8,3,1,3,1,3,3,3,53,8,3,3,3,55,8,3,
1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,
0,0,69,0,17,1,0,0,0,2,23,1,0,0,0,4,36,1,0,0,0,6,54,1,0,0,0,8,56,1,0,0,0,
10,59,1,0,0,0,12,62,1,0,0,0,14,65,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,
19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,5,0,0,1,22,1,
1,0,0,0,23,24,5,1,0,0,24,25,3,4,2,0,25,27,5,7,0,0,26,28,5,9,0,0,27,26,1,
0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,31,3,6,3,0,30,29,1,0,0,0,31,32,1,0,
0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,34,1,0,0,0,34,35,5,8,0,0,35,3,1,0,0,0,
36,37,5,6,0,0,37,5,1,0,0,0,38,40,3,8,4,0,39,41,5,9,0,0,40,39,1,0,0,0,40,
41,1,0,0,0,41,55,1,0,0,0,42,44,3,14,7,0,43,45,5,9,0,0,44,43,1,0,0,0,44,45,
1,0,0,0,45,55,1,0,0,0,46,48,3,10,5,0,47,49,5,9,0,0,48,47,1,0,0,0,48,49,1,
0,0,0,49,55,1,0,0,0,50,52,3,12,6,0,51,53,5,9,0,0,52,51,1,0,0,0,52,53,1,0,
0,0,53,55,1,0,0,0,54,38,1,0,0,0,54,42,1,0,0,0,54,46,1,0,0,0,54,50,1,0,0,
0,55,7,1,0,0,0,56,57,5,2,0,0,57,58,5,6,0,0,58,9,1,0,0,0,59,60,5,4,0,0,60,
61,5,6,0,0,61,11,1,0,0,0,62,63,5,5,0,0,63,64,5,6,0,0,64,13,1,0,0,0,65,66,
5,3,0,0,66,15,1,0,0,0,8,19,27,32,40,44,48,52,54];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BackupParser extends antlr4.Parser {

    static grammarFileName = "Backup.g4";
    static literalNames = [ null, "'accion'", "'moverArchivo'", "'usarEscaneoProfundo'", 
                            "'retornar'", "'notificar'", null, "'{'", "'}'" ];
    static symbolicNames = [ null, "ACC", "MOVER", "ESCANEO", "RETORNAR", 
                             "NOTIFICAR", "STRING", "LKEY", "RKEY", "NEWLINE", 
                             "WS" ];
    static ruleNames = [ "dsl", "accion", "nombreaccion", "comando", "moverArchivo", 
                         "retornar", "notificar", "usarEscaneoProfundo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BackupParser.ruleNames;
        this.literalNames = BackupParser.literalNames;
        this.symbolicNames = BackupParser.symbolicNames;
    }



	dsl() {
	    let localctx = new DslContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BackupParser.RULE_dsl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.accion();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 21;
	        this.match(BackupParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BackupParser.RULE_accion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(BackupParser.ACC);
	        this.state = 24;
	        this.nombreaccion();
	        this.state = 25;
	        this.match(BackupParser.LKEY);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 26;
	            this.match(BackupParser.NEWLINE);
	        }

	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 29;
	            this.comando();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0));
	        this.state = 34;
	        this.match(BackupParser.RKEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreaccion() {
	    let localctx = new NombreaccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BackupParser.RULE_nombreaccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(BackupParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BackupParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.moverArchivo();
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9) {
	                this.state = 39;
	                this.match(BackupParser.NEWLINE);
	            }

	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.usarEscaneoProfundo();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9) {
	                this.state = 43;
	                this.match(BackupParser.NEWLINE);
	            }

	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.retornar();
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9) {
	                this.state = 47;
	                this.match(BackupParser.NEWLINE);
	            }

	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.notificar();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9) {
	                this.state = 51;
	                this.match(BackupParser.NEWLINE);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	moverArchivo() {
	    let localctx = new MoverArchivoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BackupParser.RULE_moverArchivo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(BackupParser.MOVER);
	        this.state = 57;
	        this.match(BackupParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retornar() {
	    let localctx = new RetornarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BackupParser.RULE_retornar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(BackupParser.RETORNAR);
	        this.state = 60;
	        this.match(BackupParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	notificar() {
	    let localctx = new NotificarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BackupParser.RULE_notificar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(BackupParser.NOTIFICAR);
	        this.state = 63;
	        this.match(BackupParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	usarEscaneoProfundo() {
	    let localctx = new UsarEscaneoProfundoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BackupParser.RULE_usarEscaneoProfundo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(BackupParser.ESCANEO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

BackupParser.EOF = antlr4.Token.EOF;
BackupParser.ACC = 1;
BackupParser.MOVER = 2;
BackupParser.ESCANEO = 3;
BackupParser.RETORNAR = 4;
BackupParser.NOTIFICAR = 5;
BackupParser.STRING = 6;
BackupParser.LKEY = 7;
BackupParser.RKEY = 8;
BackupParser.NEWLINE = 9;
BackupParser.WS = 10;

BackupParser.RULE_dsl = 0;
BackupParser.RULE_accion = 1;
BackupParser.RULE_nombreaccion = 2;
BackupParser.RULE_comando = 3;
BackupParser.RULE_moverArchivo = 4;
BackupParser.RULE_retornar = 5;
BackupParser.RULE_notificar = 6;
BackupParser.RULE_usarEscaneoProfundo = 7;

class DslContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BackupParser.RULE_dsl;
    }

	EOF() {
	    return this.getToken(BackupParser.EOF, 0);
	};

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.enterDsl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.exitDsl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BackupVisitor ) {
	        return visitor.visitDsl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BackupParser.RULE_accion;
    }

	ACC() {
	    return this.getToken(BackupParser.ACC, 0);
	};

	nombreaccion() {
	    return this.getTypedRuleContext(NombreaccionContext,0);
	};

	LKEY() {
	    return this.getToken(BackupParser.LKEY, 0);
	};

	RKEY() {
	    return this.getToken(BackupParser.RKEY, 0);
	};

	NEWLINE() {
	    return this.getToken(BackupParser.NEWLINE, 0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BackupVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreaccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BackupParser.RULE_nombreaccion;
    }

	STRING() {
	    return this.getToken(BackupParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.enterNombreaccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.exitNombreaccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BackupVisitor ) {
	        return visitor.visitNombreaccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BackupParser.RULE_comando;
    }

	moverArchivo() {
	    return this.getTypedRuleContext(MoverArchivoContext,0);
	};

	NEWLINE() {
	    return this.getToken(BackupParser.NEWLINE, 0);
	};

	usarEscaneoProfundo() {
	    return this.getTypedRuleContext(UsarEscaneoProfundoContext,0);
	};

	retornar() {
	    return this.getTypedRuleContext(RetornarContext,0);
	};

	notificar() {
	    return this.getTypedRuleContext(NotificarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BackupVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MoverArchivoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BackupParser.RULE_moverArchivo;
    }

	MOVER() {
	    return this.getToken(BackupParser.MOVER, 0);
	};

	STRING() {
	    return this.getToken(BackupParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.enterMoverArchivo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.exitMoverArchivo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BackupVisitor ) {
	        return visitor.visitMoverArchivo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BackupParser.RULE_retornar;
    }

	RETORNAR() {
	    return this.getToken(BackupParser.RETORNAR, 0);
	};

	STRING() {
	    return this.getToken(BackupParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.enterRetornar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.exitRetornar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BackupVisitor ) {
	        return visitor.visitRetornar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NotificarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BackupParser.RULE_notificar;
    }

	NOTIFICAR() {
	    return this.getToken(BackupParser.NOTIFICAR, 0);
	};

	STRING() {
	    return this.getToken(BackupParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.enterNotificar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.exitNotificar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BackupVisitor ) {
	        return visitor.visitNotificar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UsarEscaneoProfundoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BackupParser.RULE_usarEscaneoProfundo;
    }

	ESCANEO() {
	    return this.getToken(BackupParser.ESCANEO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.enterUsarEscaneoProfundo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BackupListener ) {
	        listener.exitUsarEscaneoProfundo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BackupVisitor ) {
	        return visitor.visitUsarEscaneoProfundo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




BackupParser.DslContext = DslContext; 
BackupParser.AccionContext = AccionContext; 
BackupParser.NombreaccionContext = NombreaccionContext; 
BackupParser.ComandoContext = ComandoContext; 
BackupParser.MoverArchivoContext = MoverArchivoContext; 
BackupParser.RetornarContext = RetornarContext; 
BackupParser.NotificarContext = NotificarContext; 
BackupParser.UsarEscaneoProfundoContext = UsarEscaneoProfundoContext; 
