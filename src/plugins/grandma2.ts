import * as ts from "typescript";
import * as tstl from "typescript-to-lua";

const plugin: tstl.Plugin = {
    afterPrint(
        _: ts.Program,
        __: tstl.CompilerOptions,
        ___: tstl.EmitHost,
        result: tstl.ProcessedFile[],
    ) {
        // Add a comment to the start of all created Lua files
        for (const file of result) {
            file.code = file.code + "\n\nreturn main";
        }
    },
};

export default plugin;
