export interface Button {
    content: string;
    backgroundColor: string;
    width: string;
    color: string;
    disabled?: boolean;
    buttonClickHandler: Function;
}