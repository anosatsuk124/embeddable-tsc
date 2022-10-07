import ts from 'typescript';

const transpile = (source: string): string => {
    let result = ts.transpileModule(source, {
        compilerOptions: {
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES5,
        },
    });

    return result.outputText;
};

console.log(transpile("let x: string  = 'string'"));

export default transpile;
