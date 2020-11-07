import { ClassesFilterInterface } from "./ClassesFilterInterface";

export interface ClassesRequestInterface {
    query: ClassesFilterInterface;
}

export interface ClassesResponseInterface {
    statusCode: number;
    body: string;
}