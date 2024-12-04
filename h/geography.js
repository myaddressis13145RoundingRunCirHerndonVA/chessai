self.__uv$config = {
    prefix: '/chessai/',
    bare: 'https://void.radio.fm/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: './h/algebra.js',
    bundle: './h/mathematics.js',
    config: './h/geography.js',
    sw: './h/english.js',
};
