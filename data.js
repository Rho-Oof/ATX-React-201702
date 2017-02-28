var fs = require ( 'fs' )

var words = fs.readFileSync ( '/usr/share/dict/words', 'utf8').split ( /\n/ )

var word = () => words [ Math.floor ( Math.random ( ) * words.length ) ]

var string = ( times ) => {
  let t = times
    , s = []
  while ( t-- > 0 )
    s.push ( word ( ) )
  return s.join ( ' ' )
}

var out = [ ]
  , count = 5000

while ( count-- ) {
  out.push ( { 
    string: string ( Math.random ( ) * 4 + 1 ),
    id: 5000 - count,
    visible: ( Math.random ( ) * 3 < 2 )
  } )
}

console.log ( JSON.stringify ( out ) )
