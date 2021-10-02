import StringUtil from "./StringUtil";
import TypeGuard from "./TypeGuard";

export default class ReliableTxtDocument {

    public static join(lines: string[]): string {
        TypeGuard.assureStringArray(lines);

        return new ReliableTxtDocument(...lines).toString();
    }

    public text: string = "";

    constructor(...args: string[]) {
        TypeGuard.assureStringArray(args);

        this.text = args.join("\n");
        return this;
    }

    public setText(text: string): void {
        TypeGuard.assureString(text);

        if (text !== null && text !== undefined) {
            this.text = text;
        }
    }

    public setTextByCodePoints(codePoints: number[]): void {
        TypeGuard.assureNumberArray(codePoints);

        if (codePoints !== null &&
            codePoints !== undefined &&
            Array.isArray(codePoints)) {
            this.text = StringUtil.codePointsToString(codePoints);
        }
    }

    public getText(): string {
        return this.text;
    }

    public getTextAsCodePoints(): number[] {
        return StringUtil.stringToCodePoints(this.text);
    }

    public setLines(...lines: string[]): void {
        TypeGuard.assureStringArray(lines);

        this.text = lines.join("\n");
    }

    public getLines(): string[] {
        return this.text.split("\n");
    }

    public toString(): string {
        return this.text;
    }

}
