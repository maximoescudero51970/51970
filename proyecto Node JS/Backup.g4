grammar Backup;

// ---------------- GRAMATICA ----------------

dsl
    : accion+ EOF
    ;

accion
    : ACC nombreaccion LKEY NEWLINE? comando+ RKEY
    ;

nombreaccion
    : STRING
    ;

comando
    : moverArchivo NEWLINE?
    | usarEscaneoProfundo NEWLINE?
    | retornar NEWLINE?
    | notificar NEWLINE?
    ;

moverArchivo
    : MOVER STRING
    ;

retornar
    : RETORNAR STRING
    ;

notificar
    : NOTIFICAR STRING
    ;

usarEscaneoProfundo
    : ESCANEO
    ;

// ---------------- LEXEMAS ----------------

ACC         : 'accion';
MOVER       : 'moverArchivo';
ESCANEO     : 'usarEscaneoProfundo';
RETORNAR    : 'retornar';
NOTIFICAR   : 'notificar';

STRING
    : '"' [a-zA-Z0-9_./ -]+ '"'
    ;

LKEY        : '{';
RKEY        : '}';

NEWLINE     : '\r'? '\n';

WS          : [ \t]+ -> skip;