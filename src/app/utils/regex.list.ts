export class RegexList
{
    static ARG_PATTERN = new RegExp(/^[a-zA-Z_][a-zA-Z0-9_]*$/);
    static EMAIL_PATTERN = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}