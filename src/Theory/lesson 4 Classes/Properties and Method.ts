class ReferenceItem5 {
    // numberOfPages: number;
    year?: number;
    private editor!: string;
    readonly name: string = 'no name';

    get getEditor(): string {
        return this.editor;
    }

    set sedEditor(newEditor: any) {
        this.editor = newEditor;
    }

    printChapterTitle(chapterNum: number): void {
    // print title her
    }
}

// @ts-ignore
let encyclopedia11 = new ReferenceItem5();
encyclopedia11.printChapterTitle(0);
